"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  Users,
  GraduationCap,
  Zap,
  Handshake,
  Sparkles,
} from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";
import { getTestimonialsPage } from "@/lib/i18n/testimonialsContent";

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
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${className} ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function StarRow({ aria }: { aria: string }) {
  return (
    <p className="text-lg tracking-tight text-amber-500 drop-shadow-sm" aria-label={aria}>
      ⭐⭐⭐⭐⭐
    </p>
  );
}

type Review = { title: string; quote: string; author: string };

function ReviewCard({
  title,
  quote,
  author,
  index,
  starsAria,
  isAr,
}: Review & { index: number; starsAria: string; isAr: boolean }) {
  const { ref, visible } = useScrollReveal();
  const delay = index * 70;
  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#B8860B]/25 bg-white/90 p-6 shadow-[0_8px_30px_rgba(28,58,46,0.08)] backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-1.5 hover:border-[#D4A017]/45 hover:shadow-[0_20px_50px_rgba(28,58,46,0.14)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div
        className="pointer-events-none absolute -top-8 h-32 w-32 rounded-full bg-[#D4A017]/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 end-[-2rem]"
        aria-hidden
      />
      <StarRow aria={starsAria} />
      <h3
        className={`mt-2 text-lg font-bold text-[#1C3A2E] ${isAr ? "font-sans" : "font-serif"}`}
      >
        {title}
      </h3>
      <blockquote
        className={`mt-3 flex-1 border-s-2 border-[#8bbfaa]/80 ps-4 text-[15px] text-[#2d3f35] ${isAr ? "leading-[1.95]" : "leading-relaxed"}`}
      >
        {quote}
      </blockquote>
      <p className="mt-4 shrink-0 text-sm font-medium text-[#1C3A2E]/85 sm:mt-auto sm:pt-3">{author}</p>
    </article>
  );
}

function FormalReviewCard({
  item,
  index,
  isAr,
}: {
  item: { heading: string; quote: string; footerName: string; footerRole: string };
  index: number;
  isAr: boolean;
}) {
  const { ref, visible } = useScrollReveal();
  const delay = (index % 3) * 60;
  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative overflow-hidden rounded-2xl border border-[#B8860B]/22 bg-gradient-to-br from-white via-[#faf8f3] to-[#f0ebe2] p-6 sm:p-7 shadow-[0_10px_36px_rgba(28,58,46,0.07)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(28,58,46,0.12)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 rtl:bg-[radial-gradient(ellipse_at_top_left,rgba(212,160,23,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="relative">
        <h3
          className={`text-base font-bold leading-snug text-[#1C3A2E] sm:text-[17px] ${isAr ? "font-sans" : "font-serif"}`}
        >
          {item.heading}
        </h3>
        <blockquote
          className={`mt-4 text-[15px] text-[#2d3f35] ${isAr ? "leading-[1.95] not-italic" : "italic leading-[1.8]"}`}
        >
          {isAr ? (
            <>
              «{item.quote}»
            </>
          ) : (
            <>
              &ldquo;{item.quote}&rdquo;
            </>
          )}
        </blockquote>
        <div className="mt-5 flex flex-col gap-1 border-t border-[#B8860B]/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-amber-500" dir="ltr">
            ⭐⭐⭐⭐⭐
          </p>
          <p className="text-sm text-[#1C3A2E]">
            <span className="font-semibold">{item.footerName}</span>
            <span className="text-[#5a6b62]">
              {isAr ? `، ${item.footerRole}` : ` — ${item.footerRole}`}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}

function ChatBubble({
  text,
  stagger,
  isRtl,
  waLabel,
  bubbleAria,
}: {
  text: string;
  stagger: number;
  isRtl: boolean;
  waLabel: string;
  bubbleAria: string;
}) {
  const { ref, visible } = useScrollReveal();
  const slideHidden = isRtl ? "translate-x-6 opacity-0" : "-translate-x-6 opacity-0";
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${stagger}ms` }}
      className={`flex transition-all duration-[580ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isRtl ? "justify-end" : "justify-start"
      } ${visible ? "translate-x-0 opacity-100" : slideHidden}`}
    >
      <div
        className={`group relative max-w-[min(100%,520px)] rounded-2xl bg-[#DCF8C6] px-4 py-3.5 text-[15px] leading-relaxed text-[#1a2e16] shadow-[0_2px_12px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(37,211,102,0.15)] ${
          isRtl ? "rounded-br-md" : "rounded-bl-md"
        }`}
        role="figure"
        aria-label={bubbleAria}
      >
        <p className="italic">{text}</p>
        <span className="mt-2 flex items-center gap-1 text-[11px] font-medium text-[#6b8565] opacity-80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#25D366]" aria-hidden />
          {waLabel}
        </span>
      </div>
    </div>
  );
}

export default function TestimonialsPageContent() {
  const { locale } = useI18n();
  const copy = getTestimonialsPage(locale);
  const isAr = locale === "ar";
  const hf = isAr ? "font-sans" : "font-serif";

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
              <MessageCircle className="h-3.5 w-3.5 shrink-0 text-[#25D366]" strokeWidth={2} />
              {copy.heroBadge}
            </div>
            <h1
              className={`${hf} text-3xl font-bold tracking-tight text-[#1C3A2E] sm:text-4xl md:text-[2.65rem] md:leading-tight ${isAr ? "text-pretty" : ""}`}
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
          <section
            className="rounded-3xl border border-[#B8860B]/20 bg-white/50 p-6 shadow-[0_8px_32px_rgba(28,58,46,0.06)] backdrop-blur-sm sm:p-8"
            aria-labelledby="testimonials-parents-heading"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1C3A2E] text-white shadow-lg shadow-[#1C3A2E]/25 transition-transform duration-300 hover:scale-105 motion-safe:hover:rotate-[-4deg] rtl:motion-safe:hover:rotate-[4deg]">
                <Users className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h2
                id="testimonials-parents-heading"
                className={`text-xl font-bold sm:text-2xl ${hf}`}
              >
                {copy.parentsTitle}
              </h2>
            </div>
            <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
              {copy.parentReviews.map((r, i) => (
                <ReviewCard
                  key={`parent-${i}`}
                  {...r}
                  index={i}
                  starsAria={copy.starsAria}
                  isAr={isAr}
                />
              ))}
            </div>
          </section>
        </RevealSection>

        <hr className="my-12 border-[#B8860B]/25 sm:my-14" />

        <RevealSection>
          <section
            className="rounded-3xl border border-[#B8860B]/20 bg-white/50 p-6 shadow-[0_8px_32px_rgba(28,58,46,0.06)] backdrop-blur-sm sm:p-8"
            aria-labelledby="testimonials-adults-heading"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B8860B] text-white shadow-lg shadow-[#B8860B]/30 transition-transform duration-300 hover:scale-105 motion-safe:hover:rotate-[4deg] rtl:motion-safe:hover:rotate-[-4deg]">
                <GraduationCap className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h2
                id="testimonials-adults-heading"
                className={`text-xl font-bold sm:text-2xl ${hf}`}
              >
                {copy.adultsTitle}
              </h2>
            </div>
            <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
              {copy.adultReviews.map((r, i) => (
                <ReviewCard
                  key={`adult-${i}`}
                  {...r}
                  index={i}
                  starsAria={copy.starsAria}
                  isAr={isAr}
                />
              ))}
            </div>
          </section>
        </RevealSection>

        <hr className="my-14 border-[#B8860B]/25" />

        <RevealSection>
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 transition-transform duration-300 hover:scale-110">
              <Zap className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h2 className={`text-xl font-bold sm:text-2xl ${hf}`}>{copy.quickTitle}</h2>
          </div>
          <p className="mb-8 text-start text-sm italic text-[#5a6b62]">{copy.quickNote}</p>
          <div className="space-y-4 rounded-3xl border border-[#B8860B]/20 bg-[#f8faf6] p-5 sm:p-8">
            <div
              className={`mb-2 flex items-center gap-2 text-xs font-medium text-[#6b8565] ${
                isAr ? "tracking-normal" : "uppercase tracking-wider"
              }`}
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              {copy.quickInbox}
            </div>
            {copy.quickTexts.map((t, i) => (
              <ChatBubble
                key={`quick-${i}`}
                text={t}
                stagger={i * 120}
                isRtl={isAr}
                waLabel={copy.quickWaTag}
                bubbleAria={copy.waBubbleLabel}
              />
            ))}
          </div>
        </RevealSection>

        <hr className="my-14 border-[#B8860B]/25" />

        <RevealSection>
          <div className="flex items-start gap-3">
            <Handshake className="mt-1 h-8 w-8 shrink-0 text-[#D4A017]" strokeWidth={1.5} />
            <div className="min-w-0 flex-1">
              <h2 className={`text-xl font-bold sm:text-2xl ${hf}`}>{copy.shareTitle}</h2>
              <p className="mt-4 text-start text-[15px] leading-[1.85] text-[#3d5248]">{copy.shareBody}</p>
              <Link
                href="/contact#message"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1C3A2E] px-7 py-3.5 text-sm font-semibold text-[#F5F0E8] shadow-[0_12px_32px_rgba(28,58,46,0.35)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#254d38] hover:shadow-[0_16px_40px_rgba(28,58,46,0.45)] active:scale-[0.98]"
              >
                <Sparkles className="h-4 w-4 shrink-0 text-[#F2D58C]" />
                {copy.shareCta}
              </Link>
            </div>
          </div>
        </RevealSection>

        <hr className="my-16 border-[#B8860B]/30" />

        <RevealSection>
          <header className="text-center">
            <h2 className={`text-3xl font-bold text-[#1C3A2E] sm:text-4xl ${hf} ${isAr ? "text-pretty" : ""}`}>
              {copy.formalTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#3d5248] sm:text-center">
              {copy.formalSubtitle}
            </p>
          </header>
        </RevealSection>

        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3">
          {copy.formalReviews.map((item, index) => (
            <FormalReviewCard key={`formal-${index}`} item={item} index={index} isAr={isAr} />
          ))}
        </div>
      </div>
    </div>
  );
}
