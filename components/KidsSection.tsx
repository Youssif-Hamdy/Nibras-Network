"use client";

import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/components/LocaleProvider";

const getKidsData = (t: any) => [
  {
    id: 1,
    image: "/images/kides/kid1.jpeg",
    alt: "Kid 1",
    titleKey: "kids.kid1.title",
    descKey: "kids.kid1.desc",
  },
  {
    id: 2,
    image: "/images/kides/kid2.jpeg",
    alt: "Kid 2",
    titleKey: "kids.kid2.title",
    descKey: "kids.kid2.desc",
  },
  {
    id: 3,
    image: "/images/kides/kid3.jpeg",
    alt: "Kid 3",
    titleKey: "kids.kid3.title",
    descKey: "kids.kid3.desc",
  },
  {
    id: 4,
    image: "/images/kides/kid4.jpeg",
    alt: "Kid 4",
    titleKey: "kids.kid4.title",
    descKey: "kids.kid4.desc",
  },
  {
    id: 5,
    image: "/images/kides/kid5.jpeg",
    alt: "Kid 5",
    titleKey: "kids.kid5.title",
    descKey: "kids.kid5.desc",
  },
  {
    id: 6,
    image: "/images/kides/kid6.jpeg",
    alt: "Kid 6",
    titleKey: "kids.kid6.title",
    descKey: "kids.kid6.desc",
  },
];

export default function KidsSection() {
  const { t } = useI18n();
  const kids = getKidsData(t);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? kids.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === kids.length - 1 ? 0 : prev + 1));
  };

  const currentKid = kids[currentIndex];

  return (
    <section className="bg-gradient-to-b from-white to-[#F5F0E8] py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="block w-16 h-px bg-gradient-to-r from-transparent to-[#B8860B]/60 rtl:bg-gradient-to-l" />
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1l2 6h6l-5 3.5 2 6L9 13l-5 3.5 2-6L1 7h6z" fill="#B8860B" fillOpacity="0.8"/>
            </svg>
            <span className="block w-16 h-px bg-gradient-to-l from-transparent to-[#B8860B]/60 rtl:bg-gradient-to-r" />
          </div>

          <p className="text-xs tracking-[0.25em] uppercase text-[#B8860B] font-medium mb-3">
            {t("kids.kicker")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1C3A2E] mb-4">
            {t("kids.title")}
          </h2>
          <p className="text-[#6a6a6a] text-lg max-w-2xl mx-auto">
            {t("kids.subtitle")}
          </p>
        </div>

        {/* Main Card */}
        <div className="mb-12">
          <div className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl">
            {/* Card Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              {/* Image Side */}
              <div className="flex justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  {/* Circular Image Container */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#B8860B]/20 to-[#1C3A2E]/10 p-2">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#B8860B]/30 group-hover:border-[#B8860B] transition-all duration-500">
                      <Image
                        src={currentKid.image}
                        alt={currentKid.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Animated Circle Border */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

                  {/* Number Badge */}
                  <div className="absolute -bottom-4 -start-4 w-16 h-16 bg-[#B8860B] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {currentIndex + 1}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1C3A2E] mb-4">
                  {t(currentKid.titleKey)}
                </h3>
                <p className="text-lg text-[#6a6a6a] leading-relaxed mb-8">
                  {t(currentKid.descKey)}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#B8860B] rounded-full" />
                    <span className="text-[#1C3A2E] font-medium">{t("kids.badge1")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#B8860B] rounded-full" />
                    <span className="text-[#1C3A2E] font-medium">{t("kids.badge2")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#B8860B] rounded-full" />
                    <span className="text-[#1C3A2E] font-medium">{t("kids.badge3")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-6">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="group/arrow p-4 rounded-full border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white transition-all duration-300 hover:scale-110"
            aria-label={t("kids.prevArrow")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="rtl:rotate-180"
            >
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {kids.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-[#B8860B] w-8"
                    : "bg-[#B8860B]/30 hover:bg-[#B8860B]/60"
                }`}
                aria-label={t("kids.gotoCard").replace("{{number}}", String(idx + 1))}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="group/arrow p-4 rounded-full border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white transition-all duration-300 hover:scale-110"
            aria-label={t("kids.nextArrow")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="rtl:rotate-180"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Progress Info */}
        <div className="text-center mt-8">
          <p className="text-[#6a6a6a]">
            <span className="font-bold text-[#B8860B]">{currentIndex + 1}</span>
            {" "}
            {t("kids.progressOf")}
            {" "}
            <span className="font-bold text-[#B8860B]">{kids.length}</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
