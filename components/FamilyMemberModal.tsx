"use client";



import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { SearchableSelect } from "@/components/SearchableSelect";

import type { SearchableOption } from "@/components/SearchableSelect";

import { MemberScheduleFields } from "@/components/bookTrial/MemberScheduleFields";

import type { DayId } from "@/components/bookTrial/scheduleFields";

import { TrialCoursesGrid } from "@/components/bookTrial/TrialCoursesGrid";

import type { Locale } from "@/lib/i18n/types";

import type { BookTrialCopy } from "@/lib/i18n/bookTrialContent";

import { formatTimezoneDisplay } from "@/lib/timezoneDisplay";



export type FamilyMemberProfile = {

  name: string;

  email: string;

  timezone: string;

  courses: string[];

  preferredDay: DayId | "";

  preferredTimes: string[];

  studentAge: string;

  studentGender: string;

  teacherGender: string;

};



export function emptyFamilyMember(): FamilyMemberProfile {

  return {

    name: "",

    email: "",

    timezone: "",

    courses: [],

    preferredDay: "",

    preferredTimes: [],

    studentAge: "",

    studentGender: "",

    teacherGender: "",

  };

}



export function isFamilyMemberComplete(m: FamilyMemberProfile): boolean {

  return Boolean(

    m.name.trim() &&

      m.email.trim() &&

      m.timezone &&

      m.courses.length > 0 &&

      m.preferredDay &&

      m.preferredTimes.length > 0 &&

      m.studentAge.trim() &&

      m.studentGender &&

      m.teacherGender,

  );

}



const inputBase = [

  "mt-1 w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1a2f45]",

  "border-[#c8d9cd] shadow-sm outline-none transition-[border-color,box-shadow] duration-150",

  "placeholder:text-[#a0adb5] focus:border-[#1C3A2E] focus:ring-2 focus:ring-[#1C3A2E]/10",

  "hover:border-[#4a7a5a]",

].join(" ");



const labelCls = "block text-[13px] font-semibold text-[#2a3f30] mb-0.5 tracking-wide";



type FamilyMemberModalProps = {

  open: boolean;

  memberIndex: number;

  memberLabel: string;

  initialDraft: FamilyMemberProfile;

  onClose: () => void;

  onSave: (draft: FamilyMemberProfile) => void;

  locale: Locale;

  copy: BookTrialCopy;

  timezoneOptions: SearchableOption[];

  isAr: boolean;

};



export function FamilyMemberModal({

  open,

  memberIndex,

  memberLabel,

  initialDraft,

  onClose,

  onSave,

  locale,

  copy,

  timezoneOptions,

  isAr,

}: FamilyMemberModalProps) {

  const [draft, setDraft] = useState<FamilyMemberProfile>(initialDraft);

  const [tzPreview, setTzPreview] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);

  const coursesScrollRef = useRef<HTMLDivElement>(null);

  const coursesScrollTop = useRef(0);



  useEffect(() => {

    if (!open) return;

    setDraft({

      name: initialDraft.name,

      email: initialDraft.email,

      timezone: initialDraft.timezone,

      courses: [...initialDraft.courses],

      preferredDay: initialDraft.preferredDay,

      preferredTimes: [...initialDraft.preferredTimes],

      studentAge: initialDraft.studentAge,

      studentGender: initialDraft.studentGender,

      teacherGender: initialDraft.teacherGender,

    });

  }, [open, memberIndex, initialDraft]);



  useEffect(() => {

    if (!open) return;

    const prev = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {

      document.body.style.overflow = prev;

    };

  }, [open]);



  useEffect(() => {

    if (!draft.timezone) {

      setTzPreview("");

      return;

    }

    setTzPreview(formatTimezoneDisplay(draft.timezone, locale === "ar" ? "ar" : "en"));

  }, [draft.timezone, locale]);



  const toggleCourse = useCallback((href: string) => {

    if (coursesScrollRef.current) {

      coursesScrollTop.current = coursesScrollRef.current.scrollTop;

    }

    setDraft((d) => {

      const next = new Set(d.courses);

      if (next.has(href)) next.delete(href);

      else next.add(href);

      return { ...d, courses: [...next] };

    });

  }, []);



  useLayoutEffect(() => {

    const el = coursesScrollRef.current;

    if (!el) return;

    el.scrollTop = coursesScrollTop.current;

  }, [draft.courses]);



  const handleSave = () => {

    onSave({

      name: draft.name.trim(),

      email: draft.email.trim(),

      timezone: draft.timezone,

      courses: [...draft.courses],

      preferredDay: draft.preferredDay,

      preferredTimes: [...draft.preferredTimes],

      studentAge: draft.studentAge.trim(),

      studentGender: draft.studentGender,

      teacherGender: draft.teacherGender,

    });

  };



  if (!open) return null;



  const req = <span className="text-red-500 ms-0.5 font-bold">{copy.requiredMark}</span>;



  return (

    <div

      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"

      role="dialog"

      aria-modal="true"

      aria-labelledby="family-member-modal-title"

    >

      <button

        type="button"

        className="absolute inset-0 bg-[#0e2a1e]/50"

        onClick={onClose}

        aria-label={isAr ? "إغلاق" : "Close"}

      />

      <div className="relative flex max-h-[min(92vh,720px)] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-[#cad9cc] bg-white shadow-[0_24px_80px_rgba(28,58,46,0.22)] sm:rounded-2xl">

        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#e2ede5] bg-[#f9fbf9] px-4 py-3.5">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-widest text-[#4a7a5a]">

              {copy.familyMemberModalKicker}

            </p>

            <h2 id="family-member-modal-title" className="text-base font-bold text-[#0e2a1e]">

              {memberLabel}

            </h2>

          </div>

          <button

            type="button"

            onClick={onClose}

            className="rounded-lg border border-[#d8e5db] p-1.5 text-[#4a7a5a] hover:bg-white"

            aria-label={isAr ? "إغلاق" : "Close"}

          >

            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />

            </svg>

          </button>

        </div>



        <div

          ref={scrollRef}

          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-4 [overflow-anchor:none]"

        >

          <div>

            <label className={labelCls} htmlFor={`fam-name-${memberIndex}`}>

              {copy.familyMemberName}

              {req}

            </label>

            <input

              id={`fam-name-${memberIndex}`}

              className={inputBase}

              value={draft.name}

              onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}

              placeholder={copy.familyMemberNamePh}

              autoComplete="name"

            />

          </div>



          <div>

            <label className={labelCls} htmlFor={`fam-email-${memberIndex}`}>

              {copy.email}

              {req}

            </label>

            <input

              id={`fam-email-${memberIndex}`}

              type="email"

              className={inputBase}

              value={draft.email}

              onChange={(e) => setDraft((d) => ({ ...d, email: e.target.value }))}

              placeholder={copy.emailPh}

              autoComplete="email"

            />

          </div>



          <SearchableSelect

            id={`fam-tz-${memberIndex}`}

            value={draft.timezone}

            onChange={(timezone) => setDraft((d) => ({ ...d, timezone }))}

            options={timezoneOptions}

            placeholder={copy.timezonePh}

            searchPlaceholder={isAr ? "ابحث بالمدينة أو GMT…" : "Search city or GMT offset…"}

            noResults={copy.phoneNoResults}

            label={

              <>

                {copy.familyMemberTimezone}

                {req}

              </>

            }

          />

          {tzPreview && (

            <p className="mt-1 text-[11px] text-[#4a7a5a]">

              {isAr ? "الوقت الحالي: " : "Now: "}

              <span className="font-semibold text-[#0e2a1e]">{tzPreview}</span>

            </p>

          )}



          <MemberScheduleFields

            copy={copy}

            isAr={isAr}

            req={req}

            values={{

              preferredDay: draft.preferredDay,

              preferredTimes: draft.preferredTimes,

              studentAge: draft.studentAge,

              studentGender: draft.studentGender,

              teacherGender: draft.teacherGender,

            }}

            onChange={(patch) => setDraft((d) => ({ ...d, ...patch }))}

          />



          <div>

            <p className={labelCls}>

              {copy.coursesSection}

              {req}

            </p>

            <p className="mb-2 text-[11px] text-[#7a9485]">{copy.familyMemberCoursesHint}</p>

            <div

              ref={coursesScrollRef}

              className="max-h-[min(42vh,340px)] overflow-y-auto overscroll-contain rounded-xl border border-[#e2ede5] bg-[#f9fbf9] p-2 [overflow-anchor:none] [scrollbar-width:thin] [scrollbar-color:#4a7a5a55_#e8efe8]"

              onScroll={(e) => {

                coursesScrollTop.current = e.currentTarget.scrollTop;

              }}

            >

              <TrialCoursesGrid

                locale={locale}

                selectedHrefs={draft.courses}

                onToggle={toggleCourse}

                compact

              />

            </div>

          </div>

        </div>



        <div className="flex shrink-0 gap-2 border-t border-[#e2ede5] bg-[#f9fbf9] px-4 py-3">

          <button

            type="button"

            onClick={onClose}

            className="flex-1 rounded-xl border border-[#d8e5db] bg-white px-3 py-2.5 text-sm font-semibold text-[#3a5040] hover:bg-[#f4faf5]"

          >

            {copy.familyMemberCancel}

          </button>

          <button

            type="button"

            onClick={handleSave}

            className="flex-1 rounded-xl bg-[#1C3A2E] px-3 py-2.5 text-sm font-semibold text-white hover:bg-[#163028]"

          >

            {copy.familyMemberSave}

          </button>

        </div>

      </div>

    </div>

  );

}

