"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/components/LocaleProvider";
import { getTutorsPage } from "@/lib/tutors";

function useItemsPerView() {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const apply = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerView(3);
      else if (w >= 640) setPerView(2);
      else setPerView(1);
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  return perView;
}

export default function TutorsCarouselSection() {
  const { ref, visible } = useReveal<HTMLElement>();
  const { locale, t: tr } = useI18n();
  const perView = useItemsPerView();
  const [index, setIndex] = useState(0);

  const tutors = useMemo(() => getTutorsPage(locale).tutors.slice(0, 5), [locale]);

  const pages = useMemo(() => {
    const out: (typeof tutors)[] = [];
    for (let i = 0; i < tutors.length; i += perView) {
      out.push(tutors.slice(i, i + perView));
    }
    return out;
  }, [perView, tutors]);

  const maxIndex = Math.max(0, pages.length - 1);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  useEffect(() => {
    const id = window.setInterval(next, 5200);
    return () => window.clearInterval(id);
  }, [next]);

  return (
    <section
      ref={ref}
      id="tutors"
      className="bg-[#EDE7D9] py-20 md:py-28 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <header
          className={`text-center mb-12 md:mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1C3A2E] mb-4">
            {tr("tutors.title")}
          </h2>
          <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#D4A017] to-[#B8860B]" />
        </header>

        <div className="relative">
          <button
            type="button"
            onClick={prev}
            className="hidden sm:flex absolute start-0 top-1/2 -translate-y-1/2 z-10 -translate-x-2 md:-translate-x-4 rtl:translate-x-2 md:rtl:translate-x-4 h-11 w-11 items-center justify-center rounded-full bg-[#FDFAF4] text-[#1C3A2E] shadow-lg ring-1 ring-[#D4A017]/25 hover:bg-[#F5F0E8] hover:ring-[#B8860B]/40 transition-colors"
            aria-label={tr("tutors.prev")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className="hidden sm:flex absolute end-0 top-1/2 -translate-y-1/2 z-10 translate-x-2 md:translate-x-4 rtl:-translate-x-2 md:rtl:-translate-x-4 h-11 w-11 items-center justify-center rounded-full bg-[#FDFAF4] text-[#1C3A2E] shadow-lg ring-1 ring-[#D4A017]/25 hover:bg-[#F5F0E8] hover:ring-[#B8860B]/40 transition-colors"
            aria-label={tr("tutors.next")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="overflow-hidden mx-auto sm:mx-10 md:mx-14 rounded-2xl" dir="ltr">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] will-change-transform"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {pages.map((group, pi) => (
                <div
                  key={pi}
                  className="min-w-full shrink-0 flex flex-col sm:flex-row gap-4 md:gap-5 px-1"
                >
                  {group.map((tutor) => (
                    <article
                      key={tutor.id}
                      className="flex-1 min-w-0 flex flex-col rounded-3xl border border-[#E8E0D0] bg-white p-6 shadow-sm hover:shadow-xl hover:shadow-[#B8860B]/10 hover:border-[#B8860B]/35 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex justify-center mb-5">
                        <div
                          className={`h-24 w-24 rounded-full bg-gradient-to-br ${tutor.tint} flex items-center justify-center text-2xl font-serif font-bold text-[#F5F0E8] ring-4 ring-[#F5F0E8] shadow-md`}
                          aria-hidden
                        >
                          {tutor.initial}
                        </div>
                      </div>
                      <h3 className={`text-center font-bold text-[#1C3A2E] text-sm md:text-base mb-1 ${locale === "ar" ? "" : "uppercase tracking-wide"}`}>
                        {tutor.name}
                      </h3>
                      <p className="text-center text-xs font-medium text-[#B8860B] mb-3">{tutor.role}</p>
                      <p className={`text-center text-[#5c6e66] text-sm flex-1 mb-5 ${locale === "ar" ? "leading-[1.85]" : "leading-relaxed"}`}>
                        {tutor.bio}
                      </p>
                      <Link
                        href="/tutors"
                        className="mx-auto inline-flex rounded-full bg-[#B8860B] px-5 py-2.5 text-xs md:text-sm font-semibold text-[#FDFAF4] shadow-sm shadow-[#B8860B]/20 ring-1 ring-[#D4A017]/35 hover:bg-[#D4A017] hover:scale-[1.03] transition-all duration-200"
                      >
                        {tr("tutors.readMore")}
                      </Link>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-[#B8860B]" : "w-2 bg-[#1C3A2E]/20 hover:bg-[#B8860B]/45"
                }`}
                aria-label={`${tr("tutors.slide")} ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/tutors"
            className="inline-flex rounded-full bg-[#1C3A2E] px-10 py-3.5 text-sm font-semibold text-[#F5F0E8] shadow-md shadow-[#1C3A2E]/25 ring-1 ring-[#B8860B]/30 hover:bg-[#2D5A3D] hover:scale-[1.03] hover:ring-[#D4A017]/45 transition-all duration-300"
          >
            {tr("tutors.seeAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}
