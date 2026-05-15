"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { Rocket } from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";
import { useReveal } from "@/hooks/useReveal";
import { getHowItWorksCopy, type HowStep } from "@/lib/i18n/howItWorksContent";

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

function Cta({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-[transform,box-shadow] duration-200 hover:scale-[1.02]";
  const styles =
    variant === "primary"
      ? "bg-[#1c3a2e] text-[#f5f0e8] shadow-lg shadow-[#1c3a2e]/20 hover:bg-[#2d5a3d]"
      : "border border-[#d4a017]/35 bg-[#fdfaf4] text-[#3a2e0a] shadow-md hover:border-[#b8954a]/55";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

function StepShell({
  children,
  delayMs,
  className = "",
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}) {
  return (
    <Reveal delayMs={delayMs ?? 0} className={`h-full min-h-0 ${className}`}>
      <article className="relative flex h-full min-h-[17rem] flex-col overflow-hidden rounded-2xl border border-[#e5dfd4] bg-white p-6 shadow-[0_2px_0_rgba(255,255,255,0.92)_inset,0_14px_44px_-30px_rgba(28,58,46,0.18)] sm:min-h-[19rem] sm:p-7">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#c9b06a]/85 via-[#d4c17a] to-[#c9b06a]/85"
          aria-hidden
        />
        <div className="relative flex min-h-0 flex-1 flex-col pt-1">{children}</div>
      </article>
    </Reveal>
  );
}

function ListRow({ children, isAr }: { children: ReactNode; isAr: boolean }) {
  return (
    <li
      className={`flex gap-2.5 text-[15px] leading-[1.72] text-[#3d5249] sm:text-[16px] ${isAr ? "flex-row-reverse text-end" : ""}`}
    >
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a89862]" aria-hidden />
      <span className="min-w-0 flex-1">{children}</span>
    </li>
  );
}

/** Body text only — CTAs rendered separately at card bottom */
function StepMain({ step, choosePayment, isAr }: { step: HowStep; choosePayment: string; isAr: boolean }) {
  const isPay = Boolean(step.paymentLines?.length);
  return (
    <>
      {step.paragraphs.map((p) => (
        <p key={p} className="text-[15px] leading-[1.75] text-[#3d5249] sm:text-[16px]">
          {p}
        </p>
      ))}
      {step.bullets?.length ? (
        <ul className="mt-3 space-y-2 ps-1">
          {step.bullets.map((b) => (
            <ListRow key={b} isAr={isAr}>
              {b}
            </ListRow>
          ))}
        </ul>
      ) : null}
      {isPay ? (
        <>
          <p className="mt-5 text-[15px] font-semibold text-[#1a3328] sm:text-[16px]">
            <strong>{choosePayment}</strong>
          </p>
          <div className="mt-3 space-y-2 text-[15px] leading-[1.75] text-[#3d5249] sm:text-[16px]">
            {step.paymentLines!.map((line) => (
              <p key={line.label}>
                {line.icon} <strong>{line.label}</strong>
              </p>
            ))}
          </div>
          {step.launchLine ? (
            <p className="mt-6 text-[15px] font-bold leading-relaxed text-[#8b4513] sm:text-[16px]">
              <strong>{step.launchLine}</strong>
            </p>
          ) : null}
          {step.paragraphsAfterPayment?.map((p) => (
            <p key={p} className="mt-3 text-[15px] leading-[1.75] text-[#3d5249] sm:text-[16px]">
              {p}
            </p>
          ))}
        </>
      ) : step.emphasis ? (
        <p className="mt-6 text-[15px] font-semibold leading-relaxed text-[#1a3328] sm:text-[16px]">
          <strong>{step.emphasis}</strong>
        </p>
      ) : null}
    </>
  );
}

function StepFooterCtas({ step }: { step: HowStep }) {
  if (!step.cta?.length) return null;
  return (
    <div className="mt-auto shrink-0 border-t border-[#efe8de] pt-5">
      <div className="flex flex-wrap gap-3">
        {step.cta.map((c) => (
          <Cta key={c.href + c.label} href={c.href}>
            {c.label}
          </Cta>
        ))}
      </div>
    </div>
  );
}

export default function HowItWorksPageContent() {
  const { locale } = useI18n();
  const isAr = locale === "ar";
  const copy = getHowItWorksCopy(locale);
  const steps = copy.steps;
  const gridSteps = steps.slice(0, 4);
  const delays = [0, 60, 120, 180];

  return (
    <div
      className="relative flex-1 overflow-x-hidden bg-[#ebe6dd] text-[#1a3328] antialiased"
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_440px_at_50%_-8%,rgba(255,252,246,0.88),transparent_55%),radial-gradient(760px_340px_at_100%_40%,rgba(212,193,140,0.09),transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-[calc(70px+1.5rem)] pb-20 sm:px-6 md:pt-[calc(80px+2rem)] md:pb-28">
        <Reveal>
          <header className="relative mb-10 overflow-hidden rounded-3xl border border-white/65 bg-gradient-to-b from-white to-[#f7f4ee] p-8 text-center shadow-[0_20px_50px_-34px_rgba(28,58,46,0.2)] sm:p-10">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#e8e0d4] bg-[#f7f4ee] text-[#1e3d30] shadow-inner">
              <Rocket className="h-8 w-8" strokeWidth={1.25} />
            </div>
            <p className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7a6f4a] sm:text-[11px]">
              {copy.kicker}
            </p>
            <h1 className="font-serif text-[1.75rem] font-semibold leading-tight tracking-tight text-[#1a3328] sm:text-4xl">
              {copy.title}
            </h1>
            <p className="mt-4 font-serif text-lg italic text-[#4d5f56] sm:text-xl">{copy.subtitle}</p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
          {gridSteps.map((step, idx) => (
            <StepShell key={step.title} delayMs={delays[idx] ?? 0} className="min-h-0">
              <h2 className="shrink-0 font-serif text-lg font-semibold text-[#1a3328] sm:text-xl">{step.title}</h2>
              <div className="my-4 h-px w-full shrink-0 bg-gradient-to-r from-transparent via-[#e0d9ce] to-transparent" />
              <div className="flex min-h-0 flex-1 flex-col">
                <div className="min-h-0 flex-1 space-y-1">
                  <StepMain step={step} choosePayment={copy.choosePayment} isAr={isAr} />
                </div>
                <StepFooterCtas step={step} />
              </div>
            </StepShell>
          ))}
        </div>

        <StepShell delayMs={220} className="mt-8 min-h-[16rem] lg:mt-10">
          <h2 className="shrink-0 font-serif text-xl font-semibold text-[#1a3328] sm:text-2xl">{copy.contactTitle}</h2>
          <div className="my-5 h-px w-full shrink-0 bg-gradient-to-r from-transparent via-[#e0d9ce] to-transparent" />
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 space-y-1">
              <p className="text-[15px] leading-[1.75] text-[#3d5249] sm:text-[16px]">
                <strong>{copy.whatsappLabel}</strong>{" "}
                <a
                  href="https://wa.me/201099493640"
                  className="font-medium text-[#6b5a2a] underline decoration-[#c4a85a]/45 underline-offset-[3px] hover:text-[#1a3328]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +201099493640
                </a>
              </p>
              <p className="mt-1 text-[14px] italic text-[#5c6f66]">{copy.whatsappNote}</p>
              <p className="mt-5 text-[15px] leading-[1.75] text-[#3d5249] sm:text-[16px]">
                <strong>{copy.emailLabel}</strong>{" "}
                <a
                  href="mailto:nibrasnetwork55@gmail.com"
                  className="font-medium text-[#6b5a2a] underline decoration-[#c4a85a]/45 underline-offset-[3px] hover:text-[#1a3328]"
                >
                  nibrasnetwork55@gmail.com
                </a>
              </p>
              <p className="mt-1 text-[14px] italic text-[#5c6f66]">{copy.emailNote}</p>
              <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#e0d9ce] to-transparent" />
              <h2 className="font-serif text-xl font-semibold text-[#1a3328] sm:text-2xl">{copy.finalTitle}</h2>
            </div>
            <div className="mt-auto shrink-0 border-t border-[#efe8de] pt-5">
              <Cta href="/book-trial" variant="primary">
                {copy.finalCta}
              </Cta>
            </div>
          </div>
        </StepShell>
      </div>
    </div>
  );
}
