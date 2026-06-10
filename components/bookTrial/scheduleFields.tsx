"use client";

export const DAY_IDS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;
export type DayId = (typeof DAY_IDS)[number];

export const WEEKDAY_IDS: DayId[] = ["mon", "tue", "wed", "thu", "fri"];
export const WEEKEND_IDS: DayId[] = ["sat", "sun"];

export function formatDayLabels(
  ids: Iterable<DayId>,
  dayLabel: Record<DayId, string>,
): string {
  return [...ids].map((d) => dayLabel[d] ?? d).join(", ");
}

export function PreferredDaysPicker({
  dayLabel,
  selectedDays,
  onChange,
  weekdaysLabel,
  weekendsLabel,
  hint,
}: {
  dayLabel: Record<DayId, string>;
  selectedDays: Set<DayId>;
  onChange: (next: Set<DayId>) => void;
  weekdaysLabel: string;
  weekendsLabel: string;
  hint: string;
}) {
  function toggleDay(id: DayId) {
    const next = new Set(selectedDays);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onChange(next);
  }

  function applyGroup(ids: DayId[]) {
    const allSelected = ids.every((id) => selectedDays.has(id));
    const next = new Set(selectedDays);
    if (allSelected) {
      ids.forEach((id) => next.delete(id));
    } else {
      ids.forEach((id) => next.add(id));
    }
    onChange(next);
  }

  const weekdaysActive = WEEKDAY_IDS.every((id) => selectedDays.has(id));
  const weekendsActive = WEEKEND_IDS.every((id) => selectedDays.has(id));

  return (
    <div className="space-y-3">
      <p className="text-[12px] leading-relaxed text-[#7a9485]">{hint}</p>

      <div className="flex flex-wrap gap-2">
        <SchedulePill active={weekdaysActive} onClick={() => applyGroup(WEEKDAY_IDS)}>
          {weekdaysLabel}
        </SchedulePill>
        <SchedulePill active={weekendsActive} onClick={() => applyGroup(WEEKEND_IDS)}>
          {weekendsLabel}
        </SchedulePill>
      </div>

      <div className="grid grid-cols-2 gap-2 min-[420px]:flex min-[420px]:flex-wrap">
        {DAY_IDS.map((d) => (
          <SchedulePill
            key={d}
            active={selectedDays.has(d)}
            onClick={() => toggleDay(d)}
            className="w-full min-[420px]:w-auto"
          >
            {dayLabel[d]}
          </SchedulePill>
        ))}
      </div>
    </div>
  );
}

/** 5:00 PM – 11:00 PM, every 30 minutes */
export function buildEveningTimeSlots(isAr: boolean): { id: string; label: string }[] {
  const slots: { id: string; label: string }[] = [];
  for (let h = 17; h <= 23; h++) {
    for (const m of [0, 30] as const) {
      if (h === 23 && m === 30) continue;
      const id = `${h}:${String(m).padStart(2, "0")}`;
      const hour12 = h > 12 ? h - 12 : h;
      const label = isAr
        ? `${hour12}:${m === 0 ? "00" : "30"} م`
        : `${hour12}:${m === 0 ? "00" : "30"} PM`;
      slots.push({ id, label });
    }
  }
  return slots;
}

export function formatTimeSlots(ids: Iterable<string>, isAr: boolean): string {
  const map = new Map(buildEveningTimeSlots(isAr).map((s) => [s.id, s.label]));
  return [...ids].map((id) => map.get(id) ?? id).join(", ");
}

export function genderForApi(
  value: string,
  c: { genderMale: string; genderFemale: string; genderNoPreference: string },
): string {
  if (value === c.genderMale) return "Male";
  if (value === c.genderFemale) return "Female";
  if (value === c.genderNoPreference) return "No preference";
  return value;
}

export function SchedulePill({
  active,
  onClick,
  children,
  className = "",
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center gap-1.5 rounded-xl border px-3 py-2.5 text-[12px] font-medium sm:px-4 sm:text-[13px]",
        "transition-all duration-150 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C3A2E]/40 active:scale-[0.98]",
        active
          ? "border-[#1C3A2E] bg-[#1C3A2E] text-white shadow-md shadow-[#1C3A2E]/20"
          : "border-[#d1dbd4] bg-white text-[#3a5040] hover:border-[#4a7a5a] hover:bg-[#f2f8f4] hover:shadow-sm",
        className,
      ].join(" ")}
    >
      {active && (
        <svg className="h-3 w-3 shrink-0" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 6l3 3 5-5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {children}
    </button>
  );
}

export const trialSelectBase = [
  "mt-1 w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1a2f45]",
  "border-[#c8d9cd] shadow-sm",
  "outline-none transition-all duration-150 placeholder:text-[#a0adb5]",
  "focus:border-[#1C3A2E] focus:ring-2 focus:ring-[#1C3A2E]/10",
  "hover:border-[#4a7a5a]",
  "appearance-none cursor-pointer",
  "bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231C3A2E%22%20stroke-width%3D%222.2%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')]",
  "bg-no-repeat bg-[right_0.85rem_center] pr-10",
].join(" ");
