"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { STORAGE_KEY, isLocale, type Locale } from "@/lib/i18n/types";
import { translate } from "@/lib/i18n/messages";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function applyDocumentLocale(locale: Locale) {
  const root = document.documentElement;
  root.lang = locale === "ar" ? "ar" : "en";
  root.dir = locale === "ar" ? "rtl" : "ltr";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isLocale(stored)) {
        setLocaleState(stored);
        applyDocumentLocale(stored);
      } else {
        applyDocumentLocale("en");
      }
    } catch {
      applyDocumentLocale("en");
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    applyDocumentLocale(locale);
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale, ready]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = useCallback((key: string) => translate(locale, key), [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, t }),
    [locale, setLocale, toggleLocale, t],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocaleContext(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocaleContext must be used within LocaleProvider");
  }
  return ctx;
}

/** Safe outside provider: returns English-only noop until mounted (SSR/static). */
export function useI18n(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  const fallback = useMemo(
    () =>
      ({
        locale: "en" as Locale,
        setLocale: () => {},
        toggleLocale: () => {},
        t: (key: string) => translate("en", key),
      }) satisfies LocaleContextValue,
    [],
  );
  return ctx ?? fallback;
}
