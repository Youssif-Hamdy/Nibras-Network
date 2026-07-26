"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useI18n } from "@/components/LocaleProvider";

type ValueItem = {
  id: string;
  label: string;
  title: string;
  enTitle?: string;
  mainValueAr: string;
  mainValueEn: string;
  body: string;
  inPracticeTitle: string;
  inPractice: string[];
  whyTitle: string;
  whyText: string;
  icon: "shield" | "star" | "heart" | "globe" | "lock" | "users";
  image: string;
  accentHex: string;
  accentLight: string;
};

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timeoutId: number | undefined;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        timeoutId = window.setTimeout(() => setVisible(true), 0);
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);
  return { ref, visible };
}

function RevealSection({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${className} ${
        visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

const values: ValueItem[] = [
  {
    id: "01",
    label: "VALUE 1 — AUTHENTICITY · الْأَصَالَة",
    mainValueAr: "الْأَصَالَة",
    mainValueEn: "Authenticity",
    title: "Teaching Real Islam",
    body: "We only teach from verified Islamic sources — the Quran, authentic Hadith, and established scholarly consensus. No personal opinions presented as religion.",
    inPracticeTitle: "In practice",
    inPractice: [
      "Every teacher's Islamic credentials personally verified",
      "All curriculum reviewed for authenticity",
      "When scholars differ, we present evidence honestly",
      "We say \"I don't know\" instead of guessing",
    ],
    whyTitle: "Why it matters",
    whyText: "You can trust that what you're learning is authentic Islam accepted by Allah, not someone's personal interpretation.",
    icon: "shield",
    image: "/images/value/azala.png",
    accentHex: "#1D6B4A",
    accentLight: "#E4F2EB",
  },
  {
    id: "02",
    label: "VALUE 2 — EXCELLENCE · الْإِتْقَان",
    mainValueAr: "الْإِتْقَان",
    mainValueEn: "Excellence",
    title: "The Prophet ﷺ said: \"Allah loves that when one of you does something, he does it with excellence.\"",
    body: "Every lesson planned carefully. Every question answered thoroughly. Every student treated with full attention.",
    inPracticeTitle: "In practice",
    inPractice: [
      "Teachers with minimum 3–5 years teaching experience",
      "Regular feedback sessions to improve our service",
      "Investing in good technology for clear lessons",
      "Continuous learning and development for all staff",
    ],
    whyTitle: "Why it matters",
    whyText: "Your time is valuable. We work hard to make every lesson worth it.",
    icon: "star",
    image: "/images/value/atqan.png",
    accentHex: "#A8720D",
    accentLight: "#FDF3DC",
  },
  {
    id: "03",
    label: "VALUE 3 — COMPASSION · الرَّحْمَة",
    mainValueAr: "الرَّحْمَة",
    mainValueEn: "Compassion",
    title: "Teaching with Kindness",
    body: "Learning Quran should never be stressful or scary. We believe in encouragement, patience, and celebrating every small step of progress.",
    inPracticeTitle: "In practice",
    inPractice: [
      "Never making students feel ashamed for not knowing",
      "Understanding different learning speeds",
      "Being flexible when life challenges arise",
      "Celebrating effort as much as results",
    ],
    whyTitle: "Why it matters",
    whyText: "You'll learn in an environment of support, not pressure or criticism.",
    icon: "heart",
    image: "/images/value/rahma.png",
    accentHex: "#B84455",
    accentLight: "#FDEDF0",
  },
  {
    id: "04",
    label: "VALUE 4 — INCLUSIVITY · الشُّمُولِيَّة",
    mainValueAr: "الشُّمُولِيَّة",
    mainValueEn: "Inclusivity",
    title: "Welcoming Everyone",
    body: "Whether you're a born Muslim or new convert, 5 years old or 75, from any country or culture — you're equally welcome and valued here.",
    inPracticeTitle: "We serve",
    inPractice: [
      "New Muslims just beginning their journey",
      "Born Muslims wanting to deepen knowledge",
      "Children, teenagers, adults, and seniors",
      "Students with special learning needs",
      "Families wanting to learn together",
      "Busy professionals with limited time",
    ],
    whyTitle: "Why it matters",
    whyText: "You're accepted exactly as you are, wherever you are in your Islamic journey.",
    icon: "globe",
    image: "/images/value/alshomlya.png",
    accentHex: "#2156A0",
    accentLight: "#E5EDFA",
  },
  {
    id: "05",
    label: "VALUE 5 — INTEGRITY · النَّزَاهَة",
    mainValueAr: "النَّزَاهَة",
    mainValueEn: "Integrity",
    title: "Being Honest",
    body: "We tell you the truth about everything — realistic timelines, honest pricing, truthful progress reports, and authentic reviews.",
    inPracticeTitle: "In practice",
    inPractice: [
      "Clear pricing with no hidden fees",
      "Honest about how long things actually take",
      "Real student reviews (never fake)",
      "Admitting mistakes when we make them",
      "Protecting your privacy completely",
    ],
    whyTitle: "Why it matters",
    whyText: "You can trust us with your money, your data, your children, and your Islamic education.",
    icon: "lock",
    image: "/images/value/alnzaha.png",
    accentHex: "#5B3A99",
    accentLight: "#EEE8FA",
  },
  {
    id: "06",
    label: "VALUE 6 — COMMUNITY · الْأُخُوَّة",
    mainValueAr: "الْأُخُوَّة",
    mainValueEn: "Community",
    title: "Building Relationships",
    body: "You're not just a customer or a number. We're building a community of learners who support each other in faith and knowledge.",
    inPracticeTitle: "What we offer",
    inPractice: [
      "Connection with fellow students worldwide",
      "Support groups for new Muslims",
      "Parent community for sharing experiences",
      "Continued support even after course completion",
      "Scholarships funded by our community",
    ],
    whyTitle: "Why it matters",
    whyText: "You're joining a family, not just enrolling in a service.",
    icon: "users",
    image: "/images/value/almogtmaa.png",
    accentHex: "#0F7A6B",
    accentLight: "#E0F4F1",
  },
];

const valuesAr: ValueItem[] = [
  {
    id: "01",
    label: "١ — الْأَصَالَة",
    mainValueAr: "الْأَصَالَة",
    mainValueEn: "Authenticity",
    title: "تَعْلِيمُ الْإِسْلَامِ الصَّحِيحِ",
    enTitle: "Teaching Real Islam",
    body: "نَحْنُ نُدَرِّسُ فَقَطْ مِنَ الْمَصَادِرِ الْإِسْلَامِيَّةِ الْمَوْثُوقَةِ: الْقُرْآنِ الْكَرِيمِ، وَالْحَدِيثِ الصَّحِيحِ، وَإِجْمَاعِ الْعُلَمَاءِ الْمُعْتَمَدِ. لَا نَعْرِضُ الْآرَاءَ الشَّخْصِيَّةَ عَلَى أَنَّهَا دِينٌ.",
    inPracticeTitle: "عَمَلِيًّا",
    inPractice: [
      "يَتَمُّ التَّحَقُّقُ شَخْصِيًّا مِنَ الْمُؤَهِّلَاتِ الشَّرْعِيَّةِ لِكُلِّ مُعَلِّمٍ",
      "تُراجَعُ جَمِيعُ الْمَنَاهِجِ لِضَمَانِ الْأَصَالَةِ",
      "عِنْدَ اخْتِلَافِ الْعُلَمَاءِ، نَعْرِضُ الْأَدِلَّةَ بِوُضُوحٍ وَأَمَانَةٍ",
      "نَقُولُ \"لَا نَعْلَمُ\" بَدَلَ التَّخْمِينِ",
    ],
    whyTitle: "لِمَاذَا هَذَا مُهِمٌّ",
    whyText: "يُمْكِنُكَ أَنْ تَثِقَ أَنَّ مَا تَتَعَلَّمُهُ هُوَ الْإِسْلَامُ الصَّحِيحُ الْمَقْبُولُ عِنْدَ اللَّهِ، وَلَيْسَ تَفْسِيرًا شَخْصِيًّا مِنْ أَحَدٍ.",
    icon: "shield",
    image: "/images/value/azala.png",
    accentHex: "#1D6B4A",
    accentLight: "#E4F2EB",
  },
  {
    id: "02",
    label: "٢ — الْإِتْقَان",
    mainValueAr: "الْإِتْقَان",
    mainValueEn: "Excellence",
    title: "قَالَ النَّبِيُّ ﷺ: \"إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ.\"",
    enTitle: "The Prophet ﷺ said: \"Allah loves that when one of you does something, he does it with excellence.\"",
    body: "نَحْنُ نَسْعَى دَائِمًا لِلتَّحْسِينِ. كُلُّ دَرْسٍ يُخَطَّطُ لَهُ بِعِنَايَةٍ، وَكُلُّ سُؤَالٍ يُجَابُ عَنْهُ بِوُضُوحٍ، وَكُلُّ طَالِبٍ يَحْظَى بِاهْتِمَامٍ كَامِلٍ.",
    inPracticeTitle: "عَمَلِيًّا",
    inPractice: [
      "مُعَلِّمُونَ بِخِبْرَةٍ تَعْلِيمِيَّةٍ لَا تَقِلُّ عَنْ ٣-٥ سَنَوَاتٍ",
      "جَلَسَاتُ تَغْذِيَةٍ رَاجِعَةٍ دَوْرِيَّةٍ لِتَطْوِيرِ الْخِدْمَةِ",
      "الِاسْتِثْمَارُ فِي تِقْنِيَّةٍ جَيِّدَةٍ لِضَمَانِ وُضُوحِ الدُّرُوسِ",
      "تَعَلُّمٌ وَتَطْوِيرٌ مُسْتَمِرٌّ لِلْفَرِيقِ",
    ],
    whyTitle: "لِمَاذَا هَذَا مُهِمٌّ",
    whyText: "وَقْتُكَ ثَمِينٌ، وَنَحْنُ نَعْمَلُ بِجِدٍّ حَتَّى تَكُونَ كُلُّ حِصَّةٍ مُسْتَحِقَّةً لِهَذَا الْوَقْتِ.",
    icon: "star",
    image: "/images/value/atqan.png",
    accentHex: "#A8720D",
    accentLight: "#FDF3DC",
  },
  {
    id: "03",
    label: "٣ — الرَّحْمَة",
    mainValueAr: "الرَّحْمَة",
    mainValueEn: "Compassion",
    title: "التَّعْلِيمُ بِلُطْفٍ",
    enTitle: "Teaching with Kindness",
    body: "تَعَلُّمُ الْقُرْآنِ لَا يَنْبَغِي أَنْ يَكُونَ مُرْهِقًا أَوْ مُخِيفًا. نُؤْمِنُ بِالتَّشْجِيعِ وَالصَّبْرِ وَالِاحْتِفَاءِ بِكُلِّ خُطْوَةِ تَقَدُّمٍ صَغِيرَةٍ.",
    inPracticeTitle: "عَمَلِيًّا",
    inPractice: [
      "لَا نَجْعَلُ الطَّالِبَ يَشْعُرُ بِالْخَجَلِ بِسَبَبِ عَدَمِ مَعْرِفَتِهِ",
      "مُرَاعَاةُ اخْتِلَافِ سُرَعَاتِ التَّعَلُّمِ بَيْنَ الطُّلَّابِ",
      "الْمُرُونَةُ عِنْدَ وُجُودِ تَحَدِّيَاتٍ وَظُرُوفٍ حَيَاتِيَّةٍ",
      "الِاحْتِفَاءُ بِالِاجْتِهَادِ بِقَدْرِ النَّتَائِجِ",
    ],
    whyTitle: "لِمَاذَا هَذَا مُهِمٌّ",
    whyText: "سَتَتَعَلَّمُ فِي بِيئَةِ دَعْمٍ وَاحْتِوَاءٍ، لَا فِي بِيئَةِ ضَغْطٍ أَوْ نَقْدٍ.",
    icon: "heart",
    image: "/images/value/rahma.png",
    accentHex: "#B84455",
    accentLight: "#FDEDF0",
  },
  {
    id: "04",
    label: "٤ — الشُّمُولِيَّة",
    mainValueAr: "الشُّمُولِيَّة",
    mainValueEn: "Inclusivity",
    title: "التَّرْحِيبُ بِالْجَمِيعِ",
    enTitle: "Welcoming Everyone",
    body: "سَوَاءٌ كُنْتَ مُسْلِمًا مُنْذُ الْوِلَادَةِ أَوْ مُسْلِمًا جَدِيدًا، عُمْرُكَ ٥ سَنَوَاتٍ أَوْ ٧٥ سَنَةً، وَمِنْ أَيِّ بَلَدٍ أَوْ ثَقَافَةٍ — فَأَنْتَ مُرَحَّبٌ بِكَ وَمُقَدَّرٌ لَدَيْنَا.",
    inPracticeTitle: "نَخْدِمُ",
    inPractice: [
      "الْمُسْلِمِينَ الْجُدُدَ فِي بِدَايَةِ رِحْلَتِهِمْ",
      "الْمُسْلِمِينَ الرَّاغِبِينَ فِي تَعْمِيقِ الْعِلْمِ",
      "الْأَطْفَالَ وَالْمُرَاهِقِينَ وَالْبَالِغِينَ وَكِبَارَ السِّنِّ",
      "الطُّلَّابَ ذَوِي الِاحْتِيَاجَاتِ التَّعْلِيمِيَّةِ الْخَاصَّةِ",
      "الْعَائِلَاتِ الَّتِي تَرْغَبُ فِي التَّعَلُّمِ مَعًا",
      "الْمِهَنِيِّينَ الْمَشْغُولِينَ ذَوِي الْوَقْتِ الْمَحْدُودِ",
    ],
    whyTitle: "لِمَاذَا هَذَا مُهِمٌّ",
    whyText: "أَنْتَ مَقْبُولٌ كَمَا أَنْتَ تَمَامًا، أَيْنَمَا كُنْتَ فِي رِحْلَتِكَ الْإِيمَانِيَّةِ.",
    icon: "globe",
    image: "/images/value/alshomlya.png",
    accentHex: "#2156A0",
    accentLight: "#E5EDFA",
  },
  {
    id: "05",
    label: "٥ — النَّزَاهَة",
    mainValueAr: "النَّزَاهَة",
    mainValueEn: "Integrity",
    title: "الصِّدْقُ وَالْوُضُوحُ",
    enTitle: "Being Honest",
    body: "نُخْبِرُكَ بِالْحَقِيقَةِ فِي كُلِّ شَيْءٍ: مُدَّةٌ وَاقِعِيَّةٌ لِلتَّعَلُّمِ، أَسْعَارٌ وَاضِحَةٌ، تَقَارِيرُ تَقَدُّمٍ صَادِقَةٌ، وَتَقْيِيمَاتٌ حَقِيقِيَّةٌ.",
    inPracticeTitle: "عَمَلِيًّا",
    inPractice: [
      "أَسْعَارٌ وَاضِحَةٌ بِدُونِ رُسُومٍ مَخْفِيَّةٍ",
      "الْوُضُوحُ بِشَأْنِ الْمُدَّةِ الْحَقِيقِيَّةِ لِلتَّقَدُّمِ",
      "تَقْيِيمَاتُ طُلَّابٍ حَقِيقِيَّةٌ وَلَيْسَتْ مُصْطَنَعَةً",
      "الِاعْتِرَافُ بِالْخَطَإِ عِنْدَ حُدُوثِهِ",
      "حِمَايَةٌ كَامِلَةٌ لِخُصُوصِيَّتِكَ",
    ],
    whyTitle: "لِمَاذَا هَذَا مُهِمٌّ",
    whyText: "يُمْكِنُكَ أَنْ تَأْتَمِنَنَا عَلَى مَالِكَ وَبَيَانَاتِكَ وَأَبْنَائِكَ وَتَعْلِيمِكَ الْإِسْلَامِيِّ.",
    icon: "lock",
    image: "/images/value/alnzaha.png",
    accentHex: "#5B3A99",
    accentLight: "#EEE8FA",
  },
  {
    id: "06",
    label: "٦ — الْأُخُوَّة",
    mainValueAr: "الْأُخُوَّة",
    mainValueEn: "Community",
    title: "بِنَاءُ الْعَلَاقَاتِ",
    enTitle: "Building Relationships",
    body: "أَنْتَ لَسْتَ مُجَرَّدَ عَمِيلٍ أَوْ رَقْمٍ. نَحْنُ نَبْنِي مُجْتَمَعًا مِنَ الْمُتَعَلِّمِينَ يَدْعَمُ بَعْضُهُمْ بَعْضًا فِي الْإِيمَانِ وَالْعِلْمِ.",
    inPracticeTitle: "مَا نُقَدِّمُهُ",
    inPractice: [
      "التَّوَاصُلُ مَعَ طُلَّابٍ مِنْ أَنْحَاءِ الْعَالَمِ",
      "مَجْمُوعَاتُ دَعْمٍ لِلْمُسْلِمِينَ الْجُدُدِ",
      "مُجْتَمَعُ أَوْلِيَاءِ أُمُورٍ لِتَبَادُلِ الْخِبْرَاتِ",
      "دَعْمٌ مُسْتَمِرٌّ حَتَّى بَعْدَ إِكْمَالِ الدَّوْرَةِ",
      "مِنَحٌ دِرَاسِيَّةٌ مُمَوَّلَةٌ مِنْ مُجْتَمَعِنَا",
    ],
    whyTitle: "لِمَاذَا هَذَا مُهِمٌّ",
    whyText: "أَنْتَ تَنْضَمُّ إِلَى عَائِلَةٍ، وَلَيْسَ مُجَرَّدَ خِدْمَةٍ تَعْلِيمِيَّةٍ.",
    icon: "users",
    image: "/images/value/almogtmaa.png",
    accentHex: "#0F7A6B",
    accentLight: "#E0F4F1",
  },
];

const differentiators = [
  { icon: "✦", text: "Personal Attention — We know our students by name and celebrate your progress" },
  { icon: "✦", text: "Quality Over Quantity — We carefully select every teacher and verify their qualifications" },
  { icon: "✦", text: "Honest & Realistic — We give you honest timelines based on real student experiences" },
  { icon: "✦", text: "Direct Communication — When you contact us, you reach real people who care" },
  { icon: "✦", text: "Flexibility — Being small means we can quickly adapt to student needs" },
  { icon: "✦", text: "Affordable Pricing — We keep prices fair because this is service to Allah first" },
];

const differentiatorsAr = [
  { icon: "✦", text: "اهْتِمَامٌ شَخْصِيٌّ — نَعْرِفُ طُلَّابَنَا بِالِاسْمِ وَنَحْتَفِي بِتَقَدُّمِهِمْ" },
  { icon: "✦", text: "الْجَوْدَةُ قَبْلَ الْكَمِّيَّةِ — نَخْتَارُ كُلَّ مُعَلِّمٍ بِعِنَايَةٍ وَنَتَحَقَّقُ مِنْ مُؤَهِّلَاتِهِ" },
  { icon: "✦", text: "صَرَاحَةٌ وَوَاقِعِيَّةٌ — نُعْطِيكَ تَقْدِيرَاتٍ وَاقِعِيَّةً مَبْنِيَّةً عَلَى تَجَارِبَ حَقِيقِيَّةٍ" },
  { icon: "✦", text: "تَوَاصُلٌ مُبَاشِرٌ — عِنْدَمَا تَتَوَاصَلُ مَعَنَا تَتَحَدَّثُ مَعَ أَشْخَاصٍ حَقِيقِيِّينَ يَهْتَمُّونَ بِكَ" },
  { icon: "✦", text: "مُرُونَةٌ عَالِيَةٌ — كَوْنُنَا أَصْغَرَ يَسْمَحُ لَنَا بِالتَّكَيُّفِ سَرِيعًا مَعَ احْتِيَاجَاتِ الطُّلَّابِ" },
  { icon: "✦", text: "أَسْعَارٌ عَادِلَةٌ — نُحَافِظُ عَلَى أَسْعَارٍ مُنَاسِبَةٍ لِأَنَّ هَذِهِ خِدْمَةٌ لِلَّهِ أَوَّلًا" },
];

function GoldDivider() {
  return (
    <div className="my-6 flex items-center justify-center gap-3">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C79B3B]/60" />
      <span className="select-none text-lg text-[#C79B3B]">✦</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C79B3B]/60" />
    </div>
  );
}

function valueChipLabel(v: ValueItem, isAr: boolean) {
  if (isAr) return v.label;
  return v.label.split("—")[0]?.trim() ?? v.label;
}

export default function AboutValuesPageContent() {
  const { locale } = useI18n();
  const isAr = locale === "ar";
  const pageValues = isAr ? valuesAr : values;
  const pageDifferentiators = isAr ? differentiatorsAr : differentiators;

  return (
    <div className="overflow-x-hidden bg-[#F4F1EB] text-[#1A2E25]" dir={isAr ? "rtl" : "ltr"}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSoft {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0%   { opacity: .55; }
          50%  { opacity: 1; }
          100% { opacity: .55; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(6px); }
        }
        @keyframes pixelPulse {
          0%,100% { opacity: var(--op, .5); transform: scale(1); }
          50%     { opacity: calc(var(--op, .5) * .35); transform: scale(.7); }
        }
        @keyframes kenBurns {
          0%   { transform: scale(1.08); }
          100% { transform: scale(1.14); }
        }

        .page-root { font-family: 'DM Sans', sans-serif; }
        .serif     { font-family: 'Cormorant Garamond', Georgia, serif; }

        .hero-in { opacity: 0; animation: fadeUp 700ms ease forwards; }
        .d1 { animation-delay: .08s; }
        .d2 { animation-delay: .22s; }
        .d3 { animation-delay: .36s; }
        .d4 { animation-delay: .50s; }
        .d5 { animation-delay: .64s; }

        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 18px;
          border-radius: 9999px;
          border: 1px solid rgba(199,155,59,.45);
          background: rgba(199,155,59,.13);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #E3C98F;
        }
        .shimmer-pill { animation: shimmer 3s ease-in-out infinite; }
        .scroll-cue { animation: bounce 1.8s ease-in-out infinite; }
        .hero-bg-zoom { animation: kenBurns 18s ease-in-out infinite alternate; }

        .val-card {
          transition: box-shadow 320ms ease, transform 320ms ease;
        }
        .val-card:hover {
          box-shadow: 0 28px 64px rgba(20,50,38,.14);
        }
        .val-card:hover .val-image-scale {
          transform: scale(1.05);
        }
        .val-image-scale {
          transition: transform 700ms cubic-bezier(0.22,1,0.36,1);
        }
        .value-num-badge {
          animation: floatSoft 3.6s ease-in-out infinite;
        }

        .practice-dot {
          width: 6px; height: 6px; min-width: 6px;
          border-radius: 1px;
          display: inline-block;
          margin-top: 7px;
        }

        .diff-card {
          transition: background 240ms ease, transform 220ms ease;
          cursor: default;
        }
        .diff-card:hover {
          transform: translateX(6px);
          background: rgba(255,255,255,.1) !important;
        }
        [dir="rtl"] .diff-card:hover {
          transform: translateX(-6px);
        }
      `}</style>

      <div className="page-root">

        {/* ── HERO (full viewport width) ── */}
        <section className="relative isolate min-h-[100svh] overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/value/value.png"
              alt={isAr ? "قيمنا" : "Our values"}
              fill
              priority
              sizes="100vw"
              className="hero-bg-zoom object-cover object-center blur-[1px]"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0D2920]/55 via-[#0D2920]/35 to-[#0D2920]/82" />
          <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_90%_70%_at_50%_40%,transparent_35%,rgba(13,41,32,.5)_100%)]" />

          <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 pb-12 pt-[calc(70px+1.5rem)] text-center sm:px-6 sm:pb-16 sm:pt-28">
            <div className="hero-in d1 mb-6">
              <span className="hero-pill shimmer-pill">✦</span>
            </div>

            <p
              className="hero-in d2 mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D6B46A]"
            >
              {isAr ? "الصفحة 3 — قيمنا" : "PAGE 3 — OUR VALUES"}
            </p>

            <h1 className="serif hero-in d3 max-w-4xl text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.15] text-[#F5EEE1] drop-shadow-sm">
              {isAr ? "الْقِيَمُ الَّتِي نَعِيشُ بِهَا" : "The Values We Live By"}
            </h1>

            <GoldDivider />

            <p className="hero-in d4 mx-auto max-w-2xl text-[15px] leading-8 text-[#CFE1D9] sm:text-base sm:leading-9">
              {isAr
                ? "هَذِهِ لَيْسَتْ مُجَرَّدَ كَلِمَاتٍ عَلَى مَوْقِعٍ — بَلْ مَبَادِئُ نُطَبِّقُهَا يَوْمِيًّا فِي كُلِّ دَرْسٍ، وَكُلِّ تَوَاصُلٍ، وَكُلِّ قَرَارٍ."
                : "These aren't just words on a website — they're principles we practice daily in every lesson, every interaction, every decision."}
            </p>

            <div className="hero-in d5 mt-8 flex flex-col items-center gap-2 text-[#A8C9BC]">
              <span className="text-xs uppercase tracking-widest">
                {isAr ? "اكتشف القيم" : "Explore our values"}
              </span>
              <svg
                className="scroll-cue h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* ── VALUE CARDS ── */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-10 sm:gap-14">
            {pageValues.map((v, idx) => {
              const imageFirst = idx % 2 === 0;
              return (
                <RevealSection key={v.id} delayMs={idx * 80}>
                  <article
                    className="val-card overflow-hidden rounded-3xl border border-[#E5D9C1]/80 bg-[#FFFDF8] shadow-[0_8px_32px_rgba(28,58,46,.07)]"
                  >
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2 ${
                        !imageFirst ? "md:[direction:rtl]" : ""
                      }`}
                    >
                      {/* Image column */}
                      <div className="val-image-wrap relative overflow-hidden min-h-[220px] sm:min-h-[280px] md:min-h-[360px] lg:min-h-[400px]">
                        <Image
                          src={v.image}
                          alt={v.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="val-image-scale object-cover"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-[#173428]/75 via-[#173428]/25 to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#173428]/15 md:to-[#173428]/55"
                          aria-hidden
                        />
                        <span
                          className="value-num-badge absolute bottom-4 start-4 rounded-2xl border border-white/25 bg-white/15 px-4 py-2 font-serif text-3xl font-bold text-[#F5EEE1] backdrop-blur-md sm:text-4xl"
                          style={{ borderColor: `${v.accentHex}55` }}
                        >
                          {v.id}
                        </span>
                        <span
                          className="absolute top-4 end-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm"
                          style={{ background: `${v.accentHex}CC` }}
                        >
                          {v.label.split("—")[0]?.trim() ?? v.label}
                        </span>
                      </div>

                      {/* Content column */}
                      <div
                        className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 md:[direction:ltr]"
                        dir={isAr ? "rtl" : "ltr"}
                      >
                        <div className="mb-8 flex flex-col items-center text-center">
                          <p
                            className="mb-3 text-[11px] font-bold uppercase tracking-widest sm:text-[13px]"
                            style={{ color: v.accentHex }}
                          >
                            {v.label}
                          </p>

                          <h2
                            className="serif mb-1 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-none"
                            style={{ color: v.accentHex }}
                          >
                            {v.mainValueAr}
                          </h2>
                          
                          <div className="mt-1 flex items-center justify-center gap-3">
                            <span className="h-px w-6 opacity-40 sm:w-10" style={{ background: v.accentHex }} />
                            <span
                              className="font-serif text-[clamp(1.1rem,2vw,1.5rem)] italic tracking-wide"
                              style={{ color: v.accentHex }}
                              dir="ltr"
                            >
                              ({v.mainValueEn})
                            </span>
                            <span className="h-px w-6 opacity-40 sm:w-10" style={{ background: v.accentHex }} />
                          </div>
                        </div>

                        <div className="mb-6">
                          <h3 className="serif mb-2 text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-snug text-[#182820]">
                            {v.title}
                          </h3>
                          {v.enTitle && (
                            <p className="font-sans text-[clamp(1rem,2vw,1.2rem)] font-medium tracking-wide text-[#182820]/60" dir="ltr">
                              {v.enTitle}
                            </p>
                          )}
                        </div>

                        <p className="mb-6 text-[14px] leading-[1.85] text-[#3D5A4A] sm:text-[15px]">
                          {v.body}
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div
                            className="rounded-2xl border p-4 sm:p-5"
                            style={{
                              background: v.accentLight,
                              borderColor: `${v.accentHex}22`,
                            }}
                          >
                            <p
                              className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em]"
                              style={{ color: v.accentHex }}
                            >
                              {v.inPracticeTitle}
                            </p>
                            <ul className="m-0 flex list-none flex-col gap-2 p-0">
                              {v.inPractice.map((item) => (
                                <li
                                  key={item}
                                  className={`flex items-start gap-2 text-[13px] leading-relaxed text-[#2E4D3C] ${
                                    isAr ? "flex-row-reverse text-right" : ""
                                  }`}
                                >
                                  <span
                                    className="practice-dot"
                                    style={{ background: v.accentHex, opacity: 0.7 }}
                                  />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-col gap-3 rounded-2xl border border-[#E5D9C1]/80 bg-white p-4 sm:p-5">
                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8A6E3A]">
                              {v.whyTitle}
                            </p>
                            <p className="flex-1 text-[13px] italic leading-relaxed text-[#2E4D3C]">
                              {v.whyText}
                            </p>
                            <div
                              className="mt-auto h-[3px] w-10 rounded-sm opacity-55"
                              style={{ background: v.accentHex }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </RevealSection>
              );
            })}
          </div>
        </section>

        {/* ── DIFFERENTIATORS ── */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <RevealSection>
            <div
              className="relative overflow-hidden rounded-3xl border border-[#B8860B]/30 px-6 py-10 shadow-[0_18px_48px_rgba(10,28,22,.26)] sm:px-10 sm:py-12 md:px-12"
              style={{
                background: "linear-gradient(150deg, #173428 0%, #1E4438 60%, #1A3C32 100%)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute end-6 top-6 grid grid-cols-6 gap-1 opacity-40"
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <span
                    key={i}
                    className="h-2.5 w-2.5 rounded-sm bg-[#B8860B]"
                    style={{
                      opacity: [0.5, 0.2, 0.7, 0.1, 0.4, 0.9][i % 6],
                      animation: `pixelPulse ${2 + (i % 4) * 0.2}s ease-in-out ${i * 0.1}s infinite`,
                    }}
                  />
                ))}
              </div>

              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#D6B46A]">
                {isAr ? "ما الذي يميزنا" : "What Makes Us Different"}
              </p>

              <h2 className="serif mb-8 max-w-2xl text-[clamp(1.4rem,3vw,2.25rem)] font-bold leading-snug text-[#F5EEE1]">
                {isAr ? (
                  <>
                    لَسْنَا الْأَكْبَرَ حَجْمًا.
                    <br />
                    وَهَذَا فِي الْحَقِيقَةِ مَصْدَرُ قُوَّتِنَا.
                  </>
                ) : (
                  <>
                    We&apos;re not the biggest.
                    <br />
                    That&apos;s actually our strength.
                  </>
                )}
              </h2>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {pageDifferentiators.map((d) => (
                  <div
                    key={d.text}
                    className="diff-card flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <span className="mt-0.5 shrink-0 text-sm text-[#D6B46A]">{d.icon}</span>
                    <p
                      className={`m-0 text-[13px] leading-relaxed text-[#C2D8CE] ${
                        isAr ? "text-right" : "text-left"
                      }`}
                    >
                      {d.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </section>

      </div>
    </div>
  );
}