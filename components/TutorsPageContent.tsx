"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Heart,
  Mic,
  Sparkles,
  Star,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";
import { getTutorsPage, TUTOR_MEDIA, type FeatureSection, type TutorProfile } from "@/lib/tutors";

/* ─── scroll reveal hook ─── */
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
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" },
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

const FEATURE_ICONS: Record<number, LucideIcon> = {
  1: Users,
  2: BookOpen,
  3: Heart,
  4: Star,
  5: Award,
  6: Sparkles,
};

export default function TutorsPageContent() {
  const { locale } = useI18n();
  const copy = getTutorsPage(locale);
  const isAr = locale === "ar";
  const hf = isAr ? "font-sans" : "font-serif";

  const videoSrc = encodeURI(TUTOR_MEDIA.video);
  const posterSrc = encodeURI(TUTOR_MEDIA.poster);

  // States
  const [selectedTutor, setSelectedTutor] = useState<TutorProfile | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTutor(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="relative flex-1 bg-[#EDE7D9] text-[#1C3A2E]"
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
    >
      {/* ─── HERO IMAGE ─── */}
      <section className="relative w-full pt-[72px] md:pt-[80px]">
        <img
          src="/images/tutors/tutoresHero.jpeg"
          alt="Our Tutors"
          className="w-full h-auto block object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-36 bg-gradient-to-t from-[#EDE7D9] to-transparent pointer-events-none" />
      </section>

      <div className="relative mx-auto max-w-7xl px-4 pb-14 sm:px-6 md:pb-20">
        
        {/* ─── HERO & VIDEO SPLIT ─── */}
        <section className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left side: Heading and content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <RevealSection>
              <div
                className={`inline-flex items-center gap-2 rounded-full border border-[#B8860B]/30 bg-white/60 px-4 py-1.5 text-xs font-semibold text-[#6b7d75] shadow-sm backdrop-blur-sm w-fit ${
                  isAr ? "tracking-normal" : "uppercase tracking-[0.18em]"
                }`}
              >
                <GraduationCap className="tutor-icon-float h-3.5 w-3.5 text-[#B8860B]" strokeWidth={2} />
                {copy.heroBadge}
              </div>
              <h1
                className={`mt-4 text-3xl font-bold tracking-tight text-[#1C3A2E] sm:text-4xl lg:text-5xl lg:leading-tight ${hf}`}
              >
                {copy.heroTitle}
              </h1>
            </RevealSection>

            {/* Why Choose List */}
            <RevealSection delayMs={100} className="mt-6">
              <ul className="space-y-2.5">
                {copy.whyChoose.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#3d5248]">
                    <CheckCircle2
                      className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#2D5A3D]"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <span className={isAr ? "leading-[1.8]" : "leading-relaxed"}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </RevealSection>

            {/* CTAs */}
            <RevealSection delayMs={200} className="mt-8">
              <div className="flex flex-wrap gap-3">
                <Link
                  href={copy.heroCTAs[1]?.href || "/book-trial"}
                  className="rounded-full bg-[#B8860B] px-6 py-3 text-xs font-bold text-[#FDFAF4] shadow-md shadow-[#B8860B]/30 ring-1 ring-[#D4A017]/35 transition-all duration-300 hover:scale-[1.03] hover:bg-[#D4A017]"
                >
                  {copy.heroCTAs[1]?.label || "Book A Trial"}
                </Link>
                <Link
                  href={copy.heroCTAs[2]?.href || "/book-trial"}
                  className="rounded-full border border-[#B8860B]/30 bg-white/80 px-6 py-3 text-xs font-bold text-[#1C3A2E] shadow-sm transition-all duration-300 hover:scale-[1.03] hover:border-[#B8860B]/50 hover:bg-white"
                >
                  {copy.heroCTAs[2]?.label || "Get Recommendations"}
                </Link>
              </div>
            </RevealSection>
          </div>

          {/* Right side: Video Showcase */}
          <div className="lg:col-span-7">
            <RevealSection delayMs={150}>
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
                <div className="bg-[#1C3A2E] px-5 py-3.5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#D4A017] mb-1">
                    {copy.showcaseTitle}
                  </p>
                  <p className="text-xs text-[#F5F0E8]/80 leading-relaxed max-w-xl mx-auto">
                    {copy.showcaseCaption}
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        <hr className="my-14 border-[#B8860B]/20" />

        {/* ─── MEET SOME OF OUR TUTORS (COMPACT GRID WITH OVERLAY) ─── */}
        <section aria-labelledby="tutors-team-heading">
          <RevealSection>
            <div className="text-center mb-10">
              <h2
                id="tutors-team-heading"
                className={`text-2xl font-bold text-[#1C3A2E] sm:text-3xl ${hf}`}
              >
                {copy.tutorsSectionTitle}
              </h2>
              <p className="mt-2 text-sm text-[#5a6b62]">
                {isAr ? "انقر على أي معلم لعرض ملفه الشخصي الكامل وتفاصيل أسلوبه التدريسي" : "Click on any tutor to view their full profile and detailed teaching style"}
              </p>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#D4A017] to-[#B8860B]" />
            </div>
          </RevealSection>

          {/* Compact Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {copy.tutors.map((tutor, i) => {
              const delay = (i % 4) * 60;
              return (
                <article
                  key={tutor.id}
                  style={{ transitionDelay: `${delay}ms` }}
                  onClick={() => setSelectedTutor(tutor)}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E8E0D0] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8860B]/40 hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    {/* Compact initials avatar */}
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${tutor.tint} text-xl font-bold text-[#F5F0E8] ring-2 ring-[#F5F0E8] shadow-sm`}
                      aria-hidden
                    >
                      {tutor.initial}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className={`text-base font-bold text-[#1C3A2E] truncate ${hf}`}>
                        {tutor.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#B8860B] truncate mt-0.5">{tutor.role}</p>
                    </div>
                  </div>

                  {/* Badges for main teaching areas */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {tutor.teachingAreas.slice(0, 3).map((area) => (
                      <span
                        key={area}
                        className="rounded-full bg-[#EDE7D9] px-2 py-0.5 text-[10px] font-medium text-[#1C3A2E]"
                      >
                        {area}
                      </span>
                    ))}
                    {tutor.teachingAreas.length > 3 && (
                      <span className="rounded-full bg-[#1C3A2E]/5 px-2 py-0.5 text-[10px] font-bold text-[#1C3A2E]">
                        +{tutor.teachingAreas.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Languages / Experience short indicator */}
                  <div className="mt-4 flex items-center justify-between border-t border-[#EDE7D9] pt-3 text-[11px] text-[#6b7d75]">
                    <span>{tutor.languages ? tutor.languages.split(" • ")[1] || tutor.languages : ""}</span>
                    <span className="font-semibold text-[#1C3A2E] group-hover:text-[#B8860B] transition-colors duration-200 flex items-center gap-0.5">
                      {isAr ? "عرض التفاصيل" : "Details"}
                      <ChevronRight className={`h-3 w-3 ${isAr ? "rotate-180" : ""}`} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <hr className="my-14 border-[#B8860B]/20" />

        {/* ─── WHAT MAKES OUR TEACHING DIFFERENT ─── */}
        <RevealSection>
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#B8860B]/20 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:w-1/2">
                <h2 className={`text-xl font-bold text-[#1C3A2E] sm:text-2xl ${hf}`}>
                  {copy.whatMakesDifferent.title}
                </h2>
                <p className={`mt-2 text-[14px] leading-relaxed text-[#5a6b62]`}>
                  {copy.whatMakesDifferent.intro}
                </p>
                <div className="mt-5 flex gap-2">
                  <Link
                    href={copy.heroCTAs[0]?.href || "/book-trial"}
                    className="rounded-full bg-[#1C3A2E] px-5 py-2.5 text-xs font-bold text-[#F5F0E8] transition-all duration-300 hover:bg-[#2D5A3D]"
                  >
                    {copy.heroCTAs[0]?.label || "Meet Tutors"}
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-2">
                {copy.whatMakesDifferent.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-xl bg-[#EDE7D9]/40 p-2.5 text-[12px] font-medium text-[#1C3A2E]"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8860B]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>

        <hr className="my-14 border-[#B8860B]/20" />

        {/* ─── METHODOLOGY DETAILS (ACCORDION STYLE FOR TEXT PRESERVATION) ─── */}
        <section aria-labelledby="methodology-heading">
          <RevealSection>
            <div className="text-center mb-8">
              <h2
                id="methodology-heading"
                className={`text-2xl font-bold text-[#1C3A2E] sm:text-3xl ${hf}`}
              >
                {isAr ? "منهجيتنا بالتفصيل" : "Our Methodology in Detail"}
              </h2>
              <p className="mt-2 text-sm text-[#5a6b62]">
                {isAr ? "اضغط على أي عنوان لاستكشاف تفاصيل منهج التعليم والتدريب وجودة الحصص" : "Click any section to explore details on education methods, training, and lesson quality"}
              </p>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#D4A017] to-[#B8860B]" />
            </div>
          </RevealSection>

          <div className="mx-auto max-w-3xl space-y-3">
            {copy.features.map((feature) => {
              const isOpen = expandedFeature === feature.number;
              const Icon = FEATURE_ICONS[feature.number] ?? BookOpen;

              return (
                <div
                  key={feature.number}
                  className="overflow-hidden rounded-2xl border border-[#B8860B]/15 bg-white shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFeature(isOpen ? null : feature.number)}
                    className="flex w-full items-center justify-between px-6 py-4.5 text-start hover:bg-[#F5F0E8]/40 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EDE7D9] text-[#1C3A2E]">
                        <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                      </span>
                      <span className={`text-[15px] font-bold text-[#1C3A2E] ${hf}`}>
                        {feature.number}. {feature.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-[#B8860B] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Animated Collapse panel */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-[#EDE7D9] px-6 py-5 bg-[#EDE7D9]/10">
                        <p className={`text-[14px] leading-[1.8] text-[#3d5248] mb-4`}>
                          {feature.intro}
                        </p>

                        <div className={`grid gap-5 ${feature.lists.length > 1 ? "sm:grid-cols-2" : ""}`}>
                          {feature.lists.map((list, li) => (
                            <div key={li}>
                              <p className="mb-2 text-[12px] font-bold uppercase tracking-wider text-[#1C3A2E]/70">
                                {list.heading}
                              </p>
                              <ul className="space-y-1.5">
                                {list.items.map((item, ii) => (
                                  <li key={ii} className="flex items-start gap-2 text-[13px] text-[#3d5248]">
                                    <ChevronRight
                                      className={`mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B8860B] ${isAr ? "rotate-180" : ""}`}
                                      strokeWidth={2.5}
                                      aria-hidden
                                    />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {feature.closing && (
                          <p className="mt-4 rounded-xl border border-[#B8860B]/15 bg-[#F5F0E8]/50 px-4 py-2.5 text-[13px] font-medium text-[#1C3A2E]">
                            {feature.closing}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="my-14 border-[#B8860B]/20" />

        {/* ─── PROMISE SECTION ─── */}
        <RevealSection>
          <section className="rounded-3xl border border-[#B8860B]/25 bg-gradient-to-br from-[#1C3A2E] via-[#234832] to-[#142920] px-6 py-10 text-center shadow-[0_20px_56px_rgba(28,58,46,0.22)] sm:px-10">
            <Sparkles className="tutor-icon-spin mx-auto mb-4 h-8 w-8 text-[#D4A017]" strokeWidth={1.5} aria-hidden />
            <h2 className={`text-2xl font-bold text-[#F5F0E8] sm:text-3xl ${hf}`}>
              {copy.promise.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-[#F5F0E8]/85">
              {copy.promise.intro}
            </p>
            <ul className="mx-auto mt-6 flex max-w-lg flex-wrap justify-center gap-3">
              {copy.promise.items.map((item, i) => (
                <li key={i} className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs text-[#F5F0E8]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D4A017]" strokeWidth={2} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            {/* Final CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {copy.finalCTAs.map((cta, i) => (
                <Link
                  key={i}
                  href={cta.href}
                  className={`rounded-full px-6 py-3 text-xs font-bold transition-all duration-300 hover:scale-[1.03] ${
                    i === 0
                      ? "bg-[#B8860B] text-[#FDFAF4] shadow-md shadow-[#B8860B]/30 ring-1 ring-[#D4A017]/35 hover:bg-[#D4A017]"
                      : "border border-[#F5F0E8]/25 bg-white/10 text-[#F5F0E8] hover:bg-white/20"
                  }`}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </section>
        </RevealSection>
      </div>

      {/* ─── TUTOR DETAIL MODAL OVERLAY ─── */}
      {selectedTutor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedTutor(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Box */}
          <div
            className="relative w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#B8860B]/30 bg-white p-6 shadow-2xl transition-all duration-300 max-h-[85vh] text-[#1C3A2E]"
            onClick={(e) => e.stopPropagation()}
            dir={isAr ? "rtl" : "ltr"}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedTutor(null)}
              className="absolute top-4 end-4 p-2 rounded-full hover:bg-[#EDE7D9] text-[#6b7d75] hover:text-[#1C3A2E] transition-colors duration-200"
              aria-label={isAr ? "إغلاق" : "Close"}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-5 border-b border-[#E8E0D0]">
              <div
                className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${selectedTutor.tint} text-3xl font-bold text-[#F5F0E8] ring-4 ring-[#EDE7D9] shadow-md`}
              >
                {selectedTutor.initial}
              </div>
              <div className="text-center sm:text-start min-w-0">
                <h3 className={`text-xl font-bold text-[#1C3A2E] ${hf}`}>
                  {selectedTutor.name}
                </h3>
                <p className="text-sm font-semibold text-[#B8860B] mt-0.5">{selectedTutor.role}</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-2 text-xs text-[#6b7d75]">
                  {selectedTutor.languages && (
                    <span>
                      <strong className="text-[#1C3A2E]/70">{copy.languagesLabel}:</strong> {selectedTutor.languages}
                    </span>
                  )}
                  {selectedTutor.experience && (
                    <span>
                      <strong className="text-[#1C3A2E]/70">{copy.experienceLabel}:</strong> {selectedTutor.experience}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Scrollable details */}
            <div className="mt-5 space-y-5">
              {/* Teaching Areas */}
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#1C3A2E]/60">
                  {copy.teachingAreasLabel}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTutor.teachingAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-[#EDE7D9] px-3 py-1 text-xs font-semibold text-[#1C3A2E]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Background */}
              {selectedTutor.background && (
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#1C3A2E]/60">
                    {copy.backgroundLabel}
                  </p>
                  <p className={`text-[14px] leading-relaxed text-[#3d5248]`}>
                    {selectedTutor.background}
                  </p>
                </div>
              )}

              {/* Philosophy */}
              {selectedTutor.philosophy && (
                <div className="rounded-xl border border-[#B8860B]/25 bg-[#F5F0E8]/40 p-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#B8860B]">
                    {copy.philosophyLabel}
                  </p>
                  <p className={`text-[14px] italic font-medium text-[#1C3A2E]`}>
                    &ldquo;{selectedTutor.philosophy}&rdquo;
                  </p>
                </div>
              )}

              {/* Teaching Style */}
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#1C3A2E]/60">
                  {copy.styleLabel}
                </p>
                <ul className="space-y-1.5">
                  {selectedTutor.teachingStyle.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-[13px] text-[#3d5248]">
                      <ChevronRight
                        className={`mt-0.5 h-4 w-4 shrink-0 text-[#B8860B] ${isAr ? "rotate-180" : ""}`}
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For */}
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#1C3A2E]/60">
                  {copy.bestForLabel}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTutor.bestFor.map((b) => (
                    <span
                      key={b}
                      className="flex items-center gap-1 rounded-full bg-[#1C3A2E] px-3 py-1 text-xs font-medium text-[#F5F0E8]"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#D4A017]" strokeWidth={2} aria-hidden />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer with Trial CTA */}
            <div className="mt-8 border-t border-[#E8E0D0] pt-5 flex items-center justify-between gap-3">
              <span className="text-xs text-[#6b7d75] hidden sm:inline">
                {isAr ? "أكاديمية شبكة نبراس" : "Nibras Network Academy"}
              </span>
              <Link
                href="/book-trial"
                onClick={() => setSelectedTutor(null)}
                className="w-full sm:w-auto rounded-full bg-[#B8860B] px-8 py-3 text-xs font-bold text-[#FDFAF4] text-center shadow-md shadow-[#B8860B]/25 hover:bg-[#D4A017] transition-all duration-300"
              >
                {isAr ? `احجز حصة تجريبية مع ${selectedTutor.name.split(" ")[0]}` : `Book a lesson with ${selectedTutor.name.split(" ")[0]}`}
              </Link>
            </div>
          </div>
        </div>
      )}

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
        .tutor-icon-spin {
          animation: tutorSpin 12s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .tutor-icon-float,
          .tutor-icon-spin {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
