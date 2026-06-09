"use client";

import Link from "next/link";
import { useI18n } from "@/components/LocaleProvider";

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 10h20" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 14h10M9 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    bg: "#1C3A2E",
    tagKey: "pillars.p1.tag",
    titleKey: "pillars.p1.title",
    descKey: "pillars.p1.desc",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M14 9v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
      </svg>
    ),
    bg: "#2D5A3D",
    tagKey: "pillars.p2.tag",
    titleKey: "pillars.p2.title",
    descKey: "pillars.p2.desc",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="20" cy="10" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 22c0-3.314 2.686-6 6-6h8c3.314 0 6 2.686 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    bg: "#1C3A2E",
    tagKey: "pillars.p3.tag",
    titleKey: "pillars.p3.title",
    descKey: "pillars.p3.desc",
  },
];

export default function PillarsSection() {
  const { t } = useI18n();

  return (
    <section id="pillars" className="bg-[#F5F0E8] py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="block w-16 h-px bg-gradient-to-r from-transparent to-[#B8860B]/60 rtl:bg-gradient-to-l" />
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1l2 6h6l-5 3.5 2 6L9 13l-5 3.5 2-6L1 7h6z" fill="#B8860B" fillOpacity="0.8"/>
            </svg>
            <span className="block w-16 h-px bg-gradient-to-l from-transparent to-[#B8860B]/60 rtl:bg-gradient-to-r" />
          </div>

          <p className="text-xs tracking-[0.25em] uppercase text-[#B8860B] font-medium mb-3">
            {t("pillars.kicker")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1C3A2E] mb-4">
            {t("pillars.title")}
          </h2>
          <p className="text-[#6a6a6a] text-base max-w-md mx-auto leading-relaxed">
            {t("pillars.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-stretch">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-3xl border border-[#E8E0D0] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B8860B]/30 hover:shadow-xl hover:shadow-[#B8860B]/8"
            >
              <div className="absolute top-0 end-0 w-32 h-32 bg-[#B8860B]/5 rounded-full -translate-y-1/2 translate-x-1/2 rtl:-translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 text-white transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: p.bg }}
              >
                {p.icon}
              </div>

              <span className="inline-block text-[10px] tracking-widest uppercase font-semibold text-[#B8860B] bg-[#B8860B]/10 px-3 py-1 rounded-full mb-3 w-fit">
                {t(p.tagKey)}
              </span>

              <h3 className="font-serif text-xl font-bold text-[#1C3A2E] mb-3">
                {t(p.titleKey)}
              </h3>

              <p className="flex-1 text-[#6a6a6a] text-sm leading-relaxed">
                {t(p.descKey)}
              </p>

              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-1.5 border-t border-[#E8E0D0] pt-5 text-sm font-semibold text-[#1C3A2E] transition-colors duration-200 group-hover:text-[#B8860B]"
              >
                {t("pillars.explore")}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden>
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#B8860B]/0 via-[#B8860B] to-[#B8860B]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-3xl" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
