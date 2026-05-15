"use client";
import { useI18n } from "@/components/LocaleProvider";

type ValueItem = {
  id: string;
  label: string;
  title: string;
  body: string;
  inPracticeTitle: string;
  inPractice: string[];
  whyTitle: string;
  whyText: string;
  icon: "shield" | "star" | "heart" | "globe" | "lock" | "users";
  accentHex: string;
  accentLight: string;
};

const values: ValueItem[] = [
  {
    id: "01",
    label: "VALUE 1 — AUTHENTICITY · الأصالة",
    title: "Teaching Real Islam",
    body: "We only teach from verified Islamic sources — the Quran, authentic Hadith, and established scholarly consensus. No personal opinions presented as religion.",
    inPracticeTitle: "In practice",
    inPractice: [
      "Every teacher's Islamic credentials personally verified",
      "All curriculum reviewed for authenticity",
      "When scholars differ, we present evidence honestly",
      "We say \"I don't know\" instead of guessing",
    ],
    whyTitle: "Why it matters",
    whyText: "You can trust that what you're learning is authentic Islam accepted by Allah, not someone's personal interpretation.",
    icon: "shield",
    accentHex: "#1D6B4A",
    accentLight: "#E4F2EB",
  },
  {
    id: "02",
    label: "VALUE 2 — EXCELLENCE · الإتقان",
    title: "The Prophet ﷺ said: \"Allah loves that when one of you does something, he does it with excellence.\"",
    body: "Every lesson planned carefully. Every question answered thoroughly. Every student treated with full attention.",
    inPracticeTitle: "In practice",
    inPractice: [
      "Teachers with minimum 3–5 years teaching experience",
      "Regular feedback sessions to improve our service",
      "Investing in good technology for clear lessons",
      "Continuous learning and development for all staff",
    ],
    whyTitle: "Why it matters",
    whyText: "Your time is valuable. We work hard to make every lesson worth it.",
    icon: "star",
    accentHex: "#A8720D",
    accentLight: "#FDF3DC",
  },
  {
    id: "03",
    label: "VALUE 3 — COMPASSION · الرحمة",
    title: "Teaching with Kindness",
    body: "Learning Quran should never be stressful or scary. We believe in encouragement, patience, and celebrating every small step of progress.",
    inPracticeTitle: "In practice",
    inPractice: [
      "Never making students feel ashamed for not knowing",
      "Understanding different learning speeds",
      "Being flexible when life challenges arise",
      "Celebrating effort as much as results",
    ],
    whyTitle: "Why it matters",
    whyText: "You'll learn in an environment of support, not pressure or criticism.",
    icon: "heart",
    accentHex: "#B84455",
    accentLight: "#FDEDF0",
  },
  {
    id: "04",
    label: "VALUE 4 — INCLUSIVITY · الشمولية",
    title: "Welcoming Everyone",
    body: "Whether you're a born Muslim or new convert, 5 years old or 75, from any country or culture — you're equally welcome and valued here.",
    inPracticeTitle: "We serve",
    inPractice: [
      "New Muslims just beginning their journey",
      "Born Muslims wanting to deepen knowledge",
      "Children, teenagers, adults, and seniors",
      "Students with special learning needs",
      "Families wanting to learn together",
      "Busy professionals with limited time",
    ],
    whyTitle: "Why it matters",
    whyText: "You're accepted exactly as you are, wherever you are in your Islamic journey.",
    icon: "globe",
    accentHex: "#2156A0",
    accentLight: "#E5EDFA",
  },
  {
    id: "05",
    label: "VALUE 5 — INTEGRITY · الأمانة",
    title: "Being Honest",
    body: "We tell you the truth about everything — realistic timelines, honest pricing, truthful progress reports, and authentic reviews.",
    inPracticeTitle: "In practice",
    inPractice: [
      "Clear pricing with no hidden fees",
      "Honest about how long things actually take",
      "Real student reviews (never fake)",
      "Admitting mistakes when we make them",
      "Protecting your privacy completely",
    ],
    whyTitle: "Why it matters",
    whyText: "You can trust us with your money, your data, your children, and your Islamic education.",
    icon: "lock",
    accentHex: "#5B3A99",
    accentLight: "#EEE8FA",
  },
  {
    id: "06",
    label: "VALUE 6 — COMMUNITY · الأخوة",
    title: "Building Relationships",
    body: "You're not just a customer or a number. We're building a community of learners who support each other in faith and knowledge.",
    inPracticeTitle: "What we offer",
    inPractice: [
      "Connection with fellow students worldwide",
      "Support groups for new Muslims",
      "Parent community for sharing experiences",
      "Continued support even after course completion",
      "Scholarships funded by our community",
    ],
    whyTitle: "Why it matters",
    whyText: "You're joining a family, not just enrolling in a service.",
    icon: "users",
    accentHex: "#0F7A6B",
    accentLight: "#E0F4F1",
  },
];

const valuesAr: ValueItem[] = [
  {
    id: "01",
    label: "القيمة 1 — الأصالة",
    title: "تعليم الإسلام الصحيح",
    body: "نحن نُدرّس فقط من المصادر الإسلامية الموثوقة: القرآن الكريم، والحديث الصحيح، وإجماع العلماء المعتمد. لا نعرض الآراء الشخصية على أنها دين.",
    inPracticeTitle: "عمليًا",
    inPractice: [
      "يتم التحقق شخصيًا من المؤهلات الشرعية لكل معلّم",
      "يتم مراجعة جميع المناهج لضمان الأصالة",
      "عند اختلاف العلماء، نعرض الأدلة بوضوح وأمانة",
      "نقول \"لا نعلم\" بدل التخمين",
    ],
    whyTitle: "لماذا هذا مهم",
    whyText: "يمكنك أن تثق أن ما تتعلمه هو الإسلام الصحيح المقبول عند الله، وليس تفسيرًا شخصيًا من أحد.",
    icon: "shield",
    accentHex: "#1D6B4A",
    accentLight: "#E4F2EB",
  },
  {
    id: "02",
    label: "القيمة 2 — الإتقان",
    title: "قال النبي ﷺ: \"إن الله يحب إذا عمل أحدكم عملًا أن يتقنه.\"",
    body: "نحن نسعى دائمًا للتحسين. كل درس يُخطط له بعناية، وكل سؤال يُجاب عنه بوضوح، وكل طالب يحظى باهتمام كامل.",
    inPracticeTitle: "عمليًا",
    inPractice: [
      "معلمون بخبرة تعليمية لا تقل عن 3-5 سنوات",
      "جلسات تغذية راجعة دورية لتطوير الخدمة",
      "الاستثمار في تقنية جيدة لضمان وضوح الدروس",
      "تعلم وتطوير مستمر للفريق",
    ],
    whyTitle: "لماذا هذا مهم",
    whyText: "وقتك ثمين، ونحن نعمل بجد حتى تكون كل حصة مستحقة.",
    icon: "star",
    accentHex: "#A8720D",
    accentLight: "#FDF3DC",
  },
  {
    id: "03",
    label: "القيمة 3 — الرحمة",
    title: "التعليم بلطف",
    body: "تعلم القرآن لا ينبغي أن يكون مرهقًا أو مخيفًا. نؤمن بالتشجيع والصبر والاحتفاء بكل خطوة تقدم صغيرة.",
    inPracticeTitle: "عمليًا",
    inPractice: [
      "لا نجعل الطالب يشعر بالخجل بسبب عدم معرفته",
      "مراعاة اختلاف سرعات التعلم بين الطلاب",
      "المرونة عند وجود تحديات وظروف حياتية",
      "الاحتفاء بالاجتهاد بقدر النتائج",
    ],
    whyTitle: "لماذا هذا مهم",
    whyText: "ستتعلم في بيئة دعم واحتواء، لا في بيئة ضغط أو نقد.",
    icon: "heart",
    accentHex: "#B84455",
    accentLight: "#FDEDF0",
  },
  {
    id: "04",
    label: "القيمة 4 — الشمولية",
    title: "الترحيب بالجميع",
    body: "سواء كنت مسلمًا منذ الولادة أو مسلمًا جديدًا، عمرك 5 سنوات أو 75 سنة، ومن أي بلد أو ثقافة — فأنت مرحب بك ومقدّر لدينا.",
    inPracticeTitle: "نخدم",
    inPractice: [
      "المسلمين الجدد في بداية رحلتهم",
      "المسلمين الراغبين في تعميق العلم",
      "الأطفال والمراهقين والبالغين وكبار السن",
      "الطلاب ذوي الاحتياجات التعليمية الخاصة",
      "العائلات التي ترغب في التعلم معًا",
      "المهنيين المشغولين ذوي الوقت المحدود",
    ],
    whyTitle: "لماذا هذا مهم",
    whyText: "أنت مقبول كما أنت تمامًا، أينما كنت في رحلتك الإيمانية.",
    icon: "globe",
    accentHex: "#2156A0",
    accentLight: "#E5EDFA",
  },
  {
    id: "05",
    label: "القيمة 5 — الأمانة",
    title: "الصدق والوضوح",
    body: "نخبرك بالحقيقة في كل شيء: مدة واقعية للتعلم، أسعار واضحة، تقارير تقدم صادقة، وتقييمات حقيقية.",
    inPracticeTitle: "عمليًا",
    inPractice: [
      "أسعار واضحة بدون رسوم مخفية",
      "الوضوح بشأن المدة الحقيقية للتقدم",
      "تقييمات طلاب حقيقية وليست مصطنعة",
      "الاعتراف بالخطأ عند حدوثه",
      "حماية كاملة لخصوصيتك",
    ],
    whyTitle: "لماذا هذا مهم",
    whyText: "يمكنك أن تأتمننا على مالك وبياناتك وأبنائك وتعليمك الإسلامي.",
    icon: "lock",
    accentHex: "#5B3A99",
    accentLight: "#EEE8FA",
  },
  {
    id: "06",
    label: "القيمة 6 — الأخوة",
    title: "بناء العلاقات",
    body: "أنت لست مجرد عميل أو رقم. نحن نبني مجتمعًا من المتعلمين يدعم بعضهم بعضًا في الإيمان والعلم.",
    inPracticeTitle: "ما نقدمه",
    inPractice: [
      "التواصل مع طلاب من أنحاء العالم",
      "مجموعات دعم للمسلمين الجدد",
      "مجتمع أولياء أمور لتبادل الخبرات",
      "دعم مستمر حتى بعد إكمال الدورة",
      "منح دراسية ممولة من مجتمعنا",
    ],
    whyTitle: "لماذا هذا مهم",
    whyText: "أنت تنضم إلى عائلة، وليس مجرد خدمة تعليمية.",
    icon: "users",
    accentHex: "#0F7A6B",
    accentLight: "#E0F4F1",
  },
];

const differentiators = [
  { icon: "✦", text: "Personal Attention — We know our students by name and celebrate your progress" },
  { icon: "✦", text: "Quality Over Quantity — We carefully select every teacher and verify their qualifications" },
  { icon: "✦", text: "Honest & Realistic — We give you honest timelines based on real student experiences" },
  { icon: "✦", text: "Direct Communication — When you contact us, you reach real people who care" },
  { icon: "✦", text: "Flexibility — Being small means we can quickly adapt to student needs" },
  { icon: "✦", text: "Affordable Pricing — We keep prices fair because this is service to Allah first" },
];

const differentiatorsAr = [
  { icon: "✦", text: "اهتمام شخصي — نعرف طلابنا بالاسم ونحتفي بتقدمهم" },
  { icon: "✦", text: "الجودة قبل الكمية — نختار كل معلم بعناية ونتحقق من مؤهلاته" },
  { icon: "✦", text: "صراحة وواقعية — نعطيك تقديرات واقعية مبنية على تجارب حقيقية" },
  { icon: "✦", text: "تواصل مباشر — عندما تتواصل معنا تتحدث مع أشخاص حقيقيين يهتمون بك" },
  { icon: "✦", text: "مرونة عالية — كوننا أصغر يسمح لنا بالتكيف سريعًا مع احتياجات الطلاب" },
  { icon: "✦", text: "أسعار عادلة — نحافظ على أسعار مناسبة لأن هذه خدمة لله أولًا" },
];

/* ── Pixel/box icon SVGs ─────────────────────────────────────── */
function PixelIcon({ icon, color }: { icon: ValueItem["icon"]; color: string }) {
  const s = { stroke: color, fill: "none", strokeWidth: "2.4", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (icon === "shield")
    return (
      <svg viewBox="0 0 48 48" width="52" height="52" aria-hidden>
        <rect x="8" y="4" width="32" height="4" rx="1" fill={color} opacity=".18" />
        <rect x="4" y="8" width="4" height="28" rx="1" fill={color} opacity=".18" />
        <rect x="40" y="8" width="4" height="28" rx="1" fill={color} opacity=".18" />
        <rect x="8" y="36" width="8" height="4" rx="1" fill={color} opacity=".18" />
        <rect x="32" y="36" width="8" height="4" rx="1" fill={color} opacity=".18" />
        <rect x="16" y="40" width="16" height="4" rx="1" fill={color} opacity=".18" />
        <path d="M24 6 10 11v10c0 9 6 15 14 17 8-2 14-8 14-17V11L24 6Z" {...s} />
        <path d="M18 24l4 4 8-8" {...s} />
      </svg>
    );
  if (icon === "star")
    return (
      <svg viewBox="0 0 48 48" width="52" height="52" aria-hidden>
        <rect x="21" y="2" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <rect x="38" y="15" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <rect x="2" y="15" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <rect x="8" y="38" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <rect x="34" y="38" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <polygon points="24 5.6 29.6 17.2 42.4 19 33.2 28 35.4 40.8 24 34.8 12.6 40.8 14.8 28 5.6 19 18.4 17.2 24 5.6" {...s} />
      </svg>
    );
  if (icon === "heart")
    return (
      <svg viewBox="0 0 48 48" width="52" height="52" aria-hidden>
        <rect x="4" y="10" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <rect x="38" y="10" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <rect x="21" y="40" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <rect x="10" y="38" width="6" height="4" rx="1" fill={color} opacity=".14" />
        <rect x="32" y="38" width="6" height="4" rx="1" fill={color} opacity=".14" />
        <path d="M24 40S8 30.4 8 19a8.8 8.8 0 0 1 16-5 8.8 8.8 0 0 1 16 5c0 11.4-16 21-16 21Z" {...s} />
      </svg>
    );
  if (icon === "globe")
    return (
      <svg viewBox="0 0 48 48" width="52" height="52" aria-hidden>
        <rect x="2" y="21" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <rect x="40" y="21" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <rect x="21" y="2" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <rect x="21" y="40" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <circle cx="24" cy="24" r="18" {...s} />
        <path d="M6 24h36M24 6c5.6 4.8 8.4 10.8 8.4 18S29.6 37.2 24 42M24 6c-5.6 4.8-8.4 10.8-8.4 18S18.4 37.2 24 42" {...s} />
      </svg>
    );
  if (icon === "lock")
    return (
      <svg viewBox="0 0 48 48" width="52" height="52" aria-hidden>
        <rect x="4" y="20" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <rect x="38" y="20" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <rect x="4" y="38" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <rect x="38" y="38" width="6" height="6" rx="1" fill={color} opacity=".2" />
        <rect x="9" y="20" width="30" height="22" rx="4" {...s} />
        <path d="M16 20v-5.6A8.2 8.2 0 0 1 32 15v5" {...s} />
        <circle cx="24" cy="31" r="2.5" fill={color} />
      </svg>
    );
  return (
    <svg viewBox="0 0 48 48" width="52" height="52" aria-hidden>
      <rect x="2" y="32" width="6" height="6" rx="1" fill={color} opacity=".2" />
      <rect x="40" y="32" width="6" height="6" rx="1" fill={color} opacity=".2" />
      <rect x="18" y="2" width="6" height="6" rx="1" fill={color} opacity=".2" />
      <circle cx="18" cy="16" r="6.4" {...s} />
      <circle cx="34" cy="18" r="5" {...s} />
      <path d="M5 38a13 13 0 0 1 26 0M27 38a8.8 8.8 0 0 1 17.6 0" {...s} />
    </svg>
  );
}

/* ── Animated pixel decoration block ────────────────────────── */
function PixelDecor({ color, side }: { color: string; side: "left" | "right" }) {
  const align = side === "left" ? { right: 0 } : { left: 0 };
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        ...align,
        display: "grid",
        gridTemplateColumns: "repeat(4, 14px)",
        gridTemplateRows: "repeat(4, 14px)",
        gap: "4px",
        padding: "6px",
      }}
    >
      {Array.from({ length: 16 }, (_, i) => {
        const opacity = [0.9, 0.4, 0.7, 0.2, 0.3, 0.85, 0.15, 0.6, 0.75, 0.25, 0.5, 0.9, 0.1, 0.65, 0.35, 0.8][i];
        const delay = `${(i * 0.18) % 2}s`;
        return (
          <span
            key={i}
            style={{
              width: 14,
              height: 14,
              borderRadius: 3,
              background: color,
              opacity,
              animation: `pixelPulse 2.4s ease-in-out ${delay} infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

export default function AboutValuesPageContent() {
  const { locale } = useI18n();
  const isAr = locale === "ar";
  const pageValues = isAr ? valuesAr : values;
  const pageDifferentiators = isAr ? differentiatorsAr : differentiators;

  return (
    <div dir={isAr ? "rtl" : "ltr"} style={{ background: "#F4F1EB", color: "#1A2E25", fontFamily: "'Georgia', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes pixelPulse {
          0%,100% { opacity: var(--op, .5); transform: scale(1);    }
          50%     { opacity: calc(var(--op, .5) * .35); transform: scale(.7); }
        }
        @keyframes iconFloat {
          0%,100% { transform: translateY(0)   rotate(0deg);  }
          50%     { transform: translateY(-8px) rotate(3deg);  }
        }
        @keyframes orbitCW {
          from { transform: rotate(0deg)   translateX(36px) rotate(0deg);   }
          to   { transform: rotate(360deg) translateX(36px) rotate(-360deg); }
        }
        @keyframes orbitCCW {
          from { transform: rotate(0deg)    translateX(28px) rotate(0deg);    }
          to   { transform: rotate(-360deg) translateX(28px) rotate(360deg);  }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-140%); }
          100% { transform: translateX(140%);  }
        }
        @keyframes heroPulse {
          0%,100% { opacity: .55; transform: scaleX(1);    }
          50%     { opacity: .85; transform: scaleX(1.06); }
        }
        .page-root { font-family: 'DM Sans', sans-serif; }
        .serif     { font-family: 'Cormorant Garamond', Georgia, serif; }

        .hero-in { opacity: 0; animation: fadeUp 700ms ease forwards; }
        .d1 { animation-delay: .08s; }
        .d2 { animation-delay: .22s; }
        .d3 { animation-delay: .36s; }
        .d4 { animation-delay: .50s; }

        .val-card {
          opacity: 0;
          animation: fadeUp 600ms ease forwards;
          transition: box-shadow 280ms ease, border-color 280ms ease;
        }
        .val-card:hover {
          box-shadow: 0 24px 56px rgba(20,50,38,.12);
        }

        .icon-bg {
          transition: transform 280ms ease, background 280ms ease;
        }
        .val-card:hover .icon-bg {
          transform: scale(1.07);
        }
        .icon-svg {
          animation: iconFloat 3.4s ease-in-out infinite;
        }
        .val-card:hover .icon-svg {
          animation-duration: 2s;
        }

        .orbit-ring {
          position: absolute; inset: 0;
          pointer-events: none;
        }
        .orbit-dot {
          position: absolute;
          top: 50%; left: 50%;
          width: 8px; height: 8px;
          margin: -4px;
          border-radius: 2px;
          animation: orbitCW 5s linear infinite;
        }
        .orbit-dot-2 {
          animation: orbitCCW 7s linear infinite;
          width: 6px; height: 6px;
          margin: -3px;
        }

        .shimmer-bar {
          position: absolute; inset: 0;
          overflow: hidden;
          border-radius: inherit;
          pointer-events: none;
        }
        .shimmer-bar::after {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.32), transparent);
          animation: shimmer 2.6s ease-in-out infinite;
        }
        .val-card:not(:hover) .shimmer-bar::after {
          animation-play-state: paused;
        }

        .practice-dot {
          width: 6px; height: 6px; min-width: 6px;
          border-radius: 1px;
          display: inline-block;
          margin-top: 7px;
        }

        .diff-card {
          transition: background 240ms ease, transform 220ms ease;
          cursor: default;
        }
        .diff-card:hover {
          transform: translateX(6px);
        }
      `}</style>

      <div className="page-root">

        {/* ── HERO ──────────────────────────────────────────── */}
        <section style={{ padding: "80px 24px 64px", position: "relative", overflow: "hidden" }}>
          <div
            aria-hidden
            style={{
              position: "absolute", left: "50%", top: 24,
              transform: "translateX(-50%)",
              width: 600, height: 120,
              background: "radial-gradient(ellipse, rgba(184,134,11,.22) 0%, transparent 70%)",
              animation: "heroPulse 3.6s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />

          <div
            className="hero-in d1"
            style={{
              maxWidth: 860, margin: "0 auto",
              background: "linear-gradient(145deg, #173428 0%, #1C4238 50%, #204840 100%)",
              borderRadius: 28,
              padding: "56px 40px",
              textAlign: "center",
              border: "1px solid rgba(184,134,11,.35)",
              boxShadow: "0 24px 64px rgba(10,28,22,.32)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* corner pixel clusters */}
            {(["topLeft","topRight","bottomLeft","bottomRight"] as const).map(pos => (
              <div
                key={pos}
                aria-hidden
                style={{
                  position: "absolute",
                  ...(pos.includes("top") ? { top: 12 } : { bottom: 12 }),
                  ...(pos.includes("Left") ? { left: 12 } : { right: 12 }),
                  display: "grid",
                  gridTemplateColumns: "repeat(3,8px)",
                  gap: 3,
                }}
              >
                {Array.from({length:9},(_,i)=>(
                  <span
                    key={i}
                    style={{
                      width:8,height:8,
                      borderRadius:2,
                      background:"#B8860B",
                      opacity:[.7,.3,.1,.3,.6,.2,.1,.2,.5][i],
                      animation:`pixelPulse ${2+i*0.2}s ease-in-out ${i*0.15}s infinite`,
                    }}
                  />
                ))}
              </div>
            ))}

            <p
              className="hero-in d2"
              style={{
                fontFamily:"'DM Sans',sans-serif",
                fontSize:11, fontWeight:600,
                letterSpacing:"0.22em",
                textTransform:"uppercase",
                color:"#D6B46A", marginBottom:16,
              }}
            >
              {isAr ? "الصفحة 3 — قيمنا" : "PAGE 3 — OUR VALUES"}
            </p>

            <h1
              className="serif hero-in d3"
              style={{
                fontSize:"clamp(2rem,5vw,3.4rem)",
                fontWeight:700, lineHeight:1.2,
                color:"#F5EEE1", marginBottom:20,
                letterSpacing:"-.01em",
              }}
            >
              {isAr ? "القيم التي نعيش بها" : "The Values We Live By"}
            </h1>

            <p
              className="hero-in d4"
              style={{
                fontSize:16, lineHeight:1.9,
                color:"#A8CCBC", maxWidth:560, margin:"0 auto",
              }}
            >
              {isAr
                ? "هذه ليست مجرد كلمات على موقع — بل مبادئ نطبقها يوميًا في كل درس، وكل تواصل، وكل قرار."
                : "These aren't just words on a website — they're principles we practice daily in every lesson, every interaction, every decision."}
            </p>

            {/* gold rule */}
            <div
              aria-hidden
              style={{
                width:64, height:2,
                background:"linear-gradient(90deg, transparent, #B8860B, transparent)",
                margin:"28px auto 0",
                borderRadius:2,
              }}
            />
          </div>
        </section>

        {/* ── VALUE CARDS ────────────────────────────────────── */}
        <section style={{ maxWidth:960, margin:"0 auto", padding:"0 20px 40px" }}>
          <div style={{ display:"flex", flexDirection:"column", gap:28 }}>
            {pageValues.map((v, idx) => {
              const flip = isAr ? idx % 2 === 0 : idx % 2 === 1;
              return (
                <article
                  key={v.id}
                  className="val-card"
                  style={{
                    animationDelay:`${0.1 + idx * 0.1}s`,
                    background:"#FFFDF8",
                    borderRadius:24,
                    border:"1px solid rgba(200,185,155,.5)",
                    overflow:"hidden",
                    display:"grid",
                    gridTemplateColumns:"140px 1fr",
                    ...(flip ? { direction:"rtl" } : {}),
                  }}
                >
                  {/* ── ICON COLUMN ── */}
                  <div
                    style={{
                      background: v.accentLight,
                      display:"flex",
                      flexDirection:"column",
                      alignItems:"center",
                      justifyContent:"center",
                      padding:"32px 12px",
                      gap:20,
                      position:"relative",
                      direction:"ltr",
                      borderRight: flip ? "none" : `1px solid rgba(200,185,155,.4)`,
                      borderLeft:  flip ? `1px solid rgba(200,185,155,.4)` : "none",
                    }}
                  >
                    {/* pixel decor */}
                    <PixelDecor color={v.accentHex} side={flip ? "right" : "left"} />

                    {/* number badge */}
                    <span
                      style={{
                        fontSize:11,fontWeight:700,
                        letterSpacing:"0.15em",
                        color:v.accentHex,
                        opacity:.6,
                        fontFamily:"'DM Sans',sans-serif",
                      }}
                    >
                      {v.id}
                    </span>

                    {/* icon ring */}
                    <div
                      style={{
                        position:"relative",
                        width:96, height:96,
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                      }}
                    >
                      {/* orbiting dots */}
                      <div className="orbit-ring">
                        <span
                          className="orbit-dot"
                          style={{ background:v.accentHex, opacity:.55 }}
                        />
                        <span
                          className="orbit-dot orbit-dot-2"
                          style={{ background:v.accentHex, opacity:.35, animationDelay:".8s" }}
                        />
                      </div>

                      <div
                        className="icon-bg"
                        style={{
                          width:76, height:76,
                          borderRadius:18,
                          background:"#FFFFFF",
                          border:`1.5px solid ${v.accentHex}30`,
                          display:"flex",
                          alignItems:"center",
                          justifyContent:"center",
                          boxShadow:`0 4px 20px ${v.accentHex}20`,
                          position:"relative",
                          overflow:"hidden",
                          zIndex:1,
                        }}
                      >
                        <div className="shimmer-bar" />
                        <span className="icon-svg">
                          <PixelIcon icon={v.icon} color={v.accentHex} />
                        </span>
                      </div>
                    </div>

                    {/* vertical label */}
                    <span
                      style={{
                        writingMode:"vertical-rl",
                        textOrientation:"mixed",
                        fontSize:9,fontWeight:600,
                        letterSpacing:"0.18em",
                        textTransform:"uppercase",
                        color:v.accentHex,
                        opacity:.45,
                        fontFamily:"'DM Sans',sans-serif",
                      }}
                    >
                      {v.icon}
                    </span>
                  </div>

                  {/* ── CONTENT COLUMN ── */}
                  <div style={{ padding:"28px 28px 28px", direction: isAr ? "rtl" : "ltr", textAlign: isAr ? "right" : "left" }}>
                    {/* label */}
                    <p
                      style={{
                        fontSize:10,fontWeight:700,
                        letterSpacing:"0.2em",
                        textTransform:"uppercase",
                        color:v.accentHex,
                        marginBottom:10,
                        fontFamily:"'DM Sans',sans-serif",
                      }}
                    >
                      {v.label}
                    </p>

                    {/* title */}
                    <h2
                      className="serif"
                      style={{
                        fontSize:"clamp(1.1rem,2.5vw,1.45rem)",
                        fontWeight:700,lineHeight:1.35,
                        color:"#182820",
                        marginBottom:12,
                      }}
                    >
                      {v.title}
                    </h2>

                    {/* body */}
                    <p
                      style={{
                        fontSize:14,lineHeight:1.85,
                        color:"#3D5A4A",
                        marginBottom:20,
                        fontFamily:"'DM Sans',sans-serif",
                      }}
                    >
                      {v.body}
                    </p>

                    {/* two columns: practice + why */}
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                      {/* in practice */}
                      <div
                        style={{
                          background: v.accentLight,
                          borderRadius:14,
                          padding:"14px 16px",
                          border:`1px solid ${v.accentHex}18`,
                        }}
                      >
                        <p
                          style={{
                            fontSize:10,fontWeight:700,
                            letterSpacing:"0.16em",
                            textTransform:"uppercase",
                            color:v.accentHex,
                            marginBottom:10,
                            fontFamily:"'DM Sans',sans-serif",
                          }}
                        >
                          {v.inPracticeTitle}
                        </p>
                        <ul style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexDirection:"column", gap:7 }}>
                          {v.inPractice.map(item => (
                            <li
                              key={item}
                              style={{
                                display:"flex", alignItems:"flex-start", gap:8, flexDirection: isAr ? "row-reverse" : "row",
                                fontSize:13,lineHeight:1.6,
                                color:"#2E4D3C",
                                fontFamily:"'DM Sans',sans-serif",
                                textAlign: isAr ? "right" : "left",
                              }}
                            >
                              <span
                                className="practice-dot"
                                style={{ background:v.accentHex, opacity:.7 }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* why */}
                      <div
                        style={{
                          background:"#FFFFFF",
                          borderRadius:14,
                          padding:"14px 16px",
                          border:`1px solid rgba(200,185,155,.45)`,
                          display:"flex",
                          flexDirection:"column",
                          gap:10,
                        }}
                      >
                        <p
                          style={{
                            fontSize:10,fontWeight:700,
                            letterSpacing:"0.16em",
                            textTransform:"uppercase",
                            color:"#8A6E3A",
                            fontFamily:"'DM Sans',sans-serif",
                          }}
                        >
                          {v.whyTitle}
                        </p>
                        <p
                          style={{
                            fontSize:13,lineHeight:1.75,
                            color:"#2E4D3C",
                            fontFamily:"'DM Sans',sans-serif",
                            fontStyle:"italic",
                          }}
                        >
                          {v.whyText}
                        </p>
                        {/* accent stripe */}
                        <div
                          style={{
                            height:3, width:40,
                            background:v.accentHex,
                            borderRadius:2,
                            marginTop:"auto",
                            opacity:.55,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── DIFFERENTIATORS ────────────────────────────────── */}
        <section style={{ maxWidth:960, margin:"0 auto", padding:"8px 20px 80px" }}>
          <div
            style={{
              background:"linear-gradient(150deg, #173428 0%, #1E4438 60%, #1A3C32 100%)",
              borderRadius:28,
              padding:"44px 40px",
              border:"1px solid rgba(184,134,11,.28)",
              boxShadow:"0 18px 48px rgba(10,28,22,.26)",
              position:"relative",
              overflow:"hidden",
            }}
          >
            {/* bg pixel grid */}
            <div
              aria-hidden
              style={{
                position:"absolute",right:24,top:24,
                display:"grid",gridTemplateColumns:"repeat(6,10px)",gap:4,
              }}
            >
              {Array.from({length:24},(_,i)=>(
                <span
                  key={i}
                  style={{
                    width:10,height:10,borderRadius:2,
                    background:"#B8860B",
                    opacity:[.5,.2,.7,.1,.4,.9,.3,.6,.15,.8,.25,.55,.45,.1,.7,.35,.6,.2,.85,.4,.15,.7,.3,.5][i]*0.4,
                    animation:`pixelPulse ${2+i*0.15}s ease-in-out ${i*0.12}s infinite`,
                  }}
                />
              ))}
            </div>

            <p
              style={{
                fontSize:11,fontWeight:700,
                letterSpacing:"0.2em",
                textTransform:"uppercase",
                color:"#D6B46A",
                marginBottom:8,
                fontFamily:"'DM Sans',sans-serif",
              }}
            >
              {isAr ? "ما الذي يميزنا" : "What Makes Us Different"}
            </p>

            <h2
              className="serif"
              style={{
                fontSize:"clamp(1.4rem,3vw,2rem)",
                fontWeight:700,
                color:"#F5EEE1",
                marginBottom:32,
                lineHeight:1.3,
              }}
            >
              {isAr ? (
                <>
                  لسنا الأكبر حجمًا.
                  <br />
                  وهذا في الحقيقة مصدر قوتنا.
                </>
              ) : (
                <>
                  We're not the biggest.
                  <br />
                  That's actually our strength.
                </>
              )}
            </h2>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:12 }}>
              {pageDifferentiators.map(d => (
                <div
                  key={d.text}
                  className="diff-card"
                  style={{
                    display:"flex",alignItems:"flex-start",gap:12,
                    background:"rgba(255,255,255,.06)",
                    borderRadius:14,
                    padding:"14px 16px",
                    border:"1px solid rgba(255,255,255,.09)",
                  }}
                >
                  <span
                    style={{
                      fontSize:14,color:"#D6B46A",
                      marginTop:2,flexShrink:0,
                      fontFamily:"'DM Sans',sans-serif",
                    }}
                  >
                    {d.icon}
                  </span>
                  <p
                    style={{
                      fontSize:13,lineHeight:1.7,
                      color:"#C2D8CE",
                      fontFamily:"'DM Sans',sans-serif",
                      textAlign: isAr ? "right" : "left",
                    }}
                  >
                    {d.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}