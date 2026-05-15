import type { Locale } from "@/lib/i18n/types";

type CourseDesc = { en: string; ar: string };

/** Short summaries shown when expanding a course on the book-trial form */
export const TRIAL_COURSE_DESCRIPTIONS: Record<string, CourseDesc> = {
  "/courses/noorani-qaida": {
    en: "Arabic letters, vowels, and basic reading rules — the foundation before Quran recitation.",
    ar: "حروف العربية والحركات وقواعد القراءة الأساسية — الأساس قبل تلاوة القرآن.",
  },
  "/courses/quran-recitation": {
    en: "Read the Quran fluently with guided practice, correction, and steady weekly progression.",
    ar: "تلاوة القرآن بطلاقة مع تصحيح ومتابعة وتقدّم أسبوعي منتظم.",
  },
  "/courses/quran-memorization": {
    en: "Structured Hifz plan with revision cycles, memorization techniques, and progress tracking.",
    ar: "خطة حفظ منظمة مع مراجعة وتقنيات حفظ ومتابعة للتقدّم.",
  },
  "/courses/tajweed": {
    en: "Master pronunciation rules — makhārij, sifāt, and common Tajweed mistakes corrected live.",
    ar: "إتقان أحكام التجويد — مخارج الحروف وصفاتها وتصحيح الأخطاء الشائعة مباشرة.",
  },
  "/courses/qiraat": {
    en: "Study variant Quranic recitations for advanced students with qualified instructors.",
    ar: "دراسة القراءات القرآنية للمتقدّمين مع معلمين مؤهّلين.",
  },
  "/courses/tafsir-quran": {
    en: "Understand meanings, context, and lessons of Quranic verses with clear explanation.",
    ar: "فهم معاني الآيات وسياقها وعبرها بشرح واضح وميسّر.",
  },
  "/courses/quran-with-translation": {
    en: "Recite while connecting Arabic text to meaning in your language — ideal for non-Arabic speakers.",
    ar: "تلاوة مع ربط النص العربي بالمعنى بلغتك — مناسب لغير الناطقين بالعربية.",
  },
  "/courses/noor-al-bayan": {
    en: "Phonics-based Arabic foundation — letters, blending, and early reading skills.",
    ar: "أساس عربي صوتي — الحروف والدمج ومهارات القراءة المبكرة.",
  },
  "/courses/arabic-for-beginners": {
    en: "Everyday Arabic vocabulary, simple grammar, and confidence in basic conversation.",
    ar: "مفردات عربية يومية وقواعد بسيطة وثقة في المحادثة الأساسية.",
  },
  "/courses/quranic-arabic": {
    en: "Vocabulary and structures found in the Quran to understand what you recite.",
    ar: "مفردات وتراكيب قرآنية لفهم ما تتلوه أثناء القراءة.",
  },
  "/courses/conversational-arabic": {
    en: "Speak Arabic in real-life situations — greetings, family, travel, and daily topics.",
    ar: "تحدّث بالعربية في مواقف حياتية — تحيات وعائلة وسفر ومواضيع يومية.",
  },
  "/courses/classical-arabic": {
    en: "Classical grammar and texts for students who want deeper scholarly Arabic.",
    ar: "نحو وفصحى تراثية ونصوص كلاسيكية لمن يريد عمقاً أكاديمياً في العربية.",
  },
  "/courses/msa": {
    en: "Modern Standard Arabic for media, reading, and formal communication across the Arab world.",
    ar: "الفصحى المعاصرة للإعلام والقراءة والتواصل الرسمي في العالم العربي.",
  },
  "/courses/islamic-general": {
    en: "Balanced overview of creed, worship, character, and daily Muslim life in one program.",
    ar: "نظرة متوازنة على العقيدة والعبادة والأخلاق والحياة اليومية للمسلم في برنامج واحد.",
  },
  "/courses/aqeedah": {
    en: "Core beliefs of Islam explained clearly from authentic sources — suitable for all levels.",
    ar: "أركان العقيدة الإسلامية بشرح واضح من مصادر موثوقة — لجميع المستويات.",
  },
  "/courses/fiqh": {
    en: "Practical rulings for prayer, fasting, purification, and daily worship with evidence-based teaching.",
    ar: "أحكام عملية للصلاة والصيام والطهارة والعبادات اليومية بتعليم مستند للأدلة.",
  },
  "/courses/hadith-studies": {
    en: "Learn how Hadith is preserved, key narrations, and their relevance to daily practice.",
    ar: "كيف حُفظ الحديث، وأهم الأحاديث، وعلاقتها بالتطبيق اليومي.",
  },
  "/courses/seerah": {
    en: "The life of Prophet Muhammad ﷺ — lessons for faith, character, and inspiration today.",
    ar: "سيرة النبي ﷺ — عبر للإيمان والأخلاق والإلهام في حياتنا اليوم.",
  },
  "/courses/tafsir-islamic": {
    en: "Islamic sciences approach to Quranic interpretation within a structured curriculum.",
    ar: "التفسير ضمن منهج دراسات إسلامية منظم ومتدرّج.",
  },
  "/courses/new-muslims-track": {
    en: "FREE 3-month guided path for new Muslims — Islam basics, prayer, and your next learning steps.",
    ar: "مسار مجاني 3 أشهر للمسلمين الجدد — أساسيات الإسلام والصلاة وخطواتك التالية في التعلّم.",
  },
};

export function trialCourseDescription(href: string, locale: Locale): string | null {
  const d = TRIAL_COURSE_DESCRIPTIONS[href];
  if (!d) return null;
  return locale === "ar" ? d.ar : d.en;
}
