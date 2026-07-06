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
          from { opacity: 0; transform: translateY(30px); }
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
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-heading, .hero-badge, .hero-desc, .hero-cta-wrap, .bg-zoom-anim {
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
          {/* ── Background Image with Zoom Animation ── */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="w-full h-full bg-zoom-anim"
              style={{
                backgroundImage: "url('/images/hero-new.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                animation: "slowZoom 20s linear infinite alternate",
                transformOrigin: "center center",
              }}
            />
          </div>

          {/* ── Overlays to make text readable & Balance the Image ── */}
          {/* Main dark overlay (Increased from 50% to 65% for better contrast) */}
          <div className="absolute inset-0 bg-black/65" />
          
          {/* Vignette effect to unify brightness between left/right subjects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80" />
          
          {/* Gradient to smooth out the bottom edge into the next section */}
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#F5F0E8] to-transparent" />

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
              className="hero-badge inline-flex items-center gap-2 border border-[#D4A017]/70 bg-black/40 backdrop-blur-md rounded-full px-4 py-1.5 mb-5"
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
              className="hero-heading text-[1.7rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.2] mb-4 w-full max-w-[280px] sm:max-w-lg md:max-w-3xl mx-auto"
              style={{ animation: "fadeSlideUp 0.7s ease 0.25s both" }}
            >
              {t("hero.titleBefore")}{" "}
              <span className="text-[#F2D58C] italic">{t("hero.titleAccent")}</span>
            </h1>

            {/* Description */}
            <p
              className="hero-desc text-white/80 text-base sm:text-lg tracking-wide leading-relaxed mb-8 w-full max-w-[280px] sm:max-w-md mx-auto"
              style={{ animation: "fadeSlideUp 0.7s ease 0.4s both" }}
            >
              {t("hero.desc")}
            </p>

            {/* Arrow + Button */}
            <div
              className="hero-cta-wrap flex flex-col items-center gap-5 mt-2"
              style={{ animation: "fadeSlideUp 0.7s ease 0.55s both" }}
            >
              {/* Bouncing Arrow */}
              <div style={{ animation: "arrowBounce 1.8s ease-in-out infinite" }}>
                <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
                  <line x1="10" y1="0" x2="10" y2="18" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 4" opacity="0.6"/>
                  <path d="M4 16L10 24L16 16" stroke="#F2D58C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <Link
                href="/book-trial"
                className="inline-flex items-center gap-2.5 bg-[#B8860B] text-white text-base sm:text-lg font-semibold px-8 sm:px-10 py-3.5 rounded-full hover:bg-[#D4A017] hover:scale-[1.05] active:scale-[0.98] transition-all duration-200 ring-2 ring-[#D4A017]/30 tracking-wide whitespace-nowrap"
                style={{ animation: "pulseGlow 2.5s ease-in-out infinite" }}
              >
                {t("hero.cta")}
                <svg
                  width="16"
                  height="16"
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