"use client";

import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/components/LocaleProvider";

const features = [
  {
    titleKey: "why.f1.title",
    descKey: "why.f1.desc",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 mx-auto text-[#B8860B]">
        <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="2" />
        <path d="M20 32h24M32 20v24" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <circle cx="32" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="54" cy="32" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="32" cy="54" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="10" cy="32" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M38 10l10 10M26 10L16 20M38 54l10-10M26 54L16 44" stroke="currentColor" strokeWidth="1.3" opacity="0.45" />
      </svg>
    ),
  },
  {
    titleKey: "why.f2.title",
    descKey: "why.f2.desc",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 mx-auto text-[#B8860B]">
        <rect x="12" y="14" width="12" height="36" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="26" y="10" width="12" height="40" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="40" y="18" width="12" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M16 22h4M30 18h4M44 26h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
      </svg>
    ),
  },
  {
    titleKey: "why.f3.title",
    descKey: "why.f3.desc",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 mx-auto text-[#B8860B]">
        <circle cx="24" cy="22" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M12 48c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="42" cy="24" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M34 48c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
      </svg>
    ),
  },
  {
    titleKey: "why.f4.title",
    descKey: "why.f4.desc",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 mx-auto text-[#B8860B]">
        <rect x="14" y="12" width="36" height="44" rx="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="30" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M26 46h12M26 52h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M28 56l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    titleKey: "why.f5.title",
    descKey: "why.f5.desc",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 mx-auto text-[#B8860B]">
        <rect x="12" y="20" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M12 28h40" stroke="currentColor" strokeWidth="2" />
        <path d="M44 16v8M36 14v10M28 12v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titleKey: "why.f6.title",
    descKey: "why.f6.desc",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 mx-auto text-[#B8860B]">
        <circle cx="32" cy="30" r="16" stroke="currentColor" strokeWidth="2" />
        <path d="M48 30c0 8.837-7.163 16-16 16-2.21 0-4.322-.45-6.24-1.26L14 48l2.52-11.52A15.9 15.9 0 0 1 16 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
        <path d="M22 26h12M22 33h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="46" cy="18" r="4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function WhyUsSection() {
  const { ref, visible } = useReveal<HTMLElement>();
  const { t } = useI18n();

  return (
    <section
      ref={ref}
      id="why-us"
      className="bg-[#EDE7D9] py-20 md:py-28 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <header
          className={`text-center mb-14 md:mb-18 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1C3A2E] mb-4">
            {t("why.title")}
          </h2>
          <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#D4A017] to-[#B8860B]" />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {features.map((f, i) => (
            <article
              key={f.titleKey}
              className={`text-center px-2 transition-all duration-700 ease-out hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: visible ? `${120 + i * 70}ms` : "0ms",
              }}
            >
              <div className="mb-5 drop-shadow-sm">{f.icon}</div>
              <h3 className="font-serif text-lg md:text-xl font-bold text-[#1C3A2E] mb-3">
                {t(f.titleKey)}
              </h3>
              <p className="text-[#4a5c54] text-sm md:text-[15px] leading-relaxed max-w-xs mx-auto">
                {t(f.descKey)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
