import type { Locale } from "@/lib/i18n/types";

export const TUTOR_MEDIA = {
  video: "/videos/WhatsApp Video 2026-06-07 at 10.24.51 PM.mp4",
  poster: "/videos/WhatsApp Image 2026-06-07 at 10.24.51 PM.jpeg",
} as const;

export type TutorHighlight = {
  icon: "mic" | "book" | "heart" | "award" | "users" | "sparkles";
  title: string;
  text: string;
};

export type FeatureSection = {
  number: number;
  title: string;
  intro: string;
  lists: { heading: string; items: string[] }[];
  closing?: string;
};

export type TutorProfile = {
  id: string;
  name: string;
  role: string;
  teachingAreas: string[];
  background?: string;
  philosophy?: string;
  teachingStyle: string[];
  bestFor: string[];
  languages?: string;
  experience?: string;
  initial: string;
  tint: string;
};

export type TutorsPageCopy = {
  meta: { title: string; description: string };
  heroBadge: string;
  heroTitle: string;
  whyChoose: string[];
  whatMakesDifferent: {
    title: string;
    intro: string;
    items: string[];
  };
  heroCTAs: { label: string; href: string }[];
  showcaseTitle: string;
  showcaseCaption: string;
  videoAria: string;
  features: FeatureSection[];
  tutorsSectionTitle: string;
  teachingAreasLabel: string;
  backgroundLabel: string;
  philosophyLabel: string;
  styleLabel: string;
  bestForLabel: string;
  languagesLabel: string;
  experienceLabel: string;
  tutors: TutorProfile[];
  promise: {
    title: string;
    intro: string;
    items: string[];
  };
  finalCTAs: { label: string; href: string }[];
};

const en: TutorsPageCopy = {
  meta: {
    title: "Our Tutors | Nibras Network Academy",
    description:
      "Meet Nibras Network Academy's qualified male and female Quran, Arabic, and Islamic Studies tutors — personalized matching, continuous development, and student-centered learning.",
  },
  heroBadge: "Our Tutors",
  heroTitle: "Why Students & Families Choose Nibras Tutors",
  whyChoose: [
    "Qualified male and female instructors",
    "Specialized in teaching non-Arabic speakers",
    "Personalized tutor matching system",
    "Supportive and student-centered learning",
    "Continuous professional development",
    "Flexible learning approaches for all ages",
    "Structured academic supervision and quality assurance",
  ],
  whatMakesDifferent: {
    title: "What Makes Our Teaching Different?",
    intro: "We believe that effective education is personal. That is why our system focuses on:",
    items: [
      "Student personality matching",
      "Goal-based tutor recommendations",
      "Learning style compatibility",
      "Cultural understanding",
      "Flexible educational pathways",
      "Long-term student support",
    ],
  },
  heroCTAs: [
    { label: "Meet Your Tutor", href: "/book-trial" },
    { label: "Book A Trial Lesson", href: "/book-trial" },
    { label: "Get Personalized Recommendations", href: "/book-trial" },
  ],
  showcaseTitle: "See Our Tutors in Action",
  showcaseCaption:
    "A real snippet from one of our live sessions — warm interaction, clear pronunciation, and a classroom feel from home.",
  videoAria: "Video preview of a Nibras Network tutoring session",
  features: [
    {
      number: 1,
      title: "Qualified Male & Female Tutors For Every Learning Journey",
      intro:
        "We understand that every student has unique preferences, learning needs, and cultural considerations. That is why Nibras Network Academy provides carefully selected male and female tutors.",
      lists: [
        {
          heading: "Specialized in:",
          items: [
            "Quran Reading & Recitation",
            "Tajweed & Qira'at",
            "Hifz Programs",
            "Arabic Language",
            "Islamic Studies",
            "Kids Education",
            "New Muslim Programs",
          ],
        },
        {
          heading: "Our teachers work with:",
          items: [
            "Early learners",
            "Children & teenagers",
            "Adults",
            "Parents",
            "International students",
            "Advanced learners",
          ],
        },
      ],
      closing:
        "Our mission is simple: Connect every learner with the educator who best supports their success.",
    },
    {
      number: 2,
      title: "Expertise In Teaching Non-Arabic Speakers",
      intro:
        "Teaching non-Arabic speakers requires more than subject expertise.",
      lists: [
        {
          heading: "Our educators are trained to work with:",
          items: [
            "Complete beginners",
            "Students unfamiliar with Arabic script",
            "Diverse language backgrounds",
            "Different learning speeds",
            "Students from multiple cultures and countries",
          ],
        },
        {
          heading: "Teaching strategies may include:",
          items: [
            "Simplified explanations",
            "Visual learning methods",
            "Audio repetition techniques",
            "Interactive exercises",
            "Gradual progression systems",
            "Practical applications",
          ],
        },
      ],
      closing: "Learning should feel achievable—not overwhelming.",
    },
    {
      number: 3,
      title: "Personalized Tutor Matching System",
      intro: "Every learner learns differently.",
      lists: [
        {
          heading: "Our academic team recommends tutors based on:",
          items: [
            "Learning goals",
            "Age group",
            "Current level",
            "Native language",
            "Preferred teaching style",
            "Schedule availability",
            "Learning pace",
            "Personality compatibility",
          ],
        },
      ],
      closing:
        "If a student feels another teaching approach may be more suitable, additional tutor recommendations can be provided. Because successful learning often begins with the right educational connection.",
    },
    {
      number: 4,
      title: "Student-Centered Teaching Philosophy",
      intro:
        "We believe students learn best when they feel comfortable, supported, and motivated.",
      lists: [
        {
          heading: "Our educational philosophy focuses on:",
          items: [
            "Patience and empathy",
            "Respectful communication",
            "Positive reinforcement",
            "Confidence building",
            "Interactive participation",
            "Step-by-step progression",
          ],
        },
        {
          heading: "Our tutors aim to create classrooms that feel:",
          items: [
            "Safe",
            "Encouraging",
            "Interactive",
            "Structured",
            "Enjoyable",
          ],
        },
      ],
    },
    {
      number: 5,
      title: "Continuous Training & Professional Development",
      intro: "Educational excellence requires continuous improvement.",
      lists: [
        {
          heading:
            "Nibras tutors participate in ongoing professional development covering:",
          items: [
            "Modern teaching methodologies",
            "Child education techniques",
            "Teaching non-Arabic speakers",
            "Educational technologies",
            "Classroom engagement strategies",
            "Assessment methodologies",
            "Online teaching best practices",
            "Student motivation techniques",
          ],
        },
      ],
      closing:
        "Continuous training helps maintain strong educational quality standards.",
    },
    {
      number: 6,
      title: "Academic Quality Assurance & Progress Support",
      intro: "Quality learning requires structure and accountability.",
      lists: [
        {
          heading: "Students receive support through:",
          items: [
            "Progress tracking",
            "Homework follow-up",
            "Teacher feedback",
            "Parent communication",
            "Performance evaluations",
            "Personalized recommendations",
          ],
        },
        {
          heading: "Academic supervision includes:",
          items: [
            "Teaching evaluations",
            "Lesson observations",
            "Student feedback reviews",
            "Curriculum alignment",
            "Continuous quality monitoring",
          ],
        },
      ],
      closing:
        "Students progress based on readiness and performance—not time alone.",
    },
  ],
  tutorsSectionTitle: "Meet Some Of Our Tutors",
  teachingAreasLabel: "Teaching Areas",
  backgroundLabel: "Professional Background",
  philosophyLabel: "Teaching Philosophy",
  styleLabel: "Teaching Style",
  bestForLabel: "Best For",
  languagesLabel: "Languages",
  experienceLabel: "Experience",
  tutors: [
    {
      id: "ahmed",
      name: "Ahmed Hassan",
      role: "Senior Quran & Tajweed Instructor",
      teachingAreas: [
        "Quran Recitation",
        "Tajweed Rules",
        "Reading Fluency Development",
        "Adult Learning Programs",
        "Beginner to Advanced Students",
      ],
      background:
        "Ahmed has extensive experience teaching international students with different backgrounds and learning levels. He specializes in helping students move confidently from foundational reading toward advanced recitation.",
      philosophy:
        "Confidence builds consistency. His lessons focus on gradual progression and supportive correction methods.",
      teachingStyle: [
        "Structured learning plans",
        "Patient guidance",
        "Clear pronunciation correction",
        "Practical Tajweed application",
        "Confidence-building techniques",
      ],
      bestFor: [
        "Adult learners",
        "Beginners",
        "Tajweed improvement",
        "Recitation pathways",
      ],
      languages: "Arabic • English",
      experience: "6+ years teaching international students online",
      initial: "أ",
      tint: "from-[#2D5A3D] to-[#1C3A2E]",
    },
    {
      id: "abdullah",
      name: "Abdullah Kareem",
      role: "Hifz & Memorization Specialist",
      teachingAreas: [
        "Quran Memorization",
        "Revision Systems",
        "Intensive Programs",
        "Teen Programs",
      ],
      background:
        "Abdullah focuses on sustainable memorization systems designed to improve retention and long-term revision.",
      philosophy:
        "Memorization success comes through repetition, structure, and consistency.",
      teachingStyle: [
        "Personalized memorization plans",
        "Revision frameworks",
        "Accountability systems",
        "Progress tracking",
        "Motivational coaching",
      ],
      bestFor: [
        "Hifz students",
        "Intensive learners",
        "Teenagers",
        "Students needing structure",
      ],
      languages: "Arabic • English",
      initial: "ع",
      tint: "from-[#1C3A2E] to-[#142920]",
    },
    {
      id: "mustafa",
      name: "Mustafa Ali",
      role: "Arabic Language Instructor",
      teachingAreas: [
        "Arabic Foundations",
        "Quranic Arabic",
        "Conversational Arabic",
        "Reading & Writing Skills",
      ],
      background:
        "Mustafa specializes in helping non-Arabic speakers build confidence through interactive language instruction.",
      philosophy:
        "Language learning should be practical, engaging, and confidence-building.",
      teachingStyle: [
        "Interactive activities",
        "Speaking practice",
        "Visual learning tools",
        "Vocabulary reinforcement",
        "Step-by-step progression",
      ],
      bestFor: [
        "Beginners",
        "International students",
        "Quranic Arabic learners",
        "Adult learners",
      ],
      initial: "م",
      tint: "from-[#B8860B] to-[#1C3A2E]",
    },
    {
      id: "maryam",
      name: "Maryam Ibrahim",
      role: "Kids Quran & Early Learning Educator",
      teachingAreas: [
        "Noorani Qaida",
        "Kids Quran Programs",
        "Early Childhood Learning",
        "Beginner Reading Skills",
      ],
      background:
        "Maryam focuses on engaging younger learners through fun, structured, and child-friendly educational approaches.",
      teachingStyle: [
        "Interactive learning",
        "Visual methods",
        "Reward systems",
        "Positive reinforcement",
        "Child-centered pacing",
      ],
      bestFor: [
        "Ages 4–10",
        "First-time learners",
        "Kids Quran programs",
      ],
      initial: "م",
      tint: "from-[#366348] to-[#1C3A2E]",
    },
    {
      id: "hind",
      name: "Hind Yusuf",
      role: "Islamic Studies Instructor",
      teachingAreas: [
        "Aqeedah",
        "Seerah",
        "Islamic Foundations",
        "Character Development",
      ],
      background:
        "Hind emphasizes connecting Islamic knowledge with practical daily life.",
      teachingStyle: [
        "Storytelling approaches",
        "Reflection activities",
        "Discussion-based learning",
        "Real-life applications",
      ],
      bestFor: [
        "Families",
        "Beginners",
        "New Muslims",
        "Teen learners",
      ],
      initial: "ه",
      tint: "from-[#234832] to-[#1C3A2E]",
    },
    {
      id: "mayar",
      name: "Mayar Ahmed",
      role: "Arabic & Kids Education Specialist",
      teachingAreas: [
        "Arabic Foundations",
        "Kids Education",
        "Parent-Guided Learning",
        "Beginner Programs",
      ],
      teachingStyle: [
        "Interactive methods",
        "Visual learning tools",
        "Parent collaboration",
        "Activity-based education",
      ],
      bestFor: [
        "Children",
        "Family learning",
        "Beginner students",
      ],
      initial: "م",
      tint: "from-[#1C3A2E] to-[#2D5A3D]",
    },
    {
      id: "aisha",
      name: "Aisha Mohamed",
      role: "Quran & Female Programs Specialist",
      teachingAreas: [
        "Female Student Programs",
        "Tajweed",
        "Quran Fluency",
        "Personalized Quran Learning",
      ],
      background:
        "Aisha creates supportive learning environments focused on comfort, encouragement, and confidence.",
      teachingStyle: [
        "Personalized pacing",
        "Encouragement-focused learning",
        "Structured correction methods",
        "Supportive communication",
      ],
      bestFor: [
        "Female learners",
        "Beginners",
        "Quran improvement students",
      ],
      initial: "ع",
      tint: "from-[#B8860B] to-[#366348]",
    },
  ],
  promise: {
    title: "Our Promise To Students & Families",
    intro:
      "At Nibras Network Academy, we believe education is not only about content—it is about people. That is why we focus on:",
    items: [
      "Qualified educators",
      "Personalized tutor matching",
      "Continuous development",
      "Flexible learning experiences",
      "Student-centered education",
      "Long-term academic growth",
    ],
  },
  finalCTAs: [
    { label: "Find Your Ideal Tutor", href: "/book-trial" },
    { label: "Meet Our Academic Team", href: "/book-trial" },
    { label: "Book A Trial Lesson", href: "/book-trial" },
    { label: "Start Your Learning Journey", href: "/book-trial" },
  ],
};

const ar: TutorsPageCopy = {
  meta: {
    title: "معلمونا | أكاديمية شبكة نبراس",
    description:
      "تعرّف على معلمي القرآن والعربية والدراسات الإسلامية في أكاديمية شبكة نبراس — معلمون ومعلمات مؤهلون، مطابقة شخصية، تطوير مستمر، وتعليم يركّز على الطالب.",
  },
  heroBadge: "معلمونا",
  heroTitle: "لماذا يختار الطلاب والعائلات معلمي نبراس",
  whyChoose: [
    "معلمون ومعلمات مؤهلون",
    "متخصصون في تعليم غير الناطقين بالعربية",
    "نظام مطابقة شخصي للمعلمين",
    "تعليم داعم يركّز على الطالب",
    "تطوير مهني مستمر",
    "مناهج تعليمية مرنة لجميع الأعمار",
    "إشراف أكاديمي منظّم وضمان جودة",
  ],
  whatMakesDifferent: {
    title: "ما الذي يجعل تعليمنا مختلفاً؟",
    intro: "نؤمن بأن التعليم الفعّال شخصي. لهذا يركّز نظامنا على:",
    items: [
      "مطابقة شخصية الطالب",
      "توصيات معلمين مبنية على الأهداف",
      "توافق أسلوب التعلّم",
      "الفهم الثقافي",
      "مسارات تعليمية مرنة",
      "دعم طويل الأمد للطالب",
    ],
  },
  heroCTAs: [
    { label: "قابل معلمك", href: "/book-trial" },
    { label: "احجز درساً تجريبياً", href: "/book-trial" },
    { label: "احصل على توصيات مخصصة", href: "/book-trial" },
  ],
  showcaseTitle: "شاهد معلمينا أثناء العمل",
  showcaseCaption:
    "مقطع حقيقي من إحدى حصصنا المباشرة — تفاعل دافئ، نطق واضح، وأجواء صفّية من المنزل.",
  videoAria: "معاينة فيديو لحصة تعليمية في شبكة نبراس",
  features: [
    {
      number: 1,
      title: "معلمون ومعلمات مؤهلون لكل رحلة تعليمية",
      intro:
        "نحن ندرك أن لكل طالب تفضيلات واحتياجات تعليمية واعتبارات ثقافية فريدة. لذلك توفّر أكاديمية شبكة نبراس معلمين ومعلمات مختارين بعناية.",
      lists: [
        {
          heading: "متخصصون في:",
          items: [
            "قراءة القرآن والتلاوة",
            "التجويد والقراءات",
            "برامج الحفظ",
            "اللغة العربية",
            "الدراسات الإسلامية",
            "تعليم الأطفال",
            "برامج المسلمين الجدد",
          ],
        },
        {
          heading: "يعمل معلمونا مع:",
          items: [
            "المتعلمين المبكرين",
            "الأطفال والمراهقين",
            "الكبار",
            "الآباء والأمهات",
            "الطلاب الدوليين",
            "المتعلمين المتقدمين",
          ],
        },
      ],
      closing:
        "مهمتنا بسيطة: ربط كل متعلم بالمعلم الذي يدعم نجاحه على أفضل وجه.",
    },
    {
      number: 2,
      title: "خبرة في تعليم غير الناطقين بالعربية",
      intro:
        "تعليم غير الناطقين بالعربية يتطلب أكثر من الخبرة في المادة.",
      lists: [
        {
          heading: "معلمونا مدرّبون للعمل مع:",
          items: [
            "المبتدئين تماماً",
            "الطلاب غير المألوفين بالخط العربي",
            "خلفيات لغوية متنوعة",
            "سرعات تعلّم مختلفة",
            "طلاب من ثقافات وبلدان متعددة",
          ],
        },
        {
          heading: "قد تشمل استراتيجيات التدريس:",
          items: [
            "شروحات مبسّطة",
            "أساليب التعلّم البصري",
            "تقنيات التكرار السمعي",
            "تمارين تفاعلية",
            "أنظمة تقدّم تدريجي",
            "تطبيقات عملية",
          ],
        },
      ],
      closing: "يجب أن يكون التعلّم ممكناً—لا مرهقاً.",
    },
    {
      number: 3,
      title: "نظام مطابقة المعلمين المخصص",
      intro: "كل متعلم يتعلم بطريقة مختلفة.",
      lists: [
        {
          heading: "يوصي فريقنا الأكاديمي بالمعلمين بناءً على:",
          items: [
            "أهداف التعلّم",
            "الفئة العمرية",
            "المستوى الحالي",
            "اللغة الأم",
            "أسلوب التدريس المفضّل",
            "توفّر الجدول",
            "وتيرة التعلّم",
            "توافق الشخصية",
          ],
        },
      ],
      closing:
        "إذا شعر الطالب أن أسلوباً تعليمياً آخر قد يكون أنسب، يمكن تقديم توصيات إضافية. لأن التعلّم الناجح غالباً ما يبدأ بالارتباط التعليمي الصحيح.",
    },
    {
      number: 4,
      title: "فلسفة تعليمية تركّز على الطالب",
      intro:
        "نؤمن بأن الطلاب يتعلمون بشكل أفضل عندما يشعرون بالراحة والدعم والتحفيز.",
      lists: [
        {
          heading: "تركّز فلسفتنا التعليمية على:",
          items: [
            "الصبر والتعاطف",
            "التواصل المحترم",
            "التعزيز الإيجابي",
            "بناء الثقة",
            "المشاركة التفاعلية",
            "التقدّم خطوة بخطوة",
          ],
        },
        {
          heading: "يهدف معلمونا إلى إنشاء فصول تشعر بأنها:",
          items: [
            "آمنة",
            "مشجّعة",
            "تفاعلية",
            "منظّمة",
            "ممتعة",
          ],
        },
      ],
    },
    {
      number: 5,
      title: "التدريب المستمر والتطوير المهني",
      intro: "التميز التعليمي يتطلب تحسيناً مستمراً.",
      lists: [
        {
          heading:
            "يشارك معلمو نبراس في تطوير مهني مستمر يشمل:",
          items: [
            "منهجيات التدريس الحديثة",
            "تقنيات تعليم الأطفال",
            "تعليم غير الناطقين بالعربية",
            "التقنيات التعليمية",
            "استراتيجيات إشراك الفصل",
            "منهجيات التقييم",
            "أفضل ممارسات التدريس عبر الإنترنت",
            "تقنيات تحفيز الطلاب",
          ],
        },
      ],
      closing:
        "يساعد التدريب المستمر في الحفاظ على معايير جودة تعليمية قوية.",
    },
    {
      number: 6,
      title: "ضمان الجودة الأكاديمية ودعم التقدّم",
      intro: "التعلّم الجيد يتطلب هيكلاً ومساءلة.",
      lists: [
        {
          heading: "يحصل الطلاب على دعم من خلال:",
          items: [
            "تتبّع التقدّم",
            "متابعة الواجبات",
            "ملاحظات المعلم",
            "التواصل مع الأهل",
            "تقييمات الأداء",
            "توصيات مخصصة",
          ],
        },
        {
          heading: "يشمل الإشراف الأكاديمي:",
          items: [
            "تقييمات التدريس",
            "مراقبة الدروس",
            "مراجعات ملاحظات الطلاب",
            "مواءمة المناهج",
            "مراقبة الجودة المستمرة",
          ],
        },
      ],
      closing:
        "يتقدّم الطلاب بناءً على الاستعداد والأداء—وليس الوقت فقط.",
    },
  ],
  tutorsSectionTitle: "تعرّف على بعض معلمينا",
  teachingAreasLabel: "مجالات التدريس",
  backgroundLabel: "الخلفية المهنية",
  philosophyLabel: "الفلسفة التعليمية",
  styleLabel: "أسلوب التدريس",
  bestForLabel: "الأنسب لـ",
  languagesLabel: "اللغات",
  experienceLabel: "الخبرة",
  tutors: [
    {
      id: "ahmed",
      name: "أحمد حسن",
      role: "مدرّس قرآن وتجويد أول",
      teachingAreas: [
        "تلاوة القرآن",
        "قواعد التجويد",
        "تطوير طلاقة القراءة",
        "برامج تعليم الكبار",
        "من المبتدئين إلى المتقدمين",
      ],
      background:
        "يمتلك أحمد خبرة واسعة في تدريس الطلاب الدوليين بخلفيات ومستويات مختلفة. وهو متخصص في مساعدة الطلاب على الانتقال بثقة من القراءة الأساسية نحو التلاوة المتقدمة.",
      philosophy:
        "الثقة تبني الاتساق. دروسه تركّز على التقدّم التدريجي وأساليب التصحيح الداعمة.",
      teachingStyle: [
        "خطط تعلّم منظّمة",
        "توجيه صبور",
        "تصحيح نطق واضح",
        "تطبيق عملي للتجويد",
        "تقنيات بناء الثقة",
      ],
      bestFor: [
        "المتعلمون الكبار",
        "المبتدئون",
        "تحسين التجويد",
        "مسارات التلاوة",
      ],
      languages: "العربية • الإنجليزية",
      experience: "٦+ سنوات في تدريس الطلاب الدوليين عبر الإنترنت",
      initial: "أ",
      tint: "from-[#2D5A3D] to-[#1C3A2E]",
    },
    {
      id: "abdullah",
      name: "عبدالله كريم",
      role: "متخصص حفظ وتثبيت",
      teachingAreas: [
        "حفظ القرآن",
        "أنظمة المراجعة",
        "البرامج المكثفة",
        "برامج المراهقين",
      ],
      background:
        "يركّز عبدالله على أنظمة حفظ مستدامة مصمّمة لتحسين الاستبقاء والمراجعة طويلة الأمد.",
      philosophy:
        "نجاح الحفظ يأتي من خلال التكرار والهيكل والاتساق.",
      teachingStyle: [
        "خطط حفظ مخصصة",
        "أطر مراجعة",
        "أنظمة مساءلة",
        "تتبّع التقدّم",
        "تدريب تحفيزي",
      ],
      bestFor: [
        "طلاب الحفظ",
        "المتعلمون المكثفون",
        "المراهقون",
        "الطلاب الذين يحتاجون هيكلاً",
      ],
      languages: "العربية • الإنجليزية",
      initial: "ع",
      tint: "from-[#1C3A2E] to-[#142920]",
    },
    {
      id: "mustafa",
      name: "مصطفى علي",
      role: "مدرّس لغة عربية",
      teachingAreas: [
        "أساسيات العربية",
        "العربية القرآنية",
        "العربية المحادثية",
        "مهارات القراءة والكتابة",
      ],
      background:
        "يتخصص مصطفى في مساعدة غير الناطقين بالعربية على بناء الثقة من خلال التدريس اللغوي التفاعلي.",
      philosophy:
        "تعلّم اللغة يجب أن يكون عملياً وممتعاً وبانياً للثقة.",
      teachingStyle: [
        "أنشطة تفاعلية",
        "ممارسة التحدث",
        "أدوات تعلّم بصرية",
        "تعزيز المفردات",
        "تقدّم خطوة بخطوة",
      ],
      bestFor: [
        "المبتدئون",
        "الطلاب الدوليون",
        "متعلمو العربية القرآنية",
        "المتعلمون الكبار",
      ],
      initial: "م",
      tint: "from-[#B8860B] to-[#1C3A2E]",
    },
    {
      id: "maryam",
      name: "مريم إبراهيم",
      role: "معلمة قرآن أطفال وتعلّم مبكر",
      teachingAreas: [
        "القاعدة النورانية",
        "برامج قرآن الأطفال",
        "التعلّم في الطفولة المبكرة",
        "مهارات القراءة للمبتدئين",
      ],
      background:
        "تركّز مريم على إشراك المتعلمين الأصغر سناً من خلال مناهج تعليمية ممتعة ومنظّمة ومناسبة للأطفال.",
      teachingStyle: [
        "تعلّم تفاعلي",
        "أساليب بصرية",
        "أنظمة مكافآت",
        "تعزيز إيجابي",
        "وتيرة تتمحور حول الطفل",
      ],
      bestFor: [
        "الأعمار ٤–١٠",
        "المتعلمون لأول مرة",
        "برامج قرآن الأطفال",
      ],
      initial: "م",
      tint: "from-[#366348] to-[#1C3A2E]",
    },
    {
      id: "hind",
      name: "هند يوسف",
      role: "معلمة دراسات إسلامية",
      teachingAreas: [
        "العقيدة",
        "السيرة",
        "أسس الإسلام",
        "تنمية الشخصية",
      ],
      background:
        "تركّز هند على ربط المعرفة الإسلامية بالحياة اليومية العملية.",
      teachingStyle: [
        "أساليب القصص",
        "أنشطة التأمل",
        "التعلّم القائم على النقاش",
        "تطبيقات الحياة الواقعية",
      ],
      bestFor: [
        "العائلات",
        "المبتدئون",
        "المسلمون الجدد",
        "المراهقون",
      ],
      initial: "ه",
      tint: "from-[#234832] to-[#1C3A2E]",
    },
    {
      id: "mayar",
      name: "ميار أحمد",
      role: "متخصصة عربية وتعليم أطفال",
      teachingAreas: [
        "أساسيات العربية",
        "تعليم الأطفال",
        "التعلّم الموجّه للأهل",
        "برامج المبتدئين",
      ],
      teachingStyle: [
        "أساليب تفاعلية",
        "أدوات تعلّم بصرية",
        "تعاون مع الأهل",
        "تعليم قائم على الأنشطة",
      ],
      bestFor: [
        "الأطفال",
        "تعلّم العائلة",
        "الطلاب المبتدئون",
      ],
      initial: "م",
      tint: "from-[#1C3A2E] to-[#2D5A3D]",
    },
    {
      id: "aisha",
      name: "عائشة محمد",
      role: "متخصصة قرآن وبرامج الإناث",
      teachingAreas: [
        "برامج الطالبات",
        "التجويد",
        "طلاقة القرآن",
        "تعلّم القرآن المخصص",
      ],
      background:
        "تنشئ عائشة بيئات تعلّم داعمة تركّز على الراحة والتشجيع والثقة.",
      teachingStyle: [
        "وتيرة مخصصة",
        "تعلّم يركّز على التشجيع",
        "أساليب تصحيح منظّمة",
        "تواصل داعم",
      ],
      bestFor: [
        "المتعلمات",
        "المبتدئات",
        "طالبات تحسين القرآن",
      ],
      initial: "ع",
      tint: "from-[#B8860B] to-[#366348]",
    },
  ],
  promise: {
    title: "وعدنا للطلاب والعائلات",
    intro:
      "في أكاديمية شبكة نبراس، نؤمن بأن التعليم ليس فقط عن المحتوى—بل عن الأشخاص. لذلك نركّز على:",
    items: [
      "معلمون مؤهلون",
      "مطابقة شخصية للمعلمين",
      "تطوير مستمر",
      "تجارب تعلّم مرنة",
      "تعليم يركّز على الطالب",
      "نمو أكاديمي طويل الأمد",
    ],
  },
  finalCTAs: [
    { label: "ابحث عن معلمك المثالي", href: "/book-trial" },
    { label: "تعرّف على فريقنا الأكاديمي", href: "/book-trial" },
    { label: "احجز درساً تجريبياً", href: "/book-trial" },
    { label: "ابدأ رحلتك التعليمية", href: "/book-trial" },
  ],
};

export function getTutorsPage(locale: Locale): TutorsPageCopy {
  return locale === "ar" ? ar : en;
}
