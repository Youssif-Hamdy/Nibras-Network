"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type SearchableOption = {
  value: string;
  label: string;
  searchText?: string;
};

const listScrollCls = [
  "max-h-56 overflow-y-auto overscroll-contain py-1.5",
  "[scrollbar-width:thin]",
  "[scrollbar-color:#4a7a5a55_#e8efe8]",
  "[&::-webkit-scrollbar]:w-2.5",
  "[&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#e8efe8]",
  "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#4a7a5a]/55",
  "[&::-webkit-scrollbar-thumb]:hover:bg-[#1C3A2E]/70",
].join(" ");

export function SearchableSelect({
  id,
  value,
  onChange,
  options,
  placeholder,
  searchPlaceholder = "Search…",
  noResults = "No results found",
  label,
  triggerClassName,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: SearchableOption[];
  placeholder: string;
  searchPlaceholder?: string;
  noResults?: string;
  label: ReactNode;
  triggerClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
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

  const q = search.trim().toLowerCase();
  const filtered = q
    ? options.filter((o) => {
        const hay = `${o.label} ${o.searchText ?? ""} ${o.value}`.toLowerCase();
        return hay.includes(q);
      })
    : options;

  function pick(v: string) {
    onChange(v);
    setOpen(false);
    setSearch("");
  }

  const triggerBase = [
    "mt-1 flex w-full items-center justify-between gap-2 rounded-xl border bg-white px-4 py-3 text-start text-sm text-[#1a2f45]",
    "border-[#c8d9cd] shadow-sm cursor-pointer",
    "outline-none transition-all duration-150",
    "hover:border-[#4a7a5a]",
    "focus-visible:border-[#1C3A2E] focus-visible:ring-2 focus-visible:ring-[#1C3A2E]/10",
    triggerClassName ?? "",
  ].join(" ");

  return (
    <div ref={rootRef} className="relative">
      <label className="block text-[13px] font-semibold text-[#2a3f30] mb-0.5 tracking-wide" htmlFor={id}>
        {label}
      </label>
      <button
        id={id}
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={triggerBase}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={selected ? "text-[#1a2f45]" : "text-[#a0adb5]"}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`h-4 w-4 shrink-0 text-[#1C3A2E] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute start-0 top-full z-50 mt-1.5 w-full min-w-[14rem] overflow-hidden rounded-2xl border border-[#c8d9cd] bg-white shadow-[0_16px_48px_rgba(28,58,46,0.14)] ring-1 ring-black/[0.04]">
          <div className="border-b border-[#e2ede5] p-2.5">
            <div className="flex items-center gap-2 rounded-xl bg-[#f2f8f4] px-3 py-2">
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
                  aria-label="Clear search"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <ul role="listbox" className={listScrollCls}>
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-center text-[13px] text-[#8a9e92]">{noResults}</li>
            ) : (
              filtered.map((o) => {
                const active = o.value === value;
                return (
                  <li
                    key={o.value}
                    role="option"
                    aria-selected={active}
                    onClick={() => pick(o.value)}
                    className={[
                      "flex cursor-pointer items-center gap-2 px-3.5 py-2.5 text-[13px] transition-colors duration-100",
                      active ? "bg-[#eaf6ee] font-semibold text-[#0e2a1e]" : "text-[#3a5040] hover:bg-[#f2f8f4]",
                    ].join(" ")}
                  >
                    <span className="flex-1 truncate">{o.label}</span>
                    {active && (
                      <svg className="h-3.5 w-3.5 shrink-0 text-[#1C3A2E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}