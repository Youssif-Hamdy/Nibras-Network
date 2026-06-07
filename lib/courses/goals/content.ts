import type { Locale } from "@/lib/i18n/types";

export const COURSE_GOAL_SLUGS = [
  "start-from-zero",
  "recite-perfectly",
  "memorize-hifz",
  "learn-arabic",
  "understand-quran-arabic",
  "islamic-education",
  "ijazah",
  "teach-kids",
  "master-tajweed",
  "learn-qiraat",
  "become-teacher",
  "new-muslim",
  "study-tafsir",
] as const;

export type CourseGoalSlug = (typeof COURSE_GOAL_SLUGS)[number];

export type CourseGoalContent = {
  slug: CourseGoalSlug;
  emoji: string;
  accent: string;
  accentLight: string;
  meta: { title: string; description: string };
  badge: string;
  hero: { title: string; subtitle: string };
  whoIsFor: { title: string; text: string };
  beginnerEntry: { title: string; text: string };
  pathway: { title: string; items: string[] };
  outcomes: { title: string; text: string };
  duration: { title: string; text: string };
  motivation: string;
  cta: string;
  exploreOtherTitle: string;
};

const en: Record<CourseGoalSlug, CourseGoalContent> = {
  "start-from-zero": {
    slug: "start-from-zero",
    emoji: "🌱",
    accent: "#1c7a45",
    accentLight: "#e8f5ee",
    meta: {
      title: "Start from Absolute Zero | Nibras Network",
      description:
        "The perfect, zero-pressure starting point for anyone with no previous knowledge of Arabic or Islam.",
    },
    badge: "Zero Experience Welcome",
    hero: {
      title: "Build Your Foundation from Scratch",
      subtitle:
        "The perfect, zero-pressure starting point for anyone with no previous knowledge of Arabic or Islam.",
    },
    whoIsFor: {
      title: "Who This Is For",
      text: "Absolute beginners, young children, reverts, and adults who want to learn but don't know where to start.",
    },
    beginnerEntry: {
      title: "Beginner Entry Path",
      text: "Zero experience? You are in the right place. We start with the alphabet, the absolute basics of faith, and simple pronunciation in a supportive, step-by-step environment.",
    },
    pathway: {
      title: "Recommended Learning Pathway",
      items: [
        "For Quran & Reading: Noorani Qaida / Noor Al-Bayan",
        "For Islamic Knowledge: Beginner Islamic Foundations",
        "For Arabic: Intro to Arabic Alphabet",
      ],
    },
    outcomes: {
      title: "Expected Outcomes",
      text: "Read basic Arabic words, know how to pray, and build the confidence to progress to higher levels.",
    },
    duration: { title: "Suggested Duration", text: "2–4 Months" },
    motivation: "Every great journey begins with a single step. We are honored to guide your first one.",
    cta: "Start Your First Lesson",
    exploreOtherTitle: "Explore Other Learning Goals",
  },
  "recite-perfectly": {
    slug: "recite-perfectly",
    emoji: "📖",
    accent: "#2d8f5a",
    accentLight: "#edf7f1",
    meta: {
      title: "Recite Quran Perfectly | Nibras Network",
      description:
        "Transform hesitant reading into smooth, confident, and accurate Quranic recitation.",
    },
    badge: "Most Popular",
    hero: {
      title: "Recite with Confidence & Flow",
      subtitle:
        "Transform hesitant reading into smooth, confident, and accurate Quranic recitation.",
    },
    whoIsFor: {
      title: "Who This Is For",
      text: "Students who know the alphabet but struggle with reading speed, flow, and pronunciation.",
    },
    beginnerEntry: {
      title: "Beginner Entry Path",
      text: "Start with Noorani Qaida to ensure your letter recognition is flawless before building reading speed.",
    },
    pathway: {
      title: "Recommended Learning Pathway",
      items: ["Quran Foundations → Quran Recitation (Tilawah)"],
    },
    outcomes: {
      title: "Expected Outcomes",
      text: "Smooth, continuous, and confident recitation of full Quranic pages without stuttering.",
    },
    duration: { title: "Suggested Duration", text: "Ongoing (Paced by level)" },
    motivation: "Turn the struggle of reading into the beautiful rhythm of recitation.",
    cta: "Improve My Reading",
    exploreOtherTitle: "Explore Other Learning Goals",
  },
  "memorize-hifz": {
    slug: "memorize-hifz",
    emoji: "🧠",
    accent: "#1c3a2e",
    accentLight: "#e8ede9",
    meta: {
      title: "Memorize Quran (Hifz) | Nibras Network",
      description:
        "Preserve the words of Allah in your heart using a structured, proven revision system.",
    },
    badge: "High Commitment",
    hero: {
      title: "Memorize the Quran (Hifz)",
      subtitle:
        "Preserve the words of Allah in your heart using a structured, proven revision system.",
    },
    whoIsFor: {
      title: "Who This Is For",
      text: "Dedicated learners, kids, and adults ready for consistent daily practice.",
    },
    beginnerEntry: {
      title: "Beginner Entry Path",
      text: "Focus on reading fluency and basic pronunciation first, preparing your mind and tongue for memorization readiness.",
    },
    pathway: {
      title: "Recommended Learning Pathway",
      items: ["Reading Preparation → Tajweed Foundations → Hifz Track"],
    },
    outcomes: {
      title: "Expected Outcomes",
      text: "Strong, long-term retention of selected Surahs or the entire Quran.",
    },
    duration: { title: "Suggested Duration", text: "1–3+ Years" },
    motivation: "Carry the light of the Quran in your heart wherever you go in life.",
    cta: "Start Your Hifz Journey",
    exploreOtherTitle: "Explore Other Learning Goals",
  },
  "learn-arabic": {
    slug: "learn-arabic",
    emoji: "💬",
    accent: "#1a4a6b",
    accentLight: "#eaf1f8",
    meta: {
      title: "Learn Arabic Language | Nibras Network",
      description:
        "Master the Arabic language for daily communication, travel, and Islamic understanding.",
    },
    badge: "Practical Skill",
    hero: {
      title: "Speak, Read & Write Arabic",
      subtitle:
        "Master the Arabic language for daily communication, travel, and Islamic understanding.",
    },
    whoIsFor: {
      title: "Who This Is For",
      text: "Non-Arabic speakers of all ages wanting practical, real-world fluency.",
    },
    beginnerEntry: {
      title: "Beginner Entry Path",
      text: "Start with Noor Al-Bayan to recognize letters and sounds, then move to absolute beginner vocabulary.",
    },
    pathway: {
      title: "Recommended Learning Pathway",
      items: ["Noor Al-Bayan → Arabic Foundations → Conversational Arabic"],
    },
    outcomes: {
      title: "Expected Outcomes",
      text: "Practical fluency to communicate confidently and comprehend Arabic texts.",
    },
    duration: { title: "Suggested Duration", text: "6–12 Months (per level)" },
    motivation: "Unlock a new world of communication and connect deeply with the Arab and Islamic world.",
    cta: "Start Learning Arabic",
    exploreOtherTitle: "Explore Other Learning Goals",
  },
  "understand-quran-arabic": {
    slug: "understand-quran-arabic",
    emoji: "🗝️",
    accent: "#7a3d10",
    accentLight: "#faf0e8",
    meta: {
      title: "Understand Quran in Arabic | Nibras Network",
      description:
        "Learn high-frequency Quranic vocabulary to understand verses without relying on translations.",
    },
    badge: "Deep Connection",
    hero: {
      title: "Understand the Quran Directly",
      subtitle:
        "Learn high-frequency Quranic vocabulary to understand verses without relying on translations.",
    },
    whoIsFor: {
      title: "Who This Is For",
      text: "Anyone who wants to truly feel the meaning of the words during Salah and recitation.",
    },
    beginnerEntry: {
      title: "Beginner Entry Path",
      text: "Learn basic Arabic reading rules and the most common root words found in the Quran.",
    },
    pathway: {
      title: "Recommended Learning Pathway",
      items: ["Arabic Basics → Foundational Grammar → Quranic Vocabulary Track"],
    },
    outcomes: {
      title: "Expected Outcomes",
      text: "Understand 70%+ of the most frequent words in the Quran directly.",
    },
    duration: { title: "Suggested Duration", text: "6–9 Months" },
    motivation: "Taste the sweetness of understanding the Quran exactly as it was revealed.",
    cta: "Unlock the Meaning",
    exploreOtherTitle: "Explore Other Learning Goals",
  },
  "islamic-education": {
    slug: "islamic-education",
    emoji: "⚖️",
    accent: "#1c7a45",
    accentLight: "#e8f5ee",
    meta: {
      title: "Complete Islamic Education | Nibras Network",
      description:
        "A comprehensive pathway covering Islamic beliefs, daily rulings, prophetic history, and manners.",
    },
    badge: "Comprehensive",
    hero: {
      title: "Gain a Balanced Islamic Education",
      subtitle:
        "A comprehensive pathway covering Islamic beliefs, daily rulings, prophetic history, and manners.",
    },
    whoIsFor: {
      title: "Who This Is For",
      text: "Families and individuals seeking a structured, all-in-one Islamic curriculum.",
    },
    beginnerEntry: {
      title: "Beginner Entry Path",
      text: "Start with the absolute pillars of faith, simple manners, and how to pray correctly.",
    },
    pathway: {
      title: "Recommended Learning Pathway",
      items: ["Islamic Foundations → Beginner Islamic Studies → Progressive Pathways"],
    },
    outcomes: {
      title: "Expected Outcomes",
      text: "A solid, well-rounded understanding of core Islamic sciences applied to daily life.",
    },
    duration: { title: "Suggested Duration", text: "1–2 Years" },
    motivation: "Build an unshakable foundation of faith for yourself and your family.",
    cta: "Begin Islamic Studies",
    exploreOtherTitle: "Explore Other Learning Goals",
  },
  ijazah: {
    slug: "ijazah",
    emoji: "📜",
    accent: "#b8954a",
    accentLight: "#faf5eb",
    meta: {
      title: "Get Ijazah Certificate | Nibras Network",
      description:
        "Authenticate your recitation with a connected chain of transmission to the Prophet ﷺ.",
    },
    badge: "Scholarly Path",
    hero: {
      title: "Earn Your Ijazah Certificate",
      subtitle:
        "Authenticate your recitation with a connected chain of transmission to the Prophet ﷺ.",
    },
    whoIsFor: {
      title: "Who This Is For",
      text: "Advanced Huffaz and Tajweed masters seeking formal scholarly certification.",
    },
    beginnerEntry: {
      title: "Beginner Entry Path",
      text: "A long-term roadmap showing exactly how to progress from basic letter recognition to ultimate certification.",
    },
    pathway: {
      title: "Recommended Learning Pathway",
      items: [
        "Foundational Preparation → Tajweed/Hifz Mastery → Ijazah Audition & Pathway",
      ],
    },
    outcomes: {
      title: "Expected Outcomes",
      text: "Formal Ijazah document in Recitation or Memorization.",
    },
    duration: { title: "Suggested Duration", text: "1–2+ Years (from advanced entry)" },
    motivation: "Connect your voice to the golden chain of Quranic transmission.",
    cta: "View the Ijazah Roadmap",
    exploreOtherTitle: "Explore Other Learning Goals",
  },
  "teach-kids": {
    slug: "teach-kids",
    emoji: "🧸",
    accent: "#C25B7A",
    accentLight: "#FDF0F6",
    meta: {
      title: "Teach My Kids | Nibras Network",
      description:
        "Safe, fun, and engaging online classes designed specifically for children's attention spans.",
    },
    badge: "Parent Approved",
    hero: {
      title: "Give Your Kids the Best Islamic Start",
      subtitle:
        "Safe, fun, and engaging online classes designed specifically for children's attention spans.",
    },
    whoIsFor: {
      title: "Who This Is For",
      text: "Busy parents wanting reliable, child-friendly Islamic and Quranic education.",
    },
    beginnerEntry: {
      title: "Beginner Entry Path",
      text: "Child-friendly alphabet games, basic daily Duas, and simple Islamic manners.",
    },
    pathway: {
      title: "Recommended Learning Pathway",
      items: ["Child Foundations → Structured Kids Programs → Parent-Guided Tracks"],
    },
    outcomes: {
      title: "Expected Outcomes",
      text: "Happy kids who love learning their Deen, pray correctly, and read Quran accurately.",
    },
    duration: { title: "Suggested Duration", text: "Ongoing" },
    motivation: "Give your child the greatest gift: a lifelong love for the Quran and Islam.",
    cta: "Enroll My Child",
    exploreOtherTitle: "Explore Other Learning Goals",
  },
  "master-tajweed": {
    slug: "master-tajweed",
    emoji: "🎙️",
    accent: "#0D9488",
    accentLight: "#E6F7F5",
    meta: {
      title: "Master Tajweed & Recitation | Nibras Network",
      description:
        "Perfect your pronunciation and apply classical recitation rules flawlessly.",
    },
    badge: "Precision Focus",
    hero: {
      title: "Master Tajweed Rules",
      subtitle:
        "Perfect your pronunciation and apply classical recitation rules flawlessly.",
    },
    whoIsFor: {
      title: "Who This Is For",
      text: "Fluent readers who want to recite with scholarly precision and beauty.",
    },
    beginnerEntry: {
      title: "Beginner Entry Path",
      text: "Secure your reading foundations to ensure basic fluency before applying complex rules.",
    },
    pathway: {
      title: "Recommended Learning Pathway",
      items: ["Reading Foundations → Intro to Tajweed → Gradual Mastery Progression"],
    },
    outcomes: {
      title: "Expected Outcomes",
      text: "Flawless, rule-compliant Quranic recitation.",
    },
    duration: { title: "Suggested Duration", text: "6–12 Months" },
    motivation: "Recite the Quran beautifully, exactly as it was meant to be heard.",
    cta: "Perfect My Recitation",
    exploreOtherTitle: "Explore Other Learning Goals",
  },
  "learn-qiraat": {
    slug: "learn-qiraat",
    emoji: "📚",
    accent: "#1c3a2e",
    accentLight: "#e8ede9",
    meta: {
      title: "Learn Qira'at | Nibras Network",
      description:
        "Expand your scholarly horizons by mastering the ten authentic variant narrations.",
    },
    badge: "Advanced Specialization",
    hero: {
      title: "Study the 10 Qira'at",
      subtitle:
        "Expand your scholarly horizons by mastering the ten authentic variant narrations.",
    },
    whoIsFor: {
      title: "Who This Is For",
      text: "Dedicated scholars and Huffaz looking for specialized, advanced Quranic studies.",
    },
    beginnerEntry: {
      title: "Beginner Entry Path",
      text: "A clear roadmap outlining the Hifz and Tajweed preparation required to become eligible for this track.",
    },
    pathway: {
      title: "Recommended Learning Pathway",
      items: ["Tajweed Mastery → Hifz Completion → Qira'at Program"],
    },
    outcomes: {
      title: "Expected Outcomes",
      text: "Mastery and certification in multiple authentic recitation styles.",
    },
    duration: { title: "Suggested Duration", text: "12+ Months (from advanced entry)" },
    motivation: "Dive into the profound linguistic depth of the Quran's authentic narrations.",
    cta: "Explore Qira'at",
    exploreOtherTitle: "Explore Other Learning Goals",
  },
  "become-teacher": {
    slug: "become-teacher",
    emoji: "👨‍🏫",
    accent: "#1a4a6b",
    accentLight: "#eaf1f8",
    meta: {
      title: "Become a Quran Teacher | Nibras Network",
      description:
        "Gain the pedagogical skills, tools, and methodology to teach Quran and Arabic professionally.",
    },
    badge: "Career Path",
    hero: {
      title: "Train to Become a Quran Teacher",
      subtitle:
        "Gain the pedagogical skills, tools, and methodology to teach Quran and Arabic professionally.",
    },
    whoIsFor: {
      title: "Who This Is For",
      text: "Aspiring educators, community volunteers, and motivated learners.",
    },
    beginnerEntry: {
      title: "Beginner Entry Path",
      text: "Build your own educational foundations and personal reading fluency before learning how to teach others.",
    },
    pathway: {
      title: "Recommended Learning Pathway",
      items: ["Educational Foundations → Teaching Methodology → Certification Pathway"],
    },
    outcomes: {
      title: "Expected Outcomes",
      text: "Professional certification and readiness to teach online or offline.",
    },
    duration: { title: "Suggested Duration", text: "3–6 Months (per teaching module)" },
    motivation: "Shift from being a lifelong student to shaping the next generation of believers.",
    cta: "Start Teacher Training",
    exploreOtherTitle: "Explore Other Learning Goals",
  },
  "new-muslim": {
    slug: "new-muslim",
    emoji: "🤝",
    accent: "#15803d",
    accentLight: "#dcfce7",
    meta: {
      title: "New Muslim Guidance (FREE) | Nibras Network",
      description:
        "A warm, supportive, and 100% free starting point for reverts to learn the basics of faith.",
    },
    badge: "100% FREE",
    hero: {
      title: "Welcoming New Muslims",
      subtitle:
        "A warm, supportive, and 100% free starting point for reverts to learn the basics of faith.",
    },
    whoIsFor: {
      title: "Who This Is For",
      text: "New Muslims looking for a safe, zero-judgment environment.",
    },
    beginnerEntry: {
      title: "Beginner Entry Path",
      text: "Absolute zero-pressure entry into Islam, starting with the simplest, most essential concepts.",
    },
    pathway: {
      title: "Recommended Learning Pathway",
      items: ["Faith Foundations → Step-by-step Progression → Daily Practices"],
    },
    outcomes: {
      title: "Expected Outcomes",
      text: "Confidence in daily worship and fundamental Islamic practices.",
    },
    duration: { title: "Suggested Duration", text: "3 Months (Free)" },
    motivation: "Welcome to the family. We are honored to guide your very first steps.",
    cta: "Claim My Free Lessons",
    exploreOtherTitle: "Explore Other Learning Goals",
  },
  "study-tafsir": {
    slug: "study-tafsir",
    emoji: "💡",
    accent: "#92400e",
    accentLight: "#fffbeb",
    meta: {
      title: "Study Tafsir | Nibras Network",
      description:
        "Discover the historical context, deep reflections, and life lessons behind the verses.",
    },
    badge: "Spiritual Growth",
    hero: {
      title: "Understand Tafsir & Context",
      subtitle:
        "Discover the historical context, deep reflections, and life lessons behind the verses.",
    },
    whoIsFor: {
      title: "Who This Is For",
      text: "Anyone wanting to reflect deeply (Tadabbur) on the Quran's message for daily life.",
    },
    beginnerEntry: {
      title: "Beginner Entry Path",
      text: "Basic stories of the Quran and simple vocabulary preparation before diving into heavy texts.",
    },
    pathway: {
      title: "Recommended Learning Pathway",
      items: ["Quran Basics → Vocabulary Preparation → Reflection Foundations (Tafsir)"],
    },
    outcomes: {
      title: "Expected Outcomes",
      text: "A highly meaningful connection to the Quran's guidance and real-world application.",
    },
    duration: { title: "Suggested Duration", text: "6–12 Months" },
    motivation: "Move beyond just reciting the words to truly living the message.",
    cta: "Discover the Meanings",
    exploreOtherTitle: "Explore Other Learning Goals",
  },
};

const ar: Record<CourseGoalSlug, CourseGoalContent> = {
  "start-from-zero": {
    slug: "start-from-zero",
    emoji: "🌱",
    accent: "#1c7a45",
    accentLight: "#e8f5ee",
    meta: {
      title: "البداية من الصفر المطلق | شبكة نبراس",
      description:
        "نقطة انطلاق مثالية بلا ضغط لكل من لا يملك معرفة سابقة بالعربية أو الإسلام.",
    },
    badge: "مرحباً بمن ليس لديه خبرة",
    hero: {
      title: "ابنِ أساسك من الصفر",
      subtitle:
        "نقطة انطلاق مثالية بلا ضغط لكل من لا يملك معرفة سابقة بالعربية أو الإسلام.",
    },
    whoIsFor: {
      title: "لمن هذا الهدف",
      text: "المبتدئون المطلقون، الأطفال الصغار، المسلمون الجدد، والبالغون الذين يريدون التعلّم ولا يعرفون من أين يبدأون.",
    },
    beginnerEntry: {
      title: "مسار الدخول للمبتدئين",
      text: "لا خبرة لديك؟ أنت في المكان الصحيح. نبدأ بالحروف، وأبسط أساسيات الإيمان، والنطق البسيط في بيئة داعمة خطوة بخطوة.",
    },
    pathway: {
      title: "مسار التعلّم الموصى به",
      items: [
        "للقرآن والقراءة: القاعدة النورانية / نور البيان",
        "للمعرفة الإسلامية: أساسيات الإسلام للمبتدئين",
        "للعربية: مقدمة في الحروف العربية",
      ],
    },
    outcomes: {
      title: "النتائج المتوقعة",
      text: "قراءة كلمات عربية أساسية، معرفة كيفية الصلاة، وبناء الثقة للانتقال إلى مستويات أعلى.",
    },
    duration: { title: "المدة المقترحة", text: "2–4 أشهر" },
    motivation: "كل رحلة عظيمة تبدأ بخطوة واحدة. نتشرّف بأن نرشدك في أول خطواتك.",
    cta: "ابدأ درسك الأول",
    exploreOtherTitle: "استكشف أهداف تعلّم أخرى",
  },
  "recite-perfectly": {
    slug: "recite-perfectly",
    emoji: "📖",
    accent: "#2d8f5a",
    accentLight: "#edf7f1",
    meta: {
      title: "تلاوة القرآن بإتقان | شبكة نبراس",
      description: "حوّل القراءة المتردّدة إلى تلاوة قرآنية سلسة وواثقة ودقيقة.",
    },
    badge: "الأكثر شعبية",
    hero: {
      title: "تلاوة بثقة وانسيابية",
      subtitle: "حوّل القراءة المتردّدة إلى تلاوة قرآنية سلسة وواثقة ودقيقة.",
    },
    whoIsFor: {
      title: "لمن هذا الهدف",
      text: "الطلاب الذين يعرفون الحروف لكنهم يواجهون صعوبة في سرعة القراءة والانسيابية والنطق.",
    },
    beginnerEntry: {
      title: "مسار الدخول للمبتدئين",
      text: "ابدأ بالقاعدة النورانية لضمان إتقان التعرّف على الحروف قبل بناء سرعة القراءة.",
    },
    pathway: {
      title: "مسار التعلّم الموصى به",
      items: ["أساسيات القرآن ← تلاوة القرآن (التلاوة)"],
    },
    outcomes: {
      title: "النتائج المتوقعة",
      text: "تلاوة سلسة ومتواصلة وواثقة لصفحات قرآنية كاملة دون تلعثم.",
    },
    duration: { title: "المدة المقترحة", text: "مستمر (حسب المستوى)" },
    motivation: "حوّل صعوبة القراءة إلى إيقاع جميل من التلاوة.",
    cta: "حسّن قراءتي",
    exploreOtherTitle: "استكشف أهداف تعلّم أخرى",
  },
  "memorize-hifz": {
    slug: "memorize-hifz",
    emoji: "🧠",
    accent: "#1c3a2e",
    accentLight: "#e8ede9",
    meta: {
      title: "حفظ القرآن | شبكة نبراس",
      description: "احفظ كلام الله في قلبك بمنهج منظّم ونظام مراجعة مجرّب.",
    },
    badge: "التزام عالٍ",
    hero: {
      title: "حفظ القرآن الكريم",
      subtitle: "احفظ كلام الله في قلبك بمنهج منظّم ونظام مراجعة مجرّب.",
    },
    whoIsFor: {
      title: "لمن هذا الهدف",
      text: "المتعلّمون الملتزمون، الأطفال، والبالغون المستعدون لممارسة يومية منتظمة.",
    },
    beginnerEntry: {
      title: "مسار الدخول للمبتدئين",
      text: "ركّز أولاً على طلاقة القراءة والنطق الأساسي، لتهيئة العقل واللسان للاستعداد للحفظ.",
    },
    pathway: {
      title: "مسار التعلّم الموصى به",
      items: ["التحضير للقراءة ← أساسيات التجويد ← مسار الحفظ"],
    },
    outcomes: {
      title: "النتائج المتوقعة",
      text: "احتفاظ قوي وطويل الأمد بسور مختارة أو بالقرآن كاملاً.",
    },
    duration: { title: "المدة المقترحة", text: "1–3+ سنوات" },
    motivation: "احمل نور القرآن في قلبك أينما ذهبت في حياتك.",
    cta: "ابدأ رحلة الحفظ",
    exploreOtherTitle: "استكشف أهداف تعلّم أخرى",
  },
  "learn-arabic": {
    slug: "learn-arabic",
    emoji: "💬",
    accent: "#1a4a6b",
    accentLight: "#eaf1f8",
    meta: {
      title: "تعلّم اللغة العربية | شبكة نبراس",
      description: "أتقن اللغة العربية للتواصل اليومي والسفر والفهم الإسلامي.",
    },
    badge: "مهارة عملية",
    hero: {
      title: "تحدّث واقرأ واكتب العربية",
      subtitle: "أتقن اللغة العربية للتواصل اليومي والسفر والفهم الإسلامي.",
    },
    whoIsFor: {
      title: "لمن هذا الهدف",
      text: "غير الناطقين بالعربية من جميع الأعمار الذين يريدون طلاقة عملية في الحياة اليومية.",
    },
    beginnerEntry: {
      title: "مسار الدخول للمبتدئين",
      text: "ابدأ بنور البيان للتعرّف على الحروف والأصوات، ثم انتقل إلى مفردات المبتدئين المطلقين.",
    },
    pathway: {
      title: "مسار التعلّم الموصى به",
      items: ["نور البيان ← أساسيات العربية ← العربية المحادثة"],
    },
    outcomes: {
      title: "النتائج المتوقعة",
      text: "طلاقة عملية للتواصل بثقة وفهم النصوص العربية.",
    },
    duration: { title: "المدة المقترحة", text: "6–12 شهراً (لكل مستوى)" },
    motivation: "افتح عالماً جديداً من التواصل وتواصل بعمق مع العالم العربي والإسلامي.",
    cta: "ابدأ تعلّم العربية",
    exploreOtherTitle: "استكشف أهداف تعلّم أخرى",
  },
  "understand-quran-arabic": {
    slug: "understand-quran-arabic",
    emoji: "🗝️",
    accent: "#7a3d10",
    accentLight: "#faf0e8",
    meta: {
      title: "فهم القرآن بالعربية | شبكة نبراس",
      description:
        "تعلّم مفردات القرآن الأكثر تكراراً لفهم الآيات دون الاعتماد على الترجمة.",
    },
    badge: "ارتباط عميق",
    hero: {
      title: "افهم القرآن مباشرة",
      subtitle:
        "تعلّم مفردات القرآن الأكثر تكراراً لفهم الآيات دون الاعتماد على الترجمة.",
    },
    whoIsFor: {
      title: "لمن هذا الهدف",
      text: "كل من يريد أن يشعر حقاً بمعنى الكلمات أثناء الصلاة والتلاوة.",
    },
    beginnerEntry: {
      title: "مسار الدخول للمبتدئين",
      text: "تعلّم قواعد القراءة العربية الأساسية وأشهر الجذور في القرآن.",
    },
    pathway: {
      title: "مسار التعلّم الموصى به",
      items: ["أساسيات العربية ← قواعد نحوية أساسية ← مسار مفردات القرآن"],
    },
    outcomes: {
      title: "النتائج المتوقعة",
      text: "فهم أكثر من 70٪ من أكثر الكلمات تكراراً في القرآن مباشرة.",
    },
    duration: { title: "المدة المقترحة", text: "6–9 أشهر" },
    motivation: "تذوّق حلاوة فهم القرآن كما نُزّل بالضبط.",
    cta: "افتح المعنى",
    exploreOtherTitle: "استكشف أهداف تعلّم أخرى",
  },
  "islamic-education": {
    slug: "islamic-education",
    emoji: "⚖️",
    accent: "#1c7a45",
    accentLight: "#e8f5ee",
    meta: {
      title: "تعليم إسلامي متكامل | شبكة نبراس",
      description:
        "مسار شامل يغطي العقيدة والأحكام اليومية والسيرة والآداب.",
    },
    badge: "شامل",
    hero: {
      title: "تعليم إسلامي متوازن",
      subtitle: "مسار شامل يغطي العقيدة والأحكام اليومية والسيرة والآداب.",
    },
    whoIsFor: {
      title: "لمن هذا الهدف",
      text: "العائلات والأفراد الذين يبحثون عن منهج إسلامي منظّم وشامل.",
    },
    beginnerEntry: {
      title: "مسار الدخول للمبتدئين",
      text: "ابدأ بأركان الإيمان الأساسية، والآداب البسيطة، وكيفية الصلاة بشكل صحيح.",
    },
    pathway: {
      title: "مسار التعلّم الموصى به",
      items: ["أساسيات الإسلام ← دراسات إسلامية للمبتدئين ← مسارات تقدّمية"],
    },
    outcomes: {
      title: "النتائج المتوقعة",
      text: "فهم متين ومتوازن للعلوم الإسلامية الأساسية وتطبيقها في الحياة اليومية.",
    },
    duration: { title: "المدة المقترحة", text: "1–2 سنة" },
    motivation: "ابنِ أساس إيمان لا يتزعزع لنفسك ولعائلتك.",
    cta: "ابدأ الدراسات الإسلامية",
    exploreOtherTitle: "استكشف أهداف تعلّم أخرى",
  },
  ijazah: {
    slug: "ijazah",
    emoji: "📜",
    accent: "#b8954a",
    accentLight: "#faf5eb",
    meta: {
      title: "شهادة الإجازة | شبكة نبراس",
      description: "وثّق تلاوتك بسلسلة متصلة من الرسول ﷺ.",
    },
    badge: "مسار علمي",
    hero: {
      title: "احصل على شهادة الإجازة",
      subtitle: "وثّق تلاوتك بسلسلة متصلة من الرسول ﷺ.",
    },
    whoIsFor: {
      title: "لمن هذا الهدف",
      text: "الحفّاظ المتقدّمون وخبراء التجويد الذين يسعون لشهادة علمية رسمية.",
    },
    beginnerEntry: {
      title: "مسار الدخول للمبتدئين",
      text: "خارطة طريق طويلة الأمد توضّح بالضبط كيف تتقدّم من التعرّف على الحروف إلى الشهادة النهائية.",
    },
    pathway: {
      title: "مسار التعلّم الموصى به",
      items: ["التحضير الأساسي ← إتقان التجويد/الحفظ ← مسار الإجازة والاختبار"],
    },
    outcomes: {
      title: "النتائج المتوقعة",
      text: "وثيقة إجازة رسمية في التلاوة أو الحفظ.",
    },
    duration: { title: "المدة المقترحة", text: "1–2+ سنة (من دخول متقدّم)" },
    motivation: "اربط صوتك بالسلسلة الذهبية لنقل القرآن.",
    cta: "اطّلع على خارطة الإجازة",
    exploreOtherTitle: "استكشف أهداف تعلّم أخرى",
  },
  "teach-kids": {
    slug: "teach-kids",
    emoji: "🧸",
    accent: "#C25B7A",
    accentLight: "#FDF0F6",
    meta: {
      title: "تعليم أطفالي | شبكة نبراس",
      description: "دروس آمنة وممتعة وجذابة عبر الإنترنت مصمّمة خصيصاً لانتباه الأطفال.",
    },
    badge: "موافقة الآباء",
    hero: {
      title: "امنح أطفالك أفضل بداية إسلامية",
      subtitle: "دروس آمنة وممتعة وجذابة عبر الإنترنت مصمّمة خصيصاً لانتباه الأطفال.",
    },
    whoIsFor: {
      title: "لمن هذا الهدف",
      text: "الآباء المشغولون الذين يريدون تعليماً إسلامياً وقرآنياً موثوقاً ومناسباً للأطفال.",
    },
    beginnerEntry: {
      title: "مسار الدخول للمبتدئين",
      text: "ألعاب حروف مناسبة للأطفال، أدعية يومية أساسية، وآداب إسلامية بسيطة.",
    },
    pathway: {
      title: "مسار التعلّم الموصى به",
      items: ["أساسيات الطفل ← برامج أطفال منظّمة ← مسارات بإرشاد الوالدين"],
    },
    outcomes: {
      title: "النتائج المتوقعة",
      text: "أطفال سعداء يحبّون تعلّم دينهم، يصلّون بشكل صحيح، ويقرؤون القرآن بدقة.",
    },
    duration: { title: "المدة المقترحة", text: "مستمر" },
    motivation: "امنح طفلك أعظم هدية: حبّ مدى الحياة للقرآن والإسلام.",
    cta: "سجّل طفلي",
    exploreOtherTitle: "استكشف أهداف تعلّم أخرى",
  },
  "master-tajweed": {
    slug: "master-tajweed",
    emoji: "🎙️",
    accent: "#0D9488",
    accentLight: "#E6F7F5",
    meta: {
      title: "إتقان التجويد والتلاوة | شبكة نبراس",
      description: "أكمل نطقك وطبّق قواعد التلاوة الكلاسيكية بإتقان.",
    },
    badge: "تركيز على الدقة",
    hero: {
      title: "أتقن قواعد التجويد",
      subtitle: "أكمل نطقك وطبّق قواعد التلاوة الكلاسيكية بإتقان.",
    },
    whoIsFor: {
      title: "لمن هذا الهدف",
      text: "القرّاء الطلقاء الذين يريدون التلاوة بدقة علمية وجمال.",
    },
    beginnerEntry: {
      title: "مسار الدخول للمبتدئين",
      text: "ثبّت أساسيات القراءة لضمان الطلاقة الأساسية قبل تطبيق القواعد المعقّدة.",
    },
    pathway: {
      title: "مسار التعلّم الموصى به",
      items: ["أساسيات القراءة ← مقدمة في التجويد ← تقدّم تدريجي نحو الإتقان"],
    },
    outcomes: {
      title: "النتائج المتوقعة",
      text: "تلاوة قرآنية خالية من الأخطاء ومتوافقة مع القواعد.",
    },
    duration: { title: "المدة المقترحة", text: "6–12 شهراً" },
    motivation: "تلُ القرآن بجمال، كما كان ينبغي أن يُسمَع.",
    cta: "أكمل تلاوتي",
    exploreOtherTitle: "استكشف أهداف تعلّم أخرى",
  },
  "learn-qiraat": {
    slug: "learn-qiraat",
    emoji: "📚",
    accent: "#1c3a2e",
    accentLight: "#e8ede9",
    meta: {
      title: "تعلّم القراءات | شبكة نبراس",
      description: "وسّع آفاقك العلمية بإتقان القراءات العشر الصحيحة.",
    },
    badge: "تخصّص متقدّم",
    hero: {
      title: "ادرس القراءات العشر",
      subtitle: "وسّع آفاقك العلمية بإتقان القراءات العشر الصحيحة.",
    },
    whoIsFor: {
      title: "لمن هذا الهدف",
      text: "العلماء المتفرّغون والحفّاظ الذين يبحثون عن دراسات قرآنية متخصّصة ومتقدّمة.",
    },
    beginnerEntry: {
      title: "مسار الدخول للمبتدئين",
      text: "خارطة طريق واضحة توضّح التحضير المطلوب في الحفظ والتجويد للأهلية لهذا المسار.",
    },
    pathway: {
      title: "مسار التعلّم الموصى به",
      items: ["إتقان التجويد ← إتمام الحفظ ← برنامج القراءات"],
    },
    outcomes: {
      title: "النتائج المتوقعة",
      text: "إتقان وشهادة في أنماط تلاوة صحيحة متعددة.",
    },
    duration: { title: "المدة المقترحة", text: "12+ شهراً (من دخول متقدّم)" },
    motivation: "اغوص في العمق اللغوي العميق للروايات القرآنية الصحيحة.",
    cta: "استكشف القراءات",
    exploreOtherTitle: "استكشف أهداف تعلّم أخرى",
  },
  "become-teacher": {
    slug: "become-teacher",
    emoji: "👨‍🏫",
    accent: "#1a4a6b",
    accentLight: "#eaf1f8",
    meta: {
      title: "أن تصبح معلّم قرآن | شبكة نبراس",
      description:
        "اكتسب المهارات والأدوات ومنهجية تدريس القرآن والعربية باحترافية.",
    },
    badge: "مسار مهني",
    hero: {
      title: "تدرّب لتصبح معلّم قرآن",
      subtitle: "اكتسب المهارات والأدوات ومنهجية تدريس القرآن والعربية باحترافية.",
    },
    whoIsFor: {
      title: "لمن هذا الهدف",
      text: "المعلّمون الطامحون، متطوّعو المجتمع، والمتعلّمون المتحمّسون.",
    },
    beginnerEntry: {
      title: "مسار الدخول للمبتدئين",
      text: "ابنِ أساسك التعليمي وطلاقة قراءتك الشخصية قبل تعلّم كيفية تعليم الآخرين.",
    },
    pathway: {
      title: "مسار التعلّم الموصى به",
      items: ["أساسيات تعليمية ← منهجية التدريس ← مسار الشهادة"],
    },
    outcomes: {
      title: "النتائج المتوقعة",
      text: "شهادة مهنية والاستعداد للتدريس عبر الإنترنت أو الحضور.",
    },
    duration: { title: "المدة المقترحة", text: "3–6 أشهر (لكل وحدة تدريس)" },
    motivation: "انتقل من كونك طالباً مدى الحياة إلى تشكيل الجيل القادم من المؤمنين.",
    cta: "ابدأ تدريب المعلّمين",
    exploreOtherTitle: "استكشف أهداف تعلّم أخرى",
  },
  "new-muslim": {
    slug: "new-muslim",
    emoji: "🤝",
    accent: "#15803d",
    accentLight: "#dcfce7",
    meta: {
      title: "إرشاد المسلم الجديد (مجاناً) | شبكة نبراس",
      description:
        "نقطة انطلاق دافئة وداعمة ومجانية بالكامل للمسلمين الجدد لتعلّم أساسيات الإيمان.",
    },
    badge: "مجاناً 100٪",
    hero: {
      title: "ترحيب بالمسلمين الجدد",
      subtitle:
        "نقطة انطلاق دافئة وداعمة ومجانية بالكامل للمسلمين الجدد لتعلّم أساسيات الإيمان.",
    },
    whoIsFor: {
      title: "لمن هذا الهدف",
      text: "المسلمون الجدد الذين يبحثون عن بيئة آمنة بلا أحكام.",
    },
    beginnerEntry: {
      title: "مسار الدخول للمبتدئين",
      text: "دخول بلا ضغط إلى الإسلام، يبدأ بأبسط المفاهيم وأهمها.",
    },
    pathway: {
      title: "مسار التعلّم الموصى به",
      items: ["أساسيات الإيمان ← تقدّم خطوة بخطوة ← الممارسات اليومية"],
    },
    outcomes: {
      title: "النتائج المتوقعة",
      text: "ثقة في العبادة اليومية والممارسات الإسلامية الأساسية.",
    },
    duration: { title: "المدة المقترحة", text: "3 أشهر (مجاناً)" },
    motivation: "أهلاً بك في العائلة. نتشرّف بأن نرشدك في أول خطواتك.",
    cta: "احصل على دروسي المجانية",
    exploreOtherTitle: "استكشف أهداف تعلّم أخرى",
  },
  "study-tafsir": {
    slug: "study-tafsir",
    emoji: "💡",
    accent: "#92400e",
    accentLight: "#fffbeb",
    meta: {
      title: "دراسة التفسير | شبكة نبراس",
      description: "اكتشف السياق التاريخي والتأملات العميقة ودروس الحياة وراء الآيات.",
    },
    badge: "نمو روحي",
    hero: {
      title: "افهم التفسير والسياق",
      subtitle: "اكتشف السياق التاريخي والتأملات العميقة ودروس الحياة وراء الآيات.",
    },
    whoIsFor: {
      title: "لمن هذا الهدف",
      text: "كل من يريد التدبّر العميق في رسالة القرآن للحياة اليومية.",
    },
    beginnerEntry: {
      title: "مسار الدخول للمبتدئين",
      text: "قصص قرآنية أساسية وتحضير مفردات بسيط قبل الغوص في النصوص الثقيلة.",
    },
    pathway: {
      title: "مسار التعلّم الموصى به",
      items: ["أساسيات القرآن ← تحضير المفردات ← أساسيات التأمل (التفسير)"],
    },
    outcomes: {
      title: "النتائج المتوقعة",
      text: "ارتباط عميق بمعاني القرآن وتطبيقها في العالم الحقيقي.",
    },
    duration: { title: "المدة المقترحة", text: "6–12 شهراً" },
    motivation: "تجاوز مجرد تلاوة الكلمات إلى عيش الرسالة حقاً.",
    cta: "اكتشف المعاني",
    exploreOtherTitle: "استكشف أهداف تعلّم أخرى",
  },
};

export function isCourseGoalSlug(slug: string): slug is CourseGoalSlug {
  return (COURSE_GOAL_SLUGS as readonly string[]).includes(slug);
}

export function getCourseGoalContent(locale: Locale, slug: CourseGoalSlug): CourseGoalContent {
  const bundle = locale === "ar" ? ar : en;
  return bundle[slug];
}

export function getAllCourseGoals(locale: Locale): CourseGoalContent[] {
  const bundle = locale === "ar" ? ar : en;
  return COURSE_GOAL_SLUGS.map((slug) => bundle[slug]);
}
