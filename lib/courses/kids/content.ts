import type { Locale } from "@/lib/i18n/types";

export type KidsTabId =
  | "by-age"
  | "quran"
  | "arabic"
  | "islamic"
  | "goals"
  | "parent";

export type KidsListSection = { title: string; items: string[] };

export type KidsAgeGroup = {
  id: string;
  emoji: string;
  ageLabel: string;
  headline: string;
  oneLine: string;
  sections: KidsListSection[];
  cta: string;
  accent: string;
  accentLight: string;
};

export type KidsProgramCard = {
  id: string;
  emoji: string;
  title: string;
  whatChildrenLearn?: string[];
  parentBenefit?: string;
  expectedOutcome?: string[];
  outcome?: string[];
  difficulty?: string;
  funMethods?: string;
  body?: string;
  outcomes?: string[];
  progression?: string;
};

export type KidsGoalRow = {
  goal: string;
  pathway: string;
  timeline: string;
  courses: string;
};

export type KidsParentFeature = {
  emoji: string;
  title: string;
  items: string[];
};

export type KidsProgramsBundle = {
  meta: { title: string; description: string };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  tabs: { id: KidsTabId; label: string; icon: string }[];
  whyParents: { title: string; bullets: string[] };
  byAge: { intro: string; groups: KidsAgeGroup[] };
  quran: { intro: string; programs: KidsProgramCard[] };
  arabic: {
    intro: string;
    programs: KidsProgramCard[];
    progressionLabel: string;
    progression: string;
  };
  islamic: { intro: string; programs: KidsProgramCard[] };
  goals: {
    intro: string;
    tableHeaders: [string, string, string, string];
    rows: KidsGoalRow[];
    cta: string;
  };
  parent: {
    intro: string;
    features: KidsParentFeature[];
    trialTitle: string;
    trialBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
};

const en: KidsProgramsBundle = {
  meta: {
    title: "Kids Programs | Nibras Network",
    description:
      "Age-based Quran, Arabic, and Islamic programs for children — structured pathways, qualified teachers, and a safe online classroom.",
  },
  hero: {
    kicker: "Kids Programs",
    title: "Where Young Hearts Meet the Qur'an",
    subtitle:
      "Structured, age-friendly learning in Quran, Arabic, and Islamic studies — taught with patience, games, and measurable progress.",
    ctaPrimary: "Book a Free Trial Class",
    ctaSecondary: "Talk to an Advisor",
  },
  tabs: [
    { id: "by-age", label: "By Age", icon: "Baby" },
    { id: "quran", label: "Quran Learning", icon: "BookOpen" },
    { id: "arabic", label: "Arabic Language", icon: "PenLine" },
    { id: "islamic", label: "Islamic Studies", icon: "Landmark" },
    { id: "goals", label: "Learning Goals", icon: "Target" },
    { id: "parent", label: "Parent Zone", icon: "HeartHandshake" },
  ],
  whyParents: {
    title: "Why Parents Choose Nibras Kids Programs",
    bullets: [
      "Age-based structured curriculum",
      "International-friendly teachers",
      "Clear learning pathways",
      "Child-friendly lessons",
      "Safe & respectful environment",
      "Measurable progress",
    ],
  },
  byAge: {
    intro: "Programs tailored to how children learn at every stage — from playful first steps to confident teen recitation.",
    groups: [
      {
        id: "4-6",
        emoji: "👼",
        ageLabel: "Ages 4–6",
        headline: "Little Learners Start Here",
        oneLine: "Fun first steps into Quran, Arabic sounds, and Islamic basics.",
        accent: "#E879A8",
        accentLight: "#FDF0F6",
        sections: [
          {
            title: "Focus Areas",
            items: [
              "Arabic letters & sounds",
              "Short duas",
              "Islamic manners",
              "Listening and repetition",
            ],
          },
          {
            title: "Teaching Style",
            items: [
              "Games & visuals",
              "Songs and repetition",
              "Short lessons (attention-friendly)",
              "Lots of encouragement",
            ],
          },
          {
            title: "Expected Outcomes",
            items: [
              "Recognize Arabic letters",
              "Say simple duas",
              "Love Quran time",
              "Build confidence speaking in class",
            ],
          },
          {
            title: "Activities Used",
            items: [
              "Flashcards",
              "Interactive slides",
              "Sound matching games",
              "Storytelling",
            ],
          },
        ],
        cta: "Start My Child's Journey",
      },
      {
        id: "7-10",
        emoji: "📚",
        ageLabel: "Ages 7–10",
        headline: "Building Strong Foundations",
        oneLine: "Structured learning with fun and focus.",
        accent: "#2D8B5E",
        accentLight: "#E8F5EE",
        sections: [
          {
            title: "Focus Areas",
            items: [
              "Quran reading basics",
              "Tajweed introduction",
              "Short surah memorization",
              "Basic Arabic reading",
              "Prophets stories",
            ],
          },
          {
            title: "Learning Goals",
            items: [
              "Read simple Quran words",
              "Memorize short surahs",
              "Understand basic Islamic concepts",
              "Write simple Arabic letters",
            ],
          },
          {
            title: "Skill Development",
            items: [
              "Focus and discipline",
              "Listening skills",
              "Memory building",
              "Respectful classroom behavior",
            ],
          },
        ],
        cta: "Explore Programs for Ages 7–10",
      },
      {
        id: "11-14",
        emoji: "🎓",
        ageLabel: "Ages 11–14",
        headline: "Growing Knowledge & Confidence",
        oneLine: "Structured programs with measurable progress.",
        accent: "#7C5CBF",
        accentLight: "#F0EBFA",
        sections: [
          {
            title: "Program Structure",
            items: [
              "Quran fluency",
              "Tajweed rules",
              "Memorization plans",
              "Arabic reading & vocabulary",
              "Islamic studies discussions",
            ],
          },
          {
            title: "Progress Expectations",
            items: [
              "Read Quran smoothly",
              "Apply basic Tajweed rules",
              "Memorize with revision",
              "Participate confidently",
            ],
          },
          {
            title: "Student Independence",
            items: [
              "Homework tracking",
              "Personal goals",
              "Responsibility building",
            ],
          },
        ],
        cta: "See Programs for Ages 11–14",
      },
      {
        id: "15-17",
        emoji: "🚀",
        ageLabel: "Ages 15–17",
        headline: "Preparing for Advanced Learning",
        oneLine: "Academic focus with spiritual growth.",
        accent: "#C9A227",
        accentLight: "#FDF6E3",
        sections: [
          {
            title: "Advanced Preparation",
            items: [
              "Strong Tajweed",
              "Consistent memorization",
              "Quran understanding",
              "Arabic reading fluency",
              "Structured Islamic knowledge",
            ],
          },
          {
            title: "Academic Focus",
            items: [
              "Discipline & goal setting",
              "Reflection skills",
              "Presentation skills",
            ],
          },
          {
            title: "Confidence Building",
            items: [
              "Lead recitation",
              "Understand meaning",
              "Discuss Islamic topics clearly",
            ],
          },
        ],
        cta: "View Teen Programs",
      },
    ],
  },
  quran: {
    intro: "From first letters to meaningful recitation — every step builds correct habits early.",
    programs: [
      {
        id: "foundations",
        emoji: "🌱",
        title: "Quran Foundations",
        whatChildrenLearn: ["Arabic letters", "Harakat (sounds)", "Basic reading"],
        parentBenefit: "Your child starts correctly — no guessing habits.",
        expectedOutcome: ["Confident beginner reader"],
        difficulty: "Easy (Beginner)",
        funMethods: "Games, repetition, colorful slides",
      },
      {
        id: "recitation",
        emoji: "📘",
        title: "Reading & Recitation",
        whatChildrenLearn: [
          "Smooth Quran reading",
          "Correct pronunciation",
          "Reading confidence",
        ],
        parentBenefit: "Hear your child recite clearly and proudly.",
        outcome: ["Fewer pauses", "Clearer pronunciation"],
        difficulty: "Beginner → Intermediate",
        funMethods: "Reading challenges, recitation stars",
      },
      {
        id: "hifz",
        emoji: "🧠",
        title: "Memorization Programs (Kids Hifz)",
        whatChildrenLearn: [
          "Short surahs",
          "Structured revision",
          "Memory techniques",
        ],
        parentBenefit: "Clear memorization plan with tracking.",
        outcome: ["Strong recall", "Confidence in prayer"],
        difficulty: "Structured by level",
        funMethods: "Reward charts, revision games",
      },
      {
        id: "tajweed",
        emoji: "🎯",
        title: "Tajweed for Kids",
        whatChildrenLearn: ["Proper pronunciation", "Basic Tajweed rules"],
        parentBenefit: "Correct recitation from early years.",
        outcome: ["Accurate recitation", "Improved listening skills"],
        difficulty: "Intermediate",
      },
      {
        id: "understanding",
        emoji: "💡",
        title: "Understanding Quran",
        whatChildrenLearn: ["Simple meanings", "Key lessons", "Short reflections"],
        parentBenefit: "Child connects to Quran emotionally.",
        outcome: ["Understand basic messages", "Apply simple lessons"],
        difficulty: "Beginner → Intermediate",
      },
    ],
  },
  arabic: {
    intro: "Arabic built step by step — letters, reading, writing, vocabulary, and speaking.",
    progressionLabel: "Suggested Progression",
    progression: "Letters → Reading → Writing → Vocabulary → Speaking",
    programs: [
      {
        id: "letters",
        emoji: "🔡",
        title: "Arabic Letters & Sounds",
        body: "Learn letters the fun way with visuals and sound practice.",
        outcomes: ["Recognize letters", "Pronounce correctly"],
      },
      {
        id: "reading",
        emoji: "📖",
        title: "Reading Skills",
        body: "Build from letters to words to short sentences.",
        outcomes: ["Read simple Arabic", "Recognize Quran words"],
      },
      {
        id: "writing",
        emoji: "✍️",
        title: "Writing Skills",
        body: "Practice tracing and writing letters.",
        outcomes: ["Write letters correctly", "Improve hand coordination"],
      },
      {
        id: "speaking",
        emoji: "🗣",
        title: "Speaking Arabic",
        body: "Simple daily phrases and classroom conversation.",
        outcomes: ["Introduce themselves", "Use basic expressions"],
      },
      {
        id: "vocab",
        emoji: "📚",
        title: "Quranic Vocabulary",
        body: "Learn common Quran words.",
        outcomes: ["Understand repeated words", "Recognize meanings during recitation"],
      },
      {
        id: "activities",
        emoji: "🎮",
        title: "Interactive Activities",
        body: "Games, quizzes, competitions.",
        outcomes: ["Enjoy learning", "Stay motivated"],
      },
    ],
  },
  islamic: {
    intro: "Faith, character, and daily practice — taught with stories children remember.",
    programs: [
      {
        id: "basics",
        emoji: "🌟",
        title: "Islamic Basics",
        body: "Who is Allah? What is prayer?",
        outcomes: ["Understand core beliefs"],
      },
      {
        id: "prophets",
        emoji: "📖",
        title: "Prophets Stories",
        body: "Stories with lessons and character building.",
        outcomes: ["Learn moral lessons"],
      },
      {
        id: "duas",
        emoji: "🤲",
        title: "Daily Duas",
        body: "Short daily supplications.",
        outcomes: ["Apply in daily life"],
      },
      {
        id: "manners",
        emoji: "💛",
        title: "Manners & Character",
        body: "Respect, honesty, kindness.",
        outcomes: ["Practice Islamic behavior"],
      },
      {
        id: "lifestyle",
        emoji: "🏡",
        title: "Islamic Lifestyle",
        body: "Prayer habits, Ramadan basics.",
        outcomes: ["Build identity and confidence"],
      },
    ],
  },
  goals: {
    intro: "Match your child's goal to the right pathway and timeline.",
    tableHeaders: ["Goal", "Best Pathway", "Timeline", "Recommended Courses"],
    rows: [
      {
        goal: "Learn Quran Reading",
        pathway: "Quran Foundations → Recitation",
        timeline: "3–6 months",
        courses: "Noorani Qaida + Tilawah",
      },
      {
        goal: "Memorize Short Surahs",
        pathway: "Recitation → Hifz",
        timeline: "3–6 months",
        courses: "Kids Hifz Program",
      },
      {
        goal: "Learn Arabic Basics",
        pathway: "Letters → Reading",
        timeline: "3–6 months",
        courses: "Arabic Foundations",
      },
      {
        goal: "Improve Islamic Knowledge",
        pathway: "Islamic Basics + Stories",
        timeline: "Ongoing",
        courses: "Islamic Studies for Kids",
      },
      {
        goal: "Build Islamic Character",
        pathway: "Duas + Manners",
        timeline: "Ongoing",
        courses: "Character & Lifestyle",
      },
      {
        goal: "Become More Confident",
        pathway: "Recitation + Speaking",
        timeline: "3–6 months",
        courses: "Tilawah + Speaking Arabic",
      },
    ],
    cta: "Help Me Choose My Child's Goal",
  },
  parent: {
    intro: "Everything parents need to feel confident — qualified teachers, clear progress, and a safe classroom.",
    features: [
      {
        emoji: "👩‍🏫",
        title: "Qualified Teachers",
        items: [
          "Experienced with non-Arabic kids",
          "Friendly and patient",
          "Trained in child engagement",
        ],
      },
      {
        emoji: "📊",
        title: "Progress Reports",
        items: [
          "Monthly updates",
          "Clear skill tracking",
          "Achievement milestones",
        ],
      },
      {
        emoji: "🕒",
        title: "Flexible Scheduling",
        items: ["International time zones", "Weekend options"],
      },
      {
        emoji: "🔒",
        title: "Safe Learning Environment",
        items: [
          "Moderated classes",
          "Respectful behavior standards",
          "Parent communication access",
        ],
      },
      {
        emoji: "🎁",
        title: "Trial Classes",
        items: ["Meet the teacher", "See teaching style"],
      },
      {
        emoji: "🤝",
        title: "Parent Support",
        items: ["Homework guidance", "Practice tips", "Communication channel"],
      },
      {
        emoji: "🏅",
        title: "Achievement Tracking",
        items: ["Stars & badges", "Certificates", "Goal milestones"],
      },
    ],
    trialTitle: "Try before enrolling",
    trialBody: "Meet the teacher and see our child-friendly teaching style — no commitment.",
    ctaPrimary: "Book a Free Trial Class",
    ctaSecondary: "Talk to an Advisor",
  },
};

const ar: KidsProgramsBundle = {
  meta: {
    title: "برامج الأطفال | شبكة نبراس",
    description:
      "برامج قرآن وعربية ودراسات إسلامية حسب العمر — مسارات واضحة ومعلمون مؤهلون وبيئة تعلم آمنة عبر الإنترنت.",
  },
  hero: {
    kicker: "برامج الأطفال",
    title: "حيث يلتقي القلب الصغير بالقرآن",
    subtitle:
      "تعلّم منظّم ومناسب للعمر في القرآن والعربية والدراسات الإسلامية — بالصبر والألعاب وتقدّم يمكن قياسه.",
    ctaPrimary: "احجز حصة تجريبية مجانية",
    ctaSecondary: "تحدث مع مستشار",
  },
  tabs: [
    { id: "by-age", label: "حسب العمر", icon: "Baby" },
    { id: "quran", label: "تعلّم القرآن", icon: "BookOpen" },
    { id: "arabic", label: "اللغة العربية", icon: "PenLine" },
    { id: "islamic", label: "الدراسات الإسلامية", icon: "Landmark" },
    { id: "goals", label: "أهداف التعلّم", icon: "Target" },
    { id: "parent", label: "منطقة أولياء الأمور", icon: "HeartHandshake" },
  ],
  whyParents: {
    title: "لماذا يختار الأهل برامج نبراس للأطفال",
    bullets: [
      "منهج منظّم حسب العمر",
      "معلمون يناسبون العائلات الدولية",
      "مسارات تعلّم واضحة",
      "دروس مناسبة للأطفال",
      "بيئة آمنة ومحترمة",
      "تقدّم يمكن قياسه",
    ],
  },
  byAge: {
    intro: "برامج تلائم طريقة تعلّم الطفل في كل مرحلة — من الخطوات الأولى المرحة إلى تلاوة واثقة للمراهقين.",
    groups: [
      {
        id: "4-6",
        emoji: "👼",
        ageLabel: "من 4 إلى 6 سنوات",
        headline: "يبدأ المتعلّمون الصغار هنا",
        oneLine: "خطوات ممتعة أولى في القرآن وأصوات العربية وأساسيات الإسلام.",
        accent: "#E879A8",
        accentLight: "#FDF0F6",
        sections: [
          {
            title: "مجالات التركيز",
            items: [
              "حروف العربية وأصواتها",
              "أدعية قصيرة",
              "آداب إسلامية",
              "الاستماع والتكرار",
            ],
          },
          {
            title: "أسلوب التدريس",
            items: [
              "ألعاب ومرئيات",
              "أناشيد وتكرار",
              "دروس قصيرة (مناسبة للانتباه)",
              "تشجيع مستمر",
            ],
          },
          {
            title: "النتائج المتوقعة",
            items: [
              "التعرّف على حروف العربية",
              "قول أدعية بسيطة",
              "حب وقت القرآن",
              "بناء الثقة في التحدث بالصف",
            ],
          },
          {
            title: "الأنشطة المستخدمة",
            items: [
              "بطاقات تعليمية",
              "شرائح تفاعلية",
              "ألعاب مطابقة الأصوات",
              "سرد القصص",
            ],
          },
        ],
        cta: "ابدأ رحلة طفلي",
      },
      {
        id: "7-10",
        emoji: "📚",
        ageLabel: "من 7 إلى 10 سنوات",
        headline: "بناء أسس قوية",
        oneLine: "تعلّم منظّم مع متعة وتركيز.",
        accent: "#2D8B5E",
        accentLight: "#E8F5EE",
        sections: [
          {
            title: "مجالات التركيز",
            items: [
              "أساسيات قراءة القرآن",
              "مقدمة في التجويد",
              "حفظ سور قصيرة",
              "قراءة عربية أساسية",
              "قصص الأنبياء",
            ],
          },
          {
            title: "أهداف التعلّم",
            items: [
              "قراءة كلمات قرآنية بسيطة",
              "حفظ سور قصيرة",
              "فهم مفاهيم إسلامية أساسية",
              "كتابة حروف عربية بسيطة",
            ],
          },
          {
            title: "تنمية المهارات",
            items: [
              "التركيز والانضباط",
              "مهارات الاستماع",
              "بناء الذاكرة",
              "سلوك محترم في الصف",
            ],
          },
        ],
        cta: "استكشف برامج 7–10 سنوات",
      },
      {
        id: "11-14",
        emoji: "🎓",
        ageLabel: "من 11 إلى 14 سنة",
        headline: "نمو المعرفة والثقة",
        oneLine: "برامج منظّمة بتقدّم يمكن قياسه.",
        accent: "#7C5CBF",
        accentLight: "#F0EBFA",
        sections: [
          {
            title: "هيكل البرنامج",
            items: [
              "طلاقة القرآن",
              "قواعد التجويد",
              "خطط الحفظ",
              "قراءة عربية ومفردات",
              "نقاشات دراسات إسلامية",
            ],
          },
          {
            title: "توقعات التقدّم",
            items: [
              "قراءة القرآن بسلاسة",
              "تطبيق قواعد تجويد أساسية",
              "الحفظ مع المراجعة",
              "المشاركة بثقة",
            ],
          },
          {
            title: "استقلالية الطالب",
            items: [
              "متابعة الواجبات",
              "أهداف شخصية",
              "بناء المسؤولية",
            ],
          },
        ],
        cta: "شاهد برامج 11–14 سنة",
      },
      {
        id: "15-17",
        emoji: "🚀",
        ageLabel: "من 15 إلى 17 سنة",
        headline: "الاستعداد للتعلّم المتقدّم",
        oneLine: "تركيز أكاديمي مع نمو روحي.",
        accent: "#C9A227",
        accentLight: "#FDF6E3",
        sections: [
          {
            title: "الاستعداد المتقدّم",
            items: [
              "تجويد قوي",
              "حفظ منتظم",
              "فهم القرآن",
              "طلاقة القراءة بالعربية",
              "معرفة إسلامية منظّمة",
            ],
          },
          {
            title: "التركيز الأكاديمي",
            items: [
              "الانضباط وتحديد الأهداف",
              "مهارات التأمل",
              "مهارات العرض",
            ],
          },
          {
            title: "بناء الثقة",
            items: [
              "قيادة التلاوة",
              "فهم المعاني",
              "مناقشة مواضيع إسلامية بوضوح",
            ],
          },
        ],
        cta: "عرض برامج المراهقين",
      },
    ],
  },
  quran: {
    intro: "من أول الحروف إلى تلاوة ذات معنى — كل خطوة تبني عادات صحيحة مبكراً.",
    programs: [
      {
        id: "foundations",
        emoji: "🌱",
        title: "أساسيات القرآن",
        whatChildrenLearn: ["حروف العربية", "الحركات (الأصوات)", "القراءة الأساسية"],
        parentBenefit: "يبدأ طفلك بشكل صحيح — دون عادات تخمين خاطئة.",
        expectedOutcome: ["قارئ مبتدئ واثق"],
        difficulty: "سهل (مبتدئ)",
        funMethods: "ألعاب، تكرار، شرائح ملونة",
      },
      {
        id: "recitation",
        emoji: "📘",
        title: "القراءة والتلاوة",
        whatChildrenLearn: [
          "قراءة قرآنية سلسة",
          "نطق صحيح",
          "ثقة في القراءة",
        ],
        parentBenefit: "تسمع طفلك يتلو بوضوح وفخر.",
        outcome: ["توقفات أقل", "نطق أوضح"],
        difficulty: "مبتدئ → متوسّط",
        funMethods: "تحديات قراءة، نجوم التلاوة",
      },
      {
        id: "hifz",
        emoji: "🧠",
        title: "برامج الحفظ (حفظ الأطفال)",
        whatChildrenLearn: [
          "سور قصيرة",
          "مراجعة منظّمة",
          "تقنيات الذاكرة",
        ],
        parentBenefit: "خطة حفظ واضحة مع متابعة.",
        outcome: ["استذكار قوي", "ثقة في الصلاة"],
        difficulty: "منظّم حسب المستوى",
        funMethods: "جداول مكافآت، ألعاب مراجعة",
      },
      {
        id: "tajweed",
        emoji: "🎯",
        title: "التجويد للأطفال",
        whatChildrenLearn: ["نطق سليم", "قواعد تجويد أساسية"],
        parentBenefit: "تلاوة صحيحة من السنوات الأولى.",
        outcome: ["تلاوة دقيقة", "تحسين مهارات الاستماع"],
        difficulty: "متوسّط",
      },
      {
        id: "understanding",
        emoji: "💡",
        title: "فهم القرآن",
        whatChildrenLearn: ["معانٍ بسيطة", "دروس رئيسية", "تأملات قصيرة"],
        parentBenefit: "يربط الطفل بالقرآن عاطفياً.",
        outcome: ["فهم رسائل أساسية", "تطبيق دروس بسيطة"],
        difficulty: "مبتدئ → متوسّط",
      },
    ],
  },
  arabic: {
    intro: "العربية خطوة بخطوة — حروف، قراءة، كتابة، مفردات، ومحادثة.",
    progressionLabel: "التسلسل المقترح",
    progression: "حروف → قراءة → كتابة → مفردات → محادثة",
    programs: [
      {
        id: "letters",
        emoji: "🔡",
        title: "حروف العربية وأصواتها",
        body: "تعلّم الحروف بطريقة ممتعة مع مرئيات وتدريب على الأصوات.",
        outcomes: ["التعرّف على الحروف", "نطق صحيح"],
      },
      {
        id: "reading",
        emoji: "📖",
        title: "مهارات القراءة",
        body: "من الحروف إلى الكلمات إلى جمل قصيرة.",
        outcomes: ["قراءة عربية بسيطة", "التعرّف على كلمات القرآن"],
      },
      {
        id: "writing",
        emoji: "✍️",
        title: "مهارات الكتابة",
        body: "تدريب على تتبع الحروف وكتابتها.",
        outcomes: ["كتابة الحروف بشكل صحيح", "تحسين التنسيق اليدوي"],
      },
      {
        id: "speaking",
        emoji: "🗣",
        title: "محادثة بالعربية",
        body: "عبارات يومية بسيطة ومحادثة صفية.",
        outcomes: ["التعريف بنفسه", "استخدام تعبيرات أساسية"],
      },
      {
        id: "vocab",
        emoji: "📚",
        title: "مفردات قرآنية",
        body: "تعلّم كلمات قرآنية شائعة.",
        outcomes: ["فهم الكلمات المتكررة", "التعرّف على المعاني أثناء التلاوة"],
      },
      {
        id: "activities",
        emoji: "🎮",
        title: "أنشطة تفاعلية",
        body: "ألعاب، اختبارات، مسابقات.",
        outcomes: ["الاستمتاع بالتعلّم", "الحفاظ على الحماس"],
      },
    ],
  },
  islamic: {
    intro: "إيمان وخلق وممارسة يومية — بقصص يتذكرها الأطفال.",
    programs: [
      {
        id: "basics",
        emoji: "🌟",
        title: "أساسيات الإسلام",
        body: "من هو الله؟ ما الصلاة؟",
        outcomes: ["فهم المعتقدات الأساسية"],
      },
      {
        id: "prophets",
        emoji: "📖",
        title: "قصص الأنبياء",
        body: "قصص بعبر وبناء شخصية.",
        outcomes: ["تعلّم دروس أخلاقية"],
      },
      {
        id: "duas",
        emoji: "🤲",
        title: "أدعية يومية",
        body: "أذكار ودعاء قصيرة يومية.",
        outcomes: ["التطبيق في الحياة اليومية"],
      },
      {
        id: "manners",
        emoji: "💛",
        title: "الآداب والخلق",
        body: "احترام، صدق، لطف.",
        outcomes: ["ممارسة السلوك الإسلامي"],
      },
      {
        id: "lifestyle",
        emoji: "🏡",
        title: "أسلوب حياة إسلامي",
        body: "عادات الصلاة، أساسيات رمضان.",
        outcomes: ["بناء هوية وثقة"],
      },
    ],
  },
  goals: {
    intro: "وائم هدف طفلك مع المسار والجدول الزمني المناسبين.",
    tableHeaders: ["الهدف", "أفضل مسار", "المدة", "الدورات المقترحة"],
    rows: [
      {
        goal: "تعلّم قراءة القرآن",
        pathway: "أساسيات القرآن → التلاوة",
        timeline: "3–6 أشهر",
        courses: "القاعدة النورانية + التلاوة",
      },
      {
        goal: "حفظ سور قصيرة",
        pathway: "التلاوة → الحفظ",
        timeline: "3–6 أشهر",
        courses: "برنامج حفظ الأطفال",
      },
      {
        goal: "تعلّم أساسيات العربية",
        pathway: "الحروف → القراءة",
        timeline: "3–6 أشهر",
        courses: "أساسيات العربية",
      },
      {
        goal: "تعميق المعرفة الإسلامية",
        pathway: "أساسيات الإسلام + القصص",
        timeline: "مستمر",
        courses: "دراسات إسلامية للأطفال",
      },
      {
        goal: "بناء الخلق الإسلامي",
        pathway: "الأدعية + الآداب",
        timeline: "مستمر",
        courses: "الخلق وأسلوب الحياة",
      },
      {
        goal: "زيادة الثقة",
        pathway: "التلاوة + المحادثة",
        timeline: "3–6 أشهر",
        courses: "التلاوة + المحادثة بالعربية",
      },
    ],
    cta: "ساعدني في اختيار هدف طفلي",
  },
  parent: {
    intro: "كل ما يحتاجه ولي الأمر للاطمئنان — معلمون مؤهلون، تقدّم واضح، وصف آمن.",
    features: [
      {
        emoji: "👩‍🏫",
        title: "معلمون مؤهلون",
        items: [
          "خبرة مع أطفال غير الناطقين بالعربية",
          "ودودون وصبورون",
          "مدرّبون على جذب انتباه الأطفال",
        ],
      },
      {
        emoji: "📊",
        title: "تقارير التقدّم",
        items: [
          "تحديثات شهرية",
          "متابعة مهارات واضحة",
          "إنجازات مرحلية",
        ],
      },
      {
        emoji: "🕒",
        title: "مواعيد مرنة",
        items: ["مناطق زمنية دولية", "خيارات عطلة نهاية الأسبوع"],
      },
      {
        emoji: "🔒",
        title: "بيئة تعلم آمنة",
        items: [
          "حصص مُراقبة",
          "معايير سلوك محترمة",
          "قناة تواصل مع الأهل",
        ],
      },
      {
        emoji: "🎁",
        title: "حصص تجريبية",
        items: ["التعرّف على المعلّم", "مشاهدة أسلوب التدريس"],
      },
      {
        emoji: "🤝",
        title: "دعم أولياء الأمور",
        items: ["إرشاد الواجبات", "نصائح للممارسة", "قناة تواصل"],
      },
      {
        emoji: "🏅",
        title: "متابعة الإنجازات",
        items: ["نجوم وشارات", "شهادات", "معالم الأهداف"],
      },
    ],
    trialTitle: "جرّب قبل التسجيل",
    trialBody: "التعرّف على المعلّم ومشاهدة أسلوبنا المناسب للأطفال — دون التزام.",
    ctaPrimary: "احجز حصة تجريبية مجانية",
    ctaSecondary: "تحدث مع مستشار",
  },
};

export function getKidsProgramsContent(locale: Locale): KidsProgramsBundle {
  return locale === "ar" ? ar : en;
}
