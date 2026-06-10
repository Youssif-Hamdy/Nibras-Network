"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export const COUNTRIES = [
  { code: "EG", name: "Egypt", dialCode: "+20", flag: "🇪🇬", minDigits: 10, maxDigits: 10, pattern: /^1[0-9]{9,10}$/, example: "10XXXXXXXX" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "🇸🇦", minDigits: 9, maxDigits: 9, pattern: /^5[0-9]{8}$/, example: "5XXXXXXXX" },
  { code: "AE", name: "UAE", dialCode: "+971", flag: "🇦🇪", minDigits: 9, maxDigits: 9, pattern: /^5[0-9]{8}$/, example: "50XXXXXXX" },
  { code: "KW", name: "Kuwait", dialCode: "+965", flag: "🇰🇼", minDigits: 8, maxDigits: 8, pattern: /^[0-9]{8}$/, example: "XXXXXXXX" },
  { code: "QA", name: "Qatar", dialCode: "+974", flag: "🇶🇦", minDigits: 8, maxDigits: 8, pattern: /^[3-7][0-9]{7}$/, example: "3XXXXXXX" },
  { code: "BH", name: "Bahrain", dialCode: "+973", flag: "🇧🇭", minDigits: 8, maxDigits: 8, pattern: /^[3-9][0-9]{7}$/, example: "3XXXXXXX" },
  { code: "OM", name: "Oman", dialCode: "+968", flag: "🇴🇲", minDigits: 8, maxDigits: 8, pattern: /^[0-9]{8}$/, example: "XXXXXXXX" },
  { code: "JO", name: "Jordan", dialCode: "+962", flag: "🇯🇴", minDigits: 9, maxDigits: 9, pattern: /^7[0-9]{8}$/, example: "7XXXXXXXX" },
  { code: "LB", name: "Lebanon", dialCode: "+961", flag: "🇱🇧", minDigits: 8, maxDigits: 8, pattern: /^[3-7][0-9]{7}$/, example: "3XXXXXXX" },
  { code: "IQ", name: "Iraq", dialCode: "+964", flag: "🇮🇶", minDigits: 10, maxDigits: 10, pattern: /^7[0-9]{9}$/, example: "7XXXXXXXXX" },
  { code: "SY", name: "Syria", dialCode: "+963", flag: "🇸🇾", minDigits: 9, maxDigits: 9, pattern: /^9[0-9]{8}$/, example: "9XXXXXXXX" },
  { code: "PS", name: "Palestine", dialCode: "+970", flag: "🇵🇸", minDigits: 9, maxDigits: 9, pattern: /^5[0-9]{8}$/, example: "5XXXXXXXX" },
  { code: "YE", name: "Yemen", dialCode: "+967", flag: "🇾🇪", minDigits: 9, maxDigits: 9, pattern: /^7[0-9]{8}$/, example: "7XXXXXXXX" },
  { code: "LY", name: "Libya", dialCode: "+218", flag: "🇱🇾", minDigits: 9, maxDigits: 10, pattern: /^9[0-9]{8,9}$/, example: "9XXXXXXXX" },
  { code: "TN", name: "Tunisia", dialCode: "+216", flag: "🇹🇳", minDigits: 8, maxDigits: 8, pattern: /^[2-9][0-9]{7}$/, example: "2XXXXXXX" },
  { code: "DZ", name: "Algeria", dialCode: "+213", flag: "🇩🇿", minDigits: 9, maxDigits: 9, pattern: /^[5-7][0-9]{8}$/, example: "5XXXXXXXX" },
  { code: "MA", name: "Morocco", dialCode: "+212", flag: "🇲🇦", minDigits: 9, maxDigits: 9, pattern: /^[6-7][0-9]{8}$/, example: "6XXXXXXXX" },
  { code: "SD", name: "Sudan", dialCode: "+249", flag: "🇸🇩", minDigits: 9, maxDigits: 9, pattern: /^9[0-9]{8}$/, example: "9XXXXXXXX" },
  { code: "SO", name: "Somalia", dialCode: "+252", flag: "🇸🇴", minDigits: 8, maxDigits: 9, pattern: /^[6-7][0-9]{7,8}$/, example: "6XXXXXXXX" },
  { code: "MR", name: "Mauritania", dialCode: "+222", flag: "🇲🇷", minDigits: 8, maxDigits: 8, pattern: /^[0-9]{8}$/, example: "XXXXXXXX" },
  { code: "TR", name: "Turkey", dialCode: "+90", flag: "🇹🇷", minDigits: 10, maxDigits: 10, pattern: /^5[0-9]{9}$/, example: "5XXXXXXXXX" },
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸", minDigits: 10, maxDigits: 10, pattern: /^[2-9][0-9]{9}$/, example: "XXXXXXXXXX" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧", minDigits: 10, maxDigits: 10, pattern: /^7[0-9]{9}$/, example: "7XXXXXXXXX" },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪", minDigits: 10, maxDigits: 11, pattern: /^1[5-7][0-9]{8,9}$/, example: "15XXXXXXXX" },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷", minDigits: 9, maxDigits: 9, pattern: /^[6-7][0-9]{8}$/, example: "6XXXXXXXX" },
  { code: "IT", name: "Italy", dialCode: "+39", flag: "🇮🇹", minDigits: 10, maxDigits: 10, pattern: /^3[0-9]{9}$/, example: "3XXXXXXXXX" },
  { code: "ES", name: "Spain", dialCode: "+34", flag: "🇪🇸", minDigits: 9, maxDigits: 9, pattern: /^[6-7][0-9]{8}$/, example: "6XXXXXXXX" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦", minDigits: 10, maxDigits: 10, pattern: /^[2-9][0-9]{9}$/, example: "XXXXXXXXXX" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺", minDigits: 9, maxDigits: 10, pattern: /^4[0-9]{8,9}$/, example: "4XXXXXXXX" },
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳", minDigits: 10, maxDigits: 10, pattern: /^[6-9][0-9]{9}$/, example: "XXXXXXXXXX" },
  { code: "PK", name: "Pakistan", dialCode: "+92", flag: "🇵🇰", minDigits: 10, maxDigits: 10, pattern: /^3[0-9]{9}$/, example: "3XXXXXXXXX" },
  { code: "NG", name: "Nigeria", dialCode: "+234", flag: "🇳🇬", minDigits: 10, maxDigits: 10, pattern: /^[7-9][0-9]{9}$/, example: "7XXXXXXXXX" },
  { code: "ZA", name: "South Africa", dialCode: "+27", flag: "🇿🇦", minDigits: 9, maxDigits: 9, pattern: /^[6-8][0-9]{8}$/, example: "6XXXXXXXX" },
  { code: "KE", name: "Kenya", dialCode: "+254", flag: "🇰🇪", minDigits: 9, maxDigits: 9, pattern: /^7[0-9]{8}$/, example: "7XXXXXXXX" },
  { code: "ET", name: "Ethiopia", dialCode: "+251", flag: "🇪🇹", minDigits: 9, maxDigits: 9, pattern: /^9[0-9]{8}$/, example: "9XXXXXXXX" },
  { code: "RU", name: "Russia", dialCode: "+7", flag: "🇷🇺", minDigits: 10, maxDigits: 10, pattern: /^9[0-9]{9}$/, example: "9XXXXXXXXX" },
  { code: "CN", name: "China", dialCode: "+86", flag: "🇨🇳", minDigits: 11, maxDigits: 11, pattern: /^1[3-9][0-9]{9}$/, example: "1XXXXXXXXXX" },
  { code: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵", minDigits: 10, maxDigits: 10, pattern: /^[7-9]0[0-9]{8}$/, example: "90XXXXXXXX" },
  { code: "KR", name: "South Korea", dialCode: "+82", flag: "🇰🇷", minDigits: 10, maxDigits: 11, pattern: /^[0-9]{10,11}$/, example: "10XXXXXXXX" },
  { code: "ID", name: "Indonesia", dialCode: "+62", flag: "🇮🇩", minDigits: 9, maxDigits: 12, pattern: /^8[0-9]{8,11}$/, example: "8XXXXXXXX" },
  { code: "MY", name: "Malaysia", dialCode: "+60", flag: "🇲🇾", minDigits: 9, maxDigits: 10, pattern: /^1[0-9]{8,9}$/, example: "1XXXXXXXX" },
  { code: "SG", name: "Singapore", dialCode: "+65", flag: "🇸🇬", minDigits: 8, maxDigits: 8, pattern: /^[0-9]{8}$/, example: "XXXXXXXX" },
  { code: "TH", name: "Thailand", dialCode: "+66", flag: "🇹🇭", minDigits: 9, maxDigits: 9, pattern: /^[6-9][0-9]{8}$/, example: "8XXXXXXXX" },
  { code: "PH", name: "Philippines", dialCode: "+63", flag: "🇵🇭", minDigits: 10, maxDigits: 10, pattern: /^9[0-9]{9}$/, example: "9XXXXXXXXX" },
  { code: "BR", name: "Brazil", dialCode: "+55", flag: "🇧🇷", minDigits: 10, maxDigits: 11, pattern: /^[1-9][0-9]{9,10}$/, example: "11XXXXXXXXX" },
  { code: "MX", name: "Mexico", dialCode: "+52", flag: "🇲🇽", minDigits: 10, maxDigits: 10, pattern: /^[1-9][0-9]{9}$/, example: "XXXXXXXXXX" },
  { code: "AR", name: "Argentina", dialCode: "+54", flag: "🇦🇷", minDigits: 10, maxDigits: 10, pattern: /^9[0-9]{9}$/, example: "9XXXXXXXXX" },
  { code: "NL", name: "Netherlands", dialCode: "+31", flag: "🇳🇱", minDigits: 9, maxDigits: 9, pattern: /^6[0-9]{8}$/, example: "6XXXXXXXX" },
  { code: "SE", name: "Sweden", dialCode: "+46", flag: "🇸🇪", minDigits: 9, maxDigits: 9, pattern: /^7[0-9]{8}$/, example: "7XXXXXXXX" },
  { code: "NO", name: "Norway", dialCode: "+47", flag: "🇳🇴", minDigits: 8, maxDigits: 8, pattern: /^[4-9][0-9]{7}$/, example: "4XXXXXXX" },
  { code: "CH", name: "Switzerland", dialCode: "+41", flag: "🇨🇭", minDigits: 9, maxDigits: 9, pattern: /^7[0-9]{8}$/, example: "7XXXXXXXX" },
  { code: "BE", name: "Belgium", dialCode: "+32", flag: "🇧🇪", minDigits: 9, maxDigits: 9, pattern: /^4[0-9]{8}$/, example: "4XXXXXXXX" },
  { code: "PL", name: "Poland", dialCode: "+48", flag: "🇵🇱", minDigits: 9, maxDigits: 9, pattern: /^[4-8][0-9]{8}$/, example: "5XXXXXXXX" },
  { code: "GR", name: "Greece", dialCode: "+30", flag: "🇬🇷", minDigits: 10, maxDigits: 10, pattern: /^6[0-9]{9}$/, example: "6XXXXXXXXX" },
  { code: "PT", name: "Portugal", dialCode: "+351", flag: "🇵🇹", minDigits: 9, maxDigits: 9, pattern: /^9[0-9]{8}$/, example: "9XXXXXXXX" },
  { code: "NZ", name: "New Zealand", dialCode: "+64", flag: "🇳🇿", minDigits: 9, maxDigits: 9, pattern: /^[2-9][0-9]{8}$/, example: "2XXXXXXXX" },
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
  const [error, setError] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Parse initial value if provided (format: +2010XXXXXXXX)
  useEffect(() => {
    if (value) {
      const matched = COUNTRIES.find((c) => value.startsWith(c.dialCode));
      if (matched) {
        setSelectedCountry(matched);
        const numberPart = value.slice(matched.dialCode.length);
        setLocalNumber(numberPart);
        validatePhoneNumber(numberPart, matched);
      } else {
        setLocalNumber(value);
      }
    }
  }, [value]);

  const validatePhoneNumber = (number: string, country: Country): boolean => {
    const trimmed = number.trim().replace(/\s/g, "");
    if (!trimmed) {
      setError("Phone number is required");
      return false;
    }

    // Remove leading zeros
    const cleanNumber = trimmed.replace(/^0+/, "");
    
    // Digits only
    const digitsOnly = cleanNumber.replace(/\D/g, "");
    
    // Check length
    if (digitsOnly.length < country.minDigits || digitsOnly.length > country.maxDigits) {
      setError(
        `${country.name}: Phone number should be ${country.minDigits}${country.maxDigits !== country.minDigits ? `-${country.maxDigits}` : ""} digits (excluding country code)`
      );
      return false;
    }
    
    // Check pattern if defined
    if (country.pattern && !country.pattern.test(digitsOnly)) {
      const exampleText = country.example ? ` (e.g., ${country.example})` : "";
      setError(`Invalid phone number format for ${country.name}${exampleText}`);
      return false;
    }

    setError("");
    return true;
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newNumber = e.target.value.replace(/\s/g, "");
    
    // Only allow digits
    newNumber = newNumber.replace(/\D/g, "");
    
    // Limit to max digits of selected country
    if (newNumber.length > selectedCountry.maxDigits) return;
    
    setLocalNumber(newNumber);
    
    // Validate and update parent
    const isValid = validatePhoneNumber(newNumber, selectedCountry);
    if (isValid || !newNumber) {
      onChange(`${selectedCountry.dialCode}${newNumber}`);
    } else {
      // Still update parent with invalid value so user can see error while typing
      onChange(`${selectedCountry.dialCode}${newNumber}`);
    }
  };

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
    // Re-validate with new country
    const isValid = validatePhoneNumber(localNumber, country);
    if (isValid || !localNumber) {
      onChange(`${country.dialCode}${localNumber}`);
    } else {
      onChange(`${country.dialCode}${localNumber}`);
    }
  };

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

  const getPlaceholder = () => {
    const { example, minDigits, maxDigits } = selectedCountry;
    if (example) return `e.g., ${example}`;
    return `${minDigits}${maxDigits !== minDigits ? `-${maxDigits}` : ""} digits`;
  };

  return (
    <div>
      <label className="block text-sm font-bold text-[#1C3A2E]">{label}</label>
      <div className="mt-2 flex flex-col gap-2 overflow-visible min-[420px]:flex-row min-[420px]:items-stretch min-[420px]:gap-0">
        <div ref={dropdownRef} className="relative min-[420px]:self-stretch">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={`flex h-full w-full min-w-0 items-center gap-2 rounded-xl border px-3 py-3 text-[15px] transition-all duration-200 hover:bg-[#f5f0e4] focus:border-[#D4A017] focus:shadow-[0_0_0_3px_rgba(212,160,23,0.25)] focus:outline-none min-[420px]:min-w-[112px] min-[420px]:rounded-s-xl min-[420px]:rounded-e-none ${
              error ? "border-red-400 bg-red-50" : "border-[#B8860B]/30 bg-[#faf8f3]"
            }`}
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            <span className="inline-flex items-center justify-center text-[18px] leading-[1]">{selectedCountry.flag}</span>
            <span className={`font-semibold ${error ? "text-red-600" : "text-[#B8860B]"}`}>
              {selectedCountry.dialCode}
            </span>
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
                      onClick={() => {
                        handleCountryChange(c);
                        setOpen(false);
                        setSearch("");
                      }}
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

        <div className="relative flex-1">
          <input
            type="tel"
            value={localNumber}
            onChange={handleNumberChange}
            autoComplete="tel"
            placeholder={getPlaceholder()}
            className={`w-full rounded-xl border px-4 py-3 text-[15px] text-[#1C3A2E] outline-none transition-all duration-300 placeholder:text-[#b0bdb7] focus:border-[#D4A017] focus:shadow-[0_0_0_3px_rgba(212,160,23,0.25)] min-[420px]:rounded-s-none min-[420px]:rounded-e-xl min-[420px]:border-s-0 ${
              error ? "border-red-400 bg-red-50" : "border-[#B8860B]/30 bg-[#faf8f3]"
            }`}
          />
          {error && (
            <p className="mt-1.5 text-xs leading-snug text-red-500">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}