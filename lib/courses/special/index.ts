import type { Locale } from "@/lib/i18n/types";
import type { QuranCourse } from "@/lib/courses/quran/types";
import { specialImg } from "./images";
import { SPECIAL_COURSES_AR } from "./ar";

export const SPECIAL_PROGRAM_COURSES_EN: QuranCourse[] = [
  {
    slug: "new-muslims-track",
    title: "New Muslims Track",
    tagline: "A Gentle Start for New Muslims",
    seoTitles: [
      "New Muslim Program Online | FREE First 3 Months | Nibras Network",
      "Beginner Quran & Prayer Classes for Reverts",
    ],
    definition:
      "A structured and welcoming journey for reverts and new Muslims. This program removes barriers and provides a clear foundation in Islam—step-by-step guidance in prayer, Quran reading, Arabic basics, and daily Islamic practice. The first 3 months are fully supported as part of our welcome initiative.",
    teacher: {
      profile: [
        "Patient teachers experienced with reverts and new Muslims",
        "Step-by-step prayer and worship guidance",
        "Supportive one-to-one or small-group delivery",
        "Clear communication without assumptions of prior knowledge",
      ],
      whyQuote:
        "We start from the basics so you can build faith confidence—not confusion.",
      whyLabel: "Free Start",
    },
    philosophy: {
      quote:
        "A gentle, structured path that builds prayer confidence, basic Quran reading, and daily Islamic habits.",
      beliefs: [
        "No prior knowledge required",
        "Welcoming environment for reverts",
        "Practical daily Islamic practice",
        "First 3 months fully supported (welcome initiative)",
      ],
    },
    curriculum: {
      phases: [
        { title: "Stage 1 — Prayer Fundamentals", items: ["Wudu and prayer step-by-step", "Common mistakes clarified", "Building consistency"] },
        { title: "Stage 2 — Beginner Quran Reading", items: ["Arabic letters and sounds", "Basic vocalized reading", "Short surah practice"] },
        { title: "Stage 3 — Arabic & Daily Habits", items: ["Alphabet and pronunciation", "Essential duas and routines", "Confidence-building support"] },
      ],
      outcome:
        "Perform prayer confidently, read basic Quran text, understand daily Islamic practices, and develop faith confidence.",
    },
    methods: [
      {
        title: "Welcome Foundation Path",
        badge: "Free Start",
        flow: [
          "Live online (1-to-1 or small group)",
          "3–6 month foundation phase",
          "Weekly structured lessons + light practice",
          "Advisor support for next steps",
        ],
        whyTitle: "Why it works",
        whyPoints: [
          "Removes barriers for new Muslims",
          "Clear stages—not scattered topics",
          "Supportive pacing with patient teachers",
        ],
      },
    ],
    techniques: [
      { title: "Learning stages", points: ["Prayer fundamentals", "Beginner Quran reading", "Arabic alphabet", "Daily Islamic habits", "Confidence building"] },
      { title: "Free offer", points: ["First 3 months fully supported", "Welcome initiative for reverts", "No prior knowledge needed"] },
    ],
    audience: {
      perfectFor: ["Reverts and new Muslims", "Learners starting from zero", "Anyone needing gentle structured guidance"],
      prerequisites: ["None"],
    },
    progression: [
      "Foundation phase (3–6 months)",
      "Then: Noorani Qaida, Aqeedah, Fiqh, or Comprehensive Track",
    ],
    stories: [
      {
        name: "Revert Confidence",
        quote: "From uncertainty in prayer to confident worship and a clear learning plan.",
        meta: ["Track: New Muslims", "Offer: FREE first 3 months"],
      },
    ],
    faqs: [
      {
        question: "Is this really free?",
        answer: "Yes. The first 3 months are fully supported as part of our welcome initiative for new Muslims.",
      },
      {
        question: "Do I need prior knowledge?",
        answer: "No. We start from the basics—including prayer, reading, and daily practice.",
      },
      {
        question: "Is delivery one-to-one or group?",
        answer: "Live online in either one-to-one or small-group format, based on placement and preference.",
      },
      {
        question: "What happens after the free period?",
        answer: "Your advisor helps you choose the best next pathway—Quran, Arabic, or Islamic Studies—at suitable pacing.",
      },
    ],
    includes: [
      "Live online classes (1-to-1 or small group)",
      "Structured welcome curriculum",
      "First 3 months fully supported",
      "Advisor guidance for next steps",
    ],
    offer: {
      lines: ["Recommended: 3–6 month foundation", "Delivery: Live online"],
      cta: "Start My Free Journey",
      subcta: "Speak to an Advisor",
    },
    images: [specialImg.newMuslims[0]],
    bottomImage: specialImg.newMuslims[1],
    bottomImageSection: "methods",
    accent: "#0D9488",
  },
  {
    slug: "family-packages",
    title: "Family Packages",
    tagline: "Learn Together. Save Together.",
    seoTitles: [
      "Family Quran Classes Online | Save 20–30% | Nibras Network",
      "Online Islamic Learning for Families",
    ],
    definition:
      "Flexible family-centered plans with individual learning tracks for each member. Base rate $8 per lesson hour—with shared goals, coordinated scheduling, and meaningful savings when the whole family learns together.",
    teacher: {
      profile: [
        "Coordinated scheduling for multiple family members",
        "Individual pathways per student",
        "Parent progress visibility",
        "Dedicated family enrollment support",
      ],
      whyQuote:
        "Shared learning goals plus individual tracks—stronger motivation and real savings.",
      whyLabel: "Family Savings",
    },
    philosophy: {
      quote: "Families that learn together stay motivated together—with plans that respect each member's level.",
      beliefs: [
        "Base rate: $8 per lesson hour",
        "2 members: Save 20%",
        "3+ members: Save 25–30%",
        "Each member can study different subjects",
      ],
    },
    curriculum: {
      phases: [
        { title: "Plan Setup", items: ["Family consultation", "Individual placements", "Coordinated timetable"] },
        { title: "Active Learning", items: ["Parallel tracks per member", "Shared milestones optional", "Monthly family progress review"] },
        { title: "Long-Term Growth", items: ["Flexible renewal", "Pathway adjustments", "Continued savings on bundle"] },
      ],
      outcome: "Shared learning goals, coordinated scheduling, cost savings, and stronger family motivation.",
    },
    methods: [
      {
        title: "Family Bundle Model",
        badge: "Family Savings",
        flow: [
          "Calculate plan by family size",
          "Assign individual pathways",
          "Coordinate live schedules",
          "Track progress per member",
        ],
        whyTitle: "Why it works",
        whyPoints: [
          "Real savings at 2+ members",
          "Personalized learning—not one-size-fits-all",
          "Flexible long-term family plan",
        ],
      },
    ],
    techniques: [
      {
        title: "Pricing overview",
        points: ["$8/hour base rate", "2 members: 20% off", "3+ members: 25–30% off"],
      },
      {
        title: "Family benefits",
        points: ["Shared learning goals", "Coordinated scheduling", "Stronger motivation at home"],
      },
    ],
    audience: {
      perfectFor: [
        "Families with 2+ learners",
        "Parents enrolling multiple children",
        "Parent + child learning together",
        "Households seeking bundled savings",
      ],
      prerequisites: ["Placement per family member recommended"],
    },
    progression: ["Flexible long-term family plan", "Members may pursue Quran, Arabic, or Islamic Studies tracks"],
    stories: [
      {
        name: "Family Learning",
        quote: "Each child on their own track—one schedule, one invoice, and shared motivation at home.",
        meta: ["Savings: 20–30%", "Format: Coordinated live online"],
      },
    ],
    faqs: [
      {
        question: "Can members study different subjects?",
        answer: "Yes. Each family member has a personalized pathway—Quran, Arabic, Islamic Studies, or mixed.",
      },
      {
        question: "How is the discount calculated?",
        answer: "From the $8/hour base: 20% off for 2 members; 25–30% off for 3 or more members.",
      },
      {
        question: "Do all members need the same schedule?",
        answer: "We coordinate timetables for convenience, but each member can have their own class times.",
      },
    ],
    includes: [
      "Individual pathway per member",
      "Coordinated scheduling support",
      "Bundled pricing (20–30% savings)",
      "Family progress visibility",
    ],
    offer: {
      lines: ["Base: $8/lesson hour", "Save 20–30% with 2+ members"],
      cta: "Calculate My Family Plan",
      subcta: "Enroll My Family",
    },
    images: [...specialImg.family],
    accent: "#B45309",
  },
  {
    slug: "special-needs-support",
    title: "Special Needs Support",
    tagline: "Personalized Supportive Learning",
    seoTitles: [
      "Personalized Quran Learning | One-to-One Support | Nibras Network",
      "Special Needs Arabic & Quran Classes Online",
    ],
    definition:
      "Flexible and inclusive one-to-one learning solutions for students who benefit from extra time, flexible pacing, or individual attention—with patient teaching and clear parent communication.",
    teacher: {
      profile: [
        "Patient, supportive one-to-one instruction",
        "Individual learning plans after consultation",
        "Gentle pacing with ongoing review",
        "Clear progress updates for parents",
      ],
      whyQuote:
        "Every learner deserves a plan that fits their pace—not a classroom that rushes them.",
      whyLabel: "Personalized Support",
    },
    philosophy: {
      quote: "Inclusive learning built on consultation, individual plans, and gentle accountability.",
      beliefs: [
        "Initial consultation before enrollment",
        "Individual learning plan per student",
        "Flexible pacing and extra time",
        "Ongoing review and parent updates",
      ],
    },
    curriculum: {
      phases: [
        { title: "Consultation", items: ["Needs discussion with parent/guardian", "Learning style assessment", "Goal alignment"] },
        { title: "Individual Plan", items: ["Custom weekly structure", "Gentle pacing milestones", "Adapted materials"] },
        { title: "Ongoing Support", items: ["Regular progress reviews", "Plan adjustments as needed", "Parent communication loop"] },
      ],
      outcome: "A supportive learning experience with clear communication, patient instruction, and measurable progress.",
    },
    methods: [
      {
        title: "One-to-One Adaptive Model",
        badge: "Personalized Support",
        flow: [
          "Initial consultation",
          "Individual learning plan",
          "Gentle pacing sessions",
          "Ongoing review with parents",
        ],
        whyTitle: "Why it works",
        whyPoints: [
          "Extra time and flexibility built in",
          "Individual attention—not group pressure",
          "Parent reassurance through updates",
        ],
      },
    ],
    techniques: [
      {
        title: "Student suitability",
        points: [
          "Learners needing extra time",
          "Students requiring flexible pacing",
          "Students who benefit from individual attention",
        ],
      },
      {
        title: "Parent reassurance",
        points: ["Patient teaching", "Clear communication", "Progress updates"],
      },
    ],
    audience: {
      perfectFor: [
        "Students needing individualized pacing",
        "Learners who benefit from one-to-one attention",
        "Families seeking supportive Quran/Arabic instruction",
      ],
      prerequisites: ["Consultation required before enrollment"],
    },
    progression: ["Flexible duration based on individual plan", "Can connect to standard pathways when ready"],
    stories: [
      {
        name: "Supportive Progress",
        quote: "A custom plan and patient pacing helped our child build confidence without overwhelm.",
        meta: ["Format: 1-to-1", "Focus: Flexible pacing"],
      },
    ],
    faqs: [
      {
        question: "Do you offer group classes for special needs?",
        answer: "This track is primarily one-to-one to ensure individualized pacing and attention.",
      },
      {
        question: "Is there an initial consultation?",
        answer: "Yes. We discuss needs, goals, and pacing before creating the individual learning plan.",
      },
      {
        question: "How do parents stay informed?",
        answer: "Through clear communication and regular progress updates aligned to the learning plan.",
      },
    ],
    includes: [
      "Initial consultation",
      "Individual learning plan",
      "One-to-one live sessions",
      "Progress updates for parents",
    ],
    offer: {
      lines: ["Format: One-to-one live online", "Pacing: Individual plan"],
      cta: "Discuss My Child's Needs",
      subcta: "Book Trial Lesson",
    },
    images: [...specialImg.specialNeeds],
    accent: "#7C3AED",
  },
  {
    slug: "intensive-programs",
    title: "Intensive Programs",
    tagline: "Accelerated Learning Pathways",
    seoTitles: [
      "Intensive Quran Program Online | Accelerated Classes | Nibras Network",
      "Fast-Track Tajweed & Hifz Programs",
    ],
    definition:
      "Fast-track programs for committed learners who want accelerated Quran fluency, Tajweed mastery, or memorization—with structured homework and an accountability system.",
    teacher: {
      profile: [
        "High-frequency session scheduling",
        "Structured homework and accountability",
        "Accelerated curriculum pacing",
        "Progress benchmarks for intensive tracks",
      ],
      whyQuote:
        "Intensity with structure—faster results for learners ready to commit 3–5 sessions weekly.",
      whyLabel: "Intensive Track",
    },
    philosophy: {
      quote: "Accelerated progress requires commitment, accountability, and expert-guided intensity.",
      beliefs: [
        "3–5 sessions weekly minimum",
        "Structured homework every week",
        "Accountability check-ins",
        "Clear outcome targets (fluency, Tajweed, Hifz)",
      ],
    },
    curriculum: {
      phases: [
        { title: "Intake", items: ["Commitment assessment", "Placement and goal setting", "Schedule design (3–5/week)"] },
        { title: "Accelerated Core", items: ["High-frequency live sessions", "Daily practice plan", "Weekly accountability"] },
        { title: "Mastery Push", items: ["Targeted weak-area drills", "Mock checkpoints", "Completion evaluation"] },
      ],
      outcome: "Faster Quran fluency, Tajweed mastery, or accelerated memorization—based on your intensive track.",
    },
    methods: [
      {
        title: "Intensive Fast-Track",
        badge: "Intensive Track",
        flow: [
          "Minimum 3 sessions per week",
          "Structured homework assigned",
          "Accountability system",
          "Teacher feedback each cycle",
        ],
        whyTitle: "Why it works",
        whyPoints: [
          "Designed for committed learners",
          "Higher frequency = faster skill building",
          "Accountability prevents drop-off",
        ],
      },
    ],
    techniques: [
      {
        title: "Commitment expectations",
        points: ["3–5 sessions weekly", "Structured homework", "Accountability system"],
      },
      {
        title: "Outcomes",
        points: ["Faster Quran fluency", "Tajweed mastery", "Accelerated memorization"],
      },
    ],
    audience: {
      perfectFor: [
        "Committed learners with time to study intensively",
        "Students preparing for exams or certifications",
        "Hifz candidates wanting accelerated pacing",
      ],
      prerequisites: ["Placement assessment recommended", "Commitment to 3+ sessions/week"],
    },
    progression: ["Intensive phase → standard mastery or certification pathway"],
    stories: [
      {
        name: "Fast-Track Milestone",
        quote: "Three sessions a week and daily homework cut months off my Tajweed goals.",
        meta: ["Track: Intensive", "Schedule: 3–5/week"],
      },
    ],
    faqs: [
      {
        question: "How many sessions per week are required?",
        answer: "Minimum 3 sessions weekly; many intensive tracks use 4–5 for fastest results.",
      },
      {
        question: "Is this suitable for beginners?",
        answer: "Usually after foundation (e.g., Noorani Qaida). Placement confirms readiness for intensive pacing.",
      },
      {
        question: "What subjects can be intensive?",
        answer: "Recitation, Tajweed, Hifz, and Arabic—based on placement and goals.",
      },
    ],
    includes: [
      "3–5 live sessions per week",
      "Structured homework plan",
      "Accountability check-ins",
      "Progress benchmarks",
    ],
    offer: {
      lines: ["Minimum 3 sessions/week", "Structured homework included"],
      cta: "Start Intensive Program",
      subcta: "Speak to Academic Advisor",
    },
    images: [...specialImg.intensive],
    accent: "#DC2626",
  },
  {
    slug: "exam-preparation",
    title: "Exam & Certification Preparation",
    tagline: "Structured Assessment Preparation",
    seoTitles: [
      "Quran Certification Pathway | Exam Preparation Online | Nibras Network",
      "Ijazah & Assessment Readiness Programs",
    ],
    definition:
      "A structured roadmap for learners preparing for Quran assessments and certifications—placement, targeted revision, mock tests, and certification readiness with clear progress metrics.",
    teacher: {
      profile: [
        "Assessment-focused instruction",
        "Mock test facilitation",
        "Targeted revision planning",
        "Clear progress metrics and feedback",
      ],
      whyQuote:
        "Exam confidence comes from structured revision—not last-minute cramming.",
      whyLabel: "Exam Ready",
    },
    philosophy: {
      quote: "Placement → revision → mock tests → readiness. Every milestone is measurable.",
      beliefs: [
        "Placement assessment first",
        "Targeted revision on weak areas",
        "Mock tests before real assessment",
        "Certification readiness checklist",
      ],
    },
    curriculum: {
      phases: [
        { title: "Step 1 — Placement", items: ["Skills assessment", "Gap analysis", "Target exam alignment"] },
        { title: "Step 2 — Targeted Revision", items: ["Weak-area drills", "Accuracy correction", "Timed practice"] },
        { title: "Step 3 — Mock Tests", items: ["Simulated assessments", "Feedback sessions", "Readiness checklist"] },
        { title: "Step 4 — Certification Readiness", items: ["Final polish", "Confidence strategies", "Exam day preparation"] },
      ],
      outcome: "Improved accuracy, exam confidence, and clear progress metrics toward certification readiness.",
    },
    methods: [
      {
        title: "Exam Preparation Roadmap",
        badge: "Exam Ready",
        flow: [
          "Placement assessment",
          "Targeted revision plan",
          "Mock tests with feedback",
          "Certification readiness review",
        ],
        whyTitle: "Why it works",
        whyPoints: [
          "Focuses on what the exam actually tests",
          "Mock tests reduce anxiety",
          "Metrics show real readiness",
        ],
      },
    ],
    techniques: [
      { title: "Milestones", points: ["Improved accuracy", "Exam confidence", "Clear progress metrics"] },
      { title: "Preparation focus", points: ["Tajweed precision", "Recitation standards", "Memorization checks where applicable"] },
    ],
    audience: {
      perfectFor: [
        "Students preparing for Quran certifications",
        "Learners approaching Ijazah assessments",
        "Anyone needing structured exam revision",
      ],
      prerequisites: ["Prior study in relevant subject", "Placement assessment required"],
    },
    progression: ["Exam prep → certification attempt → advanced scholarly path if applicable"],
    stories: [
      {
        name: "Certification Ready",
        quote: "Mock tests and targeted revision turned anxiety into structured confidence.",
        meta: ["Track: Exam Prep", "Outcome: Certification readiness"],
      },
    ],
    faqs: [
      {
        question: "Which certifications do you prepare for?",
        answer: "Preparation aligns to your target assessment—Tajweed, recitation, memorization, or Ijazah pathways after placement.",
      },
      {
        question: "Do you include mock tests?",
        answer: "Yes. Mock tests are a core stage with teacher feedback before certification readiness.",
      },
      {
        question: "How long does preparation take?",
        answer: "Duration depends on placement gaps and target exam—your advisor provides an evaluation plan.",
      },
    ],
    includes: [
      "Placement assessment",
      "Targeted revision plan",
      "Mock tests with feedback",
      "Readiness evaluation",
    ],
    offer: {
      lines: ["Roadmap: Placement → Mocks → Readiness", "Metrics tracked throughout"],
      cta: "Prepare for My Assessment",
      subcta: "Request Evaluation Plan",
    },
    images: [specialImg.exam[0]],
    accent: "#2563EB",
  },
  {
    slug: "parent-guided-programs",
    title: "Parent-Guided Programs",
    tagline: "Collaborative Parent-Child Learning",
    seoTitles: [
      "Parent-Guided Quran Learning | Learn With Your Child | Nibras Network",
      "Family Quran Practice at Home",
    ],
    definition:
      "A collaborative model where parents reinforce weekly lessons, support home practice, and track progress—accelerating the child's learning through active partnership with the teacher.",
    teacher: {
      profile: [
        "Parent orientation and coaching",
        "Weekly lesson plans for home reinforcement",
        "Progress dashboards and reports",
        "Dual guidance: teacher + parent partnership",
      ],
      whyQuote:
        "When parents learn how to support practice at home, children progress faster and retain more.",
      whyLabel: "Parent Partnership",
    },
    philosophy: {
      quote: "Teacher-led lessons plus parent-led practice—the strongest combination for young learners.",
      beliefs: [
        "Parents reinforce weekly lessons",
        "Home practice is structured—not random",
        "Weekly reports and checklists",
        "Faster learning and stronger retention",
      ],
    },
    curriculum: {
      phases: [
        { title: "Orientation", items: ["Parent coaching session", "Practice checklist setup", "Goal alignment"] },
        { title: "Weekly Cycle", items: ["Live child lesson", "Parent reinforcement tasks", "Practice checklist completion"] },
        { title: "Review", items: ["Weekly progress report", "Dashboard updates", "Plan adjustments"] },
      ],
      outcome: "Faster learning, increased motivation, and stronger retention through parent partnership.",
    },
    methods: [
      {
        title: "Parent Partnership Model",
        badge: "Parent Partnership",
        flow: [
          "Child attends live lesson",
          "Parent receives reinforcement guide",
          "Home practice via checklist",
          "Weekly report and dashboard review",
        ],
        whyTitle: "Why it works",
        whyPoints: [
          "Daily practice becomes consistent",
          "Parents know exactly how to help",
          "Teacher + parent = accountability",
        ],
      },
    ],
    techniques: [
      {
        title: "Parent responsibilities",
        points: ["Reinforce weekly lessons", "Support home practice", "Track progress"],
      },
      {
        title: "Monitoring tools",
        points: ["Practice checklist", "Weekly reports", "Progress dashboard"],
      },
    ],
    audience: {
      perfectFor: [
        "Parents who want active involvement",
        "Young learners (typically kids programs)",
        "Families building home Quran routines",
      ],
      prerequisites: ["Parent commitment to weekly home support"],
    },
    progression: ["Parent-guided foundation → independent student pathway when ready"],
    stories: [
      {
        name: "Home Practice Success",
        quote: "The checklist made practice daily—and our child's recitation improved within weeks.",
        meta: ["Tool: Practice checklist", "Format: Parent partnership"],
      },
    ],
    faqs: [
      {
        question: "Do parents need to know Arabic?",
        answer: "No. We guide parents with clear reinforcement steps—the teacher leads instruction.",
      },
      {
        question: "How much time should parents spend daily?",
        answer: "Typically 10–20 minutes of guided practice between classes, using the weekly checklist.",
      },
      {
        question: "Is this only for children?",
        answer: "Primarily designed for young learners, but teen family learning can use a similar model on request.",
      },
    ],
    includes: [
      "Live child lessons",
      "Parent reinforcement guides",
      "Practice checklist",
      "Weekly reports + progress dashboard",
    ],
    offer: {
      lines: ["Parent coaching included", "Weekly home practice structure"],
      cta: "Join Parent-Guided Program",
    },
    images: [...specialImg.parentGuided],
    accent: "#059669",
    bottomImage: "/images/Special Programs/ChatGPT Image Jul 26, 2026, 02_32_09 PM.png",
    bottomImageSection: "teacher",
  },
  {
    slug: "ijazah-pathway",
    title: "Ijazah Pathway",
    tagline: "Advanced Scholarly Recitation Path",
    seoTitles: [
      "Ijazah Preparation Online | Advanced Quran Recitation | Nibras Network",
      "Scholarly Recitation Certification Pathway",
    ],
    definition:
      "A long-term disciplined pathway for advanced learners with strong Tajweed mastery and consistent memorization—precision review, full recitation verification, and certification readiness with teacher approval.",
    teacher: {
      profile: [
        "Scholarly-level recitation correction",
        "Full recitation verification sessions",
        "Advanced Tajweed and accuracy review",
        "Teacher approval required for entry",
      ],
      whyQuote:
        "Ijazah is earned through precision, discipline, and verified recitation—not shortcuts.",
      whyLabel: "Scholarly Path",
    },
    philosophy: {
      quote: "Advanced scholarly recitation requires mastery, consistency, and long-term commitment.",
      beliefs: [
        "Strong Tajweed mastery required",
        "Consistent memorization foundation",
        "Teacher approval for entry",
        "Long-term discipline and verification",
      ],
    },
    curriculum: {
      phases: [
        { title: "Phase 1 — Precision Review", items: ["Advanced correction", "Weakness elimination", "Consistency checks"] },
        { title: "Phase 2 — Full Recitation Verification", items: ["Complete recitation audits", "Chain-ready standards", "Ongoing teacher supervision"] },
        { title: "Phase 3 — Certification Readiness", items: ["Final verification", "Readiness assessment", "Ijazah preparation guidance"] },
      ],
      outcome: "Scholarly-level recitation precision and certification readiness under qualified supervision.",
    },
    methods: [
      {
        title: "Scholarly Verification Track",
        badge: "Scholarly Path",
        flow: [
          "Entry assessment + teacher approval",
          "Precision review cycles",
          "Full recitation verification",
          "Certification readiness",
        ],
        whyTitle: "Why it works",
        whyPoints: [
          "Only for students with proven mastery",
          "Structured verification—not self-paced guessing",
          "Long-term discipline built in",
        ],
      },
    ],
    techniques: [
      { title: "Entry requirements", points: ["Strong Tajweed mastery", "Consistent memorization", "Teacher approval"] },
      { title: "Learning phases", points: ["Precision review", "Full recitation verification", "Advanced correction", "Certification readiness"] },
    ],
    audience: {
      perfectFor: [
        "Advanced reciters pursuing Ijazah",
        "Students with Tajweed mastery",
        "Dedicated long-term learners",
      ],
      prerequisites: ["Strong Tajweed", "Consistent Hifz/recitation", "Teacher approval", "Placement required"],
      scholarNote: "Long-term discipline required. Not a beginner pathway.",
    },
    progression: ["Ijazah pathway → teaching authorization or advanced specialization"],
    stories: [
      {
        name: "Scholarly Milestone",
        quote: "Precision review and full verification prepared me for certification with confidence.",
        meta: ["Track: Ijazah", "Requirement: Teacher approval"],
      },
    ],
    faqs: [
      {
        question: "Who can apply for the Ijazah pathway?",
        answer: "Learners with strong Tajweed, consistent memorization/recitation, and teacher approval after assessment.",
      },
      {
        question: "How long does the pathway take?",
        answer: "It varies by student readiness—this is a long-term disciplined track, not a fixed short course.",
      },
      {
        question: "Is Tajweed mastery mandatory?",
        answer: "Yes. Ijazah preparation requires advanced Tajweed accuracy before entry.",
      },
    ],
    includes: [
      "Advanced correction sessions",
      "Recitation verification",
      "Teacher supervision",
      "Certification readiness guidance",
    ],
    offer: {
      lines: ["Entry: Assessment + teacher approval", "Format: Long-term scholarly track"],
      cta: "Apply for Ijazah Track",
    },
    images: [...specialImg.ijazah],
    accent: "#92400E",
  },
  {
    slug: "teacher-certification",
    title: "Teacher Certification",
    tagline: "Become a Certified Quran & Arabic Teacher",
    seoTitles: [
      "Quran Teacher Training Online | Arabic Teacher Certification | Nibras Network",
      "Certified Educator Pathway",
    ],
    definition:
      "Professional development for aspiring Quran and Arabic teachers—teaching methodology, classroom management, student assessment, and engagement strategies leading to certification.",
    teacher: {
      profile: [
        "Teacher trainers with classroom experience",
        "Supervised teaching practice",
        "Assessment and feedback on instruction",
        "Professional certification pathway",
      ],
      whyQuote:
        "Great teachers are trained—not just knowledgeable. Methodology and practice matter.",
      whyLabel: "Certified Educator",
    },
    philosophy: {
      quote: "Coursework → supervised teaching → final evaluation. Teaching readiness is demonstrated, not assumed.",
      beliefs: [
        "Teaching methodology core",
        "Classroom management skills",
        "Student assessment training",
        "Engagement strategies for online and live",
      ],
    },
    curriculum: {
      phases: [
        { title: "Coursework", items: ["Teaching methodology", "Lesson planning", "Assessment design", "Engagement strategies"] },
        { title: "Supervised Teaching", items: ["Practice sessions", "Mentor feedback", "Classroom management drills"] },
        { title: "Final Evaluation", items: ["Teaching demonstration", "Professional qualification review", "Certification decision"] },
      ],
      outcome: "Teaching readiness, professional qualification, and career development as a certified educator.",
    },
    methods: [
      {
        title: "Certification Path",
        badge: "Certified Educator",
        flow: [
          "Coursework modules",
          "Supervised teaching practice",
          "Final evaluation",
          "Certification awarded",
        ],
        whyTitle: "Why it works",
        whyPoints: [
          "Balances theory and practice",
          "Supervised teaching builds real skill",
          "Recognized professional pathway",
        ],
      },
    ],
    techniques: [
      {
        title: "Skills developed",
        points: ["Teaching methodology", "Classroom management", "Student assessment", "Engagement strategies"],
      },
      {
        title: "Outcomes",
        points: ["Teaching readiness", "Professional qualification", "Career development"],
      },
    ],
    audience: {
      perfectFor: [
        "Aspiring Quran teachers",
        "Arabic instructors seeking certification",
        "Advanced students moving to teaching",
      ],
      prerequisites: ["Strong subject mastery", "Placement/interview recommended"],
    },
    progression: ["Certification → supervised teaching roles → advanced educator development"],
    stories: [
      {
        name: "New Educator",
        quote: "Supervised teaching practice turned my recitation skill into real classroom ability.",
        meta: ["Path: Coursework → Practice → Certification"],
      },
    ],
    faqs: [
      {
        question: "Do I need to master Quran before joining?",
        answer: "Strong subject mastery is required—you should demonstrate recitation/Arabic competence before teacher training.",
      },
      {
        question: "Is supervised teaching included?",
        answer: "Yes. Supervised practice is a core stage before final evaluation.",
      },
      {
        question: "What certification do I receive?",
        answer: "A professional teaching qualification upon successful coursework, supervised teaching, and final evaluation.",
      },
    ],
    includes: [
      "Coursework modules",
      "Supervised teaching sessions",
      "Final evaluation",
      "Professional certification",
    ],
    offer: {
      lines: ["Path: Coursework → Supervised teaching → Evaluation"],
      cta: "Apply for Teacher Program",
    },
    images: [...specialImg.teacher],
    accent: "#4F46E5",
  },
  {
    slug: "corporate-training",
    title: "Corporate Training",
    tagline: "Institutional & Corporate Educational Partnerships",
    seoTitles: [
      "Corporate Arabic & Islamic Training | Institutional Programs | Nibras Network",
      "Staff Quran & Arabic Education for Organizations",
    ],
    definition:
      "Educational partnerships for organizations—staff Islamic education, Arabic training, customized curriculum, and scalable delivery through live online, group cohorts, or hybrid models.",
    teacher: {
      profile: [
        "Professional instructors for institutional cohorts",
        "Customized curriculum design",
        "Flexible scheduling for organizations",
        "Scalable live and hybrid delivery",
      ],
      whyQuote:
        "Organizations need structured plans, professional delivery, and flexibility—we build all three.",
      whyLabel: "Institutional Partnership",
    },
    philosophy: {
      quote: "Structured training plans, professional instructors, and delivery that scales with your organization.",
      beliefs: [
        "Staff Islamic education programs",
        "Arabic training for workplaces",
        "Customized curriculum options",
        "Long-term institutional partnerships",
      ],
    },
    curriculum: {
      phases: [
        { title: "Discovery", items: ["Needs assessment", "Goal alignment", "Proposal design"] },
        { title: "Program Launch", items: ["Custom curriculum", "Cohort scheduling", "Instructor assignment"] },
        { title: "Ongoing Partnership", items: ["Progress reporting", "Scale adjustments", "Renewal planning"] },
      ],
      outcome: "Structured organizational training with professional instruction and flexible, scalable delivery.",
    },
    methods: [
      {
        title: "Institutional Partnership Model",
        badge: "Institutional Partnership",
        flow: [
          "Consultation and proposal",
          "Custom curriculum build",
          "Cohort delivery (live/hybrid)",
          "Reporting and renewal",
        ],
        whyTitle: "Why it works",
        whyPoints: [
          "Built for organizations—not individual retail pacing",
          "Flexible formats and scheduling",
          "Professional scalable delivery",
        ],
      },
    ],
    techniques: [
      {
        title: "Partnership models",
        points: ["Staff Islamic education", "Arabic training programs", "Customized curriculum", "Long-term partnerships"],
      },
      {
        title: "Delivery formats",
        points: ["Live online", "Group cohorts", "Hybrid models"],
      },
    ],
    audience: {
      perfectFor: [
        "Corporations and institutions",
        "Schools and community organizations",
        "HR/L&D teams seeking Arabic or Islamic training",
      ],
      prerequisites: ["Consultation required for custom proposal"],
    },
    progression: ["Pilot cohort → expanded partnership → long-term institutional plan"],
    stories: [
      {
        name: "Organizational Rollout",
        quote: "A customized cohort plan let our staff learn Arabic on work-friendly schedules.",
        meta: ["Format: Group cohorts", "Model: Institutional"],
      },
    ],
    faqs: [
      {
        question: "Can you customize curriculum for our organization?",
        answer: "Yes. Programs are tailored to your goals—Islamic education, Arabic, or combined tracks.",
      },
      {
        question: "What delivery formats are available?",
        answer: "Live online, group cohorts, and hybrid models—based on your team's needs.",
      },
      {
        question: "How do we get a proposal?",
        answer: "Request a corporate proposal and our program director will schedule a consultation.",
      },
    ],
    includes: [
      "Needs assessment and proposal",
      "Customized curriculum",
      "Professional instructors",
      "Flexible cohort scheduling",
      "Progress reporting",
    ],
    offer: {
      lines: ["Formats: Live · Cohorts · Hybrid", "Scalable institutional delivery"],
      cta: "Request Corporate Proposal",
      subcta: "Speak to Program Director",
    },
    images: [...specialImg.corporate],
    accent: "#1E3A5F",
  },
];

const enBySlug = new Map(SPECIAL_PROGRAM_COURSES_EN.map((course) => [course.slug, course]));
const arBySlug = new Map(SPECIAL_COURSES_AR.map((course) => [course.slug, course]));

export const SPECIAL_PROGRAM_SLUGS = SPECIAL_PROGRAM_COURSES_EN.map((course) => course.slug);

export function getSpecialCourse(slug: string, locale: Locale = "en"): QuranCourse | undefined {
  const map = locale === "ar" ? arBySlug : enBySlug;
  return map.get(slug);
}
