import type { Locale } from "@/lib/i18n/types";
import type { QuranCourse } from "@/lib/courses/quran/types";
import { islamicImg } from "./images";
import { ISLAMIC_COURSES_AR } from "./ar";

export const ISLAMIC_PROGRAM_COURSES_EN: QuranCourse[] = [
  {
    slug: "islamic-general",
    title: "Islamic General (Comprehensive)",
    tagline: "The Complete Islamic Studies Pathway—From Foundations to Confident Practice",
    seoTitles: [
      "Complete Online Islamic Studies Program | Nibras Network Academy",
      "Islamic General Comprehensive Track — Structured Learning Path",
    ],
    definition:
      "Islamic General is Nibras Network Academy's comprehensive track for learners who want structured Islamic knowledge—not scattered topics. You study Aqeedah, Fiqh, Hadith, Seerah, Tafsir, and Islamic manners (adab) with practical application for daily worship and real-life decisions—taught with clarity for international students and families.",
    teacher: {
      profile: [
        "Experienced Islamic Studies teachers trained for non-specialist audiences",
        "Structured syllabus with stated outcomes per module",
        "Assessments and written feedback visible to students and parents",
        "Clear references to Qur'an and authentic Sunnah-based principles",
      ],
      whyQuote:
        "One clear pathway instead of random classes—balanced learning across belief, worship, prophetic guidance, and Qur'an meaning with measurable progression.",
      whyLabel: "Comprehensive Track",
    },
    philosophy: {
      quote:
        "Structured curriculum, authentic learning grounded in Qur'an and sound prophetic guidance, and practical outcomes you can apply in worship, character, and daily life.",
      beliefs: [
        "One clear pathway instead of random classes",
        "Balanced learning: belief + worship + prophetic guidance + Qur'an meaning",
        "Measurable progression with checkpoints and feedback",
        "Ideal for parents who want a complete, safe curriculum",
      ],
    },
    curriculum: {
      phases: [
        {
          title: "Module 1 — Aqeedah Foundations",
          items: ["Core beliefs and identity", "Faith-strengthening essentials", "Avoiding common misconceptions"],
        },
        {
          title: "Module 2 — Fiqh of Worship",
          items: ["Purification and prayer", "Fasting essentials", "Daily rulings for real life"],
        },
        {
          title: "Module 3 — Hadith Essentials",
          items: ["Understanding prophetic teachings", "Application in daily behavior", "Building Sunnah habits"],
        },
        {
          title: "Module 4 — Seerah & Character",
          items: ["Life lessons from the Prophet ﷺ", "Leadership and resilience", "Identity-building themes"],
        },
        {
          title: "Module 5 — Tafsir Foundations",
          items: ["How meaning is understood", "Key themes and application", "Reflective Qur'an engagement"],
        },
        {
          title: "Module 6 — Adab & Daily Practice",
          items: ["Manners and intentions", "Spiritual routine habits", "Connecting knowledge to action"],
        },
      ],
      outcome:
        "Explain core beliefs with clarity, perform worship with correct understanding, apply prophetic guidance daily, read Qur'anic themes with context, and build a stable long-term study plan.",
    },
    methods: [
      {
        title: "Level-Based Comprehensive Pathway",
        badge: "Best Value Pathway",
        flow: [
          "2 live classes per week (60 minutes)",
          "1 guided review task (15–25 minutes)",
          "Monthly checkpoint quiz + teacher feedback",
          "Module mastery unlocks the next level",
        ],
        whyTitle: "Why it works",
        whyPoints: [
          "Clear progression from Beginner to Advanced with optional Expert extensions",
          "Live online delivery plus LMS resources (notes, quizzes, revision plans)",
          "International-friendly pacing with age-appropriate cohorts (9+)",
        ],
      },
    ],
    techniques: [
      {
        title: "Outcome-based lessons",
        points: [
          "What you will know and do after each module",
          "Short retrieval quizzes and reflection prompts",
          "Scenario learning especially in Fiqh modules",
        ],
      },
      {
        title: "Progress tracking",
        points: [
          "Module completion certificates",
          "Comprehensive Track certificate upon completion",
          "Attendance, engagement, and checkpoint scores visible to families",
        ],
      },
    ],
    audience: {
      perfectFor: [
        "Beginners who want a full roadmap",
        "Parents seeking structured Islamic education for kids and teens",
        "Reverts and new Muslims wanting clarity and confidence",
        "Busy professionals needing guided, efficient learning",
      ],
      prerequisites: ["None — starts from essentials"],
      scholarNote: "Recommended ages: 9+ with separate cohorts for kids, teens, and adults.",
    },
    progression: [
      "Beginner → Intermediate → Advanced (with optional Expert extensions)",
      "Suggested duration: 6–12 months (modular; varies by pace)",
      "Cross-track: Tafsir + Quranic Arabic for deeper meaning access",
    ],
    stories: [
      {
        name: "Family Learning Path",
        quote:
          "Parents and children study aligned topics at suitable levels—building shared Islamic literacy at home.",
        meta: ["Track: Comprehensive", "Outcome: Full foundation + certificate pathway"],
      },
      {
        name: "Revert Confidence",
        quote:
          "From uncertainty to structured clarity in belief, worship, and daily practice within a supportive environment.",
        meta: ["Track: Comprehensive", "Outcome: Worship confidence + study routine"],
      },
    ],
    faqs: [
      {
        question: "Is this suitable for reverts/new Muslims?",
        answer:
          "Yes. It starts from essentials and builds step-by-step clarity in belief, worship, and daily practice in a supportive learning environment.",
      },
      {
        question: "Do I need Arabic before joining?",
        answer:
          "No. Arabic is helpful for deeper Qur'an study, but the program is designed to be accessible in English for international learners.",
      },
      {
        question: "How do you measure progress?",
        answer:
          "Through module checkpoints, short quizzes, and teacher feedback mapped to clear outcomes (belief, worship practice, understanding, and habits).",
      },
      {
        question: "Can my child and I enroll in parallel tracks?",
        answer:
          "Yes. We can recommend age-appropriate cohorts so families can study aligned topics at suitable levels and pacing.",
      },
      {
        question: "What certificate do I receive at the end?",
        answer:
          "You receive module certificates, and a Comprehensive Track certificate upon completing the required modules and assessments.",
      },
    ],
    includes: [
      "Live online classes (2/week)",
      "LMS resources: notes, quizzes, revision plans",
      "Module certificates + Comprehensive Track certificate",
      "Teacher feedback and progress visibility for parents",
      "Optional placement assessment",
    ],
    offer: {
      lines: ["6–12 month modular pathway", "Beginner → Advanced with Expert extensions"],
      cta: "Start Comprehensive Track",
      subcta: "Take Placement Assessment",
    },
    images: [
      islamicImg("Islamic General (Comprehensive Program)1.jpg"),
      islamicImg("Islamic General (Comprehensive Program)2.jpg"),
      islamicImg("Islamic General (Comprehensive Program)3.jpg"),
    ],
    accent: "#1B4332",
  },
  {
    slug: "aqeedah",
    title: "Aqeedah (Islamic Creed)",
    tagline: "Aqeedah — Build a Strong Foundation of Belief",
    seoTitles: [
      "Learn Aqeedah Online (Islamic Creed) | Nibras Network Academy",
      "Aqeedah Foundations — Structured Islamic Belief Course",
    ],
    definition:
      "This course strengthens your Islamic identity by teaching the foundations of belief in a structured way—ideal for beginners, international students, and reverts. Lessons focus on correct understanding, practical spiritual impact, and avoiding confusion from misinformation.",
    teacher: {
      profile: [
        "Clear syllabus with respectful Q&A policy",
        "Teacher-guided clarification of common misconceptions",
        "Assessments with written feedback on understanding",
        "Age-appropriate delivery for teens and adults",
      ],
      whyQuote:
        "From \"I'm unsure and overwhelmed\" to \"I understand the foundations and feel spiritually grounded.\"",
      whyLabel: "Core Foundations",
    },
    philosophy: {
      quote:
        "Faith includes belief, speech, and action. Learning essentials prevents confusion and builds yaqīn (certainty) with structured understanding.",
      beliefs: [
        "Tawhid: worship of Allah alone",
        "Belief in Angels, Books, Messengers, Last Day, and Qadar",
        "Spiritual anchors: du'ā, tawakkul, and ikhlāṣ",
        "Connecting belief to worship, character, and daily choices",
      ],
    },
    curriculum: {
      phases: [
        {
          title: "Milestone 1 — Pillars of Faith",
          items: ["Meaning of worship and purpose of life", "Pillars of faith explained clearly", "Explain beliefs in your own words"],
        },
        {
          title: "Milestone 2 — Faith Connections",
          items: ["Tawhid introduction", "Key worship and faith connections", "Recognize common misunderstandings"],
        },
        {
          title: "Milestone 3 — Daily Application",
          items: ["Apply belief to daily decisions", "Spiritual resilience through structured understanding", "Build confidence for next steps"],
        },
      ],
      outcome:
        "Explain the pillars of faith clearly, strengthen certainty with structured understanding, recognize common misconceptions, and connect belief to worship and character.",
    },
    methods: [
      {
        title: "Structured Creed Learning",
        badge: "Core Foundations",
        flow: [
          "1–2 live lessons per week",
          "Short reflection prompts after each session",
          "Milestone checks with teacher feedback",
          "LMS summaries and quick quizzes",
        ],
        whyTitle: "Why it works",
        whyPoints: [
          "Beginner-friendly steps—not overwhelming complexity",
          "Addresses confusion from online content responsibly",
          "Fully accessible without Arabic requirement",
        ],
      },
    ],
    techniques: [
      {
        title: "Misconceptions clarified gently",
        points: [
          "Faith is not only feelings—it includes belief, speech, and action",
          "Learning essentials prevents confusion",
          "Aqeedah is taught in clear, gradual steps",
        ],
      },
      {
        title: "Assessment for clarity",
        points: [
          "Short quizzes on core concepts",
          "Milestone checks: explain and apply",
          "Teacher feedback on understanding quality",
        ],
      },
    ],
    audience: {
      perfectFor: [
        "Beginners and reverts seeking clarity",
        "International students building Islamic identity",
        "Teens and adults (12+; kids track with simplified outcomes)",
        "Learners confused by scattered online content",
      ],
      prerequisites: ["None"],
    },
    progression: [
      "Beginner → Intermediate (6–10 weeks)",
      "Next: Fiqh (worship practice) and Seerah (identity and lessons)",
      "Or enroll in the Comprehensive Track for a full pathway",
    ],
    stories: [
      {
        name: "Revert Journey",
        quote: "Structured Aqeedah replaced confusion with clarity and spiritual grounding.",
        meta: ["Track: Aqeedah", "Duration: 6–10 weeks"],
      },
    ],
    faqs: [
      {
        question: "Is Aqeedah suitable for beginners and reverts?",
        answer:
          "Yes. It explains the foundations of belief clearly, with a gradual structure and practical spiritual impact.",
      },
      {
        question: "Will this course address common confusion from online content?",
        answer:
          "Yes. It helps students distinguish core beliefs from common misunderstandings using a structured, teacher-guided approach.",
      },
      {
        question: "Is Arabic required?",
        answer:
          "No. Key terms may be introduced, but teaching is fully accessible for non-Arabic speakers.",
      },
      {
        question: "How is understanding assessed?",
        answer:
          "With short quizzes and milestone checks focused on clarity—plus teacher feedback on how well you can explain and apply concepts.",
      },
      {
        question: "What should I study after Aqeedah?",
        answer:
          "Most students move to Fiqh (worship practice) and Seerah (identity and lessons), or enroll in the Comprehensive Track for a full pathway.",
      },
    ],
    includes: [
      "Live online classes",
      "LMS summaries and quick quizzes",
      "Completion certificate + checkpoint score",
      "Respectful Q&A and teacher feedback",
    ],
    offer: {
      lines: ["6–10 weeks", "1–2 live lessons/week + reflection prompts"],
      cta: "Enroll in Aqeedah",
      subcta: "Take Placement Assessment",
    },
    images: [islamicImg("Aqeedah.jpg")],
    accent: "#2D6A4F",
  },
  {
    slug: "fiqh",
    title: "Fiqh (Islamic Jurisprudence)",
    tagline: "Fiqh — Learn Worship Correctly, Live Islam Practically",
    seoTitles: [
      "Learn Fiqh Online (Worship & Daily Rulings) | Nibras Network Academy",
      "Practical Fiqh Course — Worship and Daily Life Guidance",
    ],
    definition:
      "Fiqh at Nibras is taught for real life: step-by-step worship learning, common mistakes, and practical questions learners face at home, school, travel, work, and in new-Muslim situations.",
    teacher: {
      profile: [
        "Practical checklists and scenario-based instruction",
        "Clear learning boundaries and respectful handling of differences",
        "Skills assessments with teacher feedback",
        "Step-by-step guidance for new Muslims",
      ],
      whyQuote:
        "Perform wudu and prayer correctly with confidence—apply rulings in common day-to-day scenarios without guesswork.",
      whyLabel: "Practical Worship",
    },
    philosophy: {
      quote:
        "Worship learned correctly builds consistency. Scenario learning turns rulings into confident daily practice.",
      beliefs: [
        "Purification: wudu, ghusl, tayammum, cleanliness basics",
        "Prayer: pillars, sunnahs, common errors, congregation etiquette",
        "Fasting: Ramadan essentials and common situations",
        "Daily rulings: food, clothing, interactions, and adab",
      ],
    },
    curriculum: {
      phases: [
        {
          title: "Cluster 1 — Purification",
          items: ["Wudu and ghusl step-by-step", "Tayammum when needed", "Handling waswas with clarity"],
        },
        {
          title: "Cluster 2 — Prayer",
          items: ["Prerequisites and pillars", "Common errors and corrections", "Managing prayer at school and work"],
        },
        {
          title: "Cluster 3 — Fasting & Daily Rulings",
          items: ["Ramadan essentials", "Travel and sickness scenarios", "Halal/haram basics and daily adab"],
        },
      ],
      outcome:
        "Perform wudu and prayer correctly, identify essentials vs recommended, apply rulings in daily scenarios, and ask questions with the right fiqh framework.",
    },
    methods: [
      {
        title: "Scenario-Based Fiqh",
        badge: "Practical Worship",
        flow: [
          "1–2 live lessons per week",
          "Practical checklist homework",
          "Illustrated guides and scenario quizzes",
          "Skills checklist assessment",
        ],
        whyTitle: "Why it works",
        whyPoints: [
          "Real scenarios: new Muslim, travel, work schedules, school",
          "Common prayer and wudu mistakes covered explicitly",
          "Differences handled respectfully with focus on clarity",
        ],
      },
    ],
    techniques: [
      {
        title: "Student scenarios",
        points: [
          "New Muslim: how to start praying properly",
          "School/work: managing prayer times",
          "Travel: what changes in prayer",
          "Waswas: handling doubt in wudu and prayer",
        ],
      },
      {
        title: "Practical skills",
        points: [
          "Essential vs recommended priorities",
          "Scenario assessments with feedback",
          "Worship confidence checklist",
        ],
      },
    ],
    audience: {
      perfectFor: [
        "New Muslims learning worship from scratch",
        "Students and professionals managing prayer schedules",
        "Families seeking practical worship guidance (10+)",
        "Learners who want step-by-step fiqh—not theory alone",
      ],
      prerequisites: ["Basic Aqeedah recommended but not required"],
    },
    progression: [
      "Beginner → Intermediate (6–12 weeks)",
      "Next: Hadith Studies for daily Sunnah practice",
      "Tafsir strengthens Qur'an understanding and reflection",
    ],
    stories: [
      {
        name: "New Muslim Milestone",
        quote: "From uncertainty in prayer to confident, correct worship with a clear checklist.",
        meta: ["Track: Fiqh", "Outcome: Worship confidence"],
      },
    ],
    faqs: [
      {
        question: "Is this course suitable for new Muslims?",
        answer:
          "Yes. It teaches worship step-by-step and focuses on what you need to practice Islam correctly and confidently.",
      },
      {
        question: "Do you teach Fiqh in a practical step-by-step way?",
        answer:
          "Yes. Lessons use checklists and real-life scenarios so students can implement what they learn immediately.",
      },
      {
        question: "Will I learn common mistakes in prayer and wudu?",
        answer:
          "Yes. Common errors are covered to build confidence and reduce confusion in daily worship.",
      },
      {
        question: "How do you handle different opinions (where relevant)?",
        answer:
          "Differences are handled respectfully and responsibly, with a focus on clarity, learner level, and practical outcomes.",
      },
      {
        question: "What course should I take after Fiqh?",
        answer:
          "Hadith Studies supports daily Sunnah practice, and Tafsir strengthens Qur'an understanding and reflection.",
      },
    ],
    includes: [
      "Live online classes",
      "Illustrated worship guides",
      "Scenario quizzes and skills checklist",
      "Completion certificate + assessment",
    ],
    offer: {
      lines: ["6–12 weeks", "1–2 live lessons/week + practical homework"],
      cta: "Join Fiqh Course",
      subcta: "Talk to an Advisor",
    },
    images: [islamicImg("Fiqh1.jpg"), islamicImg("Fiqh2.jpg"), islamicImg("Fiqh3.jpg")],
    accent: "#40916C",
  },
  {
    slug: "hadith-studies",
    title: "Hadith Studies",
    tagline: "Hadith Studies — Learn Prophetic Guidance with Method and Practice",
    seoTitles: [
      "Hadith Studies Online | Learn Prophetic Traditions | Nibras Network Academy",
      "Understanding & Living the Sunnah — Structured Hadith Course",
    ],
    definition:
      "This course teaches hadith in a way that is practical, respectful, and method-based: understanding meanings, key lessons, and how scholars derive guidance—so students apply hadith wisely in daily life.",
    teacher: {
      profile: [
        "Clear text sources with teacher-guided application",
        "Adab-centered classroom discussions",
        "Introductory authenticity concepts at appropriate levels",
        "Weekly habit tracker with teacher feedback",
      ],
      whyQuote:
        "From reading hadith to building consistent Sunnah-centered habits—one lesson, one action each week.",
      whyLabel: "Prophetic Guidance",
    },
    philosophy: {
      quote:
        "Text → vocabulary → meaning → context → lessons → application plan. Hadith selected for authenticity, clarity, and practical relevance.",
      beliefs: [
        "Read and understand hadith with context and vocabulary support",
        "Extract practical lessons for belief, worship, and manners",
        "Distinguish main message from secondary details",
        "Build consistent Sunnah-based habits",
      ],
    },
    curriculum: {
      phases: [
        {
          title: "Stage 1 — Core Hadith Themes",
          items: ["Intentions and sincerity", "Manners and worship basics", "Key vocabulary support"],
        },
        {
          title: "Stage 2 — Character & Community",
          items: ["Honesty and patience", "Family ties and community adab", "Context and meaning extraction"],
        },
        {
          title: "Stage 3 — Application Projects",
          items: ["Weekly Sunnah habit tracker", "One lesson + one action reflections", "Quiz on key meanings and themes"],
        },
      ],
      outcome:
        "Read hadith with context, extract practical lessons, distinguish main from secondary details, and build consistent Sunnah-based habits.",
    },
    methods: [
      {
        title: "Method-Based Hadith Study",
        badge: "Prophetic Guidance",
        flow: [
          "1 live lesson per week",
          "Application task after each session",
          "LMS notes and habit tracker",
          "Short weekly reflections: one lesson + one action",
        ],
        whyTitle: "Why it works",
        whyPoints: [
          "Practice-focused—not theory alone",
          "Introductory scholar methodology without overwhelming detail",
          "Hadith chosen for daily-life relevance",
        ],
      },
    ],
    techniques: [
      {
        title: "Study methodology",
        points: [
          "Text → vocabulary → meaning → context → lessons → application",
          "Simple introduction to authenticity concepts",
          "Practical habit log with teacher feedback",
        ],
      },
      {
        title: "Assessment built-in",
        points: [
          "Weekly reflection: one lesson + one action",
          "Quiz on key meanings and themes",
          "Habit tracker progress review",
        ],
      },
    ],
    audience: {
      perfectFor: [
        "Learners wanting daily Sunnah practice (12+)",
        "Teen-friendly cohorts building character habits",
        "Students after Aqeedah or Fiqh seeking prophetic guidance",
        "Families building shared Sunnah routines",
      ],
      prerequisites: ["Basic Islamic literacy helpful"],
    },
    progression: [
      "Beginner+ → Intermediate (6–10 weeks)",
      "Next: Seerah adds context and life lessons",
      "Fiqh helps apply guidance in worship and daily rulings",
    ],
    stories: [
      {
        name: "Habit Transformation",
        quote: "Weekly action steps turned hadith knowledge into consistent Sunnah-centered routines.",
        meta: ["Track: Hadith", "Tool: Habit tracker"],
      },
    ],
    faqs: [
      {
        question: "Do I need Arabic to study Hadith?",
        answer:
          "No. The course is taught in clear English, with essential vocabulary support when needed.",
      },
      {
        question: "Is the course focused on daily practice or theory?",
        answer:
          "Practice-focused. Each lesson includes clear takeaways and a weekly action step to build Sunnah-centered habits.",
      },
      {
        question: "How do you choose which hadith to study?",
        answer:
          "Hadith are selected for authenticity, clarity, and practical relevance—so students learn guidance that applies to daily life.",
      },
      {
        question: "Will I learn how scholars understand hadith (basics)?",
        answer:
          "Yes, at an introductory level—enough to study responsibly without overwhelming technical details.",
      },
      {
        question: "What is the next step after Hadith Studies?",
        answer:
          "Seerah adds context and life lessons, while Fiqh helps you apply guidance in worship and daily rulings.",
      },
    ],
    includes: [
      "Live online classes",
      "LMS notes and habit tracker",
      "Weekly application tasks",
      "Completion certificate",
    ],
    offer: {
      lines: ["6–10 weeks", "1 live lesson/week + application task"],
      cta: "Start Hadith Studies",
      subcta: "Take Placement Assessment",
    },
    images: [islamicImg("Hadith Studies1.jpg"), islamicImg("Hadith Studies2.jpg")],
    accent: "#52796F",
  },
  {
    slug: "seerah",
    title: "Seerah (Prophet Biography)",
    tagline: "Seerah — A Guided Journey Through the Prophet's ﷺ Life",
    seoTitles: [
      "Seerah Course Online | Life of Prophet Muhammad ﷺ | Nibras Network Academy",
      "Seerah — Character Building and Historical Clarity",
    ],
    definition:
      "Seerah is taught as more than a timeline: students learn key events with context, extract lessons for resilience and identity, and connect Seerah to Qur'anic revelation and daily conduct.",
    teacher: {
      profile: [
        "Lesson-to-life applications in every module",
        "Age-appropriate delivery for kids, teens, and adults",
        "Respectful handling of sensitive historical topics",
        "Timeline visuals and short quizzes for retention",
      ],
      whyQuote:
        "From \"Seerah facts\" to \"Seerah lessons that shape my choices and character.\"",
      whyLabel: "Identity & Character",
    },
    philosophy: {
      quote:
        "Love of the Prophet ﷺ grows through understanding. Historical clarity builds identity, resilience, and practical character lessons.",
      beliefs: [
        "Before Prophethood: society, character, preparation",
        "Makkah challenges: da'wah wisdom and perseverance",
        "Hijrah & Madinah: community, leadership, worship as a society",
        "Major events and farewell teachings with lessons focus",
      ],
    },
    curriculum: {
      phases: [
        {
          title: "Module 1 — Before Prophethood",
          items: ["Society and character of the Prophet ﷺ", "Preparation and early life lessons"],
        },
        {
          title: "Module 2 — Early Revelation & Makkah",
          items: ["Patience and truthfulness", "Da'wah wisdom under pressure", "Confidence and community challenges"],
        },
        {
          title: "Module 3 — Madinah & Legacy",
          items: ["Building community and leadership", "Treaties and key events (lessons-focused)", "Farewell teachings and enduring guidance"],
        },
      ],
      outcome:
        "Understand major Seerah stages with clear takeaways, strengthen love and connection to the Prophet ﷺ, and apply character lessons in daily life.",
    },
    methods: [
      {
        title: "Guided Seerah Journey",
        badge: "Identity & Character",
        flow: [
          "1 live lesson per week",
          "Lesson reflection activity after each session",
          "Timeline visuals and short quizzes",
          "Connection to Qur'anic revelation context where helpful",
        ],
        whyTitle: "Why it works",
        whyPoints: [
          "Lessons central—not history alone",
          "Age-appropriate cohorts (9+)",
          "Strengthens Islamic identity for youth and reverts",
        ],
      },
    ],
    techniques: [
      {
        title: "Character extraction",
        points: [
          "Mercy, patience, courage, and integrity from key events",
          "Identity-building for youth and reverts",
          "Links between Seerah and Qur'anic themes",
        ],
      },
      {
        title: "Transformation journey",
        points: [
          "Historical context with practical takeaways",
          "Reflection prompts after each lesson",
          "Progress through major Seerah stages",
        ],
      },
    ],
    audience: {
      perfectFor: [
        "Kids, teens, and adults (9+; separate cohorts)",
        "Youth building Islamic identity and character",
        "Reverts seeking connection to the Prophet ﷺ",
        "Families studying aligned Seerah themes together",
      ],
      prerequisites: ["None — beginner-friendly"],
    },
    progression: [
      "Beginner → Intermediate (6–10 weeks)",
      "Next: Hadith Studies for daily Prophetic guidance",
      "Tafsir for deeper Qur'an understanding",
    ],
    stories: [
      {
        name: "Youth Identity",
        quote: "Seerah lessons shaped daily choices—building love of the Prophet ﷺ and confidence in identity.",
        meta: ["Track: Seerah", "Cohort: Teen-friendly"],
      },
    ],
    faqs: [
      {
        question: "Is this Seerah course suitable for kids and teens?",
        answer:
          "Yes. Learners are placed into age-appropriate cohorts with pacing and activities that fit their stage.",
      },
      {
        question: "Does the course focus on lessons or only history?",
        answer:
          "Lessons are central. Historical events are taught with context so students extract guidance for character and decisions.",
      },
      {
        question: "Will this help strengthen Islamic identity?",
        answer:
          "Yes. Seerah builds love of the Prophet ﷺ, confidence, and a stronger sense of belonging through practical lessons.",
      },
      {
        question: "Do you connect Seerah with Qur'an revelation context?",
        answer:
          "Where helpful, yes—students learn links between key events and Qur'anic themes in a guided, accessible way.",
      },
      {
        question: "What should I study after Seerah?",
        answer:
          "Hadith Studies for daily Prophetic guidance and Tafsir for deeper Qur'an understanding are strong next steps.",
      },
    ],
    includes: [
      "Live online classes",
      "Timeline visuals and study notes",
      "Short quizzes and reflection activities",
      "Completion certificate",
    ],
    offer: {
      lines: ["6–10 weeks", "1 live lesson/week + reflection activity"],
      cta: "Enroll in Seerah",
      subcta: "Book Free Consultation",
    },
    images: [islamicImg("Seerah1.jpg"), islamicImg("Seerah2.jpg")],
    accent: "#1D3557",
  },
  {
    slug: "tafsir-islamic",
    title: "Tafsir (Qur'an Interpretation)",
    tagline: "Tafsir — Learn Qur'an Meaning, Themes, and Real-Life Guidance",
    seoTitles: [
      "Tafsir Classes Online | Understand the Qur'an | Nibras Network Academy",
      "Structured Tafsir Course — Context, Reflection & Application",
    ],
    definition:
      "Tafsir at Nibras helps students understand Qur'anic messages with context and practical takeaways. Lessons focus on meanings, themes, and reflection skills, supporting consistent Qur'an engagement for families, youth, and international learners.",
    teacher: {
      profile: [
        "Teacher-led explanation with structured notes",
        "Theme-guided learning with selected verse study",
        "Focus on application with adab of Qur'an study",
        "Light reflection prompts with teacher feedback",
      ],
      whyQuote:
        "Theme-guided learning builds understanding systematically—without overwhelm, with real-life guidance each week.",
      whyLabel: "Qur'an Understanding",
    },
    philosophy: {
      quote:
        "How Tafsir works → surah themes → context and lessons → weekly application. Reflection (tadabbur) turns reading into transformation.",
      beliefs: [
        "Sources, goals, and adab of Qur'an study",
        "Identify key themes and repeated guidance",
        "Understand verses with basic context",
        "Connect Qur'an to worship, manners, and decisions",
      ],
    },
    curriculum: {
      phases: [
        {
          title: "Stage 1 — How Tafsir Works",
          items: ["Sources and goals of Tafsir", "Adab of Qur'an study", "Introduction to thematic reading"],
        },
        {
          title: "Stage 2 — Surah Themes",
          items: ["Guided surah overviews", "Key messages and repeated guidance", "Selected verse study"],
        },
        {
          title: "Stage 3 — Context & Application",
          items: ["Intro-level context (age-appropriate)", "Reflection skills (tadabbur)", "Weekly: what changes in my life this week?"],
        },
      ],
      outcome:
        "Identify key Qur'anic themes, understand verses with basic context, build reflective reading habits, and connect Qur'an to worship and daily decisions.",
    },
    methods: [
      {
        title: "Structured Tafsir Pathway",
        badge: "Qur'an Understanding",
        flow: [
          "1–2 live lessons per week",
          "Reflection prompt after each session",
          "Study notes and short checks",
          "Theme-guided learning—not verse-by-verse overwhelm",
        ],
        whyTitle: "Why it works",
        whyPoints: [
          "No Arabic required for beginner Tafsir",
          "Age-appropriate cohorts for families (10+)",
          "Pairs well with Quranic Arabic for deeper access",
        ],
      },
    ],
    techniques: [
      {
        title: "Skills gained",
        points: [
          "Thematic reading and key message identification",
          "Basic context understanding where needed",
          "Reflective habits (tadabbur) with light homework",
        ],
      },
      {
        title: "Recommended alongside",
        points: [
          "Quranic Arabic for language-based depth",
          "Aqeedah for belief-themed verses",
          "Seerah for revelation context",
        ],
      },
    ],
    audience: {
      perfectFor: [
        "Beginners and families seeking structured Qur'an understanding",
        "Youth and adults (10+; separate cohorts)",
        "International learners without Arabic background",
        "Students wanting reflection skills—not memorization alone",
      ],
      prerequisites: ["No Arabic required for beginner level"],
      scholarNote: "For deeper language-based understanding, link to Quranic Arabic in Arabic Language programs.",
    },
    progression: [
      "Beginner → Intermediate (6–12 weeks)",
      "Deeper track: Quranic Arabic + Advanced Tafsir modules",
      "Pairs with Aqeedah and Fiqh for belief and worship connections",
    ],
    stories: [
      {
        name: "Family Reflection",
        quote: "Weekly reflection prompts turned Qur'an reading into consistent, meaningful family practice.",
        meta: ["Track: Tafsir", "Focus: Application"],
      },
    ],
    faqs: [
      {
        question: "Do I need Arabic to join Tafsir?",
        answer:
          "No. Beginners can study Tafsir in English; Arabic becomes more important for deeper, language-based analysis.",
      },
      {
        question: "Is this Tafsir suitable for beginners and families?",
        answer:
          "Yes. The course is structured, teacher-led, and delivered in age-appropriate cohorts.",
      },
      {
        question: "Do you focus on themes or verse-by-verse?",
        answer:
          "Theme-guided learning with selected verse study—designed to build understanding systematically without overwhelm.",
      },
      {
        question: "Will there be homework or reflection tasks?",
        answer:
          "Yes—light reflection prompts help students apply Qur'an lessons consistently in daily life.",
      },
      {
        question: "What should I study alongside Tafsir?",
        answer:
          "Quranic Arabic supports deeper language access, while Aqeedah and Fiqh help connect meanings to belief and worship practice.",
      },
    ],
    includes: [
      "Live online classes",
      "Structured study notes",
      "Short checks and reflection prompts",
      "Completion certificate",
    ],
    offer: {
      lines: ["6–12 weeks", "1–2 live lessons/week + reflection prompts"],
      cta: "Join Tafsir Classes",
      subcta: "Take Placement Assessment",
    },
    images: [islamicImg("Tafsir11.jpg")],
    accent: "#6B4423",
  },
];

const enBySlug = new Map(ISLAMIC_PROGRAM_COURSES_EN.map((course) => [course.slug, course]));
const arBySlug = new Map(ISLAMIC_COURSES_AR.map((course) => [course.slug, course]));

export const ISLAMIC_PROGRAM_SLUGS = ISLAMIC_PROGRAM_COURSES_EN.map((course) => course.slug);

export function getIslamicCourse(slug: string, locale: Locale = "en"): QuranCourse | undefined {
  const map = locale === "ar" ? arBySlug : enBySlug;
  return map.get(slug);
}
