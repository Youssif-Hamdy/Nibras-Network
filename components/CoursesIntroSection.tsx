"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Globe,
  GraduationCap,
  Headset,
  Heart,
  Laptop,
  Mic,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/components/LocaleProvider";

/* ------------------------------------------------------------------ */
/*  Circular "wheel" illustration                                      */
/* ------------------------------------------------------------------ */

type OrbitIcon = {
  Icon: typeof Globe;
  label: string;
  className: string;
  anim: string;
  tone: "green" | "gold";
};

const ORBIT_TONE: Record<OrbitIcon["tone"], string> = {
  green:
    "bg-[#1C3A2E] text-[#F2D58C] shadow-[0_10px_24px_rgba(28,58,46,0.28)] ring-[#B8860B]/20",
  gold:
    "bg-gradient-to-br from-[#D4A017] to-[#B8860B] text-white shadow-[0_10px_24px_rgba(184,134,11,0.32)] ring-[#F2D58C]/30",
};

function HeroWheelIllustration({
  ariaLabel,
  logoAlt,
  brandName,
  brandTagline,
}: {
  ariaLabel: string;
  logoAlt: string;
  brandName: string;
  brandTagline: string;
}) {
  const orbitItems: (OrbitIcon & { labelTextEn: string; labelTextAr: string })[] = [
    {
      Icon: Globe,
      label: "learnAnywhere",
      labelTextEn: "Learn\nAnywhere",
      labelTextAr: "تعلم\nفي أي مكان",
      className: "top-[4%] start-[6%]",
      anim: "hw-float-a",
      tone: "green",
    },
    {
      Icon: Star,
      label: "expertInstructors",
      labelTextEn: "Expert\nInstructors",
      labelTextAr: "معلمون\nخبراء",
      className: "top-[2%] end-[6%]",
      anim: "hw-float-b",
      tone: "gold",
    },
    {
      Icon: Mic,
      label: "oneToOneLessons",
      labelTextEn: "1-to-1 Live\nLessons",
      labelTextAr: "دروس مباشرة\nفردية",
      className: "top-[42%] start-[0%]",
      anim: "hw-float-c",
      tone: "gold",
    },
    {
      Icon: Users,
      label: "allAgesLevels",
      labelTextEn: "All Ages &\nLevels",
      labelTextAr: "لجميع الأعمار\nوالمستويات",
      className: "top-[40%] end-[0%]",
      anim: "hw-float-d",
      tone: "green",
    },
    {
      Icon: BookOpen,
      label: "quranTajweedArabic",
      labelTextEn: "Quran, Tajweed,\nArabic & Islamic Studies",
      labelTextAr: "قرآن، تجويد،\nعربي وإسلاميات",
      className: "bottom-[2%] start-[6%]",
      anim: "hw-float-b",
      tone: "green",
    },
    {
      Icon: TrendingUp,
      label: "structuredPaths",
      labelTextEn: "Structured Paths\nReal Progress",
      labelTextAr: "مسارات منظمة\nتقدم حقيقي",
      className: "bottom-[0%] end-[6%]",
      anim: "hw-float-a",
      tone: "gold",
    },
  ];

  const { locale } = useI18n();

  return (
    <>
      <style jsx>{`
        @keyframes hw-float-a {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(-4deg);
          }
        }
        @keyframes hw-float-b {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        @keyframes hw-float-c {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-6px) scale(1.05);
          }
        }
        @keyframes hw-float-d {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }
        @keyframes hw-orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes hw-orbit-rev {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes hw-pulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.75;
            transform: scale(1.05);
          }
        }
        @keyframes hw-glow {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(212, 160, 23, 0);
          }
          50% {
            box-shadow: 0 0 34px 8px rgba(212, 160, 23, 0.22);
          }
        }
        @keyframes hw-dot {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }
        .hw-float-a {
          animation: hw-float-a 3.4s ease-in-out infinite;
        }
        .hw-float-b {
          animation: hw-float-b 3.8s ease-in-out infinite 0.3s;
        }
        .hw-float-c {
          animation: hw-float-c 3.2s ease-in-out infinite 0.15s;
        }
        .hw-float-d {
          animation: hw-float-d 3.6s ease-in-out infinite 0.45s;
        }
        .hw-orbit {
          animation: hw-orbit 26s linear infinite;
        }
        .hw-orbit-rev {
          animation: hw-orbit-rev 32s linear infinite;
        }
        .hw-pulse {
          animation: hw-pulse 3s ease-in-out infinite;
        }
        .hw-glow {
          animation: hw-glow 3.6s ease-in-out infinite;
        }
        .hw-dot {
          animation: hw-dot 2.4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hw-float-a,
          .hw-float-b,
          .hw-float-c,
          .hw-float-d,
          .hw-orbit,
          .hw-orbit-rev,
          .hw-pulse,
          .hw-glow,
          .hw-dot {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className="group relative aspect-square w-full max-w-[440px] mx-auto"
        role="img"
        aria-label={ariaLabel}
      >
        {/* soft background glow */}
        <div
          className="absolute inset-0 rounded-full"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(212,160,23,0.10) 0%, transparent 68%)",
          }}
        />

        {/* orbit rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
          <div className="hw-orbit absolute h-[78%] w-[78%] rounded-full border border-dashed border-[#B8860B]/30" />
          <div className="hw-orbit-rev absolute h-[60%] w-[60%] rounded-full border border-[#1C3A2E]/12" />
          <div className="hw-pulse absolute h-[46%] w-[46%] rounded-full bg-[#B8860B]/[0.05]" />
          {/* connector dots on the outer ring, one per orbit item */}
          {[45, 135, 180, 0, 225, 315].map((deg, i) => (
            <span
              key={i}
              className="hw-dot absolute h-1.5 w-1.5 rounded-full bg-[#B8860B]"
              style={{
                transform: `rotate(${deg}deg) translate(0, -39%)`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </div>

        {/* central hub */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="hw-glow relative flex h-[58%] w-[58%] flex-col items-center justify-center rounded-full bg-white ring-[6px] ring-[#F5F0E8] shadow-[0_16px_38px_rgba(28,58,46,0.14)]">
            <div className="relative h-[85%] w-[85%]">
              <Image
                src="/images/logo.png"
                alt={logoAlt}
                fill
                className="object-contain scale-110"
                sizes="200px"
              />
            </div>
          </div>
        </div>

        {/* orbit icons */}
        {orbitItems.map(({ Icon, label, labelTextEn, labelTextAr, className, anim, tone }) => (
          <div key={label} className={`absolute ${className} ${anim} flex flex-col items-center gap-1 sm:gap-1.5 w-[76px] sm:w-[92px] text-center`}>
            <div
              className={`flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-105 ${ORBIT_TONE[tone]}`}
            >
              <Icon className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" strokeWidth={1.9} aria-hidden />
            </div>
            <span className="whitespace-pre-line text-[9px] sm:text-[11px] font-semibold leading-tight text-[#1C3A2E]">
              {locale === "ar" ? labelTextAr : labelTextEn}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature pill                                                       */
/* ------------------------------------------------------------------ */

function FeaturePill({
  Icon,
  label,
  delay,
}: {
  Icon: typeof Globe;
  label: string;
  delay: number;
}) {
  return (
    <div
      className="hero-pill-in flex items-center gap-2 rounded-full border border-[#E8E0D0] bg-white px-4 py-2.5 text-sm font-medium text-[#1C3A2E] shadow-[0_2px_10px_rgba(28,58,46,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B8860B]/40 hover:shadow-[0_8px_18px_rgba(184,134,11,0.14)]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon size={16} className="text-[#B8860B]" strokeWidth={2} />
      <span>{label}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Hero section                                                  */
/* ------------------------------------------------------------------ */

export default function HeroSection() {
  const { ref, visible } = useReveal<HTMLElement>();
  const { locale, t } = useI18n();

  const isAr = locale === "ar";

  const features: { Icon: typeof Globe; label: string }[] = [
    { Icon: GraduationCap, label: isAr ? "معلمون مؤهلون" : "Qualified Teachers" },
    { Icon: Laptop, label: isAr ? "دروس تفاعلية" : "Interactive Lessons" },
    { Icon: Calendar, label: isAr ? "أوقات مرنة" : "Flexible Scheduling" },
    { Icon: Heart, label: isAr ? "نمو روحي" : "Spiritual Growth" },
    { Icon: TrendingUp, label: isAr ? "تتبع تقدمك" : "Track Your Progress" },
    { Icon: ShieldCheck, label: isAr ? "شهادات معتمدة" : "Certificates" },
  ];

  const tags = isAr 
    ? ["تلاوة القرآن", "أحكام التجويد", "اللغة العربية", "الدراسات الإسلامية"]
    : ["Quran Recitation", "Tajweed", "Arabic Language", "Islamic Studies"];

  const stats = [
    {
      icon: null as null,
      avatars: true,
      value: isAr ? "+50 دولة" : "50+ Countries",
      label: isAr ? "طلاب من" : "Students from",
    },
    {
      icon: GraduationCap,
      avatars: false,
      value: "10,000+",
      label: isAr ? "طالب سعيد" : "Happy Students",
    },
    {
      icon: ShieldCheck,
      avatars: false,
      value: isAr ? "مؤهلون وذوي خبرة" : "Certified & Experienced",
      label: isAr ? "معلمون" : "Instructors",
    },
    {
      icon: Headset,
      avatars: false,
      value: isAr ? "دعم بلغتك" : "Support in",
      label: isAr ? "الخاصة" : "Your Language",
    },
  ];

  return (
    <section
      ref={ref}
      id="hero"
      className="relative overflow-hidden bg-[#F5F0E8] px-4 pb-14 pt-16 sm:px-6 md:pt-24"
    >
      <style jsx>{`
        @keyframes hero-fade-up {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-pill-in {
          animation: hero-fade-up 0.6s ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-pill-in {
            animation: none !important;
          }
        }
      `}</style>

      {/* ambient background accents */}
      <div
        className="pointer-events-none absolute -top-24 -end-24 h-72 w-72 rounded-full bg-[#B8860B]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -start-24 h-72 w-72 rounded-full bg-[#1C3A2E]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <div
          className={`grid grid-cols-1 items-center gap-12 transition-all duration-700 ease-out lg:grid-cols-2 lg:gap-16 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* -------- Copy -------- */}
          <div className="order-1 lg:order-1">
            {/* trust badge */}
            <div className="hero-pill-in mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8E0D0] bg-white px-4 py-2 text-sm font-semibold text-[#8B6508] shadow-sm">
              <Users size={16} className="text-[#B8860B]" />
              {isAr ? "موثوق به من الطلاب حول العالم" : "Trusted by Students Worldwide"}
            </div>

            <h1 className="font-serif text-4xl font-bold leading-[1.15] text-[#1C3A2E] sm:text-5xl lg:text-[3.2rem]">
              {isAr ? "تعلم القرآن أونلاين" : "Learn Quran Online"}
              <br />
              <span className="text-[#B8860B]">{isAr ? "غيّر حياتك" : "Transform Your Life"}</span>
            </h1>

            {/* divider */}
            <div className="my-5 flex items-center gap-2" aria-hidden>
              <span className="h-px w-14 bg-gradient-to-r from-[#B8860B] to-transparent" />
              <Star size={12} className="text-[#B8860B]" fill="currentColor" />
              <span className="h-px w-14 bg-gradient-to-l from-[#B8860B] to-transparent" />
            </div>

            <p className="max-w-xl text-base leading-relaxed text-[#4a5c54] md:text-lg">
              {isAr ? (
                <>
                  تقدم شبكة نبراس دروس قرآن عالية الجودة عبر الإنترنت بأسلوب{" "}
                  <span className="font-semibold text-[#8B6508]">
                    1-إلى-1 ومجموعات صغيرة
                  </span>{" "}
                  لجميع الأعمار والمستويات.
                </>
              ) : (
                <>
                  Nibras Network offers high-quality online Quran classes with{" "}
                  <span className="font-semibold text-[#8B6508]">
                    live 1-to-1 and small-group
                  </span>{" "}
                  lessons for all ages and levels.
                </>
              )}
            </p>

            {/* feature pills */}
            <div className="mt-7 flex flex-wrap gap-3">
              {features.map(({ Icon, label }, i) => (
                <FeaturePill key={label} Icon={Icon} label={label} delay={i * 70} />
              ))}
            </div>

            {/* tags */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-[#4a5c54]">
              <span className="h-px w-6 bg-[#B8860B]/40" aria-hidden />
              {tags.map((tag, i) => (
                <span key={tag} className="flex items-center gap-3">
                  {i !== 0 && <span className="text-[#B8860B]">&#9670;</span>}
                  {tag}
                </span>
              ))}
              <span className="h-px w-6 bg-[#B8860B]/40" aria-hidden />
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1C3A2E] px-8 py-3.5 text-sm font-semibold text-[#F5F0E8] shadow-md shadow-[#1C3A2E]/22 ring-1 ring-[#B8860B]/30 transition-all duration-300 hover:scale-[1.03] hover:bg-[#2D5A3D] hover:shadow-lg hover:ring-[#D4A017]/45 active:scale-[0.98]"
              >
                {isAr ? "ابدأ رحلتك اليوم" : "Start Your Journey Today"}
                <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
              <Link
                href="/book-trial"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1C3A2E]/20 bg-white px-8 py-3.5 text-sm font-semibold text-[#1C3A2E] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B8860B]/40 hover:shadow-md active:scale-[0.98]"
              >
                {t("nav.bookTrial")}
                <Calendar size={16} />
              </Link>
            </div>
          </div>

          {/* -------- Illustration -------- */}
          <div className="order-2 lg:order-2">
            <div className="rounded-[28px] bg-white/70 p-4 sm:p-8 shadow-[0_20px_60px_rgba(28,58,46,0.10)] ring-1 ring-[#E8E0D0]">
              <HeroWheelIllustration
                ariaLabel="Nibras Network learning wheel"
                logoAlt="Nibras Network logo"
                brandName="Nibras Network"
                brandTagline="The Qur'an Light"
              />
            </div>
          </div>

        </div>

        {/* -------- Stats bar -------- */}
        <div
          className={`mt-14 grid grid-cols-1 gap-6 rounded-2xl bg-[#1C3A2E] px-6 py-6 shadow-[0_20px_50px_rgba(28,58,46,0.25)] transition-all delay-200 duration-700 ease-out sm:grid-cols-2 sm:px-10 lg:grid-cols-4 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 ${
                i !== 0 ? "sm:border-s sm:border-[#F5F0E8]/15 sm:ps-6" : ""
              }`}
            >
              {s.avatars ? (
                <div className="flex -space-x-3 rtl:space-x-reverse relative h-9">
                  {[
                    { Icon: Globe, anim: "hw-pulse" },
                    { Icon: Users, anim: "hw-pulse" },
                    { Icon: Star, anim: "hw-pulse" },
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2D58C] text-[#1C3A2E] ring-2 ring-[#1C3A2E] relative z-10 hover:z-20 transition-transform hover:scale-110"
                      style={{ animationDelay: `${idx * 0.5}s` }}
                    >
                      <item.Icon size={18} className={item.anim} />
                    </span>
                  ))}
                </div>
              ) : (
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/10 text-[#F2D58C]">
                  {s.icon ? <s.icon size={18} strokeWidth={1.8} /> : null}
                </span>
              )}
              <p className="text-sm leading-snug text-[#F5F0E8]/90">
                <span className="block font-bold text-[#F2D58C]">{s.value}</span>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}