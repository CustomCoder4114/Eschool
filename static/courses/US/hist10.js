// Eschool course: World History II (USA, high school, C3 Framework aligned)
// Loaded only for learners whose country is the USA. The list of the USA's
// course files is COURSE_FILES['US'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'world-history-2-us', name:'World History II', code:'WH 2', level:'grade-10', iconStyle:'fas', icon:'fa-globe-europe', color:'#4e342e',
          category:'Social Sciences',
          description:'Explore the birth of the modern world: Renaissance humanism and art, the printing press, the Protestant and Catholic Reformations, and the Scientific Revolution — from Copernicus and Galileo to Newton — with the global roots of these ideas.',
          longDescription:'World History II is a Grade 10 high-school social studies course covering world history from about 1300 to the present, aligned to the C3 Framework for Social Studies (Dimension 2: History; Dimension 3: Evaluating Sources and Using Evidence). Unit 1, Renaissance, Reformation and the Scientific Revolution, covers the Italian Renaissance and humanism, the Northern Renaissance and the printing press, the Protestant Reformation and the Catholic Reformation, and the Scientific Revolution, including its roots in earlier Greek, Islamic, Indian and Chinese knowledge. Later units cover the Age of Exploration and global exchange, absolutism and the Enlightenment, political revolutions, the Industrial Revolution, imperialism, the world wars, the Cold War, decolonization and globalization. Every lesson includes primary-source analysis, historical-thinking practice, an investigation, a quiz, an assignment with a four-level rubric, and a review.',
          modules:[
{
    name: '1.0 Renaissance, Reformation and the Scientific Revolution — Unit Overview',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Unit Overview</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🗺️ Unit 1.0: Renaissance, Reformation and the Scientific Revolution</h2>
    <p style="font-size:16px;">Welcome to World History II, the story of how the modern world was made. Between about 1300 and 1700, ideas about art, religion, knowledge and the universe changed so dramatically in Europe that historians often mark this period as the beginning of the modern era.</p>
    <p style="font-size:16px;">In this unit you will follow three connected movements — the Renaissance, the Reformation and the Scientific Revolution — and investigate how new technology, old ideas and global connections combined to transform how people saw themselves and the world.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#e3f2fd;">❓ Essential question for this unit:</strong> How did new ideas about art, faith and knowledge challenge traditional authority and help create the modern world?</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 What This Unit Is About</h3>
    <p>Each movement grew out of the one before. Renaissance humanists encouraged people to question and study for themselves; the printing press spread their ideas; religious reformers used the same tools to challenge the Church; and scientists applied questioning and observation to nature itself.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Topic</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Focus</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Standards connection</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 The Renaissance and the Reformation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The Italian Renaissance and humanism; the Northern Renaissance and the printing press; the Protestant and Catholic Reformations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">C3 D2.His.1, D2.His.2, D2.His.14; D3.1</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 The Scientific Revolution</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">From the geocentric to the heliocentric model; the scientific method and Newton; the global roots and impact of the Scientific Revolution</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">C3 D2.His.3, D2.His.5, D2.His.14, D2.His.16</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Unit Map</h3>
    <p>The unit has two topics. Each topic has three lessons, a historical investigation, a quiz, an assignment, a review and a summary.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #bcaaa4;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 The Renaissance and the Reformation <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Rebirth and Reform</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.1.1 The Italian Renaissance</li>
    <li>1.1.2 The Northern Renaissance and the Printing Press</li>
    <li>1.1.3 The Protestant and Catholic Reformations</li>
    <li>🧭 Investigation: Voices of the Reformation</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #bcaaa4;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 The Scientific Revolution <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: New Ways of Knowing</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.2.1 A New View of the Universe</li>
    <li>1.2.2 The Scientific Method and Isaac Newton</li>
    <li>1.2.3 The Global Roots and Impact of the Scientific Revolution</li>
    <li>🧭 Investigation: The Trial of Galileo</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Context (D2.His.1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining how time and place shaped the Renaissance and Reformation.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Change and continuity (D2.His.2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparing medieval and early modern ideas.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Perspectives (D2.His.4–5)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analyzing how reformers, church leaders and scientists saw events differently.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Causation (D2.His.14)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining the causes and effects of the printing press and the Reformation.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Argument (D2.His.16)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing evidence-based claims about the past.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for different beliefs</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Open-mindedness</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Honesty with evidence</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Art and culture</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Religion and society</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Science and technology</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 How to Study This Unit</p>
    <div>Keep a history notebook with a running timeline, a “people and ideas” chart and a source log. Use HIPP (historical context, intended audience, purpose, point of view) for every primary source.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The period studied in this unit is about:',
            options: ['3000–1000 BCE', '1300–1700', '1900–2000', '500–1000'],
            correct: 1,
            explanation: 'From the early Renaissance to Newton.'
        },
        {
            question: 'Which three movements does this unit cover?',
            options: ['Industrial Revolution, imperialism, world wars', 'River valleys, classical empires, religions', 'Renaissance, Reformation, Scientific Revolution', 'Cold War, decolonization, globalization'],
            correct: 2,
            explanation: 'The answer is Renaissance, Reformation, Scientific Revolution. They are closely connected.'
        },
        {
            question: 'Topic 1.2 focuses on:',
            options: ['The Cold War', 'Ancient Egypt', 'The Industrial Revolution', 'The Scientific Revolution'],
            correct: 3,
            explanation: 'Topic 1.2 studies new ways of knowing.'
        },
        {
            question: 'C3 D2.His.14 is about:',
            options: ['Map projections', 'Economics', 'Causes and effects', 'Voting'],
            correct: 2,
            explanation: 'The answer is Causes and effects. It concerns causation.'
        },
        {
            question: 'HIPP is used to:',
            options: ['Make maps', 'Measure time', 'Calculate dates', 'Analyze primary sources'],
            correct: 3,
            explanation: 'It stands for historical context, intended audience, purpose and point of view.'
        },
        {
            question: 'Why did these movements challenge traditional authority?',
            options: ['They banned all books', 'They encouraged people to question and look for evidence', 'They ended trade', 'They closed universities'],
            correct: 1,
            explanation: 'Questioning was central to all three.'
        }
    ]
},
{
    name: '1.0 Renaissance, Reformation and the Scientific Revolution — Learning Objectives',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Objectives</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🎯 Learning Objectives for Unit 1.0</h2>
    <p style="font-size:16px;">These objectives are based on the C3 Framework for Social Studies. Check them at the start and end of each topic.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌟 Unit Goals</h3>
    <p>By the end of this unit, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Explain the causes and characteristics of the Italian and Northern Renaissance. (D2.His.1)</li>
    <li>Analyze the effects of the printing press on the spread of ideas. (D2.His.14)</li>
    <li>Explain the causes, key figures and effects of the Protestant and Catholic Reformations. (D2.His.14)</li>
    <li>Compare the geocentric and heliocentric models and explain how new evidence changed scientific thinking. (D2.His.2)</li>
    <li>Describe the development of the scientific method and the achievements of key scientists.</li>
    <li>Analyze primary sources and use evidence from multiple sources to construct arguments. (D2.His.16, D3.1)</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📋 Learning Objectives and Standards by Topic</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #bcaaa4;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 The Renaissance and the Reformation</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain why the Renaissance began in Italy and describe humanism.</li>
    <li>Analyze the impact of the printing press on literacy and ideas.</li>
    <li>Explain Luther’s challenge to the Church and the spread of Protestantism.</li>
    <li>Describe the goals and results of the Catholic Reformation.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How did new ideas spread, and why did they divide Europe?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #bcaaa4;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 The Scientific Revolution</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Compare the geocentric and heliocentric models.</li>
    <li>Describe the contributions of Copernicus, Kepler, Galileo and Newton.</li>
    <li>Explain the steps and importance of the scientific method.</li>
    <li>Analyze the global roots and later impact of the Scientific Revolution.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How did observation and reason change what people believed about the universe?</em>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You make insightful claims, use specific evidence from several sources, and explain context and multiple perspectives.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Proficient (3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You make clear claims supported by accurate evidence and explanation.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Developing (2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You describe events accurately but your claims or evidence are incomplete.</td>
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
    <div>This unit includes religious history. Our goal is to understand what people believed and why events happened — not to judge which beliefs are right.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which objective belongs to Topic 1.2?',
            options: ['Explain why the Renaissance began in Italy', 'Describe the Catholic Reformation', 'Compare geocentric and heliocentric models', 'Analyze the printing press'],
            correct: 2,
            explanation: 'The answer is Compare geocentric and heliocentric models. Topic 1.2 is about science.'
        },
        {
            question: 'D2.His.16 asks students to:',
            options: ['Draw maps', 'Memorize dates', 'Write poems', 'Use evidence from multiple sources in an argument'],
            correct: 3,
            explanation: 'It is about argument with evidence.'
        },
        {
            question: 'When studying religious history in this course, our goal is to:',
            options: ['Understand beliefs and events without judging which beliefs are right', 'Decide which religion is correct', 'Avoid the topic', 'Argue for one church'],
            correct: 0,
            explanation: 'The answer is Understand beliefs and events without judging which beliefs are right. History seeks understanding.'
        },
        {
            question: 'At the Proficient (3) level, you:',
            options: ['Recall a few facts only', 'Avoid sources', 'Copy the textbook', 'Make clear claims supported by accurate evidence'],
            correct: 3,
            explanation: 'Proficient means supported claims.'
        },
        {
            question: 'The printing press is studied mainly as a:',
            options: ['Type of painting', 'Cause of the rapid spread of ideas', 'Religious ritual', 'Scientific law'],
            correct: 1,
            explanation: 'The answer is Cause of the rapid spread of ideas. It changed communication.'
        },
        {
            question: 'Topic 1.1’s essential question asks how ideas spread and why they:',
            options: ['Ended the Renaissance', 'Divided Europe', 'Created factories', 'Started the Cold War'],
            correct: 1,
            explanation: 'The Reformation split Christianity in Western Europe.'
        }
    ]
},
{
    name: '1.0 Renaissance, Reformation and the Scientific Revolution — Introduction',
    type: 'lesson',
    duration: '25 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Introduction</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🚪 Introduction: Questioning the World</h2>
    <p style="font-size:16px;">Imagine a world where most people cannot read, books are copied by hand and cost as much as a house, and almost everyone accepts that Earth sits motionless at the center of the universe. Then, within a few generations, books become cheap, millions of people learn to read, Europe’s church splits apart, and scientists prove that Earth moves around the Sun.</p>
    <p style="font-size:16px;">How did such enormous changes happen? This unit is the story of people who dared to ask questions — and of the tools that let their answers spread.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Key Terms Preview</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Renaissance</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">French for “rebirth”: a revival of interest in classical Greek and Roman learning and art</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Humanism</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">An intellectual movement focused on human potential, achievement and the study of classical texts</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reformation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A religious movement that challenged the Catholic Church and created Protestant churches</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scientific Revolution</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A shift toward understanding nature through observation, experiment and mathematics</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Your Historian’s Toolkit</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bcaaa4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">humanism</span><span style="background:#0b1a2e;border:1px solid #bcaaa4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">patron</span><span style="background:#0b1a2e;border:1px solid #bcaaa4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">perspective</span><span style="background:#0b1a2e;border:1px solid #bcaaa4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">printing press</span><span style="background:#0b1a2e;border:1px solid #bcaaa4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">indulgence</span><span style="background:#0b1a2e;border:1px solid #bcaaa4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Protestant</span><span style="background:#0b1a2e;border:1px solid #bcaaa4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Counter-Reformation</span><span style="background:#0b1a2e;border:1px solid #bcaaa4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">geocentric</span><span style="background:#0b1a2e;border:1px solid #bcaaa4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">heliocentric</span><span style="background:#0b1a2e;border:1px solid #bcaaa4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">hypothesis</span><span style="background:#0b1a2e;border:1px solid #bcaaa4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">empirical evidence</span><span style="background:#0b1a2e;border:1px solid #bcaaa4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">HIPP</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">✏️ Quick-Write (5 minutes)</h3>
    <p>Think of a time you questioned something everyone around you accepted. What made you question it? What happened? You will connect this to the thinkers in this unit.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗺️ Where in the World?</h3>
    <p>On a map of Europe and the Mediterranean, locate: Florence, Rome, Venice, Constantinople (Istanbul), Wittenberg, Geneva, London, Paris and the Netherlands. Mark the Ottoman Empire to the southeast.</p>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Before You Begin</p>
    <div>Bring your notebook and map to every lesson. When you study a person, record their dates, main idea or achievement and one primary source connected to them.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '“Renaissance” means:',
            options: ['Revolution', 'Rebirth', 'Reform', 'Religion'],
            correct: 1,
            explanation: 'It refers to the revival of classical learning.'
        },
        {
            question: 'Humanism focused on:',
            options: ['Only religious rules', 'Human potential and classical texts', 'Farming', 'Warfare'],
            correct: 1,
            explanation: 'Humanists studied Greek and Roman works.'
        },
        {
            question: 'Before the printing press, books in Europe were usually:',
            options: ['Cheap and common', 'Printed on computers', 'Copied by hand and very expensive', 'Banned completely'],
            correct: 2,
            explanation: 'Handwritten books took months.'
        },
        {
            question: 'The Reformation was mainly a:',
            options: ['Scientific discovery', 'Style of painting', 'Military alliance', 'Religious movement'],
            correct: 3,
            explanation: 'It challenged the Catholic Church.'
        },
        {
            question: 'Which city is in Italy?',
            options: ['Wittenberg', 'Geneva', 'London', 'Florence'],
            correct: 3,
            explanation: 'Florence was a center of the Renaissance.'
        },
        {
            question: 'The Scientific Revolution emphasized:',
            options: ['Observation, experiment and mathematics', 'Ancient authority alone', 'Superstition', 'Royal orders'],
            correct: 0,
            explanation: 'The answer is Observation, experiment and mathematics. Evidence became central.'
        }
    ]
},
{
    name: '1.1.1 The Italian Renaissance',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.1 The Renaissance and the Reformation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Rebirth and Reform</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.1: The Italian Renaissance</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn why the Renaissance began in the Italian city-states, what humanism was, and how artists, writers and patrons changed European culture.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> The Renaissance shaped ideas we still value — the importance of education, individual achievement and realistic art — and produced works such as the Mona Lisa and Michelangelo’s David that still inspire people today.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎨 Museums and art</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Architecture</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Liberal-arts education</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🗳️ Political thought</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎭 Theater</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔬 Science</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain the causes and characteristics of the Renaissance. (D2.His.1)</li>
    <li>Analyze how the printing press spread ideas. (D2.His.14)</li>
    <li>Explain the causes, key figures and effects of the Protestant and Catholic Reformations. (D2.His.14)</li>
    <li>Analyze primary sources from multiple perspectives. (D2.His.4, D3.1)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain why the Renaissance began in Italy.</li>
    <li>Define humanism and identify key humanists.</li>
    <li>Describe Renaissance artistic techniques and major artists.</li>
    <li>Analyze Machiavelli’s ideas about power.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> Why did a “rebirth” of learning begin in Italy around 1350?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In World History I you studied ancient Greece and Rome. Renaissance thinkers rediscovered and admired those classical civilizations.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>After the Black Death killed perhaps a third or more of Europe’s population in the mid-1300s, survivors faced a changed world. In the busy, wealthy city-states of northern Italy — Florence, Venice, Milan and Rome — scholars and artists began to look back to the achievements of ancient Greece and Rome for inspiration. This revival is called the <strong>Renaissance</strong>, French for “rebirth.”</p>
    <p>At the heart of the Renaissance was <strong>humanism</strong>, a movement that emphasized human potential, the study of classical texts and subjects such as history, poetry and philosophy (the humanities). Humanists did not reject religion, but they believed people could improve themselves through education and achievement.</p>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Renaissance = rebirth of classical learning. Humanism = belief in human potential, built on Greek and Roman ideas.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Historical Context</h3>
    <p>Several conditions made Italy the birthplace of the Renaissance. Its cities were rich from trade across the Mediterranean, and wealthy families such as the Medici of Florence acted as <strong>patrons</strong>, paying artists and scholars. Ruins of ancient Rome were all around. After the Ottoman Turks captured Constantinople in 1453, Greek scholars fled to Italy, bringing ancient manuscripts with them.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and when or where it applies. Use the example to see it in context.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Renaissance</strong>
    </p>
    <p style="margin:6px 0;">A period of renewed interest in classical art and learning, about 1300–1600.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> began in Italy</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Florence was a Renaissance center.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">humanism</strong>
    </p>
    <p style="margin:6px 0;">An intellectual movement focused on human potential and classical studies.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Renaissance Italy and Europe</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Petrarch is called the father of humanism.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">patron</strong>
    </p>
    <p style="margin:6px 0;">A wealthy person who financially supports artists or scholars.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Renaissance Italy</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The Medici were powerful patrons.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">secular</strong>
    </p>
    <p style="margin:6px 0;">Concerned with worldly rather than religious matters.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Renaissance and later</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Portraits of merchants were secular art.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">perspective</strong>
    </p>
    <p style="margin:6px 0;">An artistic technique that makes a flat image look three-dimensional.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Renaissance art</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Lines lead to a vanishing point.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">city-state</strong>
    </p>
    <p style="margin:6px 0;">An independent city and the territory it controls.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Renaissance Italy</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Florence and Venice were city-states.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Why Italy?</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 250" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Renaissance and Reformation Timeline</text><line x1="40" y1="130" x2="660" y2="130" stroke="#bcaaa4" stroke-width="3"/><text x="40" y="150" fill="#94a3b8" font-size="11" text-anchor="start">1330</text><text x="660" y="150" fill="#94a3b8" font-size="11" text-anchor="end">1560</text><line x1="104.2" y1="130" x2="104.2" y2="96" stroke="#94a3b8" stroke-width="1.5"/><circle cx="104.2" cy="130" r="6" fill="#fde68a"/><text x="104.2" y="58" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">1347</text><text x="104.2" y="74" fill="#e2e8f0" font-size="11" text-anchor="middle">Black Death</text><text x="104.2" y="88" fill="#cbd5e1" font-size="11" text-anchor="middle">reaches Europe</text><line x1="372" y1="130" x2="352" y2="164" stroke="#94a3b8" stroke-width="1.5"/><circle cx="372" cy="130" r="6" fill="#fde68a"/><text x="352" y="182" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">1450</text><text x="352" y="198" fill="#e2e8f0" font-size="11" text-anchor="middle">Gutenberg’s</text><text x="352" y="212" fill="#cbd5e1" font-size="11" text-anchor="middle">printing press (c.)</text><line x1="379.8" y1="130" x2="379.8" y2="96" stroke="#94a3b8" stroke-width="1.5"/><circle cx="379.8" cy="130" r="6" fill="#fde68a"/><text x="379.8" y="58" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">1453</text><text x="379.8" y="74" fill="#e2e8f0" font-size="11" text-anchor="middle">Fall of</text><text x="379.8" y="88" fill="#cbd5e1" font-size="11" text-anchor="middle">Constantinople</text><line x1="522.8" y1="130" x2="482.79999999999995" y2="164" stroke="#94a3b8" stroke-width="1.5"/><circle cx="522.8" cy="130" r="6" fill="#fde68a"/><text x="482.79999999999995" y="182" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">1508</text><text x="482.79999999999995" y="198" fill="#e2e8f0" font-size="11" text-anchor="middle">Sistine ceiling</text><text x="482.79999999999995" y="212" fill="#cbd5e1" font-size="11" text-anchor="middle">begun</text><line x1="546.2" y1="130" x2="526.2" y2="96" stroke="#94a3b8" stroke-width="1.5"/><circle cx="546.2" cy="130" r="6" fill="#fde68a"/><text x="526.2" y="58" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">1517</text><text x="526.2" y="74" fill="#e2e8f0" font-size="11" text-anchor="middle">Luther’s</text><text x="526.2" y="88" fill="#cbd5e1" font-size="11" text-anchor="middle">Ninety-Five Theses</text><line x1="590.4" y1="130" x2="620.4" y2="164" stroke="#94a3b8" stroke-width="1.5"/><circle cx="590.4" cy="130" r="6" fill="#fde68a"/><text x="620.4" y="182" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">1534</text><text x="620.4" y="198" fill="#e2e8f0" font-size="11" text-anchor="middle">Act of</text><text x="620.4" y="212" fill="#cbd5e1" font-size="11" text-anchor="middle">Supremacy</text><line x1="619" y1="130" x2="649" y2="96" stroke="#94a3b8" stroke-width="1.5"/><circle cx="619" cy="130" r="6" fill="#fde68a"/><text x="649" y="58" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">1545</text><text x="649" y="74" fill="#e2e8f0" font-size="11" text-anchor="middle">Council of</text><text x="649" y="88" fill="#cbd5e1" font-size="11" text-anchor="middle">Trent opens</text><text x="350" y="240" fill="#86efac" font-size="12" text-anchor="middle">Dates marked “c.” are approximate.</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Cause</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Explanation</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wealthy city-states</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trade and banking created rich merchants who could fund the arts.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Classical heritage</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Roman ruins and texts surrounded Italians and inspired admiration.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Patronage</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Families such as the Medici paid artists, architects and scholars.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Greek scholars</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">After 1453, scholars fleeing Constantinople brought Greek manuscripts to Italy.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">After the Black Death</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Survivors in some areas had more wealth and opportunities, and many questioned old certainties.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Renaissance Art and Artists</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Artist</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Dates</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Famous works</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Contribution</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Leonardo da Vinci</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1452–1519</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mona Lisa; The Last Supper</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Painter, inventor and scientist — the “Renaissance man”</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Michelangelo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1475–1564</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">David; Sistine Chapel ceiling (1508–1512)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sculpture and painting of the human body in powerful detail</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Raphael</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1483–1520</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The School of Athens</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Balanced, harmonious paintings honoring classical thinkers</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Filippo Brunelleschi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1377–1446</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Dome of Florence Cathedral</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Engineering and the rules of linear perspective</td>
    </tr>
    </table>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Medieval art</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Renaissance art</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly religious subjects</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Religious and secular subjects</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flat, symbolic figures</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Realistic, three-dimensional figures</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little use of perspective</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linear perspective and shading</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Artists often anonymous</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Artists famous as individuals</td>
    </tr>
    </table>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>A “Renaissance man” (or person) is someone skilled in many fields. Leonardo da Vinci is the classic example: he painted, designed machines, studied anatomy and filled notebooks with observations.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Renaissance Writers and Ideas</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Writer</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Work</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Main idea</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Francesco Petrarch (1304–1374)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Poems and letters</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Often called the father of humanism; collected classical manuscripts</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Baldassare Castiglione (1478–1529)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The Book of the Courtier</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The ideal gentleman is educated, graceful and skilled</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Niccolò Machiavelli (1469–1527)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The Prince (written 1513)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A practical guide to gaining and keeping power</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b2530;border-left:4px solid #06b6d4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">📖 Reading Text</p>
    <div>
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">From Machiavelli’s The Prince, Chapter 17 (public-domain translation)</p>
    <p style="margin:8px 0;">“…it is much safer to be feared than loved…”</p>
    <p style="margin:8px 0;"><em>Machiavelli argues that a ruler should ideally be both loved and feared, but if he must choose, fear is more reliable, because people’s love can change while fear of punishment does not. He also warns that a ruler should avoid being hated.</em>
    </p>
    </div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Sourcing The Prince with HIPP</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Use HIPP to analyze Machiavelli’s The Prince.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Historical context</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Italy was divided into rival city-states, often invaded by foreign armies; Machiavelli had served Florence’s government and lost his position.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Intended audience</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Lorenzo de’ Medici, ruler of Florence — Machiavelli dedicated the book to him.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Purpose</strong>
    </p>
    <div style="margin:6px 0 0 34px;">To offer practical advice on gaining and keeping power, and perhaps to win back a government role.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Point of view</strong>
    </p>
    <div style="margin:6px 0 0 34px;">An experienced diplomat who valued stability and believed politics should be judged by results.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> The Prince reflects a violent, divided Italy and a writer seeking influence; it presents a practical, results-focused view of power rather than an ideal one.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Context explains why Machiavelli valued strength and stability so highly.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What does “Renaissance” mean?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Rebirth.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Name two reasons the Renaissance began in Italy.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Any two: wealthy city-states, classical heritage, patrons, Greek scholars after 1453.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What technique made Renaissance paintings look three-dimensional?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Linear perspective.</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Contextualization</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Sourcing (HIPP)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing medieval and Renaissance art</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Causation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Analyzing primary sources</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Thinking Like a Historian</h3>
    <p>Historians debate how “new” the Renaissance really was. Medieval scholars had preserved many classical texts, and Islamic scholars had translated and studied Greek works for centuries. The Renaissance was less a sudden break than a shift in emphasis — toward individual achievement, realism and classical models — built on earlier foundations.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Machiavelli wrote that it is safer for a ruler to be feared than loved. Do you agree? Would your answer be different for a modern leader?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #bcaaa4;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 History in Today’s World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> The idea of a well-rounded education in many subjects — the humanities — comes from Renaissance humanism.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Leonardo da Vinci’s careful drawings of plants, water and landscapes show an early interest in observing nature closely.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Art historians, museum curators, architects and political scientists still study Renaissance art and Machiavelli’s ideas.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Who were the Medici?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think patronage.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A wealthy banking family of Florence who were major patrons of the arts.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Who painted the Mona Lisa?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: The “Renaissance man.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Leonardo da Vinci.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> What is secular art?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Not religious.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Art about worldly rather than religious subjects.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Make a chart comparing a medieval and a Renaissance painting (images provided by your teacher) in four categories: subject, realism, perspective and artist.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Debate Machiavelli’s claim that it is safer to be feared than loved, using one modern example each.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Create a “Renaissance museum” exhibit with one artist, one writer and one patron, including labels explaining their importance.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Take a virtual tour of a museum collection of Renaissance art online and choose one work to describe using the vocabulary of this lesson.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define humanism.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">An intellectual movement focused on human potential, achievement and the study of classical texts.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Name two Renaissance artists and one work by each.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">E.g. Leonardo — Mona Lisa; Michelangelo — David.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain the role of patrons in the Renaissance.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Wealthy families and the Church paid artists and scholars, allowing them to create works and spread new ideas.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> How did the fall of Constantinople in 1453 help the Renaissance?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Greek scholars fled to Italy with ancient manuscripts, increasing knowledge of classical works.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #bcaaa4;">
    <p style="margin:0 0 6px 0;color:#bcaaa4;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain why historians debate whether the Renaissance was a complete break from the Middle Ages.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Many classical texts had been preserved by medieval and Islamic scholars, so the Renaissance built on earlier learning; it was more a change in emphasis than a sudden break.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Give an example of someone today who could be called a “Renaissance person.” Explain your choice.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Answers vary; the person should be skilled in several different fields.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> D2.His.1: Explain how the conditions of Renaissance Italy shaped Machiavelli’s ideas in The Prince.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Italy was divided and frequently invaded, so Machiavelli emphasized strong, practical leadership that could keep order and defend the state.</div>
    </details>
    </div>
    </div>
    <div style="background:#2b1f1b;padding:20px;border-radius:12px;border:1px solid #bcaaa4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>The Renaissance, a rebirth of classical learning and art, began in the wealthy city-states of Italy around 1350. Humanism emphasized human potential and the study of Greek and Roman texts. Patrons such as the Medici supported artists like Leonardo, Michelangelo and Raphael, who used perspective and realism. Writers such as Petrarch, Castiglione and Machiavelli shaped new ideas about education and power.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Renaissance = rebirth, began in Italy.</li>
    <li>Humanism = human potential + classics.</li>
    <li>Patrons funded art; the Medici in Florence.</li>
    <li>Machiavelli: practical politics in The Prince.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Humanists were not anti-religious.</li>
    <li>Perspective made art realistic.</li>
    <li>The Renaissance built on earlier learning.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Thinking the Renaissance rejected religion.</li>
    <li>Mixing up Leonardo and Michelangelo.</li>
    <li>Seeing the Renaissance as a sudden break.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Link each artist to one work.</li>
    <li>Use HIPP on every primary source.</li>
    <li>Compare medieval and Renaissance features in a chart.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain causes, not just list them.</li>
    <li>Support claims with a named person or work.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.1 Context</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Why the Renaissance began in Italy.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.2 Change</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Medieval vs. Renaissance art.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D3.1 Sources</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analyzing The Prince.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Appreciation of art</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Critical thinking</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Arts and culture</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Leadership and government</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Renaissance ideals of learning, creativity and achievement still shape schools, museums and leadership today.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Research one Renaissance artwork and write a paragraph explaining what makes it typical of the Renaissance.</li>
    <li>Write a HIPP analysis of a short quotation from Petrarch or Castiglione.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which Renaissance figure would I most like to meet, and why?</li>
    <li>Do I agree with Machiavelli about power?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Renaissance</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rebirth of classical learning.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Humanism</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Focus on human potential.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Patron</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Supporter of artists.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Perspective</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Technique showing depth.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can explain why the Renaissance began in Italy.</p>
    <p style="margin:6px 0;">☐ I can define humanism.</p>
    <p style="margin:6px 0;">☐ I can describe Renaissance art.</p>
    <p style="margin:6px 0;">☐ I can analyze The Prince.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The word “Renaissance” means:',
            options: ['Reform', 'Rebirth', 'Revolution', 'Return'],
            correct: 1,
            explanation: 'The answer is Rebirth. It is French for rebirth.'
        },
        {
            question: 'The Renaissance began in:',
            options: ['Italy', 'Germany', 'England', 'Spain'],
            correct: 0,
            explanation: 'Italian city-states led the way.'
        },
        {
            question: 'Humanism emphasized:',
            options: ['Rejecting all education', 'Only farming', 'Isolation from the past', 'Human potential and classical learning'],
            correct: 3,
            explanation: 'Humanists studied Greek and Roman works.'
        },
        {
            question: 'The Medici family of Florence were famous as:',
            options: ['Protestant reformers', 'Scientists', 'Patrons of the arts', 'Explorers'],
            correct: 2,
            explanation: 'They funded artists and scholars.'
        },
        {
            question: 'Who sculpted David and painted the Sistine Chapel ceiling?',
            options: ['Leonardo da Vinci', 'Raphael', 'Michelangelo', 'Brunelleschi'],
            correct: 2,
            explanation: 'The answer is Michelangelo. Michelangelo did both.'
        },
        {
            question: 'Linear perspective helped artists:',
            options: ['Use brighter colors', 'Paint faster', 'Avoid religious subjects', 'Show depth on a flat surface'],
            correct: 3,
            explanation: 'It creates a three-dimensional effect.'
        },
        {
            question: 'Machiavelli’s The Prince is mainly about:',
            options: ['Religious reform', 'Painting techniques', 'How rulers gain and keep power', 'Astronomy'],
            correct: 2,
            explanation: 'It is a practical political guide.'
        },
        {
            question: 'Who is often called the father of humanism?',
            options: ['Machiavelli', 'Petrarch', 'Luther', 'Galileo'],
            correct: 1,
            explanation: 'Petrarch collected classical manuscripts.'
        },
        {
            question: 'The fall of Constantinople in 1453 helped the Renaissance because:',
            options: ['It ended trade', 'Greek scholars brought manuscripts to Italy', 'It closed universities', 'It started the Reformation'],
            correct: 1,
            explanation: 'Scholars fled west with texts.'
        },
        {
            question: 'Secular art focuses on:',
            options: ['Worldly subjects', 'Only religious scenes', 'Abstract shapes only', 'Maps'],
            correct: 0,
            explanation: 'The answer is Worldly subjects. Secular means non-religious.'
        }
    ]
},
{
    name: '1.1.2 The Northern Renaissance and the Printing Press',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.1 The Renaissance and the Reformation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Rebirth and Reform</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.2: The Northern Renaissance and the Printing Press</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how Renaissance ideas spread to northern Europe, how northern humanists and artists differed from Italians, and how Gutenberg’s printing press transformed communication.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> The printing press was one of the most important inventions in history. Like the internet today, it changed how quickly ideas could spread and who could access knowledge.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📰 News and media</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Libraries</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎭 Theater</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">✝️ Religious texts</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔬 Science</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💻 Comparisons with the internet</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain the causes and characteristics of the Renaissance. (D2.His.1)</li>
    <li>Analyze how the printing press spread ideas. (D2.His.14)</li>
    <li>Explain the causes, key figures and effects of the Protestant and Catholic Reformations. (D2.His.14)</li>
    <li>Analyze primary sources from multiple perspectives. (D2.His.4, D3.1)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how the Renaissance spread to northern Europe.</li>
    <li>Compare northern and Italian Renaissance art and ideas.</li>
    <li>Identify key northern writers such as Erasmus, More and Shakespeare.</li>
    <li>Analyze the causes and effects of the printing press.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How does new communication technology change society?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.1.1 you learned about the Italian Renaissance. Now you will see how its ideas traveled north — and what helped them travel.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Around 1450, in the German city of Mainz, Johannes Gutenberg developed a printing press with <strong>movable metal type</strong>. Instead of copying every page by hand, printers could arrange reusable letters, ink them and print hundreds of identical pages. A book that once took months to copy could now be produced in days.</p>
    <p>As merchants, students and artists traveled from Italy, Renaissance ideas spread to northern Europe — the Netherlands, Germany, France and England. There, the <strong>Northern Renaissance</strong> often focused more on religion, everyday life and social reform.</p>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>The printing press did for the 1500s what the internet did for the 2000s: it made information faster, cheaper and harder to control.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Historical Context</h3>
    <p>Gutenberg did not invent printing itself. Woodblock printing had been used in China for centuries, and around the 1040s a Chinese inventor named Bi Sheng created movable type made of clay. Korean printers later used metal movable type. Gutenberg’s achievement was a practical system — metal type, oil-based ink and a press adapted from wine presses — that suited the European alphabet and spread rapidly.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and when or where it applies. Use the example to see it in context.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Northern Renaissance</strong>
    </p>
    <p style="margin:6px 0;">The spread and development of Renaissance ideas in northern Europe.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> c. 1450–1600</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Erasmus was a northern humanist.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">printing press</strong>
    </p>
    <p style="margin:6px 0;">A machine that presses inked type onto paper to print copies.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Gutenberg, c. 1450</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The press made books cheaper.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">movable type</strong>
    </p>
    <p style="margin:6px 0;">Individual letters that can be arranged and reused for printing.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> China (clay), Korea and Europe (metal)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Gutenberg used metal movable type.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">vernacular</strong>
    </p>
    <p style="margin:6px 0;">The everyday language of a region, rather than Latin.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Renaissance Europe</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Shakespeare wrote in English, the vernacular.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Christian humanism</strong>
    </p>
    <p style="margin:6px 0;">Humanism focused on reforming society and religion through education.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Northern Renaissance</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Erasmus was a Christian humanist.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">literacy</strong>
    </p>
    <p style="margin:6px 0;">The ability to read and write.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> all periods</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Literacy rose after the printing press.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. The Printing Revolution</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 170" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Effects of the Printing Press: A Chain of Change</text><rect x="14" y="50" width="122" height="80" rx="12" fill="#10233d" stroke="#bcaaa4" stroke-width="2"/><text x="75" y="84" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Printing press</text><text x="75" y="106" fill="#cbd5e1" font-size="11" text-anchor="middle">c. 1450</text><line x1="137" y1="90" x2="140.0" y2="90.0" stroke="#94a3b8" stroke-width="2"/><polygon points="150,90 140.0,95.0 140.0,85.0" fill="#94a3b8"/><rect x="151" y="50" width="122" height="80" rx="12" fill="#10233d" stroke="#bcaaa4" stroke-width="2"/><text x="212" y="84" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Cheaper books</text><text x="212" y="106" fill="#cbd5e1" font-size="11" text-anchor="middle">more copies, faster</text><line x1="274" y1="90" x2="277.0" y2="90.0" stroke="#94a3b8" stroke-width="2"/><polygon points="287,90 277.0,95.0 277.0,85.0" fill="#94a3b8"/><rect x="288" y="50" width="122" height="80" rx="12" fill="#10233d" stroke="#bcaaa4" stroke-width="2"/><text x="349" y="84" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Rising literacy</text><text x="349" y="106" fill="#cbd5e1" font-size="11" text-anchor="middle">more readers</text><line x1="411" y1="90" x2="414.0" y2="90.0" stroke="#94a3b8" stroke-width="2"/><polygon points="424,90 414.0,95.0 414.0,85.0" fill="#94a3b8"/><rect x="425" y="50" width="122" height="80" rx="12" fill="#10233d" stroke="#bcaaa4" stroke-width="2"/><text x="486" y="84" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Ideas spread</text><text x="486" y="106" fill="#cbd5e1" font-size="11" text-anchor="middle">humanism, science</text><line x1="548" y1="90" x2="551.0" y2="90.0" stroke="#94a3b8" stroke-width="2"/><polygon points="561,90 551.0,95.0 551.0,85.0" fill="#94a3b8"/><rect x="562" y="50" width="122" height="80" rx="12" fill="#10233d" stroke="#bcaaa4" stroke-width="2"/><text x="623" y="84" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Challenges to</text><text x="623" y="106" fill="#cbd5e1" font-size="11" text-anchor="middle">authority grow</text><text x="350" y="156" fill="#86efac" font-size="12" text-anchor="middle">Within about fifty years of Gutenberg, millions of printed books circulated in Europe.</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Before the press</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">After the press</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Books copied by hand, often by monks</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Books printed quickly in workshops</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Very expensive; few copies</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cheaper; many identical copies</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly in Latin</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Increasingly in vernacular languages</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Knowledge controlled by a small elite</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Knowledge available to more people</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Errors multiplied with each copy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Identical copies reduced errors</td>
    </tr>
    </table>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Gutenberg’s most famous work is the Gutenberg Bible, printed in Mainz around 1455. Only a few dozen copies survive today, and they are among the most valuable books in the world.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Northern Renaissance Thinkers and Artists</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Person</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Region</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Contribution</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Desiderius Erasmus (c. 1466–1536)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Netherlands</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Christian humanist; In Praise of Folly (1511) criticized corruption in the Church and society</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Thomas More (1478–1535)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">England</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Utopia (1516) described an ideal society and criticized European problems</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">William Shakespeare (1564–1616)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">England</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plays and poems in English exploring human nature</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Albrecht Dürer (1471–1528)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Germany</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Detailed woodcuts and engravings, spread widely by printing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jan van Eyck (c. 1390–1441)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flanders</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Developed oil-painting techniques with fine realistic detail</td>
    </tr>
    </table>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Italian Renaissance</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Northern Renaissance</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Focus on classical subjects and ideal beauty</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Focus on religion, daily life and realistic detail</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Funded by city-state elites and the Church</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Funded by merchants, nobles and monarchs</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Frescoes and large sculptures</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Oil paintings, woodcuts and engravings</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Humanism centered on individual achievement</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Christian humanism centered on reform</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Analyzing the Impact of Printing</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Cause and effect (D2.His.14)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Explain how the printing press helped make the Reformation possible.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Trace the effects of printing step by step and connect them to the spread of religious ideas.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Effect 1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Books and pamphlets became cheap and quick to produce.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Effect 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">More people learned to read, especially in vernacular languages.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Effect 3</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Reformers could print and spread their arguments across Europe within weeks.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Link</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Ideas that might once have stayed local reached huge audiences before authorities could stop them.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> By making texts cheap, fast and widely available — often in everyday languages — the printing press allowed reformers’ ideas to spread across Europe faster than they could be suppressed.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> A strong cause-and-effect answer shows the chain of links, not just the start and end.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Who developed the movable-type printing press in Europe around 1450?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Johannes Gutenberg.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What is the vernacular?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The everyday language of a region, rather than Latin.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Name a northern humanist and his famous work.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Erasmus — In Praise of Folly; or Thomas More — Utopia.</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Causation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparison</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Analyzing technology’s impact</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using global perspectives</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Making historical analogies</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Thinking Like a Historian</h3>
    <p>Comparing the printing press with the internet is a useful <strong>historical analogy</strong>, but analogies have limits. Both spread information rapidly and challenged old authorities, but printing still required physical books, money and literacy, while the internet allows almost instant, global communication. Good historians use analogies carefully, noting both similarities and differences.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Like the printing press, the internet spreads both reliable information and misinformation. How did people in the 1500s decide what to trust?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #bcaaa4;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 History in Today’s World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Debates today about social media, misinformation and free speech echo debates in the 1500s about who should control printed books.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> The spread of paper-making and printing increased demand for paper, which was then made mostly from recycled rags rather than wood.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Publishers, journalists, librarians and digital-media professionals all work in industries shaped by the printing revolution.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Where did Gutenberg develop his printing press?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: A German city.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Mainz, Germany.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Who invented clay movable type in China?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Centuries before Gutenberg.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Bi Sheng, around the 1040s.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> What did Thomas More’s Utopia describe?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Utopia means “no place.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">An imaginary ideal society, used to criticize problems in Europe.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Make a T-chart comparing the printing press and the internet, with three similarities and three differences.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Write a short “pamphlet” in the style of a northern humanist criticizing a problem at your school, then explain how printing would help it spread.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Create a timeline of printing from Chinese woodblock printing to Gutenberg to the internet, with one key fact for each stage.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Explore a digitized copy of an early printed book from a library website. Describe two features that show it was printed rather than handwritten.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Who was Johannes Gutenberg?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The German printer who developed a movable-type printing press around 1450.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Name a Northern Renaissance writer.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Erasmus, Thomas More or William Shakespeare.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Give two differences between the Italian and Northern Renaissance.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Northern art focused more on religion and daily life with realistic detail; northern humanism focused on religious and social reform.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Explain one effect of printing on literacy.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Cheaper books, especially in vernacular languages, encouraged more people to learn to read.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #bcaaa4;">
    <p style="margin:0 0 6px 0;color:#bcaaa4;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Evaluate the claim that Gutenberg “invented printing.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It is inaccurate: printing and movable type already existed in China and Korea; Gutenberg developed an efficient European system that spread rapidly.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> How is the spread of information online similar to the spread of printed pamphlets in the 1500s?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Both allow ideas to spread quickly to large audiences and are hard for authorities to control; both can spread true and false information.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> D2.His.14: Explain two long-term effects of the printing press on European society.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It increased literacy and access to knowledge, and it enabled religious and scientific ideas to spread widely, challenging traditional authorities.</div>
    </details>
    </div>
    </div>
    <div style="background:#2b1f1b;padding:20px;border-radius:12px;border:1px solid #bcaaa4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Renaissance ideas spread to northern Europe, where Christian humanists such as Erasmus and Thomas More focused on reforming the Church and society, and artists such as van Eyck and Dürer emphasized realistic detail. Around 1450, Gutenberg developed a movable-type printing press, building on earlier printing in China and Korea. Printing made books cheaper, increased literacy and spread ideas rapidly — helping to make the Reformation possible.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Northern Renaissance: religion, daily life, reform.</li>
    <li>Erasmus, More, Shakespeare, Dürer, van Eyck.</li>
    <li>Gutenberg’s press c. 1450.</li>
    <li>Printing → literacy → spread of ideas.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Printing existed earlier in China and Korea.</li>
    <li>Vernacular = everyday language.</li>
    <li>Analogies have limits.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Saying Gutenberg invented all printing.</li>
    <li>Confusing northern and Italian art features.</li>
    <li>Ignoring global contributions.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Draw the cause-and-effect chain.</li>
    <li>Compare in a two-column chart.</li>
    <li>Connect to modern technology carefully.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain the links between printing and the Reformation.</li>
    <li>Name specific people and works.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Effects of the printing press.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.2 Change</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Before and after printing.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Global perspective</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chinese and Korean printing.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for global contributions</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Media literacy</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Media and communication</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Technology and society</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every time a new technology changes how information spreads, societies face the same questions the printing press raised.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a paragraph comparing the printing press and the internet, using at least one similarity and one difference.</li>
    <li>Research one Northern Renaissance artist and describe one work.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How has technology changed how I get information?</li>
    <li>Why is it important to recognize earlier inventors from outside Europe?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Movable type</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reusable letters for printing.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Vernacular</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Everyday language.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Christian humanism</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Humanism for religious reform.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ability to read and write.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can explain how the Renaissance spread north.</p>
    <p style="margin:6px 0;">☐ I can compare northern and Italian Renaissance features.</p>
    <p style="margin:6px 0;">☐ I can identify northern writers and artists.</p>
    <p style="margin:6px 0;">☐ I can analyze the effects of printing.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Gutenberg developed his movable-type printing press around:',
            options: ['1450', '1250', '1650', '1850'],
            correct: 0,
            explanation: 'The answer is 1450. In Mainz, Germany.'
        },
        {
            question: 'Movable type was first invented in:',
            options: ['Germany', 'China', 'Italy', 'England'],
            correct: 1,
            explanation: 'Bi Sheng used clay type around the 1040s.'
        },
        {
            question: 'The Northern Renaissance often focused on:',
            options: ['Only ancient Roman gods', 'Military conquest', 'Religion, daily life and reform', 'Farming techniques'],
            correct: 2,
            explanation: 'Christian humanism sought reform.'
        },
        {
            question: 'Erasmus wrote:',
            options: ['The Prince', 'Utopia', 'In Praise of Folly', 'Hamlet'],
            correct: 2,
            explanation: 'The answer is In Praise of Folly. It criticized corruption.'
        },
        {
            question: 'Thomas More’s Utopia describes:',
            options: ['A real kingdom', 'A scientific theory', 'A religious law', 'An imaginary ideal society'],
            correct: 3,
            explanation: 'It criticizes Europe through contrast.'
        },
        {
            question: 'Writing in the vernacular means writing in:',
            options: ['Latin only', 'Ancient Greek only', 'The everyday language of the people', 'Code'],
            correct: 2,
            explanation: 'The answer is The everyday language of the people. Shakespeare wrote in English.'
        },
        {
            question: 'One major effect of the printing press was:',
            options: ['Increased literacy', 'Fewer books', 'More expensive books', 'Less communication'],
            correct: 0,
            explanation: 'Books became cheaper and more available.'
        },
        {
            question: 'Jan van Eyck is known for developing:',
            options: ['The printing press', 'Oil-painting techniques', 'Linear perspective', 'Woodblock printing'],
            correct: 1,
            explanation: 'He painted fine realistic detail in oils.'
        },
        {
            question: 'How did printing help the Reformation?',
            options: ['It stopped all debate', 'Reformers’ ideas spread quickly across Europe', 'It made books rarer', 'It banned the vernacular'],
            correct: 1,
            explanation: 'Pamphlets reached huge audiences.'
        },
        {
            question: 'Albrecht Dürer’s works spread widely because they were:',
            options: ['Woodcuts and engravings that could be printed', 'Painted on cathedral walls', 'Hidden in monasteries', 'Written in code'],
            correct: 0,
            explanation: 'Prints could be copied many times.'
        }
    ]
},
{
    name: '1.1.3 The Protestant and Catholic Reformations',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.1 The Renaissance and the Reformation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Rebirth and Reform</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.3: The Protestant and Catholic Reformations</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the causes of the Protestant Reformation, the ideas of Martin Luther, John Calvin and Henry VIII, the Catholic Church’s response, and the effects of the religious divide on Europe.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> The Reformation permanently divided Western Christianity, reshaped European politics and led to debates about authority, conscience and religious freedom that influence many societies today.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">✝️ Christian denominations today</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Church and state</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Education and literacy</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚖️ Religious freedom</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🗺️ European borders</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎨 Art and music</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain the causes and characteristics of the Renaissance. (D2.His.1)</li>
    <li>Analyze how the printing press spread ideas. (D2.His.14)</li>
    <li>Explain the causes, key figures and effects of the Protestant and Catholic Reformations. (D2.His.14)</li>
    <li>Analyze primary sources from multiple perspectives. (D2.His.4, D3.1)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain the causes of the Protestant Reformation.</li>
    <li>Describe the ideas of Luther and Calvin and the English Reformation.</li>
    <li>Explain the goals and actions of the Catholic Reformation.</li>
    <li>Analyze the political and social effects of the Reformation.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> Why did challenges to the Church in the 1500s divide Europe?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lessons 1.1.1 and 1.1.2 you learned about humanism, Christian humanism and the printing press — three key causes of the Reformation.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>By 1500 the Roman Catholic Church was the most powerful institution in Western Europe. It owned land, collected taxes and influenced kings. Some critics, including Christian humanists such as Erasmus, complained about corruption — for example, Church officials who lived in luxury or sold <strong>indulgences</strong> (pardons that were said to reduce punishment for sins).</p>
    <p>In 1517, a German monk and professor named <strong>Martin Luther</strong> wrote the <strong>Ninety-Five Theses</strong>, a list of arguments against the sale of indulgences. Thanks to the printing press, copies spread across Germany within weeks. What began as a debate became the <strong>Protestant Reformation</strong> — a movement that created new Christian churches separate from Rome.</p>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>The Reformation began as a protest against Church practices and ended with Western Christianity divided into Catholic and Protestant churches.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Historical Context</h3>
    <p>This lesson discusses religious beliefs. In history class we study what different groups believed and how those beliefs shaped events — we do not judge which beliefs are correct. Many students’ families belong to the traditions in this lesson, and others belong to different faiths or none; all deserve respect.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 250" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Renaissance and Reformation Timeline</text><line x1="40" y1="130" x2="660" y2="130" stroke="#bcaaa4" stroke-width="3"/><text x="40" y="150" fill="#94a3b8" font-size="11" text-anchor="start">1330</text><text x="660" y="150" fill="#94a3b8" font-size="11" text-anchor="end">1560</text><line x1="104.2" y1="130" x2="104.2" y2="96" stroke="#94a3b8" stroke-width="1.5"/><circle cx="104.2" cy="130" r="6" fill="#fde68a"/><text x="104.2" y="58" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">1347</text><text x="104.2" y="74" fill="#e2e8f0" font-size="11" text-anchor="middle">Black Death</text><text x="104.2" y="88" fill="#cbd5e1" font-size="11" text-anchor="middle">reaches Europe</text><line x1="372" y1="130" x2="352" y2="164" stroke="#94a3b8" stroke-width="1.5"/><circle cx="372" cy="130" r="6" fill="#fde68a"/><text x="352" y="182" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">1450</text><text x="352" y="198" fill="#e2e8f0" font-size="11" text-anchor="middle">Gutenberg’s</text><text x="352" y="212" fill="#cbd5e1" font-size="11" text-anchor="middle">printing press (c.)</text><line x1="379.8" y1="130" x2="379.8" y2="96" stroke="#94a3b8" stroke-width="1.5"/><circle cx="379.8" cy="130" r="6" fill="#fde68a"/><text x="379.8" y="58" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">1453</text><text x="379.8" y="74" fill="#e2e8f0" font-size="11" text-anchor="middle">Fall of</text><text x="379.8" y="88" fill="#cbd5e1" font-size="11" text-anchor="middle">Constantinople</text><line x1="522.8" y1="130" x2="482.79999999999995" y2="164" stroke="#94a3b8" stroke-width="1.5"/><circle cx="522.8" cy="130" r="6" fill="#fde68a"/><text x="482.79999999999995" y="182" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">1508</text><text x="482.79999999999995" y="198" fill="#e2e8f0" font-size="11" text-anchor="middle">Sistine ceiling</text><text x="482.79999999999995" y="212" fill="#cbd5e1" font-size="11" text-anchor="middle">begun</text><line x1="546.2" y1="130" x2="526.2" y2="96" stroke="#94a3b8" stroke-width="1.5"/><circle cx="546.2" cy="130" r="6" fill="#fde68a"/><text x="526.2" y="58" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">1517</text><text x="526.2" y="74" fill="#e2e8f0" font-size="11" text-anchor="middle">Luther’s</text><text x="526.2" y="88" fill="#cbd5e1" font-size="11" text-anchor="middle">Ninety-Five Theses</text><line x1="590.4" y1="130" x2="620.4" y2="164" stroke="#94a3b8" stroke-width="1.5"/><circle cx="590.4" cy="130" r="6" fill="#fde68a"/><text x="620.4" y="182" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">1534</text><text x="620.4" y="198" fill="#e2e8f0" font-size="11" text-anchor="middle">Act of</text><text x="620.4" y="212" fill="#cbd5e1" font-size="11" text-anchor="middle">Supremacy</text><line x1="619" y1="130" x2="649" y2="96" stroke="#94a3b8" stroke-width="1.5"/><circle cx="619" cy="130" r="6" fill="#fde68a"/><text x="649" y="58" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">1545</text><text x="649" y="74" fill="#e2e8f0" font-size="11" text-anchor="middle">Council of</text><text x="649" y="88" fill="#cbd5e1" font-size="11" text-anchor="middle">Trent opens</text><text x="350" y="240" fill="#86efac" font-size="12" text-anchor="middle">Dates marked “c.” are approximate.</text>
    </svg>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and when or where it applies. Use the example to see it in context.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">indulgence</strong>
    </p>
    <p style="margin:6px 0;">A pardon from the Church said to reduce punishment for sins.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Catholic Church, medieval–1500s</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Luther objected to selling indulgences.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Ninety-Five Theses</strong>
    </p>
    <p style="margin:6px 0;">Luther’s 1517 list of arguments against the sale of indulgences.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Wittenberg, Germany</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Printed copies spread rapidly.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Protestant</strong>
    </p>
    <p style="margin:6px 0;">A member of a Christian church that separated from the Catholic Church during the Reformation.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> from the 1520s</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Lutherans and Calvinists are Protestants.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">predestination</strong>
    </p>
    <p style="margin:6px 0;">The belief that God has already decided who will be saved.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Calvinism</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>John Calvin taught predestination.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Act of Supremacy</strong>
    </p>
    <p style="margin:6px 0;">The 1534 English law making the monarch head of the Church of England.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> England</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Henry VIII broke with Rome.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Catholic Reformation</strong>
    </p>
    <p style="margin:6px 0;">The Catholic Church’s efforts to reform itself and respond to Protestantism; also called the Counter-Reformation.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> c. 1545–1600s</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The Council of Trent met from 1545 to 1563.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Causes of the Reformation</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Type of cause</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Examples</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Religious</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Criticism of corruption and the sale of indulgences; debates about the path to salvation</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Intellectual</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Humanism encouraged reading original texts, including the Bible</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Technological</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The printing press spread reformers’ ideas quickly</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Political</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some rulers wanted independence from the pope’s authority and the Church’s wealth</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Economic</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Resentment of Church taxes and payments sent to Rome</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b2530;border-left:4px solid #06b6d4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">📖 Reading Text</p>
    <div>
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">About the Ninety-Five Theses (1517)</p>
    <p style="margin:8px 0;"><em>In thesis 86, Luther asked why the pope, who was very wealthy, did not pay to rebuild St. Peter’s Basilica in Rome with his own money instead of with the money of poor believers who bought indulgences.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Leaders of the Protestant Reformation</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Leader</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Place</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Key ideas or actions</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Martin Luther (1483–1546)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Germany</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Salvation through faith alone; the Bible as the highest authority; translated the Bible into German. Refused to take back his views at the Diet of Worms (1521).</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">John Calvin (1509–1564)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Geneva (Switzerland)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Predestination; a strict, disciplined community; Institutes of the Christian Religion (1536). Influenced churches in the Netherlands, Scotland and elsewhere.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Henry VIII (1491–1547)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">England</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">When the pope refused to annul his marriage, Parliament passed the Act of Supremacy (1534), making the king head of the Church of England.</td>
    </tr>
    </table>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 270" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Western Christianity After the Reformation (simplified)</text><line x1="350" y1="96" x2="120" y2="176" stroke="#64748b" stroke-width="2"/><line x1="350" y1="96" x2="290" y2="176" stroke="#64748b" stroke-width="2"/><line x1="350" y1="96" x2="460" y2="176" stroke="#64748b" stroke-width="2"/><line x1="350" y1="96" x2="610" y2="176" stroke="#64748b" stroke-width="2"/><rect x="220" y="48" width="260" height="48" rx="10" fill="#10233d" stroke="#bcaaa4" stroke-width="2"/><text x="350" y="69" fill="#bcaaa4" font-size="13" font-weight="bold" text-anchor="middle">Western (Roman Catholic) Church</text><text x="350" y="86" fill="#cbd5e1" font-size="11" text-anchor="middle">before 1517</text><rect x="50" y="176" width="140" height="48" rx="10" fill="#10233d" stroke="#fde68a" stroke-width="2"/><text x="120" y="197" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Lutheran</text><text x="120" y="214" fill="#cbd5e1" font-size="11" text-anchor="middle">Germany, Scandinavia</text><rect x="220" y="176" width="140" height="48" rx="10" fill="#10233d" stroke="#86efac" stroke-width="2"/><text x="290" y="197" fill="#86efac" font-size="13" font-weight="bold" text-anchor="middle">Calvinist</text><text x="290" y="214" fill="#cbd5e1" font-size="11" text-anchor="middle">Geneva, Netherlands</text><rect x="390" y="176" width="140" height="48" rx="10" fill="#10233d" stroke="#67e8f9" stroke-width="2"/><text x="460" y="197" fill="#67e8f9" font-size="13" font-weight="bold" text-anchor="middle">Anglican</text><text x="460" y="214" fill="#cbd5e1" font-size="11" text-anchor="middle">England (1534)</text><rect x="540" y="176" width="140" height="48" rx="10" fill="#10233d" stroke="#c4b5fd" stroke-width="2"/><text x="610" y="197" fill="#c4b5fd" font-size="13" font-weight="bold" text-anchor="middle">Catholic</text><text x="610" y="214" fill="#cbd5e1" font-size="11" text-anchor="middle">reformed at Trent</text><text x="350" y="258" fill="#94a3b8" font-size="12" text-anchor="middle">Other Protestant groups, such as the Anabaptists, also formed during this period.</text>
    </svg>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>In 1555, the Peace of Augsburg allowed each ruler in the Holy Roman Empire to choose whether their territory would be Lutheran or Catholic — but it did not give that choice to individuals or include Calvinists.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. The Catholic Reformation and Effects</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Catholic Reformation action</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Purpose</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Council of Trent (1545–1563)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Defined Catholic teachings, rejected Protestant ideas and ended many abuses, such as the sale of indulgences for money</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Society of Jesus (Jesuits), founded by Ignatius of Loyola (approved 1540)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Founded schools, worked as missionaries in Asia, Africa and the Americas, and spread Catholic teaching</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">New religious orders and reforms</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Improved the education and discipline of clergy</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Index of Forbidden Books and the Inquisition</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tried to stop the spread of ideas the Church considered dangerous</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Analyzing effects (D2.His.14)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Explain two political and one social effect of the Reformation.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Political effect 1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Monarchs and princes gained power over religion and Church lands in their territories.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Political effect 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Religious divisions contributed to wars, such as the Thirty Years’ War (1618–1648).</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Social effect</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Emphasis on reading the Bible increased literacy and education in many regions.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Rulers gained power over religion; religious conflict led to wars; and literacy and education spread as more people read the Bible in their own languages.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What did Luther object to in 1517?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The sale of indulgences.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why did Henry VIII break with the Catholic Church?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The pope refused to annul his marriage; the Act of Supremacy (1534) made him head of the Church of England.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Name two actions of the Catholic Reformation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Any two: the Council of Trent, the founding of the Jesuits, new religious orders, the Index and the Inquisition.</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Causation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Analyzing multiple perspectives</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Sourcing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Change and continuity</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respectful discussion of religion</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Thinking Like a Historian</h3>
    <p>Historians often describe multiple perspectives on the Reformation. To Protestants, Luther was a reformer who restored what they saw as the true teachings of Christianity. To Catholic leaders at the time, he was a rebel who broke the unity of the Church. To many princes, the Reformation was also a political opportunity. Understanding all three perspectives helps explain why the movement spread so quickly and caused so much conflict.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why might a ruler support Protestantism for reasons that had little to do with religion?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #bcaaa4;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 History in Today’s World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Many Christian denominations today — Lutheran, Presbyterian, Anglican and others — trace their origins to the Reformation era.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> The closing of monasteries in England after the Act of Supremacy transferred huge areas of land to the crown and nobles, changing how land was owned and used.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Historians, religious scholars, educators and diplomats study the Reformation to understand religious diversity and conflict resolution.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> In what year did Luther write the Ninety-Five Theses?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Early 1500s.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1517.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What did John Calvin teach about salvation?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Pre- means before.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Predestination — God has already decided who will be saved.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Who founded the Jesuits?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Society of Jesus.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Ignatius of Loyola.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Create a cause-and-effect chart for the Reformation with at least four causes and four effects.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Role-play a respectful conversation between a supporter of Luther and a defender of the Catholic Church in 1521, each using evidence.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Make a map showing where Lutheran, Calvinist, Anglican and Catholic churches were strongest by about 1600.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Explore a museum or library website with images of early printed Reformation pamphlets. Describe how images were used to persuade readers.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define indulgence.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A pardon from the Church said to reduce punishment for sins.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Name three Protestant leaders.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Martin Luther, John Calvin and Henry VIII (also Ulrich Zwingli).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain two causes of the Reformation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Corruption and the sale of indulgences; the printing press; humanism; rulers’ desire for independence from the pope.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> What was the Council of Trent?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A Catholic council (1545–1563) that defined Church teachings and reformed abuses.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #bcaaa4;">
    <p style="margin:0 0 6px 0;color:#bcaaa4;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain how the Reformation increased the power of monarchs.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Rulers who became Protestant took control of the church in their lands and its property, and the Peace of Augsburg let rulers choose their territory’s religion.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> How does the Reformation help explain why there are many different Christian denominations today?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Reformation split Western Christianity into Catholic and several Protestant churches, which later divided into more denominations.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> D2.His.4: Explain how a Protestant reformer and a Catholic leader in the 1520s might have viewed Luther differently.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A Protestant saw him as a reformer returning to the Bible’s teachings; a Catholic leader saw him as a rebel threatening Church unity and authority.</div>
    </details>
    </div>
    </div>
    <div style="background:#2b1f1b;padding:20px;border-radius:12px;border:1px solid #bcaaa4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>The Protestant Reformation began in 1517 when Martin Luther challenged the sale of indulgences. Helped by humanism, the printing press and political ambitions, it spread rapidly. Luther, John Calvin and Henry VIII led new Protestant churches. The Catholic Church responded with the Catholic Reformation, including the Council of Trent and the Jesuits. The Reformation divided Western Christianity, strengthened monarchs, contributed to religious wars and increased literacy.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Luther, 1517: Ninety-Five Theses.</li>
    <li>Calvin: predestination, Geneva.</li>
    <li>Henry VIII: Act of Supremacy, 1534.</li>
    <li>Catholic Reformation: Trent, Jesuits.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Study beliefs respectfully and without judgment.</li>
    <li>Causes were religious, political, economic and technological.</li>
    <li>The Peace of Augsburg (1555) let rulers choose.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Thinking the Reformation had only religious causes.</li>
    <li>Confusing Luther and Calvin.</li>
    <li>Saying the Catholic Church did not reform.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Group causes by type.</li>
    <li>Link each leader to one key idea.</li>
    <li>Consider multiple perspectives.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain both Protestant and Catholic sides.</li>
    <li>Use dates as anchors.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Causes and effects of the Reformation.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.4 Perspectives</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Different views of Luther.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.2 Change</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A divided Christianity.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for different beliefs</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Fairness</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Critical thinking</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Religion and society</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Freedom of conscience</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> The Reformation still shapes religious life, education and debates about freedom of belief around the world.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a paragraph explaining the most important cause of the Reformation, with evidence.</li>
    <li>Create a comparison chart of Luther, Calvin and Henry VIII.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How did technology and ideas combine to cause the Reformation?</li>
    <li>How can we discuss religious history respectfully?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Indulgence</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pardon sold or granted by the Church.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Protestant</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Member of a church that broke from Rome.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Predestination</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Salvation decided in advance.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Counter-Reformation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Catholic reform movement.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can explain the causes of the Reformation.</p>
    <p style="margin:6px 0;">☐ I can describe the main Protestant leaders.</p>
    <p style="margin:6px 0;">☐ I can describe the Catholic Reformation.</p>
    <p style="margin:6px 0;">☐ I can analyze the effects of the Reformation.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Martin Luther’s Ninety-Five Theses (1517) mainly criticized:',
            options: ['The printing press', 'Renaissance art', 'The Ottoman Empire', 'The sale of indulgences'],
            correct: 3,
            explanation: 'The answer is The sale of indulgences. He questioned indulgences.'
        },
        {
            question: 'Luther taught that salvation comes through:',
            options: ['Buying indulgences', 'Royal decree', 'Military service', 'Faith alone'],
            correct: 3,
            explanation: 'The answer is Faith alone. A central Protestant idea.'
        },
        {
            question: 'Where did John Calvin lead his reform movement?',
            options: ['Rome', 'Geneva', 'London', 'Madrid'],
            correct: 1,
            explanation: 'Geneva became a Calvinist center.'
        },
        {
            question: 'The Calvinist belief that God has already chosen who will be saved is:',
            options: ['Humanism', 'Predestination', 'Indulgence', 'Secularism'],
            correct: 1,
            explanation: 'The answer is Predestination. Calvin taught predestination.'
        },
        {
            question: 'The Act of Supremacy (1534) made:',
            options: ['The English monarch head of the Church of England', 'Luther a saint', 'Calvin ruler of Geneva', 'The pope king of England'],
            correct: 0,
            explanation: 'The answer is The English monarch head of the Church of England. Henry VIII broke with Rome.'
        },
        {
            question: 'The Council of Trent was part of the:',
            options: ['Protestant Reformation', 'Renaissance', 'Catholic Reformation', 'Scientific Revolution'],
            correct: 2,
            explanation: 'The answer is Catholic Reformation. It met from 1545 to 1563.'
        },
        {
            question: 'The Jesuits were founded by:',
            options: ['Martin Luther', 'Ignatius of Loyola', 'John Calvin', 'Henry VIII'],
            correct: 1,
            explanation: 'The answer is Ignatius of Loyola. Approved by the pope in 1540.'
        },
        {
            question: 'The Peace of Augsburg (1555) allowed:',
            options: ['Every person to choose any religion', 'Only Calvinism', 'Each ruler to choose Lutheran or Catholic for their territory', 'The end of the Catholic Church'],
            correct: 2,
            explanation: 'The ruler’s choice decided the territory’s religion.'
        },
        {
            question: 'Which helped Luther’s ideas spread quickly?',
            options: ['The printing press', 'The telescope', 'The steam engine', 'Television'],
            correct: 0,
            explanation: 'Pamphlets spread across Germany.'
        },
        {
            question: 'One political effect of the Reformation was that:',
            options: ['Many rulers gained more control over religion in their lands', 'All of Europe became Protestant', 'Kings lost all power', 'The pope ruled every country'],
            correct: 0,
            explanation: 'Rulers took control of churches and Church lands.'
        }
    ]
},
{
    name: '1.1 Activity: Voices of the Reformation',
    type: 'lesson',
    duration: '55 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.1 The Renaissance and the Reformation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Activity</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Investigation: Voices of the Reformation</h2>
    <p style="font-size:16px;">In this document-based investigation you will analyze sources representing different perspectives on the Reformation, then answer the compelling question: “Why did the Reformation spread so quickly across Europe?”</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respect</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Discuss religious beliefs respectfully; we are analyzing historical sources, not judging faiths.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Every claim must cite a specific document.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Teamwork</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rotate roles: reader, HIPP analyst, recorder and presenter.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fairness</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Give equal attention to Protestant and Catholic perspectives.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Historical Investigation: Multiple Perspectives on the Reformation</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To use primary and secondary sources from different perspectives to explain why the Reformation spread so quickly.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document packet</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">HIPP analysis sheet</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Highlighters</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Notebook</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document A: a description of Luther’s Ninety-Five Theses (1517)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document B: a description of a printed woodcut pamphlet criticizing Church practices</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document C: a description of a ruler’s decision to adopt Lutheranism and take control of Church lands</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document D: a summary of decrees from the Council of Trent (1545–1563)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document E: a modern historian’s estimate of the number of pamphlets printed in Germany in the 1520s</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Handle document packets carefully.</li>
    <li>Keep discussions focused and respectful.</li>
    <li>Cite documents by letter.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Read each document and complete a HIPP chart for it.</li>
    <li>Classify each document as primary or secondary.</li>
    <li>Sort the documents by the cause of spread they show: religious, technological, political or economic.</li>
    <li>Identify which perspective (Protestant, Catholic, political or modern historian) each document represents.</li>
    <li>Discuss as a group which cause was most important and why.</li>
    <li>Write a claim answering the compelling question.</li>
    <li>Support your claim with evidence from at least three documents, including one from a different perspective.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Document</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Primary or secondary?</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Perspective</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Cause of spread shown</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Key evidence</th>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which document best supports the role of technology?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Document B or E — printed pamphlets and their huge numbers show how printing spread ideas.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> How does Document C change the story?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It shows that rulers sometimes supported the Reformation for political and economic reasons, such as gaining Church lands.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why include Document D?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It shows the Catholic perspective and response, which helps explain where and why the Reformation stopped spreading.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> The Reformation spread quickly because religious criticism, the printing press and the political and economic interests of rulers worked together; no single cause explains it alone.</p>
    <p><strong style="color:#fde68a;">Historical explanation:</strong> Historians reach stronger conclusions by combining sources from different perspectives and recognizing that big events usually have multiple causes.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Using only Protestant sources.</li>
    <li>Treating a modern historian’s estimate as a primary source.</li>
    <li>Listing causes without explaining how they connect.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Analysts and journalists use multiple sources and perspectives to explain why movements and ideas spread today.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Write a paragraph answering the compelling question. Use the CER structure: a claim, evidence from at least three documents (cited as Doc A, Doc B and so on) and reasoning that explains how the causes worked together.</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Big historical changes usually have several causes that reinforce each other.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Activity Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Is Document E a primary or secondary source?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Secondary — it is a modern historian’s interpretation.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Which document shows a political cause?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Document C.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Name one cause of the Reformation’s spread shown in the documents.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The printing press, criticism of indulgences or rulers’ political and economic interests.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why is it important to include a Catholic source?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">To understand the full picture and avoid one-sided conclusions.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> What additional source would strengthen the investigation?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A source from an ordinary person, such as a peasant or townsperson, describing their experience.</div>
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
            question: 'The compelling question asks:',
            options: ['Why the Reformation spread so quickly', 'Who painted the Mona Lisa', 'How telescopes work', 'When Rome fell'],
            correct: 0,
            explanation: 'It focuses on causes of spread.'
        },
        {
            question: 'A modern historian’s estimate of pamphlets is a:',
            options: ['Secondary source', 'Primary source', 'Artifact from 1517', 'Diary'],
            correct: 0,
            explanation: 'The answer is Secondary source. It was written later.'
        },
        {
            question: 'A ruler taking control of Church lands shows a:',
            options: ['Purely artistic cause', 'Scientific cause', 'Political and economic cause', 'Geographic cause only'],
            correct: 2,
            explanation: 'Rulers gained power and wealth.'
        },
        {
            question: 'Including the Council of Trent document provides:',
            options: ['A Protestant view only', 'The Catholic perspective', 'A scientific view', 'No perspective'],
            correct: 1,
            explanation: 'It shows the Catholic response.'
        },
        {
            question: 'The strongest conclusion uses:',
            options: ['One document only', 'Personal opinion only', 'Evidence from several perspectives', 'No evidence'],
            correct: 2,
            explanation: 'Multiple perspectives strengthen arguments.'
        },
        {
            question: 'During this investigation, religious beliefs should be discussed:',
            options: ['With mockery', 'Not at all', 'Only from one side', 'Respectfully, as historical evidence'],
            correct: 3,
            explanation: 'The answer is Respectfully, as historical evidence. History seeks understanding.'
        }
    ]
},
{
    name: '1.1 Quiz: The Renaissance and the Reformation',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.1 The Renaissance and the Reformation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: The Renaissance and the Reformation</h2>
    <p style="font-size:16px;">Test your understanding of the Italian and Northern Renaissance, the printing press and the Protestant and Catholic Reformations from Topic 1.1.</p>
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
    <li>Causes of the Renaissance and humanism</li>
    <li>Renaissance artists and writers</li>
    <li>The Northern Renaissance and the printing press</li>
    <li>Causes and leaders of the Protestant Reformation</li>
    <li>The Catholic Reformation</li>
    <li>Effects of the Reformation</li>
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
    <div>Link each person to one key idea or work. For cause-and-effect questions, think about religious, political, economic and technological factors.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which city-state was home to the Medici family?',
            options: ['Venice', 'Florence', 'Wittenberg', 'Geneva'],
            correct: 1,
            explanation: 'The answer is Florence. The Medici ruled Florence.'
        },
        {
            question: 'Leonardo da Vinci is best known as a:',
            options: ['Protestant reformer', 'King of England', 'Painter, inventor and scientist', 'Printer'],
            correct: 2,
            explanation: 'The answer is Painter, inventor and scientist. He was a “Renaissance man.”'
        },
        {
            question: 'Machiavelli argued that a ruler should:',
            options: ['Always be loved', 'Give up power', 'Obey the pope in all things', 'Be practical and, if necessary, feared rather than loved'],
            correct: 3,
            explanation: 'The answer is Be practical and, if necessary, feared rather than loved. The Prince, Chapter 17.'
        },
        {
            question: 'Which language did many printed books increasingly use?',
            options: ['Only Latin', 'Vernacular languages', 'Only Greek', 'Only Hebrew'],
            correct: 1,
            explanation: 'Everyday languages reached more readers.'
        },
        {
            question: 'Who wrote Utopia?',
            options: ['Erasmus', 'Shakespeare', 'Thomas More', 'Calvin'],
            correct: 2,
            explanation: 'The answer is Thomas More. Published in 1516.'
        },
        {
            question: 'Luther refused to take back his views at the:',
            options: ['Council of Trent', 'Peace of Augsburg', 'Act of Supremacy', 'Diet of Worms (1521)'],
            correct: 3,
            explanation: 'The answer is Diet of Worms (1521). He would not recant.'
        },
        {
            question: 'Which reformer is associated with Geneva and predestination?',
            options: ['John Calvin', 'Martin Luther', 'Henry VIII', 'Ignatius of Loyola'],
            correct: 0,
            explanation: 'The answer is John Calvin. Calvinism spread from Geneva.'
        },
        {
            question: 'The Catholic Reformation’s missionary and teaching order was the:',
            options: ['Lutherans', 'Anglicans', 'Jesuits', 'Calvinists'],
            correct: 2,
            explanation: 'The answer is Jesuits. The Society of Jesus.'
        },
        {
            question: 'Which was a technological cause of the Reformation’s spread?',
            options: ['Indulgences', 'Predestination', 'The Act of Supremacy', 'The printing press'],
            correct: 3,
            explanation: 'The answer is The printing press. Printing spread ideas.'
        },
        {
            question: 'A long-term social effect of the Reformation was:',
            options: ['An end to all religion', 'Increased literacy and education', 'The invention of the telescope', 'The fall of Rome'],
            correct: 1,
            explanation: 'People were encouraged to read the Bible.'
        }
    ]
},
{
    name: '1.1 Assignment: Causation Essay on the Reformation',
    type: 'lesson',
    duration: '120 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.1 The Renaissance and the Reformation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 120 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Causation Essay on the Reformation</h2>
    <p style="font-size:16px;">Write a causation essay (500–700 words) answering: “What was the most important cause of the Protestant Reformation?”</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 120 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p>Historians have argued about the main cause of the Reformation for centuries. Some emphasize religious concerns, others the printing press, and others the political ambitions of rulers. Choose the cause you think was most important and defend your choice using evidence from this topic, while explaining how other causes contributed.</p>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Write respectfully about religious beliefs. Your essay is about historical causes, not about which beliefs are correct.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>List at least four causes of the Reformation and the evidence for each.</li>
    <li>Decide which cause was most important and write a thesis explaining why.</li>
    <li>Plan body paragraphs: one on your main cause and one or two on how other causes worked with it.</li>
    <li>Include at least three pieces of specific evidence (people, dates, documents).</li>
    <li>Include a counterclaim — why someone might choose a different cause — and a rebuttal.</li>
    <li>Write an introduction with historical context and a conclusion that explains the significance of your argument.</li>
    <li>Peer review, revise and submit with a source list.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Your list of causes and evidence</li>
    <li>Your outline</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, arguable thesis that ranks causes and explains why</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear thesis identifying the most important cause</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vague thesis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Specific, accurate evidence: people, dates and sources</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Limited evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little or no evidence</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Causal reasoning</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explains how causes interacted and why one mattered most</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explains causes clearly</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly lists causes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No explanation</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Counterclaim</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fair counterclaim with a convincing rebuttal</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Counterclaim and rebuttal present</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Counterclaim only</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organized, clear, respectful and correctly cited</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organized and cited</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Disorganized</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Use words such as “led to,” “as a result” and “because.”<br>Explain how causes connected, not just what they were.<br>Use dates as evidence anchors.<br>Keep a respectful, objective tone.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Did your view of the main cause change while writing?</li>
    <li>How did the counterclaim strengthen your argument?</li>
    <li>What evidence would you like to research further?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The essay asks you to identify:',
            options: ['The most important cause of the Reformation', 'Your favorite artist', 'The best religion', 'The date of the Renaissance only'],
            correct: 0,
            explanation: 'The answer is The most important cause of the Reformation. It is a causation essay.'
        },
        {
            question: 'A strong thesis in a causation essay:',
            options: ['Lists every date', 'Avoids taking a position', 'Repeats the question', 'Ranks causes and explains why one mattered most'],
            correct: 3,
            explanation: 'The answer is Ranks causes and explains why one mattered most. It makes an argument.'
        },
        {
            question: 'Which phrase signals causation?',
            options: ['As a result', 'For example', 'In contrast', 'Similarly'],
            correct: 0,
            explanation: 'The answer is As a result. It shows cause and effect.'
        },
        {
            question: 'The counterclaim should:',
            options: ['Mock other views', 'Be left out', 'Present another possible main cause fairly', 'Repeat your thesis'],
            correct: 2,
            explanation: 'The answer is Present another possible main cause fairly. Then rebut it.'
        },
        {
            question: 'Writing about religious history should be:',
            options: ['Mocking', 'Respectful and objective', 'One-sided', 'Personal attacks'],
            correct: 1,
            explanation: 'The answer is Respectful and objective. Focus on historical causes.'
        },
        {
            question: 'How many pieces of specific evidence are required?',
            options: ['One', 'None', 'Exactly ten', 'At least three'],
            correct: 3,
            explanation: 'The answer is At least three. At least three pieces.'
        }
    ]
},
{
    name: '1.1 Review: The Renaissance and the Reformation',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.1 The Renaissance and the Reformation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: The Renaissance and the Reformation</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.1 before moving on to the Scientific Revolution.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #bcaaa4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Italian Renaissance</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Began in wealthy Italian city-states around 1350.</li>
    <li>Humanism; patrons such as the Medici.</li>
    <li>Leonardo, Michelangelo, Raphael; Machiavelli’s The Prince.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #bcaaa4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Northern Renaissance and Printing</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Christian humanism: Erasmus, Thomas More.</li>
    <li>Realistic art: van Eyck, Dürer; Shakespeare.</li>
    <li>Gutenberg’s press c. 1450; earlier printing in China and Korea.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #bcaaa4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Protestant Reformation</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Luther’s Ninety-Five Theses, 1517.</li>
    <li>Calvin and predestination; Henry VIII and the Act of Supremacy, 1534.</li>
    <li>Peace of Augsburg, 1555.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #bcaaa4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Catholic Reformation and Effects</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Council of Trent, 1545–1563; the Jesuits.</li>
    <li>Divided Christianity; stronger monarchs; religious wars; rising literacy.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Person</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Known for</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Date</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Leonardo da Vinci</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mona Lisa; inventions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1452–1519</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Niccolò Machiavelli</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The Prince</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1513</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Johannes Gutenberg</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Movable-type printing press</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">c. 1450</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Martin Luther</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ninety-Five Theses</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1517</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Henry VIII</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Act of Supremacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1534</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ignatius of Loyola</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Founded the Jesuits</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1540</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Explain two reasons the Renaissance began in Italy.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Wealthy city-states and patrons; classical heritage; Greek scholars after 1453.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Compare Italian and Northern Renaissance art.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Italian art emphasized classical subjects and ideal beauty; northern art emphasized religion, daily life and fine realistic detail.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain how printing affected literacy.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Cheaper books, often in vernacular languages, encouraged more people to read.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> What was Luther’s main objection in 1517?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The sale of indulgences.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Describe the Peace of Augsburg.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A 1555 agreement letting each ruler in the Holy Roman Empire choose Lutheranism or Catholicism for their territory.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Give two effects of the Reformation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Divided Christianity, stronger monarchs, religious wars or increased literacy.</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can explain the causes of the Renaissance.</p>
    <p style="margin:6px 0;">☐ I can identify key Renaissance figures.</p>
    <p style="margin:6px 0;">☐ I can analyze the effects of printing.</p>
    <p style="margin:6px 0;">☐ I can explain the Protestant Reformation.</p>
    <p style="margin:6px 0;">☐ I can describe the Catholic Reformation and the effects of the Reformation.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Who wrote The Prince?',
            options: ['Erasmus', 'Luther', 'Machiavelli', 'Petrarch'],
            correct: 2,
            explanation: 'The answer is Machiavelli. Written in 1513.'
        },
        {
            question: 'Northern Renaissance art is known for:',
            options: ['Flat symbolic figures', 'Abstract shapes', 'Fine realistic detail', 'No religious subjects'],
            correct: 2,
            explanation: 'Artists like van Eyck used oils for detail.'
        },
        {
            question: 'The printing press increased:',
            options: ['Literacy', 'The cost of books', 'Copying by hand', 'Errors in copies'],
            correct: 0,
            explanation: 'The answer is Literacy. Books became cheaper.'
        },
        {
            question: 'The Peace of Augsburg was signed in:',
            options: ['1517', '1534', '1648', '1555'],
            correct: 3,
            explanation: 'It recognized Lutheranism in the Holy Roman Empire.'
        },
        {
            question: 'Which was part of the Catholic Reformation?',
            options: ['The Ninety-Five Theses', 'The Act of Supremacy', 'Calvin’s Institutes', 'The Council of Trent'],
            correct: 3,
            explanation: 'The answer is The Council of Trent. It met from 1545 to 1563.'
        },
        {
            question: 'A major effect of the Reformation was:',
            options: ['The division of Western Christianity', 'The end of printing', 'The rise of the Roman Empire', 'The invention of oil painting'],
            correct: 0,
            explanation: 'Catholic and Protestant churches emerged.'
        }
    ]
},
{
    name: '1.1 Summary: The Renaissance and the Reformation',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.1 The Renaissance and the Reformation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: The Renaissance and the Reformation</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> The Renaissance revived classical learning and celebrated human potential; the printing press spread new ideas faster than ever before; and reformers used those ideas and tools to challenge the Church, permanently dividing Western Christianity and reshaping European politics.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>The Renaissance began in wealthy Italian city-states, supported by patrons and inspired by classical texts.</li>
    <li>Humanism emphasized education, individual achievement and the study of the humanities.</li>
    <li>The Northern Renaissance focused more on religious and social reform and realistic art.</li>
    <li>Gutenberg’s printing press (c. 1450), building on earlier Asian printing, made books cheaper and increased literacy.</li>
    <li>Luther (1517), Calvin and Henry VIII led the Protestant Reformation for religious, political and economic reasons.</li>
    <li>The Catholic Reformation reformed the Church and spread Catholicism through the Council of Trent and the Jesuits.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.1 The Italian Renaissance</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Causes, humanism, art, Machiavelli</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use HIPP on primary sources</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.2 The Northern Renaissance and the Printing Press</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Christian humanism, northern art, effects of printing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trace cause-and-effect chains</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.3 The Protestant and Catholic Reformations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Causes, leaders, Catholic response, effects</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Consider multiple perspectives</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Renaissance</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">humanism</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">patron</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">secular</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">perspective</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Northern Renaissance</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">printing press</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">movable type</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">vernacular</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">indulgence</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Protestant</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">predestination</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Act of Supremacy</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Catholic Reformation</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Jesuits</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>The values of education, free inquiry and debate about authority that emerged in this era still shape modern societies.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>In Topic 1.2 you will see how the same spirit of questioning transformed science, overturning ancient ideas about the universe and creating the scientific method.</div>
    </div>
    <div style="background:#2b1f1b;padding:20px;border-radius:12px;border:1px solid #bcaaa4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can explain why the Renaissance began in Italy.</p>
    <p style="margin:6px 0;">✔️ I can describe humanism and key Renaissance figures.</p>
    <p style="margin:6px 0;">✔️ I can analyze the effects of the printing press.</p>
    <p style="margin:6px 0;">✔️ I can explain the causes and effects of the Reformation.</p>
    <p style="margin:6px 0;">✔️ I can describe the Catholic Reformation.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of Topic 1.1 is that new ideas and tools:',
            options: ['Ended all change', 'Stopped trade', 'Challenged traditional authority', 'Closed universities'],
            correct: 2,
            explanation: 'The answer is Challenged traditional authority. Questioning reshaped Europe.'
        },
        {
            question: 'Topic 1.2 will study:',
            options: ['The Cold War', 'Ancient Egypt', 'The Industrial Revolution', 'The Scientific Revolution'],
            correct: 3,
            explanation: 'The answer is The Scientific Revolution. New ways of knowing.'
        },
        {
            question: 'Who led the Reformation in Germany?',
            options: ['John Calvin', 'Martin Luther', 'Henry VIII', 'Erasmus'],
            correct: 1,
            explanation: 'The answer is Martin Luther. Luther began it in 1517.'
        },
        {
            question: 'The printing press built on earlier printing from:',
            options: ['Ancient Egypt only', 'The Americas', 'Australia', 'China and Korea'],
            correct: 3,
            explanation: 'Movable type existed in Asia first.'
        },
        {
            question: 'Humanism emphasized:',
            options: ['Rejecting education', 'Only farming', 'Human potential and classical learning', 'Military power only'],
            correct: 2,
            explanation: 'Humanists studied the humanities.'
        },
        {
            question: 'The Jesuits were part of the:',
            options: ['Catholic Reformation', 'Protestant Reformation', 'Italian Renaissance', 'Scientific Revolution'],
            correct: 0,
            explanation: 'Founded by Ignatius of Loyola.'
        }
    ]
},
{
    name: '1.2.1 A New View of the Universe',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.2 The Scientific Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: New Ways of Knowing</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.1: A New View of the Universe</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how Copernicus, Kepler and Galileo replaced the ancient Earth-centered model of the universe with a Sun-centered model, and why their ideas caused controversy.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> The shift from an Earth-centered to a Sun-centered universe changed how people saw their place in the cosmos and showed the power of observation and evidence over tradition.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔭 Astronomy and space</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛰️ Satellites and GPS</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📅 Calendars</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧭 Navigation</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Debates about authority</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎓 Universities</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how the Scientific Revolution changed ideas about the universe. (D2.His.1)</li>
    <li>Describe the scientific method and the contributions of key scientists. (D2.His.14)</li>
    <li>Analyze the global roots and long-term impact of the Scientific Revolution. (D2.His.2)</li>
    <li>Use primary sources to evaluate a historical controversy. (D2.His.4, D3.1)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the geocentric model and why people accepted it.</li>
    <li>Explain the heliocentric model of Copernicus.</li>
    <li>Describe the contributions of Kepler and Galileo.</li>
    <li>Explain why the new astronomy was controversial.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How did observation and evidence overturn a belief held for over a thousand years?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Topic 1.1 you saw how humanism and the printing press encouraged people to question traditional authorities. Now the same questioning turns to the heavens.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>For more than 1,400 years, most educated Europeans accepted the <strong>geocentric</strong> (Earth-centered) model of the universe. It was described by the ancient Greek philosopher Aristotle and refined by the astronomer <strong>Ptolemy</strong> around 150 CE. In this model the Earth sat motionless at the center while the Moon, Sun, planets and stars moved around it. It matched everyday experience — the Sun appears to rise and set — and it fit with Church teachings of the time.</p>
    <p>In 1543 the Polish astronomer <strong>Nicolaus Copernicus</strong> published <em>On the Revolutions of the Heavenly Spheres</em>, arguing for a <strong>heliocentric</strong> (Sun-centered) model in which Earth and the other planets orbit the Sun. Historians often mark 1543 as the start of the <strong>Scientific Revolution</strong>.</p>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Geocentric = Earth at the center. Heliocentric = Sun at the center. “Geo” means Earth; “helio” means Sun.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Historical Context</h3>
    <p>The Scientific Revolution was a period, roughly 1543–1687, when European thinkers began relying on observation, experiment and mathematics rather than accepting ancient authorities without question. It did not happen in isolation: it built on knowledge preserved and expanded by scholars in the Islamic world, India and China, which you will study in Lesson 1.2.3.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and when or where it applies. Use the example to see it in context.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">geocentric model</strong>
    </p>
    <p style="margin:6px 0;">The theory that Earth is the center of the universe.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Aristotle, Ptolemy</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Ptolemy’s geocentric model lasted centuries.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">heliocentric model</strong>
    </p>
    <p style="margin:6px 0;">The theory that the Sun is the center of the solar system.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Copernicus, 1543</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Galileo supported the heliocentric model.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Scientific Revolution</strong>
    </p>
    <p style="margin:6px 0;">A period of new scientific thinking in Europe, c. 1543–1687.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Europe</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>It began with Copernicus.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">ellipse</strong>
    </p>
    <p style="margin:6px 0;">An oval shape; Kepler showed planetary orbits are elliptical.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Kepler, 1609</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Earth’s orbit is a slight ellipse.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">telescope</strong>
    </p>
    <p style="margin:6px 0;">An instrument that makes distant objects appear closer.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Netherlands, 1608; Galileo, 1609</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Galileo’s telescope revealed Jupiter’s moons.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">heresy</strong>
    </p>
    <p style="margin:6px 0;">A belief that contradicts official religious teaching.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Church history</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Galileo was found “vehemently suspect of heresy.”</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Two Models of the Universe</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 304" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="24" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Two Models of the Universe (simplified)</text><text x="180" y="44" fill="#fde68a" font-size="14" font-weight="bold" text-anchor="middle">Geocentric (Ptolemy)</text><text x="520" y="44" fill="#86efac" font-size="14" font-weight="bold" text-anchor="middle">Heliocentric (Copernicus)</text><circle cx="180" cy="154" r="34" fill="none" stroke="#475569" stroke-width="1.2" stroke-dasharray="4 4"/><circle cx="180" cy="154" r="56" fill="none" stroke="#475569" stroke-width="1.2" stroke-dasharray="4 4"/><circle cx="180" cy="154" r="78" fill="none" stroke="#475569" stroke-width="1.2" stroke-dasharray="4 4"/><circle cx="180" cy="154" r="100" fill="none" stroke="#475569" stroke-width="1.2" stroke-dasharray="4 4"/><circle cx="180" cy="154" r="14" fill="#60a5fa"/><circle cx="201.1" cy="127.4" r="7" fill="#cbd5e1"/><circle cx="235.4" cy="145.6" r="7" fill="#fcd34d"/><circle cx="244.4" cy="198.0" r="7" fill="#fbbf24"/><circle cx="201.9" cy="251.6" r="7" fill="#f87171"/><text x="180" y="274" fill="#e2e8f0" font-size="12" text-anchor="middle">Center: Earth</text><circle cx="520" cy="154" r="34" fill="none" stroke="#475569" stroke-width="1.2" stroke-dasharray="4 4"/><circle cx="520" cy="154" r="56" fill="none" stroke="#475569" stroke-width="1.2" stroke-dasharray="4 4"/><circle cx="520" cy="154" r="78" fill="none" stroke="#475569" stroke-width="1.2" stroke-dasharray="4 4"/><circle cx="520" cy="154" r="100" fill="none" stroke="#475569" stroke-width="1.2" stroke-dasharray="4 4"/><circle cx="520" cy="154" r="14" fill="#fbbf24"/><circle cx="541.1" cy="127.4" r="7" fill="#cbd5e1"/><circle cx="575.4" cy="145.6" r="7" fill="#fcd34d"/><circle cx="584.4" cy="198.0" r="7" fill="#60a5fa"/><circle cx="541.9" cy="251.6" r="7" fill="#f87171"/><text x="520" y="274" fill="#e2e8f0" font-size="12" text-anchor="middle">Center: Sun</text><text x="180" y="292" fill="#94a3b8" font-size="11" text-anchor="middle">Moon, Venus, Sun, Mars circle Earth</text><text x="520" y="292" fill="#94a3b8" font-size="11" text-anchor="middle">Mercury, Venus, Earth, Mars circle the Sun</text><line x1="350" y1="56" x2="350" y2="260" stroke="#334155" stroke-width="1.5"/>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Feature</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Geocentric model</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Heliocentric model</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Center</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Earth</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sun</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Key thinkers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aristotle, Ptolemy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Copernicus, Kepler, Galileo</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Based on</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Everyday observation and ancient authority</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Careful measurement, mathematics and telescope observations</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Problem it faced</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Needed complicated extra circles (epicycles) to explain planet movements</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Challenged tradition and some religious interpretations</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Kepler and Galileo</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Scientist</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Dates</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Contribution</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nicolaus Copernicus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1473–1543</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Heliocentric model; On the Revolutions (1543)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tycho Brahe</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1546–1601</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Made the most accurate naked-eye measurements of planets</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Johannes Kepler</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1571–1630</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Used Brahe’s data to show planets move in elliptical orbits (1609)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Galileo Galilei</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1564–1642</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Improved the telescope (1609); discovered four moons of Jupiter (1610); observed phases of Venus and craters on the Moon</td>
    </tr>
    </table>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Galileo’s observations were powerful evidence. Moons orbiting Jupiter showed that not everything circles Earth, and the full set of phases of Venus could be explained by Venus orbiting the Sun.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Evaluating evidence</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Why was Galileo’s discovery of Jupiter’s moons important evidence against the geocentric model?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> The geocentric model said every heavenly body circles Earth.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Claim of old model</strong>
    </p>
    <div style="margin:6px 0 0 34px;">All heavenly bodies orbit Earth.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Observation</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Four moons were seen orbiting Jupiter.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Conclusion</strong>
    </p>
    <div style="margin:6px 0 0 34px;">At least some bodies orbit something other than Earth, so the old model’s central claim was wrong.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> It showed that objects could orbit a body other than Earth, directly contradicting a central claim of the geocentric model.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Saying the moons “proved” heliocentrism on their own — they disproved one key idea, while other evidence, such as the phases of Venus, supported the Sun-centered model.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Controversy and the Church</h3>
    <p>Many Church leaders at the time interpreted certain Bible passages as describing a fixed Earth, and they valued the traditional teachings of Aristotle. In 1616 the Church declared the heliocentric idea contrary to Scripture and warned Galileo not to defend it. In 1632 Galileo published <em>Dialogue Concerning the Two Chief World Systems</em>, which appeared to favor heliocentrism. In 1633 he was tried by the Roman Inquisition, forced to recant (publicly take back his views) and placed under house arrest for the rest of his life.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>A famous story says Galileo muttered “And yet it moves” (Eppur si muove) after his trial. There is no reliable evidence that he said it; historians treat it as a legend.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Many scientists of this era, including Copernicus, Kepler and Galileo, were themselves religious believers. In 1992, Pope John Paul II formally acknowledged that the Church had erred in its treatment of Galileo.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What did Copernicus place at the center of the universe?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Sun.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What did Kepler discover about planetary orbits?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They are ellipses, not perfect circles.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What happened to Galileo in 1633?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">He was tried by the Inquisition, forced to recant and placed under house arrest.</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing models</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Evaluating evidence</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Causation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Sourcing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Separating fact from legend</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Thinking Like a Historian</h3>
    <p>The Galileo affair is often told as a simple story of “science versus religion,” but historians see it as more complex. Personal rivalries, politics in Rome, the Church’s response to the Reformation and the fact that Galileo could not yet fully prove Earth’s motion all played a role. Looking at multiple causes gives a more accurate picture than a simple conflict story.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why might people resist a new idea even when evidence supports it? Can you think of a modern example?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #bcaaa4;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 History in Today’s World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Space agencies plan missions using Kepler’s laws of planetary motion, which are still taught in physics today.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Modern astronomy and satellites help scientists monitor climate, weather and changes to Earth’s surface.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Astronomers, astrophysicists, satellite engineers and historians of science build on the work of the Scientific Revolution.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Who described the geocentric model around 150 CE?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: An ancient astronomer in Alexandria.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Ptolemy.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What does “heliocentric” mean?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Helios = Sun.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Sun-centered.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> What shape did Kepler show planetary orbits to be?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: An oval.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Ellipses.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Draw and label both models of the universe, then write two sentences explaining what evidence supported the heliocentric model.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Write a short dialogue between a supporter of Ptolemy and a supporter of Copernicus in 1600, each using evidence available at the time.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Build a living model: students act as the Sun, Earth and planets to show the difference between geocentric and heliocentric motion.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use an online planetarium or sky-simulation website to observe Jupiter’s moons and the phases of Venus as Galileo did.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define the geocentric model.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The theory that Earth is at the center of the universe.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> When did Copernicus publish his heliocentric theory?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1543.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain why many people accepted the geocentric model for so long.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It matched everyday observation, came from respected ancient authorities and fit religious interpretations of the time.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Describe two of Galileo’s telescope discoveries.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Four moons of Jupiter; phases of Venus; craters on the Moon; sunspots.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #bcaaa4;">
    <p style="margin:0 0 6px 0;color:#bcaaa4;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain why historians say the Galileo affair was not simply “science versus religion.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Personal rivalries, politics, the Church’s reaction to the Reformation and incomplete proof all played a role; many scientists were religious.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Give a modern example of a new scientific idea that people resisted at first.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Answers vary, e.g. continental drift (plate tectonics) or germ theory.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> D2.His.14: Explain how Galileo’s observations contributed to the acceptance of the heliocentric model.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">His telescope revealed moons orbiting Jupiter and the phases of Venus, providing evidence that contradicted the geocentric model and supported a Sun-centered system.</div>
    </details>
    </div>
    </div>
    <div style="background:#2b1f1b;padding:20px;border-radius:12px;border:1px solid #bcaaa4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>For centuries, Europeans accepted Ptolemy’s geocentric model. In 1543 Copernicus proposed a heliocentric model, beginning the Scientific Revolution. Kepler showed that planets move in elliptical orbits, and Galileo’s telescope observations provided strong evidence for the new view. Galileo’s support for heliocentrism led to his trial in 1633 and house arrest, a complex event involving religion, politics and personal conflict.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Geocentric: Ptolemy, Earth at center.</li>
    <li>Heliocentric: Copernicus, 1543.</li>
    <li>Kepler: elliptical orbits, 1609.</li>
    <li>Galileo: telescope, Jupiter’s moons, trial 1633.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Geo = Earth; helio = Sun.</li>
    <li>“Eppur si muove” is a legend.</li>
    <li>Many scientists were religious.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Thinking Galileo invented the telescope.</li>
    <li>Saying Copernicus used a telescope (he did not).</li>
    <li>Oversimplifying the Galileo affair.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use a two-model comparison chart.</li>
    <li>Link each scientist to one discovery.</li>
    <li>Separate evidence from legend.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain evidence, not just names.</li>
    <li>Discuss multiple causes of the Galileo affair.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.1 Context</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Why the old model lasted.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.14 Causation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How evidence changed ideas.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.4 Perspectives</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Church and scientists’ views.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for evidence</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Open-mindedness</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for different beliefs</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Science and society</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Freedom of inquiry</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> The willingness to test ideas against evidence, shown by Copernicus, Kepler and Galileo, is the foundation of modern science.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a paragraph explaining the most important piece of evidence for the heliocentric model.</li>
    <li>Research one of Galileo’s discoveries and explain what it showed.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How do I respond when evidence challenges something I believed?</li>
    <li>Why do legends like “Eppur si muove” spread?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Geocentric</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Earth-centered.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Heliocentric</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sun-centered.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Ellipse</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Oval orbit.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Recant</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Publicly take back a belief.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can describe the geocentric model.</p>
    <p style="margin:6px 0;">☐ I can explain the heliocentric model.</p>
    <p style="margin:6px 0;">☐ I can describe Kepler’s and Galileo’s contributions.</p>
    <p style="margin:6px 0;">☐ I can explain the Galileo controversy.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The geocentric model places at the center of the universe:',
            options: ['The Sun', 'Earth', 'The Moon', 'Jupiter'],
            correct: 1,
            explanation: 'The answer is Earth. Geo means Earth.'
        },
        {
            question: 'Who published a heliocentric theory in 1543?',
            options: ['Ptolemy', 'Galileo', 'Copernicus', 'Newton'],
            correct: 2,
            explanation: 'On the Revolutions of the Heavenly Spheres.'
        },
        {
            question: 'Kepler showed that planets move in:',
            options: ['Perfect circles', 'Straight lines', 'Elliptical orbits', 'Squares'],
            correct: 2,
            explanation: 'The answer is Elliptical orbits. He used Brahe’s data.'
        },
        {
            question: 'Galileo discovered moons orbiting:',
            options: ['Jupiter', 'Mars', 'Venus', 'Mercury'],
            correct: 0,
            explanation: 'The answer is Jupiter. Four moons, in 1610.'
        },
        {
            question: 'Whose accurate measurements did Kepler use?',
            options: ['Ptolemy', 'Aristotle', 'Luther', 'Tycho Brahe'],
            correct: 3,
            explanation: 'Brahe made precise naked-eye observations.'
        },
        {
            question: 'In 1633 Galileo was:',
            options: ['Made pope', 'Tried and placed under house arrest', 'Awarded a prize', 'Exiled to America'],
            correct: 1,
            explanation: 'The answer is Tried and placed under house arrest. He was forced to recant.'
        },
        {
            question: 'The phrase “Eppur si muove” is best described as:',
            options: ['Galileo’s recorded testimony', 'Copernicus’s motto', 'A Church decree', 'A legend without reliable evidence'],
            correct: 3,
            explanation: 'Historians treat it as a legend.'
        },
        {
            question: 'The Scientific Revolution is often dated from:',
            options: ['1453', '1776', '1543', '1914'],
            correct: 2,
            explanation: 'The answer is 1543. Copernicus published in 1543.'
        },
        {
            question: 'Why did many people accept the geocentric model?',
            options: ['It matched everyday observation and ancient authority', 'Telescopes proved it', 'Newton supported it', 'Galileo invented it'],
            correct: 0,
            explanation: 'The Sun seems to move across the sky.'
        },
        {
            question: 'Which observation by Galileo supported the heliocentric model?',
            options: ['A flat Earth', 'A stationary Sun circling Earth', 'Comets in fixed positions', 'The phases of Venus'],
            correct: 3,
            explanation: 'Venus’s phases fit a Sun-centered orbit.'
        }
    ]
},
{
    name: '1.2.2 The Scientific Method and Isaac Newton',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.2 The Scientific Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: New Ways of Knowing</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.2: The Scientific Method and Isaac Newton</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how Francis Bacon and René Descartes shaped the scientific method, how Vesalius and Harvey transformed medicine, and how Isaac Newton united physics and astronomy.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> The scientific method is still how scientists test ideas today — from developing vaccines to testing new technologies. Understanding its origins helps you think critically about evidence in everyday life.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧪 Science labs</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💉 Medicine</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚀 Space travel</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏗️ Engineering</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📊 Data analysis</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧠 Critical thinking</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how the Scientific Revolution changed ideas about the universe. (D2.His.1)</li>
    <li>Describe the scientific method and the contributions of key scientists. (D2.His.14)</li>
    <li>Analyze the global roots and long-term impact of the Scientific Revolution. (D2.His.2)</li>
    <li>Use primary sources to evaluate a historical controversy. (D2.His.4, D3.1)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the steps of the scientific method.</li>
    <li>Compare the approaches of Bacon and Descartes.</li>
    <li>Explain advances in medicine by Vesalius and Harvey.</li>
    <li>Explain Newton’s law of universal gravitation and its importance.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How did a new method of investigating the world change science forever?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.2.1 you saw how observation challenged the geocentric model. Now you will see how thinkers turned observation and experiment into a systematic method.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Before the Scientific Revolution, many scholars answered questions about nature by reasoning from ancient authorities such as Aristotle. During the 1600s, thinkers developed a new approach: the <strong>scientific method</strong>, a step-by-step process of observing, forming a hypothesis, testing it through experiments and drawing conclusions based on evidence.</p>
    <p>The English philosopher <strong>Francis Bacon</strong> (1561–1626) urged scientists to gather evidence through careful observation and experiment and then draw general conclusions — an approach called <strong>inductive reasoning</strong>. The French philosopher <strong>René Descartes</strong> (1596–1650) emphasized doubt and mathematical logic, starting from basic truths and reasoning step by step — <strong>deductive reasoning</strong>. Modern science combines both.</p>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Bacon: experiment first, then conclude (induction). Descartes: doubt everything, reason logically (deduction).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Historical Context</h3>
    <p>Descartes began by doubting everything he could and found one thing he could not doubt: that he was thinking. He summarized this in his famous phrase “I think, therefore I am,” published in <em>Discourse on Method</em> (1637). Bacon’s <em>Novum Organum</em> (1620) argued that knowledge must be built on experiments rather than on ancient books.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and when or where it applies. Use the example to see it in context.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">scientific method</strong>
    </p>
    <p style="margin:6px 0;">A step-by-step process for investigating questions through observation and experiment.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> developed in the 1600s</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Scientists still use the scientific method.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">hypothesis</strong>
    </p>
    <p style="margin:6px 0;">A testable explanation or prediction.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> scientific method</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A good hypothesis can be tested.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">inductive reasoning</strong>
    </p>
    <p style="margin:6px 0;">Drawing general conclusions from specific observations.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Francis Bacon</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Bacon favored induction.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">deductive reasoning</strong>
    </p>
    <p style="margin:6px 0;">Reasoning from general principles to specific conclusions.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> René Descartes</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Descartes used logic and mathematics.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">anatomy</strong>
    </p>
    <p style="margin:6px 0;">The study of the structure of the body.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Vesalius, 1543</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Vesalius dissected human bodies.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">gravity</strong>
    </p>
    <p style="margin:6px 0;">The force of attraction between objects with mass.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Newton, 1687</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Gravity keeps planets in orbit.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. The Scientific Method</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 190" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">The Scientific Method</text><rect x="16" y="56" width="98" height="56" rx="12" fill="#10233d" stroke="#bcaaa4" stroke-width="2"/><text x="65" y="80" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">Step 1</text><text x="65" y="99" fill="#e2e8f0" font-size="13" text-anchor="middle">Observe</text><line x1="115" y1="84" x2="118.0" y2="84.0" stroke="#94a3b8" stroke-width="2"/><polygon points="128,84 118.0,89.0 118.0,79.0" fill="#94a3b8"/><rect x="129" y="56" width="98" height="56" rx="12" fill="#10233d" stroke="#bcaaa4" stroke-width="2"/><text x="178" y="80" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">Step 2</text><text x="178" y="99" fill="#e2e8f0" font-size="13" text-anchor="middle">Question</text><line x1="228" y1="84" x2="231.0" y2="84.0" stroke="#94a3b8" stroke-width="2"/><polygon points="241,84 231.0,89.0 231.0,79.0" fill="#94a3b8"/><rect x="242" y="56" width="98" height="56" rx="12" fill="#10233d" stroke="#bcaaa4" stroke-width="2"/><text x="291" y="80" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">Step 3</text><text x="291" y="99" fill="#e2e8f0" font-size="13" text-anchor="middle">Hypothesis</text><line x1="341" y1="84" x2="344.0" y2="84.0" stroke="#94a3b8" stroke-width="2"/><polygon points="354,84 344.0,89.0 344.0,79.0" fill="#94a3b8"/><rect x="355" y="56" width="98" height="56" rx="12" fill="#10233d" stroke="#bcaaa4" stroke-width="2"/><text x="404" y="80" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">Step 4</text><text x="404" y="99" fill="#e2e8f0" font-size="13" text-anchor="middle">Experiment</text><line x1="454" y1="84" x2="457.0" y2="84.0" stroke="#94a3b8" stroke-width="2"/><polygon points="467,84 457.0,89.0 457.0,79.0" fill="#94a3b8"/><rect x="468" y="56" width="98" height="56" rx="12" fill="#10233d" stroke="#bcaaa4" stroke-width="2"/><text x="517" y="80" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">Step 5</text><text x="517" y="99" fill="#e2e8f0" font-size="13" text-anchor="middle">Analyze</text><line x1="567" y1="84" x2="570.0" y2="84.0" stroke="#94a3b8" stroke-width="2"/><polygon points="580,84 570.0,89.0 570.0,79.0" fill="#94a3b8"/><rect x="581" y="56" width="98" height="56" rx="12" fill="#10233d" stroke="#bcaaa4" stroke-width="2"/><text x="630" y="80" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">Step 6</text><text x="630" y="99" fill="#e2e8f0" font-size="13" text-anchor="middle">Conclude</text><path d="M 638 114 C 638 160, 65 160, 65 116" fill="none" stroke="#86efac" stroke-width="2" stroke-dasharray="6 4"/><polygon points="65,114 60,125 70,125" fill="#86efac"/><text x="350" y="178" fill="#86efac" font-size="12" text-anchor="middle">Results lead to new questions — science is a cycle, not a straight line.</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Thinker</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Work</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Approach</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Francis Bacon (England)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Novum Organum (1620)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Inductive reasoning: experiment and observe, then generalize</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">René Descartes (France)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Discourse on Method (1637)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Deductive reasoning: doubt, mathematics and logic</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Applying the method</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A student wonders whether plants grow faster with more light. Show how the scientific method could test this.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Observe</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Plants near the window seem taller.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Question</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Does more light make plants grow faster?</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Hypothesis</strong>
    </p>
    <div style="margin:6px 0 0 34px;">If plants get more light, then they will grow taller.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Experiment</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Grow identical plants with different amounts of light, keeping water and soil the same.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e3f2fd;">Step 5: Analyze</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Measure and compare heights over two weeks.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">6</span><strong style="color:#e3f2fd;">Step 6: Conclude</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Decide whether the evidence supports the hypothesis.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> The method turns a casual observation into a fair, repeatable test.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Keeping other factors the same means any difference is likely caused by light.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Revolution in Medicine</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Scientist</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Date</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Contribution</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Andreas Vesalius</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1543</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">On the Fabric of the Human Body: accurate anatomy based on dissection, correcting errors from the ancient physician Galen</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">William Harvey</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1628</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Showed that the heart pumps blood in a continuous circuit through the body</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Antonie van Leeuwenhoek</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1670s</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Used microscopes to observe bacteria and other microorganisms</td>
    </tr>
    </table>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>1543 was a remarkable year: Copernicus’s book on astronomy and Vesalius’s book on anatomy were both published, and both challenged ancient authorities.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Isaac Newton</h3>
    <p>The English scientist <strong>Isaac Newton</strong> (1643–1727) brought together the work of Copernicus, Kepler and Galileo. In <em>Mathematical Principles of Natural Philosophy</em> (the <em>Principia</em>, 1687), he described three <strong>laws of motion</strong> and the <strong>law of universal gravitation</strong>: every object in the universe attracts every other object. The same force that makes an apple fall keeps the Moon in orbit around Earth.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Newton’s law of motion</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">In simple words</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">First law</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">An object stays at rest or keeps moving at the same speed in a straight line unless a force acts on it.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Second law</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Force equals mass times acceleration (F = ma).</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Third law</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">For every action, there is an equal and opposite reaction.</td>
    </tr>
    </table>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Newton also helped develop calculus (independently of the German mathematician Gottfried Leibniz) and studied light, showing that white light is made of a spectrum of colors.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Who favored inductive reasoning?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Francis Bacon.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What did William Harvey discover?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">That blood circulates continuously through the body, pumped by the heart.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What did Newton’s law of universal gravitation explain?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">That every object attracts every other object; the same force explains falling objects and planetary orbits.</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Applying the scientific method</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing reasoning approaches</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Causation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Synthesis</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Connecting history and science</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Thinking Like a Historian</h3>
    <p>Newton’s work suggested that the universe operated according to natural laws that humans could discover through reason. This idea inspired thinkers in the 1700s to ask whether similar laws applied to government, economics and society — the beginning of the <strong>Enlightenment</strong>, which you will study next.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Newton wrote that if he had seen further, it was by standing on the shoulders of giants. Who were the “giants” whose work he built on?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #bcaaa4;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 History in Today’s World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Doctors test new medicines with controlled trials, a direct descendant of the experimental method developed in this era.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Environmental scientists use the scientific method to study pollution, climate and ecosystems.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Engineers use Newton’s laws to design bridges, cars, rockets and roller coasters.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What is a hypothesis?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: If… then…</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A testable explanation or prediction.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Whose ancient anatomy errors did Vesalius correct?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: An ancient Greek physician.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Galen’s.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> When was Newton’s Principia published?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Late 1600s.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1687.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Design a simple experiment using the six steps of the scientific method to answer a question about everyday life.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Compare Bacon’s and Descartes’s approaches in a Venn diagram, including what they shared.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Create a “Scientific Revolution hall of fame” with one poster each for Copernicus, Galileo, Vesalius, Harvey and Newton.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use an online physics simulation to test one of Newton’s laws of motion and record your observations.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> List the six steps of the scientific method.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Observe, question, hypothesis, experiment, analyze, conclude.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Who wrote Discourse on Method?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">René Descartes.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Compare inductive and deductive reasoning.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Inductive moves from specific observations to general conclusions; deductive moves from general principles to specific conclusions.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Explain the importance of Vesalius’s work.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">He based anatomy on dissection, correcting ancient errors and making medicine more evidence-based.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #bcaaa4;">
    <p style="margin:0 0 6px 0;color:#bcaaa4;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain how Newton’s work brought together earlier discoveries.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">His law of universal gravitation explained why planets follow Kepler’s elliptical orbits and connected Galileo’s studies of motion on Earth with motion in the heavens.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Describe a situation where you could use the scientific method outside of school.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Answers vary, e.g. testing which study method helps you remember more.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> D2.His.14: Explain how the scientific method changed the way Europeans gained knowledge.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Instead of relying on ancient authorities, scholars tested ideas through observation and experiment, leading to more reliable knowledge and new discoveries.</div>
    </details>
    </div>
    </div>
    <div style="background:#2b1f1b;padding:20px;border-radius:12px;border:1px solid #bcaaa4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>During the Scientific Revolution, Francis Bacon and René Descartes helped develop the scientific method, combining experiment and logical reasoning. Vesalius and Harvey transformed medicine by basing it on observation and dissection. Isaac Newton’s Principia (1687) described the laws of motion and universal gravitation, uniting the discoveries of earlier scientists and suggesting the universe follows natural laws.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Scientific method: observe → conclude.</li>
    <li>Bacon: induction; Descartes: deduction.</li>
    <li>Vesalius 1543; Harvey 1628.</li>
    <li>Newton: Principia, 1687; gravity.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Science is a cycle.</li>
    <li>A hypothesis must be testable.</li>
    <li>Newton built on earlier scientists.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Mixing up induction and deduction.</li>
    <li>Thinking Newton worked alone.</li>
    <li>Forgetting medicine was part of the revolution.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Learn the six steps in order.</li>
    <li>Link each scientist to a date.</li>
    <li>Connect Newton to the Enlightenment.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain why the method mattered.</li>
    <li>Use specific scientists as evidence.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Effects of the scientific method.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.2 Change</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">From authority to evidence.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Interdisciplinary</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">History and science.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for evidence</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Perseverance</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Science and technology</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health and medicine</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every time you test an idea and change your mind based on results, you are using the method these thinkers developed.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a paragraph explaining why the scientific method was revolutionary.</li>
    <li>Research one scientist from this lesson and describe their most important contribution.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do I usually test my ideas or assume they are right?</li>
    <li>Which scientist’s work has affected my life the most?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hypothesis</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Testable prediction.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Induction</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Specific to general.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Deduction</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">General to specific.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Gravity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Force of attraction.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can describe the scientific method.</p>
    <p style="margin:6px 0;">☐ I can compare Bacon and Descartes.</p>
    <p style="margin:6px 0;">☐ I can explain advances in medicine.</p>
    <p style="margin:6px 0;">☐ I can explain Newton’s importance.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A hypothesis is:',
            options: ['A proven fact', 'A conclusion', 'A guess that cannot be tested', 'A testable explanation or prediction'],
            correct: 3,
            explanation: 'It can be tested by experiment.'
        },
        {
            question: 'Francis Bacon promoted:',
            options: ['Accepting ancient authorities', 'Astrology', 'Inductive reasoning based on experiment', 'Deductive logic only'],
            correct: 2,
            explanation: 'The answer is Inductive reasoning based on experiment. Novum Organum, 1620.'
        },
        {
            question: '“I think, therefore I am” was written by:',
            options: ['Bacon', 'Descartes', 'Newton', 'Galileo'],
            correct: 1,
            explanation: 'The answer is Descartes. Discourse on Method, 1637.'
        },
        {
            question: 'Vesalius is known for his work in:',
            options: ['Astronomy', 'Human anatomy', 'Printing', 'Politics'],
            correct: 1,
            explanation: 'The answer is Human anatomy. He dissected human bodies.'
        },
        {
            question: 'William Harvey showed that:',
            options: ['Blood circulates through the body', 'Earth orbits the Sun', 'Light is made of colors', 'Planets move in ellipses'],
            correct: 0,
            explanation: 'The answer is Blood circulates through the body. Published in 1628.'
        },
        {
            question: 'Newton’s Principia was published in:',
            options: ['1687', '1543', '1517', '1776'],
            correct: 0,
            explanation: 'It described gravity and motion.'
        },
        {
            question: 'The law of universal gravitation states that:',
            options: ['Only Earth has gravity', 'Objects fall at random', 'Gravity only affects planets', 'Every object attracts every other object'],
            correct: 3,
            explanation: 'The answer is Every object attracts every other object. It applies everywhere.'
        },
        {
            question: 'Newton’s third law says:',
            options: ['For every action there is an equal and opposite reaction', 'Force equals mass times acceleration', 'Objects at rest stay at rest', 'Planets move in ellipses'],
            correct: 0,
            explanation: 'The answer is For every action there is an equal and opposite reaction. Action and reaction.'
        },
        {
            question: 'Deductive reasoning moves from:',
            options: ['Specific observations to general rules', 'Guesses to facts', 'Art to science', 'General principles to specific conclusions'],
            correct: 3,
            explanation: 'The answer is General principles to specific conclusions. Descartes used deduction.'
        },
        {
            question: 'Newton’s ideas about natural laws later inspired:',
            options: ['The Renaissance', 'The fall of Rome', 'The Enlightenment', 'The Black Death'],
            correct: 2,
            explanation: 'Thinkers applied reason to society.'
        }
    ]
},
{
    name: '1.2.3 The Global Roots and Impact of the Scientific Revolution',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.2 The Scientific Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: New Ways of Knowing</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.3: The Global Roots and Impact of the Scientific Revolution</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how scholars in the Islamic world, India and China contributed knowledge that made the Scientific Revolution possible, and how the revolution led to the Enlightenment and modern science.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Science is a global, shared human achievement. Recognizing contributions from many cultures gives a more accurate history and shows how ideas travel and build on each other.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔢 The numbers we use</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">👓 Optics and cameras</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💊 Medicine</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧭 Navigation</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌍 Global cooperation</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💡 Modern science</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how the Scientific Revolution changed ideas about the universe. (D2.His.1)</li>
    <li>Describe the scientific method and the contributions of key scientists. (D2.His.14)</li>
    <li>Analyze the global roots and long-term impact of the Scientific Revolution. (D2.His.2)</li>
    <li>Use primary sources to evaluate a historical controversy. (D2.His.4, D3.1)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify contributions of Islamic, Indian and Chinese scholars to science.</li>
    <li>Explain how knowledge traveled to Europe.</li>
    <li>Analyze the long-term impact of the Scientific Revolution.</li>
    <li>Evaluate the claim that the Scientific Revolution was purely European.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> Was the Scientific Revolution a European achievement, a global one, or both?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lessons 1.2.1 and 1.2.2 you studied European scientists. Now you will look at the earlier knowledge they built on.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>While much of Europe experienced the early Middle Ages, scholars in the Islamic world were translating, preserving and expanding Greek knowledge. In Baghdad, the <strong>House of Wisdom</strong> became a famous center of learning in the 800s. Scholars there and in cities such as Cairo and Córdoba made major advances in mathematics, astronomy, optics and medicine.</p>
    <p>Knowledge also came from further east. Indian mathematicians developed the <strong>decimal place-value system and the concept of zero</strong>, which reached Europe through Arabic texts — which is why we call them “Hindu-Arabic numerals.” Chinese inventions such as <strong>paper, printing, the compass and gunpowder</strong> transformed communication, exploration and warfare.</p>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>European scientists stood on the shoulders of giants from many cultures.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Historical Context</h3>
    <p>Much of this knowledge reached Europe through Spain, Sicily and trade with the Islamic world, where Arabic texts were translated into Latin from the 1100s onward. By the time of the Renaissance, European universities taught from translations of Greek and Arabic works.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and when or where it applies. Use the example to see it in context.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">House of Wisdom</strong>
    </p>
    <p style="margin:6px 0;">A center of learning and translation in Baghdad, founded in the 800s.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Abbasid Caliphate</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Scholars translated Greek texts there.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">optics</strong>
    </p>
    <p style="margin:6px 0;">The study of light and vision.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Ibn al-Haytham, c. 1011–1021</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The Book of Optics influenced European science.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">algebra</strong>
    </p>
    <p style="margin:6px 0;">A branch of mathematics using symbols to represent numbers.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> al-Khwarizmi, 800s</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The word comes from Arabic “al-jabr.”</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Hindu-Arabic numerals</strong>
    </p>
    <p style="margin:6px 0;">The digits 0–9 and place-value system developed in India and spread by Arabic scholars.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> India, then the Islamic world</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>We use them every day.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Enlightenment</strong>
    </p>
    <p style="margin:6px 0;">An 18th-century movement applying reason to society and government.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Europe and the Americas, 1700s</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>It followed the Scientific Revolution.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #bcaaa4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">transmission</strong>
    </p>
    <p style="margin:6px 0;">The passing of knowledge from one culture to another.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> all periods</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Translations transmitted knowledge.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Contributions from Many Cultures</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 250" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Global Roots of the Scientific Revolution</text><rect x="20" y="48" width="152" height="62" rx="10" fill="#10233d" stroke="#fde68a" stroke-width="2"/><text x="96" y="74" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Ancient Greece</text><text x="96" y="94" fill="#cbd5e1" font-size="11" text-anchor="middle">Aristotle, Ptolemy</text><line x1="96" y1="112" x2="340.2" y2="165.8" stroke="#64748b" stroke-width="2"/><polygon points="350,168 339.2,170.7 341.3,161.0" fill="#64748b"/><rect x="188" y="48" width="152" height="62" rx="10" fill="#10233d" stroke="#86efac" stroke-width="2"/><text x="264" y="74" fill="#86efac" font-size="13" font-weight="bold" text-anchor="middle">Islamic world</text><text x="264" y="94" fill="#cbd5e1" font-size="11" text-anchor="middle">Ibn al-Haytham, Ibn Sina</text><line x1="264" y1="112" x2="341.6" y2="162.5" stroke="#64748b" stroke-width="2"/><polygon points="350,168 338.9,166.7 344.3,158.4" fill="#64748b"/><rect x="356" y="48" width="152" height="62" rx="10" fill="#10233d" stroke="#67e8f9" stroke-width="2"/><text x="432" y="74" fill="#67e8f9" font-size="13" font-weight="bold" text-anchor="middle">India</text><text x="432" y="94" fill="#cbd5e1" font-size="11" text-anchor="middle">decimal numerals, zero</text><line x1="432" y1="112" x2="358.3" y2="162.4" stroke="#64748b" stroke-width="2"/><polygon points="350,168 355.4,158.2 361.1,166.5" fill="#64748b"/><rect x="524" y="48" width="152" height="62" rx="10" fill="#10233d" stroke="#f9a8d4" stroke-width="2"/><text x="600" y="74" fill="#f9a8d4" font-size="13" font-weight="bold" text-anchor="middle">China</text><text x="600" y="94" fill="#cbd5e1" font-size="11" text-anchor="middle">paper, printing, compass</text><line x1="600" y1="112" x2="359.8" y2="165.8" stroke="#64748b" stroke-width="2"/><polygon points="350,168 358.7,160.9 360.9,170.7" fill="#64748b"/><rect x="190" y="170" width="320" height="56" rx="12" fill="#1e293b" stroke="#bcaaa4" stroke-width="2"/><text x="350" y="194" fill="#e3f2fd" font-size="14" font-weight="bold" text-anchor="middle">Scientific Revolution in Europe</text><text x="350" y="214" fill="#cbd5e1" font-size="11" text-anchor="middle">c. 1543–1687</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Scholar or source</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Region</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Contribution</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ibn al-Haytham (c. 965–c. 1040)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Basra and Cairo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Book of Optics: explained vision and used careful experiments; often called a pioneer of the experimental method</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">al-Khwarizmi (c. 780–c. 850)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Baghdad</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wrote a foundational book on algebra; the word “algorithm” comes from his name</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ibn Sina (Avicenna) (980–1037)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Persia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Canon of Medicine, used in European universities for centuries</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nasir al-Din al-Tusi (1201–1274)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Persia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Astronomical models that some historians believe influenced Copernicus</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Indian mathematicians, e.g. Brahmagupta (7th century)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">India</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rules for zero and the decimal place-value system</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chinese inventors, e.g. Bi Sheng (11th century)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">China</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Paper, movable-type printing, the magnetic compass and gunpowder</td>
    </tr>
    </table>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Historians still debate exactly how much al-Tusi’s work influenced Copernicus. Some mathematical techniques are strikingly similar, but no direct copy of the source has been proven to have reached him. This is an example of a question historians continue to investigate.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. How Knowledge Traveled</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Route</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Translation centers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Toledo in Spain, where Arabic texts were translated into Latin in the 1100s</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trade routes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The Silk Roads and Mediterranean trade carried goods, paper and ideas</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scholars and refugees</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Greek scholars fleeing Constantinople in 1453 brought manuscripts to Italy</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Printing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">After c. 1450, printed books spread translated knowledge across Europe</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Evaluating a claim</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Evaluate the claim: “The Scientific Revolution was a purely European achievement.”</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Evidence for</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The major breakthroughs of 1543–1687, such as heliocentrism and Newton’s laws, were made by European scientists.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Evidence against</strong>
    </p>
    <div style="margin:6px 0 0 34px;">They depended on Greek knowledge preserved by Islamic scholars, Arabic advances in optics and algebra, Indian numerals and Chinese inventions such as paper and printing.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Judgment</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The breakthroughs happened in Europe, but they rested on global foundations.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> The claim is too simple: the Scientific Revolution took place in Europe but was built on knowledge from many cultures.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> A strong evaluation weighs evidence on both sides before reaching a judgment.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Impact of the Scientific Revolution</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Long-term impact</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ways of thinking</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evidence and reason became the main tests of knowledge.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Science and technology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Led to new instruments, scientific societies (such as the Royal Society, 1660) and later the Industrial Revolution.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Medicine</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Laid foundations for modern anatomy, physiology and eventually germ theory.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Politics and society</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Inspired Enlightenment thinkers to apply reason to government, rights and economics.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Religion and authority</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Raised new questions about the relationship between faith, tradition and science.</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What was the House of Wisdom?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A center of learning and translation in Baghdad.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which scholar wrote the Book of Optics?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Ibn al-Haytham.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Name one long-term effect of the Scientific Revolution.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Enlightenment, scientific societies, modern medicine or the Industrial Revolution.</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Global perspective</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Evaluating claims</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Tracing transmission of ideas</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Long-term causation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using evidence on both sides</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Thinking Like a Historian</h3>
    <p>Older textbooks sometimes told the story of science as if it began in ancient Greece, disappeared, and then “reappeared” in Renaissance Europe. Modern historians emphasize that knowledge was continuously preserved and developed across Eurasia. This more complete story is not about taking credit away from European scientists, but about showing how ideas grow through exchange.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why might older histories have left out contributions from outside Europe? How does including them change our understanding?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #bcaaa4;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 History in Today’s World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Every time you use the digits 0–9 or a computer algorithm, you are using ideas that passed through India and the Islamic world.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> International scientific cooperation today — for example, on climate research — continues the tradition of sharing knowledge across cultures.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Historians of science, translators and international researchers study and continue the global exchange of knowledge.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Where was the House of Wisdom?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: The Abbasid capital.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Baghdad.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Which word comes from al-Khwarizmi’s name?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Used in computing.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Algorithm.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Where did the concept of zero as a number develop?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Brahmagupta.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">India.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Create a map showing the routes by which Islamic, Indian and Chinese knowledge reached Europe.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Debate the claim “The Scientific Revolution was purely European,” with one partner arguing each side using evidence.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Build a timeline from the House of Wisdom (800s) to Newton (1687) showing how knowledge was passed on.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Explore an online museum collection of astronomical instruments, such as astrolabes, and describe how one was used.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Name one contribution of Ibn Sina.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Canon of Medicine.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Name two Chinese inventions that influenced Europe.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Any two: paper, printing, compass, gunpowder.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain how Islamic scholars helped preserve Greek knowledge.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They translated Greek works into Arabic, studied them and added new ideas; these were later translated into Latin.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Explain one way knowledge traveled to Europe.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Translation centers such as Toledo, trade routes, refugee scholars or printing.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #bcaaa4;">
    <p style="margin:0 0 6px 0;color:#bcaaa4;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain why historians debate al-Tusi’s influence on Copernicus.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Their mathematical techniques are similar, but no direct evidence proves Copernicus saw al-Tusi’s work.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Give two examples of everyday things that come from the global roots of science.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">E.g. the numerals 0–9, algorithms, paper, compasses, cameras based on optics.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> D2.His.2: Analyze how the Scientific Revolution changed European thinking about knowledge and authority.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It shifted the test of knowledge from ancient authority to evidence and reason, which later encouraged people to question political and social authority during the Enlightenment.</div>
    </details>
    </div>
    </div>
    <div style="background:#2b1f1b;padding:20px;border-radius:12px;border:1px solid #bcaaa4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>The Scientific Revolution built on knowledge from many cultures. Islamic scholars such as Ibn al-Haytham, al-Khwarizmi, Ibn Sina and al-Tusi preserved and expanded Greek learning; Indian mathematicians developed zero and the decimal system; and Chinese inventions such as paper and printing spread knowledge. This knowledge reached Europe through translation, trade and printing. The Scientific Revolution in turn led to the Enlightenment, scientific societies and modern science.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>House of Wisdom: Baghdad, 800s.</li>
    <li>Ibn al-Haytham: optics; al-Khwarizmi: algebra.</li>
    <li>India: zero and decimals; China: paper, printing, compass.</li>
    <li>Impact: Enlightenment and modern science.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Science is a global achievement.</li>
    <li>Knowledge traveled by translation and trade.</li>
    <li>Some influences are still debated.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Saying science “disappeared” in the Middle Ages.</li>
    <li>Ignoring non-European contributions.</li>
    <li>Overstating unproven influences.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Link each culture to one contribution.</li>
    <li>Use a map of transmission.</li>
    <li>Weigh both sides when evaluating claims.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use specific scholars as evidence.</li>
    <li>Make a balanced judgment.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.2 Change</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">From authority to evidence.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.14 Causation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Long-term impact.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Global perspective</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Contributions of many cultures.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for all cultures</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Fairness</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Intellectual honesty</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Global citizenship</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Science and society</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Modern science is still a global, cooperative effort, just as it was in the past.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a paragraph evaluating whether the Scientific Revolution was a European or global achievement.</li>
    <li>Research one Islamic, Indian or Chinese scholar and describe their contribution.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What surprised me about the global roots of science?</li>
    <li>How does sharing knowledge help everyone?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">House of Wisdom</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Baghdad learning center.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Optics</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Study of light.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Algebra</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Math with symbols.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Transmission</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Passing on knowledge.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can identify global contributions to science.</p>
    <p style="margin:6px 0;">☐ I can explain how knowledge traveled.</p>
    <p style="margin:6px 0;">☐ I can analyze the impact of the Scientific Revolution.</p>
    <p style="margin:6px 0;">☐ I can evaluate claims about its origins.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The House of Wisdom was located in:',
            options: ['Baghdad', 'Rome', 'Paris', 'Beijing'],
            correct: 0,
            explanation: 'A center of learning in the 800s.'
        },
        {
            question: 'Ibn al-Haytham is best known for his work on:',
            options: ['Printing', 'Gunpowder', 'Painting', 'Optics'],
            correct: 3,
            explanation: 'The answer is Optics. The Book of Optics.'
        },
        {
            question: 'The word “algorithm” comes from the name of:',
            options: ['al-Khwarizmi', 'Ibn Sina', 'Galileo', 'Ptolemy'],
            correct: 0,
            explanation: 'The answer is al-Khwarizmi. A Baghdad mathematician.'
        },
        {
            question: 'Ibn Sina wrote the influential:',
            options: ['Principia', 'Canon of Medicine', 'Novum Organum', 'Dialogue'],
            correct: 1,
            explanation: 'Used in European universities.'
        },
        {
            question: 'The decimal system and concept of zero developed in:',
            options: ['England', 'Italy', 'Spain', 'India'],
            correct: 3,
            explanation: 'The answer is India. Spread through Arabic texts.'
        },
        {
            question: 'Which was a Chinese invention?',
            options: ['The magnetic compass', 'The telescope', 'The microscope', 'The steam engine'],
            correct: 0,
            explanation: 'Also paper, printing and gunpowder.'
        },
        {
            question: 'Toledo in Spain was important because:',
            options: ['Newton lived there', 'The Reformation began there', 'Arabic texts were translated into Latin there', 'Galileo was tried there'],
            correct: 2,
            explanation: 'The answer is Arabic texts were translated into Latin there. A major translation center.'
        },
        {
            question: 'The Royal Society, founded in 1660, was a:',
            options: ['Religious order', 'Scientific society', 'Royal army', 'Printing company'],
            correct: 1,
            explanation: 'It promoted science in England.'
        },
        {
            question: 'The Scientific Revolution helped lead to the:',
            options: ['Black Death', 'Fall of Constantinople', 'Enlightenment', 'Crusades'],
            correct: 2,
            explanation: 'Reason was applied to society.'
        },
        {
            question: 'The best description of the Scientific Revolution is:',
            options: ['Purely European with no outside influence', 'Purely Chinese', 'European breakthroughs built on global foundations', 'A rejection of all earlier knowledge'],
            correct: 2,
            explanation: 'The answer is European breakthroughs built on global foundations. It drew on many cultures.'
        }
    ]
},
{
    name: '1.2 Activity: The Trial of Galileo',
    type: 'lesson',
    duration: '55 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.2 The Scientific Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Activity</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Investigation: The Trial of Galileo</h2>
    <p style="font-size:16px;">In this document-based investigation you will analyze sources about Galileo’s trial in 1633 and answer the compelling question: “Why was Galileo put on trial?”</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respect</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Discuss religious and scientific views respectfully; we are explaining past events, not judging beliefs.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Every claim must cite a specific document.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accuracy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Separate documented facts from legends and later interpretations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Teamwork</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rotate roles: reader, HIPP analyst, recorder and presenter.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Historical Investigation: Investigating the Galileo Affair</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To use primary and secondary sources to explain the multiple causes of Galileo’s trial.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document packet</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">HIPP analysis sheet</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Highlighters</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Notebook</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document A: a description of Galileo’s telescope observations in The Starry Messenger (1610)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document B: a summary of the Church’s 1616 decree on the heliocentric idea</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document C: a description of Galileo’s Dialogue (1632) and the character Simplicio, who defends the old view</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document D: a summary of the 1633 sentence and Galileo’s recantation</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document E: a modern historian’s explanation of the political situation in Rome during the Thirty Years’ War</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Handle document packets carefully.</li>
    <li>Keep discussions focused and respectful.</li>
    <li>Cite documents by letter.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Read each document and complete a HIPP chart.</li>
    <li>Classify each document as primary or secondary.</li>
    <li>Sort the documents by the cause they show: scientific, religious, political or personal.</li>
    <li>Note which perspective each document represents: Galileo, the Church or a modern historian.</li>
    <li>Discuss which causes best explain why Galileo was put on trial.</li>
    <li>Write a claim answering the compelling question.</li>
    <li>Support your claim with evidence from at least three documents and explain how the causes connect.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Document</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Primary or secondary?</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Perspective</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Cause shown</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Key evidence</th>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which document shows the scientific cause?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Document A — Galileo’s observations provided evidence for heliocentrism.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> How might Document C have contributed to the trial?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Some readers, including the pope, felt the character Simplicio mocked the pope’s views, turning a scientific debate into a personal offense.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why is Document E useful?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It shows the political pressure on the pope during the Thirty Years’ War, when the Church wanted to appear firm against challenges to its authority.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Galileo was put on trial for several connected reasons: his scientific claims conflicted with the Church’s 1616 decree, his Dialogue was seen as disobedient and personally offensive, and the political climate of the Reformation and Thirty Years’ War made the Church less tolerant of challenges.</p>
    <p><strong style="color:#fde68a;">Historical explanation:</strong> Explaining events with multiple causes — scientific, religious, political and personal — produces a more accurate history than a simple “science versus religion” story.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Reducing the trial to a single cause.</li>
    <li>Treating the “Eppur si muove” legend as evidence.</li>
    <li>Ignoring the Church’s perspective at the time.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Historians, journalists and judges all weigh multiple causes and perspectives when explaining controversial events.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Write a paragraph answering the compelling question using CER: a claim, evidence from at least three documents (cited as Doc A, Doc B and so on) and reasoning explaining how the causes worked together.</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Complex events usually have several causes. Name them and show how they connect.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Activity Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Is Document E a primary or secondary source?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Secondary — a modern historian’s interpretation.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What did the 1616 decree (Document B) do?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It declared the heliocentric idea contrary to Scripture and warned against defending it.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Name one personal or political cause of the trial.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The pope felt mocked by the Dialogue, or political pressure during the Thirty Years’ War.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why should a historian avoid using the “Eppur si muove” story as evidence?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">There is no reliable source showing Galileo said it; it is a later legend.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> What additional source would strengthen the investigation?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Letters between Galileo and his supporters or critics, or records of the trial proceedings.</div>
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
            question: 'The compelling question asks:',
            options: ['Who invented printing', 'When the Renaissance began', 'Why Galileo was put on trial', 'How gravity works'],
            correct: 2,
            explanation: 'It focuses on causes of the trial.'
        },
        {
            question: 'The Starry Messenger (1610) described:',
            options: ['Galileo’s telescope observations', 'Luther’s theses', 'Newton’s laws', 'The Council of Trent'],
            correct: 0,
            explanation: 'The answer is Galileo’s telescope observations. Including Jupiter’s moons.'
        },
        {
            question: 'A modern historian’s explanation is a:',
            options: ['Secondary source', 'Primary source', 'Diary', 'Trial record'],
            correct: 0,
            explanation: 'The answer is Secondary source. It was written later.'
        },
        {
            question: 'One personal cause of the trial was that:',
            options: ['Galileo invented the telescope', 'The pope felt mocked by the Dialogue', 'Newton accused Galileo', 'Copernicus testified'],
            correct: 1,
            explanation: 'Simplicio seemed to represent the pope’s views.'
        },
        {
            question: 'The best explanation of the trial includes:',
            options: ['Only science versus religion', 'Only personal dislike', 'No causes', 'Several connected causes'],
            correct: 3,
            explanation: 'Multiple causes give a fuller picture.'
        },
        {
            question: 'During the investigation, the “Eppur si muove” story should be treated as:',
            options: ['A primary source', 'A Church decree', 'Galileo’s official testimony', 'A legend, not evidence'],
            correct: 3,
            explanation: 'There is no reliable record of it.'
        }
    ]
},
{
    name: '1.2 Quiz: The Scientific Revolution',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.2 The Scientific Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: The Scientific Revolution</h2>
    <p style="font-size:16px;">Test your understanding of the new astronomy, the scientific method, Isaac Newton and the global roots and impact of the Scientific Revolution from Topic 1.2.</p>
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
    <li>Geocentric and heliocentric models</li>
    <li>Copernicus, Kepler and Galileo</li>
    <li>The scientific method, Bacon and Descartes</li>
    <li>Vesalius, Harvey and Newton</li>
    <li>Global contributions to science</li>
    <li>Impact of the Scientific Revolution</li>
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
    <div>Link each scientist to one discovery and one date. For evaluation questions, weigh evidence on both sides.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Ptolemy’s model of the universe was:',
            options: ['Heliocentric', 'Elliptical', 'Infinite', 'Geocentric'],
            correct: 3,
            explanation: 'The answer is Geocentric. Earth at the center.'
        },
        {
            question: 'Copernicus’s On the Revolutions was published in:',
            options: ['1687', '1610', '1543', '1517'],
            correct: 2,
            explanation: 'The start of the Scientific Revolution.'
        },
        {
            question: 'Galileo improved which instrument to study the sky?',
            options: ['The telescope', 'The microscope', 'The compass', 'The printing press'],
            correct: 0,
            explanation: 'The answer is The telescope. He began in 1609.'
        },
        {
            question: 'The scientific method begins with:',
            options: ['Observation', 'Conclusion', 'Publication', 'Guessing the answer'],
            correct: 0,
            explanation: 'Then a question and hypothesis.'
        },
        {
            question: 'Who wrote Novum Organum (1620)?',
            options: ['René Descartes', 'Francis Bacon', 'Isaac Newton', 'Galileo'],
            correct: 1,
            explanation: 'The answer is Francis Bacon. He promoted experiments.'
        },
        {
            question: 'Who showed that blood circulates through the body?',
            options: ['William Harvey', 'Andreas Vesalius', 'Ibn Sina', 'Kepler'],
            correct: 0,
            explanation: 'The answer is William Harvey. Published in 1628.'
        },
        {
            question: 'Newton’s law of universal gravitation explains:',
            options: ['Only falling apples', 'Only the tides', 'Both falling objects and planetary orbits', 'Only Earth’s rotation'],
            correct: 2,
            explanation: 'One force for Earth and the heavens.'
        },
        {
            question: 'Ibn al-Haytham made major contributions to:',
            options: ['Gunpowder', 'Printing', 'Sculpture', 'Optics'],
            correct: 3,
            explanation: 'The answer is Optics. The Book of Optics.'
        },
        {
            question: 'Hindu-Arabic numerals came originally from:',
            options: ['Greece', 'India', 'Rome', 'England'],
            correct: 1,
            explanation: 'The answer is India. Spread by Arabic scholars.'
        },
        {
            question: 'A major long-term effect of the Scientific Revolution was the:',
            options: ['Black Death', 'Enlightenment', 'Fall of Rome', 'Crusades'],
            correct: 1,
            explanation: 'Reason was applied to society.'
        }
    ]
},
{
    name: '1.2 Assignment: Scientist Profile and Impact Report',
    type: 'lesson',
    duration: '120 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.2 The Scientific Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 120 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Scientist Profile and Impact Report</h2>
    <p style="font-size:16px;">Create a researched profile (500–700 words, or a poster with an equivalent written report) of one scientist or scholar from this topic, explaining their discovery, the evidence they used and its impact on later history.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 120 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p>Choose from European scientists such as Copernicus, Kepler, Galileo, Vesalius, Harvey or Newton, or from global scholars such as Ibn al-Haytham, al-Khwarizmi, Ibn Sina or al-Tusi. Your report should explain what they discovered, how they knew it, whom they built on and how their work changed the world.</p>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Use at least two reliable sources, such as a museum, university or encyclopedia website, and cite them.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Choose a scientist or scholar and research their life and historical context.</li>
    <li>Explain their main discovery or contribution in clear language.</li>
    <li>Describe the evidence or method they used.</li>
    <li>Identify at least one earlier thinker or culture they built on.</li>
    <li>Explain at least two long-term impacts of their work.</li>
    <li>Include one primary-source quotation or description, analyzed with HIPP.</li>
    <li>Write, revise and submit with a source list.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Your research notes</li>
    <li>Your HIPP analysis</li>
    <li>Your final profile or poster with report</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Historical context</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rich, accurate context that explains the significance of the work</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate context</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Limited context</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Discovery and method</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, accurate explanation of the discovery and the evidence behind it</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear explanation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partly accurate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Inaccurate or missing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Connections</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shows clearly who they built on and whom they influenced</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shows some connections</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mentions a connection</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No connections</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Impact</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explains at least two long-term impacts with evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explains two impacts</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One impact</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No impact explained</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sources and writing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reliable, cited sources; clear, organized writing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cited sources; clear writing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Few sources; some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No sources</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Choose someone you find interesting.<br>Explain science in your own words.<br>Show the chain of influence.<br>Check dates carefully.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What did I learn about how science builds on earlier work?</li>
    <li>Which impact of my scientist matters most today?</li>
    <li>What would I research next?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The assignment asks you to profile:',
            options: ['One scientist or scholar from this topic', 'A modern celebrity', 'A Renaissance painter only', 'A Protestant reformer'],
            correct: 0,
            explanation: 'Choose from the topic’s scientists.'
        },
        {
            question: 'How many long-term impacts should you explain?',
            options: ['None', 'Exactly ten', 'One only', 'At least two'],
            correct: 3,
            explanation: 'The answer is At least two. At least two.'
        },
        {
            question: 'Showing whom your scientist built on demonstrates:',
            options: ['Unrelated facts', 'Connections between ideas', 'Personal opinion', 'Art technique'],
            correct: 1,
            explanation: 'Science builds on earlier work.'
        },
        {
            question: 'A reliable source would be:',
            options: ['An anonymous social-media post', 'A rumor', 'An unsigned meme', 'A university or museum website'],
            correct: 3,
            explanation: 'The answer is A university or museum website. Use trustworthy sources.'
        },
        {
            question: 'The HIPP analysis applies to:',
            options: ['Your own opinion', 'A primary-source quotation or description', 'A modern advertisement', 'A math problem'],
            correct: 1,
            explanation: 'The answer is A primary-source quotation or description. Analyze a primary source.'
        },
        {
            question: 'Which scholar could you choose from the global roots lesson?',
            options: ['Martin Luther', 'Henry VIII', 'Ibn al-Haytham', 'Machiavelli'],
            correct: 2,
            explanation: 'The answer is Ibn al-Haytham. He pioneered optics.'
        }
    ]
},
{
    name: '1.2 Review: The Scientific Revolution',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.2 The Scientific Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: The Scientific Revolution</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.2 and prepare for the end-of-unit assessment.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #bcaaa4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">A New View of the Universe</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Geocentric (Ptolemy) vs. heliocentric (Copernicus, 1543).</li>
    <li>Kepler: elliptical orbits; Galileo: telescope discoveries.</li>
    <li>Galileo’s trial, 1633 — multiple causes.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #bcaaa4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">The Scientific Method</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Observe, question, hypothesis, experiment, analyze, conclude.</li>
    <li>Bacon: induction; Descartes: deduction.</li>
    <li>Vesalius (anatomy), Harvey (circulation).</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #bcaaa4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Isaac Newton</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Principia, 1687.</li>
    <li>Three laws of motion; universal gravitation.</li>
    <li>United earlier discoveries.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #bcaaa4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Global Roots and Impact</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ibn al-Haytham, al-Khwarizmi, Ibn Sina, al-Tusi.</li>
    <li>Indian numerals and zero; Chinese paper, printing, compass.</li>
    <li>Led to the Enlightenment and modern science.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Person</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Known for</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Date</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Copernicus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Heliocentric model</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1543</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vesalius</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Human anatomy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1543</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kepler</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Elliptical orbits</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1609</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Galileo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jupiter’s moons</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1610</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Harvey</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Circulation of blood</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1628</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Newton</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Principia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1687</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Compare the geocentric and heliocentric models.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Geocentric puts Earth at the center (Ptolemy); heliocentric puts the Sun at the center (Copernicus).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Explain why Galileo’s discoveries mattered.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">His observations, such as Jupiter’s moons and Venus’s phases, contradicted the geocentric model.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> List the steps of the scientific method.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Observe, question, hypothesis, experiment, analyze, conclude.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Explain Newton’s importance.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">He described the laws of motion and universal gravitation, uniting earlier discoveries.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Name two non-European contributions to science.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">E.g. Ibn al-Haytham’s optics, al-Khwarizmi’s algebra, Indian zero, Chinese paper.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Give one long-term impact of the Scientific Revolution.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Enlightenment, scientific societies or modern medicine.</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can compare models of the universe.</p>
    <p style="margin:6px 0;">☐ I can explain the contributions of key scientists.</p>
    <p style="margin:6px 0;">☐ I can describe the scientific method.</p>
    <p style="margin:6px 0;">☐ I can explain Newton’s importance.</p>
    <p style="margin:6px 0;">☐ I can describe global roots and impacts.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which two major books were both published in 1543?',
            options: ['Copernicus’s On the Revolutions and Vesalius’s anatomy', 'Newton’s Principia and Bacon’s Novum Organum', 'Luther’s theses and Calvin’s Institutes', 'Utopia and The Prince'],
            correct: 0,
            explanation: 'Both challenged ancient authorities.'
        },
        {
            question: 'Kepler showed that orbits are:',
            options: ['Perfect circles', 'Ellipses', 'Squares', 'Spirals'],
            correct: 1,
            explanation: 'The answer is Ellipses. Using Brahe’s data.'
        },
        {
            question: 'Descartes is associated with:',
            options: ['Inductive reasoning only', 'The telescope', 'Deductive reasoning', 'The printing press'],
            correct: 2,
            explanation: 'The answer is Deductive reasoning. Logic and mathematics.'
        },
        {
            question: 'Newton’s Principia described:',
            options: ['Human anatomy', 'Laws of motion and gravitation', 'Optics only', 'Religious reform'],
            correct: 1,
            explanation: 'The answer is Laws of motion and gravitation. Published in 1687.'
        },
        {
            question: 'al-Khwarizmi is known for:',
            options: ['Algebra', 'Optics', 'Medicine', 'Printing'],
            correct: 0,
            explanation: 'Algorithm comes from his name.'
        },
        {
            question: 'The Scientific Revolution led to the:',
            options: ['Renaissance', 'Reformation', 'Enlightenment', 'Black Death'],
            correct: 2,
            explanation: 'Reason was applied to society.'
        }
    ]
},
{
    name: '1.2 Summary: The Scientific Revolution',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4e342e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #bcaaa4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Renaissance, Reformation and the Scientific Revolution · Topic 1.2 The Scientific Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #bcaaa4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: The Scientific Revolution</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> The Scientific Revolution replaced reliance on ancient authority with observation, experiment and mathematics; building on knowledge from many cultures, scientists from Copernicus to Newton transformed humanity’s understanding of the universe and set the stage for the Enlightenment.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Copernicus (1543) proposed a heliocentric model, challenging Ptolemy’s geocentric universe.</li>
    <li>Kepler showed elliptical orbits, and Galileo’s telescope provided strong evidence for the new model.</li>
    <li>Galileo’s 1633 trial had scientific, religious, political and personal causes.</li>
    <li>Bacon and Descartes helped develop the scientific method of observation, experiment and reasoning.</li>
    <li>Vesalius and Harvey transformed medicine; Newton’s Principia (1687) united physics and astronomy.</li>
    <li>The revolution built on Islamic, Indian and Chinese knowledge and led to the Enlightenment.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.1 A New View of the Universe</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Geocentric vs. heliocentric; Kepler; Galileo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evaluate evidence; separate fact from legend</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.2 The Scientific Method and Isaac Newton</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bacon, Descartes, Vesalius, Harvey, Newton</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Apply the scientific method</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.3 The Global Roots and Impact of the Scientific Revolution</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Islamic, Indian and Chinese contributions; long-term impact</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evaluate claims with balanced evidence</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">geocentric model</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">heliocentric model</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Scientific Revolution</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">ellipse</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">telescope</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">heresy</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">scientific method</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">hypothesis</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">inductive reasoning</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">deductive reasoning</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">anatomy</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">gravity</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">House of Wisdom</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">optics</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Enlightenment</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>From smartphones to space travel to modern medicine, the methods and discoveries of the Scientific Revolution shape daily life today.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #bcaaa4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>In the next unit you will study the Enlightenment and the Age of Revolutions, when thinkers applied the reasoning of the Scientific Revolution to government and human rights.</div>
    </div>
    <div style="background:#2b1f1b;padding:20px;border-radius:12px;border:1px solid #bcaaa4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can compare the geocentric and heliocentric models.</p>
    <p style="margin:6px 0;">✔️ I can explain the contributions of Copernicus, Kepler and Galileo.</p>
    <p style="margin:6px 0;">✔️ I can describe the scientific method.</p>
    <p style="margin:6px 0;">✔️ I can explain Newton’s importance.</p>
    <p style="margin:6px 0;">✔️ I can evaluate the global roots and impact of the Scientific Revolution.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of Topic 1.2 is a shift from:',
            options: ['Science to superstition', 'Ancient authority to evidence and reason', 'Printing to handwriting', 'Cities to farms'],
            correct: 1,
            explanation: 'Evidence became the test of knowledge.'
        },
        {
            question: 'Who united physics and astronomy with universal gravitation?',
            options: ['Newton', 'Copernicus', 'Bacon', 'Vesalius'],
            correct: 0,
            explanation: 'The answer is Newton. Principia, 1687.'
        },
        {
            question: 'The next unit studies:',
            options: ['The Enlightenment and Age of Revolutions', 'Ancient Egypt', 'The Cold War', 'The Stone Age'],
            correct: 0,
            explanation: 'The answer is The Enlightenment and Age of Revolutions. Reason applied to government.'
        },
        {
            question: 'The Scientific Revolution built on knowledge from:',
            options: ['Europe alone', 'Only ancient Rome', 'Nowhere', 'Many cultures'],
            correct: 3,
            explanation: 'Islamic, Indian, Chinese and Greek.'
        },
        {
            question: 'Galileo’s trial is best explained by:',
            options: ['One simple cause', 'Several connected causes', 'Newton’s complaints', 'Luther’s theses'],
            correct: 1,
            explanation: 'Scientific, religious, political and personal.'
        },
        {
            question: 'Which shows the scientific method’s cycle?',
            options: ['Science never changes', 'Experiments are skipped', 'Conclusions lead to new questions', 'Hypotheses are never tested'],
            correct: 2,
            explanation: 'The answer is Conclusions lead to new questions. Science is ongoing.'
        }
    ]
}
],
          stats:{lessons:19,exercises:128,quizzes:20,projects:2,duration:'15 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'The Renaissance began in:',
                  options: ['England', 'Spain', 'Italy', 'Russia'],
                  correct: 2,
                  explanation: 'Italian city-states such as Florence led the Renaissance.'
              },
              {
                  question: 'Humanism focused on:',
                  options: ['Only religious rituals', 'Human potential and classical learning', 'Farming methods', 'Military tactics'],
                  correct: 1,
                  explanation: 'Humanists studied Greek and Roman texts and human achievement.'
              },
              {
                  question: 'Which invention spread Renaissance and Reformation ideas quickly?',
                  options: ['The movable-type printing press', 'The steam engine', 'The telegraph', 'The telescope'],
                  correct: 0,
                  explanation: 'Gutenberg’s press made books cheaper and faster to produce.'
              },
              {
                  question: 'Who painted the ceiling of the Sistine Chapel?',
                  options: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Donatello'],
                  correct: 0,
                  explanation: 'Michelangelo painted it between 1508 and 1512.'
              },
              {
                  question: 'In 1517, Martin Luther challenged the Catholic Church with his:',
                  options: ['Institutes', 'Ninety-Five Theses', 'Act of Supremacy', 'Principia'],
                  correct: 1,
                  explanation: 'Luther questioned the sale of indulgences.'
              },
              {
                  question: 'Henry VIII broke with the Catholic Church and created the:',
                  options: ['Society of Jesus', 'Lutheran Church', 'Calvinist Church', 'Church of England'],
                  correct: 3,
                  explanation: 'The 1534 Act of Supremacy made the king head of the Church of England.'
              },
              {
                  question: 'The Council of Trent was part of the:',
                  options: ['Protestant Reformation', 'Catholic Reformation', 'Scientific Revolution', 'Italian Renaissance only'],
                  correct: 1,
                  explanation: 'It met from 1545 to 1563 to reform and defend Catholic teaching.'
              },
              {
                  question: 'The heliocentric model places at the center of the universe:',
                  options: ['Earth', 'The Moon', 'Jupiter', 'The Sun'],
                  correct: 3,
                  explanation: 'Copernicus proposed a Sun-centered model in 1543.'
              },
              {
                  question: 'Galileo used a telescope to observe:',
                  options: ['Atoms', 'Cells', 'Moons orbiting Jupiter', 'Electricity'],
                  correct: 2,
                  explanation: 'This showed not everything orbits Earth.'
              },
              {
                  question: 'Isaac Newton is best known for:',
                  options: ['Painting the Mona Lisa', 'The Ninety-Five Theses', 'Discovering the circulation of blood', 'The laws of motion and universal gravitation'],
                  correct: 3,
                  explanation: 'He published the Principia in 1687.'
              },
              {
                  question: 'The scientific method relies mainly on:',
                  options: ['Observation and experimentation', 'Ancient authority alone', 'Guessing', 'Royal decrees'],
                  correct: 0,
                  explanation: 'Evidence from observation and testing.'
              },
              {
                  question: 'Ibn al-Haytham, an earlier scholar who influenced European science, is famous for work on:',
                  options: ['The printing press', 'The Reformation', 'Optics and light', 'Oil painting'],
                  correct: 2,
                  explanation: 'His Book of Optics was translated into Latin.'
              }
          ]}
);