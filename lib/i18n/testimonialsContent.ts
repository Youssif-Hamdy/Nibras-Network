import type { Locale } from "@/lib/i18n/types";

export type ReviewItem = { title: string; quote: string; author: string };
export type FormalReview = {
  heading: string;
  quote: string;
  footerName: string;
  footerRole: string;
};

export type TestimonialsPageCopy = {
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroIntro: string;
  parentsTitle: string;
  adultsTitle: string;
  quickTitle: string;
  quickNote: string;
  quickInbox: string;
  shareTitle: string;
  shareBody: string;
  shareCta: string;
  formalTitle: string;
  formalSubtitle: string;
  starsAria: string;
  waBubbleLabel: string;
  quickWaTag: string;
  parentReviews: ReviewItem[];
  adultReviews: ReviewItem[];
  quickTexts: string[];
  formalReviews: FormalReview[];
};

const en: TestimonialsPageCopy = {
  heroBadge: "Reviews",
  heroTitle: "💬 What Our Students & Parents Say",
  heroSubtitle: "Real feedback from the people who matter most.",
  heroIntro:
    "We don't like to talk about ourselves too much. We prefer to let our students and their families share their honest experiences. Here is what they have to say:",
  parentsTitle: "👨‍👩‍👧 From Parents (About Kids & Pricing)",
  adultsTitle: "🧑‍🎓 From Adult Learners (About Support & Ease)",
  quickTitle: "⚡ Quick Texts & Messages We Received",
  quickNote: "(Real WhatsApp messages from our community)",
  quickInbox: "Community inbox",
  shareTitle: "🤝 Share Your Journey",
  shareBody:
    "Are you studying with us? We'd love to hear your honest feedback. It helps us improve and helps others find their way to learning the Quran.",
  shareCta: "Submit Your Review Here",
  formalTitle: "What Our Students & Families Say",
  formalSubtitle: "Real stories from real people — no exaggeration, just honest experiences.",
  starsAria: "5 stars",
  waBubbleLabel: "WhatsApp style message",
  quickWaTag: "WhatsApp",
  parentReviews: [
    {
      title: '"Finally, no more fighting to go to Quran class."',
      quote:
        "I used to struggle every weekend to get my kids to sit for their Quran lessons. Now, my 8-year-old actually logs into zoom by himself. The teacher is super patient with him, even when he loses focus. Also, having 3 kids learning can get very expensive, but the sibling discount they offered us made it really affordable for our family.",
      author: "— Fatima Z., Mother of 3 (Canada)",
    },
    {
      title: '"Great teachers and very flexible."',
      quote:
        "My work schedule is a mess, and sometimes I have to change my kids' lesson times at the last minute. The admin on WhatsApp is so understanding. They just reschedule it without making a big deal out of it. The teaching quality is amazing too, my daughter finally got her Makharij right!",
      author: "— Omar K., Father (UK)",
    },
    {
      title: '"They genuinely care."',
      quote:
        "You don't feel like you're dealing with a big company. It feels like family. If my son is sick and misses a class, they message to check on him. The teacher is very kind and corrects him gently without making him feel bad.",
      author: "— Aisha T., Mother (USA)",
    },
  ],
  adultReviews: [
    {
      title: '"Never too late to learn."',
      quote:
        "I started trying to fix my recitation at 45 years old. My memory isn't what it used to be, and I was so shy to read in front of a teacher. A friend told me to try Nibras Network, so I did. The teacher is incredibly respectful. We go at my own pace. I don't feel rushed at all.",
      author: "— Tariq M., Adult Student (Australia)",
    },
    {
      title: '"Perfect for beginners and Reverts."',
      quote:
        "I am a revert and I literally knew zero Arabic. I didn't even know the alphabet. I was so scared to sound silly. But my teacher is the sweetest person. She broke everything down so simply. I just finished reading my first short Surah yesterday and I actually cried. Thank you for the support.",
      author: "— Sarah J., New Muslim (USA)",
    },
    {
      title: '"Honest and straight to the point."',
      quote:
        "What I like is that they don't sell you fake dreams. They told me exactly how much effort I need to put in to memorize Juz Amma. The plan is very structured. The price is totally worth the value you get. Highly recommend.",
      author: "— Bilal H., University Student (Germany)",
    },
  ],
  quickTexts: [
    '"Just wanted to say jazakallah khair. Teacher Ahmed is amazing. Best class I\'ve had."',
    '"The new payment link works perfectly. Thanks for making the fees easy for us this month!"',
    '"Please tell teacher Maryam my daughter got full marks in her Islamic school test today! We are so happy."',
    '"I was worried about the online thing, but the screen sharing and the way the teacher explains makes it easier than real life tbh."',
  ],
  formalReviews: [
    {
      heading: "1. Sarah Thompson - Mother from USA (New Muslim)",
      quote:
        "I reverted 8 months ago and was so nervous about learning Quran. My teacher is incredibly patient and never makes me feel embarrassed when I make mistakes. The schedule is very flexible around my work. I can now read short Surahs confidently. This platform feels like a real family.",
      footerName: "Sarah Thompson, USA",
      footerRole: "Verified Student",
    },
    {
      heading: "2. Ahmed Khalil - Father from UK",
      quote:
        "My two kids (7 and 10) used to hate Quran lessons at the local mosque. Since joining Nibras, they actually look forward to their classes. The teacher explains everything clearly and makes it fun. The pricing is fair and the progress is real. Highly recommended for busy parents.",
      footerName: "Ahmed Khalil, United Kingdom",
      footerRole: "Parent",
    },
    {
      heading: "3. Fatima Al-Mansour - Adult Student from Canada",
      quote:
        "I'm 34 years old and work full time. I thought learning Quran would be too difficult at my age. The flexibility is amazing — I can reschedule easily when I'm busy. My teacher is very supportive and explains things simply. After 5 months, I can read Quran with Tajweed and understand many words. Worth every penny.",
      footerName: "Fatima Al-Mansour, Canada",
      footerRole: "Adult Student",
    },
    {
      heading: "4. Layla Hassan - Mother from Germany",
      quote:
        "As a mother of three, finding time for my own learning was hard. The teachers here are so understanding. They even helped me create a schedule that works with my children's school times. The quality of teaching is excellent and the prices are reasonable compared to private tutors. I feel supported every step.",
      footerName: "Layla Hassan, Germany",
      footerRole: "Mother & Student",
    },
    {
      heading: "5. Omar Farouk - Young Adult Student from Australia (Age 19)",
      quote:
        "I started from zero Arabic knowledge. The Noorani Qaida part was very well explained. My teacher is friendly and makes the lessons interesting. I like that I can learn at my own pace without pressure. After 4 months, I can read full pages from the Quran. Best decision I made this year.",
      footerName: "Omar Farouk, Australia",
      footerRole: "Young Adult Student",
    },
    {
      heading: "6. Mariam Abdullah - Mother from France",
      quote:
        "My daughter (9 years old) has autism and struggled with traditional classes. The teacher here is very patient and adapted the method to her needs. The support is excellent. We also started learning together as a family. The pricing with family discount made it affordable. We are very happy.",
      footerName: "Mariam Abdullah, France",
      footerRole: "Mother of Special Needs Child",
    },
    {
      heading: "7. Khalid Rahman - Father from Sweden",
      quote:
        "I was looking for quality without high prices. The teachers are professional and the lessons are well organized. My son has improved a lot in both recitation and understanding. The platform is easy to use and the customer support responds quickly. Very satisfied.",
      footerName: "Khalid Rahman, Sweden",
      footerRole: "Father",
    },
    {
      heading: "8. Aisha Nour - Adult Revert from Spain",
      quote:
        "As a new Muslim, I felt overwhelmed. The first lessons were completely free and the teacher was so kind. They explained everything slowly and answered all my questions patiently. I never felt judged. Now I can read Surah Al-Fatiha and some short Surahs correctly. Thank you for making this journey easier.",
      footerName: "Aisha Nour, Spain",
      footerRole: "New Muslim",
    },
  ],
};

const ar: TestimonialsPageCopy = {
  heroBadge: "المراجعات",
  heroTitle: "💬 ماذا يقول طلابنا وأولياء الأمور",
  heroSubtitle: "آراء حقيقية من أهم من يهمنا أمرهم.",
  heroIntro:
    "لا نحب أن نتحدث عن أنفسنا كثيراً. نفضّل أن يشارك طلابنا وعائلاتهم تجاربهم بصدق. إليكم ما يقولونه:",
  parentsTitle: "👨‍👩‍👧 من أولياء الأمور (عن الأطفال والأسعار)",
  adultsTitle: "🧑‍🎓 من المتعلمين البالغين (عن الدعم وسهولة التعلم)",
  quickTitle: "⚡ رسائل قصيرة وصلتنا",
  quickNote: "(رسائل واتساب حقيقية من مجتمعنا)",
  quickInbox: "صندوق المجتمع",
  shareTitle: "🤝 شاركنا رحلتك",
  shareBody:
    "هل تدرس معنا؟ نود سماع رأيك الصادق. يساعدنا ذلك على التحسين ويساعد الآخرين على اختيار طريقهم لتعلم القرآن.",
  shareCta: "أرسل مراجعتك من هنا",
  formalTitle: "ماذا يقول طلابنا وعائلاتنا",
  formalSubtitle: "قصص حقيقية من أناس حقيقيين — بلا مبالغة، فقط تجارب صادقة.",
  starsAria: "5 نجوم",
  waBubbleLabel: "رسالة بأسلوب واتساب",
  quickWaTag: "واتساب",
  parentReviews: [
    {
      title: "«أخيراً، لا مزيد من المشاحنات لحضور حصة القرآن»",
      quote:
        "كنت أعاني كل أسبوع لأجلس أطفالي على درس القرآن. اليوم ابني (8 سنوات) يفتح زوم بنفسه. المعلم صبور جداً معه حتى عندما يفقد التركيز. كذلك تعليم 3 أطفال مكلف، لكن خصم الأشقاء جعل الأمر ميسوراً لعائلتنا.",
      author: "— فاطمة ز.، أم لثلاثة (كندا)",
    },
    {
      title: "«معلمون رائعون ومرونة عالية»",
      quote:
        "جدول عملي فوضوي، وأحياناً أغيّر مواعيد أطفالي في اللحظة الأخيرة. الإدارة على الواتساب متفهمة جداً، يعيدون الجدولة دون تعقيد. جودة التعليم ممتازة أيضاً، ابنتي أخيراً ضبطت مخارج الحروف!",
      author: "— عمر ك.، أب (بريطانيا)",
    },
    {
      title: "«يهتمون بصدق»",
      quote:
        "لا تشعر أنك تتعامل مع شركة كبيرة، بل كأنك بين عائلة. إذا مرض ابني وتغيب عن الحصة، يرسلون للاطمئنان. المعلم لطيف ويصحح له بلطف دون أن يحرجه.",
      author: "— عائشة ت.، أم (الولايات المتحدة)",
    },
  ],
  adultReviews: [
    {
      title: "«ليس متأخراً أبداً على التعلم»",
      quote:
        "بدأت أصحح تلاوتي في سن 45. الذاكرة ليست كما كانت، وكنت أخجل أن أقرأ أمام المعلم. صديق نصحني بتجربة شبكة نبراس، ففعلت. المعلم محترم جداً، نمشي بوتيرتي ولا أشعر بأي استعجال.",
      author: "— طارق م.، طالب بالغ (أستراليا)",
    },
    {
      title: "«مناسب للمبتدئين والمهتدين»",
      quote:
        "أنا مهتد ولم أكن أعرف العربية أصلاً، حتى الحروف. كنت خائفة أن أبدو سخيفة. لكن معلمتي لطيفة جداً وبسّطت كل شيء. أمس أنهيت قراءة أول سورة قصيرة وبكيت من الفرح. شكراً على الدعم.",
      author: "— سارة ج.، مسلمة جديدة (الولايات المتحدة)",
    },
    {
      title: "«صريحون ومباشرون»",
      quote:
        "ما يعجبني أنهم لا يبيعونك أوهاماً. قالوا لي بوضوح كم الجهد المطلوب لحفظ جزء عم. الخطة منظمة جداً، والسعر يستحق القيمة التي تحصل عليها. أنصح بهم بشدة.",
      author: "— بلال ح.، طالب جامعي (ألمانيا)",
    },
  ],
  quickTexts: [
    "«أحب أقول جزاكم الله خيراً. الأستاذ أحمد رائع، أفضل حصة مرّت عليّ»",
    "«رابط الدفع الجديد يعمل تماماً. شكراً لأنكم سهّلتم علينا الرسوم هذا الشهر!»",
    "«من فضلكم قولوا للأستاذة مريم: ابنتي حصلت على الدرجة الكاملة في اختبار المدرسة الإسلامية اليوم! فرحانون جداً»",
    "«كنت قلقاً من التعليم عن بعد، لكن مشاركة الشاشة وأسلوب الشرح أسهل من الواقع أحياناً صراحة»",
  ],
  formalReviews: [
    {
      heading: "1. سارة طومسون — أم من الولايات المتحدة (مهتد)",
      quote:
        "أسلمت منذ 8 أشهر وكنت متوترة بشأن تعلم القرآن. معلمتي صبورة جداً ولا تجعلني أشعر بالإحراج عند الخطأ. الجدول مرن مع عملي، وأستطيع الآن قراءة سور قصيرة بثقة. المنصة تشعرني بعائلة حقيقية.",
      footerName: "سارة طومسون، الولايات المتحدة",
      footerRole: "طالبة موثّقة",
    },
    {
      heading: "2. أحمد خليل — أب من بريطانيا",
      quote:
        "طفلاي (7 و10) كانا يكرهان درس القرآن في المسجد. منذ الانضمام لنبراس صارا يتطلعان للحصص. المعلم يشرح بوضوح ويجعل الدرس ممتعاً. الأسعار مناسبة والتقدم حقيقي. أنصح به بشدة للآباء المشغولين.",
      footerName: "أحمد خليل، المملكة المتحدة",
      footerRole: "ولي أمر",
    },
    {
      heading: "3. فاطمة المنصور — طالبة بالغة من كندا",
      quote:
        "عمري 34 وأعمل بدوام كامل. ظننت أن تعلم القرآن صعب في سني. المرونة رائعة — أستطيع تأجيل الحصة بسهولة عند الانشغال. معلمي داعم ويشرح ببساطة. بعد 5 أشهر أقرأ القرآن بالتجويد وأفهم كثيراً من المفردات. يستحق كل قرش.",
      footerName: "فاطمة المنصور، كندا",
      footerRole: "طالبة بالغة",
    },
    {
      heading: "4. ليلى حسن — أم من ألمانيا",
      quote:
        "أم لثلاثة، وكان إيجاد وقت لتعلمي صعباً. المعلمون هنا متفهمون جداً، وساعدوني على جدولة تناسب مدارس أطفالي. جودة التعليم ممتازة والأسعار معقولة مقارنة بالدروس الخاصة. أشعر بالدعم في كل خطوة.",
      footerName: "ليلى حسن، ألمانيا",
      footerRole: "أم وطالبة",
    },
    {
      heading: "5. عمر فاروق — شاب (19) من أستراليا",
      quote:
        "بدأت من صفر في العربية. جزء القاعدة النورانية كان موضحاً جداً. معلمي ودود ويجعل الحصة ممتعة. أحب أن أتعلم بوتيرتي دون ضغط. بعد 4 أشهر أقرأ صفحات كاملة من المصحف. أفضل قرار هذا العام.",
      footerName: "عمر فاروق، أستراليا",
      footerRole: "طالب شاب",
    },
    {
      heading: "6. مريم عبد الله — أم من فرنسا",
      quote:
        "ابنتي (9 سنوات) لديها توحد ووجدت صعوبة في الصف التقليدي. المعلم هنا صبور جداً وكيّف الأسلوب لاحتياجاتها. الدعم ممتاز. بدأنا التعلم كعائلة أيضاً. التسعير مع خصم العائلة جعل الأمر ميسوراً. راضون جداً.",
      footerName: "مريم عبد الله، فرنسا",
      footerRole: "أم لطفلة ذات احتياجات خاصة",
    },
    {
      heading: "7. خالد رحمن — أب من السويد",
      quote:
        "كنت أبحث عن جودة دون أسعار مبالغ فيها. المعلمون محترفون والحصص منظمة. ابني تحسن كثيراً في التلاوة والفهم. المنصة سهلة والدعم يرد بسرعة. راضٍ جداً.",
      footerName: "خالد رحمن، السويد",
      footerRole: "أب",
    },
    {
      heading: "8. عائشة نور — مهتدة بالغة من إسبانيا",
      quote:
        "كمسلمة جديدة شعرت بالإرهاق. الدروس الأولى كانت مجانية والمعلم لطيف جداً. شرح كل شيء بهدوء وأجاب على أسئلتي بصبر. لم أشعر يوماً بالحكم عليّ. الآن أقرأ الفاتحة وبعض السور القصيرة بشكل صحيح. شكراً لتسهيل الرحلة.",
      footerName: "عائشة نور، إسبانيا",
      footerRole: "مهتد",
    },
  ],
};

export function getTestimonialsPage(locale: Locale): TestimonialsPageCopy {
  return locale === "ar" ? ar : en;
}
