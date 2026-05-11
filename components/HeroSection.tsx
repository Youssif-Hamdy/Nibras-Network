"use client";

import Link from "next/link";
import { useI18n } from "@/components/LocaleProvider";

export default function HeroSection() {
  const { locale, t } = useI18n();
  const goldGradient =
    locale === "ar"
      ? "linear-gradient(to right, transparent 0%, rgba(212,160,23,0.08) 30%, rgba(242,213,140,0.22) 60%, transparent 100%)"
      : "linear-gradient(to left, transparent 0%, rgba(212,160,23,0.08) 30%, rgba(242,213,140,0.22) 60%, transparent 100%)";

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&display=swap');

        .hero-heading {
          font-family: 'Cormorant Garamond', serif;
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(8px); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 24px 0px rgba(184,134,11,0.45); }
          50%       { box-shadow: 0 0 44px 8px rgba(212,160,23,0.65); }
        }
      `}</style>

      <section className="relative w-full pt-[80px] overflow-hidden bg-[#0d1a0f]">

        <div
          className="relative w-full"
          style={{ paddingTop: "clamp(500px, 52vw, 760px)" }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/hero.png')",
              backgroundSize: "100% 100%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              filter: "blur(1.5px) brightness(0.52)",
              transform: "scale(1.03)",
              transformOrigin: "center top",
            }}
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/75" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#F5F0E8] to-transparent" />

          {/* Static RTL golden gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: goldGradient,
              zIndex: 1,
            }}
          />

          {/* ── Centered content ── */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 pb-8" style={{ zIndex: 2 }}>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 border border-[#D4A017]/70 bg-black/30 backdrop-blur-sm rounded-full px-5 py-2 mb-5"
              style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
              <span className="text-xs font-semibold text-[#F2D58C] tracking-[0.2em] uppercase">
                {t("hero.badge")}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            </div>

            {/* Heading */}
            <h1
              className="hero-heading text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] mb-3 max-w-2xl"
              style={{ animation: "fadeSlideUp 0.7s ease 0.25s both" }}
            >
              {t("hero.titleBefore")}{" "}
              <span className="text-[#F2D58C] italic">{t("hero.titleAccent")}</span>
            </h1>

            {/* Description */}
            <p
              className="text-white/60 text-sm tracking-wide leading-relaxed mb-7 max-w-xs"
              style={{ animation: "fadeSlideUp 0.7s ease 0.4s both" }}
            >
              {t("hero.desc")}
            </p>

            {/* Arrow + Button */}
            <div
              className="flex flex-col items-center gap-2.5 mb-6"
              style={{ animation: "fadeSlideUp 0.7s ease 0.55s both" }}
            >
              <div style={{ animation: "arrowBounce 1.8s ease-in-out infinite" }}>
                <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
                  <line x1="10" y1="0" x2="10" y2="18" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 4" opacity="0.6"/>
                  <path d="M4 16L10 24L16 16" stroke="#F2D58C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 bg-[#B8860B] text-white text-sm font-semibold px-9 py-3.5 rounded-full hover:bg-[#D4A017] hover:scale-[1.05] transition-all duration-200 ring-2 ring-[#D4A017]/30 tracking-wide"
                style={{ animation: "pulseGlow 2.5s ease-in-out infinite" }}
              >
                {t("hero.cta")}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="rtl:rotate-180"
                  aria-hidden
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}