import type { Locale } from "@/lib/i18n/types";

export type ContactMailtoLabels = {
  fullName: string;
  email: string;
  whatsapp: string;
  message: string;
  yourMessage: string;
};

export type ContactPageCopy = {
  heroTitle: string;
  heroSubtitle: string;
  intro1: string;
  intro2: string;
  intro3: string;
  directTitle: string;
  directKicker: string;
  directCtaWa: string;
  directCtaEmail: string;
  directCtaSite: string;
  waLabel: string;
  emailLabel: string;
  websiteLabel: string;
  socialTitle: string;
  socialIntro: string;
  socialFacebook: string;
  socialInstagram: string;
  socialYoutube: string;
  socialTiktok: string;
  formSectionTitle: string;
  formIntroLine1: string;
  formIntroLine2: string;
  formHeading: string;
  labelFullName: string;
  labelEmail: string;
  labelWhatsapp: string;
  labelMessageShort: string;
  labelMessageBody: string;
  agree: string;
  submit: string;
  validationFill: string;
  validationAgree: string;
  validationMessage: string;
  submitting: string;
  submitSuccess: string;
  submitError: string;
  nextTitle: string;
  next1: string;
  next2: string;
  next3: string;
  next4: string;
  nextFooter: string;
  ctaTitle: string;
  ctaLead: string;
  ctaButton: string;
  mailtoSubjectPrefix: string;
  mailtoFallbackInquiry: string;
  mailtoLabels: ContactMailtoLabels;
};

const en: ContactPageCopy = {
  heroTitle: "📩 CONTACT US",
  heroSubtitle: "We're Here to Help You Begin",
  intro1:
    "Whether you have a question about our programs, need guidance choosing the right course, or simply want to speak before booking your trial lesson — we're always happy to hear from you.",
  intro2:
    "At Nibras Network, communication is personal and direct. When you contact us, you're speaking with real people who genuinely care about your learning journey.",
  intro3: "We aim to respond as quickly as possible, usually within 24 hours.",
  directTitle: "📞 Direct Contact Information",
  directKicker: "Quick responses — typically within 24 hours",
  directCtaWa: "Open WhatsApp",
  directCtaEmail: "Send email",
  directCtaSite: "Visit website",
  waLabel: "WhatsApp:",
  emailLabel: "Email:",
  websiteLabel: "Website:",
  socialTitle: "🌍 Follow Us on Social Media",
  socialIntro: "Stay connected for updates, reminders, and educational content:",
  socialFacebook: "Facebook",
  socialInstagram: "Instagram",
  socialYoutube: "YouTube",
  socialTiktok: "Tiktok",
  formSectionTitle: "📝 Send Us a Message",
  formIntroLine1: "If you prefer, you can send us a message directly through the form below.",
  formIntroLine2: "Please fill in your details and we will get back to you shortly.",
  formHeading: "Contact Form",
  labelFullName: "Full Name:",
  labelEmail: "Email Address:",
  labelWhatsapp: "WhatsApp Number (with country code):",
  labelMessageShort: "Message :",
  labelMessageBody: "Your Message:",
  agree: "✅ I agree to be contacted by Nibras Network regarding my inquiry.",
  submit: "Submit",
  validationFill: "Please fill in all fields.",
  validationAgree: "Please agree to be contacted before submitting.",
  validationMessage: "Please enter a subject or message.",
  submitting: "Sending…",
  submitSuccess: "Thank you! Your message was sent. We will get back to you soon.",
  submitError: "Something went wrong. Please try again or reach us on WhatsApp.",
  nextTitle: "📌 What Happens Next?",
  next1: "We review your message carefully",
  next2: "We reply via email or WhatsApp",
  next3: "We guide you to the best suitable program",
  next4: "You can book a free trial if you're ready",
  nextFooter: "No pressure. No obligation.",
  ctaTitle: "🌟 Ready to Start Immediately?",
  ctaLead: "If you already feel confident about joining, you can:",
  ctaButton: "👉 Book Your Free Trial Lesson Now",
  mailtoSubjectPrefix: "Contact form",
  mailtoFallbackInquiry: "Inquiry",
  mailtoLabels: {
    fullName: "Full Name:",
    email: "Email:",
    whatsapp: "WhatsApp:",
    message: "Message:",
    yourMessage: "Your Message:",
  },
};

const ar: ContactPageCopy = {
  heroTitle: "📩 اتصل بنا",
  heroSubtitle: "نحن هنا لنساعدك على البدء",
  intro1:
    "سواء كان لديك سؤال عن برامجنا، أو تحتاج توجيهاً لاختيار المسار المناسب، أو ترغب فقط في التحدث قبل حجز حصتك التجريبية — يسعدنا دائماً أن نسمع منك.",
  intro2:
    "في شبكة نبراس، التواصل شخصي ومباشر. عندما تتواصل معنا، تتحدث إلى أناس حقيقيين يهتمون فعلاً برحلتك التعليمية.",
  intro3: "نسعى للرد بأسرع وقت ممكن، عادةً خلال 24 ساعة.",
  directTitle: "📞 بيانات التواصل المباشر",
  directKicker: "نرد بسرعة — غالباً خلال 24 ساعة",
  directCtaWa: "افتح واتساب",
  directCtaEmail: "إرسال بريد",
  directCtaSite: "زيارة الموقع",
  waLabel: "واتساب:",
  emailLabel: "البريد الإلكتروني:",
  websiteLabel: "الموقع:",
  socialTitle: "🌍 تابعنا على وسائل التواصل",
  socialIntro: "ابقَ على تواصل للتحديثات والتذكير والمحتوى التعليمي:",
  socialFacebook: "فيسبوك",
  socialInstagram: "إنستغرام",
  socialYoutube: "يوتيوب",
  socialTiktok: "تيك توك",
  formSectionTitle: "📝 أرسل لنا رسالة",
  formIntroLine1: "إذا فضّلت، يمكنك مراسلتنا مباشرة عبر النموذج أدناه.",
  formIntroLine2: "يرجى تعبئة بياناتك وسنعاود الاتصال بك قريباً.",
  formHeading: "نموذج التواصل",
  labelFullName: "الاسم الكامل:",
  labelEmail: "البريد الإلكتروني:",
  labelWhatsapp: "رقم الواتساب (مع رمز الدولة):",
  labelMessageShort: "الرسالة:",
  labelMessageBody: "رسالتك:",
  agree: "✅ أوافق على أن تتواصل معي شبكة نبراس بخصوص استفساري.",
  submit: "إرسال",
  validationFill: "يرجى تعبئة جميع الحقول.",
  validationAgree: "يرجى الموافقة على التواصل قبل الإرسال.",
  validationMessage: "يرجى إدخال موضوع أو نص الرسالة.",
  submitting: "جاري الإرسال…",
  submitSuccess: "شكراً لك! تم إرسال رسالتك وسنعاود الاتصال بك قريباً.",
  submitError: "حدث خطأ. يرجى المحاولة أو التواصل عبر واتساب.",
  nextTitle: "📌 ماذا بعد؟",
  next1: "نراجع رسالتك بعناية",
  next2: "نرد عبر البريد أو الواتساب",
  next3: "نوصيك بأنسب برنامج لك",
  next4: "يمكنك حجز تجربة مجانية إذا كنت مستعداً",
  nextFooter: "من دون ضغط. ومن دون أي التزام.",
  ctaTitle: "🌟 جاهز للبدء فوراً؟",
  ctaLead: "إذا كنت واثقاً من الانضمام، يمكنك:",
  ctaButton: "👉 احجز حصتك التجريبية المجانية الآن",
  mailtoSubjectPrefix: "نموذج تواصل",
  mailtoFallbackInquiry: "استفسار",
  mailtoLabels: {
    fullName: "الاسم الكامل:",
    email: "البريد:",
    whatsapp: "الواتساب:",
    message: "الرسالة:",
    yourMessage: "رسالتك:",
  },
};

export function getContactPage(locale: Locale): ContactPageCopy {
  return locale === "ar" ? ar : en;
}
