"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useMemo } from "react";
import { CoursesMegaPanel, CoursesMobileMega } from "@/components/CoursesMegaMenu";
import LanguageToggle from "@/components/LanguageToggle";
import { useI18n } from "@/components/LocaleProvider";

// Inline chevron — no external dependency needed
function ChevronDown({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ─── Inline SVG Icons ────────────────────────────────────────────────────────
const SvgStory   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" width={15} height={15}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
const SvgMission = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" width={15} height={15}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const SvgValues  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" width={15} height={15}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const SvgWhyUs   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" width={15} height={15}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const SvgTeam    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" width={15} height={15}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;

// ─── Types ───────────────────────────────────────────────────────────────────
type SimpleLink = {
  label: string;
  href: string;
  mega?: never;
  narrowLabel?: string;
};
type MegaCoursesNav = { label: string; href: string; mega: true };
type DropdownLink = {
  label: string;
  href: string;
  dropdown: { label: string; href: string; icon?: React.ReactNode }[];
};
type NavItem = SimpleLink | DropdownLink | MegaCoursesNav;

function hasDropdown(item: NavItem): item is DropdownLink {
  return "dropdown" in item && Array.isArray((item as DropdownLink).dropdown);
}

function isMegaCourses(item: NavItem): item is MegaCoursesNav {
  return "mega" in item && (item as MegaCoursesNav).mega === true;
}

// ─── Nav builders (labels from i18n) ──────────────────────────────────────────
// ترتيب: Home → About → Courses → Tutors → Pricing → Testimonials → Blog → Contact
function buildPrimaryNav(t: (key: string) => string): NavItem[] {
  return [
    { label: t("nav.home"), href: "/" },
    {
      label: t("nav.about"),
      href: "/about",
      dropdown: [
        { label: t("nav.about.story"),   href: "/about/story",   icon: <SvgStory /> },
        { label: t("nav.about.mission"), href: "/about/mission", icon: <SvgMission /> },
        { label: t("nav.about.values"),  href: "/about/values",  icon: <SvgValues /> },
        { label: t("nav.about.whyUs"),   href: "/about/why-us",  icon: <SvgWhyUs /> },
        { label: t("nav.about.team"),    href: "#",    icon: <SvgTeam /> },
      ],
    },
    { label: t("nav.courses"),      href: "/courses",      mega: true },
    { label: t("nav.tutors"),       href: "/tutors" },
    { label: t("nav.pricing"),      href: "/pricing" },
    { label: t("nav.testimonialsNarrow"), href: "/testimonials" },
    { label: t("nav.blog"),    href: "/blog" },
    { label: t("nav.contact"), href: "/contact" },
  ];
}

function buildMoreNav(t: (key: string) => string): SimpleLink[] {
  return [
    { label: t("more.studentAchievements"), href: "/student-achievements" },
    { label: t("more.faqs"), href: "/faqs" },
    { label: t("more.ebooks"), href: "/ebooks" },
    { label: t("more.howItWorks"), href: "/how-it-works" },
    { label: t("more.teachingMethodology"), href: "/teaching-methodology" },
    { label: t("more.policiesTerms"), href: "/policies" },
  ];
}

// ─── Dropdown Menu ────────────────────────────────────────────────────────────
function DropdownMenu({
  items,
  isOpen,
}: {
  items: { label: string; href: string; icon?: React.ReactNode }[];
  isOpen: boolean;
}) {
  return (
    <div
      className={`
        absolute top-[calc(100%+10px)] left-1/2 z-50 -translate-x-1/2
        min-w-[14rem] w-max max-w-[min(100vw-2rem,20rem)] bg-[#FDFAF4] border border-[#D4A017]/25
        rounded-2xl shadow-[0_12px_40px_rgba(28,58,46,0.14)]
        overflow-hidden
        transition-all duration-200 origin-top
        ${isOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"}
      `}
    >
      <div className="absolute -top-3 inset-x-0 h-3" />
      <div
        className="pointer-events-none absolute -top-[6px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#FDFAF4] border-t border-s border-[#D4A017]/25"
        aria-hidden
      />
      <ul className="py-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center gap-3 px-4 py-2.5 text-start text-[13px] font-semibold text-[#3a3a3a] hover:text-[#B8860B] hover:bg-[#D4A017]/8 transition-all duration-150 tracking-wide group"
            >
              {item.icon && (
                <span className="text-[#B8860B]/55 group-hover:text-[#B8860B] group-hover:scale-110 transition-all duration-150 flex-shrink-0">
                  {item.icon}
                </span>
              )}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── More Dropdown ────────────────────────────────────────────────────────────
function MoreDropdown({
  items,
  isOpen,
}: {
  items: SimpleLink[];
  isOpen: boolean;
}) {
  return (
    <div
      className={`
        absolute top-[calc(100%+10px)] end-0
        min-w-[13rem] w-max max-w-[min(100vw-2rem,22rem)] bg-[#FDFAF4] border border-[#D4A017]/25
        rounded-2xl shadow-[0_12px_40px_rgba(28,58,46,0.14)]
        z-50
        transition-all duration-200 origin-top
        ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"}
      `}
    >
      <div className="absolute -top-3 inset-x-0 h-3" />
      <ul className="py-2 overflow-hidden rounded-2xl">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center px-4 py-2.5 text-start text-[13px] font-semibold text-[#3a3a3a] hover:text-[#B8860B] hover:bg-[#D4A017]/8 transition-all duration-150 tracking-wide"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Courses mega menu trigger (desktop) ─────────────────────────────────────
function MegaCoursesNavItem({ item }: { item: MegaCoursesNav }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpen(true); };
  const closeMenu = () => { closeTimer.current = setTimeout(() => setOpen(false), 140); };

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-[11px] lg:text-[12px] xl:text-[13px] font-semibold text-[#3a3a3a] hover:text-[#B8860B] transition-colors duration-200 relative group tracking-wide whitespace-nowrap py-1"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          size={13}
          className={`text-[#B8860B] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
        <span className="absolute -bottom-1 start-0 w-0 h-[1.5px] bg-[#B8860B] group-hover:w-full transition-all duration-300" />
      </button>
      <CoursesMegaPanel open={open} onNavigate={() => setOpen(false)} anchorRef={ref} />
    </li>
  );
}

// ─── Nav Item Component ───────────────────────────────────────────────────────
function NavItemComp({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpen(true); };
  const closeMenu = () => { closeTimer.current = setTimeout(() => setOpen(false), 120); };

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (isMegaCourses(item)) return <MegaCoursesNavItem item={item} />;

  if (hasDropdown(item)) {
    return (
      <li
        ref={ref}
        className="relative"
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-1 text-[11px] lg:text-[12px] xl:text-[13px] font-semibold text-[#3a3a3a] hover:text-[#B8860B] transition-colors duration-200 relative group tracking-wide whitespace-nowrap py-1"
          aria-haspopup="true"
          aria-expanded={open}
        >
          {item.label}
          <ChevronDown
            size={13}
            className={`text-[#B8860B] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
          <span className="absolute -bottom-1 start-0 w-0 h-[1.5px] bg-[#B8860B] group-hover:w-full transition-all duration-300" />
        </button>
        <DropdownMenu items={item.dropdown} isOpen={open} />
      </li>
    );
  }

  return (
    <li>
      <Link
        href={item.href}
        title={"narrowLabel" in item && item.narrowLabel ? item.label : undefined}
        className="text-[11px] lg:text-[12px] xl:text-[13px] font-semibold text-[#3a3a3a] hover:text-[#B8860B] transition-colors duration-200 relative group tracking-wide whitespace-nowrap py-1 inline-block"
      >
        {"narrowLabel" in item && item.narrowLabel ? (
          <>
            <span className="xl:hidden">{item.narrowLabel}</span>
            <span className="hidden xl:inline">{item.label}</span>
          </>
        ) : (
          item.label
        )}
        <span className="absolute -bottom-1 start-0 w-0 h-[1.5px] bg-[#B8860B] group-hover:w-full transition-all duration-300" />
      </Link>
    </li>
  );
}

// ─── Mobile Accordion ─────────────────────────────────────────────────────────
function MobileAccordion({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (isMegaCourses(item)) {
    return (
      <div className="border-b border-[#D4A017]/10 last:border-0">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-3 py-3 text-start text-sm font-semibold text-[#3a3a3a] transition-colors hover:text-[#B8860B] tracking-wide"
          aria-expanded={open}
        >
          {item.label}
          <ChevronDown
            size={15}
            className={`shrink-0 text-[#B8860B] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open ? (
          <div className="pb-4">
            <CoursesMobileMega onPickLink={onNavigate} />
          </div>
        ) : null}
      </div>
    );
  }

  if (hasDropdown(item)) {
    return (
      <div className="border-b border-[#D4A017]/10 last:border-0">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between py-3 text-sm font-semibold text-[#3a3a3a] hover:text-[#B8860B] transition-colors tracking-wide"
        >
          {item.label}
          <ChevronDown
            size={15}
            className={`text-[#B8860B] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="pb-3 ps-3 flex flex-col gap-1">
            {item.dropdown.map((sub) => (
              <li key={sub.href}>
                <Link
                  href={sub.href}
                  onClick={() => onNavigate?.()}
                  className="flex items-center gap-2 py-1.5 text-[13px] text-[#555] hover:text-[#B8860B] transition-colors tracking-wide"
                >
                  {sub.icon && (
                    <span className="text-[#B8860B]/55 flex-shrink-0">{sub.icon}</span>
                  )}
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={() => onNavigate?.()}
      className="block py-3 text-sm font-semibold text-[#3a3a3a] hover:text-[#B8860B] transition-colors border-b border-[#D4A017]/10 last:border-0 tracking-wide"
    >
      {item.label}
    </Link>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const { t, locale } = useI18n();
  const primaryNav = useMemo(() => buildPrimaryNav(t), [t]);
  const moreNav = useMemo(() => buildMoreNav(t), [t]);

  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const moreCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMore  = () => { if (moreCloseTimer.current) clearTimeout(moreCloseTimer.current); setMoreOpen(true); };
  const closeMore = () => { moreCloseTimer.current = setTimeout(() => setMoreOpen(false), 120); };

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node))
        setMoreOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Announcement Bar ── */}
      {showAnnouncement && (
        <div className="bg-[#1C3A2E] text-[#F5F0E8] text-[13px] relative z-[60] flex items-center justify-between px-4 py-2 w-full transition-all duration-300 min-h-[36px]">
          {/* Contact Info (Hidden on mobile) */}
          <a
            href="https://wa.me/201099493640"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 opacity-90 hover:opacity-100 hover:text-[#D4A017] hover:scale-105 hover:-translate-y-[1px] transition-all duration-300 text-[13px] font-semibold flex-shrink-0"
          >
            <svg className="animate-pulse" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span dir="ltr">{t("announcement.contact")}</span>
          </a>

          {/* Discount Message (Absolute Centered) */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center font-bold px-2 text-[10px] sm:text-[12px] md:text-[14px] leading-tight max-w-[85%] md:w-auto transition-all duration-300 hover:text-[#D4A017] hover:scale-[1.03] cursor-default tracking-wide drop-shadow-sm whitespace-nowrap overflow-hidden text-ellipsis">
            {t("announcement.discount")}
          </div>

          {/* Close Button */}
          <button
            onClick={() => setShowAnnouncement(false)}
            className="text-white/70 hover:text-[#D4A017] hover:scale-110 hover:rotate-90 transition-all duration-300 flex-shrink-0 ms-auto md:ms-0 z-10 p-1"
            aria-label={t("announcement.close")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      )}

      <nav
        className={`sticky top-0 inset-x-0 z-50 bg-[#F5F0E8]/97 backdrop-blur-md border-b border-[#D4A017]/35 shadow-[0_1px_12px_rgba(180,134,11,0.08)] -mb-[72px] md:-mb-[80px] ${locale === "ar" ? "nav-ar-locale" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-visible">

        {/* ── Desktop ── */}
        <div className="hidden md:flex items-center justify-between md:h-[80px] w-full relative">

          {/* Left: Logo */}
          <Link
            href="/"
            className="group flex-shrink-0 z-10 flex items-center"
          >
            <div className="relative w-48 lg:w-56 xl:w-64 h-[70px] lg:h-[76px] xl:h-[80px] group-hover:scale-[1.03] transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt={t("nav.logoAlt")}
                fill
                className="object-contain scale-[1.15] origin-left"
                priority
              />
            </div>
          </Link>

          {/* Center: primary nav */}
          <ul className="flex-1 flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-2 md:gap-x-3 lg:gap-x-4 px-2 xl:px-4 min-w-0">
            {primaryNav.map((item) => (
              <NavItemComp
                key={"mega" in item && item.mega ? "courses-mega" : item.href}
                item={item}
              />
            ))}
          </ul>

          {/* Right: Actions */}
          <div className="flex items-center justify-end gap-2.5 lg:gap-4 shrink-0 z-10">
            <LanguageToggle />
            <span className="w-px h-5 bg-[#D4A017]/40 flex-shrink-0" aria-hidden />
            {/* More dropdown */}
            <div
              ref={moreRef}
              className="relative"
              onMouseEnter={openMore}
              onMouseLeave={closeMore}
            >
              <button
                onClick={() => setMoreOpen((v) => !v)}
                className="flex items-center gap-1 text-[11px] lg:text-[12px] xl:text-[13px] font-semibold text-[#8a8065] hover:text-[#B8935F] transition-colors duration-200 tracking-wide py-1 whitespace-nowrap"
                aria-haspopup="true"
                aria-expanded={moreOpen}
              >
                {t("nav.more")}
                <ChevronDown
                  size={13}
                  className={`text-[#B8860B] transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                />
              </button>
              <MoreDropdown items={moreNav} isOpen={moreOpen} />
            </div>

            {/* Divider */}
            <span className="w-px h-5 bg-[#D4A017]/40 flex-shrink-0" />

            {/* CTA */}
            <Link
              href="/book-trial"
              className="bg-[#1C3A2E] text-[#F5F0E8] text-[10px] lg:text-[11px] xl:text-[13px] font-semibold px-3 lg:px-4 xl:px-5 py-2 xl:py-2.5 rounded-full hover:bg-[#2D5A3D] hover:scale-[1.04] transition-all duration-200 shadow-md shadow-[#1C3A2E]/20 whitespace-nowrap tracking-wide flex items-center gap-1 flex-shrink-0"
            >
              {t("nav.bookTrial")}
              <span className="text-[#D4A017] inline-block rtl:rotate-180">→</span>
            </Link>
          </div>
        </div>

        {/* ── Mobile: Logo + Hamburger ── */}
        <div className="flex md:hidden h-[70px] items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 group min-w-0">
            <div className="relative w-16 h-16 group-hover:scale-105 transition-all duration-200 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt={t("nav.logoAlt")}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-serif text-[#1C3A2E] font-bold text-[1.05rem] tracking-tight truncate">
                {t("nav.brand")}
              </span>
              <span className="text-[8px] text-[#B8860B] tracking-widest uppercase font-semibold">
                {t("nav.brandSubtitle")}
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 flex-shrink-0">
            <LanguageToggle compact />
            <button
              type="button"
              className="flex flex-col gap-1.5 p-2 flex-shrink-0 -me-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? t("nav.closeMenu") : t("nav.toggleMenu")}
              aria-expanded={menuOpen}
            >
              <span className={`block w-6 h-0.5 bg-[#1C3A2E] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[#1C3A2E] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[#1C3A2E] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu (fixed panel + scroll) ── */}
      <div
        className={`md:hidden fixed inset-x-0 top-[70px] z-40 transition-[visibility,opacity] duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          tabIndex={menuOpen ? 0 : -1}
          className="absolute inset-0 bg-[#1a3328]/30 backdrop-blur-[2px]"
          aria-label={t("nav.closeMenu")}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className="relative max-h-[calc(100dvh-70px)] overflow-y-auto overscroll-contain border-t border-[#D4A017]/30 bg-[#F5F0E8] px-4 py-4 pb-8 shadow-[0_16px_40px_rgba(28,58,46,0.12)] sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label={t("nav.mobileMenu")}
        >
          <div className="flex flex-col gap-0.5">
            {primaryNav.map((item) => (
              <MobileAccordion
                key={"mega" in item && item.mega ? "courses-mega" : item.href}
                item={item}
                onNavigate={() => setMenuOpen(false)}
              />
            ))}
            <p className="mt-3 mb-1 border-t border-[#D4A017]/20 pt-3 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7a6f4a] nav-more-label">
              {t("nav.more")}
            </p>
            {moreNav.map((item) => (
              <MobileAccordion
                key={item.href}
                item={item}
                onNavigate={() => setMenuOpen(false)}
              />
            ))}
            <Link
              href="/book-trial"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#1C3A2E] px-5 py-3.5 text-center text-sm font-semibold tracking-wide text-[#F5F0E8] transition-colors hover:bg-[#2D5A3D]"
            >
              {t("nav.bookTrial")}
              <span className="inline-block text-[#D4A017] rtl:rotate-180">→</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}