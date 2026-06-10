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

        .hero-heading { font-family: 'Cormorant Garamond', serif; }

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

        @media (prefers-reduced-motion: reduce) {
          .hero-heading, .hero-badge, .hero-desc, .hero-cta-wrap {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#F5F0E8" }}
      >
        <div
          className="relative w-full pt-[72px]"
          style={{ minHeight: "clamp(600px, 52vw, 780px)" }}
        >
          {/* ── Desktop (sm+): الصورة ممتدة بالكامل زي الأصل ── */}
          <div
            className="absolute inset-0 hidden sm:block"
            style={{
              backgroundImage: "url('/images/hero-desktop.jpg')",
              backgroundSize: "100% 100%",      /* ممتدة على كامل العرض والارتفاع */
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              filter: "blur(1.5px) brightness(0.52)",
              transform: "scale(1.03)",
              transformOrigin: "center top",
            }}
          />

          {/* ── Mobile (< sm): الصورة المخصصة للموبايل ── */}
          <div
            className="absolute inset-0 block sm:hidden"
            style={{
              backgroundImage: "url('/images/hero-mobile.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              filter: "blur(1px) brightness(0.55)",
              transform: "scale(1.04)",
              transformOrigin: "center center",
            }}
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/75" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#F5F0E8] to-transparent" />

          {/* Golden gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: goldGradient, zIndex: 1 }}
          />

          {/* ── Content ── */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-8 py-16 sm:py-10"
            style={{ zIndex: 2 }}
          >
            {/* Badge */}
            <div
              className="hero-badge inline-flex items-center gap-2 border border-[#D4A017]/70 bg-black/30 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5"
              style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold text-[#F2D58C] tracking-[0.18em] uppercase">
                {t("hero.badge")}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
            </div>

            {/* Heading */}
            <h1
              className="hero-heading text-[1.7rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.2] mb-4 w-fullmax-w-[280px] sm:max-w-lg md:max-w-2xl mx-auto"
              style={{ animation: "fadeSlideUp 0.7s ease 0.25s both" }}
            >
              {t("hero.titleBefore")}{" "}
              <span className="text-[#F2D58C] italic">{t("hero.titleAccent")}</span>
            </h1>

            {/* Description */}
            <p
              className="hero-desc text-white/70 text-sm tracking-wide leading-relaxed mb-6 w-full max-w-[280px] sm:max-w-xs mx-auto"
              style={{ animation: "fadeSlideUp 0.7s ease 0.4s both" }}
            >
              {t("hero.desc")}
            </p>

            {/* Arrow + Button */}
            <div
              className="hero-cta-wrap flex flex-col items-center gap-3"
              style={{ animation: "fadeSlideUp 0.7s ease 0.55s both" }}
            >
              <div style={{ animation: "arrowBounce 1.8s ease-in-out infinite" }}>
                <svg width="18" height="28" viewBox="0 0 20 30" fill="none">
                  <line x1="10" y1="0" x2="10" y2="18" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 4" opacity="0.6"/>
                  <path d="M4 16L10 24L16 16" stroke="#F2D58C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 bg-[#B8860B] text-white text-sm font-semibold px-8 sm:px-10 py-3.5 rounded-full hover:bg-[#D4A017] hover:scale-[1.05] active:scale-[0.98] transition-all duration-200 ring-2 ring-[#D4A017]/30 tracking-wide whitespace-nowrap"
                style={{ animation: "pulseGlow 2.5s ease-in-out infinite" }}
              >
                {t("hero.cta")}
                <svg
                  width="14"
                  height="14"
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