import type { Locale } from "@/lib/i18n/types";
import { QURAN_PROGRAM_COURSES_EN, getQuranCourse } from "@/lib/courses/quran";
import { ARABIC_PROGRAM_COURSES_EN, getArabicCourse } from "@/lib/courses/arabic";
import { ISLAMIC_PROGRAM_COURSES_EN, getIslamicCourse } from "@/lib/courses/islamic";
import { SPECIAL_PROGRAM_COURSES_EN, getSpecialCourse } from "@/lib/courses/special";

export const COURSE_PROGRAM_SLUGS = [
  ...QURAN_PROGRAM_COURSES_EN.map((course) => course.slug),
  ...ARABIC_PROGRAM_COURSES_EN.map((course) => course.slug),
  ...ISLAMIC_PROGRAM_COURSES_EN.map((course) => course.slug),
  ...SPECIAL_PROGRAM_COURSES_EN.map((course) => course.slug),
];

export function getCourse(slug: string, locale: Locale = "en") {
  return (
    getQuranCourse(slug, locale) ??
    getArabicCourse(slug, locale) ??
    getIslamicCourse(slug, locale) ??
    getSpecialCourse(slug, locale)
  );
}

