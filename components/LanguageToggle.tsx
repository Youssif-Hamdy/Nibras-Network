"use client";

import { useI18n } from "@/components/LocaleProvider";

type Props = {
  className?: string;
  compact?: boolean;
};

export default function LanguageToggle({ className = "", compact }: Props) {
  const { locale, toggleLocale, t } = useI18n();
  const nextIsAr = locale === "en";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t("lang.aria")}
      title={nextIsAr ? t("lang.switchToAr") : t("lang.switchToEn")}
      className={[
        "inline-flex items-center rounded-full border border-[#D4A017]/45 bg-[#FDFAF4]/90",
        "text-[10px] lg:text-[11px] xl:text-[12px] font-bold tracking-wide text-[#3a3a3a]",
        "hover:border-[#B8860B] hover:bg-[#D4A017]/12 hover:text-[#1C3A2E]",
        "transition-all duration-200 shadow-sm flex-shrink-0",
        compact ? "px-2 py-1 gap-0.5" : "px-2.5 py-1.5 gap-1",
        className,
      ].join(" ")}
    >
      <span
        className={`rounded-full px-2 py-0.5 transition-colors ${
          locale === "en"
            ? "bg-[#1C3A2E] text-[#F5F0E8]"
            : "text-[#6b6b6b]"
        }`}
      >
        EN
      </span>
      <span
        className={`rounded-full px-2 py-0.5 transition-colors ${
          locale === "ar"
            ? "bg-[#1C3A2E] text-[#F5F0E8]"
            : "text-[#6b6b6b]"
        }`}
      >
        عربي
      </span>
    </button>
  );
}
