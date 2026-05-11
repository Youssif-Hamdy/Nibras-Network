"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/components/LocaleProvider";

export default function CoursesIntroSection() {
  const { ref, visible } = useReveal<HTMLElement>();
  const { t } = useI18n();

  return (
    <section
      ref={ref}
      id="courses-intro"
      className="relative bg-[#F5F0E8] py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Media */}
          <div className="order-1 lg:order-none flex flex-col gap-4">
            <span className="block w-24 h-1 rounded-full bg-gradient-to-r from-[#B8860B] to-[#1C3A2E] shadow-sm" />
            <div className="group relative rounded-2xl bg-white p-2 shadow-[0_18px_50px_rgba(28,58,46,0.1)] ring-1 ring-[#E8E0D0] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(184,134,11,0.12)] hover:ring-[#B8860B]/25">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/images/hero.jpeg"
                  alt={t("coursesIntro.videoAlt")}
                  fill
                  className="object-cover transition duration-500 group-hover:brightness-105 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                <button
                  type="button"
                  className="absolute inset-0 flex items-center justify-center group/play"
                  aria-label={t("coursesIntro.playVideo")}
                >
                  <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#F5F0E8]/95 text-[#1C3A2E] shadow-lg ring-2 ring-[#B8860B]/45 transition-transform duration-300 group-hover/play:scale-110">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ms-1"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-2 lg:order-none space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.35rem] font-bold text-[#1C3A2E] leading-tight">
              {t("coursesIntro.title")}
            </h2>
            <p className="text-[#4a5c54] text-base md:text-lg leading-relaxed">
              {t("coursesIntro.body")}
              <span className="font-semibold text-[#8B6508]">
                {t("coursesIntro.bodyBold")}
              </span>
              {t("coursesIntro.bodyAfter")}
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-full bg-[#1C3A2E] px-8 py-3.5 text-sm font-semibold text-[#F5F0E8] shadow-md shadow-[#1C3A2E]/22 ring-1 ring-[#B8860B]/30 transition-all duration-300 hover:bg-[#2D5A3D] hover:scale-[1.03] hover:shadow-lg hover:ring-[#D4A017]/45 active:scale-[0.98]"
            >
              {t("coursesIntro.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
