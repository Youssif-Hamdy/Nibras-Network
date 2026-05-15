"use client";

import Image from "next/image";
import { useI18n } from "@/components/LocaleProvider";

type LocalizedText = {
  en: string;
  ar: string;
};

const missionQuote: LocalizedText = {
  en: '"To provide authentic, accessible Islamic education that helps non-Arabic speaking Muslims connect with the Quran, learn Arabic, and understand their faith properly — with patience, compassion, and honesty."',
  ar: '"تقديم تعليم إسلامي أصيل ومتاح يساعد المسلمين غير الناطقين بالعربية على الارتباط بالقرآن، وتعلّم العربية، وفهم دينهم بشكل صحيح — بصبر ورحمة وصدق."',
};

const missionPracticalTitle: LocalizedText = {
  en: "What this means practically:",
  ar: "ماذا يعني هذا عمليًا:",
};

const missionGroups = [
  {
    title: { en: "For Students:", ar: "للطلاب:" },
    image: "/images/mission2.jpg",
    items: [
      {
        en: "* Accessible Learning - Study from anywhere at times that fit your life",
        ar: "* تعلم متاح - ادرس من أي مكان وفي أوقات تناسب حياتك",
      },
      {
        en: "* Authentic Knowledge - Learn from properly qualified and vetted teachers",
        ar: "* علم أصيل - تعلّم على يد معلمين مؤهلين ومراجعين بعناية",
      },
      {
        en: "* Honest Communication - Realistic timelines, fair pricing, truthful progress reports",
        ar: "* تواصل صادق - جداول زمنية واقعية، أسعار عادلة، وتقارير تقدم صادقة",
      },
      {
        en: "* Personal Support - Individual attention and genuine care about your success",
        ar: "* دعم شخصي - اهتمام فردي وحرص حقيقي على نجاحك",
      },
    ],
  },
  {
    title: { en: "For Teachers:", ar: "للمعلمين:" },
    image: "/images/mission3.jpg",
    items: [
      {
        en: "* Proper Qualification - Demonstrated Islamic credentials and teaching experience required",
        ar: "* تأهيل مناسب - يشترط وجود مؤهلات شرعية مثبتة وخبرة تعليمية",
      },
      {
        en: "* Continuous Development - Regular training to improve teaching skills",
        ar: "* تطوير مستمر - تدريب دوري لتحسين مهارات التعليم",
      },
      {
        en: "* Fair Treatment - Reasonable workload, fair compensation, and respect",
        ar: "* معاملة عادلة - عبء عمل مناسب، مقابل عادل، واحترام",
      },
      {
        en: "* Supportive Environment - Freedom to teach with wisdom and compassion",
        ar: "* بيئة داعمة - مساحة للتدريس بالحكمة والرحمة",
      },
    ],
  },
  {
    title: { en: "For the Community:", ar: "للمجتمع:" },
    image: "/images/visson.jpg",
    items: [
      {
        en: "* Serving Reverts - Special attention and completely free initial support for new Muslims",
        ar: "* خدمة المسلمين الجدد - عناية خاصة ودعم أولي مجاني بالكامل",
      },
      {
        en: "* Supporting Families - Helping Muslim parents pass on their faith to children",
        ar: "* دعم العائلات - مساعدة الآباء المسلمين على نقل الدين للأبناء",
      },
      {
        en: "* Building Bridges - Connecting Muslims from different cultures through Quran and Arabic",
        ar: "* بناء الجسور - ربط المسلمين من ثقافات مختلفة عبر القرآن والعربية",
      },
      {
        en: "* Preserving Knowledge - Ensuring authentic scholarship reaches the next generation",
        ar: "* حفظ العلم - ضمان وصول العلم الأصيل إلى الجيل القادم",
      },
    ],
  },
];

const visionQuote: LocalizedText = {
  en: '"To be recognized as a trusted, sincere online academy where every student receives personal attention, authentic knowledge, and genuine care — growing not by chasing numbers, but by transforming lives one student at a time."',
  ar: '"أن نكون أكاديمية إلكترونية موثوقة وصادقة، يحصل فيها كل طالب على اهتمام شخصي، وعلم أصيل، ورعاية حقيقية — ننمو لا بمطاردة الأرقام، بل بتغيير حياة طالب بعد طالب."',
};

const visionHopeTitle: LocalizedText = {
  en: "What we hope to achieve:",
  ar: "ما نأمل تحقيقه:",
};

const visionItems: LocalizedText[] = [
  {
    en: "✅ Quality Education for Hundreds - Serve students deeply rather than thousands superficially",
    ar: "✅ تعليم عالي الجودة للمئات - نخدم الطلاب بعمق بدلًا من آلاف بشكل سطحي",
  },
  {
    en: "✅ Strong Reputation for Integrity - Be known for honesty and delivering on promises",
    ar: "✅ سمعة قوية في النزاهة - نُعرف بالصدق والوفاء بالوعود",
  },
  {
    en: "✅ Community of Lifelong Learners - Create lasting relationships beyond course completion",
    ar: "✅ مجتمع متعلمين مدى الحياة - نبني علاقات مستمرة تتجاوز نهاية الدورة",
  },
  {
    en: "✅ Support for Those in Need - Maintain scholarships ensuring financial difficulty never prevents learning",
    ar: "✅ دعم المحتاجين - نحافظ على المنح حتى لا تمنع الظروف المادية أي طالب من التعلم",
  },
  {
    en: "✅ Training the Next Generation - Develop more qualified teachers to serve the Ummah",
    ar: "✅ إعداد الجيل القادم - نطوّر مزيدًا من المعلمين المؤهلين لخدمة الأمة",
  },
];

const closingLine: LocalizedText = {
  en: "This is our sincere intention. We ask Allah to make it purely for His sake and grant us success.",
  ar: "هذه نيتنا الصادقة. نسأل الله أن يجعلها خالصة لوجهه الكريم وأن يوفقنا.",
};

function MissionVisionIcon({ type }: { type: "mission" | "vision" | "spark" }) {
  const base = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5",
    "aria-hidden": true,
  };

  if (type === "mission") {
    return (
      <svg {...base}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === "vision") {
    return (
      <svg {...base}>
        <path d="M2.5 12S6.5 5.5 12 5.5 21.5 12 21.5 12 17.5 18.5 12 18.5 2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }

  return (
    <svg {...base}>
      <path d="M12 2.5 14.5 9.5 21.5 12 14.5 14.5 12 21.5 9.5 14.5 2.5 12 9.5 9.5 12 2.5Z" />
    </svg>
  );
}

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-5">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C79B3B]/60" />
      <span className="text-[#C79B3B] text-lg select-none">✦</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C79B3B]/60" />
    </div>
  );
}

export default function AboutMissionPageContent() {
  const { locale } = useI18n();
  const isAr = locale === "ar";
  const dir = isAr ? "rtl" : "ltr";

  return (
    <div className="bg-[#F7F5F0]" dir={dir}>
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0%   { opacity: .55; }
          50%  { opacity: 1; }
          100% { opacity: .55; }
        }
        .fade-1 { opacity: 0; animation: fadeUp 700ms ease 0.10s forwards; }
        .fade-2 { opacity: 0; animation: fadeUp 700ms ease 0.26s forwards; }
        .fade-3 { opacity: 0; animation: fadeUp 700ms ease 0.42s forwards; }
        .fade-4 { opacity: 0; animation: fadeUp 700ms ease 0.58s forwards; }
        .float-soft { animation: float 3.2s ease-in-out infinite; }
        .shimmer    { animation: shimmer 3s ease-in-out infinite; }

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

        .stat-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          padding: 10px 20px;
          border-radius: 14px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.14);
          backdrop-filter: blur(6px);
        }
        .stat-chip b { font-size: 22px; font-weight: 700; color: #F5E6BF; line-height: 1; }
        .stat-chip span { font-size: 11px; color: #A8C9BC; letter-spacing: .04em; }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        .scroll-cue { animation: bounce 1.8s ease-in-out infinite; }
      `}</style>

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative isolate overflow-hidden">

        {/* ✅ التعديل هنا: object-[center_20%] + blur-[1.5px] + scale-110 */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/Mission.jpg"
            alt={isAr ? "رسالتنا ورؤيتنا" : "Mission and Vision"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_20%] blur-[1.5px] scale-110"
          />
        </div>

        {/* overlays */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0D2920]/30 via-[#0D2920]/20 to-[#0D2920]/75" />
        <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(13,41,32,.55)_100%)]" />

        {/* Content */}
        <div className="relative flex min-h-[100svh] flex-col items-center justify-between px-6 pb-10 pt-28 text-center">

          <div className="fade-1 self-center">
            <span className="hero-pill shimmer">
              <MissionVisionIcon type="spark" />
            </span>
          </div>

          <div className="mx-auto max-w-3xl flex flex-col items-center gap-5 py-12">
           

            <h1 className="fade-2 font-serif text-5xl font-bold leading-[1.15] text-[#F7F1E3] sm:text-6xl md:text-7xl drop-shadow-sm">
              {isAr ? "رسالتنا" : "Our Mission"}
              <br />
              <span className="text-[#E3C98F]">{isAr ? "ورؤيتنا" : "& Vision"}</span>
            </h1>

            <GoldDivider />

            <p className="fade-3 max-w-xl text-[15px] leading-8 text-[#CFE1D9]">
              {isAr
                ? "بسيطة، صادقة، ومتمركزة حول خدمة الله بخدمتكم"
                : "Simple, sincere, and centered on serving Allah by serving you"}
            </p>

            <div className="fade-4 mt-2 flex flex-col items-center gap-2 text-[#A8C9BC]">
              <span className="text-xs tracking-widest uppercase">
                {isAr ? "اكتشف المزيد" : "Discover more"}
              </span>
              <svg
                className="scroll-cue h-5 w-5"
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>

          <div className="fade-4 flex flex-wrap justify-center gap-3 self-end">
            {[
              { value: isAr ? "١٠٠٪" : "100%", label: isAr ? "معلمون مؤهلون" : "Qualified teachers" },
              { value: isAr ? "٢٤/٧" : "24/7", label: isAr ? "تعلّم مرن"      : "Flexible learning"  },
              { value: isAr ? "مجاني" : "Free", label: isAr ? "للمسلمين الجدد" : "For new Muslims"    },
            ].map((s) => (
              <div key={s.value} className="stat-chip">
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ BODY ══════════════ */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">

        {/* MISSION */}
        <section className="mb-12 rounded-3xl border border-[#E5D9C1] bg-white p-7 shadow-[0_8px_30px_rgba(28,58,46,.08)] md:p-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C79B3B]/35 bg-[#FFF8EA] px-4 py-2 text-[11px] font-semibold uppercase tracking-[.13em] text-[#A2761D]">
            <MissionVisionIcon type="mission" />
            {isAr ? "رسالتنا" : "OUR MISSION"}
          </div>
          <blockquote className="mb-6 border-s-4 border-[#C79B3B] bg-[#FBF8F2] p-5 text-[15px] leading-8 text-[#2C4B3D]">
            {isAr ? missionQuote.ar : missionQuote.en}
          </blockquote>
          <p className="mb-6 text-sm font-semibold text-[#8F6A1A]">
            {isAr ? missionPracticalTitle.ar : missionPracticalTitle.en}
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {missionGroups.map((group) => (
              <article
                key={group.title.en}
                className="overflow-hidden rounded-2xl border border-[#E5D9C1] bg-[#FFFEFC] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(28,58,46,.11)]"
              >
                <div className="relative h-36 w-full">
                  <Image
                    src={group.image}
                    alt={isAr ? group.title.ar : group.title.en}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17342C]/65 to-transparent" />
                  <h3
                    className={`float-soft absolute bottom-3 ${
                      isAr ? "right-3" : "left-3"
                    } rounded-full bg-[#F5E6BF] px-3 py-1 text-xs font-bold text-[#17342C]`}
                  >
                    {isAr ? group.title.ar : group.title.en}
                  </h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-[13px] leading-7 text-[#355647]">
                    {group.items.map((item) => (
                      <li key={item.en}>{isAr ? item.ar : item.en}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* VISION */}
        <section className="rounded-3xl border border-[#E5D9C1] bg-white p-7 shadow-[0_8px_30px_rgba(28,58,46,.08)] md:p-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C79B3B]/35 bg-[#FFF8EA] px-4 py-2 text-[11px] font-semibold uppercase tracking-[.13em] text-[#A2761D]">
            <MissionVisionIcon type="vision" />
            {isAr ? "رؤيتنا" : "OUR VISION"}
          </div>

          <div className="mb-6 grid gap-5 md:grid-cols-[1.2fr_.8fr]">
            <blockquote className="border-s-4 border-[#C79B3B] bg-[#FBF8F2] p-5 text-[15px] leading-8 text-[#2C4B3D]">
              {isAr ? visionQuote.ar : visionQuote.en}
            </blockquote>
            <div className="relative min-h-[180px] overflow-hidden rounded-2xl">
              <Image
                src="/images/visson2.jpg"
                alt={isAr ? "الرؤية" : "Vision"}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="mb-5 text-sm font-semibold text-[#8F6A1A]">
            {isAr ? visionHopeTitle.ar : visionHopeTitle.en}
          </p>
          <ul className="space-y-2 text-[14px] leading-8 text-[#355647]">
            {visionItems.map((item) => (
              <li key={item.en}>{isAr ? item.ar : item.en}</li>
            ))}
          </ul>
          <p className="mt-8 rounded-2xl bg-[#1F463B] px-6 py-5 text-[14px] leading-7 text-[#E3DCC8]">
            {isAr ? closingLine.ar : closingLine.en}
          </p>
        </section>
      </div>
    </div>
  );
}