"use client";

import Link from "next/link";
import { useMemo, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Route,
  Target,
  Users,
  Sparkles,
} from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";
import { useReveal } from "@/hooks/useReveal";
import {
  getAllCourseGoals,
  getCourseGoalContent,
  type CourseGoalContent,
  type CourseGoalSlug,
} from "@/lib/courses/goals";

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

function InfoText({ text, isAr }: { text: string; isAr: boolean }) {
  return (
    <p className={`text-[14px] leading-relaxed text-[#3d5249] sm:text-[15px] ${isAr ? "text-end" : ""}`}>
      {text}
    </p>
  );
}

function PathwayList({ items, isAr, accent }: { items: string[]; isAr: boolean; accent: string }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-2.5 rounded-xl border border-[#ebe6dc] bg-[#faf9f6] px-4 py-3 text-[14px] leading-relaxed text-[#3d5249] sm:text-[15px] ${isAr ? "flex-row-reverse text-end" : ""}`}
        >
          <Route className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} aria-hidden />
          <span className="min-w-0 flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function GoalBody({ content, isAr }: { content: CourseGoalContent; isAr: boolean }) {
  const isFree = content.slug === "new-muslim";

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
          <div
            className={`relative flex flex-col gap-6 sm:flex-row sm:items-start ${isAr ? "sm:flex-row-reverse" : ""}`}
          >
            <span
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl shadow-inner sm:h-20 sm:w-20 sm:text-4xl"
              style={{ background: content.accentLight }}
              aria-hidden
            >
              {content.emoji}
            </span>
            <div className={`min-w-0 flex-1 ${isAr ? "text-end" : ""}`}>
              <div className={`flex flex-wrap items-center gap-2 ${isAr ? "justify-end" : ""}`}>
                <span
                  className="inline-block rounded-full px-3 py-1 text-[11px] font-bold tracking-wide sm:text-xs"
                  style={{ background: content.accentLight, color: content.accent }}
                >
                  {content.badge}
                </span>
                {isFree && (
                  <span className="inline-block rounded-full bg-[#dcfce7] px-3 py-1 text-[11px] font-bold text-[#15803d] sm:text-xs">
                    {isAr ? "مجاناً" : "FREE"}
                  </span>
                )}
              </div>
              <h1 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#1a3328] sm:text-4xl lg:text-[2.5rem]">
                {content.hero.title}
              </h1>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#5a7068] sm:text-base">
                {content.hero.subtitle}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-6">
        <SectionCard title={content.whoIsFor.title} isAr={isAr} delayMs={60}>
          <InfoText text={content.whoIsFor.text} isAr={isAr} />
        </SectionCard>

        <SectionCard title={content.beginnerEntry.title} isAr={isAr} delayMs={90}>
          <div className={`flex gap-3 ${isAr ? "flex-row-reverse text-end" : ""}`}>
            <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-[#1c7a45]" aria-hidden />
            <InfoText text={content.beginnerEntry.text} isAr={isAr} />
          </div>
        </SectionCard>

        <SectionCard title={content.pathway.title} isAr={isAr} delayMs={120} className="lg:col-span-2">
          <PathwayList items={content.pathway.items} isAr={isAr} accent={content.accent} />
        </SectionCard>

        <SectionCard title={content.outcomes.title} isAr={isAr} delayMs={150}>
          <div className={`flex gap-3 ${isAr ? "flex-row-reverse text-end" : ""}`}>
            <Target className="mt-0.5 h-5 w-5 shrink-0 text-[#1c7a45]" aria-hidden />
            <InfoText text={content.outcomes.text} isAr={isAr} />
          </div>
        </SectionCard>

        <SectionCard title={content.duration.title} isAr={isAr} delayMs={180}>
          <div className={`flex gap-3 ${isAr ? "flex-row-reverse text-end" : ""}`}>
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#1c7a45]" aria-hidden />
            <InfoText text={content.duration.text} isAr={isAr} />
          </div>
        </SectionCard>
      </div>

      <Reveal delayMs={210}>
        <blockquote
          dir={isAr ? "rtl" : "ltr"}
          className={`mt-8 rounded-2xl border border-[#e5dfd4] bg-white px-6 py-8 text-center shadow-sm sm:px-10 ${isAr ? "text-end sm:text-center" : ""}`}
          style={{ borderInlineStartWidth: 4, borderInlineStartColor: content.accent }}
        >
          <Sparkles
            className={`mx-auto mb-3 h-6 w-6 ${isAr ? "ms-auto me-auto" : ""}`}
            style={{ color: content.accent }}
            aria-hidden
          />
          <p className="font-serif text-lg font-medium italic leading-relaxed text-[#243d32] sm:text-xl">
            &ldquo;{content.motivation}&rdquo;
          </p>
        </blockquote>
      </Reveal>

      <Reveal delayMs={240}>
        <div
          dir={isAr ? "rtl" : "ltr"}
          className="mt-10 rounded-3xl border border-[#1c3a2e]/15 bg-gradient-to-br from-[#1c3a2e] via-[#234d3c] to-[#1c3a2e] px-6 py-10 text-center shadow-xl sm:px-12"
        >
          <h3 className="font-serif text-xl font-semibold text-[#f5f0e8] sm:text-2xl">{content.cta}</h3>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href={isFree ? "/book-trial?program=new-muslim" : "/book-trial"}
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

function OtherGoals({
  currentSlug,
  goals,
  isAr,
}: {
  currentSlug: CourseGoalSlug;
  goals: CourseGoalContent[];
  isAr: boolean;
}) {
  const others = goals.filter((g) => g.slug !== currentSlug);
  const title = goals[0]?.exploreOtherTitle ?? (isAr ? "استكشف أهداف تعلّم أخرى" : "Explore Other Learning Goals");

  if (others.length === 0) return null;

  return (
    <Reveal delayMs={300}>
      <section dir={isAr ? "rtl" : "ltr"} className="mt-14">
        <div className={`mb-5 flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <Users className="h-5 w-5 text-[#1c7a45]" aria-hidden />
          <h2 className="font-serif text-xl font-semibold text-[#1a3328] sm:text-2xl">{title}</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((goal) => (
            <Link
              key={goal.slug}
              href={`/courses/goal/${goal.slug}`}
              className="group flex items-start gap-3 rounded-2xl border border-[#e5dfd4] bg-white p-4 transition-all hover:border-[#1c7a45] hover:shadow-md sm:p-5"
              style={{ borderTopColor: goal.accent, borderTopWidth: 3 }}
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                style={{ background: goal.accentLight }}
                aria-hidden
              >
                {goal.emoji}
              </span>
              <div className={`min-w-0 flex-1 ${isAr ? "text-end" : ""}`}>
                <p className="text-[13px] font-bold leading-snug text-[#1a3328] sm:text-sm">
                  {goal.hero.title}
                </p>
                <p className="mt-1 line-clamp-2 text-[11.5px] leading-snug text-[#6b7a72] sm:text-[12px]">
                  {goal.hero.subtitle}
                </p>
                <span
                  className={`mt-2 inline-flex items-center gap-1 text-[12px] font-semibold text-[#1c7a45] transition-all group-hover:gap-2 ${isAr ? "flex-row-reverse" : ""}`}
                >
                  {isAr ? "اعرف المزيد" : "Learn more"}
                  <ArrowRight className={`h-3 w-3 ${isAr ? "rotate-180" : ""}`} aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export default function CourseGoalPageContent({ slug }: { slug: CourseGoalSlug }) {
  const { locale } = useI18n();
  const isAr = locale === "ar";

  const content = useMemo(() => getCourseGoalContent(locale, slug), [locale, slug]);
  const allGoals = useMemo(() => getAllCourseGoals(locale), [locale]);

  return (
    <article className="relative mx-auto w-full max-w-5xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <GoalBody content={content} isAr={isAr} />
      <OtherGoals currentSlug={slug} goals={allGoals} isAr={isAr} />
    </article>
  );
}
