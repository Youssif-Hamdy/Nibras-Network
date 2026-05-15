import type { Locale } from "@/lib/i18n/types";

export type EbookItem = {
  /** Path under /public — use encodeURI when linking */
  file: string;
  titleEn: string;
  titleAr: string;
  blurbEn: string;
  blurbAr: string;
};

/** PDFs in public/pdfs — filenames must match disk (UTF-8). */
export const EBOOK_FILES: EbookItem[] = [
  {
    file: "pdfs/125 Words of the Quran_V2.pdf",
    titleEn: "125 Words of the Qur'an",
    titleAr: "١٢٥ كلمة من القرآن",
    blurbEn: "Vocabulary bridge into Qur'anic Arabic.",
    blurbAr: "مفردات تربطك بالعربية القرآنية.",
  },
  {
    file: "pdfs/القاعدة النورانية.pdf",
    titleEn: "Al-Qāʿidah Al-Nūrāniyyah",
    titleAr: "القاعدة النورانية",
    blurbEn: "Foundational letters and syllables for beginners.",
    blurbAr: "أساس الحروف والمقاطع للمبتدئين.",
  },
  {
    file: "pdfs/مخارج الحروف رااائع-1.pdf",
    titleEn: "Makharij Al-Ḥurūf",
    titleAr: "مخارج الحروف",
    blurbEn: "Articulation points for clear tajwīd and recitation.",
    blurbAr: "مخارج الحروف للتلاوة الواضحة.",
  },
  {
    file: "pdfs/The_Year_of_the_Elephant (1).pdf",
    titleEn: "The Year of the Elephant",
    titleAr: "عام الفيل",
    blurbEn: "Seerah story resource — context before the Prophet ﷺ.",
    blurbAr: "قصة من السيرة — سياق ما قبل البعثة.",
  },
  {
    file: "pdfs/1 سورة الفاتحة.pdf",
    titleEn: "Sūrah Al-Fātiḥah",
    titleAr: "سورة الفاتحة",
    blurbEn: "Focused guide to the opening chapter of the Qur'an.",
    blurbAr: "دليل لسورة افتتاح القرآن.",
  },
];

export function getEbooksPage(locale: Locale) {
  const isAr = locale === "ar";
  return {
    kicker: isAr ? "مجاناً للتعلّم" : "Free learning library",
    title: isAr ? "كتب إلكترونية مجانية" : "Free E-Books",
    subtitle: isAr
      ? "حمّل أو افتح مباشرة — مواد أصلية تدعم رحلتك مع القرآن والعربية."
      : "Download or open in your browser — authentic materials for your Qur'an and Arabic journey.",
    openLabel: isAr ? "فتح" : "Open",
    downloadLabel: isAr ? "تحميل" : "Download",
    footerLine: isAr
      ? "جاهز للخطوة التالية؟ احجز تجربتك المجانية مع معلم يناسبك."
      : "Ready for the next step? Book your free trial and meet a teacher who fits your goals.",
    footerCta: isAr ? "احجز تجربة مجانية" : "Book free trial",
    freeBadge: isAr ? "مجاني" : "Free",
  };
}
