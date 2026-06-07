import type { Locale } from "@/lib/i18n/types";

export type CourseLevelSlug = "beginner" | "intermediate" | "advanced" | "expert";

export type ProgramCategory = {
  name: string;
  items: string[];
};

export type CourseLevelContent = {
  slug: CourseLevelSlug;
  levelNumber: number;
  icon: "Sprout" | "TrendingUp" | "Trees" | "Trophy";
  accent: string;
  accentLight: string;
  meta: { title: string; description: string };
  badge: string;
  progressLabel: string;
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  cardDesc: string;
  cardOutcomes: [string, string, string];
  whoIsFor: { title: string; items: string[] };
  entryRequirements: { title: string; text: string };
  programs: { title: string; categories: ProgramCategory[] };
  studentProfile?: { title: string; quote: string; description: string };
  skillsAlreadyHave?: { title: string; items: string[] };
  outcomes: { title: string; items: string[] };
  progressIndicators?: { title: string; items: string[] };
  skillBenchmarks?: { title: string; items: string[] };
  studyExpectations?: { title: string; text: string };
  duration?: { title: string; text: string };
  commitment?: { title: string; text: string };
  certification?: { title: string; items: string[] };
  leadership?: { title: string; items: string[] };
  cta: string;
  otherLevelsTitle: string;
};

const LEVEL_SLUGS: CourseLevelSlug[] = ["beginner", "intermediate", "advanced", "expert"];

const en: Record<CourseLevelSlug, CourseLevelContent> = {
  beginner: {
    slug: "beginner",
    levelNumber: 1,
    icon: "Sprout",
    accent: "#1c7a45",
    accentLight: "#e8f5ee",
    meta: {
      title: "Beginner Level | Nibras Network",
      description:
        "Start your Islamic learning journey from zero — structured Quran, Arabic, and Islamic basics for new learners.",
    },
    badge: "Foundation Level",
    progressLabel: "Level 1 of 4 — Building Foundations",
    hero: {
      title: "Beginner",
      subtitle: "Start with Confidence",
      tagline: "For students starting from zero or building their first strong foundation.",
    },
    cardDesc: "Start your journey from scratch",
    cardOutcomes: [
      "Recognize Arabic letters",
      "Read basic Quran words",
      "Perform prayer correctly",
    ],
    whoIsFor: {
      title: "Who This Level Is For",
      items: [
        "Students who cannot read Quran yet",
        "Non-Arabic speakers",
        "New Muslims",
        "Children starting Islamic learning",
        "Adults restarting from basics",
      ],
    },
    entryRequirements: {
      title: "Entry Requirements",
      text: "No prior knowledge required.",
    },
    programs: {
      title: "Suitable Programs",
      categories: [
        {
          name: "Quran Programs",
          items: ["Noorani Qaida", "Quran Foundations", "Beginner Tilawah"],
        },
        {
          name: "Arabic Language",
          items: ["Arabic Letters & Sounds", "Arabic for Beginners"],
        },
        {
          name: "Islamic Studies",
          items: ["Islamic Basics", "Aqeedah Foundations", "Daily Practices"],
        },
      ],
    },
    studentProfile: {
      title: "Typical Student Profile",
      quote: "I want to start correctly.",
      description: "Needs guidance, patience, and structured learning.",
    },
    outcomes: {
      title: "Expected Learning Outcomes",
      items: [
        "Recognize Arabic letters",
        "Read basic Quran words",
        "Perform prayer correctly",
        "Understand Islamic basics",
      ],
    },
    studyExpectations: {
      title: "Recommended Weekly Study",
      text: "2 lessons per week · Short daily practice (10–15 minutes)",
    },
    duration: {
      title: "Suggested Duration",
      text: "3–6 months (foundation stage)",
    },
    cta: "Start My Learning Journey",
    otherLevelsTitle: "Explore Other Levels",
  },
  intermediate: {
    slug: "intermediate",
    levelNumber: 2,
    icon: "TrendingUp",
    accent: "#2d8f5a",
    accentLight: "#edf7f1",
    meta: {
      title: "Intermediate Level | Nibras Network",
      description:
        "Build Quran fluency and confidence — for students who can read and want stronger skills and consistency.",
    },
    badge: "Fluency Level",
    progressLabel: "Level 2 of 4 — Growing Fluency",
    hero: {
      title: "Intermediate",
      subtitle: "Build Fluency & Confidence",
      tagline: "For students who can read and want stronger skills and consistency.",
    },
    cardDesc: "Build on your existing foundation",
    cardOutcomes: [
      "Smooth Quran reading",
      "Apply basic Tajweed rules",
      "Memorize with revision",
    ],
    whoIsFor: {
      title: "Student Suitability",
      items: [
        "Can read Quran slowly",
        "Know basic Arabic letters",
        "Completed beginner level",
      ],
    },
    entryRequirements: {
      title: "Required Prior Knowledge",
      text: "Basic reading ability · Basic prayer knowledge",
    },
    programs: {
      title: "Recommended Programs",
      categories: [
        {
          name: "Quran Programs",
          items: ["Quran Recitation (Tilawah)", "Tajweed for Beginners", "Kids Hifz (short surahs)"],
        },
        {
          name: "Arabic Language",
          items: ["Reading & Writing Skills", "Conversational Arabic"],
        },
        {
          name: "Islamic Studies",
          items: ["Seerah", "Hadith Foundations", "Structured Fiqh"],
        },
      ],
    },
    skillsAlreadyHave: {
      title: "Skills Students Should Already Have",
      items: [
        "Basic reading fluency",
        "Short surah memorization",
        "Familiarity with daily Islamic practices",
      ],
    },
    outcomes: {
      title: "Expected Outcomes",
      items: [
        "Smooth Quran reading",
        "Apply basic Tajweed rules",
        "Memorize with revision",
        "Participate confidently",
      ],
    },
    progressIndicators: {
      title: "Progress Indicators",
      items: [
        "Fewer reading mistakes",
        "Stable memorization retention",
        "Increased classroom confidence",
      ],
    },
    studyExpectations: {
      title: "Study Expectations",
      text: "2–3 lessons per week · Consistent homework review",
    },
    cta: "Strengthen My Skills",
    otherLevelsTitle: "Explore Other Levels",
  },
  advanced: {
    slug: "advanced",
    levelNumber: 3,
    icon: "Trees",
    accent: "#1c3a2e",
    accentLight: "#e8ede9",
    meta: {
      title: "Advanced Level | Nibras Network",
      description:
        "Specialize and deepen your knowledge — mastery tracks in Tajweed, Hifz, Tafsir, and Islamic sciences.",
    },
    badge: "Advanced Level",
    progressLabel: "Level 3 of 4 — Mastery Development",
    hero: {
      title: "Advanced",
      subtitle: "Specialize & Deepen Knowledge",
      tagline: "For students seeking mastery, specialization, and structured progression.",
    },
    cardDesc: "Deepen and refine your knowledge",
    cardOutcomes: [
      "Strong Tajweed application",
      "Long-term memorization consistency",
      "Understanding Quran themes",
    ],
    whoIsFor: {
      title: "Student Profile",
      items: [
        "Reads fluently",
        "Applies Tajweed rules",
        "Has memorization discipline",
        "Seeks deeper understanding",
      ],
    },
    entryRequirements: {
      title: "Entry Expectations",
      text: "Completed intermediate level · Strong consistency and commitment",
    },
    programs: {
      title: "Recommended Tracks",
      categories: [
        {
          name: "Quran",
          items: ["Advanced Tajweed", "Structured Hifz", "Tafsir"],
        },
        {
          name: "Arabic",
          items: ["Quranic Arabic", "Classical Arabic"],
        },
        {
          name: "Islamic Studies",
          items: ["Advanced Fiqh", "Hadith Studies", "Thematic Tafsir"],
        },
      ],
    },
    outcomes: {
      title: "Learning Goals",
      items: [
        "Strong Tajweed application",
        "Long-term memorization consistency",
        "Understanding Quran themes",
        "Independent study skills",
      ],
    },
    skillBenchmarks: {
      title: "Skill Benchmarks",
      items: [
        "Smooth recitation with rules applied",
        "Stable memorization with revision",
        "Ability to explain key Islamic concepts",
      ],
    },
    commitment: {
      title: "Commitment Level",
      text: "3–4 sessions weekly recommended",
    },
    cta: "Enter Advanced Track",
    otherLevelsTitle: "Explore Other Levels",
  },
  expert: {
    slug: "expert",
    levelNumber: 4,
    icon: "Trophy",
    accent: "#b8954a",
    accentLight: "#faf5eb",
    meta: {
      title: "Expert Level | Nibras Network",
      description:
        "Scholarly and professional pathways — Ijazah, teacher certification, and advanced Islamic sciences.",
    },
    badge: "Expert Level",
    progressLabel: "Level 4 of 4 — Scholarly Excellence",
    hero: {
      title: "Expert",
      subtitle: "Scholarly & Professional Pathways",
      tagline: "For learners pursuing certification, Ijazah, or teaching readiness.",
    },
    cardDesc: "Master-level & certification tracks",
    cardOutcomes: [
      "Precision in recitation",
      "Deep understanding of Quran and Islamic sciences",
      "Teaching readiness",
    ],
    whoIsFor: {
      title: "Advanced Learner Profile",
      items: [
        "Strong Tajweed mastery",
        "Consistent memorization",
        "Advanced Islamic knowledge",
        "Long-term dedication",
      ],
    },
    entryRequirements: {
      title: "Entry Requirements",
      text: "Teacher assessment · Demonstrated advanced proficiency",
    },
    programs: {
      title: "Suitable Pathways",
      categories: [
        {
          name: "Pathways",
          items: ["Ijazah Pathway", "Teacher Certification", "Advanced Tafsir", "Qira'at Track"],
        },
      ],
    },
    outcomes: {
      title: "Expected Competencies",
      items: [
        "Precision in recitation",
        "Deep understanding of Quran and Islamic sciences",
        "Teaching readiness",
        "Leadership capability",
      ],
    },
    certification: {
      title: "Certification Opportunities",
      items: [
        "Ijazah preparation",
        "Teaching certification",
        "Advanced completion certificates",
      ],
    },
    leadership: {
      title: "Leadership Opportunities",
      items: [
        "Teaching assistant roles",
        "Peer mentoring",
        "Academic leadership development",
      ],
    },
    commitment: {
      title: "Recommended Commitment",
      text: "High discipline · 3–5 sessions weekly",
    },
    cta: "Apply for Expert Path",
    otherLevelsTitle: "Explore Other Levels",
  },
};

const ar: Record<CourseLevelSlug, CourseLevelContent> = {
  beginner: {
    slug: "beginner",
    levelNumber: 1,
    icon: "Sprout",
    accent: "#1c7a45",
    accentLight: "#e8f5ee",
    meta: {
      title: "المستوى المبتدئ | شبكة نبراس",
      description:
        "ابدأ رحلة التعلّم الإسلامي من الصفر — برامج منظّمة للقرآن والعربية والأساسيات الإسلامية للمتعلّمين الجدد.",
    },
    badge: "مستوى الأساس",
    progressLabel: "المستوى 1 من 4 — بناء الأساس",
    hero: {
      title: "مبتدئ",
      subtitle: "ابدأ بثقة",
      tagline: "للطلاب الذين يبدأون من الصفر أو يبنون أول أساس قوي.",
    },
    cardDesc: "ابدأ رحلتك من الصفر",
    cardOutcomes: [
      "التعرّف على الحروف العربية",
      "قراءة كلمات قرآنية أساسية",
      "أداء الصلاة بشكل صحيح",
    ],
    whoIsFor: {
      title: "لمن هذا المستوى",
      items: [
        "طلاب لا يستطيعون قراءة القرآن بعد",
        "غير الناطقين بالعربية",
        "المسلمون الجدد",
        "الأطفال الذين يبدأون التعلّم الإسلامي",
        "البالغون الذين يعيدون البدء من الأساس",
      ],
    },
    entryRequirements: {
      title: "متطلبات الدخول",
      text: "لا يلزم أي معرفة مسبقة.",
    },
    programs: {
      title: "البرامج المناسبة",
      categories: [
        {
          name: "برامج القرآن",
          items: ["القاعدة النورانية", "أساسيات القرآن", "تلاوة للمبتدئين"],
        },
        {
          name: "اللغة العربية",
          items: ["حروف وأصوات العربية", "العربية للمبتدئين"],
        },
        {
          name: "الدراسات الإسلامية",
          items: ["أساسيات الإسلام", "أساسيات العقيدة", "الممارسات اليومية"],
        },
      ],
    },
    studentProfile: {
      title: "ملف الطالب النموذجي",
      quote: "أريد أن أبدأ بشكل صحيح.",
      description: "يحتاج إلى إرشاد وصبر وتعلّم منظّم.",
    },
    outcomes: {
      title: "نتائج التعلّم المتوقعة",
      items: [
        "التعرّف على الحروف العربية",
        "قراءة كلمات قرآنية أساسية",
        "أداء الصلاة بشكل صحيح",
        "فهم أساسيات الإسلام",
      ],
    },
    studyExpectations: {
      title: "الدراسة الأسبوعية الموصى بها",
      text: "درسان أسبوعياً · ممارسة يومية قصيرة (10–15 دقيقة)",
    },
    duration: {
      title: "المدة المقترحة",
      text: "3–6 أشهر (مرحلة الأساس)",
    },
    cta: "ابدأ رحلة تعلّمي",
    otherLevelsTitle: "استكشف المستويات الأخرى",
  },
  intermediate: {
    slug: "intermediate",
    levelNumber: 2,
    icon: "TrendingUp",
    accent: "#2d8f5a",
    accentLight: "#edf7f1",
    meta: {
      title: "المستوى المتوسط | شبكة نبراس",
      description:
        "ابنِ طلاقة القرآن وثقتك — للطلاب الذين يقرؤون ويريدون مهارات أقوى واستمرارية.",
    },
    badge: "مستوى الطلاقة",
    progressLabel: "المستوى 2 من 4 — نمو الطلاقة",
    hero: {
      title: "متوسّط",
      subtitle: "ابنِ الطلاقة والثقة",
      tagline: "للطلاب الذين يقرؤون ويريدون مهارات أقوى واستمرارية.",
    },
    cardDesc: "ابنِ على أساسك الحالي",
    cardOutcomes: [
      "قراءة قرآنية سلسة",
      "تطبيق قواعد التجويد الأساسية",
      "الحفظ مع المراجعة",
    ],
    whoIsFor: {
      title: "ملاءمة الطالب",
      items: [
        "يقرأ القرآن ببطء",
        "يعرف الحروف العربية الأساسية",
        "أكمل المستوى المبتدئ",
      ],
    },
    entryRequirements: {
      title: "المعرفة المسبقة المطلوبة",
      text: "قدرة قراءة أساسية · معرفة أساسية بالصلاة",
    },
    programs: {
      title: "البرامج الموصى بها",
      categories: [
        {
          name: "برامج القرآن",
          items: ["تلاوة القرآن", "التجويد للمبتدئين", "حفظ الأطفال (سور قصيرة)"],
        },
        {
          name: "اللغة العربية",
          items: ["مهارات القراءة والكتابة", "العربية المحادثة"],
        },
        {
          name: "الدراسات الإسلامية",
          items: ["السيرة", "أساسيات الحديث", "فقه منظّم"],
        },
      ],
    },
    skillsAlreadyHave: {
      title: "المهارات التي يجب أن يمتلكها الطالب",
      items: [
        "طلاقة قراءة أساسية",
        "حفظ سور قصيرة",
        "إلمام بالممارسات الإسلامية اليومية",
      ],
    },
    outcomes: {
      title: "النتائج المتوقعة",
      items: [
        "قراءة قرآنية سلسة",
        "تطبيق قواعد التجويد الأساسية",
        "الحفظ مع المراجعة",
        "المشاركة بثقة",
      ],
    },
    progressIndicators: {
      title: "مؤشرات التقدّم",
      items: [
        "أخطاء قراءة أقل",
        "استقرار في الحفظ والمراجعة",
        "ثقة أكبر في الصف",
      ],
    },
    studyExpectations: {
      title: "توقعات الدراسة",
      text: "2–3 دروس أسبوعياً · مراجعة واجبات منتظمة",
    },
    cta: "قوِّ مهاراتي",
    otherLevelsTitle: "استكشف المستويات الأخرى",
  },
  advanced: {
    slug: "advanced",
    levelNumber: 3,
    icon: "Trees",
    accent: "#1c3a2e",
    accentLight: "#e8ede9",
    meta: {
      title: "المستوى المتقدّم | شبكة نبراس",
      description:
        "تخصّص وعمّق معرفتك — مسارات إتقان في التجويد والحفظ والتفسير والعلوم الإسلامية.",
    },
    badge: "المستوى المتقدّم",
    progressLabel: "المستوى 3 من 4 — تطوير الإتقان",
    hero: {
      title: "متقدّم",
      subtitle: "تخصّص وعمّق المعرفة",
      tagline: "للطلاب الذين يسعون للإتقان والتخصّص والتقدّم المنظّم.",
    },
    cardDesc: "عمّق معرفتك وأصلح تلاوتك",
    cardOutcomes: [
      "تطبيق قوي للتجويد",
      "استمرارية حفظ طويلة الأمد",
      "فهم موضوعات القرآن",
    ],
    whoIsFor: {
      title: "ملف الطالب",
      items: [
        "يقرأ بطلاقة",
        "يطبّق قواعد التجويد",
        "لديه انضباط في الحفظ",
        "يسعى لفهم أعمق",
      ],
    },
    entryRequirements: {
      title: "توقعات الدخول",
      text: "إكمال المستوى المتوسط · التزام واستمرارية قوية",
    },
    programs: {
      title: "المسارات الموصى بها",
      categories: [
        {
          name: "القرآن",
          items: ["التجويد المتقدّم", "حفظ منظّم", "التفسير"],
        },
        {
          name: "العربية",
          items: ["العربية القرآنية", "العربية الفصحى التراثية"],
        },
        {
          name: "الدراسات الإسلامية",
          items: ["فقه متقدّم", "علوم الحديث", "تفسير موضوعي"],
        },
      ],
    },
    outcomes: {
      title: "أهداف التعلّم",
      items: [
        "تطبيق قوي للتجويد",
        "استمرارية حفظ طويلة الأمد",
        "فهم موضوعات القرآن",
        "مهارات دراسة مستقلة",
      ],
    },
    skillBenchmarks: {
      title: "معايير المهارة",
      items: [
        "تلاوة سلسة مع تطبيق القواعد",
        "حفظ مستقر مع مراجعة",
        "القدرة على شرح المفاهيم الإسلامية الأساسية",
      ],
    },
    commitment: {
      title: "مستوى الالتزام",
      text: "3–4 جلسات أسبوعياً موصى بها",
    },
    cta: "ادخل المسار المتقدّم",
    otherLevelsTitle: "استكشف المستويات الأخرى",
  },
  expert: {
    slug: "expert",
    levelNumber: 4,
    icon: "Trophy",
    accent: "#b8954a",
    accentLight: "#faf5eb",
    meta: {
      title: "المستوى الخبير | شبكة نبراس",
      description:
        "مسارات علمية ومهنية — الإجازة، شهادة التدريس، والعلوم الإسلامية المتقدّمة.",
    },
    badge: "المستوى الخبير",
    progressLabel: "المستوى 4 من 4 — التميّز العلمي",
    hero: {
      title: "خبير",
      subtitle: "مسارات علمية ومهنية",
      tagline: "للدارسين الذين يسعون للشهادات أو الإجازة أو الاستعداد للتدريس.",
    },
    cardDesc: "مسارات الإتقان والشهادات",
    cardOutcomes: [
      "دقة في التلاوة",
      "فهم عميق للقرآن والعلوم الإسلامية",
      "الاستعداد للتدريس",
    ],
    whoIsFor: {
      title: "ملف المتعلّم المتقدّم",
      items: [
        "إتقان قوي للتجويد",
        "حفظ مستمر",
        "معرفة إسلامية متقدّمة",
        "التزام طويل الأمد",
      ],
    },
    entryRequirements: {
      title: "متطلبات الدخول",
      text: "تقييم من المعلّم · إظهار كفاءة متقدّمة",
    },
    programs: {
      title: "المسارات المناسبة",
      categories: [
        {
          name: "المسارات",
          items: ["مسار الإجازة", "شهادة التدريس", "تفسير متقدّم", "مسار القراءات"],
        },
      ],
    },
    outcomes: {
      title: "الكفاءات المتوقعة",
      items: [
        "دقة في التلاوة",
        "فهم عميق للقرآن والعلوم الإسلامية",
        "الاستعداد للتدريس",
        "قدرة قيادية",
      ],
    },
    certification: {
      title: "فرص الشهادات",
      items: [
        "التحضير للإجازة",
        "شهادة التدريس",
        "شهادات إتمام متقدّمة",
      ],
    },
    leadership: {
      title: "فرص القيادة",
      items: [
        "أدوار مساعد تدريس",
        "إرشاد الأقران",
        "تطوير القيادة الأكاديمية",
      ],
    },
    commitment: {
      title: "الالتزام الموصى به",
      text: "انضباط عالٍ · 3–5 جلسات أسبوعياً",
    },
    cta: "قدّم لمسار الخبراء",
    otherLevelsTitle: "استكشف المستويات الأخرى",
  },
};

export function isCourseLevelSlug(slug: string): slug is CourseLevelSlug {
  return LEVEL_SLUGS.includes(slug as CourseLevelSlug);
}

export function getCourseLevelContent(
  locale: Locale,
  slug: CourseLevelSlug,
): CourseLevelContent {
  const bundle = locale === "ar" ? ar : en;
  return bundle[slug];
}

export function getAllCourseLevels(locale: Locale): CourseLevelContent[] {
  const bundle = locale === "ar" ? ar : en;
  return LEVEL_SLUGS.map((slug) => bundle[slug]);
}

export function getLevelCardPreview(
  locale: Locale,
  slug: CourseLevelSlug,
): Pick<CourseLevelContent, "cardDesc" | "cardOutcomes" | "cta" | "icon" | "hero"> & {
  label: string;
  href: string;
} {
  const content = getCourseLevelContent(locale, slug);
  return {
    label: content.hero.title,
    href: `/courses/level/${slug}`,
    icon: content.icon,
    cardDesc: content.cardDesc,
    cardOutcomes: content.cardOutcomes,
    cta: content.cta,
    hero: content.hero,
  };
}
