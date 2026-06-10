"use client";

import { memo, useCallback, useMemo, useState } from "react";
import { BookOpen, PenLine, Landmark, Baby, Briefcase, type LucideIcon } from "lucide-react";
import { MEGA_BY_SUBJECT } from "@/components/coursesMegaData";
import { megaHrefLabel, megaSubjectTitle } from "@/lib/i18n/mega-labels";
import type { Locale } from "@/lib/i18n/types";

const TRIAL_SUBJECTS = MEGA_BY_SUBJECT;
const ICONS: Record<string, LucideIcon> = { BookOpen, PenLine, Landmark, Baby, Briefcase };

// ─── colour config per subject icon ───────────────────────────────────────────
const ACCENT: Record<
  string,
  {
    tab: string;         // active tab underline + text
    tabActive: string;   // tailwind classes for active tab
    pill: string;        // idle pill border + text
    pillActive: string;  // filled pill
    chip: string;        // selected chip
  }
> = {
  BookOpen: {
    tab:        "text-[#1C3A2E] border-[#1C3A2E]",
    tabActive:  "text-[#1C3A2E] border-b-[3px] border-[#1C3A2E]",
    pill:       "border-[#1C3A2E] text-[#1C3A2E]",
    pillActive: "bg-[#1C3A2E] text-white border-[#1C3A2E]",
    chip:       "bg-[#eaf6ee] border-[#1C3A2E] text-[#0e2a1e]",
  },
  PenLine: {
    tab:        "text-[#1a4a6b] border-[#1a4a6b]",
    tabActive:  "text-[#1a4a6b] border-b-[3px] border-[#1a4a6b]",
    pill:       "border-[#1a4a6b] text-[#1a4a6b]",
    pillActive: "bg-[#1a4a6b] text-white border-[#1a4a6b]",
    chip:       "bg-[#eaf1f8] border-[#1a4a6b] text-[#0a2a40]",
  },
  Landmark: {
    tab:        "text-[#7a3d10] border-[#7a3d10]",
    tabActive:  "text-[#7a3d10] border-b-[3px] border-[#7a3d10]",
    pill:       "border-[#7a3d10] text-[#7a3d10]",
    pillActive: "bg-[#7a3d10] text-white border-[#7a3d10]",
    chip:       "bg-[#faf0e8] border-[#7a3d10] text-[#4a2008]",
  },
  Baby: {
    tab:        "text-[#5B21B6] border-[#5B21B6]",
    tabActive:  "text-[#5B21B6] border-b-[3px] border-[#5B21B6]",
    pill:       "border-[#5B21B6] text-[#5B21B6]",
    pillActive: "bg-[#5B21B6] text-white border-[#5B21B6]",
    chip:       "bg-[#F5F3FF] border-[#5B21B6] text-[#2E1065]",
  },
  Briefcase: {
    tab:        "text-[#BE185D] border-[#BE185D]",
    tabActive:  "text-[#BE185D] border-b-[3px] border-[#BE185D]",
    pill:       "border-[#BE185D] text-[#BE185D]",
    pillActive: "bg-[#BE185D] text-white border-[#BE185D]",
    chip:       "bg-[#FFF1F2] border-[#BE185D] text-[#4C0519]",
  },
};
const DEFAULT_ICON = "BookOpen";

// ─── Chip (selected tag shown at top) ─────────────────────────────────────────
const Chip = memo(function Chip({
  label,
  chipCls,
  onRemove,
}: {
  label: string;
  chipCls: string;
  onRemove: () => void;
}) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full border-[1.5px] px-3 py-1 text-[12px] font-medium leading-snug",
        chipCls,
      ].join(" ")}
    >
      {label}
      <button
        type="button"
        onClick={onRemove}
        className="leading-none opacity-60 hover:opacity-100"
        aria-label="Remove"
      >
        ×
      </button>
    </span>
  );
});

// ─── Course pill button ────────────────────────────────────────────────────────
const CoursePill = memo(function CoursePill({
  label,
  checked,
  pillCls,
  pillActiveCls,
  onToggle,
}: {
  label: string;
  checked: boolean;
  pillCls: string;
  pillActiveCls: string;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={checked}
      className={[
        "w-full min-[480px]:w-auto rounded-full border-[1.5px] px-3.5 py-2.5 text-left text-[13px] font-medium leading-snug transition-all duration-150",
        "active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C3A2E]/30",
        checked ? pillActiveCls : `bg-transparent hover:opacity-80 ${pillCls}`,
      ].join(" ")}
    >
      {label}
    </button>
  );
});

// ─── Main export ──────────────────────────────────────────────────────────────
export function TrialCoursesGrid({
  locale,
  selectedHrefs,
  onToggle,
  compact = false,
}: {
  locale: Locale;
  selectedHrefs: Set<string> | string[];
  onToggle: (href: string) => void;
  compact?: boolean;
}) {
  const selected = useMemo(
    () => (selectedHrefs instanceof Set ? selectedHrefs : new Set(selectedHrefs)),
    [selectedHrefs],
  );

  const [activeTab, setActiveTab] = useState<string>(
    () => TRIAL_SUBJECTS[0]?.title ?? "",
  );

  const activeSubject = useMemo(
    () => TRIAL_SUBJECTS.find((s) => s.title === activeTab) ?? TRIAL_SUBJECTS[0],
    [activeTab],
  );

  const handleTabClick = useCallback((title: string) => setActiveTab(title), []);

  // Flat list of all selected hrefs with their subject info for chips
  const selectedList = useMemo(() => {
    const out: { href: string; label: string; icon: string }[] = [];
    for (const subj of TRIAL_SUBJECTS) {
      for (const link of subj.links) {
        if (selected.has(link.href)) {
          out.push({
            href: link.href,
            label: megaHrefLabel(locale, link.href, link.label),
            icon: subj.icon,
          });
        }
      }
    }
    return out;
  }, [selected, locale]);

  return (
    <div className={compact ? "space-y-3" : "space-y-4"}>
      {/* ── Chips row ── */}
      <div className="flex min-h-[38px] flex-wrap items-center gap-2 rounded-xl border border-[#e2ede5] bg-white/70 p-2.5 sm:p-3">
        {selectedList.length === 0 ? (
          <span className="text-[13px] italic text-[#a0b0a5]">
            {locale === "ar" ? "لم تُختر دورات بعد…" : "No courses selected yet…"}
          </span>
        ) : (
          selectedList.map(({ href, label, icon }) => {
            const acc = ACCENT[icon] ?? ACCENT[DEFAULT_ICON];
            return (
              <Chip
                key={href}
                label={label}
                chipCls={acc.chip}
                onRemove={() => onToggle(href)}
              />
            );
          })
        )}
      </div>

      {/* ── Tabs ── */}
      <div className="-mx-1 overflow-hidden px-1">
        <div
          className="flex flex-nowrap gap-0 overflow-x-auto overscroll-x-contain border-b-2 border-[#dce8df] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
        >
        {TRIAL_SUBJECTS.map((subj) => {
          const Icon = ICONS[subj.icon] ?? BookOpen;
          const acc = ACCENT[subj.icon] ?? ACCENT[DEFAULT_ICON];
          const isActive = subj.title === activeTab;
          const checkedCount = subj.links.filter((l) => selected.has(l.href)).length;

          return (
            <button
              key={subj.title}
              type="button"
              onClick={() => handleTabClick(subj.title)}
              className={[
                "flex shrink-0 items-center gap-1.5 px-3 py-2.5 text-[12px] font-medium transition-all duration-150 -mb-[2px] sm:px-4 sm:text-[13px]",
                isActive
                  ? acc.tabActive
                  : "border-b-[3px] border-transparent text-[#6b8070] hover:text-[#2a4a35]",
              ].join(" ")}
              aria-selected={isActive}
              role="tab"
            >
              <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="max-w-[7.5rem] truncate sm:max-w-none sm:whitespace-nowrap">
                {megaSubjectTitle(locale, subj.title)}
              </span>
              <span
                className={[
                  "rounded-full px-1.5 py-0.5 text-[11px] font-bold",
                  isActive
                    ? "bg-black/10 text-inherit"
                    : "bg-[#e8f0ea] text-[#5a7060]",
                ].join(" ")}
              >
                {checkedCount > 0 ? checkedCount : subj.count ?? subj.links.length}
              </span>
            </button>
          );
        })}
        </div>
      </div>

      {/* ── Course pills for active tab ── */}
      {activeSubject && (
        <div className="grid grid-cols-1 gap-2 min-[480px]:grid-cols-2 sm:flex sm:flex-wrap">
          {activeSubject.links.map((link) => {
            const acc = ACCENT[activeSubject.icon] ?? ACCENT[DEFAULT_ICON];
            return (
              <CoursePill
                key={link.href}
                label={megaHrefLabel(locale, link.href, link.label)}
                checked={selected.has(link.href)}
                pillCls={acc.pill}
                pillActiveCls={acc.pillActive}
                onToggle={() => onToggle(link.href)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}