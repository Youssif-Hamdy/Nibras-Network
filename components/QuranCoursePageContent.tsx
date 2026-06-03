"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";
import { useReveal } from "@/hooks/useReveal";
import { getCourse } from "@/lib/courses/catalog";
import { ARABIC_PROGRAM_SLUGS } from "@/lib/courses/arabic";
import { ISLAMIC_PROGRAM_SLUGS } from "@/lib/courses/islamic";
import { SPECIAL_PROGRAM_SLUGS } from "@/lib/courses/special";
import { getQuranCourseUi } from "@/lib/i18n/quranCourseUi";

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
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${className} ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  id,
  kicker,
  title,
  isAr,
}: {
  id: string;
  kicker: string;
  title: string;
  isAr: boolean;
}) {
  const hf = isAr ? "font-sans" : "font-serif";
  return (
    <div id={id} className="scroll-mt-28">
      <p
        className={`mb-2 font-sans text-[10px] font-semibold text-[#7a6f4a] sm:text-[11px] ${
          isAr ? "tracking-normal" : "uppercase tracking-[0.2em]"
        }`}
      >
        {kicker}
      </p>
      <h2 className={`text-xl font-semibold tracking-tight text-[#1a3328] sm:text-2xl ${hf}`}>
        {title}
      </h2>
    </div>
  );
}

function HeroGallery({ images, title, accent }: { images: string[]; title: string; accent: string }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/70 bg-[#f0ebe2] shadow-[0_24px_60px_-28px_rgba(28,58,46,0.35)] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[420px]">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${title} — ${i + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={i === 0}
        />
      ))}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a3328]/50 via-transparent to-transparent"
        aria-hidden
      />
      {images.length > 1 && (
        <div className="absolute bottom-4 start-1/2 flex -translate-x-1/2 gap-2 rtl:translate-x-1/2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Image ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === idx ? "w-6" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              style={i === idx ? { backgroundColor: accent } : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FlowSteps({ steps, accent }: { steps: string[]; accent: string }) {
  return (
    <ol className="space-y-2">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-[#3d5249] sm:text-[15px]">
          <span
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-sans text-[11px] font-bold text-white"
            style={{ backgroundColor: accent }}
            aria-hidden
          >
            {i + 1}
          </span>
          <span className="min-w-0 flex-1 pt-0.5">{step}</span>
        </li>
      ))}
    </ol>
  );
}

export default function QuranCoursePageContent({ slug }: { slug: string }) {
  const { locale } = useI18n();
  const isAr = locale === "ar";
  const hf = isAr ? "font-sans" : "font-serif";
  const ui = useMemo(() => getQuranCourseUi(locale), [locale]);
  const course = useMemo(() => getCourse(slug, locale), [slug, locale]);

  useEffect(() => {
    if (!course) return;
    document.title = `${course.title} | Nibras Network`;
  }, [course]);

  if (!course) return null;

  const accent = course.accent;
  const isArabicProgram = ARABIC_PROGRAM_SLUGS.includes(slug);
  const isIslamicProgram = ISLAMIC_PROGRAM_SLUGS.includes(slug);
  const isSpecialProgram = SPECIAL_PROGRAM_SLUGS.includes(slug);
  const programKicker = isArabicProgram
    ? isAr
      ? "برامج اللغة العربية"
      : "Arabic Language Programs"
    : isIslamicProgram
      ? isAr
        ? "برامج الدراسات الإسلامية"
        : "Islamic Studies Programs"
      : isSpecialProgram
        ? isAr
          ? "البرامج الخاصة"
          : "Special Programs"
        : ui.programsKicker;

  const navSections = [
    { id: "overview", label: ui.navOverview },
    { id: "curriculum", label: ui.navCurriculum },
    { id: "methods", label: ui.navMethods },
    { id: "stories", label: ui.navStories },
    ...(course.faqs?.length ? [{ id: "faqs", label: isAr ? "الأسئلة الشائعة" : "FAQs" }] : []),
    { id: "enroll", label: ui.navEnroll },
  ];

  return (
    <div
      className="relative flex-1 overflow-x-hidden bg-[#F7F5F0] text-[#1A1A14]"
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_-5%,rgba(255,252,246,0.95),transparent_55%),radial-gradient(600px_300px_at_100%_20%,rgba(212,193,140,0.12),transparent_50%)]"
        aria-hidden
      />

      {/* Hero */}
      <section className="border-b border-[#D4A017]/20 px-4 pb-14 pt-[78px] sm:px-6 md:pb-20 md:pt-[88px]">
        <div className="mx-auto max-w-6xl">
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-[12px] text-[#61746C]">
            <Link href="/" className="hover:text-[#B8860B] transition-colors">
              {ui.home}
            </Link>
            <ChevronRight
              size={12}
              className={`opacity-50 ${isAr ? "rotate-180" : ""}`}
              aria-hidden
            />
            <Link href="/#courses" className="hover:text-[#B8860B] transition-colors">
              {ui.courses}
            </Link>
            <ChevronRight
              size={12}
              className={`opacity-50 ${isAr ? "rotate-180" : ""}`}
              aria-hidden
            />
            <span className="font-medium text-[#1C3A2E]">{course.title}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div>
                <p
                  className={`mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a017]/25 bg-[#fdfaf4] px-4 py-1.5 font-sans text-[10px] font-semibold text-[#7a6f4a] sm:text-[11px] ${
                    isAr ? "tracking-normal" : "uppercase tracking-[0.18em]"
                  }`}
                >
                  <BookOpen className="h-3.5 w-3.5" style={{ color: accent }} aria-hidden />
                  {programKicker}
                </p>
                <h1
                  className={`mb-4 text-[1.75rem] font-semibold leading-[1.12] tracking-tight text-[#1a3328] sm:text-4xl md:text-[2.5rem] ${hf}`}
                >
                  {course.title}
                </h1>
                <p className="mb-6 text-[15px] leading-relaxed text-[#4d5f56] sm:text-lg">
                  {course.tagline}
                </p>
                <p className="mb-8 text-[14px] leading-[1.75] text-[#61746C] sm:text-[15px]">
                  {course.definition}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/book-trial"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ backgroundColor: accent }}
                  >
                    {ui.bookTrial}
                    <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 rounded-full border border-[#d4a017]/35 bg-white/80 px-6 py-3 text-[13px] font-semibold text-[#1a3328] transition-colors hover:border-[#B8860B]/50 hover:bg-white"
                  >
                    {ui.viewPricing}
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delayMs={120}>
              <HeroGallery images={course.images} title={course.title} accent={accent} />
            </Reveal>
          </div>

          {/* Quick nav */}
          <div className="mt-10 flex flex-wrap gap-2 border-t border-[#D4A017]/15 pt-8">
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-[#e8e0d4] bg-white/70 px-4 py-2 text-[12px] font-medium text-[#3d5249] transition-colors hover:border-[#d4a017]/40 hover:text-[#1a3328]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        {/* Teacher & Philosophy */}
        <section id="overview" className="py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <Reveal>
              <div className="rounded-3xl border border-[#e8e4dc]/80 bg-white/90 p-6 shadow-sm sm:p-8">
                <SectionHeading
                  id="teacher"
                  kicker={ui.teacherKicker}
                  title={ui.teacherTitle}
                  isAr={isAr}
                />
                <ul className="mt-5 space-y-2.5">
                  {course.teacher.profile.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[14px] leading-relaxed text-[#3d5249] sm:text-[15px]"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: accent }}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <blockquote className="mt-6 rounded-2xl border-s-4 bg-[#faf9f6] py-4 pe-4 ps-4 text-[14px] italic leading-relaxed text-[#243d32] sm:text-[15px]" style={{ borderColor: accent }}>
                  <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-wide text-[#6b7a72] not-italic">
                    {course.teacher.whyLabel}
                  </p>
                  &ldquo;{course.teacher.whyQuote}&rdquo;
                </blockquote>
              </div>
            </Reveal>
            <Reveal delayMs={80}>
              <div className="rounded-3xl border border-[#e8e4dc]/80 bg-gradient-to-br from-white to-[#f5f2eb] p-6 shadow-sm sm:p-8">
                <SectionHeading
                  id="philosophy"
                  kicker={ui.philosophyKicker}
                  title={ui.philosophyTitle}
                  isAr={isAr}
                />
                <blockquote
                  className={`mt-4 text-[15px] font-medium leading-[1.7] text-[#1a3328] sm:text-[16px] ${hf}`}
                >
                  &ldquo;{course.philosophy.quote}&rdquo;
                </blockquote>
                <ul className="mt-6 space-y-2">
                  {course.philosophy.beliefs.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-[14px] text-[#3d5249] sm:text-[15px]"
                    >
                      <Sparkles className="mt-1 h-3.5 w-3.5 shrink-0 text-[#b8954a]" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum" className="py-10 md:py-14">
          <Reveal>
            <SectionHeading
              id="curriculum-heading"
              kicker={ui.curriculumKicker}
              title={ui.curriculumTitle}
              isAr={isAr}
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {course.curriculum.phases.map((phase, i) => (
              <Reveal key={phase.title} delayMs={i * 60}>
                <div className="h-full rounded-2xl border border-[#e8e4dc] bg-white/85 p-5 transition-shadow hover:shadow-md sm:p-6">
                  <h3
                    className="mb-3 font-sans text-[12px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: accent }}
                  >
                    {phase.title}
                  </h3>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="text-[14px] leading-relaxed text-[#3d5249] sm:text-[15px]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delayMs={100}>
            <p
              className={`mt-8 rounded-2xl border border-[#d4a017]/20 bg-[#fdfaf4] px-6 py-5 text-center text-[15px] font-semibold text-[#1a3328] sm:text-[16px] ${hf}`}
            >
              {ui.byTheEnd}{" "}
              {course.curriculum.outcome}
            </p>
          </Reveal>
        </section>

        {/* Methods */}
        <section id="methods" className="py-10 md:py-14">
          <Reveal>
            <SectionHeading
              id="methods-heading"
              kicker={ui.methodsKicker}
              title={ui.methodsTitle}
              isAr={isAr}
            />
          </Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {course.methods.map((method, i) => (
              <Reveal key={method.title} delayMs={i * 70}>
                <article className="flex h-full flex-col rounded-3xl border border-[#e8e4dc] bg-white/90 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex items-start justify-between gap-2">
                    <h3 className={`text-lg font-semibold text-[#1a3328] ${hf}`}>{method.title}</h3>
                    {method.badge && (
                      <span
                        className="shrink-0 rounded-full px-2.5 py-1 font-sans text-[10px] font-semibold text-white"
                        style={{ backgroundColor: accent }}
                      >
                        {method.badge}
                      </span>
                    )}
                  </div>
                  <FlowSteps steps={method.flow} accent={accent} />
                  <div className="mt-6 border-t border-[#eee8dc] pt-5">
                    <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-wide text-[#6b7a72]">
                      {method.whyTitle}
                    </p>
                    <ul className="space-y-1.5">
                      {method.whyPoints.map((p) => (
                        <li key={p} className="text-[13px] leading-relaxed text-[#3d5249]">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Techniques */}
        <section className="py-10 md:py-14">
          <Reveal>
            <SectionHeading
              id="techniques"
              kicker={ui.techniquesKicker}
              title={ui.techniquesTitle}
              isAr={isAr}
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {course.techniques.map((tech, i) => (
              <Reveal key={tech.title} delayMs={i * 50}>
                <div className="rounded-2xl border border-[#e8e4dc]/90 bg-[#faf9f6] p-5 sm:p-6">
                  <h3 className={`mb-3 text-base font-semibold text-[#1a3328] ${hf}`}>{tech.title}</h3>
                  <ul className="space-y-2">
                    {tech.points.map((p) => (
                      <li key={p} className="flex gap-2 text-[13px] text-[#3d5249] sm:text-[14px]">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: accent }}
                          aria-hidden
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Audience & Progression */}
        <section className="py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-[#e8e4dc] bg-white/90 p-6 sm:p-8">
                <SectionHeading
                  id="audience"
                  kicker={ui.audienceKicker}
                  title={ui.audienceTitle}
                  isAr={isAr}
                />
                <ul className="mt-5 space-y-2">
                  {course.audience.perfectFor.map((item) => (
                    <li key={item} className="flex gap-2 text-[14px] text-[#3d5249] sm:text-[15px]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                {course.audience.readyIf && (
                  <>
                    <h3 className="mt-6 font-sans text-[12px] font-semibold uppercase tracking-wide text-[#6b7a72]">
                      {ui.readyIf}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {course.audience.readyIf.map((item) => (
                        <li key={item} className="text-[14px] text-[#3d5249]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {course.audience.prerequisites && (
                  <>
                    <h3 className="mt-6 font-sans text-[12px] font-semibold uppercase tracking-wide text-[#6b7a72]">
                      {ui.prerequisites}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {course.audience.prerequisites.map((item) => (
                        <li key={item} className="text-[14px] text-[#3d5249]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {course.audience.honestTruth && (
                  <p className="mt-6 rounded-xl bg-[#fff8f0] p-4 text-[14px] italic leading-relaxed text-[#5c4a1a] border border-[#d4a017]/20">
                    {course.audience.honestTruth}
                  </p>
                )}
                {course.audience.scholarNote && (
                  <p className="mt-4 text-[14px] font-medium leading-relaxed text-[#1a3328]">
                    {course.audience.scholarNote}
                  </p>
                )}
              </div>
            </Reveal>
            <Reveal delayMs={80}>
              <div className="rounded-3xl border border-[#e8e4dc] bg-gradient-to-b from-[#1a3328] to-[#243d32] p-6 text-white sm:p-8">
                <div className="mb-6 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-[#d4c17a]" aria-hidden />
                  <div>
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-wide text-[#d4c17a]/90">
                      {ui.progressionKicker}
                    </p>
                    <h2 className={`text-lg font-semibold ${hf}`}>{ui.progressionTitle}</h2>
                  </div>
                </div>
                <ol className="space-y-4">
                  {course.progression.map((line, i) => (
                    <li key={line} className="relative ps-8">
                      <span
                        className="absolute start-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#d4c17a]/20 text-[11px] font-bold text-[#d4c17a]"
                        aria-hidden
                      >
                        {i + 1}
                      </span>
                      <p className="text-[14px] leading-relaxed text-white/90 sm:text-[15px]">{line}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Success stories */}
        <section id="stories" className="py-10 md:py-14">
          <Reveal>
            <SectionHeading
              id="stories-heading"
              kicker={ui.storiesKicker}
              title={ui.storiesTitle}
              isAr={isAr}
            />
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {course.stories.map((story, i) => (
              <Reveal key={story.name} delayMs={i * 80}>
                <article className="group relative overflow-hidden rounded-3xl border border-[#B8860B]/20 bg-white/95 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-8">
                  <Heart
                    className="mb-4 h-5 w-5 text-[#B8860B]/60 transition-colors group-hover:text-[#B8860B]"
                    aria-hidden
                  />
                  <blockquote className="mb-4 text-[15px] leading-[1.75] text-[#243d32] sm:text-[16px]">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <p className={`font-semibold text-[#1a3328] ${hf}`}>{story.name}</p>
                  <ul className="mt-2 space-y-1">
                    {story.meta.map((m) => (
                      <li key={m} className="font-sans text-[12px] text-[#6b7a72]">
                        {m}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Includes */}
        <section className="py-10 md:py-14">
          <Reveal>
            <SectionHeading
              id="includes"
              kicker={ui.includesKicker}
              title={ui.includesTitle}
              isAr={isAr}
            />
          </Reveal>
          <Reveal delayMs={60}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {course.includes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-[#e8e4dc]/80 bg-white/80 px-4 py-3.5 text-[14px] text-[#3d5249] transition-colors hover:border-[#d4a017]/30"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#B8860B]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* FAQs */}
        {course.faqs?.length ? (
          <section id="faqs" className="py-10 md:py-14">
            <Reveal>
              <SectionHeading
                id="faqs-heading"
                kicker={isAr ? "إجابات واضحة قبل التسجيل" : "Clear answers before enrollment"}
                title={isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
                isAr={isAr}
              />
            </Reveal>
            <div className="mt-8 space-y-3">
              {course.faqs.map((faq, i) => (
                <Reveal key={faq.question} delayMs={i * 45}>
                  <details className="group rounded-2xl border border-[#e8e4dc] bg-white/90 p-5 open:border-[#d4a017]/35">
                    <summary className="cursor-pointer list-none text-[14px] font-semibold text-[#1a3328] sm:text-[15px]">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-[14px] leading-relaxed text-[#4d5f56] sm:text-[15px]">{faq.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        {/* Enroll / Pricing */}
        <section id="enroll" className="py-10 md:py-14">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-[#d4a017]/30 bg-gradient-to-br from-[#fdfaf4] via-white to-[#f0f4f1] p-6 shadow-lg sm:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 flex-1">
                  <p className="mb-3 inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7a6f4a]">
                    <Users className="h-4 w-4 text-[#b8954a]" aria-hidden />
                    {ui.offerKicker}
                  </p>
                  <div className="space-y-2 font-mono text-[13px] leading-relaxed text-[#1a3328] sm:text-[14px]">
                    {course.offer.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  {course.offer.subcta && (
                    <p className={`mt-4 text-[15px] italic text-[#4d5f56] ${hf}`}>
                      {course.offer.subcta}
                    </p>
                  )}
                  {course.pricing && (
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {course.pricing.promo && (
                        <div>
                          <h4 className="mb-2 font-sans text-[11px] font-bold uppercase tracking-wide text-[#6b7a72]">
                            {ui.promoPricing}
                          </h4>
                          <ul className="space-y-1 font-mono text-[12px] text-[#3d5249] sm:text-[13px]">
                            {course.pricing.promo.map((l) => (
                              <li key={l}>{l}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {course.pricing.regular && (
                        <div>
                          <h4 className="mb-2 font-sans text-[11px] font-bold uppercase tracking-wide text-[#6b7a72]">
                            {ui.regularPricing}
                          </h4>
                          <ul className="space-y-1 font-mono text-[12px] text-[#3d5249] sm:text-[13px]">
                            {course.pricing.regular.map((l) => (
                              <li key={l}>{l}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {course.pricing.sample && (
                        <div>
                          <h4 className="mb-2 font-sans text-[11px] font-bold uppercase tracking-wide text-[#6b7a72]">
                            {ui.monthlySamples}
                          </h4>
                          <ul className="space-y-1 font-mono text-[12px] text-[#3d5249] sm:text-[13px]">
                            {course.pricing.sample.map((l) => (
                              <li key={l}>{l}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link
                    href="/book-trial"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-center text-[14px] font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: accent }}
                  >
                    {ui.bookTrial}
                    <ArrowRight size={18} className={isAr ? "rotate-180" : ""} />
                  </Link>
                  <Link
                    href="/contact?advisor=1"
                    className="inline-flex items-center justify-center rounded-full border border-[#1a3328]/15 bg-white px-8 py-4 text-[14px] font-semibold text-[#1a3328] transition-colors hover:bg-[#faf9f6]"
                  >
                    {ui.talkAdvisor}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
