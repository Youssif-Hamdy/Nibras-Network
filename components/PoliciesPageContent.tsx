"use client";

import { type ReactNode } from "react";
import { ScrollText } from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";
import { useReveal } from "@/hooks/useReveal";
import {
  getPoliciesPage,
  type PolicyBlock,
  type PolicySection,
} from "@/lib/i18n/policiesContent";

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

function linkifyDetail(text: string): ReactNode {
  const t = text.trim();
  if (/^\+?\d{10,15}$/.test(t.replace(/\s/g, ""))) {
    const digits = t.replace(/\D/g, "");
    return (
      <a
        href={`https://wa.me/${digits}`}
        className="font-medium text-[#6b5a2a] underline decoration-[#c4a85a]/45 underline-offset-[3px] transition-colors hover:text-[#1a3328] hover:decoration-[#1a3328]/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }
  if (t.includes("@") && t.includes(".")) {
    return (
      <a
        href={`mailto:${t}`}
        className="font-medium text-[#6b5a2a] underline decoration-[#c4a85a]/45 underline-offset-[3px] transition-colors hover:text-[#1a3328]"
      >
        {text}
      </a>
    );
  }
  if (/^www\./i.test(t)) {
    const href = t.startsWith("http") ? t : `https://${t}`;
    return (
      <a
        href={href}
        className="font-medium text-[#6b5a2a] underline decoration-[#c4a85a]/45 underline-offset-[3px] transition-colors hover:text-[#1a3328]"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }
  return text;
}

function PolicyTable({
  headers,
  rows,
  linkifySecondColumn,
  isAr,
}: {
  headers: string[];
  rows: string[][];
  linkifySecondColumn?: boolean;
  isAr: boolean;
}) {
  return (
    <div className="not-prose my-6" dir={isAr ? "rtl" : "ltr"}>
      {/* Mobile: stacked cards — no horizontal scroll */}
      <div className="space-y-3 sm:hidden">
        {rows.map((row, ri) => (
          <div
            key={ri}
            className="rounded-xl border border-[rgba(28,58,46,0.08)] bg-white p-4 shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_6px_20px_-10px_rgba(28,58,46,0.12)]"
          >
            <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-[#4a6358]">
              {row[0] ?? headers[0]}
            </p>
            <div className="mt-2 text-[14px] leading-[1.65] text-[#3d5249]">
              {linkifySecondColumn && row[1] ? (
                linkifyDetail(row[1])
              ) : (
                <span className="whitespace-pre-line break-words">{row[1] ?? row.slice(1).join(" — ")}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Tablet+ */}
      <div className="hidden overflow-hidden rounded-xl border border-[rgba(28,58,46,0.08)] bg-[#faf9f6] shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_8px_28px_-12px_rgba(28,58,46,0.12)] sm:block">
        <table className="w-full border-collapse text-start text-[14px] leading-[1.55] text-[#1a3328]">
          <thead>
            <tr className="bg-[#eef2ee] text-[#1a3328]">
              {headers.map((h) => (
                <th
                  key={h}
                  className="border-b border-[rgba(28,58,46,0.08)] px-4 py-3.5 font-sans text-xs font-semibold uppercase tracking-wide text-[#4a6358]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={ri}
                className={ri % 2 === 0 ? "bg-white" : "bg-[#f7f5f1]"}
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="border-b border-[#e8e4dc] px-4 py-3 align-top text-[#3d5249] first:font-medium first:text-[#2a4036]"
                  >
                    {ci === 1 && linkifySecondColumn ? (
                      linkifyDetail(cell)
                    ) : (
                      <span className="whitespace-pre-line break-words">{cell}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Blocks({ blocks, isAr }: { blocks: PolicyBlock[]; isAr: boolean }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        if (b.type === "paragraph") {
          return (
            <p
              key={i}
              className="text-[15px] leading-[1.72] text-[#3d5249] sm:text-[15.5px]"
            >
              {b.text}
            </p>
          );
        }
        if (b.type === "blockquote") {
          return (
            <blockquote
              key={i}
              className="rounded-xl border border-[#e0e8e4] border-s-4 border-s-[#b8954a] bg-[#f4f8f5] py-3.5 pe-4 ps-4 text-[14.5px] font-medium leading-relaxed text-[#243d32] shadow-sm sm:ps-5 sm:text-[15px]"
            >
              {b.text}
            </blockquote>
          );
        }
        if (b.type === "list") {
          return (
            <ul key={i} className="space-y-2.5 ps-1">
              {b.items.map((item, li) => (
                <li
                  key={`${i}-li-${li}`}
                  className="flex gap-2.5 text-[15px] leading-[1.72] text-[#3d5249] sm:text-[15.5px]"
                >
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a89862]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (b.type === "ordered") {
          return (
            <ol key={i} className="space-y-2.5 ps-0">
              {b.items.map((item, oi) => (
                <li
                  key={`${i}-oi-${oi}`}
                  className="flex gap-3 text-[15px] leading-[1.72] text-[#3d5249] sm:text-[15.5px]"
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef2ee] text-xs font-semibold text-[#2a4a3c]"
                    aria-hidden
                  >
                    {oi + 1}
                  </span>
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ol>
          );
        }
        if (b.type === "table") {
          return (
            <PolicyTable
              key={i}
              headers={b.headers}
              rows={b.rows}
              linkifySecondColumn={b.linkifySecondColumn}
              isAr={isAr}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

function SectionCard({
  section,
  index,
  isAr,
}: {
  section: PolicySection;
  index: number;
  isAr: boolean;
}) {
  const baseDelay = Math.min(index * 40, 320);
  return (
    <Reveal delayMs={baseDelay}>
      <article
        className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e5dfd4] bg-white p-5 shadow-[0_2px_0_rgba(255,255,255,0.9)_inset,0_12px_40px_-28px_rgba(28,58,46,0.18)] transition-[box-shadow,border-color] duration-300 hover:border-[#d4cbb8] hover:shadow-[0_2px_0_rgba(255,255,255,0.95)_inset,0_16px_48px_-24px_rgba(28,58,46,0.22)] sm:p-7"
        id={`policy-${section.id}`}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#c9b06a]/90 via-[#d4c17a] to-[#c9b06a]/90 opacity-90"
          aria-hidden
        />
        <div className="relative pt-1">
          <h2 className="font-serif text-[1.05rem] font-semibold leading-snug tracking-tight text-[#1a3328] sm:text-lg">
            {section.title}
          </h2>
          <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#e0d9ce] to-transparent" />
          <Blocks blocks={section.blocks} isAr={isAr} />
        </div>
      </article>
    </Reveal>
  );
}

export default function PoliciesPageContent() {
  const { locale } = useI18n();
  const isAr = locale === "ar";
  const copy = getPoliciesPage(locale);

  return (
    <div
      className="relative flex-1 overflow-x-hidden bg-[#ebe6dd] text-[#1a3328] antialiased"
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_520px_at_50%_-8%,rgba(255,252,246,0.85),transparent_55%),radial-gradient(900px_400px_at_100%_40%,rgba(212,193,140,0.08),transparent_50%),radial-gradient(700px_360px_at_0%_60%,rgba(200,220,208,0.12),transparent_45%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 pt-[calc(70px+1.25rem)] pb-16 sm:px-6 sm:pb-20 md:max-w-5xl md:pt-[calc(80px+2rem)] md:pb-28 lg:max-w-6xl xl:max-w-7xl">
        <Reveal>
          <header className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-b from-white to-[#f7f4ee] p-5 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_20px_50px_-34px_rgba(28,58,46,0.2)] sm:p-9 md:rounded-3xl">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-8 sm:text-start">
              <div
                className="policies-hero-icon flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl border border-[#e8e0d4] bg-[#f7f4ee] text-[#2d4f3f] shadow-inner sm:h-20 sm:w-20"
                aria-hidden
              >
                <ScrollText className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={1.25} />
              </div>
              <div className="min-w-0 flex-1 space-y-2">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7a6f4a] sm:text-[11px]">
                  {isAr ? "وثيقة رسمية" : "Official document"}
                </p>
                <h1 className="font-serif text-[1.65rem] font-semibold leading-[1.2] text-[#1a3328] sm:text-3xl md:text-[2.05rem]">
                  {copy.heroTitle}
                </h1>
                <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-[#4d5f56] sm:mx-0 sm:text-[16px] sm:leading-[1.65]">
                  {copy.heroSubtitle}
                </p>
              </div>
            </div>
          </header>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-9 sm:gap-5 md:grid-cols-2 md:gap-6 md:items-start lg:gap-7">
          {copy.sections.map((section, index) => (
            <SectionCard key={section.id} section={section} index={index} isAr={isAr} />
          ))}
        </div>

        <Reveal delayMs={100}>
          <footer className="relative mt-10 overflow-hidden rounded-2xl border border-[#2a4f3e]/20 bg-gradient-to-b from-[#1e3d30] to-[#162e25] p-6 text-[#f2ebe0] shadow-[0_24px_60px_-28px_rgba(0,0,0,0.35)] sm:mt-14 sm:rounded-3xl sm:p-10">
            <div
              className="pointer-events-none absolute -bottom-24 -start-10 h-64 w-64 rounded-full bg-[#d4b96a]/12 blur-3xl"
              aria-hidden
            />
            <div className="pointer-events-none absolute -end-16 -top-20 h-48 w-48 rounded-full bg-white/[0.04] blur-2xl" aria-hidden />
            <div className="relative max-w-3xl">
              <h2 className="font-serif text-xl font-semibold tracking-tight text-[#faf6ef] sm:text-2xl">
                {copy.promiseTitle}
              </h2>
              <div className="mt-6 space-y-4 border-t border-white/10 pt-6 text-[15px] leading-[1.75] text-[#d8cec0] sm:text-[16px]">
                {copy.promiseBody.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-8 text-sm font-medium tracking-wide text-[#c9b896]">
                {copy.teamLine}
              </p>
            </div>
          </footer>
        </Reveal>
      </div>
    </div>
  );
}
