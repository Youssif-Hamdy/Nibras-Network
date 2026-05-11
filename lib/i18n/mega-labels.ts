import type { Locale } from "@/lib/i18n/types";

/** Arabic column titles — keyed by English title from MEGA_BY_SUBJECT */
export const megaSubjectTitleAr: Record<string, string> = {
  "Quran Programs": "برامج القرآن",
  "Arabic Language": "اللغة العربية",
  "Islamic Studies": "الدراسات الإسلامية",
  "Kids Programs": "برامج الأطفال",
  "Special Programs": "برامج خاصة",
};

/** Arabic labels keyed by href */
export const megaLinkAr: Record<string, string> = {
  "/courses/noorani-qaida": "القاعدة النورانية (أساس)",
  "/courses/quran-recitation": "تلاوة القرآن",
  "/courses/quran-memorization": "حفظ القرآن (الحفظ)",
  "/courses/tajweed": "التجويد (تلاوة متقنة)",
  "/courses/qiraat": "القراءات (روايات متعددة)",
  "/courses/tafsir-quran": "التفسير (شرح القرآن)",
  "/courses/quran-with-translation": "القرآن مع الترجمة",
  "/courses/noor-al-bayan": "نور البيان (أساس العربية)",
  "/courses/arabic-for-beginners": "العربية للمبتدئين",
  "/courses/quranic-arabic": "العربية القرآنية",
  "/courses/conversational-arabic": "العربية المحادثة",
  "/courses/classical-arabic": "العربية الفصحى التراثية",
  "/courses/msa": "الفصحى المعاصرة (MSA)",
  "/courses/islamic-general": "دراسات إسلامية شاملة",
  "/courses/aqeedah": "العقيدة",
  "/courses/fiqh": "الفقه",
  "/courses/hadith-studies": "علوم الحديث",
  "/courses/seerah": "السيرة النبوية",
  "/courses/tafsir-islamic": "التفسير",
  "/courses/fun-quran": "قرآن ممتع (5–8 سنوات)",
  "/courses/junior-quran": "قرآن للناشئين (9–12 سنة)",
  "/courses/teen-islamic-studies": "دراسات إسلامية للمراهقين (13–17)",
  "/courses/kids-hifz": "برنامج حفظ للأطفال (6–12)",
  "/courses/new-muslims-track": "مسار المسلم الجديد (3 أشهر مجاناً)",
  "/courses/family-packages": "باقات عائلية (وفر 30٪)",
  "/courses/special-needs-support": "دعم ذوي الاحتياجات الخاصة",
  "/courses/ijazah-pathway": "مسار الإجازة (متقدّم)",
  "/courses/corporate-training": "تدريب للمؤسسات",
  "/courses/teacher-certification": "شهادة تأهيل المعلّمين",
};

export const megaQuickToolAr: Record<string, string> = {
  "/course-finder": "اختبار اختيار الدورة (دقيقتان)",
  "/courses/search": "بحث وتصفية متقدّم",
  "/courses/compare": "مقارنة البرامج",
  "/courses/catalog.pdf": "تحميل الكتالوج الكامل (PDF)",
  "/contact?advisor=1": "استشارة أكاديمية (مجانية)",
};

/** Level cards */
export const megaLevelAr: Record<string, { label: string; desc: string }> = {
  BEGINNER: {
    label: "مبتدئ",
    desc: "ابدأ رحلتك من الصفر",
  },
  INTERMEDIATE: {
    label: "متوسّط",
    desc: "ابنِ على أساسك الحالي",
  },
  ADVANCED: {
    label: "متقدّم",
    desc: "عمّق معرفتك وأصلح تلاوتك",
  },
  EXPERT: {
    label: "خبير",
    desc: "مسارات الإتقان والشهادات",
  },
};

export const megaGoalAr: Record<string, string> = {
  "/courses/goal/start-from-zero":
    "البداية من الصفر المطلق (القاعدة النورانية + نور البيان)",
  "/courses/goal/recite-perfectly": "تلاوة القرآن بإتقان",
  "/courses/goal/memorize-hifz": "حفظ القرآن (الحفظ)",
  "/courses/goal/learn-arabic": "تعلّم اللغة العربية",
  "/courses/goal/understand-quran-arabic": "فهم القرآن بالعربية",
  "/courses/goal/islamic-education": "تعليم إسلامي متكامل",
  "/courses/goal/ijazah": "الحصول على شهادة إجازة",
  "/courses/goal/teach-kids": "تعليم أطفالي",
  "/courses/goal/master-tajweed": "إتقان التجويد والتلاوة",
  "/courses/goal/learn-qiraat": "تعلّم القراءات (روايات متعددة)",
  "/courses/goal/become-teacher": "أن أصبح معلّم قرآن",
  "/courses/goal/new-muslim": "إرشاد المسلم الجديد (مجاناً)",
  "/courses/goal/study-tafsir": "دراسة التفسير (شرح القرآن)",
};

export type MegaPathwayAr = { title: string; lines: string[]; note?: string };

export const megaPathwayAr: Record<string, MegaPathwayAr> = {
  "/courses/pathways/quran-mastery": {
    title: "رحلة إتقان القرآن",
    lines: [
      "24 – 30 شهراً",
      "المرحلة 0: أساس القاعدة النورانية (6 – 10 أشهر)",
      "المرحلة 1: أساسيات التلاوة (10 أشهر)",
      "المرحلة 2: بناء الطلاقة (8 أشهر)",
      "المرحلة 3: إتقان التجويد (12 شهراً)",
      "المرحلة 4: حفظ القرآن كاملاً (30 شهراً)",
      "المرحلة 5: شهادة الإجازة (12 شهراً)",
    ],
  },
  "/courses/pathways/arabic-fluency": {
    title: "رحلة الطلاقة بالعربية",
    lines: [
      "22 شهراً",
      "المرحلة 0: أساس نور البيان (10 أشهر)",
      "المرحلة 1: العربية للمبتدئين (6 أشهر)",
      "المرحلة 2: أساسيات النحو (4 أشهر)",
      "المرحلة 3: العربية القرآنية (12–24 شهراً)",
      "المرحلة 4: العربية الفصحى التراثية (16 – 25 شهراً)",
    ],
  },
  "/courses/pathways/islamic-scholar": {
    title: "رحلة العالمية الشرعية",
    lines: [
      "18–24 شهراً",
      "خيار أ: مسار وحدات (22 شهراً)",
      "خيار ب: الدراسات الإسلامية الشاملة — برنامج واحد (18–24 شهراً)",
    ],
  },
  "/courses/pathways/kids-journey": {
    title: "رحلة القرآن والتربية للأطفال",
    lines: [
      "36 – 48 شهراً / 3–4 سنوات",
      "السنة 1: الأساس (الحروف والأدعية البسيطة)",
      "السنة 2: البناء (القراءة والسور القصيرة + التجويد)",
      "السنة 3: الإتقان (حفظ جزء عم + معارف إسلامية)",
    ],
  },
  "/courses/pathways/new-muslim": {
    title: "رحلة المسلم الجديد",
    lines: [
      "14+ شهراً",
      "الشهر 1–5: أساسيات الإسلام — مجاناً",
      "الشهر 6–12: القاعدة النورانية",
      "الشهر 13–15: العربية + ممارسة الصلاة (خصم 20٪)",
      "الشهر 16–22: تلاوة القرآن + الفقه (خصم 20٪)",
      "الشهر 23 فما فوق: دراسات متقدّمة (مواصلة التعلّم)",
    ],
  },
  "/courses/pathways/hafiz-fast-track": {
    title: "المسار المكثّف لإتمام الحفظ",
    lines: ["18 شهراً — 5 حصص أسبوعياً · واجب يومي · اختبارات أسبوعية"],
    note: "محدود: 20 مقعداً سنوياً · يشترط اختبار قبول",
  },
};

export function megaSubjectTitle(locale: Locale, enTitle: string): string {
  if (locale === "en") return enTitle;
  return megaSubjectTitleAr[enTitle] ?? enTitle;
}

export function megaHrefLabel(locale: Locale, href: string, en: string): string {
  if (locale === "en") return en;
  return megaLinkAr[href] ?? en;
}

export function megaQuickLabel(locale: Locale, href: string, en: string): string {
  if (locale === "en") return en;
  return megaQuickToolAr[href] ?? megaQuickToolAr[href.split("?")[0] ?? href] ?? en;
}

export function megaLevelCopy(
  locale: Locale,
  key: string,
  enLabel: string,
  enDesc: string,
): { label: string; desc: string } {
  if (locale === "en") return { label: enLabel, desc: enDesc };
  const row = megaLevelAr[key];
  return row ?? { label: enLabel, desc: enDesc };
}

export function megaGoalLabel(locale: Locale, href: string, en: string): string {
  if (locale === "en") return en;
  return megaGoalAr[href] ?? en;
}

export function megaPathwayCopy(locale: Locale, href: string, en: MegaPathwayAr): MegaPathwayAr {
  if (locale === "en") return en;
  return megaPathwayAr[href] ?? en;
}
