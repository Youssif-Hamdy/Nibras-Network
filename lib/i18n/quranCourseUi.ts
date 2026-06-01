import type { Locale } from "@/lib/i18n/types";

export type QuranCourseUi = {
  programsKicker: string;
  home: string;
  courses: string;
  bookTrial: string;
  viewPricing: string;
  talkAdvisor: string;
  navOverview: string;
  navCurriculum: string;
  navMethods: string;
  navStories: string;
  navEnroll: string;
  teacherKicker: string;
  teacherTitle: string;
  philosophyKicker: string;
  philosophyTitle: string;
  curriculumKicker: string;
  curriculumTitle: string;
  byTheEnd: string;
  methodsKicker: string;
  methodsTitle: string;
  techniquesKicker: string;
  techniquesTitle: string;
  audienceKicker: string;
  audienceTitle: string;
  readyIf: string;
  prerequisites: string;
  progressionKicker: string;
  progressionTitle: string;
  storiesKicker: string;
  storiesTitle: string;
  includesKicker: string;
  includesTitle: string;
  offerKicker: string;
  promoPricing: string;
  regularPricing: string;
  monthlySamples: string;
};

const en: QuranCourseUi = {
  programsKicker: "Quran Programs",
  home: "Home",
  courses: "Courses",
  bookTrial: "Book Free Trial",
  viewPricing: "View Pricing",
  talkAdvisor: "Talk to Advisor",
  navOverview: "Overview",
  navCurriculum: "Curriculum",
  navMethods: "Methods",
  navStories: "Stories",
  navEnroll: "Enroll",
  teacherKicker: "Who Teaches This?",
  teacherTitle: "Teacher Qualification",
  philosophyKicker: "Teaching Philosophy",
  philosophyTitle: "Core Beliefs",
  curriculumKicker: "What You'll Learn",
  curriculumTitle: "What Exactly Will You Learn?",
  byTheEnd: "By the end:",
  methodsKicker: "Learning Methodology",
  methodsTitle: "How We Teach",
  techniquesKicker: "Teaching Techniques",
  techniquesTitle: "Proven Techniques",
  audienceKicker: "Who Should Take This?",
  audienceTitle: "Perfect For",
  readyIf: "You're Ready If",
  prerequisites: "Prerequisites",
  progressionKicker: "Next Steps",
  progressionTitle: "Progression After This Course",
  storiesKicker: "Success Stories",
  storiesTitle: "Real Student Transformations",
  includesKicker: "What's Included",
  includesTitle: "What You Get With This Course",
  offerKicker: "Special Offer",
  promoPricing: "Promo Pricing",
  regularPricing: "Regular Pricing",
  monthlySamples: "Monthly Samples",
};

const ar: QuranCourseUi = {
  programsKicker: "برامج القرآن",
  home: "الرئيسية",
  courses: "الدورات",
  bookTrial: "احجز تجربة مجانية",
  viewPricing: "الباقات والأسعار",
  talkAdvisor: "تحدث مع مستشار",
  navOverview: "نظرة عامة",
  navCurriculum: "المنهج",
  navMethods: "الأساليب",
  navStories: "قصص النجاح",
  navEnroll: "التسجيل",
  teacherKicker: "من يُدرّس هذه الدورة؟",
  teacherTitle: "مؤهلات المعلّم",
  philosophyKicker: "فلسفة التدريس",
  philosophyTitle: "معتقداتنا الأساسية",
  curriculumKicker: "المنهج",
  curriculumTitle: "ماذا ستتعلّم بالضبط؟",
  byTheEnd: "بحلول نهاية الدورة:",
  methodsKicker: "منهجية التعلّم",
  methodsTitle: "طرق التعلّم",
  techniquesKicker: "التقنيات",
  techniquesTitle: "أساليب التدريس المثبتة",
  audienceKicker: "لمن هذه الدورة؟",
  audienceTitle: "مثالية لـ",
  readyIf: "أنت جاهز إذا",
  prerequisites: "المتطلبات",
  progressionKicker: "الخطوة التالية",
  progressionTitle: "التقدّم بعد هذه الدورة",
  storiesKicker: "قصص النجاح",
  storiesTitle: "تحوّلات حقيقية لطلابنا",
  includesKicker: "المحتوى",
  includesTitle: "ما الذي تحصل عليه مع الدورة",
  offerKicker: "عرض خاص",
  promoPricing: "أسعار العرض",
  regularPricing: "الأسعار العادية",
  monthlySamples: "باقات شهرية نموذجية",
};

export function getQuranCourseUi(locale: Locale): QuranCourseUi {
  return locale === "ar" ? ar : en;
}
