/** Shared private & group monthly tiers (same data as pricing page cards). */

export type BilingualStr = { en: string; ar: string };

export type TierPackage = {
  name: BilingualStr;
  hours: number;
  launch: string;
  regular: string;
  bestFor: BilingualStr;
  features: { en: string[]; ar: string[] };
  popular: boolean;
};

export const PRIVATE_PKGS: TierPackage[] = [
  {
    name: { en: "Starter", ar: "المبتدئ" },
    hours: 4,
    launch: "$22.40",
    regular: "$32.00",
    bestFor: { en: "Absolute beginners", ar: "المبتدئون تماماً" },
    features: {
      en: ["Build core foundations at your own pace", "Basic step-by-step progress tracking"],
      ar: ["بناء الأسس الجوهرية بالوتيرة المناسبة", "تتبع التقدم خطوة بخطوة", "مدرس أصيل معتمد", "جدولة مرنة للجلسات"],
    },
    popular: false,
  },
  {
    name: { en: "Beginner", ar: "المبتدئ +" },
    hours: 6,
    launch: "$33.60",
    regular: "$48.00",
    bestFor: { en: "Busy schedules", ar: "الجداول المزدحمة" },
    features: {
      en: ["Access to exclusive extra practice files", "Direct out-of-class messaging with tutor"],
      ar: ["مواد تدريبية إضافية", "مراسلة مباشرة مع المعلم", "مدرس أصيل معتمد", "جدولة مرنة للجلسات"],
    },
    popular: false,
  },
  {
    name: { en: "Growth", ar: "النمو" },
    hours: 8,
    launch: "$44.80",
    regular: "$64.00",
    bestFor: { en: "Consistent progress", ar: "التقدم المستمر" },
    features: {
      en: ["100% personalized study plan", "Detailed weekly teacher feedback reports"],
      ar: ["خطة دراسية شخصية", "تقارير أسبوعية من المعلم", "مدرس أصيل معتمد", "جدولة مرنة للجلسات"],
    },
    popular: true,
  },
  {
    name: { en: "Accelerated", ar: "المتسارع" },
    hours: 10,
    launch: "$52.50",
    regular: "$75.00",
    bestFor: { en: "Goal-oriented learners", ar: "المتعلمون الهادفون" },
    features: {
      en: ["Priority scheduling and VIP teacher matching", "Advanced goal-setting and milestone tracking"],
      ar: ["جدولة بالأولوية", "تتبع الإنجازات المتقدمة", "مدرس أصيل معتمد", "تجربة تعليمية شخصية"],
    },
    popular: false,
  },
  {
    name: { en: "Intensive", ar: "المكثف" },
    hours: 12,
    launch: "$63.00",
    regular: "$90.00",
    bestFor: { en: "Rapid fluency seekers", ar: "الساعون للطلاقة السريعة" },
    features: {
      en: ["Deep immersion curriculum for rapid fluency", "Premium digital library access"],
      ar: ["منهج انغماس عميق", "وصول لمكتبة رقمية متميزة", "مدرس أصيل معتمد", "تتبع التقدم والتقارير"],
    },
    popular: false,
  },
];

export const GROUP_PKGS: TierPackage[] = [
  {
    name: { en: "Group Starter", ar: "المجموعة المبتدئة" },
    hours: 4,
    launch: "$14.00",
    regular: "$20.00",
    bestFor: { en: "Social learning on a budget", ar: "التعلم الاجتماعي باقتصاد" },
    features: {
      en: ["Interactive social learning", "Fixed schedule and standard curriculum"],
      ar: ["تعلم جماعي تفاعلي", "جدول أسبوعي ثابت", "مجموعات صغيرة (3–5 طلاب)", "مدرس أصيل معتمد"],
    },
    popular: false,
  },
  {
    name: { en: "Group Growth", ar: "نمو المجموعة" },
    hours: 8,
    launch: "$28.00",
    regular: "$40.00",
    bestFor: { en: "Consistent community routine", ar: "الروتين المجتمعي المنتظم" },
    features: {
      en: ["Healthy peer motivation", "Collaborative reading and discussions"],
      ar: ["تحفيز الأقران والنقاشات", "أنشطة تعاونية", "تتبع التقدم الشهري", "مدرس أصيل معتمد"],
    },
    popular: true,
  },
  {
    name: { en: "Group Intensive", ar: "المجموعة المكثفة" },
    hours: 12,
    launch: "$42.00",
    regular: "$60.00",
    bestFor: { en: "Active and fast-paced learning", ar: "المتعلمون السريعون" },
    features: {
      en: ["Fast-paced group study", "Maximum community engagement"],
      ar: ["تدريب مكثف جماعي", "أقصى تفاعل كلامي", "دروس أسبوعية منظمة", "مدرس أصيل معتمد"],
    },
    popular: false,
  },
  {
    name: { en: "Group Beginner", ar: "مجموعة المبتدئين" },
    hours: 6,
    launch: "$21.00",
    regular: "$30.00",
    bestFor: { en: "Consistent weekly practice", ar: "ممارسة أسبوعية منتظمة" },
    features: {
      en: ["Affordable community learning", "Regular structured lessons"],
      ar: ["تعلم مجتمعي بأسعار مناسبة", "دروس منظمة بانتظام"],
    },
    popular: false,
  },
  {
    name: { en: "Accelerated", ar: "المتسارع (مجموعة)" },
    hours: 10,
    launch: "$35.00",
    regular: "$50.00",
    bestFor: { en: "Goal-driven group learners", ar: "متعلمو المجموعات ذوو الأهداف" },
    features: {
      en: ["Fast-paced structured curriculum", "Advanced group projects & activities"],
      ar: ["منهج منظم سريع الإيقاع", "مشاريع وأنشطة جماعية متقدمة"],
    },
    popular: false,
  },
];

/** Family pooled hours — per person (same grid as pricing page). */
export type FamPriceCell = { regular: string; discounted: string };

export type FamRow = {
  hours: number;
  m2: FamPriceCell;
  m3: FamPriceCell;
  m4: FamPriceCell;
};

export const FAM_ROWS: FamRow[] = [
  { hours: 8,  m2: { regular: "$60.00", discounted: "$48.00" }, m3: { regular: "$56.00", discounted: "$44.80" }, m4: { regular: "$52.00", discounted: "$41.60" } },
  { hours: 10, m2: { regular: "$75.00", discounted: "$60.00" }, m3: { regular: "$70.00", discounted: "$56.00" }, m4: { regular: "$65.00", discounted: "$52.00" } },
  { hours: 12, m2: { regular: "$90.00", discounted: "$72.00" }, m3: { regular: "$84.00", discounted: "$67.20" }, m4: { regular: "$78.00", discounted: "$62.40" } },
  { hours: 14, m2: { regular: "$105.00", discounted: "$84.00" }, m3: { regular: "$98.00", discounted: "$78.40" }, m4: { regular: "$91.00", discounted: "$72.80" } },
  { hours: 16, m2: { regular: "$120.00", discounted: "$96.00" }, m3: { regular: "$112.00", discounted: "$89.60" }, m4: { regular: "$104.00", discounted: "$83.20" } },
  { hours: 18, m2: { regular: "$135.00", discounted: "$108.00" }, m3: { regular: "$126.00", discounted: "$100.80" }, m4: { regular: "$117.00", discounted: "$93.60" } },
  { hours: 20, m2: { regular: "$150.00", discounted: "$120.00" }, m3: { regular: "$140.00", discounted: "$112.00" }, m4: { regular: "$130.00", discounted: "$104.00" } },
];
