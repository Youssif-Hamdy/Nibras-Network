"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Baby,
  BookOpen,
  PenLine,
  Landmark,
  Target,
  HeartHandshake,
  Check,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";
import { useReveal } from "@/hooks/useReveal";
import {
  getKidsProgramsContent,
  type KidsAgeGroup,
  type KidsProgramCard,
  type KidsProgramsBundle,
  type KidsTabId,
} from "@/lib/courses/kids";

const ICON_MAP: Record<string, LucideIcon> = {
  Baby,
  BookOpen,
  PenLine,
  Landmark,
  Target,
  HeartHandshake,
};

const TAB_IDS: KidsTabId[] = [
  "by-age",
  "quran",
  "arabic",
  "islamic",
  "goals",
  "parent",
];

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
        visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      }`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function CheckList({ items, isAr }: { items: string[]; isAr: boolean }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-2.5 text-[14px] leading-relaxed text-[#3d5249] sm:text-[15px] ${isAr ? "flex-row-reverse text-end" : ""}`}
        >
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#1c7a45]">
            <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
          </span>
          <span className="min-w-0 flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function AgeGroupCard({
  group,
  index,
  isAr,
}: {
  group: KidsAgeGroup;
  index: number;
  isAr: boolean;
}) {
  return (
    <Reveal delayMs={Math.min(index * 70, 350)}>
      <article
        className="group relative overflow-hidden flex flex-col md:flex-row rounded-3xl border border-[#e5dfd4] bg-white shadow-[0_28px_70px_-42px_rgba(28,58,46,0.18)] transition-shadow duration-300 hover:shadow-[0_32px_80px_-38px_rgba(28,58,46,0.22)]"
        style={{ borderTopColor: group.accent, borderTopWidth: 4 }}
      >
        <div
          className="pointer-events-none absolute -end-8 -top-8 h-32 w-32 rounded-full opacity-30 blur-2xl transition-transform duration-500 group-hover:scale-110"
          style={{ background: group.accentLight }}
          aria-hidden
        />
        {(group.id === "4-6" || group.id === "7-10") && (
          <div className={`h-48 md:h-auto md:w-2/5 shrink-0 relative ${isAr ? "md:order-2" : "md:order-1"}`}>
            {group.id === "4-6" && (
              <img src="/images/course_kides/ChatGPT Image Jul 25, 2026, 09_26_36 PM.png" className="absolute inset-0 h-full w-full object-cover" alt="4-6 years" />
            )}
            {group.id === "7-10" && (
              <img src="/images/course_kides/ChatGPT Image Jul 25, 2026, 09_17_09 PM.png" className="absolute inset-0 h-full w-full object-cover" alt="7-10 years" />
            )}
          </div>
        )}
        <div className={`relative p-6 sm:p-8 flex-1 ${isAr ? "md:order-1" : "md:order-2"}`} dir={isAr ? "rtl" : "ltr"}>
          <div className={`flex flex-wrap items-start gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl shadow-inner"
              style={{ background: group.accentLight }}
              aria-hidden
            >
              {group.emoji}
            </span>
            <div className={`min-w-0 flex-1 ${isAr ? "text-end" : ""}`}>
              <p
                className="text-[11px] font-bold uppercase tracking-[0.16em] sm:text-xs"
                style={{ color: group.accent }}
              >
                {group.ageLabel}
              </p>
              <h3 className="mt-1 font-serif text-xl font-semibold text-[#1a3328] sm:text-2xl">
                {group.headline}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5a7068]">{group.oneLine}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {group.sections.map((sec) => (
              <div
                key={sec.title}
                className="rounded-2xl border border-[#efe8de]/90 p-4 sm:p-5"
                style={{ background: `${group.accentLight}88` }}
              >
                <h4
                  className={`mb-3 text-[11px] font-bold uppercase tracking-[0.14em] ${isAr ? "text-end" : ""}`}
                  style={{ color: group.accent }}
                >
                  {sec.title}
                </h4>
                <CheckList items={sec.items} isAr={isAr} />
              </div>
            ))}
          </div>

          <div className={`mt-6 ${isAr ? "text-end" : ""}`}>
            <Link
              href="/book-trial"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: group.accent }}
            >
              {group.cta}
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function QuranCard({
  card,
  index,
  isAr,
  labels,
  spanFull = false,
}: {
  card: KidsProgramCard;
  index: number;
  isAr: boolean;
  labels: {
    whatLearn: string;
    parentBenefit: string;
    expected: string;
    outcome: string;
    difficulty: string;
    fun: string;
  };
  spanFull?: boolean;
}) {
  const outcomes = card.expectedOutcome ?? card.outcome;
  return (
    <Reveal delayMs={Math.min(index * 55, 320)} className={spanFull ? "md:col-span-2" : ""}>
      <article
        dir={isAr ? "rtl" : "ltr"}
        className={`h-full overflow-hidden rounded-3xl border border-[#e5dfd4] bg-gradient-to-b from-white to-[#faf9f6] shadow-[0_20px_60px_-40px_rgba(28,58,46,0.14)] transition-transform duration-300 hover:-translate-y-0.5 ${
          card.id === "hifz" ? "flex flex-col sm:flex-row" : "flex flex-col"
        }`}
      >
        {card.id === "hifz" && (
          <div className={`sm:w-2/5 shrink-0 h-48 sm:h-auto relative ${isAr ? "sm:order-2" : "sm:order-1"}`}>
            <img src="/images/course_kides/Memorization - برامج اطفال - قران.png" className="absolute inset-0 h-full w-full object-cover" alt="Memorization" />
          </div>
        )}
        <div className={`flex flex-1 flex-col p-6 sm:p-7 ${card.id === "hifz" && isAr ? "sm:order-1" : ""} ${card.id === "hifz" && !isAr ? "sm:order-2" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <span className="text-2xl" aria-hidden>
              {card.emoji}
            </span>
            <h3 className="font-serif text-lg font-semibold text-[#1a3328] sm:text-xl">{card.title}</h3>
          </div>

        <div className="mt-5 flex flex-1 flex-col gap-4 text-[14px] leading-relaxed text-[#3d5249] sm:text-[15px]">
          {card.whatChildrenLearn && (
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6b7a72]">
                {labels.whatLearn}
              </p>
              <CheckList items={card.whatChildrenLearn} isAr={isAr} />
            </div>
          )}
          {card.parentBenefit && (
            <p className="rounded-xl border border-[#d4e8dc] bg-[#f0faf4] px-4 py-3 text-[#1c3a2e]">
              {card.parentBenefit}
            </p>
          )}
          {outcomes && (
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6b7a72]">
                {labels.expected}
              </p>
              <CheckList items={outcomes} isAr={isAr} />
            </div>
          )}
          {card.difficulty && (
            <p>
              <span className="font-semibold text-[#1a3328]">{labels.difficulty}: </span>
              {card.difficulty}
            </p>
          )}
          {card.funMethods && (
            <p>
              <span className="font-semibold text-[#1a3328]">{labels.fun}: </span>
              {card.funMethods}
            </p>
          )}
        </div>
        </div>
      </article>
    </Reveal>
  );
}

function SimpleProgramCard({
  card,
  index,
  isAr,
}: {
  card: KidsProgramCard;
  index: number;
  isAr: boolean;
}) {
  return (
    <Reveal delayMs={Math.min(index * 50, 300)}>
      <article
        dir={isAr ? "rtl" : "ltr"}
        className="rounded-2xl border border-[#e8e4dc] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#c5ddd2] hover:shadow-md sm:p-6"
      >
        <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-xl" aria-hidden>
            {card.emoji}
          </span>
          <h3 className="font-serif text-[1.05rem] font-semibold text-[#1a3328]">{card.title}</h3>
        </div>
        {card.body && (
          <p className={`mt-3 text-[14px] leading-relaxed text-[#3d5249] ${isAr ? "text-end" : ""}`}>
            {card.body}
          </p>
        )}
        {card.outcomes && (
          <ul className={`mt-3 space-y-1.5 ${isAr ? "text-end" : ""}`}>
            {card.outcomes.map((o) => (
              <li
                key={o}
                className={`flex gap-2 text-[13.5px] text-[#2d5a45] ${isAr ? "flex-row-reverse justify-end" : ""}`}
              >
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1c7a45]" aria-hidden />
                {o}
              </li>
            ))}
          </ul>
        )}
      </article>
    </Reveal>
  );
}

function TabPanel({
  activeTab,
  bundle,
  isAr,
}: {
  activeTab: KidsTabId;
  bundle: KidsProgramsBundle;
  isAr: boolean;
}) {
  const ui = isAr
    ? {
        whatLearn: "ما يتعلّمه الطفل",
        parentBenefit: "فائدة لولي الأمر",
        expected: "النتيجة المتوقعة",
        outcome: "النتيجة",
        difficulty: "الصعوبة",
        fun: "طرق ممتعة",
      }
    : {
        whatLearn: "What Children Learn",
        parentBenefit: "Parent Benefit",
        expected: "Expected Outcome",
        outcome: "Outcome",
        difficulty: "Difficulty",
        fun: "Fun Methods",
      };

  return (
    <div
      key={activeTab}
      role="tabpanel"
      className="animate-[kids-fade-in_0.45s_ease-out_both] motion-reduce:animate-none"
    >
      {activeTab === "by-age" && (
        <div className="space-y-6">
          <p
            className={`max-w-3xl text-[15px] leading-relaxed text-[#5a7068] sm:text-[16px] ${isAr ? "ms-auto text-end" : ""}`}
          >
            {bundle.byAge.intro}
          </p>
          <div className="space-y-8">
            {bundle.byAge.groups.map((g, i) => (
              <AgeGroupCard key={g.id} group={g} index={i} isAr={isAr} />
            ))}
          </div>
        </div>
      )}

      {activeTab === "quran" && (
        <div className="space-y-6">
          <p className={`max-w-3xl text-[15px] text-[#5a7068] ${isAr ? "ms-auto text-end" : ""}`}>
            {bundle.quran.intro}
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {bundle.quran.programs.map((c, i) => (
              <QuranCard key={c.id} card={c} index={i} isAr={isAr} labels={ui} spanFull={c.id === "hifz"} />
            ))}
          </div>
        </div>
      )}

      {activeTab === "arabic" && (
        <div className="space-y-6">
          <p className={`max-w-3xl text-[15px] leading-relaxed text-[#5a7068] sm:text-[16px] ${isAr ? "ms-auto text-end" : ""}`}>
            {bundle.arabic.intro}
          </p>
          <Reveal>
            <div
              className={`rounded-2xl border border-[#d4c17a]/35 bg-gradient-to-r from-[#fdf6e3] to-[#f8faf8] px-5 py-4 text-center sm:px-8 ${isAr ? "text-end sm:text-center" : ""}`}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8a6e3a]">
                {bundle.arabic.progressionLabel}
              </p>
              <p className="mt-1 font-serif text-[15px] font-semibold text-[#3a2e0a] sm:text-base">
                {bundle.arabic.progression}
              </p>
            </div>
          </Reveal>
          <div className={`flex flex-col lg:flex-row gap-6 ${isAr ? "lg:flex-row-reverse" : ""}`}>
            <Reveal className="w-full lg:w-1/3 shrink-0">
              <img src="/images/course_kides/اطفال لغة عربية.jpeg" className="h-full w-full rounded-3xl object-cover shadow-sm" alt="Arabic Language" />
            </Reveal>
            <div className="flex-1 grid gap-4 sm:grid-cols-2">
              {bundle.arabic.programs.map((c, i) => (
                <SimpleProgramCard key={c.id} card={c} index={i} isAr={isAr} />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "islamic" && (
        <div className="space-y-6">
          <p className={`max-w-3xl text-[15px] leading-relaxed text-[#5a7068] sm:text-[16px] ${isAr ? "ms-auto text-end" : ""}`}>
            {bundle.islamic.intro}
          </p>
          <div className={`flex flex-col lg:flex-row gap-6 ${isAr ? "lg:flex-row-reverse" : ""}`}>
            <Reveal className="w-full lg:w-1/3 shrink-0">
              <img src="/images/course_kides/kids prog - islamic.png" className="h-full w-full rounded-3xl object-cover shadow-sm" alt="Islamic Studies" />
            </Reveal>
            <div className="flex-1 grid gap-4 sm:grid-cols-2">
              {bundle.islamic.programs.map((c, i) => (
                <SimpleProgramCard key={c.id} card={c} index={i} isAr={isAr} />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "goals" && (
        <div className="space-y-6">
          <p className={`max-w-3xl text-[15px] leading-relaxed text-[#5a7068] sm:text-[16px] ${isAr ? "ms-auto text-end" : ""}`}>
            {bundle.goals.intro}
          </p>
          <div className={`flex flex-col lg:flex-row gap-6 ${isAr ? "lg:flex-row-reverse" : ""}`}>
            <Reveal className="w-full lg:w-1/3 shrink-0">
              <img src="/images/course_kides/parent zone.png" className="h-full w-full rounded-3xl object-cover shadow-sm" alt="Learning Goals & Pathways" />
            </Reveal>
            <div className="flex-1 flex flex-col justify-center">
              <Reveal>
                <div
                  dir={isAr ? "rtl" : "ltr"}
                  className="overflow-x-auto rounded-3xl border border-[rgba(28,58,46,0.08)] bg-white shadow-[0_24px_70px_-42px_rgba(28,58,46,0.12)]"
                >
                  <table className="w-full min-w-[640px] border-collapse text-start text-[13px] sm:text-[14px]">
                    <thead>
                      <tr className="bg-[#1c3a2e] text-[#f5f0e8]">
                        {bundle.goals.tableHeaders.map((h) => (
                          <th
                            key={h}
                            className="px-4 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-wide sm:text-xs"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {bundle.goals.rows.map((row, ri) => (
                        <tr
                          key={row.goal}
                          className={ri % 2 === 0 ? "bg-[#faf9f6]" : "bg-white"}
                        >
                          <td className="border-b border-[#e8e4dc] px-4 py-3.5 font-medium text-[#1a3328]">
                            {row.goal}
                          </td>
                          <td className="border-b border-[#e8e4dc] px-4 py-3.5 text-[#3d5249]">
                            {row.pathway}
                          </td>
                          <td className="border-b border-[#e8e4dc] px-4 py-3.5 whitespace-nowrap text-[#3d5249]">
                            {row.timeline}
                          </td>
                          <td className="border-b border-[#e8e4dc] px-4 py-3.5 text-[#3d5249]">
                            {row.courses}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
              <Reveal delayMs={120}>
                <div className={`mt-6 ${isAr ? "text-end" : ""}`}>
                  <Link
                    href="/contact?advisor=1"
                    className="inline-flex items-center justify-center rounded-full bg-[#1c3a2e] px-7 py-3.5 text-sm font-semibold text-[#f5f0e8] shadow-lg transition-transform hover:scale-[1.02]"
                  >
                    {bundle.goals.cta}
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      )}

      {activeTab === "parent" && (
        <div className="space-y-8">
          <p className={`max-w-3xl text-[15px] leading-relaxed text-[#5a7068] sm:text-[16px] ${isAr ? "ms-auto text-end" : ""}`}>
            {bundle.parent.intro}
          </p>
          <div className={`flex flex-col lg:flex-row gap-8 ${isAr ? "lg:flex-row-reverse" : ""}`}>
            <Reveal className="w-full lg:w-2/5 shrink-0">
              <img src="/images/course_kides/ChatGPT Image Jul 25, 2026, 09_28_17 PM.png" className="h-full w-full rounded-3xl object-cover shadow-md" alt="Parent Zone" />
            </Reveal>
            <div className="flex-1 grid gap-4 sm:grid-cols-2">
              {bundle.parent.features.map((f, i) => (
                <Reveal key={f.title} delayMs={Math.min(i * 45, 280)}>
                  <div
                    dir={isAr ? "rtl" : "ltr"}
                    className="h-full rounded-2xl border border-[#e5dfd4] bg-white p-5 shadow-sm sm:p-6"
                  >
                    <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                      <span className="text-xl" aria-hidden>
                        {f.emoji}
                      </span>
                      <h3 className="font-serif text-[1.05rem] font-semibold text-[#1a3328]">
                        {f.title}
                      </h3>
                    </div>
                    <ul className={`mt-3 space-y-2 ${isAr ? "text-end" : ""}`}>
                      {f.items.map((item) => (
                        <li
                          key={item}
                          className={`flex gap-2 text-[14px] text-[#3d5249] ${isAr ? "flex-row-reverse justify-end" : ""}`}
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8954a]" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delayMs={150}>
            <div className="rounded-3xl border border-[#1c3a2e]/15 bg-gradient-to-br from-[#1c3a2e] via-[#234d3c] to-[#1c3a2e] px-6 py-10 text-center shadow-xl sm:px-12">
              <Sparkles className="mx-auto mb-3 h-8 w-8 text-[#f2d58c] animate-pulse motion-reduce:animate-none" aria-hidden />
              <h3 className="font-serif text-xl font-semibold text-[#f5f0e8] sm:text-2xl">
                {bundle.parent.trialTitle}
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-[#d4e8dc]">
                {bundle.parent.trialBody}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/book-trial"
                  className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-[#f2d58c] px-7 py-3.5 text-sm font-bold text-[#1a3328] transition-transform hover:scale-[1.02] sm:w-auto"
                >
                  {bundle.parent.ctaPrimary}
                </Link>
                <Link
                  href="/contact?advisor=1"
                  className="inline-flex w-full max-w-xs items-center justify-center rounded-full border-2 border-[#f2d58c]/50 px-7 py-3.5 text-sm font-semibold text-[#f5f0e8] transition-transform hover:scale-[1.02] sm:w-auto"
                >
                  {bundle.parent.ctaSecondary}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      )}
    </div>
  );
}

function parseHashTab(hash: string): KidsTabId | null {
  const id = hash.replace(/^#/, "") as KidsTabId;
  return TAB_IDS.includes(id) ? id : null;
}

function scrollToTabs() {
  requestAnimationFrame(() => {
    document.getElementById("kids-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export default function KidsProgramsPageContent() {
  const { locale } = useI18n();
  const pathname = usePathname();
  const isAr = locale === "ar";
  const bundle = useMemo(() => getKidsProgramsContent(locale), [locale]);
  const [activeTab, setActiveTab] = useState<KidsTabId>("by-age");

  const syncFromHash = useCallback((scroll = false) => {
    const tab = parseHashTab(window.location.hash);
    if (tab) {
      setActiveTab(tab);
      if (scroll) scrollToTabs();
    }
  }, []);

  useEffect(() => {
    document.title = bundle.meta.title;
  }, [bundle.meta.title]);

  useEffect(() => {
    syncFromHash(Boolean(window.location.hash));
    const onHash = () => syncFromHash(true);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [syncFromHash, pathname]);

  const selectTab = (id: KidsTabId) => {
    setActiveTab(id);
    window.history.replaceState(null, "", `#${id}`);
    scrollToTabs();
  };

  const hf = isAr ? "font-sans" : "font-serif";

  return (
    <div
      className={`relative flex-1 overflow-x-hidden bg-[#F7F5F0] text-[#1A1A14] ${hf}`}
      dir={isAr ? "rtl" : "ltr"}
    >
      <style jsx global>{`
        @keyframes kids-fade-in {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes kids-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .kids-hero-float {
          animation: kids-float 5s ease-in-out infinite;
        }
        @keyframes kids-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(242, 213, 140, 0.4), 0 0 20px rgba(242, 213, 140, 0.2), 0 2px 12px rgba(0,0,0,0.9);
          }
          50% {
            text-shadow: 0 0 20px rgba(242, 213, 140, 0.9), 0 0 35px rgba(242, 213, 140, 0.5), 0 4px 15px rgba(0,0,0,1);
          }
        }
        .animate-kids-glow {
          animation: kids-glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-end justify-center overflow-hidden border-b border-[#e5dfd4]/80 px-4 pb-12 pt-32 sm:px-6 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/course_kides/ChatGPT Image Jul 25, 2026, 09_31_35 PM.png"
            alt="Kids Programs Hero"
            className="h-full w-full object-cover  object-top translate-y-15"
          />
        </div>
        <div className="relative z-10 w-full mx-auto max-w-5xl text-center">
          <Reveal>
            <div className="mx-auto max-w-3xl px-6 sm:px-12">
              <p className="inline-flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f2d58c] sm:text-xs bg-[#1a3328]/70 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-[#f2d58c]/40 animate-pulse">
                <Baby className="h-4 w-4" /> {bundle.hero.kicker} <Baby className="h-4 w-4" />
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2rem,5vw,3.25rem)] font-bold leading-tight text-white animate-kids-glow">
                {bundle.hero.title}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-[17px] font-bold leading-relaxed text-[#fcfcfc] sm:text-[19px] animate-kids-glow">
                {bundle.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/book-trial"
                  className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-[#1c3a2e] px-7 py-3.5 text-sm font-semibold text-[#f5f0e8] shadow-lg transition-transform hover:scale-[1.02] sm:w-auto"
                >
                  {bundle.hero.ctaPrimary}
                </Link>
                <Link
                  href="/contact?advisor=1"
                  className="inline-flex w-full max-w-xs items-center justify-center rounded-full border-2 border-[#1c3a2e]/50 bg-white/60 backdrop-blur-sm px-7 py-3.5 text-sm font-bold text-[#1c3a2e] shadow-sm transition-transform hover:scale-[1.02] sm:w-auto"
                >
                  {bundle.hero.ctaSecondary}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tabs */}
      <section
        id="kids-tabs"
        className="sticky top-[var(--nav-height,72px)] z-20 scroll-mt-[calc(var(--nav-height,72px)+8px)] border-b border-[#e5dfd4] bg-[#f7f5f0]/95 px-4 py-3 backdrop-blur-md sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <div
            className="-mx-1 overflow-x-auto overscroll-x-contain px-1 [scrollbar-width:thin]"
            role="tablist"
            aria-label={isAr ? "أقسام برامج الأطفال" : "Kids programs sections"}
          >
            <div className="flex min-w-max gap-1 sm:gap-2">
              {bundle.tabs.map((tab) => {
                const Icon = ICON_MAP[tab.icon] ?? Baby;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => selectTab(tab.id)}
                    className={[
                      "flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-[12px] font-semibold transition-all duration-200 sm:px-4 sm:text-[13px]",
                      isActive
                        ? "bg-[#1c3a2e] text-[#f5f0e8] shadow-md"
                        : "bg-white/90 text-[#5a7068] hover:bg-white hover:text-[#1c3a2e] border border-[#e5dfd4]",
                    ].join(" ")}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Panel */}
      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <TabPanel activeTab={activeTab} bundle={bundle} isAr={isAr} />
        </div>
      </section>

      {/* Why parents */}
      <section className="border-t border-[#e5dfd4] bg-gradient-to-b from-[#eef6f0]/60 to-[#f7f5f0] px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center font-serif text-2xl font-semibold text-[#1a3328] sm:text-3xl">
              {bundle.whyParents.title}
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {bundle.whyParents.bullets.map((b, i) => (
                <li
                  key={b}
                  className={`flex items-center gap-3 rounded-2xl border border-[#dce8df] bg-white/90 px-4 py-3.5 text-[14px] font-medium text-[#2a4036] shadow-sm sm:text-[15px] ${isAr ? "flex-row-reverse text-end" : ""}`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f5ee] text-[#1c7a45]">
                    <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
