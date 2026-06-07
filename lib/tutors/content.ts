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

export type TutorProfile = {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  initial: string;
  tint: string;
  years: string;
};

export type TutorsPageCopy = {
  meta: { title: string; description: string };
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroIntro: string;
  highlightsTitle: string;
  highlights: TutorHighlight[];
  showcaseTitle: string;
  showcaseCaption: string;
  videoAria: string;
  tutorsTitle: string;
  tutorsSubtitle: string;
  yearsLabel: string;
  specialtiesLabel: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  tutors: TutorProfile[];
};

const en: TutorsPageCopy = {
  meta: {
    title: "Our Tutors | Nibras Network",
    description:
      "Meet Nibras Network's hand-picked Quran and Arabic tutors — certified, patient, and ready for one-on-one online lessons.",
  },
  heroBadge: "Expert Teachers",
  heroTitle: "Meet Our Dedicated Tutors",
  heroSubtitle: "Native Arabic speakers who teach with heart, patience, and structure.",
  heroIntro:
    "Every tutor at Nibras Network is carefully selected for Tajweed accuracy, clear communication, and the ability to motivate learners of all ages. Watch a glimpse of our teaching style, then explore the team below.",
  highlightsTitle: "What Makes Our Tutors Special",
  highlights: [
    {
      icon: "mic",
      title: "Crystal-Clear Tajweed",
      text: "Reciters with ijazah who break down every rule until pronunciation feels natural — not memorised.",
    },
    {
      icon: "heart",
      title: "Patient & Encouraging",
      text: "Lessons built on praise and steady progress — especially for shy kids and busy adults.",
    },
    {
      icon: "users",
      title: "Male & Female Options",
      text: "Choose the tutor that fits your family's comfort — qualified teachers for brothers and sisters.",
    },
    {
      icon: "book",
      title: "Structured Curriculum",
      text: "Clear weekly goals, homework, and follow-up so every minute of class time counts.",
    },
    {
      icon: "award",
      title: "Certified Expertise",
      text: "Degrees in Islamic studies, Arabic linguistics, and years of online teaching experience.",
    },
    {
      icon: "sparkles",
      title: "Engaging for Kids",
      text: "Games, visuals, and animated stories that keep young learners excited to return.",
    },
  ],
  showcaseTitle: "See Our Tutors in Action",
  showcaseCaption:
    "A real snippet from one of our live sessions — warm interaction, clear pronunciation, and a classroom feel from home.",
  videoAria: "Video preview of a Nibras Network tutoring session",
  tutorsTitle: "Our Teaching Team",
  tutorsSubtitle: "Hand-picked educators ready for your first lesson",
  yearsLabel: "years experience",
  specialtiesLabel: "Specialties",
  ctaTitle: "Ready to Meet Your Tutor?",
  ctaBody:
    "Book a free trial and we'll match you with the right teacher for your goals — Quran, Arabic, Hifz, or kids' programmes.",
  ctaButton: "Book a Free Trial",
  tutors: [
    {
      id: "maha",
      name: "Ustadha Maha Zaky",
      role: "Senior Tajweed Instructor",
      bio: "Ijazah in Hafs with ten years of one-on-one teaching. Calm, structured lessons for beginners and intermediate reciters.",
      specialties: ["Tajweed", "Noorani Qaida", "Adult Beginners"],
      initial: "م",
      tint: "from-[#2D5A3D] to-[#1C3A2E]",
      years: "10+",
    },
    {
      id: "yusuf",
      name: "Ustadh Yusuf Karim",
      role: "Arabic & Qur'anic Vocabulary",
      bio: "Arabic linguistics graduate who connects grammar with Qur'anic words — ideal for learners who want to understand what they read.",
      specialties: ["Arabic Grammar", "Qur'anic Arabic", "Reading"],
      initial: "ي",
      tint: "from-[#1C3A2E] to-[#142920]",
      years: "8+",
    },
    {
      id: "layla",
      name: "Ustadha Layla Hossam",
      role: "Kids Programme Lead",
      bio: "Specialist in children's Quran classes — games, repetition, stickers, and praise that keeps little hearts engaged week after week.",
      specialties: ["Kids Quran", "Noor Al-Bayan", "Islamic Manners"],
      initial: "ل",
      tint: "from-[#B8860B] to-[#1C3A2E]",
      years: "7+",
    },
    {
      id: "omar",
      name: "Ustadh Omar Siddiq",
      role: "Hifz Mentor",
      bio: "Tracks weekly memorisation goals with teens and adults. Encouraging accountability without pressure — steady hifz, one ayah at a time.",
      specialties: ["Hifz", "Revision Plans", "Teens & Adults"],
      initial: "ع",
      tint: "from-[#366348] to-[#1C3A2E]",
      years: "12+",
    },
    {
      id: "hanan",
      name: "Ustadha Hanan Mostafa",
      role: "Islamic Studies Facilitator",
      bio: "Covers adab, seerah, and daily worship with practical examples families can apply at home.",
      specialties: ["Seerah", "Fiqh Basics", "Family Learning"],
      initial: "ح",
      tint: "from-[#234832] to-[#1C3A2E]",
      years: "9+",
    },
    {
      id: "ahmad",
      name: "Ustadh Ahmad Rashid",
      role: "Qira'at & Advanced Recitation",
      bio: "Supports advanced students exploring different riwayat and refining mushaf-level recitation with scholarly precision.",
      specialties: ["Qira'at", "Advanced Tajweed", "Ijazah Prep"],
      initial: "أ",
      tint: "from-[#1C3A2E] to-[#2D5A3D]",
      years: "11+",
    },
    {
      id: "nour",
      name: "Ustadha Nour Al-Huda",
      role: "Sisters' Quran Coach",
      bio: "Creates a comfortable, private space for sisters and mothers balancing work, family, and spiritual growth.",
      specialties: ["Sisters Classes", "Tajweed", "Evening Slots"],
      initial: "ن",
      tint: "from-[#B8860B] to-[#366348]",
      years: "6+",
    },
    {
      id: "kamal",
      name: "Ustadh Kamal El-Din",
      role: "New Muslim Guide",
      bio: "Gentle onboarding for reverts — prayer, wudu, short surahs, and essential faith topics in plain, welcoming language.",
      specialties: ["Revert Support", "Salah", "Basic Quran"],
      initial: "ك",
      tint: "from-[#142920] to-[#1C3A2E]",
      years: "5+",
    },
  ],
};

const ar: TutorsPageCopy = {
  meta: {
    title: "معلمونا | شبكة نبراس",
    description:
      "تعرّف على معلمي القرآن والعربية في شبكة نبراس — معلمون معتمدون، صبورون، وجاهزون لدروس فردية أونلاين.",
  },
  heroBadge: "معلمون خبراء",
  heroTitle: "تعرّف على معلمينا المتميزين",
  heroSubtitle: "ناطقون أصليون بالعربية يعلّمون بقلبٍ وصبرٍ ومنهجٍ واضح.",
  heroIntro:
    "يُختار كل معلم في شبكة نبراس بعناية لإتقان التجويد، ووضوح التواصل، والقدرة على تحفيز المتعلمين من كل الأعمار. شاهد لمحة من أسلوبنا التعليمي، ثم استكشف الفريق أدناه.",
  highlightsTitle: "ما يميّز معلمينا",
  highlights: [
    {
      icon: "mic",
      title: "تجويد واضح كالكريستال",
      text: "قرّاء حاصلون على إجازة يشرحون كل قاعدة حتى يصبح النطق طبيعياً — لا حفظاً بلا فهم.",
    },
    {
      icon: "heart",
      title: "صبورون ومشجّعون",
      text: "دروس مبنية على الثناء والتقدّم التدريجي — خاصة للأطفال الخجولين والكبار المشغولين.",
    },
    {
      icon: "users",
      title: "خيارات للذكور والإناث",
      text: "اختر المعلم المناسب لراحة عائلتك — معلمون مؤهلون للإخوة والأخوات.",
    },
    {
      icon: "book",
      title: "منهج منظّم",
      text: "أهداف أسبوعية وواجبات ومتابعة — حتى تستفيد كل دقيقة من الحصة.",
    },
    {
      icon: "award",
      title: "خبرة معتمدة",
      text: "شهادات في الدراسات الإسلامية ولسانيات العربية وسنوات من التدريس أونلاين.",
    },
    {
      icon: "sparkles",
      title: "محفّزون للأطفال",
      text: "ألعاب وصور وقصص متحركة تبقي الصغار متحمسين للعودة كل أسبوع.",
    },
  ],
  showcaseTitle: "شاهد معلمينا أثناء العمل",
  showcaseCaption:
    "مقطع حقيقي من إحدى حصصنا المباشرة — تفاعل دافئ، نطق واضح، وأجواء صفّية من المنزل.",
  videoAria: "معاينة فيديو لحصة تعليمية في شبكة نبراس",
  tutorsTitle: "فريقنا التعليمي",
  tutorsSubtitle: "معلمون مختارون بعناية وجاهزون لحصتك الأولى",
  yearsLabel: "سنوات خبرة",
  specialtiesLabel: "التخصصات",
  ctaTitle: "مستعد للقاء معلمك؟",
  ctaBody:
    "احجز حصة تجريبية مجانية ونطابقك مع المعلم المناسب لأهدافك — قرآن، عربية، حفظ، أو برامج الأطفال.",
  ctaButton: "احجز حصة تجريبية مجانية",
  tutors: [
    {
      id: "maha",
      name: "الأستاذة مها زكي",
      role: "مدرّسة تجويد أولى",
      bio: "حاصلة على إجازة بحفص وعشر سنوات في التعليم الفردي. دروس هادئة ومنظمة للمبتدئين ومتوسطي التلاوة.",
      specialties: ["التجويد", "القاعدة النورانية", "مبتدئون كبار"],
      initial: "م",
      tint: "from-[#2D5A3D] to-[#1C3A2E]",
      years: "+١٠",
    },
    {
      id: "yusuf",
      name: "الأستاذ يوسف كريم",
      role: "العربية ومفردات القرآن",
      bio: "خريج لسانيات عربية يربط القواعد بكلمات القرآن — مثالي لمن يريد فهم ما يقرأ.",
      specialties: ["قواعد العربية", "عربية القرآن", "القراءة"],
      initial: "ي",
      tint: "from-[#1C3A2E] to-[#142920]",
      years: "+٨",
    },
    {
      id: "layla",
      name: "الأستاذة ليلى حسام",
      role: "قائدة برامج الأطفال",
      bio: "متخصصة في تحفيظ الأطفال — ألعاب وتكرار وملصقات وتشجيع يبقي القلوب الصغيرة متحمسة أسبوعاً بعد أسبوع.",
      specialties: ["قرآن الأطفال", "نور البيان", "الآداب الإسلامية"],
      initial: "ل",
      tint: "from-[#B8860B] to-[#1C3A2E]",
      years: "+٧",
    },
    {
      id: "omar",
      name: "الأستاذ عمر صديق",
      role: "مرافق حفظ",
      bio: "يتابع أهداف الحفظ الأسبوعية مع المراهقين والكبار. مساءلة مشجّعة بلا ضغط — حفظ ثابت، آيةً بآية.",
      specialties: ["الحفظ", "خطط المراجعة", "مراهقون وكبار"],
      initial: "ع",
      tint: "from-[#366348] to-[#1C3A2E]",
      years: "+١٢",
    },
    {
      id: "hanan",
      name: "الأستاذة حنان مصطفى",
      role: "ميسّرة دراسات إسلامية",
      bio: "تغطي الأدب والسيرة والعبادات اليومية بأمثلة عملية يطبّقها أفراد العائلة في البيت.",
      specialties: ["السيرة", "أساسيات الفقه", "تعلّم عائلي"],
      initial: "ح",
      tint: "from-[#234832] to-[#1C3A2E]",
      years: "+٩",
    },
    {
      id: "ahmad",
      name: "الأستاذ أحمد راشد",
      role: "القراءات والتلاوة المتقدمة",
      bio: "يدعم الطلاب المتقدمين في استكشاف الروايات وصقل التلاوة بمستوى المصحف بدقة علمية.",
      specialties: ["القراءات", "تجويد متقدم", "التحضير للإجازة"],
      initial: "أ",
      tint: "from-[#1C3A2E] to-[#2D5A3D]",
      years: "+١١",
    },
    {
      id: "nour",
      name: "الأستاذة نور الهدى",
      role: "مدرّسة قرآن للأخوات",
      bio: "توفّر بيئة مريحة وخاصة للأخوات والأمهات اللواتي يوازنّ بين العمل والعائلة والنمو الروحي.",
      specialties: ["حصص الأخوات", "التجويد", "مواعيد مسائية"],
      initial: "ن",
      tint: "from-[#B8860B] to-[#366348]",
      years: "+٦",
    },
    {
      id: "kamal",
      name: "الأستاذ كمال الدين",
      role: "مرشد المسلمين الجدد",
      bio: "اندماج لطيف للمعتنقين الجدد — الصلاة والوضوء والسور القصيرة وأساسيات العقيدة بلغة واضحة ومرحبة.",
      specialties: ["دعم المعتنقين", "الصلاة", "قرآن أساسي"],
      initial: "ك",
      tint: "from-[#142920] to-[#1C3A2E]",
      years: "+٥",
    },
  ],
};

export function getTutorsPage(locale: Locale): TutorsPageCopy {
  return locale === "ar" ? ar : en;
}
