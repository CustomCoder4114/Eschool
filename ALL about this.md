# Eschool — Comprehensive Project Description

Nov 17, 2026 · @Superior1\_

## How to read this document

Eschool is one connected learning platform. Learners study curriculum-aligned courses, take live classes, hire teachers for private lessons, track their goals and grades, and explore careers. Parents follow along, all in one account.

This document describes Eschool as it has been designed and built up to November 2026. Every feature is marked with one of three labels:

| Label | Meaning |
| --- | --- |
| **Built** | Part of the platform's existing pages, course files or backend |
| **In development** | Designed and decided; being built or redesigned now |
| **Planned** | Agreed direction for the future; not yet built |

Two deliberate design choices differ from a typical education platform, and they shape everything below:

- **Eschool creates its own learning resources.** Lessons, notes and courses are produced and published by Eschool's administrators, not uploaded by individual teachers. This keeps the quality and curriculum alignment consistent. Teachers earn by teaching, not by uploading files.
- **Resources are used on the platform, not downloaded.** Learners read and watch inside Eschool. This protects the content and lets Eschool record each learner's progress.

No user numbers, revenue figures, partnerships or awards are claimed in this document, because none are established yet.

## 1. Project overview

Eschool is an online learning platform built around a single idea: a learner's education, practice, goals, teachers, family and future career belong in one place. They should not be scattered across a dozen apps.

Most education technology solves one part of a learner's life. One app delivers lessons, another holds homework, and a third books a tutor. Career guidance, if it exists at all, is a separate website. Eschool instead connects:

- **Structured courses** that follow each country's school curriculum, starting with Kenya's Competency-Based Curriculum (CBC).
- **Live classes** taught inside the platform, with no outside Zoom, Meet or YouTube links.
- **Private lessons** with teachers that families hire, scheduled, attended and paid for through Eschool.
- **Personal goals, study plans and progress tracking** that follow the learner on any device.
- **A career space** that links the learner's dream career to their actual subjects and grades.
- **Motivation**: experience points, badges and a monthly leaderboard.
- **Parent pages** that show a child's real grades, teachers and lesson timetable.

### Who Eschool serves

- **Learners**, the centre of the platform. Today that means school-age learners following a national curriculum, starting with Kenyan Junior and Senior School (Grades 9 to 11).
- **Parents and guardians**, who want to see how their children are doing and to hire qualified teachers safely.
- **Teachers**, who want to earn by teaching learners online, with payment protected and their reputation built on real ratings.
- **Eschool's administrators**, who create the learning content, approve schedules, settle disputes and run payments.

### The philosophy: EDUCATION IS A RIGHT

Eschool's slogan is a design rule, not decoration. If education is a right, the platform must make good learning reachable rather than reserve it for those who can afford private tutors or who live near the best schools. This shows up in concrete decisions:

- **A Free plan** gives every learner access to courses, with no live classes. Paid plans (Basic and Pro) add live classes and a wider course library, so the core of learning is never locked behind payment.
- **Any learner can pay for their own plan and hire teachers**, even without a linked parent account. A learner's education does not depend on an adult registering first.
- **Curriculum-aligned content** means a learner in Nakuru studies exactly what the KICD curriculum design expects, not generic material they must translate to their syllabus.
- **Progress stored on the server** means a learner who switches from a school computer to a family phone does not lose their work.
- **Fair rules for paid lessons** protect families: a parent pays Eschool, Eschool holds the money until lessons happen, and lessons not taught are refunded.

The brand line used across every page states the promise simply: *"Premium online learning built around real skills, clear video lessons, and a path that actually gets you somewhere."*

## 2. The problems Eschool is designed to solve

Eschool addresses ten connected problems. It does not claim to have solved them; it is built so that each one is tackled in the same place, because they reinforce each other.

| Problem | What it looks like for a learner | How Eschool approaches it |
| --- | --- | --- |
| Limited access to quality materials | Revision books are expensive; good teachers are concentrated in some schools | Full curriculum courses on the platform, with a Free plan |
| Fragmented resources | Notes on WhatsApp, videos on YouTube, past papers in a folder | One course library organised by country, grade, subject, strand and lesson |
| Unreliable or unorganised material | Notes that do not match the syllabus, with errors and no answers | Courses produced centrally, aligned to the official curriculum design, with worked answers |
| Gap between classroom and practice | Learners memorise without applying | Every lesson includes real-life applications, projects and practice by level |
| Little career awareness | Learners pick subjects without knowing where they lead | A career space that links a chosen career to subjects and real grades |
| Limited exposure to modern skills | Digital, communication and problem-solving skills are rarely practised | CBC core competencies built into every lesson; digital activities in each lesson |
| Teachers cannot easily earn from their skill online | Private tutoring depends on word of mouth and informal payment | Private lessons through Eschool, with timetables, protected payment and ratings |
| Learning, careers and skills are disconnected | Each lives in a different place | The same account holds courses, goals, grades, career and teachers |
| Platforms see only lessons, not the learner | No view of goals, motivation or family involvement | Goals, study plans, badges, leaderboard, friends and parent pages |
| Hard to find opportunities that match interests | Learners do not know what to study next | Dream career, career missions and goals give each learner a direction |

### Why tackle them together

These problems feed each other. A learner without a career goal has little reason to revise. Weak revision makes grades fall, and a parent who cannot see the problem cannot help. A teacher who could help has no safe way to be hired and paid.

Solving one link in isolation leaves the chain broken. Eschool's approach is to keep every link in one system, so that a learner's goal, their course, their grades, their teacher and their parent all see the same picture.

## 3. Why Eschool is different from existing platforms

The leading education platforms are excellent at what they set out to do. Eschool's difference is not that it does one of those things better. It combines several of them around a school learner and their family, for a national curriculum, on one account.

### What the major platforms do well

| Platform | Main focus | What it does well | Where its scope differs from Eschool |
| --- | --- | --- | --- |
| [Google Classroom](https://edtechteacher.org/googleclassroom/bpage/5) | Classroom workflow for schools | Creating, distributing, collecting and grading assignments; links to Google tools | A tool for a school's own teachers; it provides no curriculum content, private tutoring or career guidance |
| [Khan Academy](https://khanmigo.ai/teachers) | Free video lessons and mastery practice | A free, high-quality library; AI tutor (Khanmigo) free for teachers | Largely US-curriculum oriented; no live classes, hired teachers or Kenyan CBC structure |
| Coursera | University and professional courses | Courses and certificates from universities and companies | Aimed at adults and higher education rather than school learners and parents |
| [Udemy](https://support.udemy.com/hc/en-us/articles/229605008) | Open marketplace of courses by independent instructors | Huge range; instructors earn a share of course sales | Content quality varies by instructor; instructors receive 37% of sales Udemy makes without their coupon; not built around a school curriculum |
| Moodle | Open-source learning management system | Highly flexible for institutions that run it themselves | An empty framework: a school must supply content, teachers and hosting |
| Quizlet | Flashcards and study sets | Fast memorisation and revision | A study tool, not a full course, teacher or career platform |

### Eschool's differentiation

Eschool's advantage is its particular combination, built for a particular audience: school learners and their families, studying a national curriculum.

**A. An interconnected ecosystem.** Courses, live classes, private teachers, goals, grades, careers, badges, friends, messages and parent oversight share one account and one record of the learner. A grade earned in a course appears on the Progress page, the Career page and the parent's view at the same time. Nothing is retyped and nothing is lost between apps.

**B. Learner-centred development.** Eschool asks what the learner is trying to become, not only which lesson is next. The learner sets detailed goals with reasons, priorities, study days and milestones. They choose a dream career and earn badges for sustained effort. The platform is built around a person, not a content catalogue.

**C. Teacher empowerment, with protection on both sides.** Teachers earn by doing what they do best, teaching. Families hire them for private lessons inside Eschool. Eschool acts as the payment bridge: it holds the parent's money and pays the teacher monthly for lessons delivered. Lesson attendance is proven by join times in Eschool's own calls. Teachers are rated out of 10 by the learners they teach, and their experience is measured by real time on the platform rather than a typed claim. A teacher's reputation is earned, and a family's money is safe.

**D. Career awareness integrated with education.** On most platforms, career guidance is a separate article to read once. On Eschool, the learner's dream career sits beside their real subject grades, shows how ready they are, and sets weekly career missions. The career appears on their profile and the leaderboard. Each career has its own hard-to-earn badge that takes months of effort.

**E. Practical skills and future readiness.** Every Eschool lesson builds the CBC core competencies (communication, critical thinking, digital literacy, creativity, citizenship and self-efficacy). Each lesson includes real-life applications, projects and digital activities, so learners practise skills, not only facts.

**F. One environment instead of many.** A family using separate apps for lessons, tutoring, revision, messaging and progress juggles several logins, several payments and no shared picture. Eschool gives the learner, the parent and the teacher one place, one timetable and one record.

Other platforms have some of these features. Eschool's distinction is combining all of them for school learners, aligned to their own country's curriculum, with families and paid teachers inside the same system.

## 4. Features and modules in detail

Each feature below says what it is, why it exists, who benefits and its status.

### A. Course library (educational resources hub) — Built, content growing

**What it is.** Eschool's learning content is organised as full courses, not loose files. Each course belongs to a country, a grade and a subject. Inside, it is divided into strands (main topics), sub-strands and lessons, following the official curriculum design.

**How a course is structured.** Every sub-strand follows the same pattern, so learners always know what comes next:

1. An overview and the learning outcomes for the strand.
2. Three or four lessons, each 40 to 60 minutes.
3. A quiz, an assignment or project, a revision page and a summary.

Every lesson contains learning outcomes, a key inquiry question, and a teacher-style explanation. It also has vocabulary, step-by-step worked examples, diagrams, guided practice and graded practice with answers. It ends with real-life applications, common mistakes, exam tips, homework, reflection, a glossary and a multiple-choice quiz with an explanation for every answer.

**Who creates it.** Eschool's administrators create and publish all resources. Teachers do not upload files, and no uploader profiles are shown; the earlier teacher upload page has been removed. This is a deliberate choice: a learner should be able to trust every lesson equally, and centrally produced content can be checked against the curriculum design.

**How learners find it.** The country a learner picks at registration decides which courses they see. Each country's courses live in their own set of files, listed for the backend by country code. A learner sets their grade in Settings and can change their country later. If a country has no courses yet, the learner sees a clear message instead of an empty page.

**How it is used.** Resources are read and watched on the platform; there are no download buttons. This protects the content and means every lesson completed is recorded against the learner's progress. When the administrator publishes a new resource, every learner receives a notification. Learners also earn a small amount of experience points (EP) for completing course activities.

**Courses so far (Kenya, CBC).** Written course files exist for Grade 10 (Mathematics, Essential Mathematics, English, Kiswahili, CSL, Physics, Chemistry), Grade 11 (Mathematics, English, Kiswahili, CSL) and Grade 9 (Mathematics, English, Kiswahili). Each is being completed strand by strand. Grade 11 Kiswahili and CSL use a provisional structure until the official KICD Grade 11 designs are confirmed.

### B. Live classes and video learning — In development

**Why.** Some concepts are far easier to grasp when a teacher explains them live and answers questions. Video also suits learners who understand better by watching than by reading.

**How live classes work.** Classes are taught and watched only inside Eschool, with no outside Zoom, Meet or YouTube links. This keeps learners in a safe, recorded environment and lets Eschool confirm attendance.

- The teacher decides who may enter, for example learners they select.
- Learners raise a hand to ask a question.
- After each class, learners rate it. Ratings feed into how Eschool rates its teachers.
- Classes are recorded on the teacher's side only (camera, screen and voice), never the learner's video or voice.
- Recordings are kept for 90 days, then deleted automatically. A "Recording" badge is shown, and each user agrees once that they understand sessions are recorded.

**Video lessons.** "Clear video lessons" are part of Eschool's promise. The course files written so far carry text, diagrams, worked examples and quizzes; recorded video content is still to be added to the library.

### C. Teachers and private lessons — In development (payments Planned)

**Why.** Good teachers have skills families will pay for, but informal tutoring is risky for both sides. Parents fear paying for lessons that never happen, and teachers fear not being paid. Eschool removes both risks.

**How it works.**

- A parent, or a learner paying for themselves, hires a teacher for private lessons that take place only on Eschool.
- The learner, parent, teacher and administrator agree a timetable.
- The family pays Eschool, which holds the money until lessons are delivered and pays the teacher monthly. Eschool keeps a percentage that the administrator sets.
- Proof that a lesson happened comes from the join times in Eschool's own call.
- If the teacher does not attend, the parent is refunded. If the learner does not attend, the teacher is paid after waiting 15 minutes.
- A missed lesson must be explained or agreed. Where there is no proof, an administrator decides.
- A family can end private lessons at any time. The teacher keeps payment for lessons taught, and an administrator refunds lessons paid for but not taught.

**How teachers build a reputation.** Ratings are shown out of 10, from the learners they teach. A teacher's "experience" is how long they have been active on Eschool, not a figure they type in. Teachers, like parents, cannot upload or change a profile picture.

**Payments.** Card payments through Stripe are the chosen method for plans and private lessons. Payment setup is deliberately the last item to be built, after the learning features. Automatic monthly payouts to teachers are planned.

### D. Career space ("My Career") — In development

**Why.** Learners often choose subjects without knowing which careers they lead to. Discovering too late that a dream career needs a subject they dropped is a costly mistake. Career awareness should sit beside learning, not on a separate website.

**How it works.**

- The learner chooses a dream career, which appears on their profile and on the leaderboard.
- The Career page compares the subjects that career needs with the learner's real grades, the same grades shown on their Progress page.
- It shows how ready the learner is and sets weekly career missions on a dedicated Missions tab.
- The learner's profile has a Career tab with full details of their chosen career.
- Every career has its own career badge. It is deliberately hard to earn and takes months of sustained effort.

Salary data and employment-demand figures are not part of the current design; they are a possible future addition (Section 10).

### E. Practical skills — Built into every lesson

Eschool does not run a separate skills catalogue. Practical skills are developed inside the curriculum courses themselves. Every lesson lists the CBC core competencies it builds and includes digital activities (for example, researching safely online, recording a speech, or checking answers with a calculator or spreadsheet). Each sub-strand ends with a project that applies the learning to a real community or workplace situation. The careers space then shows learners why those skills matter for the job they want.

### F. Goals, study plans and learning support — In development

**Why.** Learners rarely fail from lack of material; they fail from lack of a plan. Eschool turns intentions into a routine.

**The Schedule page** is goals-first. A learner records detailed goals: why each goal matters, its priority, study days and times, milestones and reminders. The page analyses progress towards them. Below the goals, a schedule holds several named study plans that combine the learner's goals and classes, with time grids that cover the whole day.

**Daily support.** The learner dashboard greets the learner by name ("Welcome back, \<name>" after sign-in, then a time-of-day greeting). It shows a quote that changes once a day, and three key figures: active courses, average progress and module streak.

### G. Motivation: experience points, badges and the leaderboard — Built and being refined

**Why.** Consistent effort over months is what moves grades. Recognition makes that effort visible.

- **Experience points (EP)** reward activity, including completing course activities.
- **Badges** replace profile photos: a learner's profile picture is a badge they have earned. Legendary badges share a distinctive glitch-frame style, each with its own colour. The first, "Genesis", carries a numbered "Gen. N" tag. Others include Storm Bringer, Summit, The Guardian, Atlas, Moonshot, Iron Will and Quill Master.
- **Crowns** in gold, silver and bronze mark the top three learners on their Legendary badge.
- **Plan glow:** Basic plan owners have a soft blue swirl of light around their badge, and Pro owners a gold one.
- **The leaderboard** ranks learners monthly (not weekly), giving everyone a fresh start each month. It shows each learner's dream career.

Using earned badges instead of photos also protects young learners' privacy.

### H. Accounts, profiles, friends and messages — Built

**Roles.** Eschool has four roles, each with its own pages: learner, parent, teacher and administrator.

**Registration and settings.** Registration lists every country. In Settings, learners choose their grade, change their country, pick a light or dark theme, and see all their notifications. The profile collects useful information, such as career interests, rather than unnecessary personal details. Automatic sign-out for inactivity is optional and off by default.

**Profiles and friends.** Profiles show the learner's badge, a short bio, recent achievements (Legendary badges first) and a Career tab. Learners connect with friends, not teachers: the dashboard's people card shows friends only. A learner's profile is visible only to their friends.

**Messages.** Users can message each other and share documents in conversations.

**Data that follows the learner.** All learner data is stored permanently on the server, so progress continues on any browser or device.

### I. Parent pages — Built and being extended

**Why.** Parents want to support their children but often see only an end-of-term report, when it is too late to act.

- **Dashboard:** the top figures are the number of children linked and teachers hired.
- **Grades:** shown exactly as on the child's own Progress page, with no separate grade point average to confuse the picture.
- **Leaderboard:** the same monthly leaderboard learners see.
- **Teachers page:** the hired teacher's lesson timetable (teacher, child, parent) and a view of how the teaching is going.
- **Profiles:** learner and teacher profiles open in the same layout as everywhere else. Parents do not have a profile page of their own.

### J. Plans and access — Built

| Plan | Live classes | Course access |
| --- | --- | --- |
| Free | No | Core courses |
| Basic | Yes | Most courses |
| Pro | Yes | Every course, including Mathematics and selected sciences |

### K. Curriculum structure and alignment — Built

Eschool organises learning by **country → grade → subject → strand → sub-strand → lesson**, matching how national curricula are written. For Kenya, courses follow the KICD curriculum designs: strands and sub-strands in the official order, specific learning outcomes, key inquiry questions, core competencies, values and pertinent contemporary issues. Assessment levels use the CBC rubric (Exceeds, Meets, Approaches and Below Expectations).

This matters because a learner's exams, teachers and textbooks follow the official design. Content that follows the same structure can be used directly for revision, homework and catching up. The same structure supports learners as they move from Junior School (Grade 9) into Senior School (Grades 10 to 12).

## 5. The Eschool user ecosystem

Eschool works because four groups act on one shared record of each learner. What one group does becomes useful information for the others.

&#91;embedded content: Eschool ecosystem · six parts around one learner record\]

Every part reads from and writes to the same learner record, so a lesson completed in a course shows up on the career page, the leaderboard and the parent's view.

| Group | What they do on Eschool | What they get |
| --- | --- | --- |
| **Learners** | Study courses, attend live classes, set goals, choose a dream career, earn badges, connect with friends | Organised curriculum learning, a plan, motivation and a direction |
| **Parents and guardians** | Link their children, hire teachers, follow grades, timetables and teaching | A clear, current view of their child's learning and a safe way to pay for tutoring |
| **Teachers** | Teach private lessons and live classes, build a rating | Paid work, protected payment and a reputation earned from real learners |
| **Eschool administrators** | Create and publish courses, approve timetables, settle missed-lesson cases, run payments and refunds | Control of quality, fairness and safety across the platform |

### How the groups strengthen each other

- A learner's completed lessons and grades feed their **Progress page**, their **Career page** and their **parent's view** at once.
- A parent who sees falling grades can **hire a teacher** from the same account, and then watch the **lesson timetable** and how the teaching is going.
- A teacher's **ratings** come from the learners they teach, so families choose teachers on evidence.
- When the administrator publishes a new resource, **every learner is notified**, so new content reaches learners immediately.
- Learners motivate each other through **friends, badges and the monthly leaderboard**.

### The wider education community

Beyond individual users, curriculum-aligned courses that any learner can open help close the gap between well-resourced and under-resourced schools. A learner whose school lacks a specialist teacher can still follow the official strands and sub-strands. Teachers gain a fair, structured way to earn from their expertise online.

## 6. Benefits and value

### For learners

- **Academic:** complete courses that follow the official curriculum. They come with worked examples, practice at several levels with answers, quizzes that explain every answer, and revision pages before exams.
- **Practical:** real-life applications, projects and digital activities in every lesson build the competencies employers and Senior School pathways value.
- **Personal:** goals with reasons and milestones, daily routines, badges that reward months of effort, and a monthly leaderboard where everyone starts fresh.
- **Career:** a dream career linked to real grades, weekly missions and an honest view of readiness, early enough to choose the right subjects.
- **Access:** a Free plan, the right to pay for one's own plan and teachers, and progress that is saved on any device.

### For teachers

- **Income:** private lessons and live classes, with fees held by Eschool and paid monthly for lessons delivered.
- **Protection:** attendance is proven by call join times; if a learner does not turn up, the teacher is paid after 15 minutes of waiting.
- **Recognition:** a rating out of 10 from real learners, and experience measured by actual time teaching on Eschool.
- **Focus:** teachers teach; Eschool produces the course materials, so they do not have to create and market content on their own.

### For parents

- **Visibility:** the same grades the child sees, the same leaderboard, and the hired teacher's timetable.
- **Safety:** lessons happen only on Eschool; teacher-side recordings are kept for 90 days; payment is held until lessons happen.
- **Fairness:** refunds when a teacher does not attend or when lessons are ended early.
- **Simplicity:** one account to follow several children and their teachers.

### For education systems and schools

- Curriculum-aligned digital courses that follow the KICD strands, sub-strands and assessment levels, usable alongside classroom teaching.
- Support for learners whose schools lack specialist teachers or textbooks.
- A structure that carries learners from Junior School (Grade 9) into Senior School (Grades 10 to 12) without changing platform.

### For society

- Wider access to good learning, in line with the principle that education is a right.
- Earlier, better-informed career decisions, which reduce wasted years and mismatched studies.
- New, fair online income for teachers.
- Young people who practise communication, critical thinking, digital literacy and citizenship as part of everyday learning.

## 7. Technology and platform architecture

Eschool runs on a Python Flask backend that serves role-specific web pages, stores every learner's data on the server, and loads curriculum courses by country.

### Backend

- **Python and Flask**, kept deliberately in a single backend file (`backen.py`). One file makes the whole application easy to read, change and deploy while the team is small.
- **Role-based pages and access** for learners, parents, teachers and administrators. Each role sees its own dashboard and only the actions it is allowed to take.
- **Server-side storage of learner data**: progress, grades, goals, badges and settings are kept permanently on the server, so a learner can move between devices and browsers without losing anything.
- **Country-based course loading**: the backend keeps a list of course files for each country (for Kenya, `COURSE_FILES['KE']`). A learner only receives the courses for the country they chose.

### Course content format

- Each course is a self-contained JavaScript file that adds one course object to a shared course list (`window.ESCHOOL_COURSES`).
- Every course carries the same fields: identity (id, name, code, level), presentation (icon, colour, category), descriptions, an ordered list of modules, statistics (lessons, exercises, quizzes, projects, duration), and a final quiz.
- Every module carries its type, duration, number of exercises, its lesson content and its multiple-choice questions with correct answers and explanations.
- Files are grouped in one folder per country, which keeps each country's curriculum separate and lets a new country be added without touching the others.
- Lesson content uses self-contained styling and drawn diagrams with no external scripts, so it displays reliably on any device.
- Each course file is checked before release by an automated script. The script confirms that it loads, that module names follow the curriculum hierarchy, that quiz answers are balanced and every answer has an explanation, and it takes rendered screenshots for review.

### Learning features in the platform

- **Notifications** to every learner when a resource is published, all listed in Settings.
- **In-platform calls** for live classes and private lessons, with join times recorded as attendance proof.
- **Teacher-side recording** of classes and lessons, with a consent step and automatic deletion after 90 days.
- **No download routes** for resources: content is viewed on the site only.

### Security and privacy by design

- Learners use earned badges, not photos, as profile pictures; teachers and parents cannot upload profile pictures.
- A learner's profile is visible only to their friends.
- Live classes and lessons stay inside Eschool, with no outside meeting links.
- Recordings capture only the teacher's side and expire after 90 days.
- Money for private lessons is held by Eschool until lessons are delivered.

### Still to be completed or documented

- **Payments (Planned):** Stripe card payments for plans and private lessons, with automatic monthly teacher payouts. Deliberately scheduled last.
- **Mobile app (Planned):** a mobile version of Eschool.
- **Database, hosting and scaling:** the specific database engine, hosting provider and deployment setup are not recorded in the material this document is based on, and should be added from the live system.

### Why this foundation fits the mission

A single, readable backend lets a small team move fast while the product is still being shaped. Course files in one standard format let the curriculum library grow subject by subject and country by country without changing the platform. Server-side learner records are what make the connected experience possible: the same data drives the Progress page, the Career page, the leaderboard and the parent's view.

## 8. What makes Eschool valuable

Eschool's value lies in the connections between its parts. Each part alone exists elsewhere; together they produce things no single-purpose app can.

| Eschool can become | What it already provides | What the connection adds |
| --- | --- | --- |
| A central, curriculum-aligned learning library | Full courses by country, grade, subject and strand | Every lesson completed counts towards grades, goals and career readiness |
| A learning and development platform | Goals, study plans, streaks, EP and badges | Motivation tied to real progress, not to app usage alone |
| A fair teaching marketplace | Private lessons, timetables, protected payment, ratings | Teachers see the learner's actual needs; parents see the results |
| A career discovery space | Dream career, readiness, missions, career badges | Career goals change how a learner studies today |
| A practical skills platform | CBC competencies and projects in every lesson | Skills shown in the context of the learner's chosen career |
| A bridge from education to work | Career readiness linked to real grades | A clear line from today's subjects to tomorrow's job |

A learner who uses five separate apps has five partial pictures of themselves. On Eschool, there is one picture. It is the same for the learner, the parent and the teacher, and it is updated every time the learner studies.

## 9. Target audience and market opportunity

**Primary audience:** school learners in Kenya following the Competency-Based Curriculum, especially Grade 9 (the last year of Junior School) and Grades 10 to 12 (Senior School), together with their parents and qualified teachers.

### Why this audience

- **Curriculum change creates demand.** CBC Senior School is new. Learners, parents and many teachers need materials that follow the new KICD designs strand by strand, and such materials are still scarce.
- **Transition years matter most.** Grade 9 to Grade 10 is when learners choose a Senior School pathway. Career awareness linked to subjects is most valuable exactly then.
- **Families already pay for tutoring.** Private tuition is common. A safe, transparent and accountable way to arrange and pay for it meets an existing need.
- **Teachers want fair online work.** Eschool offers structured, protected online income without having to market themselves alone.

### Beyond Kenya

Eschool is designed as an international, English-language platform. The country a learner registers with decides their courses, and each country's courses are kept separate. The first five course countries are **Kenya, India, the Philippines, the United States and the United Kingdom**, chosen as English-speaking markets with large numbers of learners. Kenya's curriculum courses are being built first.

The same structure (country → grade → subject → strand → lesson) can hold any national curriculum. Adding a country means adding its course files, not rebuilding the platform. The mission, the teacher marketplace, goals, careers and parent pages stay the same everywhere.

The website stays in English for now. Pages avoid country-specific content outside the courses themselves, so the same platform serves every market.

## 10. Long-term vision and future potential

Everything in this section is a **future possibility**, not an existing feature. Each item is included only because it would strengthen something Eschool already does.

| Future development | Builds on | Why it strengthens the ecosystem |
| --- | --- | --- |
| Personalised recommendations | Grades, goals and dream career already on record | Suggest the next lesson or revision page based on real weak areas |
| AI-assisted study support | Lessons with worked examples and explained answers | Step-by-step help in the learner's own course, at any hour |
| Richer learning analytics | Progress, streaks and quiz results | Show learners, parents and teachers exactly which strands need work |
| Interactive assessments | Module quizzes and final quizzes | Timed tests, exam simulations and instant feedback by strand |
| Recorded video lessons | Course structure and live classes | A video for each lesson, for learners who learn by watching |
| Career data | My Career page | Add qualifications, typical pay and demand for each career |
| Expanded teacher and mentor roles | Private lessons and ratings | Group tutoring, career mentors and subject specialists |
| Deeper parent participation | Parent pages and messages | Alerts, weekly summaries and teacher reports |
| Mobile app (already planned) | Server-side learner records | Learning on the phone without losing progress |
| Payments (already planned) | Payment-bridge rules | Stripe card payments and automatic teacher payouts |
| Full curricula for more countries | Country-based course files | India, the Philippines, the USA and the UK after Kenya |
| Partnerships with schools | Curriculum-aligned courses | Schools use Eschool alongside classroom teaching |

The principle behind every item: a new feature is worth adding only if it uses the shared learner record and makes the connections between learning, teaching, family and career stronger.

## 11. Competitive positioning and unique value proposition

**Value proposition:** Eschool is the one place where a school learner studies their own country's curriculum, sets goals, gets taught by teachers their family can trust, and sees how today's grades lead to tomorrow's career, with their parents able to follow it all.

1. **What fundamental problem does Eschool address?** Learning, practice, tutoring, motivation, career guidance and family involvement are scattered across disconnected places, so no one sees the whole learner.
2. **What makes its approach different?** One account and one learner record connect curriculum courses, live classes, private teachers, goals, careers, badges and parent pages. Content is produced centrally for quality, and teachers are paid through a protected payment bridge.
3. **Who benefits most?** School learners following a national curriculum, starting with Kenyan CBC learners in Grades 9 to 12, and their parents. Teachers seeking fair online income also benefit.
4. **What does it offer that a single-purpose platform cannot?** A grade that instantly updates the learner's progress, career readiness and parent's view. A tutor hired, scheduled, attended and paid for in the same place. Motivation tied to real learning.
5. **Why connect education, careers, skills and teachers?** Because they depend on each other. A goal motivates study, study changes grades, grades show where help is needed, and the right teacher closes the gap.
6. **What makes it worth developing further?** The core is built and growing: a standard course format, country-based delivery, role-based pages and server-side learner records. Every new course and feature adds to one connected system rather than to a separate product.
7. **What is its long-term competitive advantage?** Curriculum-aligned content for each country, combined with a trusted record of each learner's progress, career goals and teachers. The longer a family uses Eschool, the more useful that record becomes, and the harder it is to replace with separate tools.

## 12. Overall mission and impact

Education is more than lessons and examinations. It is the chance to discover what one is good at, to build abilities that matter, to understand what is possible, and to prepare for a working life worth having.

Too often those chances depend on where a child lives, which school they attend, and what their family can afford. Eschool exists to make them reachable and connected. It offers curriculum courses anyone can open, goals that give study a purpose, and careers linked to real grades. It brings in teachers who are fairly paid and parents who can see and support their children's learning.

Eschool is still growing. Its courses are being written strand by strand, its payment system and mobile app are still to come, and its first markets are just opening. Its direction is fixed, and it starts from one conviction:

**EDUCATION IS A RIGHT.**
