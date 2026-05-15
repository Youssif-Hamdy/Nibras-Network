import type { Locale } from "@/lib/i18n/types";
import {
  TM_HERO,
  TM_INTRO,
  TM_PILLARS_KICKER,
  TM_SECTIONS,
} from "@/lib/i18n/teachingMethodologyData";
import { TM_AR, type TMBundle } from "@/lib/i18n/teachingMethodologyAr";

export type { TMBundle };

export function getTeachingMethodology(locale: Locale): TMBundle {
  if (locale === "ar") return TM_AR;
  return {
    hero: TM_HERO,
    intro: TM_INTRO,
    pillarsKicker: TM_PILLARS_KICKER,
    sections: TM_SECTIONS,
    ctaBookTrial: "Book Your Free Trial",
    ctaViewPackages: "View Our Packages",
  };
}
