"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/LocaleProvider";

/* ─────────── data ─────────── */

const beginningChallenges = [
  { icon: "mosque", text: { en: "Local mosques had limited resources for teaching non-Arabic speakers", ar: "المساجد المحلية كانت تملك موارد محدودة لتعليم غير الناطقين بالعربية." } },
  { icon: "plane", text: { en: "Most qualified teachers were only available in Arabic-speaking countries", ar: "أغلب المعلمين المؤهلين كانوا متاحين فقط في الدول الناطقة بالعربية." } },
  { icon: "wallet", text: { en: "Existing online options were either too expensive or lacked authentic scholarship", ar: "الخيارات المتاحة عبر الإنترنت كانت إما مرتفعة التكلفة أو تفتقر للتأصيل العلمي الصحيح." } },
  { icon: "help", text: { en: "New Muslims often felt lost, not knowing where to start", ar: "كثير من المسلمين الجدد كانوا يشعرون بالحيرة ولا يعرفون من أين يبدؤون." } },
];

// ⬇️ هنا التعديل: كل عنصر بقى فيه "img" بدل "icon" علشان نستخدم SVG الحقيقي بتاعك
const symbolismItems = [
  { img: "/images/why/lantern.svg", color: "#FFF8E1", border: "#F5C842", title: { en: "Light in Darkness", ar: "نور في الظلام" }, desc: { en: "Making the Quran clear for non-Arabic speakers", ar: "توضيح القرآن لغير الناطقين بالعربية" } },
  { img: "/images/why/compass.svg", color: "#E8F5ED", border: "#4A9E6B", title: { en: "Guidance & Direction", ar: "هداية واتجاه" }, desc: { en: "Step-by-step from where you are to where you want to be", ar: "خطوة بخطوة من مكانك الحالي إلى هدفك" } },
  { img: "/images/why/warmth.svg", color: "#FEF0E8", border: "#E07B3F", title: { en: "Warmth & Welcome", ar: "دفء وترحيب" }, desc: { en: "Every student feels welcomed, supported, and valued", ar: "كل طالب يشعر بالترحيب والدعم والتقدير" } },
  { img: "/images/why/globe.svg", color: "#E8F0FE", border: "#4A78D4", title: { en: "Portable & Accessible", ar: "قريب وسهل الوصول" }, desc: { en: "Bringing authentic education to you, wherever you are", ar: "ننقل التعليم الأصيل إليك أينما كنت" } },
];

const timelineItems = [
  {
    era: { en: "Early 2025", ar: "بداية 2025" },
    label: { en: "The Launch", ar: "الانطلاقة" },
    text: { en: "Started with one teacher and 8 pioneering students, teaching from a small home office — a simple but sincere beginning.", ar: "بدأنا بمعلم واحد و8 طلاب رواد من مكتب منزلي صغير، وكانت بداية بسيطة لكنها صادقة." },
    icon: "seedling",
  },
  {
    era: { en: "Mid 2025", ar: "منتصف 2025" },
    label: { en: "Growing", ar: "مرحلة النمو" },
    text: { en: "A small dedicated team of qualified teachers. Students from multiple countries across continents, improving constantly based on student feedback.", ar: "كوّنا فريقًا صغيرًا ومخلصًا من معلمين مؤهلين، ووصلنا لطلاب من دول متعددة مع تطوير مستمر بناءً على ملاحظاتهم." },
    icon: "chart",
  },
  {
    era: { en: "Today", ar: "اليوم" },
    label: { en: "What Hasn't Changed", ar: "ما لم يتغير" },
    text: { en: "Personal attention to every student, authentic scholarship, affordable honest pricing, and genuine care for each learner's success.", ar: "الاهتمام الشخصي بكل طالب، والعلم الأصيل، والتسعير العادل، والحرص الحقيقي على نجاح كل متعلم." },
    icon: "heart",
  },
];

const visionItems = [
  { num: "01", icon: "target", title: { en: "Serve with Quality", ar: "خدمة بجودة عالية" }, desc: { en: "Help students deeply connect with the Quran — transformation over growth numbers", ar: "نساعد الطلاب على الارتباط العميق بالقرآن، فالتحول أهم من مجرد الأرقام." }, bg: "#F0F7FF" },
  { num: "02", icon: "handshake", title: { en: "Build Real Relationships", ar: "بناء علاقات حقيقية" }, desc: { en: "A community where students and teachers truly support each other", ar: "مجتمع يدعم فيه الطلاب والمعلمون بعضهم بصدق." }, bg: "#F0FBF4" },
  { num: "03", icon: "unlock", title: { en: "Make Islam Accessible", ar: "تيسير تعلم الإسلام" }, desc: { en: "Ensure every sincere Muslim can access authentic education without financial burden", ar: "نضمن لكل مسلم صادق فرصة الوصول لتعليم أصيل دون عبء مالي." }, bg: "#FFFBF0" },
  { num: "04", icon: "scroll", title: { en: "Preserve Authenticity", ar: "حفظ الأصالة" }, desc: { en: "Maintain highest standards while making it understandable worldwide", ar: "نحافظ على أعلى المعايير مع تقديم العلم بصورة مفهومة عالميًا." }, bg: "#FFF0F0" },
];

/* ─────────── helpers ─────────── */

function Divider() {
  return (
    <div className="my-14 flex items-center gap-4">
      <span className="h-px flex-1 bg-[#C79B3B]/20" />
      <span className="font-serif text-xl text-[#C79B3B]/60">نبراس</span>
      <span className="h-px flex-1 bg-[#C79B3B]/20" />
    </div>
  );
}

function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M50 10c0 20-15 30-15 30s15 10 15 30c0-20 15-30 15-30S50 30 50 10Z" />
      <circle cx="50" cy="50" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DiamondDot({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M10 0 L13 7 L20 10 L13 13 L10 20 L7 13 L0 10 L7 7 Z" />
    </svg>
  );
}

function MandalaFlower({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" aria-hidden>
      <g fill="currentColor">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <ellipse key={deg} cx="30" cy="18" rx="4.2" ry="9" transform={`rotate(${deg} 30 30)`} opacity="0.9" />
        ))}
      </g>
      <circle cx="30" cy="30" r="5" fill="#FCFAF5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function LeafBranch({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 200" fill="none" aria-hidden>
      <path d="M210 6C160 18 120 40 92 78" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <g fill="currentColor">
        <ellipse cx="165" cy="18" rx="20" ry="10" transform="rotate(-28 165 18)" opacity="0.55" />
        <ellipse cx="140" cy="34" rx="18" ry="9" transform="rotate(-18 140 34)" opacity="0.6" />
        <ellipse cx="118" cy="54" rx="17" ry="8.5" transform="rotate(-8 118 54)" opacity="0.65" />
        <ellipse cx="98" cy="76" rx="15" ry="7.5" transform="rotate(2 98 76)" opacity="0.7" />
        <ellipse cx="190" cy="10" rx="14" ry="7" transform="rotate(-40 190 10)" opacity="0.5" />
      </g>
    </svg>
  );
}

function LaurelMotif({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 30" fill="none" aria-hidden>
      <g fill="currentColor" opacity="0.75">
        <ellipse cx="18" cy="16" rx="8" ry="4" transform="rotate(24 18 16)" />
        <ellipse cx="31" cy="12" rx="7" ry="3.4" transform="rotate(12 31 12)" />
        <ellipse cx="69" cy="12" rx="7" ry="3.4" transform="rotate(-12 69 12)" />
        <ellipse cx="82" cy="16" rx="8" ry="4" transform="rotate(-24 82 16)" />
      </g>
      <circle cx="50" cy="14" r="2.6" fill="#C79B3B" />
    </svg>
  );
}

function StoryIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const base = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "mosque":
      return (
        <svg {...base}>
          {/* base line */}
          <path d="M2 20h20" />
          {/* left minaret */}
          <rect x="3" y="9" width="2.5" height="11" rx="0.4" />
          <path d="M3 9C3 8 4.25 6.5 4.25 6.5S5.5 8 5.5 9" />
          <line x1="4.25" y1="6.5" x2="4.25" y2="5" strokeWidth="1.2" />
          <circle cx="4.25" cy="4.6" r="0.6" fill="currentColor" stroke="none" />
          {/* right minaret */}
          <rect x="18.5" y="9" width="2.5" height="11" rx="0.4" />
          <path d="M18.5 9C18.5 8 19.75 6.5 19.75 6.5S21 8 21 9" />
          <line x1="19.75" y1="6.5" x2="19.75" y2="5" strokeWidth="1.2" />
          <circle cx="19.75" cy="4.6" r="0.6" fill="currentColor" stroke="none" />
          {/* main walls */}
          <path d="M6 20v-9h12v9" />
          {/* main dome */}
          <path d="M9 11V9a3 3 0 0 1 6 0v2" />
          <path d="M10.5 9C10.5 7.2 12 5.5 12 5.5S13.5 7.2 13.5 9" />
          {/* door arch */}
          <path d="M10.5 20v-4a1.5 1.5 0 0 1 3 0v4" />
          {/* windows */}
          <path d="M7.5 14.5h1.2" />
          <path d="M15.3 14.5h1.2" />
        </svg>
      );
    case "plane":
      return <svg {...base}><path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4Z" /></svg>;
    case "wallet":
      return <svg {...base}><rect x="2.5" y="6.5" width="19" height="12" rx="2.5" /><path d="M16 11h5.5v3H16a1.5 1.5 0 0 1 0-3Z" /><circle cx="17.8" cy="12.5" r=".5" fill="currentColor" /></svg>;
    case "help":
      return <svg {...base}><circle cx="12" cy="12" r="9" /><path d="M9.4 9.3a2.8 2.8 0 1 1 4.8 2c-.8.6-1.4 1.1-1.4 2.2" /><circle cx="12" cy="16.8" r=".5" fill="currentColor" /></svg>;
    case "sun":
      return <svg {...base}><circle cx="12" cy="12" r="3.2" /><path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.7 5.7l1.5 1.5M16.8 16.8l1.5 1.5M18.3 5.7l-1.5 1.5M7.2 16.8l-1.5 1.5" /></svg>;
    case "compass":
      return <svg {...base}><circle cx="12" cy="12" r="8.5" /><path d="m14.8 9.2-2.2 5.4-5.4 2.2 2.2-5.4 5.4-2.2Z" /></svg>;
    case "hands":
      return <svg {...base}><path d="M8.5 12.5 7 9.8a1.6 1.6 0 0 0-2.8 1.5l2.3 4.4a3 3 0 0 0 2.7 1.6H12" /><path d="M15.5 12.5 17 9.8a1.6 1.6 0 0 1 2.8 1.5l-2.3 4.4a3 3 0 0 1-2.7 1.6H12" /><path d="M12 9v8" /></svg>;
    case "globe":
      return <svg {...base}><circle cx="12" cy="12" r="8.5" /><path d="M3.8 9h16.4M3.8 15h16.4M12 3.5c2.4 2.2 3.7 5.2 3.7 8.5S14.4 18.3 12 20.5M12 3.5C9.6 5.7 8.3 8.7 8.3 12s1.3 6.3 3.7 8.5" /></svg>;
    case "seedling":
      return <svg {...base}><path d="M12 20v-7" /><path d="M12 13c0-3.3 2.7-6 6-6-0 3.3-2.7 6-6 6Z" /><path d="M12 15c0-2.8-2.2-5-5-5 0 2.8 2.2 5 5 5Z" /></svg>;
    case "chart":
      return <svg {...base}><path d="M4 19h16" /><path d="m6.5 14 3-3 2.5 2.5 5-5" /><circle cx="6.5" cy="14" r=".9" fill="currentColor" /><circle cx="9.5" cy="11" r=".9" fill="currentColor" /><circle cx="12" cy="13.5" r=".9" fill="currentColor" /><circle cx="17" cy="8.5" r=".9" fill="currentColor" /></svg>;
    case "heart":
      return <svg {...base}><path d="M12 20s-6.8-4.2-8.5-7.8A5 5 0 0 1 12 6a5 5 0 0 1 8.5 6.2C18.8 15.8 12 20 12 20Z" /></svg>;
    case "target":
      return <svg {...base}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1.2" fill="currentColor" /></svg>;
    case "handshake":
      return <svg {...base}><path d="M3.5 8.5h4l2.2 2.2a2 2 0 0 0 2.8 0l.5-.5a2 2 0 0 1 2.8 0L20.5 14" /><path d="m7.5 15 2.2 2.2a1.6 1.6 0 0 0 2.3 0l1.3-1.3" /><path d="m12 17.2.8.8a1.6 1.6 0 0 0 2.3 0l2.2-2.2" /></svg>;
    case "unlock":
      return <svg {...base}><rect x="4.5" y="10" width="15" height="10" rx="2" /><path d="M8 10V7.8A4.2 4.2 0 0 1 15.5 5" /></svg>;
    case "scroll":
      return <svg {...base}><path d="M7 4h10a3 3 0 1 1 0 6H7a3 3 0 1 0 0 6h10" /><path d="M7 4a3 3 0 0 0 0 6" /><path d="M17 20a3 3 0 0 0 0-6" /></svg>;
    case "lantern":
      return (
        <svg {...base}>
          {/* chain */}
          <line x1="12" y1="2" x2="12" y2="5" />
          {/* ring at top */}
          <path d="M9.5 5h5a.5.5 0 0 1 .5.5v.5H9v-.5a.5.5 0 0 1 .5-.5Z" fill="currentColor" stroke="none" />
          {/* body */}
          <path d="M7.5 6.5h9l1.5 7h-12Z" />
          {/* flame glow inner */}
          <path d="M10.5 11.5c.3-1 .8-1.8 1.5-2.2.7.4 1.2 1.2 1.5 2.2" strokeWidth="1.2" />
          {/* mid band */}
          <rect x="7" y="13.5" width="10" height="1.2" rx=".6" fill="currentColor" stroke="none" />
          {/* lower body */}
          <path d="M7.5 14.7h9l-1 4.3H8.5Z" />
          {/* base disc */}
          <ellipse cx="12" cy="19" rx="3.8" ry="1" fill="currentColor" stroke="none" />
          {/* glow rays */}
          <line x1="12" y1="8.5" x2="12" y2="7.5" strokeWidth="1" />
          <line x1="9.5" y1="9.2" x2="8.8" y2="8.5" strokeWidth="1" />
          <line x1="14.5" y1="9.2" x2="15.2" y2="8.5" strokeWidth="1" />
        </svg>
      );
    case "book":
      return <svg {...base}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><path d="M8 7h6" /><path d="M8 11h8" /></svg>;
    default:
      return null;
  }
}

/* ─────────── page ─────────── */

export default function AboutStoryPageContent() {
  const { locale } = useI18n();
  const isAr = locale === "ar";

  return (
    <div className="overflow-x-hidden bg-[#F7F5F0]" dir={isAr ? "rtl" : "ltr"}>
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatIcon {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes iconPop {
          0%   { opacity: 0; transform: scale(0.4) rotate(-10deg); }
          70%  { transform: scale(1.1) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes shimmer {
          0%,100% { opacity: .5; }
          50%      { opacity: 1; }
        }
        @keyframes pulseRing {
          0%   { box-shadow: 0 0 0 0 rgba(199,155,59,.4); }
          70%  { box-shadow: 0 0 0 14px rgba(199,155,59,0); }
          100% { box-shadow: 0 0 0 0 rgba(199,155,59,0); }
        }
        @keyframes twinkle {
          0%,100% { opacity: .25; }
          50%      { opacity: .9; }
        }
        @keyframes iconGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(216,181,103,0); }
          50%      { box-shadow: 0 0 28px 8px rgba(216,181,103,.5); }
        }
        @keyframes drift {
          0%,100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50%      { transform: translateY(-14px) translateX(6px) rotate(8deg); }
        }
        @keyframes lanternSwing {
          0%,100% { transform: rotate(-6deg); }
          50%      { transform: rotate(6deg); }
        }
        @keyframes orbitRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .lantern-swing { transform-origin: top center; animation: lanternSwing 3s ease-in-out infinite; }
        .orbit-ring    { animation: orbitRing 8s linear infinite; }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .a1 { opacity:0; animation: fadeUp 680ms ease .08s forwards; }
        .a2 { opacity:0; animation: fadeUp 680ms ease .22s forwards; }
        .a3 { opacity:0; animation: fadeUp 680ms ease .36s forwards; }
        .a4 { opacity:0; animation: fadeUp 680ms ease .50s forwards; }

        .float-icon  { animation: floatIcon 3.4s ease-in-out infinite; }
        .scroll-hint { animation: shimmer 2.2s ease-in-out infinite; }
        .pulse-ring  { animation: pulseRing 2s ease-out infinite; }
        .star-twinkle { animation: twinkle 2.6s ease-in-out infinite; }
        .icon-glow   { animation: iconGlow 3s ease-in-out infinite; }
        .drift-slow  { animation: drift 6s ease-in-out infinite; }
        .spin-slow   { animation: spinSlow 22s linear infinite; }

        .icon-pop { animation: iconPop 500ms cubic-bezier(.2,.8,.2,1) both; }

        .icon-badge {
          transition: transform 260ms cubic-bezier(.2,.8,.2,1), box-shadow 260ms ease;
        }
        .icon-badge:hover {
          transform: scale(1.16) rotate(-8deg);
        }

        .hover-card {
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }
        .hover-card:hover {
          transform: translateY(-4px);
          border-color: rgba(199,155,59,.4);
          box-shadow: 0 18px 48px rgba(28,58,46,.12);
        }

        .challenge-row {
          transition: transform 180ms ease, background 180ms ease;
        }
        .challenge-row:hover {
          transform: translateX(var(--challenge-shift, 6px));
          background: rgba(199,155,59,.08);
        }

        .vis-card {
          transition: transform 200ms ease, box-shadow 200ms ease;
        }
        .vis-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(28,58,46,.1);
        }

        .timeline-card {
          transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
        }
        .timeline-card:hover {
          transform: translateY(-3px);
          border-color: rgba(199,155,59,.5);
          box-shadow: 0 14px 34px rgba(28,58,46,.1);
        }
      `}</style>

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-[calc(70px+2rem)] text-center sm:px-6 sm:pb-24 sm:pt-24 md:pt-28">
        {/* bg image */}
        <Image
          src="/images/hero_about.png"
          alt="Nibras Network hero"
          fill
          priority
          className="object-cover object-center"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#17342C]/58 via-[#1F463B]/52 to-[#17342C]/64" />
        {/* top glow */}
        <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-full max-w-[40rem] -translate-x-1/2 rounded-full bg-[#C79B3B]/16 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center">
          {/* badge */}
          <p className="a1 mb-8 inline-flex items-center gap-2 rounded-full border border-[#C79B3B]/40 bg-[#C79B3B]/12 px-5 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#D8B567] backdrop-blur-sm">
            {isAr ? "✦ قصتنا ✦" : "✦ Our Story ✦"}
          </p>

          {/* floating lantern */}
          <div className="a2 float-icon pulse-ring icon-glow mb-8 flex h-[88px] w-[88px] items-center justify-center rounded-full border border-[#C79B3B]/40 bg-[#C79B3B]/12 backdrop-blur-sm">
            <StoryIcon name="lantern" className="h-[42px] w-[42px] text-[#C79B3B]" />
          </div>

          {/* headline */}
          <h1 className="a2 mb-5 max-w-2xl font-serif text-[1.75rem] font-bold leading-[1.25] text-[#F7F1E3] min-[400px]:text-3xl sm:text-5xl md:text-[3.4rem]">
            {isAr ? "بداية بسيطة" : "A Simple Beginning"}<br />
            {isAr ? <>بحلم <span className="text-[#C79B3B]">كبير</span></> : <>with a <span className="text-[#C79B3B]">Big Dream</span></>}
          </h1>

          <p className="a3 mb-14 max-w-lg text-[15px] leading-[1.8] text-[#9BBFB0]">
            {isAr
              ? "كيف تحولت رغبة صادقة في الخدمة إلى مجتمع متنامٍ من معلمين مخلصين وطلاب متحمسين."
              : "How one person's passion to serve became a growing community of dedicated teachers and eager learners"}
          </p>

          {/* stats */}
          <div className="a4 flex flex-wrap justify-center gap-6 border-t border-[#C79B3B]/20 pt-8 sm:gap-12 sm:pt-10">
            {[
              { num: "2025", label: isAr ? "سنة التأسيس" : "Founded" },
              { num: "8+", label: isAr ? "دول" : "Countries" },
              { num: "1", label: isAr ? "رسالة" : "Mission" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold text-[#C79B3B]">{num}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[.14em] text-[#5F9080]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* scroll hint */}
        <div className="scroll-hint absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-[#4A7060]">
          <span className="text-[9px] uppercase tracking-[.14em]">{isAr ? "مرر" : "scroll"}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ══════════════ BODY ══════════════ */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:py-20 sm:px-6">

        <p className="mb-12 text-center text-[10px] font-semibold uppercase tracking-[.22em] text-[#B8892A]">
          {isAr ? "— الصفحة 1 — قصتنا —" : "— Page 1 — Our Story —"}
        </p>

        {/* ══ 1. THE BEGINNING — brand card left, text right (matches ref) ══ */}
        <section className="mb-0">
          <div className="hover-card rounded-3xl border border-[#E5D9C1] bg-white shadow-[0_6px_24px_rgba(28,58,46,.07)]">
            <div className="relative grid lg:grid-cols-[420px_1fr]">

              {/* illustration panel */}
              <div className="relative h-56 w-full overflow-hidden rounded-t-3xl sm:h-80 lg:h-auto lg:min-h-[500px] lg:rounded-s-3xl lg:rounded-tr-none">
                <Image
                  src="/images/about2.jpeg"
                  alt="Nibras Network Origin"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2019]/55 via-transparent to-transparent" />
                <Flourish className="drift-slow pointer-events-none absolute right-4 top-4 h-10 w-10 text-[#F0DBA0]/70" />
                <span className="pulse-ring absolute left-5 top-5 flex h-3 w-3 items-center justify-center rounded-full bg-[#C79B3B]" />
              </div>

              {/* ── Mushaf badge: sits ON the edge between image & text panels ── */}
              <div className="pointer-events-none absolute z-20 hidden lg:flex flex-col items-center gap-1.5 bottom-4 end-4 sm:bottom-6 sm:end-6 lg:bottom-auto lg:end-auto lg:top-1/2 lg:left-[420px] lg:-translate-x-1/2 lg:-translate-y-1/2">
                <div className="relative flex items-center justify-center">
                  {/* spinning dashed gold ring */}
                  <svg className="spin-slow pointer-events-none absolute" width="96" height="96"
                    viewBox="0 0 96 96" fill="none" aria-hidden>
                    <circle cx="48" cy="48" r="45" stroke="#C79B3B" strokeWidth="1.3"
                      strokeDasharray="7 5" strokeLinecap="round" opacity="0.6" />
                  </svg>
                  {/* pulse glow ring */}
                  <span className="pulse-ring pointer-events-none absolute inset-0 rounded-full border-2 border-[#C79B3B]/50" />
                  {/* main badge circle */}
                  <div className="icon-glow float-icon relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-[2.5px] border-[#C79B3B]/60 bg-gradient-to-br from-[#1B4332] to-[#0a1f15] shadow-[0_12px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.08)]">
                    {/* inner subtle ring */}
                    <span className="pointer-events-none absolute inset-[6px] rounded-full border border-[#C79B3B]/25" />
                    {/* ── Open Quran / Mushaf SVG ── */}
                    <svg viewBox="0 0 24 24" className="h-9 w-9 text-[#E9C878]" fill="none"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {/* spine */}
                      <line x1="12" y1="5" x2="12" y2="20" strokeWidth="1.2" />
                      {/* left page */}
                      <path d="M12 6C10 5.5 6.5 5.5 4 6.5V19.5C6.5 18.5 10 18.5 12 19" />
                      {/* right page */}
                      <path d="M12 6C14 5.5 17.5 5.5 20 6.5V19.5C17.5 18.5 14 18.5 12 19" />
                      {/* left lines */}
                      <line x1="6" y1="10" x2="10.5" y2="9.5" strokeWidth="0.9" opacity="0.7" />
                      <line x1="6" y1="13" x2="10.5" y2="12.5" strokeWidth="0.9" opacity="0.7" />
                      <line x1="6" y1="16" x2="10.5" y2="15.5" strokeWidth="0.9" opacity="0.7" />
                      {/* right lines */}
                      <line x1="18" y1="10" x2="13.5" y2="9.5" strokeWidth="0.9" opacity="0.7" />
                      <line x1="18" y1="13" x2="13.5" y2="12.5" strokeWidth="0.9" opacity="0.7" />
                      <line x1="18" y1="16" x2="13.5" y2="15.5" strokeWidth="0.9" opacity="0.7" />
                      {/* top arch */}
                      <path d="M9 6C9 4.5 10.3 3.5 12 3.5S15 4.5 15 6" strokeWidth="1.1" />
                    </svg>
                  </div>
                </div>
                {/* label */}
                <span className="rounded-full bg-[#0a1f15]/80 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[.16em] text-[#E9C878] shadow backdrop-blur-sm">
                  {isAr ? "مصحف" : "Quran"}
                </span>
              </div>

              {/* text panel */}
              <div className="flex flex-col justify-center p-4 sm:p-8 md:p-10">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[.18em] text-[#B8892A]">{isAr ? "الأصل" : "Origin"}</p>
                <h2 className="mb-5 font-serif text-3xl font-extrabold text-[#1C3A2E] sm:text-[2rem]">{isAr ? "البداية" : "The Beginning"}</h2>
                <p className="mb-5 text-[15px] leading-[1.8] text-[#4A6858]">
                  {isAr
                    ? "في بداية عام 2025 وُلِدت نبراس من ملاحظة بسيطة ونية صادقة، بعد رؤية كثير من المسلمين يواجهون صعوبة في الوصول إلى التعليم الإسلامي الأصيل بلغتهم."
                    : "In early 2025, Nibras Network was born from a simple observation and a sincere intention — witnessing countless Muslims struggling to access authentic Islamic education in their own language."}
                </p>

                {/* challenges with icon + hover slide */}
                <div className="space-y-2">
                  {beginningChallenges.map(({ icon, text }, i) => {
                    const palette = ["#2D6A4F", "#40916C", "#1B4332", "#52B788"];
                    const tint   = ["#D8F3DC", "#D8F3DC", "#D8F3DC", "#D8F3DC"];
                    return (
                      <div
                        key={text.en}
                        className="challenge-row flex items-start gap-3 rounded-xl bg-[#F7F5F0] px-3 py-2.5"
                        style={{ ["--challenge-shift" as string]: isAr ? "-6px" : "6px" }}
                      >
                        <span
                          className="icon-pop icon-badge mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-sm"
                          style={{ background: tint[i], color: palette[i], animationDelay: `${i * 0.12}s` }}
                        >
                          <StoryIcon name={icon} className="h-[18px] w-[18px]" />
                        </span>
                        <span className="pt-1 text-[14px] leading-[1.7] text-[#4A6858]">{isAr ? text.ar : text.en}</span>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-5 text-[15px] leading-[1.8] text-[#4A6858]">
                  {isAr
                    ? "فكان الحل أن نبني منصة بسيطة وسهلة الوصول، يصل من خلالها العلم الشرعي الأصيل لأي شخص في أي مكان، بأسلوب صبور ومنهج مؤهل."
                    : "The solution: create a simple, accessible platform where authentic Islamic knowledge could reach anyone, anywhere — taught with patience and proper qualification."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

      </div>

      {/* ══ 2. WHY NIBRAS — wider breakout section ══ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="hover-card relative overflow-hidden rounded-3xl border border-[#E5D9C1] shadow-[0_8px_32px_rgba(28,58,46,.09)]">
            
            {/* Background Image: covers the entire section */}
            <Image
              src="/images/why/why2.png"
              alt="Why Nibras Background"
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
className={`object-cover object-center brightness-100 contrast-100 saturate-100 ${isAr ? "-scale-x-100" : ""}`}
            />

            {/* soft overlay for readability — lightened so the background artwork (lantern, arches) stays visible */}

            <div className="relative z-10 flex flex-col lg:flex-row min-h-[720px] xl:min-h-[780px]">
              
              {/* Left Column: Text */}
              <div className="w-full lg:w-[46%] xl:w-[44%] flex flex-col justify-center p-6 sm:p-10 lg:p-12 xl:p-14" dir={isAr ? "rtl" : "ltr"}>
                <div className="mx-auto w-full max-w-xl xl:max-w-2xl rounded-2xl p-6 sm:p-8 lg:p-10">
                  
                  <div className="flex flex-col items-center text-center">
                    {/* NAME & MEANING Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1C3A2E] px-5 py-2 border border-[#C79B3B]/40 shadow-sm">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C79B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M12 2v22" />
                        <path d="M17 6H7v6h10V6z" />
                        <path d="M10 22h4" />
                        <path d="M10 2h4" />
                        <path d="M9 12l-1 4h8l-1-4" />
                      </svg>
                      <span className="text-[10px] font-bold uppercase tracking-[.16em] text-[#C79B3B]">
                        {isAr ? "الاسم والمعنى" : "Name & Meaning"}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="mb-3 font-serif text-[2.2rem] font-extrabold leading-tight text-[#1C3A2E] sm:text-[2.8rem] lg:text-[3rem]">
                      {isAr ? (
                        <>لماذا &ldquo;نبراس&rdquo;؟</>
                      ) : (
                        <>Why &ldquo;Nibras&rdquo;?</>
                      )}
                    </h2>

                    <div className="mb-1 flex items-center justify-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#C79B3B" className="opacity-80" aria-hidden>
                        <path d="M12 0l2.5 8.5L23 11l-8.5 2.5L12 22l-2.5-8.5L1 11l8.5-2.5z"/>
                      </svg>
                      <span className="font-serif text-[3.2rem] leading-none text-[#C79B3B] sm:text-[4rem] lg:text-[4.5rem]">نبراس</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#C79B3B" className="opacity-80" aria-hidden>
                        <path d="M12 0l2.5 8.5L23 11l-8.5 2.5L12 22l-2.5-8.5L1 11l8.5-2.5z"/>
                      </svg>
                    </div>
                    {!isAr && (
                      <p className="mb-5 text-sm font-medium tracking-wide text-[#5A7A68]">Nibras</p>
                    )}
                    
                    <div className="mb-7 opacity-80">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C79B3B" strokeWidth="1.5" aria-hidden>
                        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                        <circle cx="12" cy="12" r="3" fill="#C79B3B" />
                      </svg>
                    </div>
                  </div>

                  {/* Body copy */}
                  <div className={`w-full space-y-4 ${isAr ? "text-right" : "text-left"}`}>
                    <p className="text-[15px] leading-[1.85] text-[#2F4A3C] sm:text-[16px] lg:text-[17px]">
                      {isAr ? (
                        <>
                          <span className="font-serif text-xl font-bold text-[#C79B3B]">نبراس</span>{" "}
                          كلمة عربية جميلة تعني{" "}
                          <strong className="font-bold text-[#1C3A2E]">&ldquo;المصباح&rdquo;</strong>
                          {" "}— مصباح يُضيء الطريق.
                        </>
                      ) : (
                        <>
                          <span className="font-serif font-bold text-[#1C3A2E]">Nibras</span>
                          {" "}(<span className="font-serif text-[#C79B3B]">نبراس</span>) is a beautiful Arabic word meaning{" "}
                          <strong className="font-bold text-[#1C3A2E]">&ldquo;lantern&rdquo;</strong>
                          {" "}— a lamp that gives light.
                        </>
                      )}
                    </p>

                    <p className="rounded-xl border border-[#C79B3B]/20 bg-[#FFF9EE]/80 px-4 py-3.5 text-[14px] leading-[1.85] text-[#3A5A48] sm:text-[15px] lg:text-[16px]">
                      {isAr ? (
                        <>
                          وكما ينير المصباح الدروب المظلمة ويقود المسافرين بأمان،
                          فإن مهمتنا هي <strong className="font-semibold text-[#1C3A2E]">إضاءة طريق</strong> فهم القرآن الكريم
                          والعلم الإسلامي الأصيل.
                        </>
                      ) : (
                        <>
                          Just as a lantern illuminates dark paths and guides travelers safely,
                          our mission is to <strong className="font-semibold text-[#1C3A2E]">illuminate the path</strong> to understanding
                          the Quran and authentic Islamic knowledge.
                        </>
                      )}
                    </p>

                    <div className={`pt-2 ${isAr ? "text-right" : "text-left"}`}>
                      <div className="inline-flex items-center gap-4 rounded-xl border border-[#C79B3B]/60 bg-[#1C3A2E] p-3 shadow-lg sm:px-5 sm:py-3.5">
                        <div className="flex items-center justify-center">
                           <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C79B3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                             <path d="M12 2v22" />
                             <path d="M17 6H7v6h10V6z" />
                             <path d="M10 22h4" />
                             <path d="M10 2h4" />
                             <path d="M9 12l-1 4h8l-1-4" />
                           </svg>
                        </div>
                        <div className={`flex flex-col ${isAr ? "border-r border-[#C79B3B]/40 pr-4" : "border-l border-[#C79B3B]/40 pl-4"}`}>
                           <span className="mb-1 font-serif text-2xl leading-none text-[#C79B3B] sm:text-3xl">نبراس</span>
                           <span className="text-white/80 text-[9px] sm:text-[10px] tracking-wide uppercase">
                             {isAr ? "مصباح · نور · هداية" : "Lantern · Light · Guidance"}
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Grid of Symbolism Cards */}
              <div className="w-full lg:w-[54%] xl:w-[56%] flex items-center justify-center p-6 sm:p-10 lg:p-12 xl:p-14" dir={isAr ? "rtl" : "ltr"}>
                <div className="grid w-full max-w-[620px] xl:max-w-[680px] grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                  {symbolismItems.map(({ img, color, border, title, desc }, i) => (
                    <div
                      key={title.en}
                      className="vis-card icon-pop flex flex-col items-center rounded-2xl border bg-white/95 px-3 py-5 text-center shadow-[0_4px_16px_rgba(28,58,46,.06)] backdrop-blur-sm sm:px-4 sm:py-6"
                      style={{ borderColor: `${border}40`, animationDelay: `${i * 0.1}s` }}
                    >
                      {/* icon in arch-shaped badge — now using your uploaded SVG */}
                      <div
                        className="icon-badge mb-4 flex h-18 w-18 items-center justify-center rounded-t-full rounded-b-lg border-2 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                        style={{ background: color, borderColor: border, width: '4.5rem', height: '4.5rem' }}
                      >
                        <Image
                          src={img}
                          alt={isAr ? title.ar : title.en}
                          width={48}
                          height={48}
                          className="h-9 w-9 sm:h-11 sm:w-11 lg:h-12 lg:w-12"
                        />
                      </div>

                      <p className="mb-2 text-[13px] min-[400px]:text-[14px] sm:text-[16px] lg:text-[18px] font-extrabold leading-tight text-[#1C3A2E]">
                        {isAr ? title.ar : title.en}
                      </p>

                      <div className="mb-2.5 h-[2px] w-8 rounded-full" style={{ background: border, opacity: 0.6 }} />

                      <p className="text-[11px] min-[400px]:text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.5] sm:leading-[1.65] text-[#4A6858] font-semibold">
                        {isAr ? desc.ar : desc.en}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Divider />

        {/* ══ 3. GROWTH — horizontal timeline ══ */}
        <section>
          <div className="hover-card relative overflow-hidden rounded-3xl border border-[#E5D9C1] shadow-[0_6px_24px_rgba(28,58,46,.07)]">
            {/* Background image */}
            <Image
              src="/images/about4.png"
              alt="Growth Background"
              fill
              className="object-cover"
            />
            {/* overlay: light at top, fades out so the mosque skyline stays visible at the base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FCFAF5]/92 via-[#FCFAF5]/70 to-transparent" />

            {/* leaf branch corner decoration */}
            <LeafBranch className="pointer-events-none absolute -right-2 -top-2 h-32 w-36 text-[#7C9E7C] sm:h-40 sm:w-44" />

            <div className="relative z-10 p-4 pb-20 sm:p-8 sm:pb-28 md:p-10 md:pb-32">
              <p className="mb-1 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.2em] text-[#B8892A]">
                {isAr ? "الرحلة" : "Journey"}
                <span className="h-px w-8 bg-[#C79B3B]/50" />
              </p>
              <h2 className="mb-2 font-serif text-[2.2rem] font-extrabold text-[#1C3A2E] sm:text-[2.6rem]">{isAr ? "نموّنا" : "Our Growth"}</h2>
              <div className="mb-5 h-px w-14 bg-[#C79B3B]/50" />
              <p className="mb-8 max-w-md text-[13px] leading-[1.7] text-[#5A7A68] sm:mb-16">
                {isAr
                  ? "رحلة من النوايا الصادقة، والنمو المستمر، والأثر الحقيقي."
                  : "A journey of sincere intentions, continuous growth, and meaningful impact."}
              </p>

              {/* timeline */}
              <div className="relative grid gap-x-6 gap-y-8 md:grid-cols-3 md:gap-y-14">
                {/* connecting gold line (desktop only) */}
                <div className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-8 hidden h-px bg-gradient-to-r from-[#C79B3B]/10 via-[#C79B3B]/60 to-[#C79B3B]/10 md:block" />

                {timelineItems.map(({ era, label, text, icon }, i) => (
                  <div key={era.en} className="relative flex flex-col items-center text-center">
                    {/* icon medallion */}
                    <div
                      className="pulse-ring icon-glow icon-badge relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-[#274A3D] to-[#0E2019] text-[#E9C878] shadow-[0_0_0_4px_#FCFAF5,0_0_0_7px_#C79B3B,0_10px_20px_rgba(0,0,0,.18)]"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <StoryIcon name={icon} className="h-7 w-7" />
                    </div>

                    {/* card */}
                    <div className="timeline-card w-full rounded-2xl border border-[#E5D9C1]/70 bg-white/95 p-5 shadow-sm backdrop-blur-sm">
                      <span className="mb-3 inline-block rounded-full bg-[#1C3A2E] px-3 py-1 text-[9px] font-bold uppercase tracking-[.14em] text-[#E9C878]">
                        {isAr ? era.ar : era.en}
                      </span>
                      <p className="mb-2 font-serif text-[21px] font-extrabold text-[#1C3A2E]">{isAr ? label.ar : label.en}</p>
                      <p className="text-[13px] leading-[1.75] text-[#5A7A68]">{isAr ? text.ar : text.en}</p>
                    </div>

                    {/* laurel motif */}
                    <LaurelMotif className="mt-4 h-6 w-24 text-[#7C9E7C]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ══ 4. VISION — quote + 2×2 cards ══ */}
        <section>
          <div className="hover-card relative overflow-hidden rounded-3xl border border-[#E5D9C1] p-4 pb-20 shadow-[0_6px_24px_rgba(28,58,46,.07)] sm:p-8 sm:pb-28 md:p-10 md:pb-32">
            {/* Background image */}
            <Image
              src="/images/about4.png"
              alt="Vision Background"
              fill
              className="object-cover"
            />
            {/* overlay: light at top, fades out so the mosque skyline stays visible at the base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FCFAF5]/92 via-[#FCFAF5]/72 to-transparent" />
            <LeafBranch className="pointer-events-none absolute -right-2 -top-2 h-28 w-32 text-[#7C9E7C] sm:h-36 sm:w-40" />

            <div className="relative z-10">
            {/* header row */}
            <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_320px]">
              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[.18em] text-[#B8892A]">{isAr ? "نظرة للمستقبل" : "Looking Forward"}</p>
                <h2 className="mb-3 font-serif text-3xl font-extrabold text-[#1C3A2E] sm:text-[2.2rem]">{isAr ? "رؤيتنا" : "Our Vision"}</h2>
                <p className="max-w-md text-[15px] leading-[1.8] text-[#4A6858]">
                  {isAr
                    ? "حلمنا بسيط لكنه عميق. لسنا في سباق لنكون الأكبر، بل ملتزمون أن نبقى الأصدق."
                    : "Our dream is simple but meaningful. We're not racing to become the biggest — we're committed to remaining the most sincere."}
                </p>
              </div>
              {/* pull quote block */}
              <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-[#1C3A2E] p-6 shadow-lg">
                <Image
                  src="/images/about4.png"
                  alt="Mosque Silhouette"
                  fill
                  className="object-cover opacity-20"
                />
                <div className="relative z-10">
                  <span className="mb-1 font-serif text-4xl leading-none text-[#C79B3B]">"</span>
                  <p className="font-serif text-[17px] leading-[1.6] text-[#F7F1E3]">
                    {isAr ? <>لسنا الأكبر —<br />بل <span className="text-[#C79B3B]">الأصدق</span>.</> : <>Not the biggest —<br />the <span className="text-[#C79B3B]">most sincere</span>.</>}
                  </p>
                  <span className="mt-4 block text-xs text-[#6B9E87]">— {isAr ? "نبراس" : "Nibras Network"}</span>
                </div>
              </div>
            </div>

            {/* 2×2 grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {visionItems.map(({ num, icon, title, desc, bg }, i) => (
                <div
                  key={num}
                  className="vis-card flex flex-row items-start gap-3 rounded-xl border border-[#E5D9C1]/50 bg-white/95 p-4 shadow-sm backdrop-blur-sm sm:flex-col sm:gap-4 sm:p-6 md:flex-row md:items-center"
                >
                  {/* icon + number column */}
                  <div className="flex shrink-0 flex-col items-center gap-1.5">
                    <div
                      className="icon-pop icon-badge flex h-11 w-11 items-center justify-center rounded-full text-[#1C3A2E] shadow-md sm:h-14 sm:w-14"
                      style={{ background: bg, border: "2px solid #C79B3B55", animationDelay: `${i * 0.12}s` }}
                    >
                      <StoryIcon name={icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <span className="rounded bg-[#C79B3B]/10 px-2 py-0.5 text-[10px] font-bold text-[#B8892A]">{num}</span>
                  </div>
                  <div>
                    <p className="mb-1.5 font-serif text-[17px] font-extrabold text-[#1C3A2E]">{isAr ? title.ar : title.en}</p>
                    <p className="text-[13px] leading-[1.65] text-[#5A7A68]">{isAr ? desc.ar : desc.en}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <div className="relative mt-16 mb-10 overflow-hidden rounded-3xl text-center">

          <Image src="/images/about4.png" alt="Mosque Background" fill className="object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(245,233,216,0.72) 0%, rgba(240,226,204,0.62) 50%, rgba(237,217,192,0.72) 100%)" }}
          />

          <div className="relative z-10 px-4 py-10  sm:px-10 sm:py-16">
            <div className="mx-auto flex max-w-lg flex-col items-center">

              <div
                className="float-icon mb-6 flex h-[68px] w-[68px] items-center justify-center rounded-full shadow-[0_6px_24px_rgba(26,77,58,.25)]"
                style={{ background: "#1A4D3A" }}
              >
                <StoryIcon name="book" className="h-8 w-8 text-[#D4A544]" />
              </div>

              <h2 className="mb-1 font-serif text-[2.4rem] font-bold leading-tight sm:text-5xl" style={{ color: "#1A4D3A" }}>
                {isAr ? "جاهز لتبدأ" : "Ready to begin"}
              </h2>
              <h2 className="mb-6 font-serif text-[2.4rem] font-bold leading-tight sm:text-5xl">
                {isAr
                  ? <span style={{ color: "#C9962E" }}>رحلتك؟</span>
                  : <><span style={{ color: "#1A4D3A" }}>your </span><span style={{ color: "#C9962E" }}>journey?</span></>
                }
              </h2>

              <p className="mb-8 whitespace-pre-line text-[15px] leading-[1.75]" style={{ color: "#6B6560" }}>
                {isAr ? "ابدأ بحصة تجريبية مجانية — بدون أي التزام" : "Start with a free trial class —\nno commitment required"}
              </p>

              <Link
                href="/book-trial"
                className="group inline-flex items-center gap-3 rounded-full py-2.5 pl-2.5 pr-7 text-sm font-bold text-white shadow-[0_4px_20px_rgba(26,77,58,.3)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(26,77,58,.4)]"
                style={{ background: "#1A4D3A" }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110" style={{ background: "#D4A544" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1A4D3A" strokeWidth="2.5" strokeLinecap="round" className={isAr ? "rotate-180" : ""}>
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                {isAr ? "احجز الحصة التجريبية" : "Book Free Trial"}
              </Link>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}