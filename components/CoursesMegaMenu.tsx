"use client";

import Link from "next/link";
import Image from "next/image";
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
  megaPathwayCopy,
  megaQuickLabel,
  megaSubjectTitle,
} from "@/lib/i18n/mega-labels";
import { getCourseLevelContent, type CourseLevelSlug } from "@/lib/courses/levels";
import { useI18n } from "@/components/LocaleProvider";
import {
  BookOpen, PenLine, Landmark, Baby, Briefcase,
  Sprout, TrendingUp, Trees, Trophy,
  Route, ClipboardList, Search, BarChart2, Download, GraduationCap,
  ChevronRight, AlertTriangle, CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Icon map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen, PenLine, Landmark, Baby, Briefcase,
  Sprout, TrendingUp, Trees, Trophy,
  Route, ClipboardList, Search, BarChart2, Download, GraduationCap,
  CheckCircle2,
};

function Icon({ name, size = 16, className }: { name: string; size?: number; className?: string }) {
  const Comp = ICON_MAP[name];
  return Comp ? <Comp size={size} className={className} aria-hidden /> : null;
}

const SUBJECT_ICON_SRC: Record<string, string> = {
  BookOpen: "/quran-icon.svg",
  PenLine: "/arabic-icon.svg",
  Landmark: "/islamic-studies-icon.svg",
  Baby: "/kids-icon.svg",
  Briefcase: "/special-programs-icon.svg",
};

function SubjectIcon({
  name,
  size = 36,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const src = SUBJECT_ICON_SRC[name];
  if (src) {
    return (
      <Image
        src={src}
        alt=""
        width={size}
        height={size}
        className={className}
        aria-hidden
      />
    );
  }
  return <Icon name={name} size={Math.round(size * 0.55)} className={className} />;
}

// ─── Tabs config ──────────────────────────────────────────────────────────────

type Tab = "subject" | "level" | "goal" | "pathways";

// ─── Quick Tools Strip ────────────────────────────────────────────────────────

function QuickToolsStrip({ afterNavigate }: { afterNavigate?: () => void }) {
  const { locale, t } = useI18n();
  return (
    <div className="pt-2">
      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#1C3A2E] mb-3 px-1">
        {t("mega.quickTools")}
      </p>
      <div className="flex justify-between items-center px-1 overflow-x-auto no-scrollbar gap-2">
        {MEGA_QUICK_TOOLS.map((tool, idx) => (
          <div key={tool.href} className="flex items-center shrink-0">
            <Link
              href={tool.href}
              onClick={() => afterNavigate?.()}
              className="group inline-flex items-center gap-2 text-[10.5px] xl:text-[11px] font-semibold text-[#3A4A41] hover:text-[#1c7a45] transition-colors"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-200 bg-white shadow-sm text-[#1C3A2E] group-hover:bg-[#f0faf4] group-hover:border-[#1c7a45]/30 group-hover:text-[#1c7a45] transition-all">
                <Icon name={tool.icon} size={13} />
              </span>
              <span className="leading-tight">
                {megaQuickLabel(locale, tool.href, tool.label).split(" (").map((part, i) => (
                  <span key={i} className="block whitespace-nowrap">
                    {i > 0 ? `(${part}` : part}
                  </span>
                ))}
              </span>
            </Link>
            {idx < MEGA_QUICK_TOOLS.length - 1 && (
              <div className="w-px h-6 bg-gray-200 mx-2 hidden lg:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── By Subject colour themes (per icon) ───────────────────────────────────────

const SUBJECT_THEME: Record<
  string,
  { accent: string; bg: string; hover: string; border: string; bgImage?: string }
> = {
  BookOpen: { // Quran Programs
    accent: "#1C3C30", 
    bg: "#F2F6F3",
    hover: "#e9f0eb",
    border: "#e5ece7",
    bgImage: "/images/mega-bg-quran.png",
  },
  PenLine: { // Arabic Language
    accent: "#C19246",
    bg: "#FEF9F3",
    hover: "#f7efe6",
    border: "#f5ece1",
    bgImage: "/images/mega-bg.png", // Using skyline to avoid Arabic text
  },
  Landmark: { // Islamic Studies
    accent: "#60846E",
    bg: "#F4FAF6",
    hover: "#eef5f0",
    border: "#eaf3ef",
    bgImage: "/images/mega-bg-islamic.png",
  },
  Baby: { // Kids Programs
    accent: "#CD9D68",
    bg: "#FEF7EF",
    hover: "#f7efe6",
    border: "#f5ece1",
    bgImage: "/images/mega-bg-kids.png",
  },
  Briefcase: { // Special Programs
    accent: "#648A74",
    bg: "#F4FAF6",
    hover: "#eef5f0",
    border: "#eaf3ef",
    bgImage: "/images/mega-bg-special.png",
  },
};

const DEFAULT_SUBJECT_THEME = SUBJECT_THEME.BookOpen;

function subjectTheme(icon: string) {
  return SUBJECT_THEME[icon] ?? DEFAULT_SUBJECT_THEME;
}

const SUBJECT_LINK_CLS =
  "group flex items-center gap-3 px-1 py-1.5 text-[11.5px] font-semibold leading-snug text-[#3A4A41] transition-all hover:text-[var(--subject-accent)] hover:translate-x-1 active:scale-[0.98]";

// ─── Tab 1: By Subject ────────────────────────────────────────────────────────

function TabSubject({ afterNavigate }: { afterNavigate?: () => void }) {
  const { locale, t } = useI18n();
  return (
    <div className="grid grid-cols-5 gap-3">
      {MEGA_BY_SUBJECT.map((col) => {
        const theme = subjectTheme(col.icon);
        const titleCls = `text-[11px] xl:text-[11.5px] font-extrabold tracking-[0.02em] leading-[1.1] transition-colors min-w-0 ${
          locale === "en" ? "uppercase" : ""
        }`;

        return (
          <div
            key={col.title}
            className="group/col flex min-w-0 flex-col rounded-[20px] border p-3 relative overflow-hidden h-full"
            style={
              {
                backgroundColor: theme.bg,
                borderColor: theme.border,
                "--subject-accent": theme.accent,
                "--subject-hover": theme.hover,
              } as CSSProperties
            }
          >
            {/* Background graphic placeholder at bottom (gradient to simulate the image graphic) */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-40 opacity-[0.08] pointer-events-none z-0" 
              style={{
                background: `linear-gradient(to top, ${theme.accent} 0%, transparent 100%)`
              }} 
            />
            
            {/* Specific Card Background */}
            <div className="absolute bottom-0 left-0 right-0 h-36 opacity-[0.85] pointer-events-none z-0 overflow-hidden rounded-b-[20px] mix-blend-multiply" style={{ backgroundColor: 'transparent' }}>
              <div className="relative w-full h-full">
                <Image 
                  src={theme.bgImage || "/images/mega-bg.png"} 
                  alt="" 
                  fill 
                  className="object-cover object-bottom opacity-60 transition-opacity duration-500 group-hover/col:opacity-80"
                  sizes="250px"
                />
              </div>
            </div>
            
            <div className="mb-4 relative z-10">
              <div className="flex items-start gap-2 w-full">
                <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] shadow-sm">
                  <SubjectIcon name={col.icon} size={36} />
                </span>
                <div className={`${titleCls} flex flex-col pt-0.5 max-w-[calc(100%-60px)]`}>
                  <span style={{ color: theme.accent }} className="truncate">
                    {megaSubjectTitle(locale, col.title).split(" ")[0]}
                  </span>
                  <span style={{ color: theme.accent }} className="truncate">
                    {megaSubjectTitle(locale, col.title).split(" ").slice(1).join(" ")}
                  </span>
                </div>
                {col.count != null && (
                  <span
                    className="shrink-0 flex items-center justify-center h-5 w-5 rounded-full text-[11px] font-bold text-white shadow-sm ms-auto mt-0.5"
                    style={{ backgroundColor: theme.accent }}
                  >
                    {col.count}
                  </span>
                )}
              </div>
            </div>

            <ul className="flex flex-1 flex-col gap-1.5 relative z-10 mb-4">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => afterNavigate?.()}
                    className={SUBJECT_LINK_CLS}
                  >
                    <span className="shrink-0 flex h-[20px] w-[20px] items-center justify-center overflow-hidden rounded-[5px] shadow-sm transition-opacity">
                      <SubjectIcon name={col.icon} size={20} />
                    </span>
                    <span className="min-w-0 flex-1 leading-snug truncate whitespace-break-spaces line-clamp-2">{megaHrefLabel(locale, l.href, l.label)}</span>
                    <ChevronRight
                      size={13}
                      className="shrink-0 text-[#9ca3af] transition-transform group-hover:text-[var(--subject-accent)] rtl:rotate-180"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-3 relative z-10 flex justify-center border-t border-black/5 mx-1">
              <Link
                href={col.hubHref || "#"}
                onClick={() => afterNavigate?.()}
                className="inline-flex items-center gap-1.5 text-[11px] font-bold transition-opacity hover:opacity-70"
                style={{ color: theme.accent }}
              >
                Explore all <span className="rtl:rotate-180">→</span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Tab 2: By Level ──────────────────────────────────────────────────────────

const LEVEL_SLUG_FROM_LABEL: Record<string, CourseLevelSlug> = {
  BEGINNER: "beginner",
  INTERMEDIATE: "intermediate",
  ADVANCED: "advanced",
  EXPERT: "expert",
};

function TabLevel({ afterNavigate }: { afterNavigate?: () => void }) {
  const { locale } = useI18n();
  return (
    <div className="grid grid-cols-2 items-stretch gap-3 xl:grid-cols-4">
      {MEGA_BY_LEVEL.map((item) => {
        const slug = LEVEL_SLUG_FROM_LABEL[item.label];
        const level = getCourseLevelContent(locale, slug);
        const btnTextColor = level.slug === "expert" ? "#1a3328" : "#ffffff";

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => afterNavigate?.()}
            className="group flex h-full min-h-[228px] flex-col rounded-xl border p-4 transition-all hover:shadow-[0_8px_24px_-12px_rgba(28,58,46,0.25)] sm:min-h-[248px] sm:p-5"
            style={{
              backgroundColor: level.accentLight,
              borderColor: `${level.accent}40`,
              borderTopWidth: 3,
              borderTopColor: level.accent,
            }}
          >
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/85 shadow-sm"
                style={{ color: level.accent }}
              >
                <Icon name={item.icon} size={20} />
              </span>
              <span
                className="text-[12.5px] font-bold tracking-wide sm:text-[13px]"
                style={{ color: level.accent }}
              >
                {level.hero.title}
              </span>
            </div>

            <span className="mt-2 text-[11px] font-bold leading-snug text-[#5a7068] sm:text-[11.5px]">
              {level.cardDesc}
            </span>

            <ul className="mt-2.5 flex flex-1 flex-col justify-start space-y-1.5">
              {level.cardOutcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-1.5 text-[10.5px] font-bold leading-snug text-[#3d5249] sm:text-[11px]"
                >
                  <span
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                    style={{ backgroundColor: level.accent }}
                    aria-hidden
                  />
                  <span className="min-w-0 flex-1">{outcome}</span>
                </li>
              ))}
            </ul>

            <div
              className="mt-auto border-t pt-3.5"
              style={{ borderColor: `${level.accent}25` }}
            >
              <span
                className="inline-flex w-full items-center justify-center rounded-lg px-3 py-2.5 text-[10.5px] font-bold shadow-sm transition-all group-hover:brightness-[0.92] sm:text-[11px]"
                style={{ backgroundColor: level.accent, color: btnTextColor }}
              >
                {level.cta}
              </span>
            </div>
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
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-[13px] text-[#1C3A2E] font-bold hover:bg-[#f0faf4] transition-colors"
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
                    className="text-[11px] font-bold text-[#6b7280] leading-snug ps-2 relative before:absolute before:start-0 before:content-['·'] before:text-[#1c7a45] before:font-bold"
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
        style={{ width: "min(98vw, 1180px)" }}
        role="region"
        aria-label={t("mega.coursesMenu")}
      >
        {/* Header: tabs + view all */}
        <div className="flex items-center justify-between bg-white px-5 pt-4 pb-1">
          <div className="flex gap-2 bg-[#F9F9F9] p-1 rounded-full border border-gray-100">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              // Add specific icons for each tab based on the image
              let TabIcon = "Grid";
              if (tab.id === "level") TabIcon = "BarChart2";
              if (tab.id === "goal") TabIcon = "Target";
              if (tab.id === "pathways") TabIcon = "User";

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 text-[12px] font-bold rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-[#6A8775] text-white shadow-sm"
                      : "text-[#6b7280] hover:text-[#1C3A2E] hover:bg-white"
                  }`}
                >
                  <Icon name={TabIcon} size={14} className={isActive ? "text-white/90" : "text-[#9ca3af]"} />
                  {tab.label}
                </button>
              );
            })}
          </div>
          <Link
            href="/courses"
            onClick={onNavigate}
            className="text-[12px] font-semibold text-[#1C3A2E] hover:text-[#B8860B] transition-colors inline-flex items-center gap-1 whitespace-nowrap ms-4 px-3 py-1.5 border border-gray-200 rounded-full"
          >
            {t("mega.viewAll")} <span className="rtl:rotate-180">→</span>
          </Link>
        </div>

        {/* Tab panel */}
        <div className="px-5 pt-3 pb-5">
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
                            <div className="mb-3 flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm border border-black/5">
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-md shadow-sm">
                                <SubjectIcon name={col.icon} size={28} />
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
                                  className="rounded-full px-1.5 py-[1.5px] text-[8.5px] font-bold text-white shadow-sm ms-0.5"
                                  style={{ backgroundColor: theme.accent }}
                                >
                                  {col.count}
                                </span>
                              )}
                            </div>
                            <ul className="space-y-1">
                              {col.links.map((l) => (
                                <li key={l.href}>
                                  <Link
                                    href={l.href}
                                    onClick={() => onPickLink?.()}
                                    className={`${SUBJECT_LINK_CLS} px-2.5 py-2 text-[12px]`}
                                  >
                                    <span className="min-w-0 flex-1">{megaHrefLabel(locale, l.href, l.label)}</span>
                                    <ChevronRight
                                      size={13}
                                      className="shrink-0 text-[#9ca3af] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--subject-accent)] rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                                    />
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
                    <ul className="space-y-1">
                      {MEGA_BY_LEVEL.map((item) => {
                        const slug = LEVEL_SLUG_FROM_LABEL[item.label];
                        const level = getCourseLevelContent(locale, slug);
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => onPickLink?.()}
                              className="flex items-start gap-2.5 rounded-lg px-2 py-2.5 transition-colors hover:bg-white/90"
                              style={{ borderInlineStart: `3px solid ${level.accent}` }}
                            >
                              <span
                                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                                style={{ backgroundColor: level.accentLight, color: level.accent }}
                              >
                                <Icon name={item.icon} size={14} />
                              </span>
                              <div className="min-w-0 flex-1">
                                <span
                                  className="block text-[12.5px] font-bold"
                                  style={{ color: level.accent }}
                                >
                                  {level.hero.title}
                                </span>
                                <span className="mt-0.5 block text-[11px] leading-snug text-[#6b7280]">
                                  {level.cardDesc}
                                </span>
                              </div>
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