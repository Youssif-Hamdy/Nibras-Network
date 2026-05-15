"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { Mail, Phone, Globe, Send, MessageSquare } from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";
import { PhoneCountryPicker } from "@/components/PhoneCountryPicker";
import { getContactPage } from "@/lib/i18n/contactContent";

const WA_NUMBER = "201099493640";
const EMAIL = "nibrasnetwork55@gmail.com";
const SITE = "https://www.nibrasnetwork.com";
const CONTACT_API = "https://nibras-backend-five.vercel.app/api/contact";

type SocialGlyph = React.ComponentType<{ className?: string }>;

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconYoutube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V9.07a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.5z" />
    </svg>
  );
}

const SOCIAL_ICON_LINKS: { href: string; icon: SocialGlyph; color: string; animClass: string }[] = [
  {
    href: "https://www.facebook.com/share/1B5T2x4wML/",
    icon: IconFacebook,
    color: "hover:bg-[#1877F2]/15 hover:text-[#1877F2]",
    animClass: "animate-social-bounce-1",
  },
  {
    href: "https://www.instagram.com/nibrasnetwork?igsh=MTI4OXZkZnRzbXZnOQ==",
    icon: IconInstagram,
    color: "hover:bg-gradient-to-br hover:from-[#f09433]/20 hover:to-[#bc1888]/20 hover:text-[#bc1888]",
    animClass: "animate-social-bounce-2",
  },
  {
    href: "https://youtube.com/@nibrasnetwork?si=7oPIEK9Hto1388oz",
    icon: IconYoutube,
    color: "hover:bg-[#FF0000]/12 hover:text-[#c00]",
    animClass: "animate-social-bounce-3",
  },
  {
    href: "https://www.tiktok.com/@nibrasnetwork?_r=1&_t=ZS-96IrQ5HSFcK",
    icon: TikTokGlyph,
    color: "hover:bg-black/8 hover:text-[#000]",
    animClass: "animate-social-bounce-4",
  },
];

/* ─── Scroll-reveal hook ─── */
function useScrollReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: number | undefined;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        timeoutId = window.setTimeout(() => setVisible(true), delay);
      },
      { threshold: 0.06, rootMargin: "0px 0px -32px 0px" },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [delay]);
  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal(delay);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${className} ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

/* ─── Animated icon wrapper ─── */
function AnimIcon({
  children,
  bg,
  shadow,
  animation,
}: {
  children: React.ReactNode;
  bg: string;
  shadow: string;
  animation: string;
}) {
  return (
    <span
      className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${bg} shadow-lg ${shadow} ${animation}`}
    >
      {/* subtle ring pulse */}
      <span className="absolute inset-0 rounded-2xl animate-ping-slow opacity-0 ring-2 ring-current" />
      {children}
    </span>
  );
}

export default function ContactPageContent() {
  const { locale } = useI18n();
  const copy = getContactPage(locale);
  const isAr = locale === "ar";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [messageShort, setMessageShort] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [agree, setAgree] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialAriaLabels = [
    copy.socialFacebook,
    copy.socialInstagram,
    copy.socialYoutube,
    copy.socialTiktok,
  ];

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(false);

    if (!agree) {
      setFormError(copy.validationAgree);
      return;
    }
    if (!fullName.trim() || !email.trim() || !whatsapp.trim()) {
      setFormError(copy.validationFill);
      return;
    }
    const combinedMessage = [messageShort.trim(), messageBody.trim()].filter(Boolean).join("\n\n");
    if (!combinedMessage) {
      setFormError(copy.validationMessage);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          whatsapp: whatsapp.trim(),
          message: combinedMessage,
        }),
      });

      if (!res.ok) {
        let errText = copy.submitError;
        try {
          const data = (await res.json()) as { message?: unknown; error?: unknown };
          const m = data.message ?? data.error;
          if (typeof m === "string" && m.trim()) errText = m;
        } catch { /* ignore */ }
        setFormError(errText);
        return;
      }

      setFormSuccess(true);
    } catch {
      setFormError(copy.submitError);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* ── Keyframes injected once ── */}
      <style>{`
        @keyframes float-y {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-5px) rotate(-4deg); }
        }
        @keyframes float-y-alt {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-6px) rotate(3deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes ring-shake {
          0%,100% { transform: rotate(0deg); }
          10%     { transform: rotate(-12deg); }
          20%     { transform: rotate(12deg); }
          30%     { transform: rotate(-10deg); }
          40%     { transform: rotate(10deg); }
          50%     { transform: rotate(-6deg); }
          60%     { transform: rotate(6deg); }
          70%     { transform: rotate(0deg); }
        }
        @keyframes ping-slow {
          0%    { opacity: 0.25; transform: scale(1); }
          70%   { opacity: 0;    transform: scale(1.5); }
          100%  { opacity: 0;    transform: scale(1.5); }
        }
        @keyframes hero-spin {
          0%,100% { transform: rotate(0deg) scale(1); }
          50%     { transform: rotate(-8deg) scale(1.07); }
        }
        @keyframes social-pop-1 {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-4px); }
        }
        @keyframes social-pop-2 {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-4px); }
        }
        @keyframes social-pop-3 {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-4px); }
        }
        @keyframes social-pop-4 {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-4px); }
        }
        @keyframes send-fly {
          0%,100% { transform: translate(0,0) rotate(0deg); }
          40%     { transform: translate(3px,-3px) rotate(-10deg); }
          60%     { transform: translate(3px,-3px) rotate(-10deg); }
        }

        .anim-float     { animation: float-y     3.2s ease-in-out infinite; }
        .anim-float-alt { animation: float-y-alt 3.6s ease-in-out infinite; }
        .anim-spin      { animation: spin-slow   8s   linear     infinite; }
        .anim-ring      { animation: ring-shake  2.8s ease-in-out infinite 1.5s; }
        .anim-hero      { animation: hero-spin   4s   ease-in-out infinite; }
        .anim-send      { animation: send-fly    2.4s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 2.5s cubic-bezier(0,0,0.2,1) infinite; }

        .animate-social-bounce-1 { animation: social-pop-1 2.8s ease-in-out infinite 0.0s; }
        .animate-social-bounce-2 { animation: social-pop-2 2.8s ease-in-out infinite 0.4s; }
        .animate-social-bounce-3 { animation: social-pop-3 2.8s ease-in-out infinite 0.8s; }
        .animate-social-bounce-4 { animation: social-pop-4 2.8s ease-in-out infinite 1.2s; }

        .group:hover .anim-float,
        .group:hover .anim-float-alt,
        .group:hover .anim-ring,
        .group:hover .anim-spin { animation-play-state: paused; }

        .icon-wrap-hover {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .icon-wrap-hover:hover { transform: scale(1.14) translateY(-2px); }

        /* RTL send icon flip */
        [dir="rtl"] .icon-send { transform: scaleX(-1); }
      `}</style>

      <div
        className="relative flex-1 overflow-hidden bg-[#EDE7D9] text-[#1C3A2E]"
        dir={isAr ? "rtl" : "ltr"}
        lang={locale}
      >
        {/* ambient blobs */}
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 45% at 20% 0%, rgba(212,160,23,0.2), transparent)," +
              "radial-gradient(ellipse 50% 35% at 100% 20%, rgba(28,58,46,0.07), transparent)",
          }}
        />

        {/* decorative floating orbs */}
        <div
          className="pointer-events-none absolute -top-16 -end-16 h-64 w-64 rounded-full opacity-[0.06]"
          aria-hidden
          style={{ background: "radial-gradient(circle, #1C3A2E 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute top-1/2 -start-20 h-48 w-48 rounded-full opacity-[0.05]"
          aria-hidden
          style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-3xl px-4 pt-[calc(70px+1.5rem)] pb-14 sm:px-6 md:pt-[calc(80px+2rem)] md:pb-20 lg:max-w-4xl">

          {/* ── HERO ── */}
          <Reveal>
            <header className="text-center">
              <div className="mx-auto mb-6 flex justify-center">
                <span className="anim-hero flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1C3A2E] text-[#F2D58C] shadow-xl shadow-[#1C3A2E]/30">
                  <MessageSquare className="h-7 w-7" strokeWidth={1.75} />
                </span>
              </div>
              <h1 className="font-serif text-3xl font-bold sm:text-4xl md:text-[2.75rem] md:leading-tight">
                {copy.heroTitle}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl font-serif text-xl font-semibold text-[#2d4a3a] sm:text-2xl">
                {copy.heroSubtitle}
              </p>
              <div className="mx-auto mt-8 max-w-2xl space-y-4 text-start text-[15px] leading-[1.9] text-[#3d5248]">
                <p>{copy.intro1}</p>
                <p>{copy.intro2}</p>
                <p>{copy.intro3}</p>
              </div>
            </header>
          </Reveal>

          <hr className="my-12 border-[#B8860B]/25" />

          {/* ── DIRECT CONTACT (card grid) ── */}
          <Reveal>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-serif text-xl font-bold sm:text-2xl">{copy.directTitle}</h2>
              <p className="text-xs font-medium text-[#6b7d75] sm:pb-1">
                {copy.directKicker}
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#B8860B]/22 bg-gradient-to-b from-white/95 to-[#f5f2ea]/95 p-5 shadow-[0_10px_36px_rgba(28,58,46,0.07)] ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/35 hover:shadow-[0_18px_44px_rgba(37,211,102,0.18)]"
              >
                <div className="pointer-events-none absolute -end-6 -top-6 h-24 w-24 rounded-full bg-[#25D366]/10 blur-2xl transition-opacity group-hover:opacity-100" aria-hidden />
                <div className="icon-wrap-hover mb-4 w-fit">
                  <AnimIcon
                    bg="bg-[#25D366] text-white"
                    shadow="shadow-[#25D366]/35"
                    animation="anim-ring"
                  >
                    <Phone className="h-5 w-5" strokeWidth={2} />
                  </AnimIcon>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#5a6b62] ltr:tracking-[0.12em]">
                  {copy.waLabel}
                </p>
                {/* ── Phone number with Egypt flag + country code ── */}
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xl leading-none" aria-label="Egypt" role="img">🇪🇬</span>
                  <p className="text-lg font-semibold tracking-tight text-[#1C3A2E] transition-colors group-hover:text-[#0d5c2e]">
                    <span className="text-[#B8860B] font-bold">+20</span> 109 949 3640
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366]">
                  <span aria-hidden>📱</span>
                  {copy.directCtaWa}
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#B8860B]/22 bg-gradient-to-b from-white/95 to-[#f5f2ea]/95 p-5 shadow-[0_10px_36px_rgba(28,58,46,0.07)] ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#1C3A2E]/25 hover:shadow-[0_18px_44px_rgba(28,58,46,0.12)]"
              >
                <div className="pointer-events-none absolute -end-6 -top-6 h-24 w-24 rounded-full bg-[#D4A017]/10 blur-2xl transition-opacity group-hover:opacity-100" aria-hidden />
                <div className="icon-wrap-hover mb-4 w-fit">
                  <AnimIcon
                    bg="bg-[#1C3A2E] text-[#F2D58C]"
                    shadow="shadow-[#1C3A2E]/28"
                    animation="anim-float"
                  >
                    <Mail className="h-5 w-5" strokeWidth={2} />
                  </AnimIcon>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#5a6b62] ltr:tracking-[0.12em]">
                  {copy.emailLabel}
                </p>
                <p className="mt-2 break-all text-sm font-semibold leading-snug text-[#1C3A2E] transition-colors group-hover:text-[#0d5c2e] sm:text-[15px]">
                  {EMAIL}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8860B]">
                  <span aria-hidden>📧</span>
                  {copy.directCtaEmail}
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>

              <a
                href={SITE}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#B8860B]/22 bg-gradient-to-b from-white/95 to-[#f5f2ea]/95 p-5 shadow-[0_10px_36px_rgba(28,58,46,0.07)] ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017]/40 hover:shadow-[0_18px_44px_rgba(184,134,11,0.14)] sm:col-span-2 lg:col-span-1"
              >
                <div className="pointer-events-none absolute -end-6 -top-6 h-24 w-24 rounded-full bg-[#1C3A2E]/6 blur-2xl transition-opacity group-hover:opacity-100" aria-hidden />
                <div className="icon-wrap-hover mb-4 w-fit">
                  <AnimIcon
                    bg="bg-[#B8860B] text-white"
                    shadow="shadow-[#B8860B]/30"
                    animation="anim-spin"
                  >
                    <Globe className="h-5 w-5" strokeWidth={2} />
                  </AnimIcon>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#5a6b62] ltr:tracking-[0.12em]">
                  {copy.websiteLabel}
                </p>
                <p className="mt-1 text-lg font-semibold tracking-tight text-[#1C3A2E] transition-colors group-hover:text-[#0d5c2e]">
                  www.nibrasnetwork.com
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#6b7d75]">
                  <span aria-hidden>🌐</span>
                  {copy.directCtaSite}
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </Reveal>

          <hr className="my-12 border-[#B8860B]/25" />

          {/* ── SOCIAL ── */}
          <Reveal>
            <h2 className="font-serif text-xl font-bold sm:text-2xl">{copy.socialTitle}</h2>
            <p className="mt-4 max-w-2xl text-start text-[15px] leading-relaxed text-[#3d5248]">
              {copy.socialIntro}
            </p>

            {/* Social icon row only — no text links ── */}
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIAL_ICON_LINKS.map(({ href, icon: Icon, color, animClass }, i) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialAriaLabels[i]}
                  className={`${animClass} flex h-12 w-12 items-center justify-center rounded-full border border-[#B8860B]/25 bg-white/90 text-[#1C3A2E] shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg ${color}`}
                >
                  <Icon className="h-[22px] w-[22px]" />
                </a>
              ))}
            </div>
          </Reveal>

          <hr className="my-12 border-[#B8860B]/25" />

          {/* ── FORM INTRO ── */}
          <Reveal>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl" id="message">
              {copy.formSectionTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-start text-[15px] leading-relaxed text-[#3d5248]">
              {copy.formIntroLine1}
              <br />
              {copy.formIntroLine2}
            </p>
          </Reveal>

          {/* ── FORM CARD ── */}
          <Reveal className="mt-10">
            <div className="rounded-3xl border border-[#B8860B]/25 bg-white/85 p-6 shadow-[0_16px_48px_rgba(28,58,46,0.1)] backdrop-blur-sm sm:p-10">
              <h3 className="font-serif text-lg font-bold text-[#1C3A2E]">{copy.formHeading}</h3>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {formSuccess && (
                  <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm font-medium text-emerald-900">{copy.submitSuccess}</p>
                  </div>
                )}
                {formError && (
                  <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <p className="text-sm font-medium text-red-800">{formError}</p>
                  </div>
                )}
                {[
                  { id: "fullName",  label: copy.labelFullName,     value: fullName,     set: setFullName,     type: "text",  ac: "name"  },
                  { id: "emailAddr", label: copy.labelEmail,         value: email,        set: setEmail,        type: "email", ac: "email" },
                  { id: "msgShort",  label: copy.labelMessageShort,  value: messageShort, set: setMessageShort, type: "text",  ac: ""      },
                ].map(({ id, label, value, set, type, ac }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-bold text-[#1C3A2E]">
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      value={value}
                      onChange={(e) => set(e.target.value)}
                      autoComplete={ac || undefined}
                      className="mt-2 w-full rounded-xl border border-[#B8860B]/30 bg-[#faf8f3] px-4 py-3 text-[15px] text-[#1C3A2E] outline-none ring-0 transition-shadow duration-300 focus:border-[#D4A017] focus:shadow-[0_0_0_3px_rgba(212,160,23,0.25)]"
                    />
                  </div>
                ))}

                {/* ── WhatsApp / Phone with country picker ── */}
                <PhoneCountryPicker
                  value={whatsapp}
                  onChange={setWhatsapp}
                  label={copy.labelWhatsapp}
                />

                <div>
                  <label htmlFor="msgBody" className="block text-sm font-bold text-[#1C3A2E]">
                    {copy.labelMessageBody}
                  </label>
                  <textarea
                    id="msgBody"
                    name="messageBody"
                    value={messageBody}
                    onChange={(e) => setMessageBody(e.target.value)}
                    rows={5}
                    className="mt-2 w-full resize-y rounded-xl border border-[#B8860B]/30 bg-[#faf8f3] px-4 py-3 text-[15px] leading-relaxed outline-none transition-shadow duration-300 focus:border-[#D4A017] focus:shadow-[0_0_0_3px_rgba(212,160,23,0.25)]"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-snug text-[#2d3f35]">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 rounded border-[#B8860B]/50 text-[#1C3A2E] focus:ring-[#D4A017]"
                  />
                  <span>{copy.agree}</span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1C3A2E] px-8 py-4 text-sm font-bold text-[#F5F0E8] shadow-[0_14px_36px_rgba(28,58,46,0.35)] transition-all duration-300 enabled:hover:-translate-y-0.5 enabled:hover:scale-[1.02] enabled:hover:bg-[#254d38] enabled:hover:shadow-[0_18px_44px_rgba(28,58,46,0.45)] disabled:cursor-not-allowed disabled:opacity-45"
                >
                  <Send
                    className="icon-send anim-send h-4 w-4 shrink-0"
                    aria-hidden
                  />
                  {isSubmitting ? copy.submitting : copy.submit}
                </button>
              </form>
            </div>
          </Reveal>

          {/* ── NEXT STEPS ── */}
          <Reveal className="mt-12">
            <h3 className="font-serif text-lg font-bold">{copy.nextTitle}</h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-start text-[15px] leading-relaxed text-[#3d5248]">
              <li>{copy.next1}</li>
              <li>{copy.next2}</li>
              <li>{copy.next3}</li>
              <li>{copy.next4}</li>
            </ul>
            <p className="mt-4 text-start text-[15px] text-[#5a6b62]">{copy.nextFooter}</p>
          </Reveal>

          {/* ── CTA ── */}
          <Reveal className="mt-14">
            <h2 className="font-serif text-xl font-bold sm:text-2xl">{copy.ctaTitle}</h2>
            <p className="mt-4 text-start text-[15px] text-[#3d5248]">{copy.ctaLead}</p>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-[0_14px_40px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_18px_50px_rgba(37,211,102,0.55)] active:scale-[0.98]"
            >
              {copy.ctaButton}
            </a>
          </Reveal>
        </div>
      </div>
    </>
  );
}