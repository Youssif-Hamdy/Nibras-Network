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
        { label: t("nav.about.team"),    href: "/about/team",    icon: <SvgTeam /> },
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
          className="w-full flex items-center justify-between py-3 text-sm font-semibold text-[#3a3a3a] hover:text-[#B8860B] transition-colors tracking-wide"
        >
          {item.label}
          <ChevronDown
            size={15}
            className={`text-[#B8860B] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[85vh] opacity-100 pb-3" : "max-h-0 opacity-0"}`}
        >
          <CoursesMobileMega onPickLink={onNavigate} />
        </div>
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

  const allMobileLinks: (NavItem | SimpleLink)[] = [...primaryNav, ...moreNav];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 bg-[#F5F0E8]/97 backdrop-blur-md border-b border-[#D4A017]/35 shadow-[0_1px_12px_rgba(180,134,11,0.08)] ${locale === "ar" ? "nav-ar-locale" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-visible">

        {/* ── Desktop ── */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:h-[80px] relative overflow-visible">

          {/* Left: primary nav — slightly roomier gaps so Arabic labels breathe */}
          <ul className="flex flex-nowrap items-center gap-x-2.5 md:gap-x-3 lg:gap-x-3.5 xl:gap-x-4 justify-start min-w-0 overflow-visible">
            {primaryNav.map((item) => (
              <NavItemComp
                key={"mega" in item && item.mega ? "courses-mega" : item.href}
                item={item}
              />
            ))}
          </ul>

          {/* Center: Logo */}
          <Link
            href="/"
            className="group flex-shrink-0 justify-self-center px-3 lg:px-4 z-10"
          >
            <div className="relative w-32 lg:w-40 xl:w-44 h-[52px] lg:h-[60px] xl:h-[64px] group-hover:scale-[1.03] transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt={t("nav.logoAlt")}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Right: More + CTA */}
          <div className="flex items-center gap-2.5 lg:gap-4 justify-end shrink-0">
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
                className="flex items-center gap-1 text-[11px] lg:text-[12px] xl:text-[13px] font-semibold text-[#3a3a3a] hover:text-[#B8860B] transition-colors duration-200 tracking-wide py-1 whitespace-nowrap"
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
            <div className="relative w-12 h-12 group-hover:scale-105 transition-all duration-200 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt={t("nav.logoAlt")}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-serif text-[#1C3A2E] font-bold text-[0.9rem] tracking-tight truncate">
                Nibras Network
              </span>
              <span className="text-[7px] text-[#B8860B] tracking-widest uppercase font-semibold">
                {t("nav.brandSubtitle")}
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 flex-shrink-0">
            <LanguageToggle compact />
            <button
              className="flex flex-col gap-1.5 p-1 flex-shrink-0"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={t("nav.toggleMenu")}
            >
              <span className={`block w-6 h-0.5 bg-[#1C3A2E] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[#1C3A2E] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[#1C3A2E] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[min(90vh,920px)] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-[#F5F0E8] border-t border-[#D4A017]/30 px-4 sm:px-6 py-4 flex flex-col max-h-[85vh] overflow-y-auto gap-0.5">
          {allMobileLinks.map((item) => (
            <MobileAccordion
              key={"mega" in item && item.mega ? "courses-mega" : item.href}
              item={item as NavItem}
              onNavigate={() => setMenuOpen(false)}
            />
          ))}
          <Link
            href="/book-trial"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#1C3A2E] text-[#F5F0E8] text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-[#2D5A3D] transition-colors tracking-wide flex items-center justify-center gap-2"
          >
            {t("nav.bookTrial")}{" "}
            <span className="text-[#D4A017] inline-block rtl:rotate-180">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}