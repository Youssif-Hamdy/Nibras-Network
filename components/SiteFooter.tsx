"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Headphones,
  Home,
  Landmark,
  Mail,
  MessageCircle,
  PenLine,
  Sparkles,
  Tag,
  Users,
} from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";
import { useReveal } from "@/hooks/useReveal";

const WA_NUMBER = "201099493640";
const EMAIL = "nibrasnetwork55@gmail.com";

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

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V9.07a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.5z" />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/** Small mosque / crescent glyph used for the central "tagline" block in the bottom bar */
function IconMosque({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M12 2.5c1 1 1.6 2 1.6 3 0 .9-.7 1.6-1.6 1.6S10.4 6.4 10.4 5.5c0-1 .6-2 1.6-3z" fill="currentColor" stroke="none" />
      <path d="M4 21v-6.5a4 4 0 0 1 2-3.46L9.5 9M20 21v-6.5a4 4 0 0 0-2-3.46L14.5 9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 21v-4a4 4 0 1 1 8 0v4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 21h20" strokeLinecap="round" />
      <path d="M4 14.5V21M20 14.5V21" strokeLinecap="round" />
    </svg>
  );
}

function DriftingBirds() {
  return (
    <svg className="absolute top-10 left-10 w-32 h-32 text-[#1C3A2E]/20 pointer-events-none footer-birds" viewBox="0 0 100 100" fill="currentColor">
      <path d="M10,50 Q15,45 20,50 Q25,45 30,50 Q25,55 20,50 Q15,55 10,50 Z" />
      <path d="M40,30 Q45,25 50,30 Q55,25 60,30 Q55,35 50,30 Q45,35 40,30 Z" className="translate-y-2 translate-x-4 scale-75" />
      <path d="M70,60 Q75,55 80,60 Q85,55 90,60 Q85,65 80,60 Q75,65 70,60 Z" className="-translate-y-4 -translate-x-2 scale-90" />
    </svg>
  );
}

const SOCIAL_LINKS: {
  href: string;
  icon: SocialGlyph;
  labelKey: string;
  animClass: string;
}[] = [
  {
    href: "https://www.facebook.com/share/1B5T2x4wML/",
    icon: IconFacebook,
    labelKey: "footer.social.facebook",
    animClass: "footer-social-1",
  },
  {
    href: "https://www.instagram.com/nibrasnetwork?igsh=MTI4OXZkZnRzbXZnOQ==",
    icon: IconInstagram,
    labelKey: "footer.social.instagram",
    animClass: "footer-social-2",
  },
  {
    href: "https://youtube.com/@nibrasnetwork?si=7oPIEK9Hto1388oz",
    icon: IconYoutube,
    labelKey: "footer.social.youtube",
    animClass: "footer-social-3",
  },
  {
    href: "https://www.tiktok.com/@nibrasnetwork?_r=1&_t=ZS-96IrQ5HSFcK",
    icon: IconTikTok,
    labelKey: "footer.social.tiktok",
    animClass: "footer-social-4",
  },
  {
    href: `https://wa.me/${WA_NUMBER}`,
    icon: IconWhatsApp,
    labelKey: "footer.social.whatsapp",
    animClass: "footer-social-5",
  },
];

function FooterSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${className} ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/** Heading centered with a small line-dot-line divider underneath, to match the reference design */
function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex flex-col items-center text-center lg:items-start lg:text-start">
      <h3 className="text-[15px] font-extrabold uppercase tracking-[0.12em] rtl:tracking-normal text-[#2a4f3e] drop-shadow-sm">
        {children}
      </h3>
      <div className="mt-2 flex items-center gap-1.5" aria-hidden>
        <span className="h-[2px] w-6 rounded-full bg-gradient-to-r from-transparent to-[#D4A017]/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
        <span className="h-[2px] w-6 rounded-full bg-gradient-to-l from-transparent to-[#D4A017]/70" />
      </div>
    </div>
  );
}

function FooterLink({
  href,
  label,
  icon: IconComp,
  external,
  forceWhiteOnMobile,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  external?: boolean;
  forceWhiteOnMobile?: boolean;
}) {
  const textColorClass = forceWhiteOnMobile ? "text-white sm:text-[#1C3A2E]" : "text-[#1C3A2E]";
  const className =
    `group relative flex items-center gap-2.5 rounded-lg px-1 py-1.5 text-[14px] font-bold ${textColorClass} transition-all duration-300 hover:text-[#B8860B]`;

  const content = (
    <>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#2a4f3e]/10 bg-white/40 text-[#D4A017] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#D4A017]/40 group-hover:bg-[#D4A017]/10 group-hover:text-[#B8860B] group-hover:shadow-[0_4px_10px_rgba(212,160,23,0.15)]">
        <IconComp size={16} aria-hidden />
      </span>
      <span className="relative min-w-0 flex-1 transition-transform duration-300 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5">
        {label}
        {/* Smooth underline on hover */}
        <span className="absolute -bottom-0.5 start-0 h-[1.5px] w-0 bg-gradient-to-r from-[#D4A017] to-transparent transition-all duration-300 group-hover:w-full" />
      </span>
      {external ? (
        <ArrowUpRight
          size={14}
          className={`shrink-0 ${forceWhiteOnMobile ? 'text-white/60 sm:text-[#1C3A2E]/40' : 'text-[#1C3A2E]/40'} opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#B8860B] group-hover:opacity-100 rtl:rotate-[-90deg] rtl:group-hover:-translate-x-0.5`}
        />
      ) : (
        <ChevronRight
          size={14}
          className={`shrink-0 ${forceWhiteOnMobile ? 'text-white/60 sm:text-[#1C3A2E]/40' : 'text-[#1C3A2E]/40'} transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#B8860B] rtl:rotate-180 rtl:group-hover:-translate-x-0.5`}
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export default function SiteFooter() {
  const { t } = useI18n();

  const quick = [
    { labelKey: "footer.quick.home", href: "/", icon: Home },
    { labelKey: "footer.quick.about", href: "/about", icon: Users },
    { labelKey: "footer.quick.pricing", href: "/pricing", icon: Tag },
    { labelKey: "footer.quick.contact", href: "/contact", icon: MessageCircle },
  ] as const;

  const courses = [
    { labelKey: "footer.course1", href: "/courses/quran-memorization", icon: BookOpen },
    { labelKey: "footer.course2", href: "/courses/tajweed", icon: Sparkles },
    { labelKey: "footer.course3", href: "/courses/arabic-for-beginners", icon: PenLine },
    { labelKey: "footer.course4", href: "/courses/islamic-general", icon: Landmark },
  ] as const;

  return (
    <footer className="relative overflow-hidden text-[#1C3A2E]">
      <style jsx global>{`
        @keyframes footer-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes footer-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        @keyframes footer-shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes footer-social-pop {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes footer-birds-drift {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateX(50vw) translateY(-20px); opacity: 0; }
        }
        .footer-logo-glow { animation: footer-glow 6s ease-in-out infinite; }
        .footer-logo-float { animation: footer-float 7s ease-in-out infinite; }
        .footer-top-shimmer {
          background: linear-gradient(90deg, transparent, #D4A017, #F2D58C, #D4A017, transparent);
          background-size: 200% 100%;
          animation: footer-shimmer 7s linear infinite;
        }
        .footer-social-1 { animation: footer-social-pop 4s ease-in-out infinite 0s; }
        .footer-social-2 { animation: footer-social-pop 4s ease-in-out infinite 0.4s; }
        .footer-social-3 { animation: footer-social-pop 4s ease-in-out infinite 0.8s; }
        .footer-social-4 { animation: footer-social-pop 4s ease-in-out infinite 1.2s; }
        .footer-social-5 { animation: footer-social-pop 4s ease-in-out infinite 1.6s; }
        .footer-birds { animation: footer-birds-drift 30s linear infinite; }
      `}</style>

      {/*
        Background: light cream base with your own decorative/pattern image
        (place it at /public/images/footer.png — a soft geometric pattern
        with a faint mosque/minaret silhouette on the right, like the reference).
        No dark overlay here anymore since the target design is a bright cream footer,
        not a darkened mosque photo. Adjust the wash opacity below if your image
        already comes pre-toned.
      */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#FBF3E1]">
        <Image
          src="/images/footer.png"
          alt="Footer Background"
          fill
          className="object-cover object-center lg:object-[center_30%] opacity-90"
          quality={100}
        />
        {/* Light cream wash so the pattern stays soft and text stays readable */}
        <div className="absolute inset-0 bg-[#FBF3E1]/60" />
      </div>

      {/* Drifting Birds Micro-animation */}
      <DriftingBirds />

      {/* Gold shimmer top line */}
      <div className="footer-top-shimmer relative z-10 h-[3px] w-full opacity-70 shadow-[0_0_10px_rgba(212,160,23,0.3)]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-8 pb-10 sm:px-6 sm:pt-10 sm:pb-12 lg:pt-10 lg:pb-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10 lg:items-start">

          {/* 1. Brand column (Highest Hierarchy) */}
          <FooterSection className="lg:col-span-5 flex flex-col items-center lg:items-start" delay={0}>
            <Link href="/" className="group flex max-w-full flex-col items-center text-center lg:items-start lg:text-start">
              <div className="relative mb-2 flex items-center justify-center lg:justify-start">
                {/* Outer wide glow */}
                <span
                  className="footer-logo-glow pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-[#D4A017]/15 blur-[40px]"
                  aria-hidden
                />
                {/* Inner bright core glow */}
                <span
                  className="footer-logo-glow pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-[#F2D58C]/30 blur-xl"
                  aria-hidden
                  style={{ animationDelay: "1s" }}
                />
                <div className="footer-logo-float relative z-10 flex h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 items-center justify-center transition-transform duration-500 group-hover:scale-[1.05]"
                  style={{ filter: "drop-shadow(0 0 20px rgba(212,160,23,0.4)) drop-shadow(0 0 6px rgba(242,213,140,0.3))" }}
                >
                  <Image
                    src="/images/logo.png"
                    alt={t("nav.logoAlt")}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                  />
                </div>
              </div>

            </Link>

            <p className="mx-auto mb-6 max-w-sm text-center text-[15px] leading-relaxed text-[#1C3A2E] font-semibold lg:mx-0 lg:max-w-md lg:text-start">
              {t("footer.blurb")}
            </p>

            <div className="flex flex-col items-center lg:items-start">
              <p className="mb-3 text-[13px] font-extrabold uppercase tracking-[0.15em] rtl:tracking-normal text-[#2a4f3e] drop-shadow-sm">
                {t("footer.followUs")}
              </p>
              <div className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
                {SOCIAL_LINKS.map((social) => {
                  const IconComp = social.icon;
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t(social.labelKey)}
                      className={`${social.animClass} group flex h-10 w-10 items-center justify-center rounded-full border border-[#2a4f3e]/20 bg-white/50 backdrop-blur-sm text-[#2a4f3e] transition-all duration-300 hover:-translate-y-1.5 hover:bg-gradient-to-br hover:from-[#D4A017] hover:to-[#B8860B] hover:text-white hover:border-transparent hover:shadow-[0_8px_20px_rgba(212,160,23,0.35)]`}
                    >
                      <IconComp className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
          </FooterSection>

          {/* 2. Quick links */}
          <FooterSection className="lg:col-span-2 lg:pt-8" delay={80}>
            <FooterHeading>{t("footer.quickLinks")}</FooterHeading>
            <ul className="mx-auto max-w-[180px] space-y-1 lg:mx-0">
              {quick.map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href} label={t(l.labelKey)} icon={l.icon} />
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* 3. Courses */}
          <FooterSection className="lg:col-span-3 lg:pt-8" delay={140}>
            <FooterHeading>{t("footer.courses")}</FooterHeading>
            <ul className="mx-auto max-w-[220px] space-y-1 lg:mx-0">
              {courses.map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href} label={t(l.labelKey)} icon={l.icon} />
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* 4. Contact */}
          <FooterSection className="lg:col-span-2 lg:pt-8" delay={200}>
            <FooterHeading>{t("footer.contact")}</FooterHeading>
            <ul className="mx-auto max-w-[220px] space-y-1 lg:mx-0">
              <li>
                <FooterLink
                  href={`mailto:${EMAIL}`}
                  label={EMAIL}
                  icon={Mail}
                  external
                />
              </li>
              <li>
                <FooterLink
                  href={`https://wa.me/${WA_NUMBER}`}
                  label={t("footer.whatsAppLine")}
                  icon={IconWhatsApp}
                  external
                />
              </li>
            </ul>
          </FooterSection>
        </div>
      </div>

      {/* Dark green bottom bar: Need Help | Tagline | Book a Free Trial */}
      <div className="relative z-10 bg-[#0a1510] border-t border-[#D4A017]/20">
        <FooterSection delay={260} className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Need Help */}
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4A017]/40 text-[#D4A017]">
                <Headphones size={20} />
              </span>
              <div className="text-start">
                <p className="text-sm font-extrabold text-white">{t("footer.needHelp")}</p>
                <p className="text-xs font-semibold text-[#A8C2B3]">{t("footer.needHelpDesc")}</p>
              </div>
            </div>

            {/* Center tagline */}
            <div className="flex flex-col items-center text-center">
              <IconMosque className="mb-1 h-5 w-5 text-[#D4A017]" />
              <p className="font-serif text-lg font-extrabold text-[#F2D58C] sm:text-xl">
                {t("footer.taglineTitle")}
              </p>
              <p className="mt-1 text-xs font-semibold text-[#A8C2B3] sm:text-sm">
                {t("footer.taglineDesc")}
              </p>
            </div>

            {/* Book a Free Trial */}
            <Link
              href="/book-trial"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#D4A017] via-[#F2D58C] to-[#B8860B] bg-[length:200%_auto] px-5 py-3 shadow-[0_8px_24px_rgba(212,160,23,0.35)] transition-all duration-300 hover:scale-[1.03] hover:bg-[position:right_center]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0a1510]/10 text-[#0a1510]">
                <BookOpen size={18} />
              </span>
              <span className="text-start">
                <span className="block text-[13px] font-extrabold leading-tight text-[#0a1510]">
                  {t("nav.bookTrial")}
                </span>
                <span className="block text-[11px] font-bold leading-tight text-[#0a1510]/70">
                  {t("footer.startJourney")}
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-[#0a1510] transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-[-90deg] rtl:group-hover:-translate-x-0.5"
              />
            </Link>
          </div>

          {/* Divider + copyright + policy links */}
          <div className="mt-6 flex flex-col items-center gap-3 border-t border-white/10 pt-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" aria-hidden />
            <p className="text-xs font-semibold text-[#8fa396]">
              © {new Date().getFullYear()} Nibras Network. All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#A8C2B3]">
              <Link href="/policies" className="transition-all hover:text-[#D4A017] hover:underline underline-offset-4">
                {t("more.policiesTerms")}
              </Link>
              <span className="text-white/20" aria-hidden>|</span>
              <Link href="/privacy-policy" className="transition-all hover:text-[#D4A017] hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <span className="text-white/20" aria-hidden>|</span>
              <Link href="/cookie-policy" className="transition-all hover:text-[#D4A017] hover:underline underline-offset-4">
                Cookie Policy
              </Link>
            </div>
          </div>
        </FooterSection>
      </div>
    </footer>
  );
}