import type { Locale } from "@/lib/i18n/types";
import type { QuranCourse } from "./types";
import { nooraniQaida } from "./noorani-qaida";
import { quranRecitation } from "./quran-recitation";
import { tajweedCourse } from "./tajweed";
import { quranMemorization } from "./quran-memorization";
import { qiraatCourse } from "./qiraat";
import { tafsirQuran } from "./tafsir-quran";
import { QURAN_COURSES_AR } from "./ar";

export const QURAN_PROGRAM_COURSES_EN: QuranCourse[] = [
  nooraniQaida,
  quranRecitation,
  tajweedCourse,
  quranMemorization,
  qiraatCourse,
  tafsirQuran,
];

/** @deprecated use getQuranCourse(slug, locale) */
export const QURAN_PROGRAM_COURSES = QURAN_PROGRAM_COURSES_EN;

export const QURAN_PROGRAM_SLUGS = QURAN_PROGRAM_COURSES_EN.map((c) => c.slug);

const enBySlug = new Map(QURAN_PROGRAM_COURSES_EN.map((c) => [c.slug, c]));
const arBySlug = new Map(QURAN_COURSES_AR.map((c) => [c.slug, c]));

export function getQuranCourse(slug: string, locale: Locale = "en"): QuranCourse | undefined {
  const map = locale === "ar" ? arBySlug : enBySlug;
  return map.get(slug);
}

export type { QuranCourse, LearningMethod, CurriculumPhase, SuccessStory } from "./types";
