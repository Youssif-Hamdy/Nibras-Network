"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Award,
  BookOpen,
  GraduationCap,
  Heart,
  Mic,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";
import { getTutorsPage, TUTOR_MEDIA, type TutorHighlight } from "@/lib/tutors";

const ICON_MAP: Record<TutorHighlight["icon"], LucideIcon> = {
  mic: Mic,
  book: BookOpen,
  heart: Heart,
  award: Award,
  users: Users,
  sparkles: Sparkles,
};

const ICON_ANIM: Record<TutorHighlight["icon"], string> = {
  mic: "tutor-icon-float",
  book: "tutor-icon-tilt",
  heart: "tutor-icon-pulse",
  award: "tutor-icon-bounce",
  users: "tutor-icon-sway",
  sparkles: "tutor-icon-spin",
};

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timeoutId: number | undefined;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        timeoutId = window.setTimeout(() => setVisible(true), 0);
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);
  return { ref, visible };
}

function RevealSection({
  children,
  className = "",
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${className} ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function HighlightCard({
  item,
  index,
  isAr,
}: {
  item: TutorHighlight;
  index: number;
  isAr: boolean;
}) {
  const { ref, visible } = useScrollReveal();
  const Icon = ICON_MAP[item.icon];
  const anim = ICON_ANIM[item.icon];
  const delay = (index % 3) * 80;

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative overflow-hidden rounded-2xl border border-[#B8860B]/20 bg-white/80 p-5 shadow-[0_8px_28px_rgba(28,58,46,0.07)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#D4A017]/40 hover:shadow-[0_18px_44px_rgba(28,58,46,0.12)] sm:p-6 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div
        className="pointer-events-none absolute -top-10 h-28 w-28 rounded-full bg-[#D4A017]/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 end-[-1.5rem]"
        aria-hidden
      />
      <div className="relative flex gap-4">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1C3A2E] to-[#2D5A3D] text-[#F5F0E8] shadow-lg shadow-[#1C3A2E]/25 ${anim}`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </span>
        <div className={isAr ? "text-end" : ""}>
          <h3 className="text-base font-bold text-[#1C3A2E] sm:text-[17px]">{item.title}</h3>
          <p className={`mt-2 text-[14px] text-[#3d5248] ${isAr ? "leading-[1.9]" : "leading-relaxed"}`}>
            {item.text}
          </p>
        </div>
      </div>
    </article>
  );
}

function TutorCard({
  tutor,
  index,
  yearsLabel,
  specialtiesLabel,
  isAr,
  hf,
}: {
  tutor: ReturnType<typeof getTutorsPage>["tutors"][number];
  index: number;
  yearsLabel: string;
  specialtiesLabel: string;
  isAr: boolean;
  hf: string;
}) {
  const { ref, visible } = useScrollReveal();
  const delay = (index % 4) * 70;

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group flex flex-col overflow-hidden rounded-3xl border border-[#E8E0D0] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#B8860B]/35 hover:shadow-xl hover:shadow-[#B8860B]/10 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="relative px-6 pt-8 pb-5 text-center">
        <div
          className={`mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${tutor.tint} text-3xl font-serif font-bold text-[#F5F0E8] ring-4 ring-[#F5F0E8] shadow-md transition-transform duration-500 group-hover:scale-105 tutor-icon-float`}
          aria-hidden
        >
          {tutor.initial}
        </div>
        <h3 className={`text-lg font-bold text-[#1C3A2E] ${hf}`}>{tutor.name}</h3>
        <p className="mt-1 text-sm font-medium text-[#B8860B]">{tutor.role}</p>
        <p className="mt-1 text-xs text-[#6b7d75]">
          {tutor.years} {yearsLabel}
        </p>
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6">
        <p className={`flex-1 text-center text-[14px] text-[#5c6e66] ${isAr ? "leading-[1.9]" : "leading-relaxed"}`}>
          {tutor.bio}
        </p>
        <div className="mt-5 border-t border-[#E8E0D0] pt-4">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-[#1C3A2E]/70">
            {specialtiesLabel}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {tutor.specialties.map((s) => (
              <span
                key={s}
                className="rounded-full bg-[#EDE7D9] px-3 py-1 text-xs font-medium text-[#1C3A2E]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TutorsPageContent() {
  const { locale } = useI18n();
  const copy = getTutorsPage(locale);
  const isAr = locale === "ar";
  const hf = isAr ? "font-sans" : "font-serif";

  const videoSrc = encodeURI(TUTOR_MEDIA.video);
  const posterSrc = encodeURI(TUTOR_MEDIA.poster);

  return (
    <div
      className="relative flex-1 overflow-hidden bg-[#EDE7D9] text-[#1C3A2E]"
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212,160,23,0.25), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(28,58,46,0.06), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 pt-[calc(70px+1.5rem)] pb-14 sm:px-6 md:pt-[calc(80px+2rem)] md:pb-20 lg:max-w-5xl xl:max-w-6xl">
        <RevealSection>
          <header className="text-center">
            <div
              className={`mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[#B8860B]/30 bg-white/60 px-4 py-1.5 text-xs font-semibold text-[#6b7d75] shadow-sm backdrop-blur-sm ${
                isAr ? "tracking-normal" : "uppercase tracking-[0.18em]"
              }`}
            >
              <GraduationCap className="tutor-icon-float h-3.5 w-3.5 shrink-0 text-[#B8860B]" strokeWidth={2} />
              {copy.heroBadge}
            </div>
            <h1
              className={`${hf} text-3xl font-bold tracking-tight text-[#1C3A2E] sm:text-4xl md:text-[2.65rem] md:leading-tight`}
            >
              {copy.heroTitle}
            </h1>
            <h2 className={`mt-3 text-lg font-semibold text-[#2d4a3a] sm:text-xl ${hf}`}>
              {copy.heroSubtitle}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-start text-[15px] leading-[1.85] text-[#3d5248]">
              {copy.heroIntro}
            </p>
          </header>
        </RevealSection>

        <hr className="my-14 border-[#B8860B]/25" />

        <RevealSection>
          <section aria-labelledby="tutors-showcase-heading">
            <h2
              id="tutors-showcase-heading"
              className={`mb-6 text-center text-2xl font-bold text-[#1C3A2E] sm:text-3xl ${hf}`}
            >
              {copy.showcaseTitle}
            </h2>
            <div className="overflow-hidden rounded-3xl border border-[#B8860B]/25 bg-[#1C3A2E] shadow-[0_16px_48px_rgba(28,58,46,0.18)]">
              <div className="relative aspect-video w-full bg-[#142920]">
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster={posterSrc}
                  aria-label={copy.videoAria}
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </div>
              <p className="px-5 py-4 text-center text-sm leading-relaxed text-[#F5F0E8]/90 sm:px-8 sm:text-[15px]">
                {copy.showcaseCaption}
              </p>
            </div>
          </section>
        </RevealSection>

        <hr className="my-14 border-[#B8860B]/25" />

        <RevealSection>
          <section aria-labelledby="tutors-highlights-heading">
            <h2
              id="tutors-highlights-heading"
              className={`mb-8 text-center text-2xl font-bold text-[#1C3A2E] sm:text-3xl ${hf}`}
            >
              {copy.highlightsTitle}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {copy.highlights.map((item, i) => (
                <HighlightCard key={item.icon + i} item={item} index={i} isAr={isAr} />
              ))}
            </div>
          </section>
        </RevealSection>

        <hr className="my-14 border-[#B8860B]/25" />

        <RevealSection>
          <section aria-labelledby="tutors-team-heading">
            <header className="mb-10 text-center">
              <h2
                id="tutors-team-heading"
                className={`text-2xl font-bold text-[#1C3A2E] sm:text-3xl ${hf}`}
              >
                {copy.tutorsTitle}
              </h2>
              <p className="mt-3 text-[15px] text-[#5a6b62]">{copy.tutorsSubtitle}</p>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#D4A017] to-[#B8860B]" />
            </header>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {copy.tutors.map((tutor, i) => (
                <TutorCard
                  key={tutor.id}
                  tutor={tutor}
                  index={i}
                  yearsLabel={copy.yearsLabel}
                  specialtiesLabel={copy.specialtiesLabel}
                  isAr={isAr}
                  hf={hf}
                />
              ))}
            </div>
          </section>
        </RevealSection>

        <RevealSection className="mt-16">
          <section className="rounded-3xl border border-[#B8860B]/25 bg-gradient-to-br from-[#1C3A2E] via-[#234832] to-[#142920] px-6 py-10 text-center shadow-[0_20px_56px_rgba(28,58,46,0.22)] sm:px-10">
            <Sparkles
              className="tutor-icon-spin mx-auto mb-4 h-8 w-8 text-[#D4A017]"
              strokeWidth={1.5}
              aria-hidden
            />
            <h2 className={`text-2xl font-bold text-[#F5F0E8] sm:text-3xl ${hf}`}>{copy.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#F5F0E8]/85">
              {copy.ctaBody}
            </p>
            <Link
              href="/book-trial"
              className="mt-8 inline-flex rounded-full bg-[#B8860B] px-10 py-3.5 text-sm font-semibold text-[#FDFAF4] shadow-md shadow-[#B8860B]/30 ring-1 ring-[#D4A017]/35 transition-all duration-300 hover:scale-[1.03] hover:bg-[#D4A017]"
            >
              {copy.ctaButton}
            </Link>
          </section>
        </RevealSection>
      </div>

      <style jsx>{`
        @keyframes tutorFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes tutorTilt {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-6deg);
          }
          75% {
            transform: rotate(6deg);
          }
        }
        @keyframes tutorPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        @keyframes tutorBounce {
          0%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-4px);
          }
          60% {
            transform: translateY(-2px);
          }
        }
        @keyframes tutorSway {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(3px);
          }
        }
        @keyframes tutorSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .tutor-icon-float {
          animation: tutorFloat 3s ease-in-out infinite;
        }
        .tutor-icon-tilt {
          animation: tutorTilt 4s ease-in-out infinite;
        }
        .tutor-icon-pulse {
          animation: tutorPulse 2.5s ease-in-out infinite;
        }
        .tutor-icon-bounce {
          animation: tutorBounce 2.8s ease-in-out infinite;
        }
        .tutor-icon-sway {
          animation: tutorSway 3.5s ease-in-out infinite;
        }
        .tutor-icon-spin {
          animation: tutorSpin 12s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .tutor-icon-float,
          .tutor-icon-tilt,
          .tutor-icon-pulse,
          .tutor-icon-bounce,
          .tutor-icon-sway,
          .tutor-icon-spin {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
