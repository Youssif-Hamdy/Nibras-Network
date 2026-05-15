"use client";

import { BookOpen, Download, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import { type ReactNode } from "react";
import { useI18n } from "@/components/LocaleProvider";
import { useReveal } from "@/hooks/useReveal";
import { EBOOK_FILES, getEbooksPage } from "@/lib/i18n/ebooksContent";

function Reveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${className} ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

export default function EbooksPageContent() {
  const { locale } = useI18n();
  const isAr = locale === "ar";
  const copy = getEbooksPage(locale);

  return (
    <div
      className="relative flex-1 overflow-x-hidden bg-[#ebe6dd] text-[#1a3328] antialiased"
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_480px_at_50%_-10%,rgba(255,252,246,0.9),transparent_55%),radial-gradient(800px_380px_at_100%_35%,rgba(212,193,140,0.1),transparent_50%),radial-gradient(640px_320px_at_0%_55%,rgba(200,220,208,0.14),transparent_48%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-[calc(70px+1.5rem)] pb-20 sm:px-6 md:max-w-7xl md:pt-[calc(80px+2rem)] md:pb-28">
        <Reveal>
          <header className="relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-b from-white to-[#f7f4ee] p-8 shadow-[0_1px_0_rgba(255,255,255,0.92)_inset,0_24px_60px_-36px_rgba(28,58,46,0.22)] sm:p-10 md:p-12">
            <div
              className="pointer-events-none absolute -end-24 -top-28 h-72 w-72 rounded-full bg-[#d4c17a]/15 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:gap-12 lg:text-start">
              <div
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-[#e8e0d4] bg-gradient-to-br from-[#f7f4ee] to-[#eef2ee] text-[#1e3d30] shadow-inner sm:h-28 sm:w-28"
                aria-hidden
              >
                <BookOpen className="h-12 w-12 sm:h-14 sm:w-14" strokeWidth={1.15} />
              </div>
              <div className="min-w-0 flex-1 space-y-4">
                <p className="inline-flex items-center gap-2 rounded-full border border-[#d4a017]/25 bg-[#fdfaf4] px-4 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a6f4a] sm:text-[11px]">
                  <Sparkles className="h-3.5 w-3.5 text-[#b8954a]" aria-hidden />
                  {copy.kicker}
                </p>
                <h1 className="font-serif text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-[#1a3328] sm:text-4xl md:text-[2.35rem]">
                  {copy.title}
                </h1>
                <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-[#4d5f56] sm:text-[16px] lg:mx-0">
                  {copy.subtitle}
                </p>
              </div>
            </div>
          </header>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {EBOOK_FILES.map((book, i) => {
            const href = `/${encodeURI(book.file)}`;
            const title = isAr ? book.titleAr : book.titleEn;
            const blurb = isAr ? book.blurbAr : book.blurbEn;
            const delay = Math.min(i * 70, 420);
            return (
              <Reveal key={book.file} delayMs={delay}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5dfd4] bg-white p-6 shadow-[0_2px_0_rgba(255,255,255,0.95)_inset,0_14px_40px_-28px_rgba(28,58,46,0.18)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#d4cbb8] hover:shadow-[0_2px_0_rgba(255,255,255,1)_inset,0_22px_50px_-22px_rgba(28,58,46,0.22)] sm:p-7">
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#c9b06a]/80 via-[#d4c17a] to-[#c9b06a]/80 opacity-90"
                    aria-hidden
                  />
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 flex-1 items-start gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef2ee] text-[#2d4f3f] shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <BookOpen className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                      <div className="min-w-0">
                        <span className="mb-1 inline-block rounded-md bg-[#1e3d30]/90 px-2 py-0.5 font-sans text-[9px] font-bold uppercase tracking-wider text-[#f5f0e8]">
                          {copy.freeBadge}
                        </span>
                        <h2 className="mt-2 font-serif text-lg font-semibold leading-snug text-[#1a3328] sm:text-xl">
                          {title}
                        </h2>
                        <p className="mt-2 text-[13.5px] leading-relaxed text-[#5c6f66] sm:text-[14px]">
                          {blurb}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2.5 border-t border-[#efe8de] pt-5">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#1c3a2e]/15 bg-[#1c3a2e] px-4 py-2.5 text-[13px] font-semibold text-[#f5f0e8] shadow-sm transition-[transform,background-color] duration-200 hover:bg-[#2d5a3d] min-[380px]:flex-none"
                    >
                      <ExternalLink className="h-4 w-4 opacity-90" aria-hidden />
                      {copy.openLabel}
                    </a>
                    <a
                      href={href}
                      download
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#d4a017]/35 bg-[#fdfaf4] px-4 py-2.5 text-[13px] font-semibold text-[#5c4a1a] transition-[transform,background-color,border-color] duration-200 hover:border-[#b8954a]/55 hover:bg-[#fff9ef] min-[380px]:flex-none"
                    >
                      <Download className="h-4 w-4" aria-hidden />
                      {copy.downloadLabel}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delayMs={120}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-[#e0d9ce] bg-white/80 px-6 py-8 text-center shadow-sm sm:flex-row sm:text-start">
            <p className="max-w-md text-[14px] leading-relaxed text-[#4d5f56] sm:text-[15px]">
              {copy.footerLine}
            </p>
            <Link
              href="/book-trial"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1c3a2e] px-6 py-3 text-sm font-semibold text-[#f5f0e8] shadow-md transition-[transform,background-color] duration-200 hover:bg-[#2d5a3d] hover:scale-[1.02]"
            >
              {copy.footerCta}
              <span className="text-[#d4a017] rtl:rotate-180">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
