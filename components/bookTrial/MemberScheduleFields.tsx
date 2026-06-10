"use client";

import { useMemo } from "react";
import type { BookTrialCopy } from "@/lib/i18n/bookTrialContent";
import {
  type DayId,
  buildEveningTimeSlots,
  PreferredDaysPicker,
  trialSelectBase,
} from "@/components/bookTrial/scheduleFields";
import { TimeMultiSelect } from "@/components/bookTrial/TimeMultiSelect";

const labelCls = "block text-[13px] font-semibold text-[#2a3f30] mb-0.5 tracking-wide";
const inputBase = [
  "mt-1 w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1a2f45]",
  "border-[#c8d9cd] shadow-sm outline-none transition-[border-color,box-shadow] duration-150",
  "placeholder:text-[#a0adb5] focus:border-[#1C3A2E] focus:ring-2 focus:ring-[#1C3A2E]/10",
  "hover:border-[#4a7a5a]",
].join(" ");

export type MemberScheduleValues = {
  preferredDays: DayId[];
  preferredTimes: string[];
  studentAge: string;
  studentGender: string;
  teacherGender: string;
};

export function MemberScheduleFields({
  copy,
  isAr,
  req,
  values,
  onChange,
}: {
  copy: BookTrialCopy;
  isAr: boolean;
  req: React.ReactNode;
  values: MemberScheduleValues;
  onChange: (patch: Partial<MemberScheduleValues>) => void;
}) {
  const dayLabel: Record<DayId, string> = {
    mon: copy.dayMon,
    tue: copy.dayTue,
    wed: copy.dayWed,
    thu: copy.dayThu,
    fri: copy.dayFri,
    sat: copy.daySat,
    sun: copy.daySun,
  };
  const eveningTimeSlots = buildEveningTimeSlots(isAr);
  const timesSet = useMemo(() => new Set(values.preferredTimes), [values.preferredTimes]);
  const daysSet = useMemo(() => new Set(values.preferredDays), [values.preferredDays]);

  function toggleTime(id: string) {
    const next = new Set(values.preferredTimes);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onChange({ preferredTimes: [...next] });
  }

  return (
    <div className="space-y-4 rounded-xl border border-[#e2ede5] bg-[#f9fbf9] p-3.5">
      <p className="text-[12px] font-bold text-[#0e2a1e]">
        {isAr ? "الجدول ومعلومات الطالب" : "Schedule & student details"}
      </p>

      <div>
        <p className={labelCls}>
          {copy.preferredDays}
          {req}
        </p>
        <PreferredDaysPicker
          dayLabel={dayLabel}
          selectedDays={daysSet}
          onChange={(next) => onChange({ preferredDays: [...next] })}
          weekdaysLabel={copy.dayWeekdays}
          weekendsLabel={copy.dayWeekends}
          hint={copy.preferredDaysMultiHint}
        />
      </div>

      <div>
        <p className={labelCls}>
          {copy.preferredTimes}
          {req}
        </p>
        <p className="mb-2 text-[11px] text-[#7a9485]">
          {isAr ? "جميع الأوقات المتاحة" : "All available times"}
        </p>
        <TimeMultiSelect
          slots={eveningTimeSlots}
          selectedIds={timesSet}
          onToggle={toggleTime}
          isAr={isAr}
        />
      </div>

      <div>
        <label className={labelCls} htmlFor="fam-member-age">
          {copy.studentAge}
          {req}
        </label>
        <input
          id="fam-member-age"
          className={inputBase}
          value={values.studentAge}
          onChange={(e) => onChange({ studentAge: e.target.value })}
          placeholder={isAr ? "مثال: 10 أو بالغ" : "e.g. 10 or Adult"}
        />
        <p className="mt-1 text-[10px] text-[#7a9485]">{copy.studentAgeHint}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="fam-member-sg">
            {copy.studentGender}
            {req}
          </label>
          <select
            id="fam-member-sg"
            className={trialSelectBase}
            value={values.studentGender}
            onChange={(e) => onChange({ studentGender: e.target.value })}
          >
            <option value="">{copy.genderPh}</option>
            <option value={copy.genderMale}>{copy.genderMale}</option>
            <option value={copy.genderFemale}>{copy.genderFemale}</option>
            <option value={copy.genderNoPreference}>{copy.genderNoPreference}</option>
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="fam-member-tg">
            {copy.teacherGender}
            {req}
          </label>
          <select
            id="fam-member-tg"
            className={trialSelectBase}
            value={values.teacherGender}
            onChange={(e) => onChange({ teacherGender: e.target.value })}
          >
            <option value="">{copy.genderPh}</option>
            <option value={copy.genderMale}>{copy.genderMale}</option>
            <option value={copy.genderFemale}>{copy.genderFemale}</option>
            <option value={copy.genderNoPreference}>{copy.genderNoPreference}</option>
          </select>
        </div>
      </div>
    </div>
  );
}
