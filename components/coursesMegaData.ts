/**
 * Slugs for course mega menu — pages can be added incrementally
 * Icons: lucide-react — import { BookOpen, PenLine, Landmark, Baby, Briefcase, ... } from "lucide-react"
 */

// ─── Quick Tools ─────────────────────────────────────────────────────────────

export const MEGA_QUICK_TOOLS = [
  { label: "Course Finder Quiz (2 minutes)",          href: "/course-finder",         icon: "ClipboardList"   },
  { label: "Advanced Search & Filter",                href: "/courses/search",         icon: "Search"          },
  { label: "Compare Programs Side-by-Side",           href: "/courses/compare",        icon: "BarChart2"       },
  { label: "Download Complete Catalog (PDF)",         href: "/courses/catalog.pdf",    icon: "Download"        },
  { label: "Talk to Academic Advisor (FREE Consultation)", href: "/contact?advisor=1", icon: "GraduationCap"   },
] as const;

// ─── By Subject ──────────────────────────────────────────────────────────────

export type SubjectColumn = {
  title: string;
  icon: string; // lucide-react icon name
  count?: number;
  links: { label: string; href: string }[];
};

export const MEGA_BY_SUBJECT: SubjectColumn[] = [
  {
    title: "Quran Programs",
    icon: "BookOpen",
    count: 7,
    links: [
      { label: "Noorani Qaida (Foundation)",       href: "/courses/noorani-qaida"         },
      { label: "Quran Recitation (Tilawah)",        href: "/courses/quran-recitation"      },
      { label: "Quran Memorization (Hifz)",         href: "/courses/quran-memorization"    },
      { label: "Tajweed (Perfect Recitation)",      href: "/courses/tajweed"               },
      { label: "Qira'at (Variant Recitations)",     href: "/courses/qiraat"                },
      { label: "Tafsir (Quran Explanation)",        href: "/courses/tafsir-quran"          },
      { label: "Quran with Translation",            href: "/courses/quran-with-translation"},
    ],
  },
  {
    title: "Arabic Language",
    icon: "PenLine",
    count: 6,
    links: [
      { label: "Noor Al-Bayan (Arabic Foundation)", href: "/courses/noor-al-bayan"        },
      { label: "Arabic for Beginners",              href: "/courses/arabic-for-beginners" },
      { label: "Quranic Arabic",                    href: "/courses/quranic-arabic"       },
      { label: "Conversational Arabic",             href: "/courses/conversational-arabic"},
      { label: "Classical Arabic",                  href: "/courses/classical-arabic"     },
      { label: "Modern Standard Arabic (MSA)",      href: "/courses/msa"                  },
    ],
  },
  {
    title: "Islamic Studies",
    icon: "Landmark",
    count: 6,
    links: [
      { label: "Islamic General (Comprehensive)",   href: "/courses/islamic-general"      },
      { label: "Aqeedah (Islamic Creed)",           href: "/courses/aqeedah"              },
      { label: "Fiqh (Islamic Jurisprudence)",      href: "/courses/fiqh"                 },
      { label: "Hadith Studies",                    href: "/courses/hadith-studies"       },
      { label: "Seerah (Prophet's Biography)",      href: "/courses/seerah"               },
      { label: "Tafsir (Quran Interpretation)",     href: "/courses/tafsir-islamic"       },
    ],
  },
  {
    title: "Kids Programs",
    icon: "Baby",
    count: 4,
    links: [
      { label: "Fun Quran (Ages 5-8)",              href: "/courses/fun-quran"            },
      { label: "Junior Quran (Ages 9-12)",          href: "/courses/junior-quran"         },
      { label: "Teen Islamic Studies (Ages 13-17)", href: "/courses/teen-islamic-studies" },
      { label: "Kids Hifz Program (Ages 6-12)",     href: "/courses/kids-hifz"            },
    ],
  },
  {
    title: "Special Programs",
    icon: "Briefcase",
    count: 6,
    links: [
      { label: "New Muslims Track (FREE 3 months)", href: "/courses/new-muslims-track"    },
      { label: "Family Packages (Save 30%)",        href: "/courses/family-packages"      },
      { label: "Special Needs Support",             href: "/courses/special-needs-support"},
      { label: "Ijazah Pathway (Advanced)",         href: "/courses/ijazah-pathway"       },
      { label: "Corporate Training",                href: "/courses/corporate-training"   },
      { label: "Teacher Certification",             href: "/courses/teacher-certification"},
    ],
  },
];

// ─── By Level ─────────────────────────────────────────────────────────────────

export const MEGA_BY_LEVEL = [
  { label: "BEGINNER",     href: "/courses/level/beginner",     icon: "Sprout"      },
  { label: "INTERMEDIATE", href: "/courses/level/intermediate", icon: "TrendingUp"  },
  { label: "ADVANCED",     href: "/courses/level/advanced",     icon: "Trees"       },
  { label: "EXPERT",       href: "/courses/level/expert",       icon: "Trophy"      },
] as const;

// ─── By Goal ──────────────────────────────────────────────────────────────────

export const MEGA_BY_GOAL = [
  { label: "Start from Absolute Zero (Noorani Qaida + Noor Al-Bayan)", href: "/courses/goal/start-from-zero",         icon: "CircleDot"     },
  { label: "Recite Quran Perfectly",                                    href: "/courses/goal/recite-perfectly",        icon: "CircleDot"     },
  { label: "Memorize Quran (Hifz)",                                     href: "/courses/goal/memorize-hifz",           icon: "CircleDot"     },
  { label: "Learn Arabic Language",                                     href: "/courses/goal/learn-arabic",            icon: "CircleDot"     },
  { label: "Understand Quran in Arabic",                                href: "/courses/goal/understand-quran-arabic", icon: "CircleDot"     },
  { label: "Complete Islamic Education",                                href: "/courses/goal/islamic-education",       icon: "CircleDot"     },
  { label: "Get Ijazah Certificate",                                    href: "/courses/goal/ijazah",                  icon: "CircleDot"     },
  { label: "Teach My Kids",                                             href: "/courses/goal/teach-kids",              icon: "CircleDot"     },
  { label: "Master Tajweed & Recitation",                               href: "/courses/goal/master-tajweed",          icon: "CircleDot"     },
  { label: "Learn Qira'at (Variant Recitations)",                       href: "/courses/goal/learn-qiraat",            icon: "CircleDot"     },
  { label: "Become Quran Teacher",                                      href: "/courses/goal/become-teacher",          icon: "CircleDot"     },
  { label: "New Muslim Guidance (FREE)",                                href: "/courses/goal/new-muslim",              icon: "CircleDot"     },
  { label: "Study Tafsir (Quran Explanation)",                          href: "/courses/goal/study-tafsir",            icon: "CircleDot"     },
] as const;

// ─── Learning Pathways ────────────────────────────────────────────────────────

export type PathwayBlock = {
  title: string;
  icon: string; // lucide-react icon name
  href: string;
  lines: string[];
  note?: string;
};

export const MEGA_PATHWAYS: PathwayBlock[] = [
  {
    title: "Quran Mastery Journey",
    icon: "Route",
    href: "/courses/pathways/quran-mastery",
    lines: [
      "24 – 30 months",
      "Stage 0: Noorani Qaida Foundation (6 – 10 months)",
      "Stage 1: Recitation Basics (10 months)",
      "Stage 2: Fluency Building (8 months)",
      "Stage 3: Tajweed Mastery (12 months)",
      "Stage 4: Full Hifz Memorization (30 months)",
      "Stage 5: Ijazah Certification (12 months)",
    ],
  },
  {
    title: "Arabic Fluency Journey",
    icon: "Route",
    href: "/courses/pathways/arabic-fluency",
    lines: [
      "22 months",
      "Stage 0: Noor Al-Bayan Foundation (10 months)",
      "Stage 1: Arabic for Beginners (6 months)",
      "Stage 2: Grammar Foundations (4 months)",
      "Stage 3: Quranic Arabic (12–24 months)",
      "Stage 4: Classical Arabic (16 – 25 months)",
    ],
  },
  {
    title: "Islamic Scholar Journey",
    icon: "Route",
    href: "/courses/pathways/islamic-scholar",
    lines: [
      "18–24 months",
      "Option A: Modular Approach (22 months)",
      "Option B: Islamic General — All-in-One (18–24 months)",
    ],
  },
  {
    title: "Kids Quran & Islamic Journey",
    icon: "Route",
    href: "/courses/pathways/kids-journey",
    lines: [
      "36 – 48 months / 3–4 years",
      "Year 1: Foundation (Letters & Basic Duas)",
      "Year 2: Building (Reading & Short Surahs + Tajweed)",
      "Year 3: Mastery (Hifz Juz Amma + Islamic Knowledge)",
    ],
  },
  {
    title: "New Muslim Journey",
    icon: "Route",
    href: "/courses/pathways/new-muslim",
    lines: [
      "14+ months",
      "Month 1–5: Islam Basics — FREE",
      "Month 6–12: Noorani Qaida",
      "Month 13–15: Arabic + Salah Practice (20% discount)",
      "Month 16–22: Quran Recitation + Fiqh (20% discount)",
      "Month 23+: Advanced Studies (continue learning)",
    ],
  },
  {
    title: "Hafiz Fast-Track Intensive",
    icon: "Route",
    href: "/courses/pathways/hafiz-fast-track",
    lines: [
      "18 months — 5 lessons/week · Daily homework · Weekly tests",
    ],
    note: "Limited: 20 spots/year · Entrance exam required",
  },
];