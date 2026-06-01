"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export const COUNTRIES = [
  { code: "EG", name: "Egypt", dialCode: "+20", flag: "🇪🇬" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "🇸🇦" },
  { code: "AE", name: "UAE", dialCode: "+971", flag: "🇦🇪" },
  { code: "KW", name: "Kuwait", dialCode: "+965", flag: "🇰🇼" },
  { code: "QA", name: "Qatar", dialCode: "+974", flag: "🇶🇦" },
  { code: "BH", name: "Bahrain", dialCode: "+973", flag: "🇧🇭" },
  { code: "OM", name: "Oman", dialCode: "+968", flag: "🇴🇲" },
  { code: "JO", name: "Jordan", dialCode: "+962", flag: "🇯🇴" },
  { code: "LB", name: "Lebanon", dialCode: "+961", flag: "🇱🇧" },
  { code: "IQ", name: "Iraq", dialCode: "+964", flag: "🇮🇶" },
  { code: "SY", name: "Syria", dialCode: "+963", flag: "🇸🇾" },
  { code: "PS", name: "Palestine", dialCode: "+970", flag: "🇵🇸" },
  { code: "YE", name: "Yemen", dialCode: "+967", flag: "🇾🇪" },
  { code: "LY", name: "Libya", dialCode: "+218", flag: "🇱🇾" },
  { code: "TN", name: "Tunisia", dialCode: "+216", flag: "🇹🇳" },
  { code: "DZ", name: "Algeria", dialCode: "+213", flag: "🇩🇿" },
  { code: "MA", name: "Morocco", dialCode: "+212", flag: "🇲🇦" },
  { code: "SD", name: "Sudan", dialCode: "+249", flag: "🇸🇩" },
  { code: "SO", name: "Somalia", dialCode: "+252", flag: "🇸🇴" },
  { code: "MR", name: "Mauritania", dialCode: "+222", flag: "🇲🇷" },
  { code: "TR", name: "Turkey", dialCode: "+90", flag: "🇹🇷" },
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪" },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
  { code: "IT", name: "Italy", dialCode: "+39", flag: "🇮🇹" },
  { code: "ES", name: "Spain", dialCode: "+34", flag: "🇪🇸" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },
  { code: "PK", name: "Pakistan", dialCode: "+92", flag: "🇵🇰" },
  { code: "NG", name: "Nigeria", dialCode: "+234", flag: "🇳🇬" },
  { code: "ZA", name: "South Africa", dialCode: "+27", flag: "🇿🇦" },
  { code: "KE", name: "Kenya", dialCode: "+254", flag: "🇰🇪" },
  { code: "ET", name: "Ethiopia", dialCode: "+251", flag: "🇪🇹" },
  { code: "RU", name: "Russia", dialCode: "+7", flag: "🇷🇺" },
  { code: "CN", name: "China", dialCode: "+86", flag: "🇨🇳" },
  { code: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", dialCode: "+82", flag: "🇰🇷" },
  { code: "ID", name: "Indonesia", dialCode: "+62", flag: "🇮🇩" },
  { code: "MY", name: "Malaysia", dialCode: "+60", flag: "🇲🇾" },
  { code: "SG", name: "Singapore", dialCode: "+65", flag: "🇸🇬" },
  { code: "TH", name: "Thailand", dialCode: "+66", flag: "🇹🇭" },
  { code: "PH", name: "Philippines", dialCode: "+63", flag: "🇵🇭" },
  { code: "BR", name: "Brazil", dialCode: "+55", flag: "🇧🇷" },
  { code: "MX", name: "Mexico", dialCode: "+52", flag: "🇲🇽" },
  { code: "AR", name: "Argentina", dialCode: "+54", flag: "🇦🇷" },
  { code: "NL", name: "Netherlands", dialCode: "+31", flag: "🇳🇱" },
  { code: "SE", name: "Sweden", dialCode: "+46", flag: "🇸🇪" },
  { code: "NO", name: "Norway", dialCode: "+47", flag: "🇳🇴" },
  { code: "CH", name: "Switzerland", dialCode: "+41", flag: "🇨🇭" },
  { code: "BE", name: "Belgium", dialCode: "+32", flag: "🇧🇪" },
  { code: "PL", name: "Poland", dialCode: "+48", flag: "🇵🇱" },
  { code: "GR", name: "Greece", dialCode: "+30", flag: "🇬🇷" },
  { code: "PT", name: "Portugal", dialCode: "+351", flag: "🇵🇹" },
  { code: "NZ", name: "New Zealand", dialCode: "+64", flag: "🇳🇿" },
] as const;

export type Country = (typeof COUNTRIES)[number];

export function PhoneCountryPicker({
  value,
  onChange,
  label,
  searchPlaceholder = "Search country...",
  noResults = "No results found",
}: {
  value: string;
  onChange: (val: string) => void;
  label: ReactNode;
  searchPlaceholder?: string;
  noResults?: string;
}) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    COUNTRIES.find((c) => c.code === "EG")!,
  );
  const [localNumber, setLocalNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const digits = localNumber.replace(/\D/g, "");
    onChange(digits ? `${selectedCountry.dialCode}${digits}` : "");
  }, [localNumber, selectedCountry]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open]);

  const filtered = search.trim()
    ? COUNTRIES.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dialCode.includes(search),
      )
    : COUNTRIES;

  function selectCountry(c: Country) {
    setSelectedCountry(c);
    setOpen(false);
    setSearch("");
  }

  return (
    <div>
      <label className="block text-sm font-bold text-[#1C3A2E]">{label}</label>
      <div className="mt-2 flex flex-col gap-2 overflow-visible min-[420px]:flex-row min-[420px]:items-stretch min-[420px]:gap-0">
        <div ref={dropdownRef} className="relative min-[420px]:self-stretch">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex h-full w-full min-w-0 items-center gap-2 rounded-xl border border-[#B8860B]/30 bg-[#faf8f3] px-3 py-3 text-[15px] transition-all duration-200 hover:bg-[#f5f0e4] focus:border-[#D4A017] focus:shadow-[0_0_0_3px_rgba(212,160,23,0.25)] focus:outline-none min-[420px]:min-w-[112px] min-[420px]:rounded-s-xl min-[420px]:rounded-e-none"
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            <span className="inline-flex items-center justify-center text-[18px] leading-[1]">{selectedCountry.flag}</span>
            <span className="font-semibold text-[#B8860B]">{selectedCountry.dialCode}</span>
            <svg
              className={`ms-auto h-3.5 w-3.5 text-[#8a9e92] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {open && (
            <div className="absolute start-0 top-full z-50 mt-1.5 w-[min(100vw-2rem,18rem)] overflow-hidden rounded-2xl border border-[#B8860B]/20 bg-white shadow-[0_20px_60px_rgba(28,58,46,0.18)] ring-1 ring-black/[0.04] sm:w-72">
              <div className="border-b border-[#B8860B]/15 p-2.5">
                <div className="flex items-center gap-2 rounded-xl bg-[#f5f0e4] px-3 py-2">
                  <svg className="h-4 w-4 shrink-0 text-[#8a9e92]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" strokeLinecap="round" />
                  </svg>
                  <input
                    ref={searchRef}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={searchPlaceholder}
                    className="w-full bg-transparent text-[13px] text-[#1C3A2E] placeholder-[#a0b0a8] outline-none"
                  />
                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="shrink-0 text-[#a0b0a8] hover:text-[#1C3A2E]"
                    >
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <ul
                role="listbox"
                className="max-h-56 overflow-y-auto py-1.5"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#B8860B30 transparent" }}
              >
                {filtered.length === 0 ? (
                  <li className="px-4 py-3 text-center text-[13px] text-[#8a9e92]">{noResults}</li>
                ) : (
                  filtered.map((c) => (
                    <li
                      key={c.code}
                      role="option"
                      aria-selected={c.code === selectedCountry.code}
                      onClick={() => selectCountry(c)}
                      className={`flex cursor-pointer items-center gap-3 px-3.5 py-2.5 text-[13px] transition-colors duration-100 hover:bg-[#f5f0e4] ${
                        c.code === selectedCountry.code
                          ? "bg-[#fdf7e9] font-semibold text-[#1C3A2E]"
                          : "text-[#2d3f35]"
                      }`}
                    >
                      <span className="text-[18px] leading-none">{c.flag}</span>
                      <span className="flex-1 truncate">{c.name}</span>
                      <span className="shrink-0 font-mono text-[12px] font-semibold text-[#B8860B]">
                        {c.dialCode}
                      </span>
                      {c.code === selectedCountry.code && (
                        <svg className="h-3.5 w-3.5 shrink-0 text-[#1C3A2E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>

        <input
          type="tel"
          value={localNumber}
          onChange={(e) => setLocalNumber(e.target.value)}
          autoComplete="tel"
          placeholder="1XX XXX XXXX"
          className="min-w-0 w-full flex-1 rounded-xl border border-[#B8860B]/30 bg-[#faf8f3] px-4 py-3 text-[15px] text-[#1C3A2E] outline-none transition-shadow duration-300 placeholder:text-[#b0bdb7] focus:border-[#D4A017] focus:shadow-[0_0_0_3px_rgba(212,160,23,0.25)] min-[420px]:rounded-s-none min-[420px]:rounded-e-xl min-[420px]:border-s-0"
        />
      </div>
    </div>
  );
}
