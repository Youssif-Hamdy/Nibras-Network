import type { Locale } from "@/lib/i18n/types";

export type HowStep = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  emphasis?: string;
  cta?: { href: string; label: string }[];
  /** Step 4 only */
  paymentLines?: { icon: string; label: string }[];
  launchLine?: string;
  paragraphsAfterPayment?: string[];
};

export type HowItWorksCopy = {
  kicker: string;
  title: string;
  subtitle: string;
  steps: HowStep[];
  choosePayment: string;
  contactTitle: string;
  whatsappLabel: string;
  whatsappNote: string;
  emailLabel: string;
  emailNote: string;
  finalTitle: string;
  finalCta: string;
};

const en: HowItWorksCopy = {
  kicker: "Your journey",
  title: "🚀 HOW IT WORKS",
  subtitle: "*Transform Your Life in 4 Simple Steps*",
  choosePayment: "Choose how you'll pay:",
  steps: [
    {
      title: "1️⃣ Pick Your Path",
      paragraphs: ["Choose the perfect learning package for you:   — Private, Group, or Family"],
    },
    {
      title: "2️⃣ Tell Us Your Story",
      paragraphs: ["Share your dreams with us:", "We'll match you with the perfect teacher."],
      bullets: ["Your goals, level, schedule and timezone."],
      cta: [{ href: "/book-trial", label: "Complete Profile" }],
    },
    {
      title: "3️⃣ Experience Nibras FREE",
      paragraphs: ["Get a taste of excellence at ZERO COST:"],
      bullets: [
        "Meet your dedicated teacher",
        "Discover your true potential",
        "Receive personalized guidance",
        "No strings attached",
      ],
      emphasis: "We'll reach out within 24 hours to confirm!",
      cta: [{ href: "/book-trial", label: "Claim Your Free Trial" }],
    },
    {
      title: "4️⃣ Start Your Transformation",
      paragraphs: ["Ready? Let's go!"],
      paymentLines: [
        { icon: "💳", label: "Visa/Mastercard" },
        { icon: "🌐", label: "PayPal" },
        { icon: "🏦", label: "Bank Transfer" },
      ],
      launchLine: "🔥 LAUNCH SPECIAL: 30% OFF First 3 Months!",
      paragraphsAfterPayment: ["Your classes start IMMEDIATELY after payment."],
      cta: [{ href: "/pricing", label: "Begin Your Journey ✅" }],
    },
  ],
  contactTitle: "📱 We're Here For You",
  whatsappLabel: "WhatsApp:",
  whatsappNote: "Fastest response - Usually within 1 hour",
  emailLabel: "Email:",
  emailNote: "Available 24/7",
  finalTitle: "🎁 Don't Wait—Your Success Story Starts NOW",
  finalCta: "Book Your Free Trial 🌟",
};

const ar: HowItWorksCopy = {
  kicker: "رحلتك معنا",
  title: "🚀 كيف نعمل",
  subtitle: "*حوّل حياتك في 4 خطوات بسيطة*",
  choosePayment: "اختر طريقة الدفع:",
  steps: [
    {
      title: "1️⃣ اختر مسارك",
      paragraphs: ["اختر باقة التعلّم الأنسب لك:   — خاص، مجموعة، أو عائلة"],
    },
    {
      title: "2️⃣ احكِ لنا قصتك",
      paragraphs: ["شاركنا أحلامك:", "سنوافيك بأنسب معلم لمستواك وجدولك."],
      bullets: ["أهدافك، مستواك، جدولك، ومنطقتك الزمنية."],
      cta: [{ href: "/book-trial", label: "أكمل ملفك" }],
    },
    {
      title: "3️⃣ جرّب نبراس مجاناً",
      paragraphs: ["تعرّف على التميّز دون أي تكلفة:"],
      bullets: [
        "التقِ بمعلّمك المخصّص",
        "اكتشف إمكاناتك الحقيقية",
        "احصل على توجيه شخصي",
        "دون أي التزام",
      ],
      emphasis: "سنتواصل معك خلال 24 ساعة للتأكيد!",
      cta: [{ href: "/book-trial", label: "احصل على تجربتك المجانية" }],
    },
    {
      title: "4️⃣ ابدأ التحوّل",
      paragraphs: ["جاهز؟ لننطلق!"],
      paymentLines: [
        { icon: "💳", label: "فيزا / ماستركارد" },
        { icon: "🌐", label: "باي بال" },
        { icon: "🏦", label: "تحويل بنكي" },
      ],
      launchLine: "🔥 عرض الإطلاق: خصم 30% على أوّل 3 أشهر!",
      paragraphsAfterPayment: ["تبدأ حصصك مباشرة بعد إتمام الدفع."],
      cta: [{ href: "/pricing", label: "ابدأ رحلتك ✅" }],
    },
  ],
  contactTitle: "📱 نحن معك",
  whatsappLabel: "واتساب:",
  whatsappNote: "أسرع رد — غالباً خلال ساعة",
  emailLabel: "البريد:",
  emailNote: "متاح على مدار الساعة",
  finalTitle: "🎁 لا تنتظر — قصة نجاحك تبدأ الآن",
  finalCta: "احجز تجربتك المجانية 🌟",
};

export function getHowItWorksCopy(locale: Locale): HowItWorksCopy {
  return locale === "ar" ? ar : en;
}
