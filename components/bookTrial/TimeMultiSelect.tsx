"use client";

import { useRef, useEffect, useState } from "react";

type TimeSlot = {
  id: string;
  label: string;
};

export function TimeMultiSelect({
  slots,
  selectedIds,
  onToggle,
  isAr,
}: {
  slots: TimeSlot[];
  selectedIds: Set<string>;
  onToggle: (id: string) => void;
  isAr: boolean;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedSlots = slots.filter((s) => selectedIds.has(s.id));
  const selectedLabel =
    selectedIds.size === 0
      ? isAr
        ? "اختر الأوقات"
        : "Select times"
      : selectedIds.size === slots.length
        ? isAr
          ? "جميع الأوقات"
          : "All times"
        : `${selectedIds.size} ${isAr ? "أوقات" : "times"}`;

  return (
    <div ref={rootRef} className="relative">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={[
          "w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1a2f45]",
          "border-[#c8d9cd] shadow-sm",
          "outline-none transition-all duration-150",
          "hover:border-[#4a7a5a]",
          "focus:border-[#1C3A2E] focus:ring-2 focus:ring-[#1C3A2E]/10",
          "flex items-center justify-between gap-2",
          open ? "border-[#1C3A2E] ring-2 ring-[#1C3A2E]/10" : "",
        ].join(" ")}
      >
        <span className={selectedIds.size === 0 ? "text-[#a0adb5]" : "text-[#1a2f45]"}>
          {selectedLabel}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown List */}
      {open && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-xl border border-[#c8d9cd] bg-white shadow-lg">
          <div className="max-h-60 overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:#4a7a5a55_#e8efe8]">
            {slots.map((slot) => (
              <label
                key={slot.id}
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#f0f5f2] cursor-pointer transition-colors duration-150"
              >
                <input
                  type="checkbox"
                  checked={selectedIds.has(slot.id)}
                  onChange={() => onToggle(slot.id)}
                  className="w-4 h-4 rounded border-[#c8d9cd] bg-white cursor-pointer"
                  style={{
                    accentColor: "#1C3A2E",
                  }}
                />
                <span className="text-sm text-[#1a2f45] flex-1">{slot.label}</span>
              </label>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="border-t border-[#e2ede5] bg-[#f9fbf9] px-4 py-2.5 flex gap-2 justify-end">
            <button
              type="button"
              onClick={() => {
                const allSelected = selectedIds.size === slots.length;
                if (allSelected) {
                  // Clear all
                  slots.forEach((s) => {
                    if (selectedIds.has(s.id)) onToggle(s.id);
                  });
                } else {
                  // Select all
                  slots.forEach((s) => {
                    if (!selectedIds.has(s.id)) onToggle(s.id);
                  });
                }
              }}
              className="px-3 py-1.5 text-xs font-medium text-[#1C3A2E] hover:bg-[#e2ede5] rounded-lg transition-colors duration-150"
            >
              {selectedIds.size === slots.length ? (isAr ? "مسح الكل" : "Clear all") : (isAr ? "اختر الكل" : "Select all")}
            </button>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-3 py-1.5 text-xs font-medium text-[#1C3A2E] hover:bg-[#e2ede5] rounded-lg transition-colors duration-150"
            >
              {isAr ? "تم" : "Done"}
            </button>
          </div>
        </div>
      )}

      {/* Selected Tags */}
      {selectedSlots.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-2">
          {selectedSlots.map((slot) => (
            <div
              key={slot.id}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1C3A2E] text-white text-xs font-medium"
            >
              <span>{slot.label}</span>
              <button
                type="button"
                onClick={() => onToggle(slot.id)}
                className="hover:opacity-70 transition-opacity duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
