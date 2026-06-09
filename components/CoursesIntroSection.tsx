"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  GraduationCap,
  Mic,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/components/LocaleProvider";

type FloatIcon = {
  Icon: typeof Globe;
  label: string;
  className: string;
  anim: string;
  size?: number;
  tone: "green" | "gold" | "cream";
};

const TONE: Record<FloatIcon["tone"], string> = {
  green: "bg-[#1C3A2E] text-[#F2D58C] shadow-[0_8px_22px_rgba(28,58,46,0.28)] ring-[#B8860B]/25",
  gold: "bg-gradient-to-br from-[#B8860B] to-[#D4A017] text-white shadow-[0_8px_22px_rgba(184,134,11,0.32)] ring-[#F2D58C]/30",
  cream: "bg-[#F5F0E8] text-[#1C3A2E] shadow-[0_8px_20px_rgba(28,58,46,0.12)] ring-[#E8E0D0]",
};

function CoursesLearningIllustration({
  ariaLabel,
  logoAlt,
}: {
  ariaLabel: string;
  logoAlt: string;
}) {
  const floats: FloatIcon[] = [
    { Icon: Globe, label: "Online", className: "top-[8%] start-[10%]", anim: "ci-float-a", size: 20, tone: "cream" },
    { Icon: Star, label: "Excellence", className: "top-[6%] end-[14%]", anim: "ci-float-b", size: 18, tone: "gold" },
    { Icon: Mic, label: "Recitation", className: "top-[42%] start-[4%]", anim: "ci-float-c", size: 19, tone: "green" },
    { Icon: Users, label: "Classes", className: "top-[38%] end-[6%]", anim: "ci-float-d", size: 20, tone: "cream" },
    { Icon: GraduationCap, label: "Learning", className: "bottom-[14%] start-[14%]", anim: "ci-float-b", size: 19, tone: "gold" },
    { Icon: Sparkles, label: "Growth", className: "bottom-[12%] end-[12%]", anim: "ci-float-a", size: 18, tone: "green" },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes ci-float-a {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-4deg); }
        }
        @keyframes ci-float-b {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes ci-float-c {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.05); }
        }
        @keyframes ci-float-d {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes ci-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ci-orbit-rev {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes ci-pulse-ring {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.65; transform: scale(1.04); }
        }
        @keyframes ci-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212, 160, 23, 0); }
          50% { box-shadow: 0 0 28px 6px rgba(212, 160, 23, 0.22); }
        }
        @keyframes ci-spark {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.35); }
        }
        .ci-float-a { animation: ci-float-a 3.4s ease-in-out infinite; }
        .ci-float-b { animation: ci-float-b 3.8s ease-in-out infinite 0.3s; }
        .ci-float-c { animation: ci-float-c 3.2s ease-in-out infinite 0.15s; }
        .ci-float-d { animation: ci-float-d 3.6s ease-in-out infinite 0.45s; }
        .ci-orbit { animation: ci-orbit 18s linear infinite; }
        .ci-orbit-rev { animation: ci-orbit-rev 24s linear infinite; }
        .ci-pulse-ring { animation: ci-pulse-ring 3s ease-in-out infinite; }
        .ci-glow { animation: ci-glow 3.5s ease-in-out infinite; }
        .ci-spark { animation: ci-spark 2.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ci-float-a, .ci-float-b, .ci-float-c, .ci-float-d,
          .ci-orbit, .ci-orbit-rev, .ci-pulse-ring, .ci-glow, .ci-spark {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className="group relative aspect-video w-full overflow-hidden rounded-xl"
        role="img"
        aria-label={ariaLabel}
      >
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(212,160,23,0.14) 0%, transparent 65%)," +
              "radial-gradient(ellipse 60% 55% at 20% 80%, rgba(28,58,46,0.08) 0%, transparent 70%)," +
              "linear-gradient(145deg, #f8f4ec 0%, #eef5f0 45%, #f5f0e8 100%)",
          }}
        />

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(rgba(28,58,46,0.04) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(28,58,46,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Orbit rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
          <div className="ci-orbit absolute h-[58%] w-[58%] rounded-full border border-dashed border-[#B8860B]/25" />
          <div className="ci-orbit-rev absolute h-[72%] w-[72%] rounded-full border border-[#1C3A2E]/10" />
          <div className="ci-pulse-ring absolute h-[44%] w-[44%] rounded-full bg-[#B8860B]/[0.06]" />
        </div>

        {/* Sparkle dots */}
        {[
          { top: "18%", left: "48%", delay: "0s" },
          { top: "72%", left: "38%", delay: "0.4s" },
          { top: "28%", left: "72%", delay: "0.8s" },
          { top: "65%", left: "68%", delay: "1.1s" },
        ].map((dot, i) => (
          <span
            key={i}
            className="ci-spark absolute h-1.5 w-1.5 rounded-full bg-[#D4A017]"
            style={{ top: dot.top, left: dot.left, animationDelay: dot.delay }}
            aria-hidden
          />
        ))}

        {/* Central hub — site logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="ci-glow relative flex h-[38%] min-h-[96px] w-[52%] min-w-[120px] max-w-[168px] items-center justify-center rounded-2xl  ring-4 ring-[#F5F0E8]/90 shadow-[0_12px_32px_rgba(28,58,46,0.12)]">
            <div className="relative h-[72%] w-[88%]">
              <Image
                src="/images/logo.png"
                alt={logoAlt}
                fill
                className="object-contain"
                sizes="168px"
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* Floating icons */}
        {floats.map(({ Icon, label, className, anim, size = 20, tone }) => (
          <div
            key={label}
            className={`absolute ${className} ${anim}`}
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12 ${TONE[tone]}`}
              title={label}
            >
              <Icon size={size} strokeWidth={1.75} aria-hidden />
            </div>
          </div>
        ))}

        {/* Bottom accent bar */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent" />
      </div>
    </>
  );
}

export default function CoursesIntroSection() {
  const { ref, visible } = useReveal<HTMLElement>();
  const { t } = useI18n();

  return (
    <section
      ref={ref}
      id="courses-intro"
      className="relative bg-[#F5F0E8] py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Animated illustration */}
          <div className="order-1 lg:order-none flex flex-col gap-4">
            <span className="block w-24 h-1 rounded-full bg-gradient-to-r from-[#B8860B] to-[#1C3A2E] shadow-sm" />
            <div className="group relative rounded-2xl bg-white p-2 shadow-[0_18px_50px_rgba(28,58,46,0.1)] ring-1 ring-[#E8E0D0] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(184,134,11,0.12)] hover:ring-[#B8860B]/25">
              <CoursesLearningIllustration
                ariaLabel={t("coursesIntro.illustrationAlt")}
                logoAlt={t("nav.logoAlt")}
              />
            </div>
          </div>

          {/* Copy */}
          <div className="order-2 lg:order-none space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.35rem] font-bold text-[#1C3A2E] leading-tight">
              {t("coursesIntro.title")}
            </h2>
            <p className="text-[#4a5c54] text-base md:text-lg leading-relaxed">
              {t("coursesIntro.body")}
              <span className="font-semibold text-[#8B6508]">
                {t("coursesIntro.bodyBold")}
              </span>
              {t("coursesIntro.bodyAfter")}
            </p>
            {/* <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-full bg-[#1C3A2E] px-8 py-3.5 text-sm font-semibold text-[#F5F0E8] shadow-md shadow-[#1C3A2E]/22 ring-1 ring-[#B8860B]/30 transition-all duration-300 hover:bg-[#2D5A3D] hover:scale-[1.03] hover:shadow-lg hover:ring-[#D4A017]/45 active:scale-[0.98]"
            >
              {t("coursesIntro.cta")}
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
