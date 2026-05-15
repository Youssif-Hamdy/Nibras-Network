"use client";

import Link from "next/link";
import { useMemo, useState, useEffect, FormEvent } from "react";
import { useI18n } from "@/components/LocaleProvider";
import { PhoneCountryPicker, COUNTRIES } from "@/components/PhoneCountryPicker";
import { SearchableSelect } from "@/components/SearchableSelect";
import {
  FamilyMemberModal,
  emptyFamilyMember,
  isFamilyMemberComplete,
  type FamilyMemberProfile,
} from "@/components/FamilyMemberModal";
import { TrialCoursesGrid } from "@/components/bookTrial/TrialCoursesGrid";
import {
  DAY_IDS,
  type DayId,
  buildEveningTimeSlots,
  formatTimeSlots,
  genderForApi,
  SchedulePill,
} from "@/components/bookTrial/scheduleFields";
import { buildTimezoneOptions, formatTimezoneDisplay } from "@/lib/timezoneDisplay";
import { PackageStepBlock } from "@/components/PackageStepBlock";
import { MEGA_BY_SUBJECT } from "@/components/coursesMegaData";
import { megaHrefLabel } from "@/lib/i18n/mega-labels";
import type { Locale } from "@/lib/i18n/types";
import { getBookTrialCopy } from "@/lib/i18n/bookTrialContent";
import { PRIVATE_PKGS, GROUP_PKGS, FAM_ROWS } from "@/lib/pricing/packageTiers";

const BOOK_TRIAL_API = "https://nibras-backend-five.vercel.app/api/book-trial";
/** Nibras admin WhatsApp â€” opens wa.me with pre-filled trial request */
const BOOK_TRIAL_WHATSAPP = "201099493640";

const HREF_TO_LINK = new Map<string, { label: string }>();
for (const col of MEGA_BY_SUBJECT) {
  for (const link of col.links) {
    HREF_TO_LINK.set(link.href, { label: link.label });
  }
}

type PackageCategory = "p" | "g" | "f";

const FALLBACK_TZ = [
  "UTC","Africa/Cairo","Asia/Riyadh","Asia/Dubai","Europe/London",
  "Europe/Paris","America/New_York","America/Chicago","America/Los_Angeles",
  "Asia/Kolkata","Asia/Jakarta","Australia/Sydney",
];

/* â”€â”€â”€ Design tokens â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

/**
 * IMPROVED: Custom select with visible chevron, better padding, cleaner focus ring.
 * Used for Country, Timezone, Student Gender, Teacher Gender.
 */
const selectBase = [
  "mt-1 w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1a2f45]",
  "border-[#c8d9cd] shadow-sm",
  "outline-none transition-all duration-150 placeholder:text-[#a0adb5]",
  "focus:border-[#1C3A2E] focus:ring-2 focus:ring-[#1C3A2E]/10",
  "hover:border-[#4a7a5a]",
  // custom arrow via inline SVG data-URI (dark green chevron)
  "appearance-none cursor-pointer",
  "bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231C3A2E%22%20stroke-width%3D%222.2%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')]",
  "bg-no-repeat bg-[right_0.85rem_center]",
  "pr-10",
].join(" ");

const inputBase = [
  "mt-1 w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1a2f45]",
  "border-[#c8d9cd] shadow-sm",
  "outline-none transition-all duration-150 placeholder:text-[#a0adb5]",
  "focus:border-[#1C3A2E] focus:ring-2 focus:ring-[#1C3A2E]/10",
  "hover:border-[#4a7a5a]",
].join(" ");

const labelCls = "block text-[13px] font-semibold text-[#2a3f30] mb-0.5 tracking-wide";

/* â”€â”€â”€ Sub-components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function SectionCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-[#d8e5db] bg-[#f9fbf9] p-5 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

function SectionLegend({ label }: { label: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px flex-1 bg-[#e2ede5]" />
      <span className="text-[11px] font-bold uppercase tracking-widest text-[#4a7a5a]">{label}</span>
      <span className="h-px flex-1 bg-[#e2ede5]" />
    </div>
  );
}


function courseLabelsFromHrefs(hrefs: Iterable<string>, locale: Locale): string[] {
  return [...hrefs].map((href) => {
    const meta = HREF_TO_LINK.get(href);
    return megaHrefLabel(locale, href, meta?.label ?? href);
  });
}

function familyMemberCountFromPkg(pkgId: string): number {
  if (!pkgId.startsWith("f:")) return 0;
  const tier = pkgId.split(":")[2];
  if (tier === "m2") return 2;
  if (tier === "m3") return 3;
  if (tier === "m4") return 4;
  return 0;
}

function formatPackageLabel(
  pkgId: string,
  isAr: boolean,
  c: ReturnType<typeof getBookTrialCopy>,
): string {
  if (pkgId.startsWith("p:")) {
    const i = Number(pkgId.split(":")[1]);
    const pkg = PRIVATE_PKGS[i];
    if (!pkg) return pkgId;
    const name = isAr ? pkg.name.ar : pkg.name.en;
    return `${c.packagesPrivate}: ${name} (${pkg.hours} ${isAr ? "س/شهر" : "h/mo"})`;
  }
  if (pkgId.startsWith("g:")) {
    const i = Number(pkgId.split(":")[1]);
    const pkg = GROUP_PKGS[i];
    if (!pkg) return pkgId;
    const name = isAr ? pkg.name.ar : pkg.name.en;
    return `${c.packagesGroup}: ${name} (${pkg.hours} ${isAr ? "س/شهر" : "h/mo"})`;
  }
  if (pkgId.startsWith("f:")) {
    const parts = pkgId.split(":");
    const ri = Number(parts[1]);
    const tier = parts[2] as "m2" | "m3" | "m4";
    const row = FAM_ROWS[ri];
    if (!row) return pkgId;
    const mem =
      tier === "m2" ? c.familyMembers2 : tier === "m3" ? c.familyMembers3 : c.familyMembers4;
    return `${c.packagesFamily}: ${row.hours} ${isAr ? "س/شهر" : "h/mo"} — ${mem}`;
  }
  return pkgId;
}

function openBookTrialWhatsApp(message: string) {
  const url = `https://wa.me/${BOOK_TRIAL_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function buildWhatsAppMessage(opts: {
  copy: ReturnType<typeof getBookTrialCopy>;
  isAr: boolean;
  locale: Locale;
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
  countryName: string;
  timezone: string;
  courseLabels: string[];
  packageLabel: string;
  dayLabel: string;
  timeSlot: string;
  studentAge: string;
  studentGender: string;
  teacherGender: string;
  message: string;
  familyMembers?: FamilyMemberProfile[];
}): string {
  const L = opts.copy.mailtoLines;
  const title = opts.isAr ? "*طلب تجربة مجانية — نبراس*" : "*Free trial request — Nibras*";
  const lines: string[] = [title, ""];

  lines.push(
    `${L.first} ${opts.firstName}`,
    `${L.last} ${opts.lastName}`,
    `${L.email} ${opts.email}`,
    `${L.whatsapp} ${opts.whatsapp}`,
    `${L.country} ${opts.countryName}`,
  );

  const memberDayLabels: Record<DayId, string> = {
    mon: opts.copy.dayMon,
    tue: opts.copy.dayTue,
    wed: opts.copy.dayWed,
    thu: opts.copy.dayThu,
    fri: opts.copy.dayFri,
    sat: opts.copy.daySat,
    sun: opts.copy.daySun,
  };

  if (opts.familyMembers?.length) {
    lines.push("", opts.isAr ? "*أعضاء العائلة:*" : "*Family members:*");
    opts.familyMembers.forEach((m, i) => {
      const labels = courseLabelsFromHrefs(m.courses, opts.locale);
      const tzLine = m.timezone
        ? formatTimezoneDisplay(m.timezone, opts.isAr ? "ar" : "en")
        : "—";
      const day =
        m.preferredDay && memberDayLabels[m.preferredDay as DayId]
          ? memberDayLabels[m.preferredDay as DayId]
          : m.preferredDay || "—";
      lines.push(
        "",
        `${opts.copy.familyMemberCard} ${i + 1}: ${m.name}`,
        `${L.email} ${m.email}`,
        `${L.timezone} ${tzLine}`,
        `${L.courses} ${labels.join(" · ") || "—"}`,
        `${L.days} ${day}`,
        `${L.times} ${formatTimeSlots(m.preferredTimes, opts.isAr)}`,
        `${L.age} ${m.studentAge}`,
        `${L.studentGender} ${genderForApi(m.studentGender, opts.copy)}`,
        `${L.teacherGender} ${genderForApi(m.teacherGender, opts.copy)}`,
      );
    });
  } else {
    lines.push(
      `${L.timezone} ${opts.timezone}`,
      `${L.courses}`,
      opts.courseLabels.map((c) => `  • ${c}`).join("\n"),
    );
  }

  lines.push(`${L.packages} ${opts.packageLabel}`);

  if (!opts.familyMembers?.length) {
    lines.push(
      `${L.days} ${opts.dayLabel}`,
      `${L.times} ${opts.timeSlot}`,
      `${L.age} ${opts.studentAge}`,
      `${L.studentGender} ${opts.studentGender}`,
      `${L.teacherGender} ${opts.teacherGender}`,
    );
  }

  lines.push(`${L.goals} ${opts.message}`);

  return lines.join("\n");
}

/* â”€â”€â”€ Main component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export default function BookTrialPageContent() {
  const { locale } = useI18n();
  const copy = getBookTrialCopy(locale);
  const isAr = locale === "ar";

  const timezones = useMemo(() => {
    try {
      const fn = (Intl as unknown as { supportedValuesOf?: (k: string) => string[] }).supportedValuesOf;
      if (typeof fn === "function") return fn.call(Intl, "timeZone");
    } catch { /* ignore */ }
    return FALLBACK_TZ;
  }, []);

  const countryOptions = useMemo(
    () =>
      COUNTRIES.map((c) => ({
        value: c.code,
        label: `${c.flag} ${c.name}`,
        searchText: c.name,
      })),
    [],
  );

  const timezoneOptions = useMemo(
    () => buildTimezoneOptions(timezones, isAr ? "ar" : "en"),
    [timezones, isAr],
  );

  const [firstName,     setFirstName]     = useState("");
  const [lastName,      setLastName]      = useState("");
  const [email,         setEmail]         = useState("");
  const [whatsapp,      setWhatsapp]      = useState("");
  const [countryCode,   setCountryCode]   = useState("");
  const [timezone,      setTimezone]      = useState("");
  const [courses,       setCourses]       = useState<Set<string>>(() => new Set());
  const [selectedPkg,   setSelectedPkg]   = useState<string>("");
  const [familyRowIndex, setFamilyRowIndex] = useState(0);

  const [packageCategory, setPackageCategory] = useState<PackageCategory | "">("");
  const [selectedDay, setSelectedDay] = useState<DayId | "">("");
  const [selectedTimes, setSelectedTimes] = useState<Set<string>>(() => new Set());

  const [studentAge,    setStudentAge]    = useState("");
  const [studentGender, setStudentGender] = useState("");
  const [teacherGender, setTeacherGender] = useState("");
  const [message,       setMessage]       = useState("");
  const [formError,     setFormError]     = useState<string | null>(null);
  const [formSuccess,   setFormSuccess]   = useState(false);
  const [isSubmitting,  setIsSubmitting]  = useState(false);
  const [familyMembers, setFamilyMembers] = useState<FamilyMemberProfile[]>([]);
  const [memberModalIndex, setMemberModalIndex] = useState<number | null>(null);

  const isFamilyPkg = selectedPkg.startsWith("f:");
  const familyMemberCount = familyMemberCountFromPkg(selectedPkg);

  useEffect(() => {
    if (!selectedPkg.startsWith("f:")) return;
    const parts = selectedPkg.split(":");
    const ri = Number(parts[1]);
    if (Number.isFinite(ri) && ri >= 0 && ri < FAM_ROWS.length) setFamilyRowIndex(ri);
  }, [selectedPkg]);

  useEffect(() => {
    if (!isFamilyPkg || familyMemberCount === 0) {
      setFamilyMembers([]);
      setMemberModalIndex(null);
      return;
    }
    setFamilyMembers((prev) =>
      Array.from({ length: familyMemberCount }, (_, i) => prev[i] ?? emptyFamilyMember()),
    );
  }, [selectedPkg, isFamilyPkg, familyMemberCount]);

  function openMemberModal(index: number) {
    setMemberModalIndex(index);
  }

  function saveMemberModal(draft: FamilyMemberProfile) {
    if (memberModalIndex === null) return;
    setFamilyMembers((prev) => {
      const next = [...prev];
      next[memberModalIndex] = draft;
      return next;
    });
    setMemberModalIndex(null);
  }

  const dayLabel: Record<DayId, string> = {
    mon: copy.dayMon, tue: copy.dayTue, wed: copy.dayWed, thu: copy.dayThu,
    fri: copy.dayFri, sat: copy.daySat, sun: copy.daySun,
  };
  const eveningTimeSlots = useMemo(() => buildEveningTimeSlots(isAr), [isAr]);
  const hasPackage = Boolean(selectedPkg.trim());

  const familyRowIdx = Math.min(Math.max(0, familyRowIndex), FAM_ROWS.length - 1);
  const familyRow = FAM_ROWS[familyRowIdx]!;

  function toggleCourse(href: string) {
    setCourses(prev => {
      const n = new Set(prev);
      n.has(href) ? n.delete(href) : n.add(href);
      return n;
    });
  }

  function selectPackageCategory(cat: PackageCategory) {
    setPackageCategory(cat);
    setSelectedPkg("");
    setFamilyMembers([]);
    setMemberModalIndex(null);
  }

  function selectPackage(id: string) {
    setSelectedPkg(id);
    if (id.startsWith("p:")) setPackageCategory("p");
    else if (id.startsWith("g:")) setPackageCategory("g");
    else if (id.startsWith("f:")) setPackageCategory("f");
  }

  function toggleTimeSlot(id: string) {
    setSelectedTimes((prev) => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(false);

    const baseMissing = isFamilyPkg
      ? !firstName.trim() ||
        !lastName.trim() ||
        !email.trim() ||
        !whatsapp.trim() ||
        !countryCode ||
        !message.trim()
      : !firstName.trim() ||
        !lastName.trim() ||
        !email.trim() ||
        !whatsapp.trim() ||
        !countryCode ||
        !timezone ||
        !message.trim();
    const studentMissing =
      !isFamilyPkg &&
      (!studentAge.trim() || !studentGender || !teacherGender);
    if (baseMissing || studentMissing) {
      setFormError(copy.validationFill);
      return;
    }
    if (!isFamilyPkg && courses.size === 0) {
      setFormError(copy.validationCourses);
      return;
    }
    if (isFamilyPkg && !familyMembers.every(isFamilyMemberComplete)) {
      setFormError(copy.validationFamilyMembers);
      return;
    }
    if (!selectedPkg.trim()) { setFormError(copy.validationPackage); return; }
    if (!isFamilyPkg) {
      if (!selectedDay) { setFormError(copy.validationDays); return; }
      if (selectedTimes.size === 0) { setFormError(copy.validationTimes); return; }
    }

    const trimmed = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      whatsapp: whatsapp.trim(),
      message: message.trim(),
      ...(isFamilyPkg
        ? {}
        : {
            studentAge: studentAge.trim(),
            studentGender: genderForApi(studentGender, copy),
            teacherGender: genderForApi(teacherGender, copy),
          }),
    };

    const familyMembersPayload = isFamilyPkg
      ? familyMembers.map((m) => ({
          name: m.name.trim(),
          email: m.email.trim(),
          timezone: m.timezone,
          timezoneDisplay: formatTimezoneDisplay(m.timezone, isAr ? "ar" : "en"),
          courses: [...m.courses],
          courseLabels: courseLabelsFromHrefs(m.courses, locale),
          preferredDay: m.preferredDay,
          selectedTimes: [...m.preferredTimes],
          selectedTime: formatTimeSlots(m.preferredTimes, isAr),
          studentAge: m.studentAge.trim(),
          studentGender: genderForApi(m.studentGender, copy),
          teacherGender: genderForApi(m.teacherGender, copy),
        }))
      : undefined;

    // Email API
    const payload = {
      ...trimmed,
      countryCode,
      ...(isFamilyPkg ? {} : { timezone }),
      courses: isFamilyPkg ? [] : [...courses],
      ...(familyMembersPayload ? { familyMembers: familyMembersPayload } : {}),
      selectedPkg,
      ...(isFamilyPkg
        ? {}
        : {
            selectedDay,
            selectedTimes: [...selectedTimes],
            selectedTime: formatTimeSlots(selectedTimes, isAr),
          }),
    };

    // WhatsApp â€” separate channel (not tied to email payload shape)
    const countryName = COUNTRIES.find((c) => c.code === countryCode)?.name ?? countryCode;
    openBookTrialWhatsApp(
      buildWhatsAppMessage({
        copy,
        isAr,
        locale,
        firstName: trimmed.firstName,
        lastName: trimmed.lastName,
        email: trimmed.email,
        whatsapp: trimmed.whatsapp,
        countryName,
        timezone: isFamilyPkg
          ? (isAr ? "حسب كل عضو أدناه" : "Per member below")
          : timezone,
        courseLabels: isFamilyPkg ? [] : courseLabelsFromHrefs(courses, locale),
        familyMembers: isFamilyPkg ? familyMembers : undefined,
        packageLabel: formatPackageLabel(selectedPkg, isAr, copy),
        dayLabel: isFamilyPkg ? "" : (dayLabel[selectedDay as DayId] ?? selectedDay),
        timeSlot: isFamilyPkg ? "" : formatTimeSlots(selectedTimes, isAr),
        studentAge: isFamilyPkg ? "" : studentAge.trim(),
        studentGender: isFamilyPkg ? "" : genderForApi(studentGender, copy),
        teacherGender: isFamilyPkg ? "" : genderForApi(teacherGender, copy),
        message: trimmed.message,
      }),
    );

    setIsSubmitting(true);
    try {
      const res = await fetch(BOOK_TRIAL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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

  const req = <span className="text-red-500 ms-0.5 font-bold">{copy.requiredMark}</span>;

  return (
    <div
      className="relative flex-1 text-[#1a2f45]"
      style={{ background: "linear-gradient(160deg,#eef4ee 0%,#f5f7f2 50%,#eaf0ea 100%)" }}
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
    >
      <div className="mx-auto max-w-3xl px-4 pt-[calc(70px+1.5rem)] pb-16 sm:px-6 md:pt-[calc(80px+2rem)] md:pb-24">

        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="font-serif text-3xl font-bold text-[#0e2a1e] sm:text-4xl">{copy.pageTitle}</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#4a6355] sm:text-base leading-relaxed">
            {copy.pageSubtitle}
          </p>
        </header>

        {/* Form card */}
        <div className="rounded-2xl border border-[#cad9cc] bg-white shadow-[0_12px_48px_rgba(28,58,46,0.10)] overflow-hidden">

          {/* Privacy banner */}
          <div className="flex items-center justify-center gap-2 bg-[#1C3A2E] px-4 py-3">
            <svg className="h-4 w-4 text-[#8fcfa4] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <p className="text-sm font-medium text-[#c8e8d0]">{copy.privacyBanner}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7 p-6 sm:p-8">

            {/* Status */}
            {formSuccess && (
              <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-medium text-emerald-800">{copy.submitSuccess}</p>
              </div>
            )}

            {formError && (
              <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <p className="text-sm font-medium text-red-700">{formError}</p>
              </div>
            )}

            <PackageStepBlock
              copy={copy}
              isAr={isAr}
              req={req}
              labelCls={labelCls}
              selectBase={selectBase}
              packageCategory={packageCategory}
              selectedPkg={selectedPkg}
              isFamilyPkg={isFamilyPkg}
              familyMemberCount={familyMemberCount}
              familyMembers={familyMembers}
              familyRowIndex={familyRowIndex}
              familyRowIdx={familyRowIdx}
              familyRow={familyRow}
              onSelectCategory={selectPackageCategory}
              onSelectPackage={selectPackage}
              onFamilyHoursChange={(n) => {
                setFamilyRowIndex(n);
                if (selectedPkg.startsWith("f:")) {
                  const tier = selectedPkg.split(":")[2];
                  if (tier === "m2" || tier === "m3" || tier === "m4") selectPackage(`f:${n}:${tier}`);
                }
              }}
              onOpenMember={openMemberModal}
            />

            {hasPackage && (
            <>
            {isFamilyPkg ? (
              <div className="space-y-5">
                <SectionLegend label={isAr ? "بيانات ولي الأمر" : "Parent / guardian"} />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelCls} htmlFor="trial-fn-fam">{copy.firstName}{req}</label>
                    <input
                      id="trial-fn-fam"
                      className={inputBase}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      autoComplete="given-name"
                      placeholder={isAr ? "الاسم الأول" : "First name"}
                    />
                    <p className="mt-1.5 text-[11px] text-[#7a9485]">{copy.hintParentName}</p>
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="trial-ln-fam">{copy.lastName}{req}</label>
                    <input
                      id="trial-ln-fam"
                      className={inputBase}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      autoComplete="family-name"
                      placeholder={isAr ? "اسم العائلة" : "Last name"}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls} htmlFor="trial-email-fam">{copy.email}{req}</label>
                  <input
                    id="trial-email-fam"
                    type="email"
                    className={inputBase}
                    placeholder={copy.emailPh}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>

                <PhoneCountryPicker
                  label={<>{copy.whatsapp}<span className="text-red-500 ms-0.5 font-bold">{copy.requiredMark}</span></>}
                  value={whatsapp}
                  onChange={setWhatsapp}
                  searchPlaceholder={copy.phoneSearchPlaceholder}
                  noResults={copy.phoneNoResults}
                />
                <SearchableSelect
                  id="trial-country"
                  value={countryCode}
                  onChange={setCountryCode}
                  options={countryOptions}
                  placeholder={copy.countryPh}
                  searchPlaceholder={copy.phoneSearchPlaceholder}
                  noResults={copy.phoneNoResults}
                  label={<>{copy.country}{req}</>}
                />
              </div>
            ) : (
            <div className="space-y-5">
              <SectionLegend label={isAr ? "المعلومات الشخصية" : "Personal info"} />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="trial-fn">{copy.firstName}{req}</label>
                  <input id="trial-fn" className={inputBase} value={firstName}
                    onChange={e => setFirstName(e.target.value)} autoComplete="given-name"
                    placeholder={isAr ? "الاسم الأول" : "First name"} />
                  <p className="mt-1.5 text-[11px] text-[#7a9485]">{copy.hintParentName}</p>
                </div>
                <div>
                  <label className={labelCls} htmlFor="trial-ln">{copy.lastName}{req}</label>
                  <input id="trial-ln" className={inputBase} value={lastName}
                    onChange={e => setLastName(e.target.value)} autoComplete="family-name"
                    placeholder={isAr ? "اسم العائلة" : "Last name"} />
                </div>
              </div>

              <div>
                <label className={labelCls} htmlFor="trial-email">{copy.email}{req}</label>
                <input id="trial-email" type="email" className={inputBase}
                  placeholder={copy.emailPh} value={email}
                  onChange={e => setEmail(e.target.value)} autoComplete="email" />
              </div>

              <PhoneCountryPicker
                label={<>{copy.whatsapp}<span className="text-red-500 ms-0.5 font-bold">{copy.requiredMark}</span></>}
                value={whatsapp} onChange={setWhatsapp}
                searchPlaceholder={copy.phoneSearchPlaceholder}
                noResults={copy.phoneNoResults}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <SearchableSelect
                  id="trial-country"
                  value={countryCode}
                  onChange={setCountryCode}
                  options={countryOptions}
                  placeholder={copy.countryPh}
                  searchPlaceholder={copy.phoneSearchPlaceholder}
                  noResults={copy.phoneNoResults}
                  label={<>{copy.country}{req}</>}
                />
                <SearchableSelect
                  id="trial-tz"
                  value={timezone}
                  onChange={setTimezone}
                  options={timezoneOptions}
                  placeholder={copy.timezonePh}
                  searchPlaceholder={isAr ? "ابحث بالمدينة أو GMT…" : "Search city or GMT offset…"}
                  noResults={copy.phoneNoResults}
                  label={<>{copy.timezone}{req}</>}
                />
              </div>
            </div>
            )}

            {/* Courses (standard packages only) */}
            {!isFamilyPkg ? (
              <SectionCard>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                  <h2 className="text-sm font-bold text-[#0e2a1e]">{copy.coursesSection}{req}</h2>
                  <p className="text-[12px] text-[#7a9485]">{copy.coursesHint}</p>
                </div>
                <TrialCoursesGrid locale={locale} selectedHrefs={courses} onToggle={toggleCourse} />
              </SectionCard>
            ) : (
              <div className="rounded-xl border border-[#DED3BD] bg-[#FFF9EE] px-4 py-3 text-[13px] text-[#5a4a20]">
                {copy.familyCoursesPerMember}
              </div>
            )}

            {!isFamilyPkg && (
            <SectionCard>
              <h2 className="text-sm font-bold text-[#0e2a1e] mb-5">
                {isAr ? "الجدول المفضل" : "Preferred schedule"}
              </h2>

              <div className="mb-5">
                <p className={labelCls}>
                  {copy.preferredDays}{req}
                </p>
                <p className="mb-2.5 text-[12px] text-[#7a9485]">
                  {isAr ? "اختر يوماً واحداً" : "Pick one day"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {DAY_IDS.map(d => (
                    <SchedulePill
                      key={d}
                      active={selectedDay === d}
                      onClick={() => setSelectedDay(d)}
                    >
                      {dayLabel[d]}
                    </SchedulePill>
                  ))}
                </div>
              </div>

              {/* Times â€” single select */}
              <div>
                <p className={labelCls}>
                  {copy.preferredTimes}{req}
                </p>
                <p className="mb-2.5 text-[12px] text-[#7a9485]">
                  {copy.preferredTimesMultiHint}
                </p>
                <div className="flex max-h-48 flex-wrap gap-1.5 overflow-y-auto overscroll-contain rounded-xl border border-[#e2ede5] bg-[#f9fbf9] p-2.5 [scrollbar-width:thin]">
                  {eveningTimeSlots.map((slot) => (
                    <SchedulePill
                      key={slot.id}
                      active={selectedTimes.has(slot.id)}
                      onClick={() => toggleTimeSlot(slot.id)}
                    >
                      {slot.label}
                    </SchedulePill>
                  ))}
                </div>
              </div>
            </SectionCard>
            )}

            {!isFamilyPkg && (
            <div className="space-y-5">
              <SectionLegend label={isAr ? "معلومات الطالب" : "Student details"} />

              <div>
                <label className={labelCls} htmlFor="trial-age">{copy.studentAge}{req}</label>
                <input id="trial-age" className={inputBase} value={studentAge}
                  onChange={e => setStudentAge(e.target.value)}
                  placeholder={isAr ? "مثال: 10 أو بالغ" : "e.g. 10 or Adult"} />
                <p className="mt-1.5 text-[11px] text-[#7a9485]">{copy.studentAgeHint}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="trial-sg">{copy.studentGender}{req}</label>
                  <select id="trial-sg" className={selectBase}
                    value={studentGender} onChange={e => setStudentGender(e.target.value)}>
                    <option value="">{copy.genderPh}</option>
                    <option value={copy.genderMale}>{copy.genderMale}</option>
                    <option value={copy.genderFemale}>{copy.genderFemale}</option>
                    <option value={copy.genderNoPreference}>{copy.genderNoPreference}</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls} htmlFor="trial-tg">{copy.teacherGender}{req}</label>
                  <select id="trial-tg" className={selectBase}
                    value={teacherGender} onChange={e => setTeacherGender(e.target.value)}>
                    <option value="">{copy.genderPh}</option>
                    <option value={copy.genderMale}>{copy.genderMale}</option>
                    <option value={copy.genderFemale}>{copy.genderFemale}</option>
                    <option value={copy.genderNoPreference}>{copy.genderNoPreference}</option>
                  </select>
                </div>
              </div>
            </div>
            )}

            <div>
              <label className={labelCls} htmlFor="trial-msg">{copy.message}{req}</label>
              <textarea
                id="trial-msg" rows={3}
                className={`${inputBase} resize-none`}
                value={message} onChange={e => setMessage(e.target.value)}
                placeholder={copy.messagePh}
              />
              <p className="mt-1.5 text-[11px] text-[#7a9485]">{copy.messageHint}</p>
            </div>

            <div className="pt-1">
              <button type="submit" disabled={isSubmitting}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#1C3A2E] px-8 py-3 text-sm font-semibold text-white shadow-md shadow-[#1C3A2E]/20 transition-all duration-150 hover:bg-[#163028] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60">
                {isSubmitting ? copy.submitting : copy.submit}
                <svg className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>

            </>
            )}

            {!hasPackage && (
              <p className="rounded-xl border border-dashed border-[#c8d9cd] bg-[#f9fbf9] px-4 py-6 text-center text-[13px] text-[#7a9485]">
                {copy.packagesSelectToContinue}
              </p>
            )}

          </form>

          <FamilyMemberModal
            key={memberModalIndex ?? "closed"}
            open={memberModalIndex !== null}
            memberIndex={memberModalIndex ?? 0}
            memberLabel={`${copy.familyMemberCard} ${(memberModalIndex ?? 0) + 1}`}
            initialDraft={familyMembers[memberModalIndex ?? 0] ?? emptyFamilyMember()}
            onClose={() => setMemberModalIndex(null)}
            onSave={saveMemberModal}
            locale={locale}
            copy={copy}
            timezoneOptions={timezoneOptions}
            isAr={isAr}
          />
        </div>
      </div>
    </div>
  );
}
