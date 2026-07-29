"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, type ReactNode, type SVGProps } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/components/LocaleProvider";
import { PRIVATE_PKGS, GROUP_PKGS, FAM_ROWS } from "@/lib/pricing/packageTiers";

/* ─── Inline SVG icons (Tabler outline style) ───────────────────── */
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const IconClock = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
  </svg>
);
const IconCalendar = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <rect x="4" y="5" width="16" height="16" rx="2" /><path d="M16 3v4M8 3v4M4 11h16" />
  </svg>
);
const IconBook = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <path d="M4 19V6a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v13" />
    <path d="M4 19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1H5a1 1 0 0 0-1 1Z" />
    <path d="M8 7h6M8 11h5" />
  </svg>
);
const IconChartBar = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <path d="M3 20h18M8 20V10M12 20V4M16 20v-6" />
  </svg>
);
const IconUsers = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <circle cx="9" cy="7" r="3" />
    <path d="M3 20c0-3.314 2.686-6 6-6s6 2.686 6 6" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75M21 20c0-2.761-2-5-4.5-5.5" />
  </svg>
);
const IconTarget = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
  </svg>
);
const IconBrandWhatsapp = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);
const IconMail = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
  </svg>
);
const IconArrowRight = ({ size = 15, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={["rtl:rotate-180", className].filter(Boolean).join(" ")} aria-hidden {...props}>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);
const IconStar = ({ size = 12, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} aria-hidden {...props}>
    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2Z" />
  </svg>
);
const IconCheck = ({ size = 13, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <path d="M5 13l4 4L19 7" />
  </svg>
);
const IconSparkles = ({ size = 16, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <path d="M12 3v3M12 18v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M3 12h3M18 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
  </svg>
);
const IconBanknote = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <rect x="4" y="6" width="16" height="12" rx="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M8 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1M8 18v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1" />
  </svg>
);
const IconTag = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.41 0l6.59-6.59a1 1 0 0 0 0-1.41L12 2Z" />
    <path d="M7 7h.01" />
  </svg>
);
const IconReceipt = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2H4Z" />
    <path d="M8 10h8M8 14h6" />
  </svg>
);
const IconCreditCard = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
);
const IconShieldCheck = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const IconRefresh = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M21 21v-5h-5" />
  </svg>
);
const IconAward = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
const IconPolicy = ({ size = 18, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
    <path d="M14 2v6h6M10 13h4M10 17h4M8 13h.01M8 17h.01" />
  </svg>
);

/* ─── Mini payment brand marks (simple, recognizable) ───────────── */
const IconVisa = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size * 0.62} viewBox="0 0 40 25" fill="none" className={className} aria-hidden {...props}>
    <rect x="1" y="1" width="38" height="23" rx="5" fill="#FFFFFF" stroke="rgba(180,155,68,0.25)" />
    <path
      d="M10.2 17.9 7.7 7.1h3l1.6 7.3 1.6-7.3h3l-2.5 10.8h-3.2Zm9.2 0V7.1h2.8v10.8h-2.8Zm11.1-7.7c-.6-.3-1.6-.6-2.8-.6-1 0-1.6.3-1.6.9 0 1.6 4.8.9 4.8 4.4 0 2-1.8 3.3-4.2 3.3-1.8 0-3.1-.4-3.9-.7l.6-2.3c.8.4 2 .8 3.3.8 1 0 1.7-.2 1.7-.9 0-1.5-4.8-.8-4.8-4.3 0-1.9 1.7-3.3 4.1-3.3 1.6 0 2.8.3 3.7.6l-.6 2.1Zm6.3 7.7-.3-1.5h-3.7l-.5 1.5h-3l4.4-10.8h3.6l2.6 10.8h-3.1Zm-3.2-3.7h2.4l-.8-4-.6 1.6-.9 2.4Z"
      fill="#1A1A14"
      opacity="0.82"
    />
  </svg>
);

const IconMastercard = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size * 0.62} viewBox="0 0 40 25" fill="none" className={className} aria-hidden {...props}>
    <rect x="1" y="1" width="38" height="23" rx="5" fill="#FFFFFF" stroke="rgba(180,155,68,0.25)" />
    <circle cx="18" cy="12.5" r="6.2" fill="#EB001B" opacity="0.9" />
    <circle cx="22" cy="12.5" r="6.2" fill="#F79E1B" opacity="0.9" />
    <path d="M20 7.4a6.5 6.5 0 0 0 0 10.2 6.5 6.5 0 0 0 0-10.2Z" fill="#FF5F00" />
  </svg>
);

const IconPayPal = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size * 0.62} viewBox="0 0 40 25" fill="none" className={className} aria-hidden {...props}>
    <rect x="1" y="1" width="38" height="23" rx="5" fill="#FFFFFF" stroke="rgba(180,155,68,0.25)" />
    <path
      d="M16 18.5h-2.7l1.4-10h4.4c2.6 0 4.1 1.1 3.8 3.4-.3 2.6-2.2 3.9-4.7 3.9h-1.5l-.7 2.7Zm1-4.9h1.4c1.1 0 2-.4 2.1-1.6.1-1-.6-1.4-1.6-1.4h-1.4l-.5 3Z"
      fill="#003087"
      opacity="0.92"
    />
    <path
      d="M23.2 18.5h-2.6l1.5-10h4.2c2.4 0 3.7 1.1 3.4 3.2-.3 2.3-1.9 3.4-4.3 3.4h-1.4l-.8 3.4Zm1.1-5h1.2c1 0 1.8-.3 2-1.4.1-.9-.6-1.3-1.5-1.3h-1.3l-.4 2.7Z"
      fill="#0070E0"
      opacity="0.9"
    />
  </svg>
);

const PRIVATE_INCLUDED = [
  { icon: <IconClock />,        en: "Flexible sessions: 30, 45, or 60 minutes.", ar: "جلسات مرنة: 30 أو 45 أو 60 دقيقة." },
  { icon: <IconUsers />,        en: "Native tutors: One-on-one expert focus.", ar: "مدرسون أصليون: تركيز خبراء في تعليم فردي 1-على-1." },
  { icon: <IconRefresh />,      en: "Easy rescheduling: Change sessions with 7 days’ notice.", ar: "إعادة جدولة سهلة: عدّل المواعيد مع إشعار قبل 7 أيام." },
  { icon: <IconShieldCheck />,  en: "Risk-free: 100% refund on your first session.", ar: "بدون مخاطرة: استرداد 100٪ لأول جلسة." },
  { icon: <IconCreditCard />,   en: "Clear billing: Monthly prepay. No hidden fees. (A 3–4% payment gateway fee applies.)", ar: "فوترة واضحة: دفع شهري مسبق. بلا رسوم خفية. (رسوم بوابة دفع 3–4٪)." },
];

const GROUP_INCLUDED = [
  { icon: <IconUsers />,        en: "Small groups: 3–5 students maximum.", ar: "مجموعات صغيرة: 3–5 طلاب كحد أقصى." },
  { icon: <IconCalendar />,     en: "Fixed routine: Builds weekly discipline.", ar: "روتين ثابت: يعزّز الانضباط الأسبوعي." },
  { icon: <IconAward />,       en: "Native tutors: Certified Arabic experts.", ar: "مدرسون أصليون: خبراء عربية معتمدون." },
  { icon: <IconShieldCheck />, en: "Risk-free: 100% refund on your first session.", ar: "بدون مخاطرة: استرداد 100٪ لأول جلسة." },
  { icon: <IconCreditCard />,  en: "Clear billing: Monthly prepay. No hidden fees. (A 3–4% payment gateway fee applies.)", ar: "فوترة واضحة: دفع شهري مسبق. بلا رسوم خفية. (رسوم بوابة دفع 3–4٪)." },
];

const FAM_INCLUDED = [
  { icon: <IconUsers />,        en: "Shared pool: Distribute hours freely among members.", ar: "رصيد مشترك: وزّع الساعات بحرية بين الأعضاء." },
  { icon: <IconBook />,        en: "Individual profiles: A custom path for each member.", ar: "ملفات فردية: مسار مخصص لكل فرد." },
  { icon: <IconClock />,       en: "Flexible sessions: 30, 45, or 60 minutes per student.", ar: "جلسات مرنة: 30 أو 45 أو 60 دقيقة لكل طالب." },
  { icon: <IconShieldCheck />, en: "Risk-free: 100% refund on your first session.", ar: "بدون مخاطرة: استرداد 100٪ لأول جلسة." },
  { icon: <IconCreditCard />,  en: "Clear billing: Monthly prepay. No hidden fees. (A 3–4% payment gateway fee applies.)", ar: "فوترة واضحة: دفع شهري مسبق. بلا رسوم خفية. (رسوم بوابة دفع 3–4٪)." },
];

/* ─── PkgCard ────────────────────────────────────────────────────── */
function PkgCard({
  pkg,
  isAr,
  brandGreen,
}: {
  pkg: typeof PRIVATE_PKGS[number];
  isAr: boolean;
  brandGreen: string;
}) {
  const name      = isAr ? pkg.name.ar     : pkg.name.en;
  const bestFor   = isAr ? pkg.bestFor.ar  : pkg.bestFor.en;
  const features  = isAr ? pkg.features.ar : pkg.features.en;
  const hoursLabel = isAr
    ? `${pkg.hours} ساعات / شهر`
    : `${pkg.hours} hours / month`;

  return (
    <div
      className="pkg-card-anim bg-white border border-[#E8E2D6] rounded-2xl p-4 sm:p-5 max-w-[640px] mx-auto"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="md:flex md:items-stretch md:gap-6">
        {/* Left: Summary */}
        <div className="md:w-[44%] md:shrink-0 md:pe-5 md:border-e md:border-[#EDE7D9] md:flex md:flex-col">
          {/* Name + badge */}
          <div className="flex items-start justify-between gap-2 mb-2.5">
            <h3 className="font-serif text-[1.02rem] sm:text-[1.08rem] font-bold leading-snug" style={{ color: brandGreen }}>
              {name}
            </h3>
            {pkg.popular && (
              <span
                className="shrink-0 inline-flex items-center gap-1 rounded-full text-[#F2D58C] text-[9px] font-bold uppercase tracking-wider px-2.5 py-1"
                style={{ backgroundColor: brandGreen }}
              >
                <IconStar /> {isAr ? "الأكثر شيوعاً" : "Popular"}
              </span>
            )}
          </div>

          {/* Best for */}
          <p className="flex items-center gap-1.5 text-[12px] text-[#6b7d75] mb-3">
            <IconTarget /> {isAr ? "الأنسب لـ:" : "Best for:"} {bestFor}
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-[1.85rem] sm:text-[2.1rem] font-black tabular-nums leading-none" style={{ color: brandGreen }}>
              {pkg.launch}
            </span>
            <span className="text-[14px] text-[#9aada6] line-through tabular-nums">{pkg.regular}</span>
            <span className="text-[13px] font-semibold text-[#6b7d75]">/ {isAr ? "شهر" : "mo"}</span>
          </div>
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#8B6508] bg-[#FFF4D6] rounded-full px-2.5 py-1 border border-[#D4A017]/30">
              <IconTag size={12} /> 30% OFF · {isAr ? "أول 3 أشهر" : "First 3 months"}
            </span>
            <span className="text-[12px] font-medium text-[#9aada6]">
              {isAr ? `ثم ${pkg.regular}/شهر` : `then ${pkg.regular}/mo`}
            </span>
          </div>

          {/* Hours pill */}
          <div className="flex items-center gap-2 rounded-xl bg-[#1C3A2E]/[0.06] px-3.5 py-2 mb-4">
            <span style={{ color: "rgba(37,74,58,0.5)" }}><IconClock /></span>
            <span className="text-[13px] font-semibold tabular-nums" style={{ color: brandGreen }}>
              {hoursLabel}
            </span>
          </div>

          {/* CTAs */}
          <div className="flex gap-2 md:mt-auto">
            <Link
              href="/contact"
              className="btn-trial-s flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-[13px] font-semibold border transition-colors duration-200"
              style={{ borderColor: "rgba(37,74,58,0.22)", color: brandGreen }}
            >
              <IconCalendar />
              {isAr ? "احجز تجريبية" : "Book trial"}
            </Link>
            <Link
              href="/contact"
              className="btn-sub-s flex-[1.15] flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-[13px] font-semibold text-[#F2D58C]"
              style={{ backgroundColor: brandGreen }}
            >
              {isAr ? "اشترك الآن" : "Subscribe"}
              <IconArrowRight />
            </Link>
          </div>
        </div>

        {/* Right: Details */}
        <div className="mt-5 md:mt-0 md:flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8B9E96] mb-2.5">
            {isAr ? "ما يشمله الاشتراك" : "What's included"}
          </p>
          <ul className="space-y-2.5 mb-4">
            {features.map((f, fi) => (
              <li key={fi} className="flex items-start gap-2.5 text-[13px] text-[#2d3e36] leading-relaxed">
                <span
                  className="mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: brandGreen }}
                >
                  <IconCheck />
                </span>
                {f}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}

function IncludedPlansSection({
  isAr,
  items,
}: {
  isAr: boolean;
  items: typeof PRIVATE_INCLUDED;
}) {
  const columns = [items.slice(0, 2), items.slice(2, 4), items.slice(4, 6)];

  return (
    <div className="mt-7 overflow-hidden rounded-2xl border border-[#E2D9C6] bg-[#F8F4EC]" dir={isAr ? "rtl" : "ltr"}>
      <div className="border-b border-[#E2D9C6] px-5 py-3.5 bg-[#F2ECE0]">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7F928A]">
          {isAr ? "ضمان نبراس" : "The Nibras Guarantee"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {columns.map((column, ci) => (
          <div
            key={ci}
            className={[
              "px-5 py-4",
              ci !== columns.length - 1 ? "border-b md:border-b-0" : "",
              ci !== 0 ? "md:border-s" : "",
              "border-[#E2D9C6]",
            ].join(" ")}
          >
            <ul className="space-y-3">
              {column.map(({ icon, en, ar }, ii) => (
                <li key={ii} className="flex items-start gap-2.5 text-[12.5px] text-[#43564E] leading-snug">
                  <span className="shrink-0 text-[#B49B44] mt-[1px]">{icon}</span>
                  {isAr ? ar : en}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── PricingTabs — Section 2 (Fixed card sizing) ───────────────── */
function PricingTabs({
  isAr,
  brandGreen,
  packagesVisible,
}: {
  isAr: boolean;
  brandGreen: string;
  packagesVisible: boolean;
}) {
  const [activeTab, setActiveTab] = useState<"private" | "group" | "family">("private");

  const tabs = [
    { id: "private" as const, labelEn: "Private 1-on-1", labelAr: "فردي 1-على-1", icon: <IconTarget /> },
    { id: "group"   as const, labelEn: "Group (3–5)",    labelAr: "مجموعة (3–5)", icon: <IconUsers /> },
    { id: "family"  as const, labelEn: "Family",          labelAr: "عائلي",         icon: <IconBook /> },
  ];

  const currentPlans = activeTab === "private" ? PRIVATE_PKGS : GROUP_PKGS;
  const includedItems =
    activeTab === "private"
      ? PRIVATE_INCLUDED
      : activeTab === "group"
      ? GROUP_INCLUDED
      : FAM_INCLUDED;

  /* ── icon per plan index (cycles) ── */
  const planIcons = [
    /* box */
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden key="box">
      <path d="M12 3L2 7.5 12 12l10-4.5L12 3Z"/><path d="M2 7.5v9L12 21l10-4.5v-9"/><path d="M12 12v9"/>
    </svg>,
    /* rocket */
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden key="rocket">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/>
    </svg>,
    /* star */
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden key="star">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/>
    </svg>,
    /* zap */
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden key="zap">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z"/>
    </svg>,
    /* flame */
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden key="flame">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z"/>
    </svg>,
  ];

  const groupIcons = [
    <IconUsers key="g0" />,
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden key="g1">
      <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>,
    <IconTarget key="g2" />,
    <IconBook key="g3" />,
    <IconChartBar key="g4" />,
  ];

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        packagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* ── Tabs header ── */}
      <div className="rounded-t-2xl border border-b-0 border-[#DCCFB6] bg-[#EEF2EF] px-4 sm:px-5">
        <div className="flex items-center justify-between gap-3 border-b border-[#DCCFB6]/90">
          <div className="sm:hidden flex-1 py-2.5">
            <label htmlFor="pricing-tab-filter" className="sr-only">
              {isAr ? "تصفية نوع الخطة" : "Filter plan type"}
            </label>
            <select
              id="pricing-tab-filter"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as "private" | "group" | "family")}
              className="w-full rounded-xl border border-[#DCCFB6] bg-white px-3 py-2 text-[13px] font-semibold text-[#254A3A] outline-none focus:border-[#254A3A] focus:ring-2 focus:ring-[#254A3A]/20"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {isAr ? tab.labelAr : tab.labelEn}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden sm:flex min-w-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-3 sm:px-4 py-3 text-[12.5px] sm:text-[13px] font-semibold border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "text-[#254A3A] border-[#254A3A]"
                    : "text-[#5e7168] border-transparent hover:text-[#254A3A]"
                }`}
              >
                <span className="w-4 h-4 flex items-center justify-center">{tab.icon}</span>
                {isAr ? tab.labelAr : tab.labelEn}
              </button>
            ))}
          </div>
          <Link
            href="/contact"
            className="hidden sm:inline shrink-0 text-[12px] sm:text-[13px] font-semibold text-[#254A3A] hover:text-[#1A352A]"
          >
            {isAr ? "عرض الكل ←" : "View all →"}
          </Link>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="overflow-hidden rounded-b-2xl border border-[#DCCFB6] bg-[#F7F4EE]">
        {activeTab !== "family" ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2.5 p-2.5 sm:gap-3 sm:p-3 bg-[#F7F4EE]"
          >
            {currentPlans.map((pkg, i) => {
              const icons = activeTab === "group" ? groupIcons : planIcons;
              const pkgIcon = icons[i % icons.length];

              return (
                <article
                  key={pkg.name.en}
                  className={`pricing-tab-card relative flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-[#DFD6C4] bg-[#FBF9F4] shadow-[0_8px_20px_rgba(38,33,23,0.07)] ${
                    pkg.popular ? "ring-2 ring-[#B49B44]/50" : ""
                  }`}
                >
                  {/* Popular ribbon */}
                  {pkg.popular && (
                    <div
                      className={`pointer-events-none absolute top-3 z-[1] ${
                        isAr ? "-left-7 -rotate-45" : "-right-7 rotate-45"
                      } bg-[#B49B44] px-7 py-[3px] shadow-[0_2px_8px_rgba(0,0,0,0.14)]`}
                    >
                      <span className="block text-center text-[8px] font-extrabold uppercase tracking-[0.14em] text-white">
                        {isAr ? "الأكثر شيوعاً" : "Popular"}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col flex-1 items-center text-center px-2.5 pt-4 pb-3.5 sm:px-3 sm:pt-5 sm:pb-4">

                    {/* Icon badge */}
                    <div className="mb-3 inline-flex items-center justify-center rounded-xl border border-[#CFBF9A] bg-[#F5F2EA] text-[#B38A55] shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_4px_10px_rgba(38,33,23,0.08)]"
                        style={{ width: 40, height: 40 }}
                    >
                      {pkgIcon}
                    </div>

                    {/* Name + hours */}
                    <h3
                      className="font-extrabold leading-tight tracking-[-0.01em] text-[#3A2414]"
                      style={{ fontSize: "clamp(0.78rem, 1.25vw, 0.95rem)" }}
                    >
                      {isAr ? pkg.name.ar : pkg.name.en}
                    </h3>
                    <p
                      className="mt-0.5 font-semibold text-[#7A6A55]"
                      style={{ fontSize: "0.68rem" }}
                    >
                      {pkg.hours} {isAr ? "ساعات / شهر" : "Hours / Mo."}
                    </p>

                    {/* Best for */}
                    <p
                      className="mt-1.5 font-serif italic text-[#6A6057]"
                      style={{ fontSize: "0.72rem" }}
                    >
                      {isAr ? "الأنسب لـ" : "Best For"}: {isAr ? pkg.bestFor.ar : pkg.bestFor.en}
                    </p>

                    {/* Divider */}
                    <div className="my-3 h-px w-full bg-[#E7DDCC]" />

                    {/* Regular price strikethrough */}
                    <p
                      className="text-[#9aada6] tabular-nums"
                      style={{
                        fontSize: "1.1rem",
                        color: "#8A9A5B"
                      }}                    >
                      <span className="line-through">{pkg.regular}</span>
                      <span className="text-[#9aada6] ms-1 text-[13px]">/ {isAr ? "شهر" : "month"}</span>
                    </p>

                    {/* Launch price box */}
                    <div className="mt-2 w-full rounded-xl border border-[#E4D8C5] bg-[#FBF8F1] px-2 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_5px_15px_rgba(38,33,23,0.08)]">
                      <p className="flex items-end justify-center gap-1 text-[#4B2B11] tabular-nums">
                        <span
                          className="font-black leading-none tracking-[-0.015em] text-[#8B6508]"
                          style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
                        >
                          {pkg.launch}
                        </span>
                        <span
                          className="mb-1.5 font-bold text-[#8B6508]"
                          style={{ fontSize: "0.8rem" }}
                        >
                          / {isAr ? "شهر" : "mo"}
                        </span>
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="my-3 h-px w-full bg-[#E7DDCC]" />

                    {/* Perks title */}
                    <p className="pricing-perks-title mb-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#5E4A31]">
                      {activeTab === "group"
                        ? (isAr ? "مزايا المجموعة" : "Group Perks")
                        : (isAr ? "مزايا خاصة" : "Unique Perks")}
                    </p>

                    {/* Features */}
                    <ul className="mb-4 w-full space-y-1.5 text-start">
                      {(isAr ? pkg.features.ar : pkg.features.en).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-1.5 leading-snug text-[#625547]"
                          style={{ fontSize: "0.7rem" }}
                        >
                          <span className="mt-[2px] shrink-0 text-[#9FB366]">
                            <IconCheck />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTAs — pushed to bottom */}
                    <div className="mt-auto flex w-full items-center gap-2">
                      <Link
                        href="/contact"
                        className="btn-trial-s pricing-btn-trial flex-1 inline-flex items-center justify-center rounded-full border border-[#9C6A46] bg-[#FBF8F1] font-semibold text-[#6B4220] transition-all"
                        style={{ padding: "7px 6px", fontSize: "0.69rem" }}
                      >
                        {isAr ? "احجز تجربة" : "Book Trial"}
                      </Link>
                      <Link
                        href="/contact"
                        className="btn-sub-s pricing-btn-sub flex-1 inline-flex items-center justify-center rounded-full font-semibold text-[#F8F5EB] transition-all"
                        style={{ padding: "7px 6px", fontSize: "0.69rem" }}
                      >
                        {isAr ? "اشترك" : "Subscribe"}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="p-2.5 sm:p-3.5 bg-[#F7F4EE]">
            <div className="mb-3 rounded-xl border border-[#E4D9C5] bg-[#FBF7EF] px-3.5 py-3 sm:px-4">
              <h4 className="text-[14px] sm:text-[16px] font-extrabold text-[#2F433B]">
                {isAr ? "جدول تسعير العائلة (لكل فرد)" : "Family Pricing Table (Per Person)"}
              </h4>
            </div>

            <div className="hidden md:block overflow-hidden rounded-xl border border-[#DED3BD] bg-white">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#F4EFE4] text-[#2F433B]">
                    <th className="px-4 py-3 text-start text-[12px] font-bold border-b border-[#E6DCCB]">
                      {isAr ? "الساعات / الشهر" : "Hours / Month"}
                    </th>
                    <th className="px-4 py-3 text-start text-[12px] font-bold border-b border-[#E6DCCB]">
                      {isAr ? "عضوان" : "2 Members"}
                    </th>
                    <th className="px-4 py-3 text-start text-[12px] font-bold border-b border-[#E6DCCB]">
                      {isAr ? "خصم 20% (أول 3 أشهر)" : "20% OFF (First 3 Months)"}
                    </th>
                    <th className="px-4 py-3 text-start text-[12px] font-bold border-b border-[#E6DCCB]">
                      {isAr ? "3 أعضاء" : "3 Members"}
                    </th>
                    <th className="px-4 py-3 text-start text-[12px] font-bold border-b border-[#E6DCCB]">
                      {isAr ? "خصم 20% (أول 3 أشهر)" : "20% OFF (First 3 Months)"}
                    </th>
                    <th className="px-4 py-3 text-start text-[12px] font-bold border-b border-[#E6DCCB]">
                      {isAr ? "+4 أعضاء" : "4+ Members"}
                    </th>
                    <th className="px-4 py-3 text-start text-[12px] font-bold border-b border-[#E6DCCB]">
                      {isAr ? "خصم 20% (أول 3 أشهر)" : "20% OFF (First 3 Months)"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {FAM_ROWS.map((row, idx) => (
                    <tr key={row.hours} className={idx % 2 === 0 ? "bg-white" : "bg-[#FBF8F1]"}>
                      <td className="px-4 py-3 border-b border-[#EEE5D6]">
                        <p className="text-[13px] font-semibold text-[#2F433B]">
                          {row.hours} {isAr ? "ساعات / شهر" : "Hours / Month"}
                        </p>
                      </td>
                      <td className="px-4 py-3 border-b border-[#EEE5D6]">
                        <span className="text-[14px] text-[#60746B] font-bold tabular-nums">{row.m2.regular}</span>
                      </td>
                      <td className="px-4 py-3 border-b border-[#EEE5D6]">
                        <span className="inline-flex items-center gap-1.5 text-[17px] font-black text-[#8B6508] tabular-nums">
                          <IconTag size={16} /> {row.m2.discounted}
                        </span>
                      </td>
                      <td className="px-4 py-3 border-b border-[#EEE5D6]">
                        <span className="text-[14px] text-[#60746B] font-bold tabular-nums">{row.m3.regular}</span>
                      </td>
                      <td className="px-4 py-3 border-b border-[#EEE5D6]">
                        <span className="inline-flex items-center gap-1.5 text-[17px] font-black text-[#8B6508] tabular-nums">
                          <IconTag size={16} /> {row.m3.discounted}
                        </span>
                      </td>
                      <td className="px-4 py-3 border-b border-[#EEE5D6]">
                        <span className="text-[14px] text-[#60746B] font-bold tabular-nums">{row.m4.regular}</span>
                      </td>
                      <td className="px-4 py-3 border-b border-[#EEE5D6]">
                        <span className="inline-flex items-center gap-1.5 text-[17px] font-black text-[#8B6508] tabular-nums">
                          <IconTag size={16} /> {row.m4.discounted}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:gap-3 md:hidden">
              {FAM_ROWS.map((row) => (
                <article
                  key={row.hours}
                  className="rounded-xl border border-[#DED3BD] bg-white p-3 sm:p-4 shadow-[0_4px_14px_rgba(26,26,20,0.04)]"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="text-[13px] sm:text-[14px] font-bold text-[#2F433B]">
                      {row.hours} {isAr ? "ساعات / شهر" : "Hours / Month"}
                    </h4>
                    <span className="rounded-full border border-[#D4A017]/35 bg-[#FFF6DE] px-2 py-0.5 text-[10px] font-semibold text-[#8B6508]">
                      {isAr ? "خطة عائلية" : "Family Plan"}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="rounded-lg border border-[#E8DFC9] bg-[#FAF7F1] px-3 py-2.5 shadow-sm">
                      <p className="text-[12px] font-bold text-[#2F433B] mb-1.5">{isAr ? "عضوان" : "2 Members"}</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-[14px] text-[#60746B] font-bold tabular-nums">{row.m2.regular}</span>
                        <span className="inline-flex items-center gap-1 text-[18px] font-black text-[#8B6508] tabular-nums">
                          <IconTag size={16} /> {row.m2.discounted}
                        </span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[#E8DFC9] bg-[#FAF7F1] px-3 py-2.5 shadow-sm">
                      <p className="text-[12px] font-bold text-[#2F433B] mb-1.5">{isAr ? "3 أعضاء" : "3 Members"}</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-[14px] text-[#60746B] font-bold tabular-nums">{row.m3.regular}</span>
                        <span className="inline-flex items-center gap-1 text-[18px] font-black text-[#8B6508] tabular-nums">
                          <IconTag size={16} /> {row.m3.discounted}
                        </span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[#E8DFC9] bg-[#FAF7F1] px-3 py-2.5 shadow-sm">
                      <p className="text-[12px] font-bold text-[#2F433B] mb-1.5">{isAr ? "+4 أعضاء" : "4+ Members"}</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-[14px] text-[#60746B] font-bold tabular-nums">{row.m4.regular}</span>
                        <span className="inline-flex items-center gap-1 text-[18px] font-black text-[#8B6508] tabular-nums">
                          <IconTag size={16} /> {row.m4.discounted}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* ── Included in all plans strip ── */}
        <div className="border-t border-[#DCCFB6] px-4 sm:px-5 py-3.5 bg-[#F1EBDF]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7E9189] mb-3">
            {isAr ? "ضمان نبراس" : "The Nibras Guarantee"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {includedItems.map(({ icon, en, ar }, gi) => (
              <div key={`${activeTab}-${gi}`} className="flex items-center gap-2 text-[12.5px] text-[#43564E]">
                <span className="shrink-0 text-[#B49B44]">{icon}</span>
                {isAr ? ar : en}
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer CTA ── */}
        <div className="px-4 sm:px-5 py-4 bg-[#FBF8F1] border-t border-[#E1D7C3]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-2.5 text-[13px] font-semibold text-[#F2D58C]"
              style={{ backgroundColor: brandGreen }}
            >
              {isAr ? "اشترك / استفسر" : "Subscribe / Enquire"}
              <IconArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Section 1 — Auto card slider (left column) ─────────────────── */
const HERO_SLIDE_COUNT = 3;
const HERO_SLIDE_MS = 4800;

function HeroPaymentCardSlider({ isAr }: { isAr: boolean }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % HERO_SLIDE_COUNT);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, HERO_SLIDE_MS);
    return () => window.clearInterval(id);
  }, [paused, next]);

  const dotsLabel = isAr ? "انتقل إلى البطاقة" : "Go to card";
  const slideShell =
    "s1-card s1-slide-card flex h-full min-h-[288px] w-full flex-col overflow-hidden rounded-[18px] border bg-white";
  const slideBody = "flex flex-1 flex-col px-4 pt-5 pb-6 sm:px-7";
  const slideIcon =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#F2D58C]";
  const slideDivider = "mb-4 h-px bg-gradient-to-r from-transparent via-[#B49B44]/20 to-transparent";

  return (
    <div
      className="s1-slider mx-auto w-full max-w-[388px] lg:max-w-[420px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="s1-slider-viewport relative overflow-hidden rounded-[18px]"
        aria-roledescription="carousel"
        aria-label={isAr ? "بطاقات الدفع والضمان" : "Payment & guarantee cards"}
      >
        <div
          className="s1-slider-track flex h-full items-stretch will-change-transform"
          style={{ transform: `translateX(-${index * 100}%)` }}
          dir="ltr"
        >
          {/* Slide 1 — Money-back / main */}
          <div className="flex min-h-[288px] min-w-full shrink-0 px-0.5">
            <div
              className={`${slideShell} s1-main-card border-[#B49B44]/32`}
              style={{
                boxShadow:
                  "0 20px 54px rgba(180,155,68,0.13), 0 4px 16px rgba(26,26,20,0.08), 0 1px 4px rgba(26,26,20,0.04)",
              }}
            >
              <div className="h-[3px] w-full bg-gradient-to-r from-[#254A3A]/50 via-[#B49B44]/60 to-[#254A3A]/50" />
              <div className={slideBody} dir={isAr ? "rtl" : "ltr"}>
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={slideIcon}
                    style={{
                      background: "linear-gradient(135deg, #254A3A 0%, #1e3d2f 100%)",
                      boxShadow: "0 4px 12px rgba(37,74,58,0.25)",
                    }}
                  >
                    <IconShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.15em] text-[#9A9282]">
                      {isAr ? "ضمان استرداد" : "Money-back"}
                    </p>
                    <p className="text-[14px] font-semibold leading-tight text-[#1A1A14]">
                      {isAr ? "100% بعد أول جلسة" : "100% after first session"}
                    </p>
                  </div>
                </div>
                <div className={slideDivider} />
                <div className="mb-4 flex flex-1 flex-col justify-center gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-[13px] text-[#6F6F5C]">
                    {isAr ? "طرق الدفع" : "Payment methods"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { k: "visa", label: "Visa", el: <IconVisa size={28} /> },
                      { k: "mc", label: "Mastercard", el: <IconMastercard size={28} /> },
                      { k: "pp", label: "PayPal", el: <IconPayPal size={28} /> },
                    ].map((b) => (
                      <span
                        key={b.k}
                        className="flex h-8 w-[52px] items-center justify-center rounded-md border border-[#B49B44]/22 bg-[#FAFAF6] transition-colors hover:border-[#B49B44]/45"
                        title={b.label}
                      >
                        <span className="sr-only">{b.label}</span>
                        {b.el}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#254A3A]/14 bg-[#eef4f0] px-3 py-1 text-[11px] font-semibold text-[#254A3A]">
                    <IconShieldCheck size={10} />
                    {isAr ? "مدفوعات مشفّرة" : "Encrypted"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B49B44]/22 bg-[#FFFBEF] px-3 py-1 text-[11px] font-semibold text-[#8A7430]">
                    {isAr ? "بدون مخاطرة" : "Zero risk"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 — Launch offer */}
          <div className="flex min-h-[288px] min-w-full shrink-0 px-0.5">
            <div
              className={`${slideShell.replace("bg-white", "")} border-[#9FB366]/60 bg-[#E0E8D3]`}
              style={{
                boxShadow: "0 20px 54px rgba(159,179,102,0.25), 0 4px 16px rgba(26,26,20,0.06)",
              }}
            >
              <div className="h-[4px] w-full bg-gradient-to-r from-[#9FB366] via-[#B2C776] to-[#9FB366]" />
              <div className={slideBody} dir={isAr ? "rtl" : "ltr"}>
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`${slideIcon} text-[#3a4f1a]`}
                    style={{
                      background: "linear-gradient(135deg, #d3e0b8 0%, #b8cb8c 100%)",
                      boxShadow: "0 4px 12px rgba(159,179,102,0.35)",
                    }}
                  >
                    <IconSparkles size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-[#566b33]">
                      {isAr ? "عرض الإطلاق" : "Launch offer"}
                    </p>
                    <p className="text-[14px] font-bold leading-tight text-[#16210b]">
                      {isAr ? "خصم 30% — أول 3 شهور" : "30% off — first 3 months"}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#9FB366]/60 bg-[#d5e3b5] px-2.5 py-1 text-[10px] font-black tracking-wide text-[#3a4f1a]">
                    {isAr ? "30%" : "30% OFF"}
                  </span>
                </div>
                <div className={slideDivider} style={{ backgroundImage: "linear-gradient(to right, transparent, rgba(119,143,62,0.4), transparent)" }} />
                <div className="flex flex-1 flex-col items-center justify-center py-1 text-center">
                  <span className="font-serif text-[48px] font-black leading-none text-[#405221] sm:text-[56px] drop-shadow-sm">
                    30%
                  </span>
                  <p className="mt-2 text-[14px] font-semibold text-[#485929]">
                    {isAr ? "سعر مخفّض للبداية" : "Discounted starter rate"}
                  </p>
                </div>
                <p className="mt-auto text-center text-[12px] leading-snug text-[#2f3d1b] opacity-90 font-bold">
                  {isAr
                    ? "استفد بالسعر المخفّض الآن — السعر العادي يبدأ بعد 3 شهور."
                    : "Secure the discounted rate now — standard price after 3 months."}
                </p>
              </div>
            </div>
          </div>

          {/* Slide 3 — Flexibility */}
          <div className="flex min-h-[288px] min-w-full shrink-0 px-0.5">
            <div
              className={`${slideShell} border-[#254A3A]/14`}
              style={{
                background: "linear-gradient(180deg, #ffffff 0%, #f3f8f5 100%)",
                boxShadow: "0 20px 54px rgba(37,74,58,0.10), 0 4px 16px rgba(37,74,58,0.06)",
              }}
            >
              <div className="h-[3px] w-full bg-gradient-to-r from-[#254A3A]/30 via-[#254A3A]/50 to-[#254A3A]/30" />
              <div className={slideBody} dir={isAr ? "rtl" : "ltr"}>
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`${slideIcon} text-[#F2D58C]`}
                    style={{
                      background: "linear-gradient(135deg, #254A3A 0%, #1e3d2f 100%)",
                      boxShadow: "0 4px 12px rgba(37,74,58,0.25)",
                    }}
                  >
                    <IconRefresh size={18} />
                  </div>
                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.15em] text-[#254A3A]/55">
                      {isAr ? "مرونة" : "Flexibility"}
                    </p>
                    <p className="text-[14px] font-semibold leading-tight text-[#254A3A]">
                      {isAr ? "إلغاء بإشعار 7 أيام" : "Cancel in 7 days"}
                    </p>
                  </div>
                </div>
                <div className={slideDivider} />
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-[13px] leading-relaxed text-[#3D5248]">
                    {isAr
                      ? "غيّر أو ألغِ اشتراكك بسهولة — بدون التزام طويل."
                      : "Change or cancel easily — no long-term lock-in."}
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#254A3A]/50" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#254A3A]/30" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#254A3A]/15" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#254A3A]/14 bg-[#eef4f0] px-3 py-1 text-[11px] font-semibold text-[#254A3A]">
                    {isAr ? "بدون التزام" : "No lock-in"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label={dotsLabel}>
        {Array.from({ length: HERO_SLIDE_COUNT }, (_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={index === i}
            aria-label={`${dotsLabel} ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === i ? "w-8 bg-[#B49B44]" : "w-2 bg-[#1C3A2E]/20 hover:bg-[#B49B44]/45"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Types (kept for INCLUDED_ITEMS below) ──────────────────────── */
const INCLUDED_ITEMS: { icon: ReactNode; key: string }[] = [
  { icon: <IconClock />,    key: "pricing.included.flexSchedule" },
  { icon: <IconCalendar />, key: "pricing.included.reschedule" },
  { icon: <IconBook />,     key: "pricing.included.materials" },
  { icon: <IconChartBar />, key: "pricing.included.reports" },
  { icon: <IconUsers />,    key: "pricing.included.community" },
  { icon: <IconTarget />,   key: "pricing.included.plan" },
];

/* ─── Main Component ─────────────────────────────────────────────── */
export default function PricingPageContent() {
  const { locale, t } = useI18n();
  const isAr = locale === "ar";
  const brandGreen = "#254A3A";

  const [heroReady, setHeroReady] = useState(false);
  const packagesReveal = useReveal<HTMLElement>();
  const includedReveal = useReveal<HTMLElement>();

  useEffect(() => {
    const id = requestAnimationFrame(() => setHeroReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const whatsappHref =
    "https://wa.me/201099493640?text=" +
    encodeURIComponent(
      isAr
        ? "مرحباً، أود الاستفسار عن باقات التعلّم في شبكة نبراس."
        : "Hello, I'd like to ask about Nibras Network learning packages."
    );

  return (
    <>
      <style jsx global>{`
        @keyframes pricingFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pfu { opacity: 0; transform: translateY(24px); }
        .pfu-on { animation: pricingFadeUp 650ms cubic-bezier(.2,.8,.2,1) both; }
        .pfu-d1 { animation-delay: 90ms; }
        .pfu-d2 { animation-delay: 180ms; }
        .pfu-d3 { animation-delay: 270ms; }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .launch-pill {
          background: linear-gradient(90deg,
            rgba(212,160,23,0.12) 0%,
            rgba(242,213,140,0.28) 40%,
            rgba(212,160,23,0.12) 100%
          );
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }
        /* Section 2 tab/pkg styles */
        .ps2-tab { transition: all 0.18s; }
        .ps2-tab.active { background: #254A3A !important; color: #F2D58C !important; border-color: #254A3A !important; }
        .ps2-tab:not(.active):hover { border-color: #B49B44; color: #254A3A; }
        .pkg-btn { transition: all 0.18s; }
        .pkg-btn.sel { background: #254A3A !important; color: #F2D58C !important; border-color: #254A3A !important; }
        .pkg-btn:not(.sel):hover { border-color: #254A3A; color: #254A3A; }
        .pkg-card-anim { animation: pkgFadeIn 0.22s ease; }
        @keyframes pkgFadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        .pricing-tab-card {
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }
        .pricing-tab-card:hover {
          transform: translateY(-1px);
          border-color: #ccb998;
          box-shadow: 0 10px 24px rgba(38, 33, 23, 0.1);
        }
        .pricing-btn-sub {
          background: linear-gradient(90deg, #a8bf68 0%, #95ae56 100%);
          box-shadow: 0 6px 14px rgba(128, 154, 70, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.22);
        }
        .pricing-btn-sub:hover {
          filter: brightness(0.97);
          transform: translateY(-0.5px);
        }
        .pricing-btn-trial:hover {
          background: #f5eee4;
        }
        .pricing-perks-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .pricing-perks-title::before,
        .pricing-perks-title::after {
          content: "";
          width: 30px;
          height: 1px;
          background: #d6cbb8;
        }
        .btn-sub-s { transition: opacity 0.18s, transform 0.18s; }
        .btn-sub-s:hover { opacity: 0.95; }
        .btn-trial-s:hover { background: rgba(37,74,58,0.06); }
        .fam-tr:hover td { background: rgba(37,74,58,0.04); }
        /* Section 1 (hero) card polish */
        .s1-card { transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease; }
        .s1-card:hover { transform: translateY(-2px); box-shadow: 0 18px 50px rgba(26,26,20,0.10); border-color: rgba(180,155,68,0.45); }
        .s1-soft {
          background: linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.72) 100%);
          backdrop-filter: blur(8px);
        }

        /* Section 1 auto card slider */
        .s1-slider {
          position: relative;
        }
        .s1-slider-viewport {
          height: 288px;
        }
        .s1-slider-track {
          height: 100%;
          transition: transform 700ms cubic-bezier(0.33, 1, 0.68, 1);
        }
        .s1-slide-card {
          height: 100%;
        }
        .s1-card {
          position: relative;
          transition: border-color 220ms ease, box-shadow 220ms ease, transform 220ms ease;
        }
        .s1-card:hover {
          border-color: rgba(180,155,68,0.55) !important;
          transform: translateY(-2px);
        }
        .s1-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            105deg,
            transparent 35%,
            rgba(255,255,255,0.55) 50%,
            transparent 65%
          );
          background-size: 220% 100%;
          background-position: 150% center;
          transition: background-position 600ms ease;
          pointer-events: none;
          z-index: 1;
        }
        .s1-card:hover::before {
          background-position: -50% center;
        }
        .s1-main-card::after {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: transparent;
          box-shadow: 0 0 0 0 rgba(180,155,68,0);
          animation: cardGlowPulse 3.6s ease-in-out infinite;
          pointer-events: none;
          z-index: -1;
        }
        @keyframes cardGlowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(180,155,68,0); }
          45%       { box-shadow: 0 0 22px 4px rgba(180,155,68,0.18); }
        }

        @media (prefers-reduced-motion: reduce) {
          .pfu-on { animation: none !important; opacity: 1 !important; transform: none !important; }
          .launch-pill { animation: none !important; }
          .s1-slider-track { transition: none !important; }
          .s1-main-card::after { animation: none !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════
          SECTION 1 — Hero Image
      ══════════════════════════════════════════════ */}
      <section className="relative w-full pt-[72px] md:pt-[80px] bg-[#F5F0E8]">
        <img
          src="/images/pricing.png"
          alt="Pricing"
          className="w-full h-auto object-cover block"
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#F5F0E8] to-transparent pointer-events-none"></div>
      </section>
      {/* ══════════════════════════════════════════════
          SECTION 2 — Tabbed Pricing
      ══════════════════════════════════════════════ */}
      <section
        ref={packagesReveal.ref}
        className="relative bg-[#F5F0E8] py-16 md:py-24 px-4 sm:px-6 -mt-1"
      >
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <header className={`text-center mb-10 transition-all duration-700 ease-out ${
            packagesReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B49B44] mb-2">
              {isAr ? "اختر خطتك" : "Choose your plan"}
            </p>
            <h2 className="font-serif text-3xl md:text-[2.4rem] font-bold mb-3" style={{ color: brandGreen }}>
              {t("pricing.packages.title")}
            </h2>
            <p className="text-[#4a5c54] text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-5">
              {t("pricing.packages.subtitle")}
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/40 bg-[#FDFAF4] px-5 py-2 text-xs sm:text-sm font-semibold text-[#8B6508] shadow-sm">
              <IconSparkles />
              {t("pricing.packages.discountPill")}
            </span>
            <div className="mx-auto mt-7 w-14 h-[3px] rounded-full bg-gradient-to-r from-[#D4A017] to-[#B8860B]" />
          </header>

          <PricingTabs
            isAr={isAr}
            brandGreen={brandGreen}
            packagesVisible={packagesReveal.visible}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — FAQs
      ══════════════════════════════════════════════ */}
      <section className="bg-[#F7F5F0] py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto" dir={isAr ? "rtl" : "ltr"}>
          <header className="text-center mb-10 md:mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B49B44] mb-2">
              Pricing &amp; Packages
            </p>
            <h2 className="font-serif text-3xl md:text-[2.4rem] font-bold mb-3" style={{ color: brandGreen }}>
              FAQs
            </h2>
            <p className="text-[#4a5c54] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Quick answers about subscriptions, discounts, payments, and flexibility.
            </p>
            <div className="mx-auto mt-7 w-14 h-[3px] rounded-full bg-gradient-to-r from-[#D4A017] to-[#B8860B]" />
          </header>

          <div className="space-y-3">
            {[
              {
                q: "How do your monthly packages work?",
                a: <>Our programs operate on a <em className="italic">monthly subscription basis</em>. You choose the number of hours per month that fits your goals, and your schedule is reserved once payment is completed.</>,
              },
              {
                q: "Can I choose the session duration?",
                a: (
                  <>
                    Yes. You can divide your monthly hours into:
                    <ul className="mt-2 space-y-1">
                      {["30-minute sessions", "45-minute sessions", "60-minute sessions"].map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#B49B44] opacity-80" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2">This allows flexibility for children, adults, and busy families.</p>
                  </>
                ),
              },
              {
                q: "Is there a discount for new students?",
                a: <>Yes. All new students receive a <em className="italic">30% launch discount for the first 3 months only</em>. After the third month, regular pricing applies automatically.</>,
              },
              {
                q: "Do you offer family discounts?",
                a: <>Yes. Families who enroll together benefit from <em className="italic">special reduced hourly rates per person</em>. This is designed to encourage a Qur'an-centered home learning environment.</>,
              },
              {
                q: "Are there any hidden fees?",
                a: <>No. We believe in full transparency. There are <em className="italic">no hidden charges or surprise fees</em>. Only standard transaction/processing fees (3–4%) may apply depending on your payment method.</>,
              },
              {
                q: "When is payment due?",
                a: <>Payment is required <em className="italic">monthly in advance</em> to confirm and secure your class schedule.</>,
              },
              {
                q: "What payment methods do you accept?",
                a: (
                  <>
                    We accept:
                    <ul className="mt-2 space-y-1">
                      {["Visa / Mastercard", "PayPal", "Bank Transfer"].map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#B49B44] opacity-80" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2">All payments are processed securely.</p>
                  </>
                ),
              },
              {
                q: "What happens after the 3-month discount ends?",
                a: <>Starting from <em className="italic">Month 4</em>, your plan continues at the regular published rate. You will receive a reminder before any billing adjustment.</>,
              },
              {
                q: "Can I upgrade or change my package?",
                a: <>Yes. You may upgrade, downgrade, or adjust your package with <em className="italic">7 days' notice</em>, based on availability.</>,
              },
              {
                q: "Is there a refund policy?",
                a: <>Yes. We offer a <em className="italic">100% satisfaction guarantee for your first session</em>. If you're not satisfied, you may request a full refund for that session.</>,
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-[#D4A017]/15 bg-white/80 shadow-sm overflow-hidden"
              >
                <summary className="cursor-pointer list-none px-5 sm:px-6 py-4 flex items-start justify-between gap-4">
                  <span className="font-serif text-[15px] sm:text-[16px] font-bold leading-snug" style={{ color: brandGreen }}>
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#D4A017]/25 bg-[#FBF8EE] text-[#8B6508] transition-transform duration-200 rotate-90 group-open:-rotate-90"
                    aria-hidden
                  >
                    <IconArrowRight />
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 -mt-1 text-[13.5px] sm:text-[14px] text-[#3D3D30] leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — What's included (overview)
      ══════════════════════════════════════════════ */}
      <section
        ref={includedReveal.ref}
        className="bg-[#EDE7D9] py-16 md:py-24 px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto">
          <header className={`text-center mb-12 md:mb-14 transition-all duration-700 ease-out ${
            includedReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            <h2 className="font-serif text-3xl md:text-[2.4rem] font-bold mb-3" style={{ color: brandGreen }}>
              {t("pricing.included.title")}
            </h2>
            <p className="text-[#4a5c54] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              {t("pricing.included.subtitle")}
            </p>
            <div className="mx-auto mt-8 w-14 h-[3px] rounded-full bg-gradient-to-r from-[#D4A017] to-[#B8860B]" />
          </header>

          <ul className="grid sm:grid-cols-2 gap-3 mb-14">
            {INCLUDED_ITEMS.map(({ icon, key }, i) => (
              <li
                key={key}
                className={`flex items-start gap-4 rounded-xl border border-[#D4A017]/12 bg-white/70 px-5 py-4 ${
                  includedReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionProperty: "opacity, transform",
                  transitionDuration: "700ms",
                  transitionTimingFunction: "ease-out",
                  transitionDelay: includedReveal.visible ? `${80 + i * 60}ms` : "0ms",
                }}
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(37,74,58,0.07)", color: brandGreen }}>
                  {icon}
                </span>
                <div className="flex items-start gap-2.5 min-w-0">
                  <span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white" style={{ backgroundColor: brandGreen }}>
                    <IconCheck />
                  </span>
                  <span className="text-[#2d3e36] text-sm sm:text-[15px] leading-relaxed">
                    {t(key)}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Contact card */}
          <div
            className={`relative overflow-hidden rounded-2xl p-8 md:p-10 shadow-[0_24px_60px_rgba(28,58,46,0.28)] ring-1 ring-[#B8860B]/20 ${
              includedReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionProperty: "opacity, transform",
              transitionDuration: "700ms",
              transitionTimingFunction: "ease-out",
              transitionDelay: includedReveal.visible ? "240ms" : "0ms",
              background: "linear-gradient(160deg, rgba(255,252,245,1) 0%, rgba(251,248,238,1) 55%, rgba(237,231,217,1) 100%)",
            }}
          >
            <div className="pointer-events-none absolute -top-12 -right-12 h-52 w-52 rounded-full bg-[#D4A017]/[0.09] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-[#B49B44]/[0.08] blur-3xl" />

            <h3 className="font-serif text-xl md:text-2xl font-bold mb-1.5 text-center" style={{ color: brandGreen }}>
              {t("pricing.contact.title")}
            </h3>
            <p className="text-[#4a5c54] text-sm text-center mb-8">
              {t("pricing.launch.badge")}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex flex-col items-center gap-2.5 rounded-xl border border-[#D4A017]/25 px-5 py-5 text-sm font-semibold transition-all duration-200 hover:shadow-lg"
                style={{ backgroundColor: brandGreen }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A017]/15 text-[#F2D58C] group-hover:bg-[#D4A017]/25 transition-colors">
                  <IconBrandWhatsapp />
                </span>
                <span className="text-[#8bbfaa] text-xs font-medium">{t("pricing.contact.whatsappLabel")}</span>
                <span className="text-[#F2D58C] font-bold tabular-nums">+201099493640</span>
              </a>

              <a
                href="mailto:nibrasnetwork55@gmail.com"
                className="group flex-1 flex flex-col items-center gap-2.5 rounded-xl border border-[#D4A017]/20 bg-white/70 hover:bg-white px-5 py-5 text-sm font-semibold transition-all duration-200 hover:shadow-lg"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A017]/10 text-[#8B6508] group-hover:bg-[#D4A017]/20 transition-colors">
                  <IconMail />
                </span>
                <span className="text-[#6b7d75] text-xs font-medium">{t("pricing.contact.emailLabel")}</span>
                <span className="break-all text-center" style={{ color: brandGreen }}>
                  nibrasnetwork55@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}