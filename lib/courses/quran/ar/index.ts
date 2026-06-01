import type { QuranCourse } from "../types";
import { nooraniQaidaAr } from "./noorani-qaida";
import { quranRecitationAr } from "./quran-recitation";
import { tajweedCourseAr } from "./tajweed";
import { quranMemorizationAr } from "./quran-memorization";
import { qiraatCourseAr } from "./qiraat";
import { tafsirQuranAr } from "./tafsir-quran";

export const QURAN_COURSES_AR: QuranCourse[] = [
  nooraniQaidaAr,
  quranRecitationAr,
  tajweedCourseAr,
  quranMemorizationAr,
  qiraatCourseAr,
  tafsirQuranAr,
];
