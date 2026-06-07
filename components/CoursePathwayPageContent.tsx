"use client";

import Link from "next/link";
import { useMemo, type ReactNode } from "react";
import {
  ArrowRight,
  Route,
  Check,
  HelpCircle,
  AlertTriangle,
  ClipboardList,
  Search,
  BarChart2,
  Download,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";
import { useReveal } from "@/hooks/useReveal";
import {
  getAllCoursePathways,
  getCoursePathwayContent,
  getPathwayFramework,
  getPathwayQuickTools,
  getPathwayLabels,
  type CoursePathwayContent,
  type CoursePathwaySlug,
  type PathwayStage,
  type PathwaySubSection,
} from "@/lib/courses/pathways";

const ICON_MAP: Record<string, LucideIcon> = {
  ClipboardList,
  Search,
  BarChart2,
  Download,
  GraduationCap,
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

function StageCard({
  stage,
  index,
  accent,
  isAr,
  labels,
}: {
  stage: PathwayStage;
  index: number;
  accent: string;
  accentLight?: string;
  isAr: boolean;
  labels: ReturnType<typeof getPathwayLabels>;
}) {
  const fields = [
    stage.objectives && { label: labels.objectives, value: stage.objectives },
    stage.skillsGained && { label: labels.skillsGained, value: stage.skillsGained },
    stage.focus && { label: labels.focus, value: stage.focus },
    stage.duration && { label: labels.duration, value: stage.duration },
    stage.advancement && { label: labels.advancement, value: stage.advancement },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <Reveal delayMs={index * 50}>
      <article
        dir={isAr ? "rtl" : "ltr"}
        className="rounded-2xl border border-[#e5dfd4] bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
        style={{ borderInlineStartWidth: 4, borderInlineStartColor: accent }}
      >
        <div className={`flex items-start gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[13px] font-bold text-white sm:h-9 sm:w-9"
            style={{ backgroundColor: accent }}
            aria-hidden
          >
            {index + 1}
          </span>
          <h3 className={`min-w-0 flex-1 font-serif text-base font-semibold text-[#1a3328] sm:text-lg ${isAr ? "text-end" : ""}`}>
            {stage.title}
          </h3>
        </div>
        {fields.length > 0 && (
          <dl className="mt-4 space-y-2.5">
            {fields.map((field) => (
              <div key={field.label} className={isAr ? "text-end" : ""}>
                <dt className="text-[11px] font-bold uppercase tracking-wide text-[#5a7a6e] sm:text-xs">
                  {field.label}
                </dt>
                <dd className="mt-0.5 text-[13.5px] leading-relaxed text-[#3d5249] sm:text-[14px]">{field.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </article>
    </Reveal>
  );
}

function SubSectionBlock({
  section,
  accent,
  accentLight,
  isAr,
  labels,
  baseDelay,
}: {
  section: PathwaySubSection;
  accent: string;
  accentLight: string;
  isAr: boolean;
  labels: ReturnType<typeof getPathwayLabels>;
  baseDelay: number;
}) {
  return (
    <Reveal delayMs={baseDelay}>
      <section dir={isAr ? "rtl" : "ltr"} className="rounded-2xl border border-[#e5dfd4] bg-white p-5 shadow-sm sm:p-7">
        <h2 className={`font-serif text-lg font-semibold text-[#1a3328] sm:text-xl ${isAr ? "text-end" : ""}`}>
          {section.title}
        </h2>
        {section.subtitle && (
          <p className={`mt-1 text-[14px] text-[#5a7068] ${isAr ? "text-end" : ""}`}>{section.subtitle}</p>
        )}
        {section.intro && (
          <p className={`mt-3 text-[14px] font-medium text-[#3d5249] sm:text-[15px] ${isAr ? "text-end" : ""}`}>
            {section.intro}
          </p>
        )}

        {section.bulletList && section.bulletList.length > 0 && (
          <ul className="mt-4 space-y-2">
            {section.bulletList.map((item) => (
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
        )}

        {section.ageNotes && section.ageNotes.length > 0 && (
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {section.ageNotes.map((note) => (
              <div
                key={note.label}
                className="rounded-xl border border-[#ebe6dc] p-4"
                style={{ backgroundColor: accentLight }}
              >
                <p className={`text-lg ${isAr ? "text-end" : ""}`} aria-hidden>
                  {note.emoji}
                </p>
                <p className={`mt-1 text-[13px] font-bold text-[#1a3328] ${isAr ? "text-end" : ""}`}>{note.label}</p>
                <p className={`mt-1 text-[12.5px] leading-relaxed text-[#3d5249] ${isAr ? "text-end" : ""}`}>
                  {note.text}
                </p>
              </div>
            ))}
          </div>
        )}

        {section.stages && section.stages.length > 0 && (
          <div className="mt-5 space-y-3 sm:space-y-4">
            {section.stages.map((stage, i) => (
              <StageCard
                key={stage.title}
                stage={stage}
                index={i}
                accent={accent}
                accentLight={accentLight}
                isAr={isAr}
                labels={labels}
              />
            ))}
          </div>
        )}

        {section.tracks && section.tracks.length > 0 && (
          <div className="mt-5 space-y-4">
            {section.tracks.map((track, i) => (
              <Reveal key={track.title} delayMs={i * 60}>
                <div
                  className="rounded-xl border border-[#ebe6dc] bg-[#faf9f6] p-4 sm:p-5"
                  style={{ borderTopWidth: 3, borderTopColor: accent }}
                >
                  <h4 className={`font-serif text-[15px] font-semibold text-[#1a3328] sm:text-base ${isAr ? "text-end" : ""}`}>
                    {track.title}
                  </h4>
                  {track.objectives && (
                    <p className={`mt-2 text-[13.5px] leading-relaxed text-[#3d5249] sm:text-[14px] ${isAr ? "text-end" : ""}`}>
                      <span className="font-semibold text-[#1a3328]">{labels.objectives}: </span>
                      {track.objectives}
                    </p>
                  )}
                  {track.orderOfStudy && (
                    <p className={`mt-2 text-[13.5px] leading-relaxed text-[#3d5249] sm:text-[14px] ${isAr ? "text-end" : ""}`}>
                      <span className="font-semibold text-[#1a3328]">{labels.orderOfStudy}: </span>
                      {track.orderOfStudy}
                    </p>
                  )}
                  {track.revisionSystem && (
                    <p className={`mt-2 text-[13.5px] leading-relaxed text-[#3d5249] sm:text-[14px] ${isAr ? "text-end" : ""}`}>
                      <span className="font-semibold text-[#1a3328]">{labels.revisionSystem}: </span>
                      {track.revisionSystem}
                    </p>
                  )}
                  {track.duration && (
                    <p className={`mt-2 text-[13px] font-medium text-[#1c7a45] ${isAr ? "text-end" : ""}`}>
                      {labels.duration}: {track.duration}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </Reveal>
  );
}

function FaqBlock({
  title,
  items,
  isAr,
  delayMs,
}: {
  title: string;
  items: { question: string; answer: string }[];
  isAr: boolean;
  delayMs: number;
}) {
  return (
    <Reveal delayMs={delayMs}>
      <section dir={isAr ? "rtl" : "ltr"} className="rounded-2xl border border-[#e5dfd4] bg-white p-5 shadow-sm sm:p-7">
        <div className={`mb-4 flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <HelpCircle className="h-5 w-5 shrink-0 text-[#1c7a45]" aria-hidden />
          <h2 className="font-serif text-lg font-semibold text-[#1a3328] sm:text-xl">{title}</h2>
        </div>
        <div className="space-y-4">
          {items.map((faq) => (
            <div key={faq.question} className="rounded-xl border border-[#ebe6dc] bg-[#faf9f6] px-4 py-3.5 sm:px-5">
              <p className={`text-[14px] font-semibold text-[#1a3328] sm:text-[15px] ${isAr ? "text-end" : ""}`}>
                {faq.question}
              </p>
              <p className={`mt-2 text-[13.5px] leading-relaxed text-[#5a7068] sm:text-[14px] ${isAr ? "text-end" : ""}`}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

function FrameworkSection({ isAr, delayMs }: { isAr: boolean; delayMs: number }) {
  const { locale } = useI18n();
  const framework = useMemo(() => getPathwayFramework(locale), [locale]);
  const labels = useMemo(() => getPathwayLabels(locale), [locale]);

  return (
    <Reveal delayMs={delayMs}>
      <section dir={isAr ? "rtl" : "ltr"} className="mt-14">
        <h2 className={`mb-6 font-serif text-xl font-semibold text-[#1a3328] sm:text-2xl ${isAr ? "text-end" : ""}`}>
          {labels.frameworkTitle}
        </h2>
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          {framework.map((model, i) => (
            <article
              key={model.title}
              className="rounded-2xl border border-[#e5dfd4] bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md sm:p-6"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className={`text-2xl ${isAr ? "block text-end" : ""}`} aria-hidden>
                {model.emoji}
              </span>
              <h3 className={`mt-2 font-serif text-base font-semibold text-[#1a3328] sm:text-lg ${isAr ? "text-end" : ""}`}>
                {model.title}
              </h3>
              <p className={`mt-2 text-[13px] leading-relaxed text-[#5a7068] sm:text-[14px] ${isAr ? "text-end" : ""}`}>
                {model.intro}
              </p>
              <ul className="mt-3 space-y-2">
                {model.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className={`flex gap-2 text-[12.5px] leading-relaxed text-[#3d5249] sm:text-[13px] ${isAr ? "flex-row-reverse text-end" : ""}`}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1c7a45]" aria-hidden />
                    <span className="min-w-0 flex-1">{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

function QuickToolsSection({ isAr, delayMs }: { isAr: boolean; delayMs: number }) {
  const { locale } = useI18n();
  const tools = useMemo(() => getPathwayQuickTools(locale), [locale]);
  const labels = useMemo(() => getPathwayLabels(locale), [locale]);

  return (
    <Reveal delayMs={delayMs}>
      <section dir={isAr ? "rtl" : "ltr"} className="mt-10">
        <h2 className={`mb-5 font-serif text-xl font-semibold text-[#1a3328] sm:text-2xl ${isAr ? "text-end" : ""}`}>
          {labels.quickToolsTitle}
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {tools.map((tool) => {
            const IconComp = ICON_MAP[tool.icon];
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col items-center rounded-2xl border border-[#e5dfd4] bg-white p-4 text-center shadow-sm transition-all hover:border-[#1c7a45] hover:shadow-md sm:p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f5ee] text-[#1c7a45] transition-colors group-hover:bg-[#1c7a45] group-hover:text-white">
                  {IconComp && <IconComp className="h-5 w-5" aria-hidden />}
                </span>
                <span className="mt-3 text-[12px] font-bold leading-snug text-[#1a3328] sm:text-[13px]">
                  {tool.label}
                </span>
                <span className="mt-2 text-[11px] font-semibold text-[#1c7a45] underline-offset-2 group-hover:underline">
                  {tool.cta}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}

function OtherPathways({
  currentSlug,
  pathways,
  isAr,
  title,
}: {
  currentSlug: CoursePathwaySlug;
  pathways: CoursePathwayContent[];
  isAr: boolean;
  title: string;
}) {
  const others = pathways.filter((p) => p.slug !== currentSlug);
  if (others.length === 0) return null;

  return (
    <Reveal delayMs={360}>
      <section dir={isAr ? "rtl" : "ltr"} className="mt-14">
        <div className={`mb-5 flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <Route className="h-5 w-5 text-[#1c7a45]" aria-hidden />
          <h2 className="font-serif text-xl font-semibold text-[#1a3328] sm:text-2xl">{title}</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((pathway) => (
            <Link
              key={pathway.slug}
              href={`/courses/pathways/${pathway.slug}`}
              className="group flex items-start gap-3 rounded-2xl border border-[#e5dfd4] bg-white p-4 transition-all hover:border-[#1c7a45] hover:shadow-md sm:p-5"
              style={{ borderTopColor: pathway.accent, borderTopWidth: 3 }}
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                style={{ background: pathway.accentLight }}
                aria-hidden
              >
                {pathway.emoji}
              </span>
              <div className={`min-w-0 flex-1 ${isAr ? "text-end" : ""}`}>
                <p className="text-[13px] font-bold leading-snug text-[#1a3328] sm:text-sm">{pathway.hero.title}</p>
                <p className="mt-1 line-clamp-2 text-[11.5px] leading-snug text-[#6b7a72] sm:text-[12px]">
                  {pathway.hero.subtitle}
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

function PathwayBody({ content, isAr, labels }: { content: CoursePathwayContent; isAr: boolean; labels: ReturnType<typeof getPathwayLabels> }) {
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
          <div className={`relative flex flex-col gap-6 sm:flex-row sm:items-start ${isAr ? "sm:flex-row-reverse" : ""}`}>
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
                  {content.hero.badge}
                </span>
                {isFree && (
                  <span className="inline-block rounded-full bg-[#dcfce7] px-3 py-1 text-[11px] font-bold text-[#15803d] sm:text-xs">
                    {isAr ? "مجاناً" : "FREE"}
                  </span>
                )}
                {content.warningNote && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#fffbeb] px-3 py-1 text-[11px] font-bold text-[#b45309] sm:text-xs">
                    <AlertTriangle className="h-3 w-3" aria-hidden />
                    {content.warningNote}
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

      {content.overview.length > 0 && (
        <Reveal delayMs={50}>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:gap-4">
            {content.overview.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#e5dfd4] bg-white px-4 py-3.5 shadow-sm sm:px-5 sm:py-4"
                style={{ borderInlineStartWidth: 3, borderInlineStartColor: content.accent }}
                dir={isAr ? "rtl" : "ltr"}
              >
                <p className={`text-[11px] font-bold uppercase tracking-wide text-[#5a7a6e] sm:text-xs ${isAr ? "text-end" : ""}`}>
                  {item.label}
                </p>
                <p className={`mt-1 text-[13.5px] leading-relaxed text-[#3d5249] sm:text-[14px] ${isAr ? "text-end" : ""}`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      <div className="mt-8 space-y-6">
        {content.sections.map((section, i) => (
          <SubSectionBlock
            key={section.title}
            section={section}
            accent={content.accent}
            accentLight={content.accentLight}
            isAr={isAr}
            labels={labels}
            baseDelay={80 + i * 40}
          />
        ))}
      </div>

      {content.faqs.map((faqGroup, i) => (
        <div key={faqGroup.title} className="mt-6">
          <FaqBlock title={faqGroup.title} items={faqGroup.items} isAr={isAr} delayMs={160 + i * 40} />
        </div>
      ))}

      <Reveal delayMs={220}>
        <div
          dir={isAr ? "rtl" : "ltr"}
          className="mt-10 rounded-3xl border border-[#1c3a2e]/15 bg-gradient-to-br from-[#1c3a2e] via-[#234d3c] to-[#1c3a2e] px-6 py-10 text-center shadow-xl sm:px-12"
        >
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            {content.ctas.map((cta, i) => (
              <Link
                key={cta.href + cta.label}
                href={cta.href}
                className={`inline-flex w-full max-w-xs items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold transition-transform hover:scale-[1.02] sm:w-auto ${
                  i === 0
                    ? "bg-[#f2d58c] text-[#1a3328]"
                    : "border-2 border-[#f2d58c]/50 text-[#f5f0e8] font-semibold"
                }`}
              >
                {cta.label}
              </Link>
            ))}
            <Link
              href="/contact?advisor=1"
              className={`inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full border-2 border-[#f2d58c]/30 px-7 py-3.5 text-sm font-semibold text-[#f5f0e8] transition-transform hover:scale-[1.02] sm:w-auto ${isAr ? "flex-row-reverse" : ""}`}
            >
              {labels.talkToAdvisor}
              <ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} aria-hidden />
            </Link>
          </div>
        </div>
      </Reveal>

      <FrameworkSection isAr={isAr} delayMs={260} />
      <QuickToolsSection isAr={isAr} delayMs={300} />
    </>
  );
}

export default function CoursePathwayPageContent({ slug }: { slug: CoursePathwaySlug }) {
  const { locale } = useI18n();
  const isAr = locale === "ar";

  const content = useMemo(() => getCoursePathwayContent(locale, slug), [locale, slug]);
  const allPathways = useMemo(() => getAllCoursePathways(locale), [locale]);
  const labels = useMemo(() => getPathwayLabels(locale), [locale]);

  return (
    <article className="relative mx-auto w-full max-w-5xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <PathwayBody content={content} isAr={isAr} labels={labels} />
      <OtherPathways
        currentSlug={slug}
        pathways={allPathways}
        isAr={isAr}
        title={content.exploreOtherTitle}
      />
    </article>
  );
}
