"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import type { SectionIconKey, GuideSection } from "@/lib/blog/parentGuideData";
import {
  getParentGuideMeta,
  getParentGuideSections,
} from "@/lib/blog/parentGuideData";
import { useI18n } from "@/components/LocaleProvider";

// ─── Constants ────────────────────────────────────────────────────────────────

const TRIAL_HREF = "/contact";

const iconStroke = {
  width: 1.65,
  cap: "round" as const,
  join: "round" as const,
};

type Section = GuideSection;

// ─── Section Icon ─────────────────────────────────────────────────────────────

function SectionIcon({ name }: { name: SectionIconKey }) {
  const c = "w-[18px] h-[18px] shrink-0 text-[#1C3A2E]";
  const { width: sw, cap, join } = iconStroke;

  switch (name) {
    case "quran":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap={cap} strokeLinejoin={join} className={c} aria-hidden>
          <path d="M6 4h9a2 2 0 0 1 2 2v14a1 1 0 0 1-1-1V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a1 1 0 0 0 1 1h11" />
          <path d="M9 8h6M9 12h4" />
        </svg>
      );
    case "arabic":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap={cap} strokeLinejoin={join} className={c} aria-hidden>
          <path d="M4 5h16M4 12h10M4 19h14" />
          <path d="M18 9v6l3-3-3-3" />
        </svg>
      );
    case "islamic":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap={cap} strokeLinejoin={join} className={c} aria-hidden>
          <path d="M12 3v18M8 7h8M8 17h8" />
          <path d="M6 21h12" />
        </svg>
      );
    case "progress":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap={cap} strokeLinejoin={join} className={c} aria-hidden>
          <path d="M3 20h18M6 20V10M12 20V4M18 20v-6" />
        </svg>
      );
    case "schedule":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap={cap} strokeLinejoin={join} className={c} aria-hidden>
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M4 11h16" />
        </svg>
      );
    case "sisters":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap={cap} strokeLinejoin={join} className={c} aria-hidden>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" />
        </svg>
      );
    case "tajweed":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap={cap} strokeLinejoin={join} className={c} aria-hidden>
          <path d="M12 3v18" />
          <path d="M8 7c2 2 8 2 8-2M8 17c2-2 8-2 8 2" />
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "play":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap={cap} strokeLinejoin={join} className={c} aria-hidden>
          <path d="M12 3v2M12 19v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M3 12h2M19 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" opacity={0.35} />
        </svg>
      );
    case "trust":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap={cap} strokeLinejoin={join} className={c} aria-hidden>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "family":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap={cap} strokeLinejoin={join} className={c} aria-hidden>
          <circle cx="9" cy="7" r="2.5" />
          <circle cx="17" cy="9" r="2" />
          <path d="M3 20c0-2.76 2.69-5 6-5s6 2.24 6 5M15 20c0-1.5 1.79-3 4-3" />
        </svg>
      );
    default:
      return null;
  }
}

// ─── Scroll Reveal ────────────────────────────────────────────────────────────

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
      { threshold: 0.06 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);
  return { ref, visible };
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function Modal({ section, idx, onClose }: { section: Section; idx: number; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const { t, locale } = useI18n();
  const isAr = locale === "ar";
  const hf = isAr ? "font-sans" : "font-serif";

  useEffect(() => { requestAnimationFrame(() => setMounted(true)); }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{
        backgroundColor: `rgba(10,20,15,${mounted ? 0.6 : 0})`,
        backdropFilter: "blur(6px)",
        transition: "background-color 0.3s ease",
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0) scale(1)" : "translateY(24px) scale(0.96)",
          transition: "opacity 0.38s ease, transform 0.38s cubic-bezier(0.22,1,0.36,1)",
          boxShadow: "0 32px 72px rgba(28,58,46,0.22), 0 4px 16px rgba(28,58,46,0.08)",
          maxHeight: "92vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ── Image — fills header area (cover) ── */}
        <div
          className="relative w-full shrink-0 overflow-hidden bg-[#1C3A2E]/8"
          style={{ height: "260px" }}
        >
          <Image
            src={`/images/${section.imageIndex}.jpeg`}
            alt={section.title}
            fill
            className="object-cover object-center"
            sizes="512px"
          />
          {/* close */}
          <button
            onClick={onClose}
            className="absolute end-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/45"
            aria-label={t("blog.close")}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M1 1l11 11M12 1L1 12" />
            </svg>
          </button>
        </div>

        {/* ── Body ── */}
        <div className="flex flex-col gap-4 overflow-y-auto p-6">
          <h2
            id="modal-title"
            className={`text-[17px] font-semibold leading-snug text-[#1C3A2E] text-start ${hf}`}
          >
            {section.title}
          </h2>
          {/* full text */}
          <p
            className={`text-[14px] text-[#3a3a32] text-start ${isAr ? "leading-[1.95]" : "leading-[1.85]"}`}
          >
            {section.body}
          </p>
          {/* CTA */}
          <Link
            href={TRIAL_HREF}
            onClick={onClose}
            className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1C3A2E] px-6 py-3 text-sm font-semibold text-[#F5F0E8] transition-colors hover:bg-[#2D5A3D]"
          >
            {t("blog.heroCta")}
            <span className="text-[#D4A017] rtl:rotate-180" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function GuideCard({
  section,
  idx,
  onReadMore,
}: {
  section: Section;
  idx: number;
  onReadMore: () => void;
}) {
  const { ref, visible } = useScrollReveal();
  const [hovered, setHovered] = useState(false);
  const { t, locale } = useI18n();
  const isAr = locale === "ar";
  const hf = isAr ? "font-sans" : "font-serif";

  // fixed preview length for visual alignment (Arabic script often needs a few more graphemes)
  const previewCap = isAr ? 130 : 105;
  const preview =
    section.body.length > previewCap + 5
      ? section.body.slice(0, previewCap).trimEnd() + "…"
      : section.body;

  return (
    <div
      ref={ref}
      // each card is a full-height flex column so the grid row aligns them
      className="flex"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${idx * 65}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${idx * 65}ms`,
      }}
    >
      <article
        id={section.id}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex w-full flex-col overflow-hidden rounded-2xl bg-white"
        style={{
          border: `1px solid ${hovered ? "#D4A017" : "#E5E2DA"}`,
          boxShadow: hovered
            ? "0 8px 28px rgba(28,58,46,0.11)"
            : "0 1px 5px rgba(28,58,46,0.05)",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          transition: "border-color 0.2s, box-shadow 0.25s, transform 0.22s ease",
        }}
      >
        {/* ── Image — fills the card header area (cover) ── */}
        <div
          className="relative w-full shrink-0 overflow-hidden bg-[#EAE7DF]"
          style={{ height: "220px" }}
        >
          <Image
            src={`/images/${section.imageIndex}.jpeg`}
            alt={section.title}
            fill
            className="object-cover object-center"
            style={{
              transition: "transform 0.5s ease",
              transform: hovered ? "scale(1.03)" : "scale(1)",
            }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={idx < 3}
          />
        </div>

        {/* ── Content — flex-1 so all cards stretch to same height ── */}
        <div className="flex flex-1 flex-col gap-3 p-5 text-start">
          <h3
            className={`text-[15px] font-semibold leading-snug text-[#1C3A2E] text-start ${hf} ${isAr ? "text-pretty" : ""}`}
            style={{ minHeight: "3.2em" }}
          >
            {section.title}
          </h3>
          {/* Preview — flex-1 pushes Read more to bottom */}
          <p
            className={`flex-1 text-[13px] text-[#3d3d36] text-start ${isAr ? "leading-[1.85]" : "leading-[1.72]"}`}
            style={{ minHeight: "4.5em" }}
          >
            {preview}
          </p>

          {/* Read more — pinned to bottom */}
          <button
            onClick={onReadMore}
            className="group mt-auto inline-flex w-fit items-center gap-1.5 text-[12px] font-semibold text-[#B8860B] transition-colors hover:text-[#1C3A2E]"
          >
            {t("blog.readMore")}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
              aria-hidden
            >
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </button>
        </div>
      </article>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPageContent() {
  const { t, locale } = useI18n();
  const isAr = locale === "ar";
  const hf = isAr ? "font-sans" : "font-serif";
  const meta = getParentGuideMeta(locale);
  const sections = getParentGuideSections(locale);
  const [active, setActive] = useState<{ section: Section; idx: number } | null>(null);
  const handleClose = useCallback(() => setActive(null), []);

  return (
    <div
      className="bg-[#F7F5F0] text-[#1A1A14]"
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
    >
      {/* ── Hero ── */}
      <section className="border-b border-[#D4A017]/20 px-4 pb-12 pt-[78px] sm:px-6 md:pb-16 md:pt-[88px]">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`mb-4 text-[11px] font-semibold text-[#B8860B] ${
              isAr ? "tracking-normal" : "uppercase tracking-[0.2em]"
            }`}
          >
            {t("blog.kicker")}
          </p>
          <h1
            className={`mb-6 text-[clamp(1.35rem,4vw,2.15rem)] font-semibold leading-snug text-[#1C3A2E] ${hf} ${isAr ? "text-pretty" : ""}`}
          >
            {meta.title}
          </h1>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-[#4a4a42] md:text-[16px]">
            {meta.description}
          </p>
          <Link
            href={TRIAL_HREF}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1C3A2E] px-6 py-3 text-sm font-semibold text-[#F5F0E8] shadow-md shadow-[#1C3A2E]/15 transition-colors hover:bg-[#2D5A3D]"
          >
            {t("blog.heroCta")}
            <span className="text-[#D4A017] rtl:rotate-180" aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* ── Grid ── */}
      <section
        className="px-4 py-12 pb-24 sm:px-6 md:py-16"
        aria-labelledby="blog-guide-heading"
      >
        <div className="mx-auto max-w-5xl">
          <h2
            id="blog-guide-heading"
            className={`mb-2 text-lg text-[#1C3A2E] md:text-xl ${hf}`}
          >
            {t("blog.topicsTitle")}
          </h2>
          <p className="mb-10 border-b border-[#D4A017]/25 pb-6 text-sm leading-relaxed text-[#61746C]">
            {t("blog.topicsSubtitle")}
          </p>

          {/*
            items-stretch (default) makes all cards in a row the same height.
            The card's flex-1 content area distributes space evenly inside.
          */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, idx) => (
              <GuideCard
                key={section.id}
                section={section}
                idx={idx}
                onReadMore={() => setActive({ section, idx })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {active && (
        <Modal section={active.section} idx={active.idx} onClose={handleClose} />
      )}
    </div>
  );
}