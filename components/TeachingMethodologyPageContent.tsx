"use client";

import Link from "next/link";
import { useMemo, type ReactNode } from "react";
import { GraduationCap } from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";
import { useReveal } from "@/hooks/useReveal";
import { getTeachingMethodology } from "@/lib/i18n/teachingMethodologyBundle";
import type { TMNode, TMSection } from "@/lib/i18n/teachingMethodologyData";

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

function TMTable({
  headers,
  rows,
  isAr,
}: {
  headers: [string, string];
  rows: [string, string][];
  isAr: boolean;
}) {
  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="not-prose my-6 overflow-x-auto rounded-2xl border border-[rgba(28,58,46,0.07)] bg-gradient-to-b from-[#faf9f6] to-[#f3f1ec] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
    >
      <table className="w-full min-w-[min(100%,440px)] border-collapse text-start text-[13px] leading-[1.6] text-[#1a3328] sm:min-w-[480px] sm:text-[14px]">
        <thead>
          <tr className="bg-[rgba(28,58,46,0.06)]">
            {headers.map((h) => (
              <th
                key={h}
                className="border-b border-[rgba(28,58,46,0.08)] px-3 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-wide text-[#3d5249] sm:px-4 sm:text-xs"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-white/90" : "bg-[#f7f5f1]/90"}>
              <td className="border-b border-[#e8e4dc] px-3 py-3 font-medium text-[#1a3328] sm:px-4">
                {row[0]}
              </td>
              <td className="border-b border-[#e8e4dc] px-3 py-3 text-[#3d5249] sm:px-4">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Nodes({ nodes, isAr }: { nodes: TMNode[]; isAr: boolean }) {
  return (
    <div className="space-y-4">
      {nodes.map((n, i) => {
        if (n.k === "hr") {
          return (
            <div
              key={i}
              className="my-6 h-px w-full bg-gradient-to-r from-transparent via-[#d4c17a]/35 to-transparent"
              aria-hidden
            />
          );
        }
        if (n.k === "p") {
          return (
            <p
              key={i}
              className="whitespace-pre-line text-[15px] leading-[1.78] text-[#3d5249] sm:text-[16px]"
            >
              {n.text}
            </p>
          );
        }
        if (n.k === "ul") {
          return (
            <ul key={i} className="space-y-2.5 ps-1">
              {n.items.map((item) => (
                <li
                  key={item}
                  className={`flex gap-2.5 text-[15px] leading-[1.75] text-[#3d5249] sm:text-[16px] ${isAr ? "flex-row-reverse text-end" : ""}`}
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8954a]" aria-hidden />
                  <span className="min-w-0 flex-1">{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (n.k === "h3") {
          return (
            <h3
              key={i}
              className="pt-2 font-serif text-lg font-semibold tracking-tight text-[#1a3328] sm:text-xl"
            >
              {n.text}
            </h3>
          );
        }
        if (n.k === "h4") {
          return (
            <h4
              key={i}
              className="pt-1 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6b7a72] sm:text-[13px]"
            >
              {n.text}
            </h4>
          );
        }
        if (n.k === "blockquote") {
          return (
            <blockquote
              key={i}
              className="rounded-2xl border border-[#e0e8e4]/80 border-s-4 border-s-[#c9a227] bg-gradient-to-br from-[#f8faf8] to-[#f0f4f1] py-4 pe-4 ps-4 text-[14.5px] font-medium leading-relaxed text-[#243d32] shadow-sm sm:ps-5 sm:text-[15px]"
            >
              {n.text}
            </blockquote>
          );
        }
        if (n.k === "table") {
          return <TMTable key={i} headers={n.headers} rows={n.rows} isAr={isAr} />;
        }
        return null;
      })}
    </div>
  );
}

function SectionBlock({
  section,
  index,
  ctaBookTrial,
  ctaViewPackages,
  isAr,
  fillCell = false,
}: {
  section: TMSection;
  index: number;
  ctaBookTrial: string;
  ctaViewPackages: string;
  isAr: boolean;
  /** Stretch card in a 2-column row (equal heights) */
  fillCell?: boolean;
}) {
  const delay = Math.min(index * 55, 400);
  const cellStretch = fillCell ? "h-full" : "";

  if (section.id === "closing") {
    const text = section.nodes[0]?.k === "p" ? section.nodes[0].text : "";
    return (
      <Reveal delayMs={delay} className={cellStretch}>
        <div className={`relative overflow-hidden rounded-3xl border border-[#1c3a2e]/20 bg-gradient-to-r from-[#1c3a2e] via-[#234d3c] to-[#1c3a2e] px-6 py-10 text-center shadow-[0_28px_70px_-36px_rgba(0,0,0,0.35)] sm:px-12 sm:py-12 ${cellStretch}`}>
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_200px_at_50%_0%,rgba(212,193,140,0.12),transparent_60%)]"
            aria-hidden
          />
          <p className="relative font-serif text-[1.1rem] font-semibold leading-relaxed text-[#f5f0e8] sm:text-xl">
            {text}
          </p>
        </div>
      </Reveal>
    );
  }

  if (section.id === "testimonials") {
    const quotes = section.nodes.filter((n): n is Extract<TMNode, { k: "blockquote" }> => n.k === "blockquote");
    return (
      <Reveal delayMs={delay} className={cellStretch}>
        <section className={`rounded-3xl border border-[#e5dfd4] bg-white p-7 shadow-[0_24px_70px_-40px_rgba(28,58,46,0.14)] sm:p-9 ${cellStretch} flex flex-col`}>
          <h2 className="font-serif text-xl font-semibold text-[#1a3328] sm:text-2xl">{section.title}</h2>
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-[#e0d9ce] to-transparent" />
          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {quotes.map((q, qi) => (
              <blockquote
                key={qi}
                className="flex h-full flex-col rounded-2xl border border-[#e8e4dc] bg-[#faf9f6] p-4 text-[13.5px] font-medium leading-relaxed text-[#2a4036] shadow-sm sm:p-5 sm:text-[14px]"
              >
                {q.text}
              </blockquote>
            ))}
          </div>
        </section>
      </Reveal>
    );
  }

  if (!section.title && section.nodes.length) {
    return (
      <Reveal delayMs={delay} className={cellStretch}>
        <div className={`rounded-3xl border border-[#e5dfd4] bg-white/90 p-7 sm:p-8 ${cellStretch}`}>
          <Nodes nodes={section.nodes} isAr={isAr} />
        </div>
      </Reveal>
    );
  }

  const pillarMatch = section.id.match(/^p([1-6])$/);
  const pillarNum = pillarMatch?.[1];

  return (
    <Reveal delayMs={delay} className={fillCell ? "h-full min-h-0" : ""}>
      <section
        className={`rounded-3xl border border-[#e5dfd4] bg-white p-7 shadow-[0_24px_70px_-42px_rgba(28,58,46,0.12)] sm:p-9 ${fillCell ? "flex h-full min-h-0 flex-col" : ""}`}
      >
        {pillarNum ? (
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1c3a2e] to-[#2d5a3d] font-serif text-lg font-bold text-[#f5f0e8] shadow-md sm:h-14 sm:w-14 sm:text-xl">
              {pillarNum}
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-serif text-[1.2rem] font-semibold leading-snug text-[#1a3328] sm:text-xl">
                {section.title}
              </h2>
              <div className="my-5 h-px w-full bg-gradient-to-r from-[#d4c17a]/25 via-[#e0d9ce] to-transparent" />
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-serif text-[1.2rem] font-semibold leading-snug text-[#1a3328] sm:text-xl">
              {section.title}
            </h2>
            <div className="my-5 h-px w-full bg-gradient-to-r from-[#d4c17a]/25 via-[#e0d9ce] to-transparent" />
          </>
        )}

        <div className={`min-w-0 ${fillCell ? "flex min-h-0 flex-1 flex-col" : ""}`}>
          <div className={fillCell ? "min-h-0 flex-1" : ""}>
            <Nodes nodes={section.nodes} isAr={isAr} />
          </div>
          {section.id === "cta" ? (
            <div
              className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 ${fillCell ? "mt-auto shrink-0 border-t border-[#efe8de] pt-6" : "mt-8"}`}
            >
              <Link
                href="/book-trial"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-[#1c3a2e] px-7 py-3.5 text-center text-sm font-semibold text-[#f5f0e8] shadow-lg shadow-[#1c3a2e]/18 transition-transform hover:scale-[1.02] hover:bg-[#2d5a3d] sm:flex-none"
              >
                {ctaBookTrial}
              </Link>
              <span
                className="hidden text-center font-serif text-lg text-[#c9a227] sm:inline sm:shrink-0"
                aria-hidden
              >
                |
              </span>
              <Link
                href="/pricing"
                className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-[#d4a017]/40 bg-[#fdfaf4] px-7 py-3.5 text-center text-sm font-semibold text-[#3a2e0a] transition-transform hover:scale-[1.02] hover:border-[#b8954a]/65 sm:flex-none"
              >
                {ctaViewPackages}
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    </Reveal>
  );
}

export default function TeachingMethodologyPageContent() {
  const { locale } = useI18n();
  const isAr = locale === "ar";
  const bundle = getTeachingMethodology(locale);

  const sectionMap = useMemo(
    () => Object.fromEntries(bundle.sections.map((s) => [s.id, s])) as Record<string, TMSection>,
    [bundle.sections],
  );

  const ROW_IDS: string[][] = [
    ["p1", "p2"],
    ["p3", "p4"],
    ["p5"],
    ["p6", "programs"],
    ["outcomes", "qa"],
    ["philosophy"],
    ["languages", "promise"],
    ["cta"],
    ["testimonials"],
    ["closing"],
  ];

  return (
    <div
      className="relative flex-1 overflow-x-hidden bg-[#ebe6dd] text-[#1a3328] antialiased"
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_-6%,rgba(255,252,246,0.92),transparent_58%),radial-gradient(700px_320px_at_100%_45%,rgba(212,193,140,0.08),transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-[calc(70px+1.5rem)] pb-20 sm:px-6 md:pt-[calc(80px+2rem)] md:pb-28">
        <Reveal>
          <header className="relative mb-12 overflow-hidden rounded-[1.75rem] border border-white/70 bg-gradient-to-b from-white via-[#faf8f4] to-[#f2ebe3] p-8 shadow-[0_28px_80px_-40px_rgba(28,58,46,0.2)] sm:p-11">
            <div
              className="pointer-events-none absolute -end-20 -top-24 h-56 w-56 rounded-full bg-[#d4c17a]/18 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-start">
              <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl border border-[#e8e0d4] bg-white/80 text-[#1e3d30] shadow-inner sm:h-20 sm:w-20">
                <GraduationCap className="h-10 w-10" strokeWidth={1.15} />
              </div>
              <div className="min-w-0 flex-1 space-y-2">
                <h1 className="font-serif text-[1.7rem] font-semibold leading-tight text-[#1a3328] sm:text-4xl">
                  {bundle.hero.title}
                </h1>
                <p className="text-[15px] font-medium leading-relaxed text-[#4d5f56] sm:text-[17px]">
                  {bundle.hero.subtitle}
                </p>
              </div>
            </div>
          </header>
        </Reveal>

        <Reveal delayMs={50}>
          <div className="mb-10 rounded-3xl border border-[#e3ddd4] bg-white/95 p-7 shadow-sm sm:p-9">
            <Nodes nodes={bundle.intro} isAr={isAr} />
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mb-10 text-center">
            <p className="inline-flex rounded-full border border-[#d4a017]/25 bg-[#fdfaf4] px-5 py-2 font-serif text-sm font-semibold text-[#5c4a1a] shadow-sm sm:text-base">
              {bundle.pillarsKicker}
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8 sm:gap-10">
          {ROW_IDS.map((row) => (
            <div
              key={row.join("-")}
              className={
                row.length > 1 ? "grid gap-6 md:grid-cols-2 md:items-stretch md:gap-8" : ""
              }
            >
              {row.map((id) => {
                const section = sectionMap[id];
                if (!section) return null;
                const index = bundle.sections.findIndex((s) => s.id === id);
                return (
                  <SectionBlock
                    key={id}
                    section={section}
                    index={index}
                    ctaBookTrial={bundle.ctaBookTrial}
                    ctaViewPackages={bundle.ctaViewPackages}
                    isAr={isAr}
                    fillCell={row.length > 1}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
