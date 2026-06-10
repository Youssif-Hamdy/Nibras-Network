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

const symbolismItems = [
  { icon: "sun", color: "#FFF8E1", border: "#F5C842", title: { en: "Light in Darkness", ar: "نور في الظلام" }, desc: { en: "Making the Quran clear for non-Arabic speakers", ar: "توضيح القرآن لغير الناطقين بالعربية" } },
  { icon: "compass", color: "#E8F5ED", border: "#4A9E6B", title: { en: "Guidance & Direction", ar: "هداية واتجاه" }, desc: { en: "Step-by-step from where you are to where you want to be", ar: "خطوة بخطوة من مكانك الحالي إلى هدفك" } },
  { icon: "hands", color: "#FEF0E8", border: "#E07B3F", title: { en: "Warmth & Welcome", ar: "دفء وترحيب" }, desc: { en: "Every student feels welcomed, supported, and valued", ar: "كل طالب يشعر بالترحيب والدعم والتقدير" } },
  { icon: "globe", color: "#E8F0FE", border: "#4A78D4", title: { en: "Portable & Accessible", ar: "قريب وسهل الوصول" }, desc: { en: "Bringing authentic education to you, wherever you are", ar: "ننقل التعليم الأصيل إليك أينما كنت" } },
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
      return <svg {...base}><path d="M3 20h18" /><path d="M6 20v-6h12v6" /><path d="M8 14V9l4-3 4 3v5" /><path d="M12 6V3" /><path d="M11 3h2" /></svg>;
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

        .a1 { opacity:0; animation: fadeUp 680ms ease .08s forwards; }
        .a2 { opacity:0; animation: fadeUp 680ms ease .22s forwards; }
        .a3 { opacity:0; animation: fadeUp 680ms ease .36s forwards; }
        .a4 { opacity:0; animation: fadeUp 680ms ease .50s forwards; }

        .float-icon  { animation: floatIcon 3.4s ease-in-out infinite; }
        .scroll-hint { animation: shimmer 2.2s ease-in-out infinite; }
        .pulse-ring  { animation: pulseRing 2s ease-out infinite; }

        .icon-pop { animation: iconPop 500ms cubic-bezier(.2,.8,.2,1) both; }

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
          <div className="a2 float-icon pulse-ring mb-8 flex h-[88px] w-[88px] items-center justify-center rounded-full border border-[#C79B3B]/40 bg-[#C79B3B]/12 backdrop-blur-sm">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#C79B3B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2h8l1 7H7L8 2z" />
              <path d="M9 9s-.5 5 3 7 3 6 3 6" />
              <path d="M15 9s.5 5-3 7-3 6-3 6" />
              <line x1="9" y1="22" x2="15" y2="22" />
            </svg>
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
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">

        <p className="mb-12 text-center text-[10px] font-semibold uppercase tracking-[.22em] text-[#B8892A]">
          {isAr ? "— الصفحة 1 — قصتنا —" : "— Page 1 — Our Story —"}
        </p>

        {/* ══ 1. THE BEGINNING — split: illustration left, text right ══ */}
        <section className="mb-0">
          <div className="hover-card overflow-hidden rounded-3xl border border-[#E5D9C1] bg-white shadow-[0_6px_24px_rgba(28,58,46,.07)]">
            <div className="grid lg:grid-cols-[420px_1fr]">

              {/* illustration panel */}
              <div className="relative flex min-h-[240px] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#21463A] to-[#2F6251] p-6 sm:min-h-[320px] sm:p-10 lg:min-h-[500px]">
                {/* decorative circles */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#C79B3B]/10" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full border border-[#C79B3B]/8" />

                {/* mosque SVG illustration */}
                <div className="float-icon mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-[#C79B3B]/30 bg-[#C79B3B]/10">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#C79B3B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    {/* dome */}
                    <path d="M20 30 Q20 14 32 14 Q44 14 44 30" />
                    {/* main body */}
                    <rect x="14" y="30" width="36" height="22" rx="2" />
                    {/* door arch */}
                    <path d="M27 52 L27 40 Q27 35 32 35 Q37 35 37 40 L37 52" />
                    {/* minaret left */}
                    <rect x="8" y="22" width="6" height="30" rx="1" />
                    <path d="M8 22 Q11 17 14 22" />
                    <line x1="11" y1="17" x2="11" y2="12" />
                    {/* minaret right */}
                    <rect x="50" y="22" width="6" height="30" rx="1" />
                    <path d="M50 22 Q53 17 56 22" />
                    <line x1="53" y1="17" x2="53" y2="12" />
                    {/* crescent */}
                    <path d="M30 9 Q32 6 34 9 Q32 7.5 30 9Z" />
                    {/* windows */}
                    <circle cx="23" cy="38" r="2.5" />
                    <circle cx="41" cy="38" r="2.5" />
                  </svg>
                </div>

                <p className="font-serif text-3xl font-bold text-[#C79B3B]">نبراس</p>
                <p className="mt-1 text-sm text-[#6B9E87]">Nibras Network · Est. 2025</p>

                {/* floating dots */}
                <div className="absolute bottom-10 left-10 h-2 w-2 rounded-full bg-[#C79B3B]/40" />
                <div className="absolute bottom-16 left-16 h-1.5 w-1.5 rounded-full bg-[#C79B3B]/25" />
                <div className="absolute right-12 top-12 h-2 w-2 rounded-full bg-[#C79B3B]/40" />
                <div className="absolute right-20 top-20 h-1 w-1 rounded-full bg-[#C79B3B]/25" />
              </div>

              {/* text panel */}
              <div className="flex flex-col justify-center p-5 sm:p-8 md:p-10">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[.18em] text-[#B8892A]">{isAr ? "الأصل" : "Origin"}</p>
                <h2 className="mb-5 text-2xl font-bold text-[#1C3A2E]">{isAr ? "البداية" : "The Beginning"}</h2>
                <p className="mb-5 text-[15px] leading-[1.8] text-[#4A6858]">
                  {isAr
                    ? "في بداية عام 2025 وُلِدت نبراس من ملاحظة بسيطة ونية صادقة، بعد رؤية كثير من المسلمين يواجهون صعوبة في الوصول إلى التعليم الإسلامي الأصيل بلغتهم."
                    : "In early 2025, Nibras Network was born from a simple observation and a sincere intention — witnessing countless Muslims struggling to access authentic Islamic education in their own language."}
                </p>

                {/* challenges with icon + hover slide */}
                <div className="space-y-1.5">
                  {beginningChallenges.map(({ icon, text }) => (
                    <div
                      key={text.en}
                      className="challenge-row flex items-start gap-3 rounded-xl px-3 py-2.5"
                      style={{ ["--challenge-shift" as string]: isAr ? "-6px" : "6px" }}
                    >
                      <span className="mt-0.5 text-[#2E5A4C]"><StoryIcon name={icon} className="h-[18px] w-[18px]" /></span>
                      <span className="text-[14px] leading-[1.7] text-[#4A6858]">{isAr ? text.ar : text.en}</span>
                    </div>
                  ))}
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

        {/* ══ 2. WHY NIBRAS — text left + animated 2×2 grid right ══ */}
        <section>
          <div className="hover-card overflow-hidden rounded-3xl border border-[#E5D9C1] bg-white shadow-[0_6px_24px_rgba(28,58,46,.07)]">
            <div className="grid items-start gap-0 md:grid-cols-2" dir={isAr ? "rtl" : "ltr"}>

              {/* text left */}
              <div className="flex flex-col justify-start bg-gradient-to-b from-white to-[#FCFAF5] p-5 md:p-6 lg:p-7" dir={isAr ? "rtl" : "ltr"}>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[.18em] text-[#B8892A]">{isAr ? "الاسم والمعنى" : "Name & Meaning"}</p>
                <h2 className="mb-3 text-[1.45rem] font-bold leading-snug text-[#1C3A2E] sm:text-[1.6rem]">
                  {isAr ? "لماذا" : "Why"} "Nibras"?{" "}
                  <span className="font-serif text-[#C79B3B]">نبراس</span>
                </h2>
                <p className="mb-3.5 max-w-2xl text-[14px] leading-[1.75] text-[#4A6858]">
                  {isAr ? (
                    <>
                      نبراس هي كلمة عربية جميلة تعني{" "}
                      <strong className="font-semibold text-[#1C3A2E]">"المصباح"</strong> الذي ينير الطريق.
                      وكما ينير المصباح الدروب المظلمة ويقود الناس بأمان، فمهمتنا أن نضيء طريق فهم
                      القرآن والعلم الإسلامي الأصيل.
                    </>
                  ) : (
                    <>
                      Nibras (نبراس) is a beautiful Arabic word meaning{" "}
                      <strong className="font-semibold text-[#1C3A2E]">"lantern"</strong> — a lamp
                      that gives light. Just as a lantern illuminates dark paths and guides travelers
                      safely, our mission is to illuminate the path to understanding the Quran and
                      authentic Islamic knowledge.
                    </>
                  )}
                </p>

                {/* compact visual row */}
                <div className={`flex flex-wrap items-center gap-2.5 ${isAr ? "justify-start md:justify-end" : "justify-start"}`}>
                  <div className="float-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#C79B3B]/30 bg-gradient-to-br from-[#FFF8E7] to-[#FFF0CC]">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C79B3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 2h8l1 7H7L8 2z" />
                      <path d="M9 9s-.5 5 3 7 3 6 3 6" />
                      <path d="M15 9s.5 5-3 7-3 6-3 6" />
                      <line x1="9" y1="22" x2="15" y2="22" />
                    </svg>
                  </div>
                  <div className="rounded-xl border border-[#E8DFC9] bg-white/80 px-4 py-2.5">
                    <p className="font-serif text-2xl font-bold leading-none text-[#C79B3B]">نبراس</p>
                    <p className="mt-1 text-[12px] text-[#6F9283]">{isAr ? "مصباح · نور · هداية" : "Lantern · Light · Guidance"}</p>
                  </div>
                </div>
              </div>

              {/* animated 2×2 symbolism grid */}
              <div className="border-t border-[#E5D9C1] bg-[#FFFEFB] p-2.5 md:border-s md:border-t-0 md:p-3" dir={isAr ? "rtl" : "ltr"}>
                <div className="grid grid-cols-1 gap-2 content-start min-[400px]:grid-cols-2">
                {symbolismItems.map(({ icon, color, border, title, desc }, i) => (
                  <div
                    key={title.en}
                    className="vis-card flex min-h-[100px] flex-col rounded-lg border border-[#E5D9C1] p-3 sm:min-h-[108px] sm:p-2.5"
                    style={{ background: color, animationDelay: `${i * 0.13}s` }}
                  >
                    <span className="icon-pop mb-1 inline-flex text-[#2F6251]">
                      <StoryIcon name={icon} className="h-5 w-5" />
                    </span>
                    <p className="mb-0.5 text-[11.5px] font-bold leading-tight text-[#1C3A2E]">{isAr ? title.ar : title.en}</p>
                    <p className="overflow-hidden text-[10.5px] leading-[1.35] text-[#5A7A68] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">{isAr ? desc.ar : desc.en}</p>
                    <div
                      className="mt-1.5 h-0.5 w-6 rounded-full"
                      style={{ background: border }}
                    />
                  </div>
                ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        <Divider />

        {/* ══ 3. GROWTH — horizontal timeline ══ */}
        <section>
          <div className="hover-card rounded-3xl border border-[#E5D9C1] bg-white p-5 shadow-[0_6px_24px_rgba(28,58,46,.07)] sm:p-8 md:p-10">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[.18em] text-[#B8892A]">{isAr ? "الرحلة" : "Journey"}</p>
            <h2 className="mb-10 text-2xl font-bold text-[#1C3A2E]">{isAr ? "نموّنا" : "Our Growth"}</h2>

            {/* timeline */}
            <div className="grid gap-8 md:grid-cols-3">
              {timelineItems.map(({ era, label, text, icon }, i) => (
                <div key={era.en} className="relative">
                  {/* connector (md only) */}
                  {i < timelineItems.length - 1 && (
                    <div className="absolute left-[calc(50%+22px)] top-[20px] hidden h-px bg-[#C79B3B]/25 md:block"
                      style={{ width: "calc(100% + 2rem - 44px)" }} />
                  )}

                  {/* icon bubble */}
                  <div className="pulse-ring mb-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#C79B3B]/40 bg-[#FFF8E7] text-[#2F6251]">
                    <StoryIcon name={icon} className="h-5 w-5" />
                  </div>

                  <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#B8892A]">{isAr ? era.ar : era.en}</p>
                  <p className="mb-2 mt-0.5 text-[15px] font-bold text-[#1C3A2E]">{isAr ? label.ar : label.en}</p>
                  <p className="text-[13px] leading-[1.75] text-[#5A7A68]">{isAr ? text.ar : text.en}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ══ 4. VISION — quote + 2×2 cards ══ */}
        <section>
          <div className="hover-card rounded-3xl border border-[#E5D9C1] bg-white p-5 shadow-[0_6px_24px_rgba(28,58,46,.07)] sm:p-8 md:p-10">

            {/* header row */}
            <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_280px]">
              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[.18em] text-[#B8892A]">{isAr ? "نظرة للمستقبل" : "Looking Forward"}</p>
                <h2 className="mb-3 text-2xl font-bold text-[#1C3A2E]">{isAr ? "رؤيتنا" : "Our Vision"}</h2>
                <p className="max-w-sm text-[15px] leading-[1.8] text-[#4A6858]">
                  {isAr
                    ? "حلمنا بسيط لكنه عميق: لسنا في سباق لنكون الأكبر، بل ملتزمون أن نبقى الأصدق."
                    : "Our dream is simple but meaningful. We're not racing to become the biggest — we're committed to remaining the most sincere."}
                </p>
              </div>
              {/* pull quote */}
              <div className="flex flex-col justify-center rounded-2xl bg-[#2B5B4A] p-6">
                <span className="mb-2 font-serif text-5xl leading-none text-[#C79B3B]">"</span>
                <p className="font-serif text-[15px] leading-[1.7] text-[#D8C9A5]">
                  {isAr ? <>لسنا الأكبر —<br />بل الأصدق.</> : <>Not the biggest —<br />the most sincere.</>}
                </p>
                <span className="mt-3 text-xs text-[#4E7A6A]">— {isAr ? "نبراس" : "Nibras Network"}</span>
              </div>
            </div>

            {/* 2×2 grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {visionItems.map(({ num, icon, title, desc, bg }) => (
                <div
                  key={num}
                  className="vis-card flex items-start gap-4 rounded-2xl border border-[#E5D9C1] p-5"
                  style={{ background: bg }}
                >
                  {/* icon bubble */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="icon-pop flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white bg-white text-[#2F6251] shadow-sm">
                      <StoryIcon name={icon} className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold text-[#B8892A]">{num}</span>
                  </div>
                  <div>
                    <p className="mb-1 text-[14px] font-bold text-[#1C3A2E]">{isAr ? title.ar : title.en}</p>
                    <p className="text-[13px] leading-[1.65] text-[#5A7A68]">{isAr ? desc.ar : desc.en}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-[#2B5B4A] px-5 py-10 text-center sm:px-8 sm:py-14">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-56 w-80 -translate-x-1/2 rounded-full bg-[#C79B3B]/12 blur-3xl" />

          <div className="float-icon pulse-ring mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#C79B3B]/35 bg-[#C79B3B]/12">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C79B3B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>

          <h2 className="mb-2 text-2xl font-bold text-[#F7F1E3]">{isAr ? "جاهز تبدأ رحلتك؟" : "Ready to begin your journey?"}</h2>
          <p className="mb-8 text-[15px] text-[#6B9E87]">{isAr ? "ابدأ بحصة تجريبية مجانية — بدون أي التزام." : "Start with a free trial class — no commitment required"}</p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#C79B3B] px-8 py-3.5 text-sm font-semibold text-[#0F211B] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D8B567]"
          >
            {isAr ? "احجز الحصة التجريبية المجانية" : "Book Free Trial"}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className={isAr ? "rotate-180" : ""}>
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

      </div>
    </div>
  );
}