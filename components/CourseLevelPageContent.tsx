"use client";

import Link from "next/link";
import { useMemo, type ReactNode } from "react";
import {
  Sprout,
  TrendingUp,
  Trees,
  Trophy,
  Check,
  ArrowRight,
  BookOpen,
  Clock,
  Target,
  Award,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";
import { useReveal } from "@/hooks/useReveal";
import {
  getAllCourseLevels,
  getCourseLevelContent,
  type CourseLevelContent,
  type CourseLevelSlug,
} from "@/lib/courses/levels";

const ICON_MAP: Record<string, LucideIcon> = {
  Sprout,
  TrendingUp,
  Trees,
  Trophy,
};

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

function SectionCard({
  title,
  children,
  isAr,
  delayMs = 0,
  className = "",
}: {
  title: string;
  children: ReactNode;
  isAr: boolean;
  delayMs?: number;
  className?: string;
}) {
  return (
    <Reveal delayMs={delayMs} className={className}>
      <section
        dir={isAr ? "rtl" : "ltr"}
        className="h-full rounded-2xl border border-[#e5dfd4] bg-white p-5 shadow-sm sm:p-7"
      >
        <h2 className="font-serif text-lg font-semibold text-[#1a3328] sm:text-xl">{title}</h2>
        <div className="mt-4">{children}</div>
      </section>
    </Reveal>
  );
}

function CheckList({ items, isAr }: { items: string[]; isAr: boolean }) {
  return (
    <ul className="space-y-2.5">
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

function InfoText({ text, isAr }: { text: string; isAr: boolean }) {
  return (
    <p className={`text-[14px] leading-relaxed text-[#3d5249] sm:text-[15px] ${isAr ? "text-end" : ""}`}>
      {text}
    </p>
  );
}

function ProgressBar({ level, accent }: { level: number; accent: string }) {
  return (
    <div className="flex gap-1.5" aria-hidden>
      {[1, 2, 3, 4].map((n) => (
        <span
          key={n}
          className="h-1.5 flex-1 rounded-full transition-colors"
          style={{ backgroundColor: n <= level ? accent : "#e5e7eb" }}
        />
      ))}
    </div>
  );
}

function LevelBody({ content, isAr }: { content: CourseLevelContent; isAr: boolean }) {
  const LevelIcon = ICON_MAP[content.icon];

  return (
    <>
      <section
        dir={isAr ? "rtl" : "ltr"}
        className="relative overflow-hidden rounded-3xl border border-[#e5dfd4] bg-gradient-to-br from-white via-[#faf9f6] to-[#f0f4f1] px-5 py-10 shadow-[0_28px_70px_-42px_rgba(28,58,46,0.2)] sm:px-10 sm:py-14"
        style={{ borderTopColor: content.accent, borderTopWidth: 4 }}
      >
        <div
          className="pointer-events-none absolute -end-12 -top-12 h-48 w-48 rounded-full opacity-40 blur-3xl"
          style={{ background: content.accentLight }}
          aria-hidden
        />
        <Reveal>
          <div className={`relative flex flex-col gap-6 sm:flex-row sm:items-start ${isAr ? "sm:flex-row-reverse" : ""}`}>
            <span
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-inner sm:h-20 sm:w-20"
              style={{ background: content.accentLight, color: content.accent }}
            >
              {LevelIcon && <LevelIcon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.75} aria-hidden />}
            </span>
            <div className={`min-w-0 flex-1 ${isAr ? "text-end" : ""}`}>
              <span
                className="inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide sm:text-xs"
                style={{ background: content.accentLight, color: content.accent }}
              >
                {content.badge}
              </span>
              <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#1a3328] sm:text-4xl lg:text-[2.75rem]">
                {content.hero.title}
              </h1>
              <p className="mt-1 text-lg font-medium text-[#2d5249] sm:text-xl">{content.hero.subtitle}</p>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#5a7068] sm:text-base">
                {content.hero.tagline}
              </p>
              <div className="mt-5 max-w-md">
                <ProgressBar level={content.levelNumber} accent={content.accent} />
                <p className="mt-2 text-[12px] font-semibold text-[#6b7a72] sm:text-[13px]">
                  {content.progressLabel}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-6">
        <SectionCard title={content.whoIsFor.title} isAr={isAr} delayMs={60}>
          <CheckList items={content.whoIsFor.items} isAr={isAr} />
        </SectionCard>

        <SectionCard title={content.entryRequirements.title} isAr={isAr} delayMs={90}>
          <InfoText text={content.entryRequirements.text} isAr={isAr} />
        </SectionCard>

        <SectionCard title={content.programs.title} isAr={isAr} delayMs={120} className="lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.programs.categories.map((cat) => (
              <div
                key={cat.name}
                className="rounded-xl border border-[#ebe6dc] bg-[#faf9f6] p-4"
                dir={isAr ? "rtl" : "ltr"}
              >
                <div className={`mb-2 flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                  <BookOpen className="h-4 w-4 shrink-0 text-[#1c7a45]" aria-hidden />
                  <h3 className="text-[13px] font-bold text-[#1a3328] sm:text-sm">{cat.name}</h3>
                </div>
                <ul className={`space-y-1.5 ${isAr ? "text-end" : ""}`}>
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className={`flex gap-2 text-[13px] text-[#3d5249] sm:text-[14px] ${isAr ? "flex-row-reverse justify-end" : ""}`}
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#1c7a45]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>

        {content.studentProfile && (
          <SectionCard title={content.studentProfile.title} isAr={isAr} delayMs={150}>
            <blockquote
              className={`rounded-xl border-s-4 bg-[#f8faf8] py-3 pe-4 ps-4 text-[14px] font-medium italic text-[#243d32] sm:text-[15px] ${isAr ? "border-s-0 border-e-4 pe-4 ps-4 text-end" : ""}`}
              style={{ borderColor: content.accent }}
            >
              &ldquo;{content.studentProfile.quote}&rdquo;
            </blockquote>
            <p className={`mt-3 text-[14px] text-[#5a7068] sm:text-[15px] ${isAr ? "text-end" : ""}`}>
              {content.studentProfile.description}
            </p>
          </SectionCard>
        )}

        {content.skillsAlreadyHave && (
          <SectionCard title={content.skillsAlreadyHave.title} isAr={isAr} delayMs={180}>
            <CheckList items={content.skillsAlreadyHave.items} isAr={isAr} />
          </SectionCard>
        )}

        <SectionCard title={content.outcomes.title} isAr={isAr} delayMs={210}>
          <CheckList items={content.outcomes.items} isAr={isAr} />
        </SectionCard>

        {content.progressIndicators && (
          <SectionCard title={content.progressIndicators.title} isAr={isAr} delayMs={240}>
            <CheckList items={content.progressIndicators.items} isAr={isAr} />
          </SectionCard>
        )}

        {content.skillBenchmarks && (
          <SectionCard title={content.skillBenchmarks.title} isAr={isAr} delayMs={270}>
            <CheckList items={content.skillBenchmarks.items} isAr={isAr} />
          </SectionCard>
        )}

        {content.certification && (
          <SectionCard title={content.certification.title} isAr={isAr} delayMs={300}>
            <CheckList items={content.certification.items} isAr={isAr} />
          </SectionCard>
        )}

        {content.leadership && (
          <SectionCard title={content.leadership.title} isAr={isAr} delayMs={330}>
            <CheckList items={content.leadership.items} isAr={isAr} />
          </SectionCard>
        )}

        {(content.studyExpectations || content.duration || content.commitment) && (
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {content.studyExpectations && (
              <SectionCard title={content.studyExpectations.title} isAr={isAr} delayMs={360}>
                <div className={`flex gap-3 ${isAr ? "flex-row-reverse text-end" : ""}`}>
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#1c7a45]" aria-hidden />
                  <InfoText text={content.studyExpectations.text} isAr={isAr} />
                </div>
              </SectionCard>
            )}
            {content.duration && (
              <SectionCard title={content.duration.title} isAr={isAr} delayMs={390}>
                <div className={`flex gap-3 ${isAr ? "flex-row-reverse text-end" : ""}`}>
                  <Target className="mt-0.5 h-5 w-5 shrink-0 text-[#1c7a45]" aria-hidden />
                  <InfoText text={content.duration.text} isAr={isAr} />
                </div>
              </SectionCard>
            )}
            {content.commitment && (
              <SectionCard title={content.commitment.title} isAr={isAr} delayMs={420}>
                <div className={`flex gap-3 ${isAr ? "flex-row-reverse text-end" : ""}`}>
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-[#1c7a45]" aria-hidden />
                  <InfoText text={content.commitment.text} isAr={isAr} />
                </div>
              </SectionCard>
            )}
          </div>
        )}
      </div>

      <Reveal delayMs={450}>
        <div
          dir={isAr ? "rtl" : "ltr"}
          className="mt-10 rounded-3xl border border-[#1c3a2e]/15 bg-gradient-to-br from-[#1c3a2e] via-[#234d3c] to-[#1c3a2e] px-6 py-10 text-center shadow-xl sm:px-12"
        >
          <h3 className="font-serif text-xl font-semibold text-[#f5f0e8] sm:text-2xl">{content.cta}</h3>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/book-trial"
              className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-[#f2d58c] px-7 py-3.5 text-sm font-bold text-[#1a3328] transition-transform hover:scale-[1.02] sm:w-auto"
            >
              {content.cta}
            </Link>
            <Link
              href="/contact?advisor=1"
              className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full border-2 border-[#f2d58c]/50 px-7 py-3.5 text-sm font-semibold text-[#f5f0e8] transition-transform hover:scale-[1.02] sm:w-auto"
            >
              {isAr ? "تحدّث مع مستشار" : "Talk to Advisor"}
              <ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} aria-hidden />
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}

function OtherLevels({
  currentSlug,
  levels,
  isAr,
}: {
  currentSlug: CourseLevelSlug;
  levels: CourseLevelContent[];
  isAr: boolean;
}) {
  const others = levels.filter((l) => l.slug !== currentSlug);
  if (others.length === 0) return null;

  return (
    <Reveal delayMs={500}>
      <section dir={isAr ? "rtl" : "ltr"} className="mt-14">
        <div className={`mb-5 flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <Users className="h-5 w-5 text-[#1c7a45]" aria-hidden />
          <h2 className="font-serif text-xl font-semibold text-[#1a3328] sm:text-2xl">
            {levels[0]?.otherLevelsTitle ?? (isAr ? "استكشف المستويات الأخرى" : "Explore Other Levels")}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((level) => {
            const LevelIcon = ICON_MAP[level.icon];
            return (
              <Link
                key={level.slug}
                href={`/courses/level/${level.slug}`}
                className="group flex flex-col rounded-2xl border border-[#e5dfd4] bg-white p-5 transition-all hover:border-[#1c7a45] hover:shadow-md sm:p-6"
                style={{ borderTopColor: level.accent, borderTopWidth: 3 }}
              >
                <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: level.accentLight, color: level.accent }}
                  >
                    {LevelIcon && <LevelIcon className="h-5 w-5" aria-hidden />}
                  </span>
                  <div className={isAr ? "text-end" : ""}>
                    <p className="font-serif text-base font-semibold text-[#1a3328]">{level.hero.title}</p>
                    <p className="text-[12px] text-[#6b7a72]">{level.hero.subtitle}</p>
                  </div>
                </div>
                <p className={`mt-3 text-[13px] text-[#5a7068] ${isAr ? "text-end" : ""}`}>{level.hero.tagline}</p>
                <span
                  className={`mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#1c7a45] group-hover:gap-2 transition-all ${isAr ? "flex-row-reverse self-end" : ""}`}
                >
                  {isAr ? "اعرف المزيد" : "Learn more"}
                  <ArrowRight className={`h-3.5 w-3.5 ${isAr ? "rotate-180" : ""}`} aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}

export default function CourseLevelPageContent({ slug }: { slug: CourseLevelSlug }) {
  const { locale } = useI18n();
  const isAr = locale === "ar";

  const content = useMemo(() => getCourseLevelContent(locale, slug), [locale, slug]);
  const allLevels = useMemo(() => getAllCourseLevels(locale), [locale]);

  return (
    <article className="relative mx-auto w-full max-w-5xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <LevelBody content={content} isAr={isAr} />
      <OtherLevels currentSlug={slug} levels={allLevels} isAr={isAr} />
    </article>
  );
}
