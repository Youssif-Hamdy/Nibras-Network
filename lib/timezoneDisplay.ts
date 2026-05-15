import type { SearchableOption } from "@/components/SearchableSelect";

const CONTINENT_LABELS: Record<string, { en: string; ar: string }> = {
  Africa: { en: "Africa", ar: "أفريقيا" },
  America: { en: "Americas", ar: "الأمريكتان" },
  Asia: { en: "Asia", ar: "آسيا" },
  Atlantic: { en: "Atlantic", ar: "الأطلسي" },
  Australia: { en: "Australia", ar: "أستراليا" },
  Europe: { en: "Europe", ar: "أوروبا" },
  Indian: { en: "Indian Ocean", ar: "المحيط الهندي" },
  Pacific: { en: "Pacific", ar: "المحيط الهادئ" },
  Antarctica: { en: "Antarctica", ar: "أنتاركتيكا" },
  Arctic: { en: "Arctic", ar: "القطب الشمالي" },
};

export function parseTimezoneLocation(tz: string): { city: string; region: string } {
  const parts = tz.split("/");
  if (parts.length === 1) return { city: tz, region: "" };
  const continent = parts[0] ?? "";
  const continentLabel = CONTINENT_LABELS[continent];
  if (parts.length === 2) {
    return {
      city: parts[1]!.replace(/_/g, " "),
      region: continentLabel?.en ?? continent.replace(/_/g, " "),
    };
  }
  return {
    city: parts[parts.length - 1]!.replace(/_/g, " "),
    region: parts.slice(1, -1).join(" · ").replace(/_/g, " "),
  };
}

export function formatGmtOffset(timeZone: string, date = new Date()): string {
  try {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      timeZoneName: "shortOffset",
    }).formatToParts(date);
    const raw = parts.find((p) => p.type === "timeZoneName")?.value ?? "GMT";
    if (raw === "GMT" || raw === "UTC") return raw;
    return raw.replace("GMT", "GMT ");
  } catch {
    return "GMT";
  }
}

export function formatLocalTime(
  timeZone: string,
  locale: string,
  date = new Date(),
): string {
  try {
    return date.toLocaleTimeString(locale, {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  } catch {
    return "—";
  }
}

export function formatTimezoneDisplay(
  tz: string,
  locale: "en" | "ar",
  date = new Date(),
): string {
  const offset = formatGmtOffset(tz, date);
  const time = formatLocalTime(tz, locale === "ar" ? "ar-EG" : "en-GB", date);
  const { city, region } = parseTimezoneLocation(tz);
  const place = region ? `${city}, ${region}` : city;
  return `${offset} · ${time} · ${place}`;
}

export function buildTimezoneOptions(
  timezones: string[],
  locale: "en" | "ar",
  date = new Date(),
): SearchableOption[] {
  return timezones.map((tz) => {
    const { city, region } = parseTimezoneLocation(tz);
    const label = formatTimezoneDisplay(tz, locale, date);
    return {
      value: tz,
      label,
      searchText: `${tz} ${city} ${region} ${formatGmtOffset(tz, date)}`,
    };
  });
}
