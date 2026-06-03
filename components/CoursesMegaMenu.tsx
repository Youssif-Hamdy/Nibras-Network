"use client";

import Link from "next/link";
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from "react";
import {
  MEGA_BY_SUBJECT,
  MEGA_BY_LEVEL,
  MEGA_BY_GOAL,
  MEGA_PATHWAYS,
  MEGA_QUICK_TOOLS,
} from "@/components/coursesMegaData";
import {
  megaGoalLabel,
  megaHrefLabel,
  megaLevelCopy,
  megaPathwayCopy,
  megaQuickLabel,
  megaSubjectTitle,
} from "@/lib/i18n/mega-labels";
import { useI18n } from "@/components/LocaleProvider";
import {
  BookOpen, PenLine, Landmark, Baby, Briefcase,
  Sprout, TrendingUp, Trees, Trophy,
  Route, ClipboardList, Search, BarChart2, Download, GraduationCap,
  ChevronRight, AlertTriangle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Icon map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen, PenLine, Landmark, Baby, Briefcase,
  Sprout, TrendingUp, Trees, Trophy,
  Route, ClipboardList, Search, BarChart2, Download, GraduationCap,
};

function Icon({ name, size = 16, className }: { name: string; size?: number; className?: string }) {
  const Comp = ICON_MAP[name];
  return Comp ? <Comp size={size} className={className} aria-hidden /> : null;
}

// ─── Tabs config ──────────────────────────────────────────────────────────────

type Tab = "subject" | "level" | "goal" | "pathways";

// ─── Quick Tools Strip ────────────────────────────────────────────────────────

function QuickToolsStrip({ afterNavigate }: { afterNavigate?: () => void }) {
  const { locale, t } = useI18n();
  return (
    <div className="border-t border-[#c5ddd2]/80 pt-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5a7a6e] mb-2 px-1">
        {t("mega.quickTools")}
      </p>
      <div className="flex flex-wrap gap-x-4 gap-y-2 px-1">
        {MEGA_QUICK_TOOLS.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            onClick={() => afterNavigate?.()}
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#1C3A2E] hover:text-[#B8860B] transition-colors whitespace-nowrap"
          >
            <Icon name={tool.icon} size={13} className="text-[#5a7a6e]" />
            <span className="underline-offset-2 hover:underline">
              {megaQuickLabel(locale, tool.href, tool.label)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── By Subject colour themes (per icon) ───────────────────────────────────────

const SUBJECT_THEME: Record<
  string,
  { accent: string; bg: string; hover: string; border: string }
> = {
  BookOpen: {
    accent: "#1C3A2E",
    bg: "#eaf6ee",
    hover: "#d6ede0",
    border: "#1C3A2E33",
  },
  PenLine: {
    accent: "#1a4a6b",
    bg: "#eaf1f8",
    hover: "#d4e4f0",
    border: "#1a4a6b33",
  },
  Landmark: {
    accent: "#7a3d10",
    bg: "#faf0e8",
    hover: "#f0e0d0",
    border: "#7a3d1033",
  },
  Baby: {
    accent: "#C25B7A",
    bg: "#FDF0F6",
    hover: "#f5dce8",
    border: "#C25B7A33",
  },
  Briefcase: {
    accent: "#0D9488",
    bg: "#E6F7F5",
    hover: "#cceee9",
    border: "#0D948833",
  },
};

const DEFAULT_SUBJECT_THEME = SUBJECT_THEME.BookOpen;

function subjectTheme(icon: string) {
  return SUBJECT_THEME[icon] ?? DEFAULT_SUBJECT_THEME;
}

// ─── Tab 1: By Subject ────────────────────────────────────────────────────────

function TabSubject({ afterNavigate }: { afterNavigate?: () => void }) {
  const { locale } = useI18n();
  return (
    <div className="grid grid-cols-5 gap-3">
      {MEGA_BY_SUBJECT.map((col) => {
        const theme = subjectTheme(col.icon);
        const titleCls = `text-[10.5px] font-bold tracking-[0.04em] leading-tight transition-colors ${
          locale === "en" ? "uppercase" : ""
        }`;

        return (
          <div
            key={col.title}
            className="flex min-w-0 flex-col rounded-xl border p-2.5"
            style={
              {
                backgroundColor: theme.bg,
                borderColor: theme.border,
                borderTopWidth: 3,
                borderTopColor: theme.accent,
                "--subject-accent": theme.accent,
                "--subject-hover": theme.hover,
              } as CSSProperties
            }
          >
            <div className="mb-2 flex items-start gap-1.5">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/70 shadow-sm"
                style={{ color: theme.accent }}
              >
                <Icon name={col.icon} size={14} />
              </span>
              <div className="min-w-0 flex-1 pt-0.5">
                {col.hubHref ? (
                  <Link
                    href={col.hubHref}
                    onClick={() => afterNavigate?.()}
                    className={`${titleCls} hover:opacity-80`}
                    style={{ color: theme.accent }}
                  >
                    {megaSubjectTitle(locale, col.title)}
                  </Link>
                ) : (
                  <span className={titleCls} style={{ color: theme.accent }}>
                    {megaSubjectTitle(locale, col.title)}
                  </span>
                )}
              </div>
              {col.count != null && (
                <span
                  className="shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-bold text-white"
                  style={{ backgroundColor: theme.accent }}
                >
                  {col.count}
                </span>
              )}
            </div>
            <ul className="flex flex-1 flex-col gap-0.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => afterNavigate?.()}
                    className="flex items-center gap-1 rounded-md px-1.5 py-1 text-[11px] leading-snug text-[#374151] transition-colors hover:bg-[var(--subject-hover)] hover:text-[var(--subject-accent)]"
                  >
                    <span className="flex-1">{megaHrefLabel(locale, l.href, l.label)}</span>
                    {"badge" in l && (l as { badge?: string }).badge && (
                      <span className="shrink-0 whitespace-nowrap rounded px-1 py-0.5 text-[9px] font-bold bg-[#fef3c7] text-[#92400e]">
                        {(l as { badge?: string }).badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

// ─── Tab 2: By Level ──────────────────────────────────────────────────────────

const LEVEL_DESC: Record<string, string> = {
  BEGINNER:     "Start your journey from scratch",
  INTERMEDIATE: "Build on your existing foundation",
  ADVANCED:     "Deepen and refine your knowledge",
  EXPERT:       "Master-level & certification tracks",
};

function TabLevel({ afterNavigate }: { afterNavigate?: () => void }) {
  const { locale } = useI18n();
  return (
    <div className="grid grid-cols-4 gap-4">
      {MEGA_BY_LEVEL.map((item) => {
        const { label, desc } = megaLevelCopy(
          locale,
          item.label,
          item.label,
          LEVEL_DESC[item.label] ?? "",
        );
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => afterNavigate?.()}
            className="flex flex-col items-center gap-3 p-6 rounded-xl border-[1.5px] border-[#e5e7eb] text-center hover:border-[#1c7a45] hover:bg-[#f0faf4] transition-all"
          >
            <Icon name={item.icon} size={28} className="text-[#1c7a45]" />
            <span className="text-[13px] font-bold text-[#1C3A2E] tracking-wide">{label}</span>
            <span className="text-[11.5px] text-[#6b7280] leading-snug">{desc}</span>
          </Link>
        );
      })}
    </div>
  );
}

// ─── Tab 3: By Goal ───────────────────────────────────────────────────────────

function TabGoal({ afterNavigate }: { afterNavigate?: () => void }) {
  const { locale, t } = useI18n();
  return (
    <ul className="grid grid-cols-2 gap-1">
      {MEGA_BY_GOAL.map((item) => {
        const isFree = item.href === "/courses/goal/new-muslim";
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={() => afterNavigate?.()}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-[13px] text-[#1C3A2E] font-medium hover:bg-[#f0faf4] transition-colors"
            >
              <ChevronRight size={13} className="text-[#1c7a45] flex-shrink-0 rtl:rotate-180" />
              <span className="flex-1">{megaGoalLabel(locale, item.href, item.label)}</span>
              {isFree && (
                <span className="text-[10px] font-bold bg-[#dcfce7] text-[#15803d] rounded px-1.5 py-0.5 flex-shrink-0">
                  {t("mega.freeBadge")}
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

// ─── Tab 4: Learning Pathways ─────────────────────────────────────────────────

function TabPathways({ afterNavigate }: { afterNavigate?: () => void }) {
  const { locale } = useI18n();
  return (
    <div className="grid grid-cols-3 gap-3">
      {MEGA_PATHWAYS.map((p) => {
        const copy = megaPathwayCopy(locale, p.href, {
          title: p.title,
          lines: p.lines,
          note: p.note,
        });
        return (
          <Link
            key={p.href}
            href={p.href}
            onClick={() => afterNavigate?.()}
            className="flex gap-2.5 p-3.5 rounded-xl border-[1.5px] border-[#e5e7eb] hover:border-[#1c7a45] hover:bg-[#f0faf4] transition-all"
          >
            <Icon name={p.icon} size={15} className="text-[#1c7a45] flex-shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1.5 min-w-0">
              <span className="text-[12.5px] font-bold text-[#1C3A2E] leading-tight">{copy.title}</span>
              <span className="text-[10.5px] font-semibold text-[#1c7a45] bg-[#e8f5ee] rounded px-1.5 py-0.5 w-fit">
                {copy.lines[0]}
              </span>
              <ul className="space-y-0.5">
                {copy.lines.slice(1).map((s) => (
                  <li
                    key={s}
                    className="text-[11px] text-[#6b7280] leading-snug ps-2 relative before:absolute before:start-0 before:content-['·'] before:text-[#1c7a45] before:font-bold"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              {copy.note && (
                <div className="flex items-center gap-1 text-[10.5px] text-[#b45309] bg-[#fffbeb] rounded px-1.5 py-1 font-medium mt-0.5">
                  <AlertTriangle size={11} />
                  {copy.note}
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

// ─── Desktop Panel ────────────────────────────────────────────────────────────

/** Keeps wide mega panel edges inside the viewport relative to anchor (typically the nav <li>). */
function useClampMegaPanelWithinViewport(
  open: boolean,
  anchorRef: RefObject<HTMLElement | null> | undefined,
  panelRef: RefObject<HTMLElement | null>,
) {
  useLayoutEffect(() => {
    if (!open) return;

    function apply() {
      const anchor = anchorRef?.current;
      const panel = panelRef.current;
      if (!anchor || !panel) return;

      const vw = typeof window !== "undefined" ? window.innerWidth : 0;
      if (!vw) return;

      const gutter = 12;
      const liRect = anchor.getBoundingClientRect();
      const panelWidth = Math.min(panel.offsetWidth, vw - gutter * 2);
      const centerX = liRect.left + liRect.width / 2 - panelWidth / 2;
      const clampedLeft = Math.max(gutter, Math.min(centerX, vw - gutter - panelWidth));
      const leftRelative = clampedLeft - liRect.left;

      panel.style.left = `${leftRelative}px`;
      panel.style.transform = "none";
    }

    apply();
    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(apply)
        : null;
    const panelEl = panelRef.current;
    const anchorEl = anchorRef?.current;
    if (ro && panelEl) ro.observe(panelEl);
    if (ro && anchorEl) ro.observe(anchorEl);

    window.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("resize", apply);
      ro?.disconnect();
    };
  }, [open, anchorRef]);
}

export function CoursesMegaPanel({
  open,
  onNavigate,
  anchorRef,
}: {
  open: boolean;
  onNavigate?: () => void;
  /** When set, panel horizontal position is clamped so it stays on-screen under this element. */
  anchorRef?: RefObject<HTMLElement | null>;
}) {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<Tab>("subject");

  const tabs = useMemo(
    () =>
      [
        { id: "subject" as const, label: t("mega.tab.subject") },
        { id: "level" as const, label: t("mega.tab.level") },
        { id: "goal" as const, label: t("mega.tab.goal") },
        { id: "pathways" as const, label: t("mega.tab.pathways") },
      ] satisfies { id: Tab; label: string }[],
    [t],
  );

  const panelRef = useRef<HTMLDivElement>(null);

  useClampMegaPanelWithinViewport(open, anchorRef, panelRef);

  useEffect(() => {
    if (open) setActiveTab("subject");
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* hover bridge */}
      <div className="absolute -top-3 inset-x-0 h-3 z-[59]" aria-hidden />

      <div
        ref={panelRef}
        className={`absolute top-full z-[60] mt-2 rounded-xl border border-[#b8d4c9] bg-[#FDFAF4] shadow-[0_20px_60px_rgba(28,58,46,0.18)] overflow-hidden hidden md:block ${anchorRef ? "left-0" : "left-1/2 -translate-x-1/2"}`}
        style={{ width: "min(96vw, 900px)" }}
        role="region"
        aria-label={t("mega.coursesMenu")}
      >
        {/* Header: tabs + view all */}
        <div className="flex items-center justify-between border-b border-[#c5ddd2] bg-[#f4faf7] px-4">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3.5 text-[13px] font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-[#1C3A2E] border-[#1c7a45]"
                    : "text-[#5a7a6e] border-transparent hover:text-[#1C3A2E]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <Link
            href="/courses"
            onClick={onNavigate}
            className="text-[12px] font-semibold text-[#1C3A2E] hover:text-[#B8860B] transition-colors inline-flex items-center gap-1 whitespace-nowrap ms-4"
          >
            {t("mega.viewAll")} <span className="rtl:rotate-180">→</span>
          </Link>
        </div>

        {/* Tab panel */}
        <div className="p-5">
          {activeTab === "subject"  && <TabSubject  afterNavigate={onNavigate} />}
          {activeTab === "level"    && <TabLevel    afterNavigate={onNavigate} />}
          {activeTab === "goal"     && <TabGoal     afterNavigate={onNavigate} />}
          {activeTab === "pathways" && <TabPathways afterNavigate={onNavigate} />}
        </div>

        {/* Quick Tools footer */}
        <div className="px-5 pb-4 bg-[#f4faf7]">
          <QuickToolsStrip afterNavigate={onNavigate} />
        </div>
      </div>
    </>
  );
}

// ─── Mobile Mega ──────────────────────────────────────────────────────────────

export function CoursesMobileMega({ onPickLink }: { onPickLink?: () => void }) {
  const { locale, t } = useI18n();
  const isAr = locale === "ar";
  const [openTab, setOpenTab] = useState<Tab | null>("subject");

  const tabs = useMemo(
    () =>
      [
        { id: "subject" as const, label: t("mega.tab.subject") },
        { id: "level" as const, label: t("mega.tab.level") },
        { id: "goal" as const, label: t("mega.tab.goal") },
        { id: "pathways" as const, label: t("mega.tab.pathways") },
      ] satisfies { id: Tab; label: string }[],
    [t],
  );

  return (
    <div className="mt-1 rounded-xl border border-[#c5ddd2] bg-[#f4faf7] p-2">
      <ul className="space-y-1">
        {tabs.map((tab) => {
          const isOpen = openTab === tab.id;
          return (
            <li key={tab.id} className="overflow-hidden rounded-lg border border-[#d0e5dc] bg-white">
              <button
                type="button"
                onClick={() => setOpenTab(isOpen ? null : tab.id)}
                className="flex w-full items-center justify-between gap-2 px-3 py-3 text-start text-[13px] font-semibold text-[#1C3A2E] hover:bg-[#eef8f4]"
                aria-expanded={isOpen}
              >
                {tab.label}
                <ChevronRight
                  size={15}
                  className={`shrink-0 text-[#5a7a6e] transition-transform ${
                    isOpen ? (isAr ? "-rotate-90" : "rotate-90") : isAr ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen ? (
                <div className="border-t border-[#eef4f0] bg-[#eef8f4] p-3">
                  <div className="max-h-[min(50vh,360px)] overflow-y-auto overscroll-contain pe-0.5">

                  {tab.id === "subject" && (
                    <div className="space-y-3">
                      {MEGA_BY_SUBJECT.map((col) => {
                        const theme = subjectTheme(col.icon);
                        const titleCls = `text-[11px] font-bold ${
                          isAr ? "" : "uppercase tracking-wide"
                        }`;
                        return (
                          <div
                            key={col.title}
                            className="rounded-xl border p-2.5"
                            style={{
                              backgroundColor: theme.bg,
                              borderColor: theme.border,
                              borderTopWidth: 3,
                              borderTopColor: theme.accent,
                              "--subject-accent": theme.accent,
                              "--subject-hover": theme.hover,
                            } as CSSProperties}
                          >
                            <div className="mb-2 flex items-center gap-1.5">
                              <span
                                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/70"
                                style={{ color: theme.accent }}
                              >
                                <Icon name={col.icon} size={12} />
                              </span>
                              {col.hubHref ? (
                                <Link
                                  href={col.hubHref}
                                  onClick={() => onPickLink?.()}
                                  className={`${titleCls} flex-1 hover:opacity-80`}
                                  style={{ color: theme.accent }}
                                >
                                  {megaSubjectTitle(locale, col.title)}
                                </Link>
                              ) : (
                                <p className={`${titleCls} flex-1`} style={{ color: theme.accent }}>
                                  {megaSubjectTitle(locale, col.title)}
                                </p>
                              )}
                              {col.count != null && (
                                <span
                                  className="rounded-full px-1.5 py-0.5 text-[9px] font-bold text-white"
                                  style={{ backgroundColor: theme.accent }}
                                >
                                  {col.count}
                                </span>
                              )}
                            </div>
                            <ul className="space-y-0.5">
                              {col.links.map((l) => (
                                <li key={l.href}>
                                  <Link
                                    href={l.href}
                                    onClick={() => onPickLink?.()}
                                    className="block rounded-md px-2 py-1.5 text-[12px] font-medium text-[#2d4a40] transition-colors hover:bg-[var(--subject-hover)] hover:text-[var(--subject-accent)]"
                                  >
                                    {megaHrefLabel(locale, l.href, l.label)}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {tab.id === "level" && (
                    <ul className="space-y-0.5">
                      {MEGA_BY_LEVEL.map((item) => {
                        const { label } = megaLevelCopy(
                          locale,
                          item.label,
                          item.label,
                          LEVEL_DESC[item.label] ?? "",
                        );
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => onPickLink?.()}
                              className="flex items-center gap-2 px-2 py-2 text-[12px] font-medium text-[#2d4a40] hover:bg-white/90 hover:text-[#B8860B] rounded"
                            >
                              <Icon name={item.icon} size={14} className="text-[#1c7a45]" />
                              {label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  {tab.id === "goal" && (
                    <ul className="space-y-0.5">
                      {MEGA_BY_GOAL.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => onPickLink?.()}
                            className="block px-2 py-2 text-[12px] font-medium text-[#2d4a40] hover:bg-white/90 hover:text-[#B8860B] rounded"
                          >
                            {megaGoalLabel(locale, item.href, item.label)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {tab.id === "pathways" && (
                    <ul className="space-y-0.5">
                      {MEGA_PATHWAYS.map((p) => {
                        const copy = megaPathwayCopy(locale, p.href, {
                          title: p.title,
                          lines: p.lines,
                          note: p.note,
                        });
                        return (
                          <li key={p.href}>
                            <Link
                              href={p.href}
                              onClick={() => onPickLink?.()}
                              className="flex items-center gap-2 px-2 py-2 text-[12px] font-medium text-[#2d4a40] hover:bg-white/90 hover:text-[#B8860B] rounded"
                            >
                              <Icon name={p.icon} size={13} className="text-[#1c7a45]" />
                              <span>{copy.title}</span>
                              <span className="text-[10px] text-[#5a7a6e]">({copy.lines[0]})</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  </div>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="mt-3 px-1">
        <QuickToolsStrip afterNavigate={onPickLink} />
      </div>

      <Link
        href="/courses"
        onClick={() => onPickLink?.()}
        className="mt-3 block text-center text-[13px] font-semibold text-[#1C3A2E] hover:text-[#B8860B]"
      >
        {t("mega.viewAllCourses")} <span className="rtl:rotate-180">→</span>
      </Link>
    </div>
  );
}