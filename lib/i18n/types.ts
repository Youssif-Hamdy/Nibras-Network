export type Locale = "en" | "ar";

export const STORAGE_KEY = "nibras-locale";

export function isLocale(v: string | null): v is Locale {
  return v === "en" || v === "ar";
}
