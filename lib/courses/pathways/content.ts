import type { Locale } from "@/lib/i18n/types";

export const COURSE_PATHWAY_SLUGS = [
  "quran-mastery",
  "arabic-fluency",
  "islamic-scholar",
  "kids-journey",
  "new-muslim",
  "hafiz-fast-track",
] as const;

export type CoursePathwaySlug = (typeof COURSE_PATHWAY_SLUGS)[number];

export type PathwayMetaItem = { label: string; value: string };

export type PathwayStage = {
  title: string;
  objectives?: string;
  skillsGained?: string;
  duration?: string;
  advancement?: string;
  focus?: string;
};

export type PathwayTrack = {
  title: string;
  objectives?: string;
  orderOfStudy?: string;
  duration?: string;
  revisionSystem?: string;
};

export type PathwayAgeNote = { emoji: string; label: string; text: string };

export type PathwaySubSection = {
  title: string;
  subtitle?: string;
  intro?: string;
  bulletList?: string[];
  stages?: PathwayStage[];
  tracks?: PathwayTrack[];
  ageNotes?: PathwayAgeNote[];
};

export type PathwayFaq = { question: string; answer: string };

export type PathwayCta = { label: string; href: string };

export type CoursePathwayContent = {
  slug: CoursePathwaySlug;
  emoji: string;
  accent: string;
  accentLight: string;
  meta: { title: string; description: string };
  hero: { badge: string; title: string; subtitle: string };
  overview: PathwayMetaItem[];
  sections: PathwaySubSection[];
  faqs: { title: string; items: PathwayFaq[] }[];
  ctas: PathwayCta[];
  warningNote?: string;
  exploreOtherTitle: string;
};

export type FrameworkModel = {
  emoji: string;
  title: string;
  intro: string;
  bullets: string[];
};

export type QuickToolItem = {
  icon: string;
  label: string;
  href: string;
  cta: string;
};

const en: Record<CoursePathwaySlug, CoursePathwayContent> = {
  "quran-mastery": {
    slug: "quran-mastery",
    emoji: "📖",
    accent: "#1c7a45",
    accentLight: "#e8f5ee",
    meta: {
      title: "Quran Mastery Journey | Nibras Network",
      description:
        "From your first Arabic letter to flawless, beautiful recitation — a structured pathway for reading, Tajweed, and memorization.",
    },
    hero: {
      badge: "Pathway 1",
      title: "Quran Mastery Journey",
      subtitle: "From your first Arabic letter to flawless, beautiful recitation.",
    },
    overview: [
      { label: "Who this is for", value: "Complete beginners, children, adults, and non-Arabic speakers." },
      { label: "Entry Requirements", value: "None. Start exactly where you are." },
      { label: "Flexibility", value: "You can transition between Reading and Memorization tracks at any time." },
      { label: "Weekly Recommendation", value: "2 to 3 lessons per week for steady progress." },
    ],
    sections: [
      {
        title: "A) Quran Reading & Recitation Pathway",
        stages: [
          {
            title: "Stage 0: Noorani Qaida Foundation",
            objectives: "Learn the Arabic alphabet, letter forms, and basic vowels (Harakat).",
            skillsGained: "Letter recognition, correct phonetic sounds, reading short words.",
            duration: "2–4 Months",
            advancement: "Read fully vowelled 3-letter words accurately without hesitation.",
          },
          {
            title: "Stage 1: Reading Foundations",
            objectives: "Connect words into short sentences and master basic rules (Sukoon, Shaddah, Madd).",
            skillsGained: "Smooth syllable blending, reading short Quranic phrases.",
            duration: "3–5 Months",
            advancement: "Read short Surahs from Juz Amma by looking at the Mushaf.",
          },
          {
            title: "Stage 2: Fluency Development (Tilawah)",
            objectives: "Build reading rhythm, speed, and confidence.",
            skillsGained: "Continuous reading without stuttering, recognizing word patterns.",
            duration: "4–8 Months",
            advancement: "Read full pages of the Quran fluidly with teacher approval.",
          },
          {
            title: "Stage 3: Tajweed Mastery",
            objectives: "Apply classical pronunciation rules (Ghunnah, Qalqalah, Ikhfa, etc.).",
            skillsGained: "Precision in articulation (Makharij) and rule application.",
            duration: "6–12 Months",
            advancement: "Practical oral exam applying Tajweed rules on unseen pages.",
          },
          {
            title: "Stage 4: Advanced Recitation",
            objectives: "Refine melodic rhythm and perfect all hidden Tajweed nuances.",
            duration: "Ongoing",
          },
          {
            title: "Stage 5: Ijazah Preparation (Optional)",
            objectives: "Prepare for a formal chain of transmission (Sanad) to the Prophet ﷺ.",
            duration: "1–3 Years (requires intense dedication)",
          },
        ],
      },
      {
        title: "B) Quran Memorization (Hifz) Pathway",
        intro: "Age-Specific Memorization Techniques:",
        ageNotes: [
          { emoji: "🧒", label: "Kids", text: "Gamified tracking, visual repetition, audio echo games, and high-reward systems." },
          { emoji: "🧑", label: "Teenagers", text: "Structured daily tracking apps, accountability partnerships, and habit-building." },
          { emoji: "👨", label: "Adults", text: "Flexible routines, micro-learning (memorizing 1-2 verses a day), and audio reinforcement during commutes." },
        ],
        tracks: [
          {
            title: "Track 1: Popular Surahs Path (Highly Recommended for Beginners)",
            objectives: "Memorize the most frequently recited and highly rewarding Surahs.",
            orderOfStudy:
              "Al-Fatihah → An-Nas to Ad-Duha → Ayat Al-Kursi → Last Two Verses of Al-Baqarah → Al-Mulk → Ar-Rahman → Al-Waqi'ah → Ya-Seen → Al-Kahf → Student-selected Surahs.",
            duration: "8–18 Months",
          },
          {
            title: "Track 2: Juz Amma Path",
            objectives: "Memorize the 30th part of the Quran to build confidence in daily prayers.",
            duration: "6–12 Months",
          },
          {
            title: "Track 3: Sequential Hifz Path (Full Quran)",
            objectives: "Complete memorization of the entire Quran.",
            revisionSystem: "New Lesson (Sabaq) + Recent Review (Sabqi) + Old Review (Manzil).",
            duration: "3–5 Years (depends heavily on daily commitment)",
          },
        ],
      },
    ],
    faqs: [
      {
        title: "FAQs: Reading & Recitation Pathway",
        items: [
          {
            question: "Do I have to start at Stage 0?",
            answer:
              "Not at all! Our placement test will put you in the exact stage that matches your current reading ability.",
          },
          {
            question: "Will my accent prevent me from reading correctly?",
            answer:
              "No. Our teachers specialize in helping non-Arabic speakers from all over the world adjust their articulation points (Makharij) to sound authentic.",
          },
        ],
      },
      {
        title: "FAQs: Memorization Pathway",
        items: [
          {
            question: "I forget easily. How will you help me retain what I memorize?",
            answer:
              'We never rush. We use a strict "Revision First" methodology. You will not advance to new verses until your past verses are solidified.',
          },
          {
            question: "Can I memorize the Quran if I don't know Arabic?",
            answer:
              "Absolutely. Millions of non-Arabic speakers have memorized the Quran. We ensure your reading and pronunciation are solid before starting Hifz.",
          },
        ],
      },
    ],
    ctas: [
      { label: "Start Your Quran Journey", href: "/book-trial" },
      { label: "Take Placement Test", href: "/contact?advisor=1" },
    ],
    exploreOtherTitle: "Explore Other Learning Pathways",
  },

  "arabic-fluency": {
    slug: "arabic-fluency",
    emoji: "✍️",
    accent: "#1a4a6b",
    accentLight: "#eaf1f8",
    meta: {
      title: "Arabic Fluency Journey | Nibras Network",
      description: "Read, write, speak, and understand Arabic with confidence — from zero knowledge to specialization.",
    },
    hero: {
      badge: "Pathway 2",
      title: "Arabic Fluency Journey",
      subtitle: "Read, write, speak, and understand Arabic with confidence.",
    },
    overview: [
      { label: "Who this is for", value: "Non-native speakers, reverts, professionals, and students of the Quran." },
      { label: "Entry Requirements", value: "Zero knowledge required for Stage 0." },
      { label: "Weekly Recommendation", value: "2 to 4 lessons per week for language retention." },
    ],
    sections: [
      {
        title: "Learning Stages",
        stages: [
          {
            title: "Stage 0: Noor Al-Bayan Foundation",
            objectives: "Crack the Arabic code. Learn letters, reading, and writing basics.",
            duration: "2–3 Months",
          },
          {
            title: "Stage 1: Arabic for Beginners",
            objectives: "Daily greetings, numbers, family vocabulary, and basic sentence construction.",
            duration: "3–6 Months",
          },
          {
            title: "Stage 2: Grammar Foundations (Nahw & Sarf)",
            objectives: "Understand how words change and sentences are built.",
            duration: "4–8 Months",
          },
          {
            title: "Stage 3: Quranic Arabic",
            objectives:
              "Focus on the high-frequency vocabulary used in the Quran to understand Salah without translation.",
            duration: "6–9 Months",
          },
          {
            title: "Stage 4: Specialization (Choose Your Track)",
            objectives:
              "A) Classical Arabic: Focus on historic texts, poetry, and advanced Tafsir. B) Modern Standard Arabic (MSA): Focus on news, modern literature, and professional communication.",
            duration: "Varies by track",
          },
        ],
      },
    ],
    faqs: [
      {
        title: "FAQs: Arabic Fluency Pathway",
        items: [
          {
            question: "Can I just study Quranic Arabic without learning to speak it?",
            answer:
              "Yes! You can branch into Stage 3 (Quranic Arabic) directly after Stage 1, focusing entirely on understanding the Quran rather than conversational speaking.",
          },
          {
            question: "Is Arabic too hard for adults to learn?",
            answer:
              "Arabic is highly logical. Our curriculum breaks it down into small, digestible patterns. With consistent practice, adults progress beautifully.",
          },
        ],
      },
    ],
    ctas: [{ label: "Begin Learning Arabic", href: "/book-trial" }],
    exploreOtherTitle: "Explore Other Learning Pathways",
  },

  "islamic-scholar": {
    slug: "islamic-scholar",
    emoji: "🕌",
    accent: "#7a3d10",
    accentLight: "#faf0e8",
    meta: {
      title: "Islamic Scholar Journey | Nibras Network",
      description:
        "Build a deep, authentic, and balanced understanding of your faith — modular or structured pathways.",
    },
    hero: {
      badge: "Pathway 3",
      title: "Islamic Scholar Journey",
      subtitle: "Build a deep, authentic, and balanced understanding of your faith.",
    },
    overview: [
      { label: "Who this is for", value: "New Muslims, parents, and curious minds wanting to understand their Deen." },
      { label: "Flexibility", value: "Choose a general overview, or dive deep into specific subjects." },
    ],
    sections: [
      {
        title: "Option A: Modular Pathway (Build Your Own Journey)",
        intro: "Specialize at your own pace. Perfect for advanced learners or those with specific interests. Choose from:",
        bulletList: [
          "Aqeedah (Core Beliefs)",
          "Fiqh (Daily Rulings & Worship)",
          "Tafsir (Quranic Explanation)",
          "Hadith (Prophetic Traditions)",
          "Seerah (Life of the Prophet ﷺ)",
          "Islamic Stories & Character Development",
        ],
      },
      {
        title: "Option B: Islamic General Program (Structured Pathway)",
        intro:
          "Perfect for beginners. A curated, step-by-step curriculum that blends a little bit of Aqeedah, Fiqh, Seerah, and Manners into every level.",
        bulletList: ["Level 1 takes 4–6 months", "Full completion takes 1–2 Years"],
      },
    ],
    faqs: [
      {
        title: "FAQs: Islamic Scholar Journey",
        items: [
          {
            question: "Do I need to know Arabic to study these subjects?",
            answer:
              "No. All our Islamic Studies pathways are taught in fluent English, with Arabic terminology gently introduced and explained.",
          },
        ],
      },
    ],
    ctas: [{ label: "Explore Islamic Studies", href: "/courses" }],
    exploreOtherTitle: "Explore Other Learning Pathways",
  },

  "kids-journey": {
    slug: "kids-journey",
    emoji: "👶",
    accent: "#C25B7A",
    accentLight: "#FDF0F6",
    meta: {
      title: "Kids Quran & Islamic Journey | Nibras Network",
      description:
        "A fun, engaging, and parent-friendly roadmap for young believers ages 4 to 15.",
    },
    hero: {
      badge: "Pathway 4",
      title: "Kids Quran & Islamic Journey",
      subtitle: "A fun, engaging, and parent-friendly roadmap for young believers.",
    },
    overview: [
      { label: "Who this is for", value: "Children ages 4 to 15." },
      { label: "Parent Involvement", value: "Monthly reports provided; parent presence optional after the first month." },
      { label: "Approach", value: "High-energy, gamified, and reward-driven." },
    ],
    sections: [
      {
        title: "Four-Year Roadmap",
        stages: [
          {
            title: "Year 1: Foundations",
            focus: "Noorani Qaida, learning to love the teacher, basic manners, and short daily Duas.",
          },
          {
            title: "Year 2: Building",
            focus: "Reading full words, memorizing short Surahs (Al-Fatihah, Al-Ikhlas), and stories of the Prophets.",
          },
          {
            title: "Year 3: Development",
            focus: "Quran reading fluency, Juz Amma Hifz, how to perform Wudu and Salah correctly.",
          },
          {
            title: "Year 4: Mastery",
            focus: "Introduction to Tajweed rules, deeper Islamic character (Akhlaq), and reading the Quran independently.",
          },
        ],
      },
    ],
    faqs: [
      {
        title: "FAQs: Kids Journey",
        items: [
          {
            question: "My child can't sit still for long. How do you manage this?",
            answer:
              "We use interactive digital whiteboards, frequent brain breaks, and micro-lessons (25-30 mins) specifically tailored to short attention spans.",
          },
        ],
      },
    ],
    ctas: [{ label: "Start Your Child's Journey", href: "/courses/kids-programs" }],
    exploreOtherTitle: "Explore Other Learning Pathways",
  },

  "new-muslim": {
    slug: "new-muslim",
    emoji: "🤲",
    accent: "#0D9488",
    accentLight: "#E6F7F5",
    meta: {
      title: "New Muslim (Revert) Journey | Nibras Network",
      description:
        "A warm, zero-pressure roadmap to practicing Islam confidently — with free basics for your first months.",
    },
    hero: {
      badge: "Pathway 5",
      title: "New Muslim (Revert) Journey",
      subtitle: "A warm, zero-pressure roadmap to practicing Islam confidently.",
    },
    overview: [
      { label: "Who this is for", value: "Reverts and individuals returning to the basics of faith." },
      { label: "Pacing", value: "Entirely dictated by the student's comfort level. No rushing." },
    ],
    sections: [
      {
        title: "Your Two-Year Roadmap",
        stages: [
          {
            title: "Months 1–5: Islam Basics (FREE)",
            focus: "How to pray, core beliefs (Aqeedah), purification, and emotional support.",
          },
          {
            title: "Months 6–12: Reading Foundations",
            focus: "Learning the Arabic alphabet slowly, reading short words.",
          },
          {
            title: "Months 13–18: Arabic + Salah Integration",
            focus: "Understanding what is said in prayer, reading short Surahs.",
          },
          {
            title: "Months 19–24: Recitation + Fiqh",
            focus: "Reading the Quran confidently, fasting rules, Zakat, and daily lifestyle Fiqh.",
          },
        ],
      },
    ],
    faqs: [
      {
        title: "FAQs: New Muslim Journey",
        items: [
          {
            question: "Is the first stage really free?",
            answer:
              "Yes. We believe your first steps in Islam should be fully supported by the community. No credit card required for the Basics track.",
          },
        ],
      },
    ],
    ctas: [{ label: "Claim Your Free Welcome Lessons", href: "/book-trial?program=new-muslim" }],
    exploreOtherTitle: "Explore Other Learning Pathways",
  },

  "hafiz-fast-track": {
    slug: "hafiz-fast-track",
    emoji: "⚡",
    accent: "#B8860B",
    accentLight: "#fef9ec",
    meta: {
      title: "Hafiz Fast-Track Intensive | Nibras Network",
      description:
        "For the highly dedicated — accelerate your memorization with extreme accountability and structured revision.",
    },
    hero: {
      badge: "Pathway 6",
      title: "Hafiz Fast-Track Intensive",
      subtitle: "For the highly dedicated. Accelerate your memorization with extreme accountability.",
    },
    overview: [
      {
        label: "Who this is for",
        value: "Gap-year students, highly disciplined adults, and ambitious teens.",
      },
      {
        label: "Entry Requirements",
        value: "Flawless Quranic reading, basic Tajweed knowledge, and passing an interview assessment.",
      },
      {
        label: "Weekly Expectations",
        value: "4 to 6 live classes per week + 2 hours of daily self-study.",
      },
      {
        label: "Accountability",
        value:
          "Strict tracking. Missed revisions mean pausing new lessons until the foundation is secure again. We prioritize retention over speed.",
      },
      {
        label: "Progress Rules",
        value:
          "Students who cannot maintain the intensive pace are gently transitioned to the standard Hifz pathway to prevent burnout.",
      },
    ],
    sections: [],
    faqs: [
      {
        title: "FAQs: Fast-Track Intensive",
        items: [
          {
            question: "Can I memorize the whole Quran in 1 year?",
            answer:
              "While mechanically possible, it requires 4-6 hours of daily dedication. We set realistic goals based on your actual availability during the assessment.",
          },
        ],
      },
    ],
    ctas: [{ label: "Apply for the Intensive Track", href: "/contact?advisor=1" }],
    warningNote: "Limited: 20 spots/year · Entrance exam required",
    exploreOtherTitle: "Explore Other Learning Pathways",
  },
};

const ar: Record<CoursePathwaySlug, CoursePathwayContent> = {
  "quran-mastery": {
    slug: "quran-mastery",
    emoji: "📖",
    accent: "#1c7a45",
    accentLight: "#e8f5ee",
    meta: {
      title: "رحلة إتقان القرآن | شبكة نبراس",
      description: "من أول حرف عربي إلى تلاوة جميلة بلا عيوب — مسار منظّم للقراءة والتجويد والحفظ.",
    },
    hero: {
      badge: "المسار 1",
      title: "رحلة إتقان القرآن",
      subtitle: "من أول حرف عربي إلى تلاوة جميلة بلا عيوب.",
    },
    overview: [
      { label: "لمن هذا المسار", value: "المبتدئون تماماً، الأطفال، البالغون، وغير الناطقين بالعربية." },
      { label: "متطلبات الدخول", value: "لا يوجد. ابدأ من حيث أنت الآن." },
      { label: "المرونة", value: "يمكنك الانتقال بين مسار القراءة والحفظ في أي وقت." },
      { label: "التوصية الأسبوعية", value: "2 إلى 3 حصص أسبوعياً لتقدّم ثابت." },
    ],
    sections: [
      {
        title: "أ) مسار قراءة القرآن والتلاوة",
        stages: [
          {
            title: "المرحلة 0: أساس القاعدة النورانية",
            objectives: "تعلّم الحروف العربية وأشكالها والحركات الأساسية.",
            skillsGained: "تمييز الحروف، الأصوات الصحيحة، قراءة كلمات قصيرة.",
            duration: "2–4 أشهر",
            advancement: "قراءة كلمات من ثلاثة أحرف مشكّلة بدقة دون تردّد.",
          },
          {
            title: "المرحلة 1: أساسيات القراءة",
            objectives: "ربط الكلمات في جمل قصيرة وإتقان القواعد الأساسية (السكون، الشدة، المد).",
            skillsGained: "دمج المقاطع بسلاسة، قراءة عبارات قرآنية قصيرة.",
            duration: "3–5 أشهر",
            advancement: "قراءة سور قصيرة من جزء عم بالنظر في المصحف.",
          },
          {
            title: "المرحلة 2: تطوير الطلاقة (التلاوة)",
            objectives: "بناء إيقاع القراءة والسرعة والثقة.",
            skillsGained: "قراءة متصلة دون تلعثم، التعرّف على أنماط الكلمات.",
            duration: "4–8 أشهر",
            advancement: "قراءة صفحات كاملة من القرآن بسلاسة بموافقة المعلّم.",
          },
          {
            title: "المرحلة 3: إتقان التجويد",
            objectives: "تطبيق قواعد النطق الكلاسيكية (الغنّة، القلقلة، الإخفاء، وغيرها).",
            skillsGained: "الدقة في مخارج الحروف وتطبيق القواعد.",
            duration: "6–12 شهراً",
            advancement: "اختبار شفهي عملي لتطبيق قواعد التجويد على صفحات غير مسبوقة.",
          },
          {
            title: "المرحلة 4: التلاوة المتقدّمة",
            objectives: "صقل الإيقاع اللحني وإتقان تفاصيل التجويد الدقيقة.",
            duration: "مستمر",
          },
          {
            title: "المرحلة 5: التحضير للإجازة (اختياري)",
            objectives: "الاستعداد لسلسلة إسناد رسمية إلى النبي ﷺ.",
            duration: "1–3 سنوات (يتطلّب التزاماً مكثّفاً)",
          },
        ],
      },
      {
        title: "ب) مسار حفظ القرآن (الحفظ)",
        intro: "تقنيات الحفظ حسب العمر:",
        ageNotes: [
          { emoji: "🧒", label: "الأطفال", text: "تتبّع gamified، تكرار بصري، ألعاب صدى صوتي، ونظام مكافآت عالٍ." },
          { emoji: "🧑", label: "المراهقون", text: "تطبيقات تتبّع يومية منظّمة، شراكات مساءلة، وبناء عادات." },
          { emoji: "👨", label: "البالغون", text: "روتين مرن، تعلّم مصغّر (1–2 آية يومياً)، وتعزيز صوتي أثناء التنقّل." },
        ],
        tracks: [
          {
            title: "المسار 1: السور الشائعة (موصى به للمبتدئين)",
            objectives: "حفظ السور الأكثر تلاوةً وأجراً.",
            orderOfStudy:
              "الفاتحة → الناس إلى الضحى → آية الكرسي → آخر آيتين من البقرة → الملك → الرحمن → الواقعة → يس → الكهف → سور يختارها الطالب.",
            duration: "8–18 شهراً",
          },
          {
            title: "المسار 2: جزء عم",
            objectives: "حفظ الجزء الثلاثين لبناء الثقة في الصلوات اليومية.",
            duration: "6–12 شهراً",
          },
          {
            title: "المسار 3: الحفظ المتسلسل (القرآن كاملاً)",
            objectives: "إتمام حفظ القرآن الكريم كاملاً.",
            revisionSystem: "الدرس الجديد (سبق) + المراجعة القريبة (سبقي) + المراجعة البعيدة (منزل).",
            duration: "3–5 سنوات (يعتمد بشكل كبير على الالتزام اليومي)",
          },
        ],
      },
    ],
    faqs: [
      {
        title: "أسئلة شائعة: مسار القراءة والتلاوة",
        items: [
          {
            question: "هل يجب أن أبدأ من المرحلة 0؟",
            answer: "لا على الإطلاق! اختبار تحديد المستوى يضعك في المرحلة التي تناسب قدرتك الحالية في القراءة.",
          },
          {
            question: "هل لهجتي تمنعني من القراءة الصحيحة؟",
            answer:
              "لا. معلّمونا متخصّصون في مساعدة غير الناطقين بالعربية من جميع أنحاء العالم على ضبط مخارج الحروف لتبدو أصيلة.",
          },
        ],
      },
      {
        title: "أسئلة شائعة: مسار الحفظ",
        items: [
          {
            question: "أنسى بسهولة. كيف ستساعدونني على الاحتفاظ بما أحفظه؟",
            answer:
              'لا نتسرّع أبداً. نستخدم منهجية صارمة "المراجعة أولاً". لن تتقدّم لآيات جديدة حتى تتثبّت آياتك السابقة.',
          },
          {
            question: "هل يمكنني حفظ القرآن دون معرفة العربية؟",
            answer:
              "بالتأكيد. ملايين غير الناطقين بالعربية حفظوا القرآن. نضمن أن قراءتك ونطقك متينان قبل بدء الحفظ.",
          },
        ],
      },
    ],
    ctas: [
      { label: "ابدأ رحلتك القرآنية", href: "/book-trial" },
      { label: "اختبار تحديد المستوى", href: "/contact?advisor=1" },
    ],
    exploreOtherTitle: "استكشف مسارات تعلّم أخرى",
  },

  "arabic-fluency": {
    slug: "arabic-fluency",
    emoji: "✍️",
    accent: "#1a4a6b",
    accentLight: "#eaf1f8",
    meta: {
      title: "رحلة الطلاقة بالعربية | شبكة نبراس",
      description: "اقرأ واكتب وتكلّم وافهم العربية بثقة — من الصفر إلى التخصّص.",
    },
    hero: {
      badge: "المسار 2",
      title: "رحلة الطلاقة بالعربية",
      subtitle: "اقرأ واكتب وتكلّم وافهم العربية بثقة.",
    },
    overview: [
      { label: "لمن هذا المسار", value: "غير الناطقين بالعربية، المسلمون الجدد، المهنيون، وطلاب القرآن." },
      { label: "متطلبات الدخول", value: "لا معرفة مطلوبة للمرحلة 0." },
      { label: "التوصية الأسبوعية", value: "2 إلى 4 حصص أسبوعياً للاحتفاظ باللغة." },
    ],
    sections: [
      {
        title: "مراحل التعلّم",
        stages: [
          {
            title: "المرحلة 0: أساس نور البيان",
            objectives: "فك شفرة العربية. تعلّم الحروف والقراءة والكتابة الأساسية.",
            duration: "2–3 أشهر",
          },
          {
            title: "المرحلة 1: العربية للمبتدئين",
            objectives: "تحيات يومية، أرقام، مفردات العائلة، وبناء جمل بسيطة.",
            duration: "3–6 أشهر",
          },
          {
            title: "المرحلة 2: أساسيات النحو والصرف",
            objectives: "فهم كيف تتغيّر الكلمات وكيف تُبنى الجمل.",
            duration: "4–8 أشهر",
          },
          {
            title: "المرحلة 3: العربية القرآنية",
            objectives: "التركيز على المفردات عالية التكرار في القرآن لفهم الصلاة دون ترجمة.",
            duration: "6–9 أشهر",
          },
          {
            title: "المرحلة 4: التخصّص (اختر مسارك)",
            objectives:
              "أ) العربية الفصحى التراثية: نصوص تاريخية وشعر وتفسير متقدّم. ب) العربية الفصحى الحديثة: أخبار وأدب حديث وتواصل مهني.",
            duration: "يختلف حسب المسار",
          },
        ],
      },
    ],
    faqs: [
      {
        title: "أسئلة شائعة: مسار الطلاقة بالعربية",
        items: [
          {
            question: "هل يمكنني دراسة العربية القرآنية دون تعلّم المحادثة؟",
            answer:
              "نعم! يمكنك الانتقال للمرحلة 3 (العربية القرآنية) مباشرة بعد المرحلة 1، مع التركيز على فهم القرآن دون المحادثة.",
          },
          {
            question: "هل العربية صعبة جداً على البالغين؟",
            answer:
              "العربية منطقية للغاية. منهجنا يقسّمها إلى أنماط صغيرة قابلة للهضم. مع الممارسة المستمرة، يتقدّم البالغون بشكل جميل.",
          },
        ],
      },
    ],
    ctas: [{ label: "ابدأ تعلّم العربية", href: "/book-trial" }],
    exploreOtherTitle: "استكشف مسارات تعلّم أخرى",
  },

  "islamic-scholar": {
    slug: "islamic-scholar",
    emoji: "🕌",
    accent: "#7a3d10",
    accentLight: "#faf0e8",
    meta: {
      title: "رحلة العالمية الشرعية | شبكة نبراس",
      description: "ابنِ فهماً عميقاً وأصيلاً ومتوازناً لدينك — مسارات وحدات أو منظّمة.",
    },
    hero: {
      badge: "المسار 3",
      title: "رحلة العالمية الشرعية",
      subtitle: "ابنِ فهماً عميقاً وأصيلاً ومتوازناً لدينك.",
    },
    overview: [
      { label: "لمن هذا المسار", value: "المسلمون الجدد، الآباء، والفضوليون الراغبون في فهم دينهم." },
      { label: "المرونة", value: "اختر نظرة عامة، أو تعمّق في مواضيع محدّدة." },
    ],
    sections: [
      {
        title: "الخيار أ: المسار الوحداتي (ابنِ رحلتك)",
        intro: "تخصّص بوتيرتك. مثالي للمتقدّمين أو من لديهم اهتمامات محدّدة. اختر من:",
        bulletList: [
          "العقيدة (الإيمان الأساسي)",
          "الفقه (الأحكام اليومية والعبادات)",
          "التفسير (شرح القرآن)",
          "الحديث (السنّة النبوية)",
          "السيرة (حياة النبي ﷺ)",
          "القصص الإسلامية وبناء الشخصية",
        ],
      },
      {
        title: "الخيار ب: البرنامج الإسلامي العام (مسار منظّم)",
        intro:
          "مثالي للمبتدئين. منهج مُنتقى خطوة بخطوة يمزج العقيدة والفقه والسيرة والآداب في كل مستوى.",
        bulletList: ["المستوى 1 يستغرق 4–6 أشهر", "الإتمام الكامل يستغرق 1–2 سنة"],
      },
    ],
    faqs: [
      {
        title: "أسئلة شائعة: رحلة العالمية الشرعية",
        items: [
          {
            question: "هل أحتاج معرفة العربية لدراسة هذه المواد؟",
            answer:
              "لا. جميع مسارات الدراسات الإسلامية تُدرَّس بالإنجليزية بطلاقة، مع تقديم المصطلحات العربية بلطف وشرحها.",
          },
        ],
      },
    ],
    ctas: [{ label: "استكشف الدراسات الإسلامية", href: "/courses" }],
    exploreOtherTitle: "استكشف مسارات تعلّم أخرى",
  },

  "kids-journey": {
    slug: "kids-journey",
    emoji: "👶",
    accent: "#C25B7A",
    accentLight: "#FDF0F6",
    meta: {
      title: "رحلة القرآن والتربية للأطفال | شبكة نبراس",
      description: "خارطة طريق ممتعة وجذّابة وصديقة للوالدين للمؤمنين الصغار من 4 إلى 15 سنة.",
    },
    hero: {
      badge: "المسار 4",
      title: "رحلة القرآن والتربية للأطفال",
      subtitle: "خارطة طريق ممتعة وجذّابة وصديقة للوالدين للمؤمنين الصغار.",
    },
    overview: [
      { label: "لمن هذا المسار", value: "الأطفال من 4 إلى 15 سنة." },
      { label: "مشاركة الوالدين", value: "تقارير شهرية؛ حضور الوالد اختياري بعد الشهر الأول." },
      { label: "الأسلوب", value: "طاقة عالية، gamified، ومحفّز بالمكافآت." },
    ],
    sections: [
      {
        title: "خارطة الطريق لأربع سنوات",
        stages: [
          {
            title: "السنة 1: الأساس",
            focus: "القاعدة النورانية، حب المعلّم، الآداب الأساسية، وأدعية يومية قصيرة.",
          },
          {
            title: "السنة 2: البناء",
            focus: "قراءة كلمات كاملة، حفظ سور قصيرة (الفاتحة، الإخلاص)، وقصص الأنبياء.",
          },
          {
            title: "السنة 3: التطوير",
            focus: "طلاقة قراءة القرآن، حفظ جزء عم، وكيفية الوضوء والصلاة بشكل صحيح.",
          },
          {
            title: "السنة 4: الإتقان",
            focus: "مقدمة في قواعد التجويد، أخلاق إسلامية أعمق، وقراءة القرآن باستقلالية.",
          },
        ],
      },
    ],
    faqs: [
      {
        title: "أسئلة شائعة: رحلة الأطفال",
        items: [
          {
            question: "طفلي لا يستطيع الجلوس طويلاً. كيف تتعاملون مع هذا؟",
            answer:
              "نستخدم سبورات تفاعلية، فترات راحة متكرّرة، ودروس مصغّرة (25–30 دقيقة) مصمّمة خصيصاً لقصر مدّة التركيز.",
          },
        ],
      },
    ],
    ctas: [{ label: "ابدأ رحلة طفلك", href: "/courses/kids-programs" }],
    exploreOtherTitle: "استكشف مسارات تعلّم أخرى",
  },

  "new-muslim": {
    slug: "new-muslim",
    emoji: "🤲",
    accent: "#0D9488",
    accentLight: "#E6F7F5",
    meta: {
      title: "رحلة المسلم الجديد | شبكة نبراس",
      description: "خارطة طريق دافئة بلا ضغط لممارسة الإسلام بثقة — مع أساسيات مجانية لأشهرك الأولى.",
    },
    hero: {
      badge: "المسار 5",
      title: "رحلة المسلم الجديد",
      subtitle: "خارطة طريق دافئة بلا ضغط لممارسة الإسلام بثقة.",
    },
    overview: [
      { label: "لمن هذا المسار", value: "المسلمون الجدد والعائدون لأساسيات الإيمان." },
      { label: "الوتيرة", value: "تحدّدها راحة الطالب بالكامل. لا تسرّع." },
    ],
    sections: [
      {
        title: "خارطة طريق سنتين",
        stages: [
          {
            title: "الأشهر 1–5: أساسيات الإسلام (مجاناً)",
            focus: "كيفية الصلاة، العقيدة الأساسية، الطهارة، والدعم العاطفي.",
          },
          {
            title: "الأشهر 6–12: أساسيات القراءة",
            focus: "تعلّم الحروف العربية ببطء، قراءة كلمات قصيرة.",
          },
          {
            title: "الأشهر 13–18: العربية + دمج الصلاة",
            focus: "فهم ما يُقال في الصلاة، قراءة سور قصيرة.",
          },
          {
            title: "الأشهر 19–24: التلاوة + الفقه",
            focus: "قراءة القرآن بثقة، أحكام الصيام والزكاة، وفقه الحياة اليومية.",
          },
        ],
      },
    ],
    faqs: [
      {
        title: "أسئلة شائعة: رحلة المسلم الجديد",
        items: [
          {
            question: "هل المرحلة الأولى مجانية حقاً؟",
            answer:
              "نعم. نؤمن أن خطواتك الأولى في الإسلام يجب أن يدعمها المجتمع بالكامل. لا حاجة لبطاقة ائتمان لمسار الأساسيات.",
          },
        ],
      },
    ],
    ctas: [{ label: "احصل على دروس الترحيب المجانية", href: "/book-trial?program=new-muslim" }],
    exploreOtherTitle: "استكشف مسارات تعلّم أخرى",
  },

  "hafiz-fast-track": {
    slug: "hafiz-fast-track",
    emoji: "⚡",
    accent: "#B8860B",
    accentLight: "#fef9ec",
    meta: {
      title: "المسار المكثّف لإتمام الحفظ | شبكة نبراس",
      description: "للمتفانين — سرّع حفظك بمساءلة صارمة ومراجعة منظّمة.",
    },
    hero: {
      badge: "المسار 6",
      title: "المسار المكثّف لإتمام الحفظ",
      subtitle: "للمتفانين. سرّع حفظك بمساءلة صارمة.",
    },
    overview: [
      { label: "لمن هذا المسار", value: "طلاب سنة الفراغ، البالغون المنضبطون، والمراهقون الطموحون." },
      {
        label: "متطلبات الدخول",
        value: "قراءة قرآنية بلا عيوب، معرفة تجويد أساسية، واجتياز مقابلة تقييم.",
      },
      { label: "التوقعات الأسبوعية", value: "4 إلى 6 حصص مباشرة أسبوعياً + ساعتان دراسة ذاتية يومياً." },
      {
        label: "المساءلة",
        value:
          "تتبّع صارم. المراجعات الفائتة تعني إيقاف الدروس الجديدة حتى يتثبّت الأساس. نُعطي الأولوية للاحتفاظ لا للسرعة.",
      },
      {
        label: "قواعد التقدّم",
        value:
          "من لا يستطيعون الحفاظ على الوتيرة المكثّفة يُنتقلون بلطف للمسار القياسي للحفظ لمنع الإرهاق.",
      },
    ],
    sections: [],
    faqs: [
      {
        title: "أسئلة شائعة: المسار المكثّف",
        items: [
          {
            question: "هل يمكنني حفظ القرآن كاملاً في سنة واحدة؟",
            answer:
              "رغم إمكانيته نظرياً، يتطلّب 4–6 ساعات يومياً. نضع أهدافاً واقعية بناءً على توفّرك الفعلي أثناء التقييم.",
          },
        ],
      },
    ],
    ctas: [{ label: "قدّم للمسار المكثّف", href: "/contact?advisor=1" }],
    warningNote: "محدود: 20 مقعداً سنوياً · يشترط اختبار قبول",
    exploreOtherTitle: "استكشف مسارات تعلّم أخرى",
  },
};

const frameworkEn: FrameworkModel[] = [
  {
    emoji: "📊",
    title: "Performance-Based Assessment Model",
    intro: "We believe progression depends on readiness, not just time. Every student learns at their own pace. You advance to the next level based on:",
    bullets: [
      "Live Oral Evaluations: Teacher assessments of your reading/speaking accuracy.",
      "Consistent Engagement: Lesson attendance and classroom participation.",
      "Practical Application: Homework completion and practical performance (e.g., praying correctly, applying Tajweed rules).",
      "Structured Quizzes & Reviews: Gentle, stress-free check-ins to ensure concepts are mastered before moving forward.",
    ],
  },
  {
    emoji: "🏆",
    title: "Certification & Recognition Model",
    intro: "We celebrate every milestone to keep motivation high, especially for children and beginners:",
    bullets: [
      "Achievement Badges: Earned for completing specific Surahs, topics, or vocabulary lists.",
      "Stage Completion Certificates: Official academy recognition after passing stage assessments.",
      "Level Mastery Certificates: Awarded upon completing an entire learning pathway.",
      "Monthly Parent Reports: Transparent updates showing exactly what your child mastered and what needs practice.",
    ],
  },
  {
    emoji: "💻",
    title: "Modern Learning Tools",
    intro: "Our pathways are supported by a premium, international-standard digital learning environment:",
    bullets: [
      "Interactive Whiteboards & Visual Tools: Keeping visual learners and children highly engaged.",
      "Progress Dashboards: Track your own (or your child's) journey in real-time.",
      "Recorded Lessons: Re-watch your 1-on-1 sessions for better retention.",
      "Gamification & Rewards: Digital stars and points for young learners.",
      "Smart Revision Systems: Audio repetition, digital flashcards, and structured homework portals.",
    ],
  },
];

const frameworkAr: FrameworkModel[] = [
  {
    emoji: "📊",
    title: "نموذج التقييم القائم على الأداء",
    intro: "نؤمن أن التقدّم يعتمد على الجاهزية لا الوقت فقط. كل طالب يتعلّم بوتيرته. تتقدّم للمستوى التالي بناءً على:",
    bullets: [
      "تقييمات شفهية مباشرة: تقييم المعلّم لدقة قراءتك ونطقك.",
      "مشاركة مستمرة: حضور الحصص والمشاركة الصفية.",
      "تطبيق عملي: إنجاز الواجبات والأداء العملي (مثل الصلاة الصحيحة وتطبيق قواعد التجويد).",
      "اختبارات ومراجعات منظّمة: متابعة لطيفة بلا ضغط لضمان إتقان المفاهيم قبل الانتقال.",
    ],
  },
  {
    emoji: "🏆",
    title: "نموذج الشهادات والتقدير",
    intro: "نحتفل بكل إنجاز لإبقاء الحماس عالياً، خاصة للأطفال والمبتدئين:",
    bullets: [
      "شارات الإنجاز: تُكتسب عند إتمام سور أو مواضيع أو قوائم مفردات محدّدة.",
      "شهادات إتمام المرحلة: اعتراف أكاديمي رسمي بعد اجتياز تقييمات المرحلة.",
      "شهادات إتقان المستوى: تُمنح عند إكمال مسار تعلّم كامل.",
      "تقارير شهرية للوالدين: تحديثات شفافة توضّح ما أتقنه طفلك وما يحتاج ممارسة.",
    ],
  },
  {
    emoji: "💻",
    title: "أدوات التعلّم الحديثة",
    intro: "مساراتنا مدعومة ببيئة تعلّم رقمية عالمية المستوى:",
    bullets: [
      "سبورات تفاعلية وأدوات بصرية: إبقاء المتعلّمين البصريين والأطفال منخرطين.",
      "لوحات تقدّم: تتبّع رحلتك (أو رحلة طفلك) في الوقت الفعلي.",
      "حصص مسجّلة: أعد مشاهدة جلساتك الفردية لاحتفاظ أفضل.",
      "Gamification ومكافآت: نجوم ونقاط رقمية للمتعلّمين الصغار.",
      "أنظمة مراجعة ذكية: تكرار صوتي، بطاقات رقمية، وبوابات واجبات منظّمة.",
    ],
  },
];

const quickToolsEn: QuickToolItem[] = [
  { icon: "ClipboardList", label: "Course Finder Quiz", href: "/course-finder", cta: "Take Quiz" },
  { icon: "Search", label: "Search Filters", href: "/courses/search", cta: "Browse Courses" },
  { icon: "BarChart2", label: "Compare Programs", href: "/courses/compare", cta: "Compare" },
  { icon: "Download", label: "Download Catalog", href: "/courses/catalog.pdf", cta: "Download PDF" },
  { icon: "GraduationCap", label: "Academic Consultation", href: "/contact?advisor=1", cta: "Book a Call" },
];

const quickToolsAr: QuickToolItem[] = [
  { icon: "ClipboardList", label: "اختبار اختيار الدورة", href: "/course-finder", cta: "ابدأ الاختبار" },
  { icon: "Search", label: "فلاتر البحث", href: "/courses/search", cta: "تصفّح الدورات" },
  { icon: "BarChart2", label: "مقارنة البرامج", href: "/courses/compare", cta: "قارن" },
  { icon: "Download", label: "تحميل الكتالوج", href: "/courses/catalog.pdf", cta: "تحميل PDF" },
  { icon: "GraduationCap", label: "استشارة أكاديمية", href: "/contact?advisor=1", cta: "احجز مكالمة" },
];

const labels = {
  en: {
    frameworkTitle: "How Our Pathways Work",
    quickToolsTitle: "Quick Tools to Guide You",
    objectives: "Objectives",
    skillsGained: "Skills Gained",
    duration: "Duration",
    advancement: "Advancement",
    focus: "Focus",
    orderOfStudy: "Order of Study",
    revisionSystem: "Revision System",
    talkToAdvisor: "Talk to Advisor",
  },
  ar: {
    frameworkTitle: "كيف تعمل مساراتنا",
    quickToolsTitle: "أدوات سريعة لإرشادك",
    objectives: "الأهداف",
    skillsGained: "المهارات المكتسبة",
    duration: "المدة",
    advancement: "التقدّم",
    focus: "التركيز",
    orderOfStudy: "ترتيب الدراسة",
    revisionSystem: "نظام المراجعة",
    talkToAdvisor: "تحدّث مع مستشار",
  },
} as const;

export function isCoursePathwaySlug(slug: string): slug is CoursePathwaySlug {
  return (COURSE_PATHWAY_SLUGS as readonly string[]).includes(slug);
}

export function getCoursePathwayContent(locale: Locale, slug: CoursePathwaySlug): CoursePathwayContent {
  const pack = locale === "ar" ? ar : en;
  return pack[slug];
}

export function getAllCoursePathways(locale: Locale): CoursePathwayContent[] {
  return COURSE_PATHWAY_SLUGS.map((slug) => getCoursePathwayContent(locale, slug));
}

export function getPathwayFramework(locale: Locale): FrameworkModel[] {
  return locale === "ar" ? frameworkAr : frameworkEn;
}

export function getPathwayQuickTools(locale: Locale): QuickToolItem[] {
  return locale === "ar" ? quickToolsAr : quickToolsEn;
}

export function getPathwayLabels(locale: Locale) {
  return locale === "ar" ? labels.ar : labels.en;
}
