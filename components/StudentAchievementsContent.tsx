"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Globe, GraduationCap, Star, BookOpen, Brain, CheckCircle2,
  Users, Calendar, Clock, RefreshCw, TrendingUp, Heart, Award,
  Shield, Compass, Mic, Lock, Bookmark, MessageCircle, ArrowRight,
  X, Zap, Target, BarChart2, Trophy, Scroll, Home, BookMarked,
  
} from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";

/* ─── Hooks ─────────────────────────────────────────────────────────── */
function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold, rootMargin: "0px 0px -40px 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useCountUp(target: number, duration = 1600, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0; const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step; if (start >= target) { setCount(target); clearInterval(timer); } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

function SectionHeading({ en, ar, isAr, sub, subAr }: { en: string; ar: string; isAr: boolean; sub?: string; subAr?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`text-center mb-10 md:mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <h2 className="font-serif text-[clamp(22px,4vw,40px)] font-normal text-[#1A1A14] leading-[1.25] mb-3">{isAr ? ar : en}</h2>
      {(sub || subAr) && <p className="text-[14px] sm:text-[15px] text-[#6F6F5C] max-w-2xl mx-auto leading-relaxed">{isAr ? subAr : sub}</p>}
      <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-[#D4A017] to-[#B8860B]" />
    </div>
  );
}

/* ─── SECTION 1: HERO ─────────────────────────────────────────────── */
function HeroSection({ isAr }: { isAr: boolean }) {
  return (
    <section className="relative w-full pt-[72px] md:pt-[80px] overflow-hidden bg-[#1A1A14]">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* Mobile image */}
        <img
          src="/images/student-mop.png"
          alt={isAr ? "إنجازات الطلاب" : "Student Achievements"}
          className="block sm:hidden w-full h-full object-cover object-center"
        />
        {/* Desktop image */}
        <img
          src="/images/student.png"
          alt={isAr ? "إنجازات الطلاب" : "Student Achievements"}
          className="hidden sm:block w-full h-full object-cover object-center"
        />
        {/* Multi-layer overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/75" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(212,160,23,0.12) 0%, transparent 70%)" }} />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-24 text-center" dir={isAr ? "rtl" : "ltr"}>
        <div className="inline-flex items-center gap-2 border border-[#F2D58C]/40 bg-black/30 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
          <Trophy size={14} className="text-[#F2D58C]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F2D58C]">
            {isAr ? "إنجازات الطلاب" : "Student Achievements"}
          </span>
        </div>

        <h1 className="font-serif text-[clamp(22px,6vw,54px)] font-normal text-white leading-[1.25] mb-3 drop-shadow-lg">
          {isAr ? (
            <>لا نكتفي بتعليم القرآن والعربية…<br /><em className="italic text-[#F2D58C]">نُحوِّل الحياة.</em></>
          ) : (
            <>We don&apos;t just teach Quran &amp; Arabic…<br /><em className="italic text-[#F2D58C]">We transform lives.</em></>
          )}
        </h1>

        <p className="text-[13px] sm:text-[15px] text-white/85 max-w-2xl mx-auto leading-relaxed mb-2 drop-shadow">
          {isAr
            ? "من أولى الحروف إلى التلاوة الواثقة، من «لا أفهم» إلى الوضوح في الإيمان — طلابنا لا يتعلمون فحسب."
            : "From first letters to confident recitation, from \"I don't understand\" to clarity in faith — our students don't just learn."}
        </p>
        <p className="text-[12.5px] sm:text-[13.5px] text-[#F2D58C] font-semibold max-w-xl mx-auto mb-5 drop-shadow">
          {isAr ? "يصبحون مسلمين واثقين ومنتظمين يستطيعون القراءة والفهم والعيش بما يدرسون." : "They become consistent, confident Muslims who can read, understand, and live what they study."}
        </p>

        <p className="hidden sm:block text-[13px] text-white/65 max-w-xl mx-auto leading-relaxed mb-6">
          {isAr
            ? "أكاديمية منظّمة عبر الإنترنت للأطفال والمراهقين والبالغين والمسلمين الجدد والعائلات — مصمّمة لغير الناطقين بالعربية حول العالم."
            : "A structured online academy for kids, teens, adults, new Muslims, and families — built for non-Arabic speakers worldwide."}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
          <Link href="/book-trial" className="inline-flex items-center justify-center gap-2 bg-[#F2D58C] hover:bg-[#F5DC96] text-[#1C3A2E] text-[13.5px] font-bold px-7 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg">
            {isAr ? "احجز حصة تجريبية مجانية" : "Book a Free Trial Class"}
            <ArrowRight size={15} />
          </Link>
          <Link href="/book-trial" className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white text-[13.5px] font-semibold px-7 py-3 rounded-xl border border-white/30 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5">
            {isAr ? "خذ اختبار تحديد المستوى" : "Take the Placement Test"}
          </Link>
        </div>

        <a href="#achievements" className="text-[12px] text-[#F2D58C]/70 hover:text-[#F2D58C] transition-colors underline underline-offset-2">
          {isAr ? "شاهد إنجازات الطلاب ↓" : "See Student Achievements ↓"}
        </a>

        {/* Trust strip */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10.5px] sm:text-[11px] text-white/60">
          {(isAr
            ? ["جداول مرنة", "تقارير تقدّم", "شهادات ومعالم", "مسارات عائلية"]
            : ["Flexible scheduling", "Progress reports", "Certificates", "Family paths"]
          ).map((item, i) => (
            <span key={i} className="flex items-center gap-1.5"><CheckCircle2 size={10} className="text-[#F2D58C]/70" />{item}</span>
          ))}
        </div>
      </div>

      {/* Fade to page bg */}
      <div className="h-10 bg-gradient-to-b from-black/70 to-[#F5F0E8]" />
    </section>
  );
}

/* ─── SECTION 2: STATS ────────────────────────────────────────────── */
const STATS = [
  { icon: <Globe size={22} />, num: 70, suffix: "+", labelEn: "Countries Served", labelAr: "دول نخدمها", color: "#254A3A" },
  { icon: <GraduationCap size={22} />, num: 5000, suffix: "+", labelEn: "Students Enrolled", labelAr: "طالب مسجّل", color: "#B8860B" },
  { icon: <Star size={22} />, num: 48, suffix: "/5", labelEn: "Avg. Satisfaction", labelAr: "رضا متوسط", color: "#254A3A", decimal: true },
  { icon: <BookOpen size={22} />, num: 250000, suffix: "+", labelEn: "Quran Pages Read", labelAr: "صفحة قرآن قُرئت", color: "#B8860B" },
  { icon: <Brain size={22} />, num: 18000, suffix: "+", labelEn: "Memorization Checkpoints", labelAr: "نقطة حفظ أُنجزت", color: "#254A3A" },
  { icon: <CheckCircle2 size={22} />, num: 120000, suffix: "+", labelEn: "Lessons Completed", labelAr: "حصة أُكملت", color: "#B8860B" },
  { icon: <Users size={22} />, num: 60, suffix: "+", labelEn: "Active Teachers", labelAr: "معلم نشط", color: "#254A3A" },
  { icon: <Calendar size={22} />, num: 500, suffix: "+", labelEn: "Weekly Live Classes", labelAr: "حصة مباشرة أسبوعية", color: "#B8860B" },
  { icon: <Clock size={22} />, num: 200000, suffix: "+", labelEn: "Hours Taught", labelAr: "ساعة تدريس", color: "#254A3A" },
  { icon: <RefreshCw size={22} />, num: 65, suffix: "%", labelEn: "Returning Students", labelAr: "من الطلاب يعودون", color: "#B8860B" },
  { icon: <TrendingUp size={22} />, num: 88, suffix: "%", labelEn: "Retention Rate (90d)", labelAr: "معدل استبقاء (90 يومًا)", color: "#254A3A" },
  { icon: <Heart size={22} />, num: 1200, suffix: "+", labelEn: "Family Enrollments", labelAr: "تسجيل عائلي", color: "#B8860B" },
];

function StatCard({ stat, started }: { stat: typeof STATS[0]; started: boolean }) {
  const count = useCountUp(stat.num, 1800, started);
  const display = stat.decimal
    ? (count / 10).toFixed(1)
    : count >= 1000 ? (count / 1000).toFixed(count >= 10000 ? 0 : 1) + "k" : count.toString();

  return (
    <div className="group bg-white rounded-2xl border border-[#E8E0D0] p-3 sm:p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:border-[#B49B44]/40">
      <span className="mb-2 sm:mb-3 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: stat.color }}>
        {stat.icon}
      </span>
      <span className="text-[clamp(18px,5vw,32px)] sm:text-[clamp(22px,4vw,32px)] font-bold text-[#1A1A14] leading-none">
        {display}{stat.suffix}
      </span>
    </div>
  );
}

function StatsSection({ isAr }: { isAr: boolean }) {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="bg-[#F5F0E8] py-10 md:py-20 px-4 sm:px-6" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          en="Measurable progress. Global community. Real outcomes."
          ar="تقدّم قابل للقياس. مجتمع عالمي. نتائج حقيقية."
          isAr={isAr}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {STATS.map((s, i) => (
            <div key={i} className={`transition-all duration-500`} style={{ transitionDelay: `${i * 50}ms`, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}>
              <StatCard stat={s} started={visible} />
              <p className="text-center text-[10px] sm:text-[11px] text-[#6F6F5C] mt-1 leading-snug px-0.5">{isAr ? s.labelAr : s.labelEn}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[11px] text-[#9A9282] mt-6 italic">
          {isAr ? "الأرقام مُحدَّثة ربع سنوياً من لوحات بيانات التعلّم الداخلية." : "Numbers updated quarterly from internal learning dashboards."}
        </p>
      </div>
    </section>
  );
}

/* ─── SECTION 3: ACHIEVEMENT CARDS ───────────────────────────────── */
const ACHIEVEMENTS = [
  { icon: <BookOpen size={18} />, en: "Read Quran Fluently", ar: "قراءة القرآن بطلاقة", descEn: "Build smooth reading with guided correction until reading feels natural.", descAr: "بناء القراءة السلسة مع التصحيح الموجَّه حتى تصبح طبيعية.", c: "#254A3A" },
  { icon: <Mic size={18} />, en: "Master Tajweed Rules", ar: "إتقان أحكام التجويد", descEn: "Learn rules step-by-step — then apply them in real recitation.", descAr: "تعلّم الأحكام خطوة بخطوة ثم تطبيقها في التلاوة الفعلية.", c: "#B8860B" },
  { icon: <MessageCircle size={18} />, en: "Correct Makharij", ar: "تصحيح المخارج", descEn: "Improve letter articulation with teacher modeling and targeted drills.", descAr: "تحسين نطق الحروف بالنمذجة والتدريبات الموجَّهة.", c: "#254A3A" },
  { icon: <Bookmark size={18} />, en: "Memorize Quran Consistently", ar: "حفظ القرآن بانتظام", descEn: "A realistic plan that fits your life — memorization becomes a habit.", descAr: "خطة واقعية تناسب حياتك — يصبح الحفظ عادة لا عبئًا.", c: "#B8860B" },
  { icon: <Brain size={18} />, en: "Understand Quran Meanings", ar: "فهم معاني القرآن", descEn: "Learn vocabulary, key themes, and practical meanings at your level.", descAr: "تعلّم المفردات والموضوعات والمعاني العملية المناسبة لمستواك.", c: "#254A3A" },
  { icon: <MessageCircle size={18} />, en: "Speak Arabic with Confidence", ar: "التحدث بالعربية بثقة", descEn: "Train listening and speaking using useful, everyday conversation structures.", descAr: "تدريب الاستماع والكلام باستخدام هياكل المحادثة اليومية.", c: "#B8860B" },
  { icon: <Lock size={18} />, en: "Read Arabic Independently", ar: "قراءة العربية باستقلالية", descEn: "Move from dependence to independence — read without guessing.", descAr: "الانتقال من الاعتماد إلى الاستقلالية — القراءة بدون تخمين.", c: "#254A3A" },
  { icon: <Shield size={18} />, en: "Study Authentic Aqeedah", ar: "دراسة العقيدة الصحيحة", descEn: "Learn correct belief foundations in a clear, non-confusing way.", descAr: "تعلّم أسس العقيدة الصحيحة بطريقة واضحة وغير مُربِكة.", c: "#B8860B" },
  { icon: <Compass size={18} />, en: "Understand Fiqh for Daily Life", ar: "فقه الحياة اليومية", descEn: "Practical learning for salah, fasting, purification, and more.", descAr: "تعلّم عملي للصلاة والصيام والطهارة وغيرها.", c: "#254A3A" },
  { icon: <Scroll size={18} />, en: "Study Hadith with Context", ar: "دراسة الحديث في سياقه", descEn: "Learn selected hadith with meaning, lessons, and application.", descAr: "تعلّم أحاديث مختارة مع المعنى والدروس والتطبيق.", c: "#B8860B" },
  { icon: <Heart size={18} />, en: "Seerah & Islamic Character", ar: "السيرة والأخلاق الإسلامية", descEn: "Seerah that builds love, clarity, and better choices — not just stories.", descAr: "سيرة تبني المحبة والوضوح وخيارات أفضل.", c: "#254A3A" },
  { icon: <Calendar size={18} />, en: "Build Daily Worship Habits", ar: "بناء عادات العبادة اليومية", descEn: "Structure that supports consistency: salah, adhkar, Quran, du'a.", descAr: "هيكل يدعم الانتظام: الصلاة والأذكار والقرآن والدعاء.", c: "#B8860B" },
  { icon: <Globe size={18} />, en: "Prepare for Hajj & Umrah", ar: "التحضير للحج والعمرة", descEn: "Learn the steps, meanings, and common mistakes — confidently.", descAr: "تعلّم الخطوات والمعاني والأخطاء الشائعة بثقة.", c: "#254A3A" },
  { icon: <Home size={18} />, en: "Teach Your Children at Home", ar: "تعليم أطفالك في البيت", descEn: "Parents learn how to help with the right tools and routines.", descAr: "يتعلّم الآباء كيفية المساعدة بالأدوات والروتين المناسبَين.", c: "#B8860B" },
  { icon: <GraduationCap size={18} />, en: "Become a Quran Teacher", ar: "أن تصبح معلم قرآن", descEn: "Structured progression toward teaching readiness for qualified students.", descAr: "مسار منظّم نحو الاستعداد للتدريس للطلاب المؤهلين.", c: "#254A3A" },
  { icon: <Award size={18} />, en: "Ijazah Preparation", ar: "التحضير للإجازة", descEn: "For eligible students with required prerequisites and instructor approval.", descAr: "للطلاب المستوفين للمتطلبات وبموافقة المعلم.", c: "#B8860B" },
];

function AchievementCards({ isAr }: { isAr: boolean }) {
  return (
    <section id="achievements" className="bg-[#F7F5F0] py-10 md:py-20 px-4 sm:px-6" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading en="Results you can feel in your worship—and measure in your progress." ar="نتائج تشعر بها في عبادتك — وتقيسها في تقدّمك." isAr={isAr} />
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {ACHIEVEMENTS.map((a, i) => {
            const { ref, visible } = useReveal();
            return (
              <div key={i} ref={ref} className={`group bg-white rounded-2xl border border-[#E8E0D0] p-3 sm:p-5 shadow-sm cursor-default transition-all duration-500 hover:-translate-y-1.5 hover:shadow-md hover:border-[#B49B44]/40 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
                <span className="mb-2 flex h-8 w-8 sm:mb-3 sm:h-10 sm:w-10 items-center justify-center rounded-xl text-white shadow-sm group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: a.c }}>
                  {a.icon}
                </span>
                <h3 className="text-[12px] sm:text-[14px] font-bold text-[#1A1A14] mb-1 leading-snug">{isAr ? a.ar : a.en}</h3>
                <p className="text-[12px] text-[#6F6F5C] leading-relaxed hidden sm:block">{isAr ? a.descAr : a.descEn}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 4: BEFORE vs AFTER ─────────────────────────────────── */
const BEFORE = [
  { en: "Struggles to recognize Arabic letters", ar: "يكافح في التعرف على الحروف العربية" },
  { en: "Pronunciation feels embarrassing or uncertain", ar: "النطق محرج أو غير مؤكد" },
  { en: "Reads slowly and guesses words", ar: "يقرأ ببطء ويخمّن الكلمات" },
  { en: "Doesn't know how to start Tajweed", ar: "لا يعرف كيف يبدأ التجويد" },
  { en: "Islamic knowledge feels scattered or confusing", ar: "المعرفة الإسلامية متشتتة أو مربِكة" },
  { en: "Kids lose motivation quickly", ar: "الأطفال يفقدون الدافعية بسرعة" },
  { en: "Parents want to help — but don't know how", ar: "الآباء يريدون المساعدة لكنهم لا يعرفون كيف" },
  { en: "Learning feels lonely (no structure, no support)", ar: "التعلّم يبدو وحيدًا (بلا هيكل ولا دعم)" },
];
const AFTER = [
  { en: "Reads Arabic smoothly and independently", ar: "يقرأ العربية بسلاسة واستقلالية" },
  { en: "Clear improvement in makharij and tajweed", ar: "تحسّن واضح في المخارج والتجويد" },
  { en: "Confidence in salah recitation grows weekly", ar: "الثقة في تلاوة الصلاة تنمو أسبوعيًا" },
  { en: "A structured plan replaces overwhelm", ar: "خطة منظّمة تحلّ محل الإحساس بالثقل" },
  { en: "Stronger foundation in essential Islamic studies", ar: "أساس أمتن في الدراسات الإسلامية الأساسية" },
  { en: "Kids stay motivated through milestones + badges", ar: "الأطفال يظلون متحمّسين بالمعالم والشارات" },
  { en: "Parents get guidance, updates, and a home routine", ar: "الآباء يحصلون على التوجيه والتحديثات وروتين منزلي" },
  { en: "Learning feels supported — teacher, plan, community", ar: "التعلّم مدعوم — معلم وخطة ومجتمع" },
];

function BeforeAfterSection({ isAr }: { isAr: boolean }) {
  const { ref, visible } = useReveal();
  return (
    <section className="bg-[#F5F0E8] py-10 md:py-20 px-4 sm:px-6" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading en="The moment learning becomes 'easy' is the moment it becomes consistent." ar="لحظة يصبح فيها التعلّم سهلاً هي لحظة يصبح منتظمًا." isAr={isAr} />
        <div ref={ref} className={`flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Before */}
          <div className="flex-1 bg-white border border-red-100 rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <span className="h-8 w-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center"><X size={15} className="text-red-400" /></span>
              <span className="text-[13px] font-bold text-red-700 uppercase tracking-wide">{isAr ? "قبل الانضمام" : "Before Joining"}</span>
            </div>
            <ul className="space-y-2.5">
              {BEFORE.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#5a5a5a]">
                  <X size={13} className="text-red-400 mt-0.5 shrink-0" />
                  {isAr ? b.ar : b.en}
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center text-[#B49B44]">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#B49B44] to-transparent" />
              <ArrowRight size={24} />
              <div className="w-px h-16 bg-gradient-to-b from-[#B49B44] via-[#B49B44] to-transparent" />
            </div>
          </div>

          {/* After */}
          <div className="flex-1 bg-white border border-green-100 rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <span className="h-8 w-8 rounded-full bg-green-50 border border-green-200 flex items-center justify-center"><CheckCircle2 size={15} className="text-[#254A3A]" /></span>
              <span className="text-[13px] font-bold text-[#254A3A] uppercase tracking-wide">{isAr ? "بعد الدراسة معنا" : "After Studying With Us"}</span>
            </div>
            <ul className="space-y-2.5">
              {AFTER.map((a, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#3D3D30]">
                  <CheckCircle2 size={13} className="text-[#254A3A] mt-0.5 shrink-0" />
                  {isAr ? a.ar : a.en}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: TIMELINE ─────────────────────────────────────────── */
const TIMELINE = [
  { numEn: "1", en: "Enrollment", ar: "التسجيل", descEn: "Choose your program: Quran, Arabic, Islamic Studies, or Family Track.", descAr: "اختر برنامجك: القرآن أو العربية أو الدراسات الإسلامية أو المسار العائلي." },
  { numEn: "2", en: "Assessment", ar: "التقييم", descEn: "Quick placement to identify your level and goals.", descAr: "تقييم سريع لتحديد مستواك وأهدافك." },
  { numEn: "3", en: "Personal Learning Plan", ar: "خطة التعلّم الشخصية", descEn: "A weekly structure: what to learn, how to practice, how to progress.", descAr: "هيكل أسبوعي: ماذا تتعلم، وكيف تتدرب، وكيف تتقدم." },
  { numEn: "4", en: "Weekly Live Classes", ar: "الحصص المباشرة الأسبوعية", descEn: "Structured lessons + correction + Q&A with a qualified teacher.", descAr: "دروس منظّمة + تصحيح + أسئلة مع معلم مؤهل." },
  { numEn: "5", en: "Homework & Practice", ar: "الواجبات والتدريب", descEn: "Short, consistent practice tasks designed for real life.", descAr: "مهام تدريب قصيرة ومنتظمة مصمّمة للحياة الحقيقية." },
  { numEn: "6", en: "Monthly Evaluations", ar: "التقييمات الشهرية", descEn: "Measurable checkpoints for reading, pronunciation, memorization.", descAr: "نقاط تفتيش قابلة للقياس في القراءة والنطق والحفظ." },
  { numEn: "7", en: "Achievement Badges", ar: "شارات الإنجاز", descEn: "Progress you can see and celebrate.", descAr: "تقدّم يمكنك رؤيته والاحتفال به." },
  { numEn: "8", en: "Certification", ar: "الشهادات", descEn: "Completion certificates and progress recognition at each stage.", descAr: "شهادات إتمام واعتراف بالتقدّم في كل مرحلة." },
  { numEn: "9", en: "Long-term Mastery", ar: "الإتقان على المدى البعيد", descEn: "Advanced tracks for deeper study or teaching readiness.", descAr: "مسارات متقدّمة للدراسة المعمّقة أو الاستعداد للتدريس." },
];

function TimelineSection({ isAr }: { isAr: boolean }) {
  const { ref, visible } = useReveal();
  return (
    <section className="bg-[#F7F5F0] py-10 md:py-20 px-4 sm:px-6" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading en="A clear path — so you always know what to do next." ar="مسار واضح — لتعرف دائمًا ما تفعله بعد ذلك." isAr={isAr} />
        <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Desktop horizontal */}
          <div className="hidden md:flex items-start gap-0 relative">
            <div className="absolute top-5 left-5 right-5 h-0.5 bg-gradient-to-r from-[#254A3A] via-[#B49B44] to-[#254A3A] z-0" />
            {TIMELINE.map((s, i) => (
              <div key={i} className="relative flex-1 flex flex-col items-center text-center z-10 px-2">
                <div className="h-10 w-10 rounded-full flex items-center justify-center text-white text-[13px] font-bold shadow-md mb-3" style={{ backgroundColor: i % 2 === 0 ? "#254A3A" : "#B8860B" }}>
                  {s.numEn}
                </div>
                <p className="text-[11.5px] font-bold text-[#1A1A14] mb-1">{isAr ? s.ar : s.en}</p>
                <p className="text-[10.5px] text-[#6F6F5C] leading-relaxed">{isAr ? s.descAr : s.descEn}</p>
              </div>
            ))}
          </div>
          {/* Mobile vertical */}
          <div className="md:hidden space-y-3">
            {TIMELINE.map((s, i) => (
              <div key={i} className={`flex gap-3 items-start ${isAr ? "flex-row-reverse" : ""}`}>
                <div className="h-8 w-8 shrink-0 rounded-full flex items-center justify-center text-white text-[12px] font-bold shadow-sm" style={{ backgroundColor: i % 2 === 0 ? "#254A3A" : "#B8860B" }}>
                  {s.numEn}
                </div>
                <div className="flex-1 bg-white rounded-xl border border-[#E8E0D0] p-3 shadow-sm">
                  <p className="text-[12.5px] font-bold text-[#1A1A14] mb-0.5">{isAr ? s.ar : s.en}</p>
                  <p className="text-[11.5px] text-[#6F6F5C] leading-relaxed">{isAr ? s.descAr : s.descEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 6: MILESTONES ───────────────────────────────────────── */
const MILESTONES = [
  { en: "First Arabic Letters", ar: "أولى الحروف العربية" },
  { en: "Joining Letters (Connected Forms)", ar: "وصل الحروف" },
  { en: "First Words Read Independently", ar: "أولى الكلمات المستقلة" },
  { en: "Complete Noorani Qaida", ar: "إتمام القاعدة النورانية" },
  { en: "First Surah Memorized", ar: "أول سورة محفوظة" },
  { en: "First Juz Completed", ar: "أول جزء مكتمل" },
  { en: "Makharij Precision Badge", ar: "شارة دقة المخارج" },
  { en: "Tajweed Rules Applied", ar: "تطبيق أحكام التجويد" },
  { en: "Memorization Consistency (30 days)", ar: "انتظام الحفظ (30 يومًا)" },
  { en: "First Arabic Conversation", ar: "أول محادثة عربية" },
  { en: "Beginner → Intermediate Graduation", ar: "التخرج: مبتدئ → متوسط" },
  { en: "Intermediate → Advanced Graduation", ar: "التخرج: متوسط → متقدم" },
  { en: "Ijazah Preparation Track", ar: "مسار التحضير للإجازة" },
  { en: "Teacher Certification Track", ar: "مسار شهادة التدريس" },
];

function MilestonesSection({ isAr }: { isAr: boolean }) {
  const { ref, visible } = useReveal();
  return (
    <section className="bg-[#F5F0E8] py-10 md:py-20 px-4 sm:px-6" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading en="Small wins that create big transformations." ar="انتصارات صغيرة تصنع تحولات كبيرة." isAr={isAr} />
        <div ref={ref} className={`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {MILESTONES.map((m, i) => (
            <div key={i} className="group flex items-center gap-2 sm:gap-3 bg-white rounded-xl border border-[#E8E0D0] px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm hover:border-[#B49B44]/40 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5" style={{ transitionDelay: `${i * 30}ms` }}>
              <span className="shrink-0 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full text-white text-[10px] sm:text-[11px] font-bold shadow-sm" style={{ backgroundColor: i % 2 === 0 ? "#254A3A" : "#B8860B" }}>
                {i + 1}
              </span>
              <span className="text-[11px] sm:text-[12.5px] font-medium text-[#1A1A14] leading-snug flex-1">{isAr ? m.ar : m.en}</span>
              <Trophy size={11} className="ms-auto text-[#B49B44] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 7: TESTIMONIALS ────────────────────────────────────── */
const TESTIMONIALS = [
  { init: "A", gradient: "from-[#254A3A] to-[#3d7a5e]", name: "Amina", loc: "USA", age: 9, role: "Kids", course: "Quran Reading + Tajweed", achievement: "Finished Noorani Qaida", quote: "She used to avoid reading because she was scared to make mistakes. Now she corrects herself — and smiles when she gets it right." },
  { init: "Y", gradient: "from-[#B8860B] to-[#D4A017]", name: "Yusuf", loc: "UK", age: 15, role: "Teens", course: "Tajweed + Memorization", achievement: "Built steady memorization routine", quote: "The teacher broke everything into small targets. The feedback was kind but serious. Now he leads parts of prayer at home." },
  { init: "S", gradient: "from-[#254A3A] to-[#3d7a5e]", name: "Sara", loc: "Canada", age: 34, role: "Adults", course: "Arabic for Understanding", achievement: "Can follow Quran vocabulary", quote: "Now when I hear recitation, I catch words and meanings. It feels like my relationship with the Quran finally became personal." },
  { init: "D", gradient: "from-[#7c3aed] to-[#a855f7]", name: "Daniel", loc: "Germany", age: 28, role: "New Muslims", course: "New Muslim Foundations", achievement: "Learned essentials clearly", quote: "Everything online felt overwhelming. Here it was structured. No judgment. I finally felt calm instead of confused." },
  { init: "F", gradient: "from-[#B8860B] to-[#D4A017]", name: "Fatima", loc: "UAE", age: 41, role: "Professionals", course: "Flexible Quran Reading Track", achievement: "Reads more fluently with busy schedule", quote: "I thought my work life would make it impossible. 15 minutes daily actually worked because it was the right 15 minutes." },
  { init: "O", gradient: "from-[#0369a1] to-[#0ea5e9]", name: "Omar", loc: "Malaysia", age: 20, role: "University", course: "Arabic Speaking", achievement: "First real Arabic conversation", quote: "The speaking practice was structured and repeated in a good way. I stopped translating everything in my head. It became natural." },
  { init: "H", gradient: "from-[#254A3A] to-[#3d7a5e]", name: "Hassan Family", loc: "Australia", age: null, role: "Families", course: "Family Quran & Islamic Studies", achievement: "Consistent home routine", quote: "Before, everyone was doing something different. Now we have one plan. Learning Islam is part of our family culture." },
];

function TestimonialsSection({ isAr }: { isAr: boolean }) {
  const { ref, visible } = useReveal();
  return (
    <section className="bg-[#F7F5F0] py-10 md:py-20 px-4 sm:px-6" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading en="Stories that sound like your life — because they were." ar="قصص تشبه حياتك — لأنها كانت كذلك." isAr={isAr} />
        <div ref={ref} className={`flex gap-3 overflow-x-auto pb-3 sm:pb-0 sm:grid sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:overflow-x-visible snap-x snap-mandatory transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="group bg-white rounded-2xl border border-[#E8E0D0] p-4 sm:p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:border-[#B49B44]/40 flex flex-col shrink-0 w-[80vw] sm:w-auto snap-start">
              <div className="flex items-center gap-3 mb-4">
                <div className={`h-11 w-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-base shadow-sm`}>{t.init}</div>
                <div>
                  <p className="text-[13px] font-bold text-[#1A1A14]">{t.name} — {t.loc}{t.age ? `, Age ${t.age}` : ""}</p>
                  <p className="text-[11px] text-[#B8860B] font-semibold">{t.role} • {t.course}</p>
                </div>
              </div>
              <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-[#B8860B] fill-[#B8860B]" />)}</div>
              <p className="text-[11px] font-semibold text-[#254A3A] mb-2">✓ {t.achievement}</p>
              <p className="text-[12.5px] text-[#5a6b62] leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 8: WHY RESULTS HAPPEN ──────────────────────────────── */
const REASONS = [
  { icon: <Target size={18} />, en: "Personalized Learning", ar: "التعلّم الشخصي", descEn: "Students stop repeating the wrong level.", descAr: "يتوقف الطلاب عن تكرار المستوى الخاطئ.", c: "#254A3A" },
  { icon: <Calendar size={18} />, en: "Flexible Scheduling", ar: "الجدول المرن", descEn: "Consistency survives real-life obligations.", descAr: "الانتظام يصمد أمام التزامات الحياة.", c: "#B8860B" },
  { icon: <BookMarked size={18} />, en: "Professional Curriculum", ar: "منهج احترافي", descEn: "No random YouTube learning — clear, structured sequence.", descAr: "لا تعلّم عشوائي — تسلسل واضح ومنظّم.", c: "#254A3A" },
  { icon: <BarChart2 size={18} />, en: "Continuous Assessments", ar: "تقييمات مستمرة", descEn: "Mistakes are caught early, not after months.", descAr: "الأخطاء تُكشف مبكرًا وليس بعد أشهر.", c: "#B8860B" },
  { icon: <Heart size={18} />, en: "Dedicated Teachers", ar: "معلمون متفانون", descEn: "Correction + encouragement = confidence.", descAr: "التصحيح + التشجيع = الثقة.", c: "#254A3A" },
  { icon: <Zap size={18} />, en: "Interactive Classes", ar: "حصص تفاعلية", descEn: "Students practice, not just listen.", descAr: "الطلاب يتدرّبون، لا يستمعون فحسب.", c: "#B8860B" },
  { icon: <CheckCircle2 size={18} />, en: "Homework Support", ar: "دعم الواجبات", descEn: "Small daily practice compounds fast.", descAr: "التدريب اليومي الصغير يتراكم بسرعة.", c: "#254A3A" },
  { icon: <TrendingUp size={18} />, en: "Progress Tracking", ar: "متابعة التقدّم", descEn: "Motivation rises when effort becomes visible.", descAr: "الدافعية ترتفع عندما يصبح الجهد مرئيًا.", c: "#B8860B" },
  { icon: <Home size={18} />, en: "Parent Involvement", ar: "مشاركة الآباء", descEn: "The home becomes the 'second classroom'.", descAr: "المنزل يصبح «الفصل الثاني».", c: "#254A3A" },
  { icon: <Shield size={18} />, en: "Quality Assurance", ar: "ضمان الجودة", descEn: "Consistent standards across all teachers and classes.", descAr: "معايير ثابتة عبر جميع المعلمين والحصص.", c: "#B8860B" },
];

function WhyResultsSection({ isAr }: { isAr: boolean }) {
  const { ref, visible } = useReveal();
  return (
    <section className="bg-[#F5F0E8] py-10 md:py-20 px-4 sm:px-6" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading en="Transformation isn't luck. It's a system." ar="التحوّل ليس حظًا. إنه منظومة." isAr={isAr} />
        <div ref={ref} className={`grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {REASONS.map((r, i) => (
            <div key={i} className="group flex items-start gap-3 bg-white rounded-xl border border-[#E8E0D0] px-4 py-3.5 shadow-sm hover:shadow-md hover:border-[#B49B44]/40 transition-all duration-200">
              <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-sm group-hover:scale-105 transition-transform" style={{ backgroundColor: r.c }}>
                {r.icon}
              </span>
              <div>
                <p className="text-[13px] font-bold text-[#1A1A14]">{isAr ? r.ar : r.en}</p>
                <p className="text-[12px] text-[#6F6F5C]">{isAr ? r.descAr : r.descEn}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[14px] font-semibold text-[#254A3A] mt-8 italic">
          &ldquo;{isAr ? "عندما يلتقي الهيكل بالإخلاص، يصبح التقدّم حتميًا." : "When structure meets sincerity, progress becomes inevitable."}&rdquo;
        </p>
      </div>
    </section>
  );
}

/* ─── SECTION 9: FINAL CTA ────────────────────────────────────────── */
const CTA_BENEFITS = [
  { en: "Read Arabic independently — with confidence", ar: "قراءة العربية باستقلالية وثقة" },
  { en: "Improve pronunciation with kind, expert correction", ar: "تحسين النطق بتصحيح لطيف ومتخصص" },
  { en: "Build a consistent worship routine that lasts", ar: "بناء روتين عبادة منتظم يدوم" },
  { en: "Learn Islam clearly, correctly, and step-by-step", ar: "تعلّم الإسلام بوضوح وصحة وخطوة بخطوة" },
  { en: "Track progress with milestones, badges, and certificates", ar: "متابعة التقدّم بالمعالم والشارات والشهادات" },
  { en: "Give your family a shared path — not scattered efforts", ar: "منح عائلتك مسارًا مشتركًا لا جهودًا متفرّقة" },
];

function FinalCTA({ isAr }: { isAr: boolean }) {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className={`relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`} style={{ background: "linear-gradient(135deg, #1C3A2E 0%, #254A3A 50%, #1C3A2E 100%)" }} dir={isAr ? "rtl" : "ltr"}>
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,160,23,0.15) 0%, transparent 70%)" }} />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-[clamp(24px,5vw,46px)] font-normal text-white leading-[1.25] mb-3">
          {isAr ? (
            <>ابدأ الرحلة التي تغيّر تلاوتك — <em className="italic text-[#F2D58C]">وحياتك.</em></>
          ) : (
            <>Start the journey that changes your recitation — <em className="italic text-[#F2D58C]">and your life.</em></>
          )}
        </h2>
        <p className="text-[13.5px] text-white/70 max-w-xl mx-auto leading-relaxed mb-8">
          {isAr ? "سواء كنت تبدأ من الصفر أو عدت بعد سنوات أو ترشد طفلك — هذه لحظتك لبناء علاقة مدى الحياة مع القرآن." : "Whether you're beginning from zero, returning after years, or guiding your child — this is your moment."}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 max-w-xl mx-auto text-start px-2 sm:px-0">
          {CTA_BENEFITS.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-[12.5px] text-white/80">
              <CheckCircle2 size={13} className="text-[#F2D58C] mt-0.5 shrink-0" />
              {isAr ? b.ar : b.en}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <Link href="/book-trial" className="inline-flex items-center justify-center gap-2 bg-[#F2D58C] hover:bg-[#F5DC96] text-[#1C3A2E] text-[13.5px] font-bold px-7 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg">
            {isAr ? "احجز حصة تجريبية مجانية" : "Book a Free Trial Class"} <ArrowRight size={15} />
          </Link>
          <Link href="/book-trial" className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white text-[13.5px] font-semibold px-7 py-3 rounded-xl border border-white/25 transition-all duration-200 hover:-translate-y-0.5">
            {isAr ? "خذ اختبار تحديد المستوى" : "Take the Placement Test"}
          </Link>
        </div>
        <p className="text-[11.5px] text-white/45">
          {isAr ? "بدون ضغط. توجيه واضح. ستعرف تمامًا أين تبدأ." : "No pressure. Clear guidance. You'll know exactly where to start."}
        </p>
      </div>
    </section>
  );
}

/* ─── MAIN ────────────────────────────────────────────────────────── */
export default function StudentAchievementsContent() {
  const { locale } = useI18n();
  const isAr = locale === "ar";

  return (
    <div className="flex flex-col">
      <HeroSection isAr={isAr} />
      <StatsSection isAr={isAr} />
      <AchievementCards isAr={isAr} />
      <BeforeAfterSection isAr={isAr} />
      <TimelineSection isAr={isAr} />
      <MilestonesSection isAr={isAr} />
      <TestimonialsSection isAr={isAr} />
      <WhyResultsSection isAr={isAr} />
      <FinalCTA isAr={isAr} />
    </div>
  );
}
