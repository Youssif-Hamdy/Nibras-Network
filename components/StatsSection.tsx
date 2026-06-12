"use client";

import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/components/LocaleProvider";

function useCountUp(target: number, enabled: boolean, durationMs = 1600) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;
    let frame: number;
    const step = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const p = Math.min((t - startRef.current) / durationMs, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [enabled, target, durationMs]);

  return value;
}

function StatCell({
  icon,
  end,
  prefix = "+",
  suffix = "",
  label,
  show,
  delayClass,
  numberLocale,
}: {
  icon: React.ReactNode;
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  show: boolean;
  delayClass: string;
  numberLocale: string;
}) {
  const n = useCountUp(end, show);
  const formatted =
    end >= 1000 ? n.toLocaleString(numberLocale) : String(n);

  return (
    <div
      className={`relative flex flex-col items-center text-center py-8 px-4 transition-all duration-700 ease-out ${delayClass} ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="mb-4 text-[#B8860B]">{icon}</div>
      <p className="text-3xl md:text-4xl font-bold tabular-nums text-[#1C3A2E]" dir="ltr">
        {prefix}
        {formatted}
        {suffix}
      </p>
      <p className="mt-2 text-sm md:text-base font-medium text-[#1C3A2E]/85">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const { ref, visible } = useReveal<HTMLElement>();
  const { locale, t } = useI18n();
  const numberLocale = "en-US";

  return (
    <section
      ref={ref}
      id="stats"
      className="bg-[#F5F0E8] py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-[#1C3A2E]/10 divide-dashed lg:divide-x rtl:lg:divide-x-reverse">
          <StatCell
            show={visible}
            delayClass="delay-[0ms]"
            end={2000}
            numberLocale={numberLocale}
            label={t("stats.students")}
            icon={
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden>
                <path d="M24 8l-14 8 14 8 14-8-14-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M10 18v8l14 7 14-7v-8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M18 36v6l6 3 6-3v-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            }
          />
          <StatCell
            show={visible}
            delayClass="delay-[80ms]"
            end={1000}
            numberLocale={numberLocale}
            label={t("stats.families")}
            icon={
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden>
                <path d="M10 22h28v18H10z" stroke="currentColor" strokeWidth="2" />
                <path d="M18 22v-6a6 6 0 0 1 12 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="24" cy="34" r="3" stroke="currentColor" strokeWidth="2" />
              </svg>
            }
          />
          <StatCell
            show={visible}
            delayClass="delay-[160ms]"
            end={25}
            numberLocale={numberLocale}
            label={t("stats.countries")}
            icon={
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden>
                <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
                <path d="M6 20h36M8 30h32M24 6c4 8 4 28 0 36" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
              </svg>
            }
          />
          <StatCell
            show={visible}
            delayClass="delay-[240ms]"
            end={100}
            numberLocale={numberLocale}
            label={t("stats.teachers")}
            icon={
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden>
                <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="2" />
                <path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M30 22l8 4v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
