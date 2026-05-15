/** Single long-form guide split into sections; each maps to `/images/{imageIndex}.jpeg`. */
import type { Locale } from "@/lib/i18n/types";

export const PARENT_GUIDE_META = {
  title:
    "Your Complete Guide to Teaching Your Children Quran, Arabic & Islamic Studies in the West – With Nibras Network",
  description:
    "Looking for the best online platform for Quran memorization, Arabic language, and Islamic studies for your child in Europe, America, or Australia? Discover the most common questions parents ask and see how Nibras Network can help. Book your free trial today!",
} as const;

export type SectionIconKey =
  | "quran"
  | "arabic"
  | "islamic"
  | "progress"
  | "schedule"
  | "sisters"
  | "tajweed"
  | "play"
  | "trust"
  | "family";

export type GuideSection = {
  id: string;
  imageIndex: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  icon: SectionIconKey;
  title: string;
  body: string;
};

export const PARENT_GUIDE_SECTIONS: GuideSection[] = [
  {
    id: "quran-memorization-west",
    imageIndex: 1,
    icon: "quran",
    title:
      "How Can I Ensure My Child Memorizes the Quran Easily While Living in a Non-Muslim Country?",
    body: `Living without a strong Islamic environment or nearby mosques is a huge challenge. At Nibras Network, we offer a "Quran Hafiz" program that brings the classroom to your home. Our certified Azhari teachers, licensed in Ijazah, use spaced repetition, digital progress boards, and a warm virtual halaqa atmosphere. Your child remains safe at home while feeling the spirit of the Muslim community. Our live sessions blend discipline with enjoyment, turning the memorization task from a burden into an exciting journey.`,
  },
  {
    id: "arabic-zero-to-fluent",
    imageIndex: 2,
    icon: "arabic",
    title:
      "How Can My Child Learn Arabic Fluently If They Don’t Speak It at All?",
    body: `Do not worry. Our curriculum at Nibras Network is specially designed for non-native speakers. We use a "full immersion" approach from day one through illustrated stories, interactive games, and animated videos to naturally build all four skills: listening, speaking, reading, and writing. We take them from "zero Arabic" to reading words like "Caroline" and beyond within just a few months. All of this is supervised by bilingual tutors who speak English fluently, ensuring seamless communication with parents throughout the learning process.`,
  },
  {
    id: "islamic-studies-english",
    imageIndex: 3,
    icon: "islamic",
    title:
      "I Want My Child to Study Islamic Studies (Fiqh, Seerah, Aqeedah) in English. Is Your Curriculum Suitable and Internationally Recognized?",
    body: `Absolutely. We at Nibras Network are proud of our "Integrated Islamic Studies" package for children and teens, delivered in impeccable English with trustworthy creed-based content that blends spiritual purification and rulings in a way that suits a Western child. Our curriculum follows international standards, addressing identity questions like "Why do we pray?" and "How do I answer my school friends' questions about Islam?" Delivered by Azhar graduates and Western academics, the knowledge becomes an unshakeable foundation.`,
  },
  {
    id: "track-progress-reports",
    imageIndex: 4,
    icon: "progress",
    title:
      "How Can I Track My Child’s Progress in the Virtual Classroom? Are There Regular Reports?",
    body: `Transparency in tracking is essential. At Nibras Network, our user-friendly platform provides you with weekly performance reports and monthly assessments. We send parents instant notifications and test results via email, along with short teacher videos explaining strengths and areas for improvement. We also have a motivational "Stars of the Week" corner to encourage healthy competition. This makes you a true partner in the educational journey, even if you are occupied with work and life’s demands.`,
  },
  {
    id: "flexible-timezones",
    imageIndex: 5,
    icon: "schedule",
    title:
      "Our Schedule Is Very Tight; Do You Offer Flexible Lessons That Fit Europe, the US, and Australia Time Zones?",
    body: `This is one of the biggest pain points we have solved. At Nibras Network, you will find the "Open Schedule" system that lets you select the class time that suits your family, whether morning or evening in London, New York, or Los Angeles. Never worry about school hours or weekend activities again. Just pick the convenient time and we will secure a specialized private tutor for your child, even during the tightest windows after Isha prayer. Flexibility is our hallmark in the world of online Quran and Arabic education.`,
  },
  {
    id: "female-teachers-sisters",
    imageIndex: 6,
    icon: "sisters",
    title:
      "My Daughter Needs a Female Quran Teacher for Privacy Reasons. Are Your Female Tutors Qualified and Is the Environment Secure?",
    body: `Yes, the educational safety of Muslim women is our priority. At Nibras Network, we have set up a dedicated department run by a complete female staff of Hafizat who are licensed in Qira’at, specialists in Islamic education, and Arabic language instructors. In the "Nibras Sisters" classes, we guarantee full adherence to hijab and safe audio-visual protocols inside a closed virtual platform, so your daughter can enjoy learning with a female Muslim role model who nurtures character before academic material.`,
  },
  {
    id: "tajweed-clinic",
    imageIndex: 7,
    icon: "tajweed",
    title:
      "I’ve Heard About “Tajweed.” My Child Reads Quran, but I Don’t Know If Their Pronunciation Is Correct. How Can I Fix This Without Any Expertise?",
    body: `Tajweed is the art of correct pronunciation and the backbone of Quranic recitation. Here is where Nibras Network steps in, offering a private "Tajweed Clinic." The child sits with a specialist teacher who diagnoses articulation point and characteristic mistakes using an interactive piano whiteboard and sound-analysis tools. You will be amazed as your child corrects difficult letters (like ḍād, ẓā’, qāf) in a matter of weeks. We turn Tajweed into an exciting adventure rather than a boring theory lesson, so they recite the Quran exactly as it was revealed.`,
  },
  {
    id: "gamified-motivation",
    imageIndex: 8,
    icon: "play",
    title:
      "What Guarantee Is There That My Child Won’t Get Bored with Online Learning and Will Stay Motivated?",
    body: `Boredom is the enemy of digital education. At Nibras Network, we have designed a "Learn and Play" experience (Gamified Learning). During the class, the student earns points, badges, and goes on virtual tours every time they complete a Surah or pass a level. Our legendary "Treasure of Knowledge" system motivates children to collect digital gems and exchange them for real stories and physical rewards delivered to their home! This transforms waiting time into passion, so your child will remind you about the "Nibras" lesson before you remind them.`,
  },
  {
    id: "choose-academy-quality",
    imageIndex: 9,
    icon: "trust",
    title:
      "How Do I Choose the Right Academy for Teaching Quran and Arabic and Avoid Scams or Poor Quality?",
    body: `This is the most important question. Look for four things: certified Azhari teachers, honest video testimonials from past students, a progressive accredited curriculum, and 24-hour technical support. That is exactly what we offer openly at Nibras Network. We share success stories through clips from parents and the Ijazah certificates in Qira’at of our teachers. Most importantly, we provide the free trial lesson with zero commitment so you can judge for yourself and watch your child interact without any risk. Don’t gamble with your child’s religious future – try the best.`,
  },
  {
    id: "family-plan-siblings",
    imageIndex: 10,
    icon: "family",
    title:
      "I Have Three Children at Different Levels. Can You Provide a Family Plan and Synchronized Sessions?",
    body: `We understand the pressure on mothers and fathers. That is why Nibras Network created the "Golden Family Package." We quickly conduct a placement test for each child, then design a personalized roadmap, with the option to merge them into weekly interactive group workshops (like Prophetic biography or Quran competitions) to strengthen sibling bonds. You’ll enjoy significant family discounts and a unified schedule that spares you the chaos of scattered timings. Your entire family can experience an Islamic awakening under one umbrella, at a very carefully considered price.`,
  },
];

/** Arabic copy — same `id` / `imageIndex` / `icon` as English for stable assets and anchors. */
export const PARENT_GUIDE_META_AR: { title: string; description: string } = {
  title:
    "دليلك الشامل لتعليم أطفالك القرآن والعربية والدراسات الإسلامية في الغرب — مع شبكة نبراس",
  description:
    "هل تبحث عن أفضل منصّة أونلاين لحفظ القرآن وتعلّم العربية والدراسات الإسلامية لطفلك في أوروبا أو أمريكا أو أستراليا؟ إليك أكثر الأسئلة شيوعاً لدى الأهل وكيف تساعدكم شبكة نبراس. احجز تجربتك المجانية اليوم.",
};

export const PARENT_GUIDE_SECTIONS_AR: GuideSection[] = [
  {
    id: "quran-memorization-west",
    imageIndex: 1,
    icon: "quran",
    title: "كيف أضمن أن يحفظ طفلي القرآن بسهولة مع أننا نعيش في بلد غير مسلم؟",
    body:
      "غياب بيئة إسلامية قوية أو مسجد قريب يمثّل تحدّياً كبيراً. في شبكة نبراس نقدّم برنامج «حفّاظ القرآن» الذي يضع الصفّ في منزلك. معلمون أزهريّون معتمدون، يحملون إجازة في القراءات، يستخدمون التكرار المتباعد ولوحات تقدّم رقمية وأجواء حلقة افتراضية دافئة. يبقى طفلك آمناً في البيت مع إحساسه بروح الجماعة المسلمة. الجلسات المباشرة تمزج بين الانضباط والمتعة، فتحوّل الحفظ من «واجب ثقيل» إلى رحلة يتطلّع إليها الطفل.",
  },
  {
    id: "arabic-zero-to-fluent",
    imageIndex: 2,
    icon: "arabic",
    title: "كيف يتعلّم طفلي العربية بطلاقة وهو لا يتحدّثها أساساً؟",
    body:
      "لا تقلقوا. منهجنا في شبكة نبراس مُهيأ خصيصاً لغير الناطقين بالعربية. نستخدم أسلوب الإدماج الكامل من اليوم الأول عبر قصص مصوّرة، وألعاب تفاعلية، ومقاطع مرئية، لبناء المهارات الأربع: الاستماع والتحدّث والقراءة والكتابة. ننتقل بالمتعلّم من «صفر عربي» إلى قراءة كلمات بسيطة ثم تقدّم أسرع خلال شهور قليلة. يشرف على ذلك معلّمون ثنائيو اللغة يتكلّمون الإنجليزية بطلاقة، فيسهّل ذلك تواصلكم كأهل طوال الرحلة.",
  },
  {
    id: "islamic-studies-english",
    imageIndex: 3,
    icon: "islamic",
    title:
      "أريد أن يدرس طفلي الدراسات الإسلامية (الفقه والسيرة والعقيدة) بالإنجليزية. هل منهجكم مناسب ومعترف به دولياً؟",
    body:
      "بكل ثقة. نفتخر في شبكة نبراس بحزمة «الدراسات الإسلامية المتكاملة» للأطفال والمراهقين، تُقدَّم بالإنجليزية بلغة رصينة، بمحتوى عقائدي موثوق يمزج بين تهذيب النفس والأحكام بما يناسب الطفل في المجتمعات الغربية. يتّبع المنهج معايير دولية، ويجيب عن أسئلة الهوية مثل: لماذا نصلّي؟ وكيف أردّ على أسئلة زملائي في المدرسة عن الإسلام؟ يقدّمه خريجو الأزهر وأكاديميّون من ذوي الخبرة الغربية، فيصبح العلم أساساً متيناً وصعب الاهتزاز.",
  },
  {
    id: "track-progress-reports",
    imageIndex: 4,
    icon: "progress",
    title: "كيف أتابع تقدّم طفلي في الصفّ الافتراضي؟ وهل توجد تقارير منتظمة؟",
    body:
      "الشفافية في المتابعة أمر أساسي. منصّتنا السهلة تزوّدكم بتقارير أسبوعية عن الأداء وتقييمات شهرية. نرسل للأهل إشعارات فورية ونتائج اختبارات عبر البريد الإلكتروني، مع مقاطع قصيرة من المعلّم يشرح نقاط القوة ومجال التحسين. لدينا أيضاً ركن «نجوم الأسبوع» لتحفيز منافسة صحية. هكذا تصبحون شريكاً حقيقياً في المسيرة التعليمية حتّى مع ضغط العمل والالتزامات اليومية.",
  },
  {
    id: "flexible-timezones",
    imageIndex: 5,
    icon: "schedule",
    title:
      "جدولنا مزدحم جداً؛ هل لديكم حصص مرنة تناسب التوقيت في أوروبا وأمريكا وأستراليا؟",
    body:
      "هذا من أكبر ما أوْجعَ الأهل وقد عالجناه في شبكة نبراس. ستجدون نظام «الجدول المفتوح» الذي يمكّنكم من اختيار وقت الحصة المناسب لعائلتكم، صباحاً أو مساءً، سواء في لندن أو نيويورك أو لوس أنجلوس أو مدن أخرى. لا حاجة للقلق على أوقات المدرسة أو النهايات الأسبوعية: اختاروا الوقت المناسب ونوفر لطفلكم معلّماً خاصاً متخصّصاً حتّى في أضيق الفرص بعد صلاة العشاء. المرونة طابعنا في عالم تعلّم القرآن والعربية عن بُعد.",
  },
  {
    id: "female-teachers-sisters",
    imageIndex: 6,
    icon: "sisters",
    title:
      "ابنتي تحتاج معلّمة للقرآن لأسباب خصوصية. هل معلّماتكن مؤهّلات والبيئة آمنة؟",
    body:
      "نعم، سلامة التعليم للمرأة المسلمة أولوية لدينا. أنشأنا في شبكة نبراس قسماً متخصّصاً بإدارة نسائية كاملة من الحافظات اللاتي يحملن إجازة في القراءات، ومتخصّصات في التربية الإسلامية واللغة العربية. في حصص «نبراس للأخوات» نضمن الالتزام بالحجاب وبروتوكولات سمعية وبصرية آمنة داخل منصّة افتراضية مغلقة، لتتعلّم ابنتكم مع قدوة أنثوية مسلمة يغذّي السلوك النبيل المادة الدراسية نفسها.",
  },
  {
    id: "tajweed-clinic",
    imageIndex: 7,
    icon: "tajweed",
    title:
      "سمعت عن «التجويد»؛ طفلي يقرأ القرآن لكن لا أدري هل مخارج الحروف صحيحة. كيف نصحّح ذلك دون خبرة لديّ؟",
    body:
      "التجويد فنّ النطق الصحيح ولُبّ التلاوة القرآنية. هنا يدخل دور شبكة نبراس مع «عيادة التجويد» الخاصة: يجلس الطفل مع معلّم متخصّص يشخّص مخارج الحروف وأخطاء الأداء باستخدام لوح تفاعلي وأدوات تحليل صوتي. سترون كيف يصحّح الحروف الصعبة خلال أسابيع قليلة. نحوّل التجويد إلى مغامرة مشوّقة لا درساً نظريّاً مملّاً، لتلاوة القرآن كما أُنزل.",
  },
  {
    id: "gamified-motivation",
    imageIndex: 8,
    icon: "play",
    title: "ما الضمان على أن طفلي لا يملّ من التعلّم عن بُعد ويبقى متحفّزاً؟",
    body:
      "الملل عدوّ التعليم الرقمي. لذلك صمّمنا في شبكة نبراس تجربة «تعلّم ولعب» بتعليم مدمّج بالألعاب: الطالب خلال الحصة يكسب نقاطاً وشاراتاً ويخوض جولات افتراضية عند إتمام سورة أو اجتياز مستوى. نظامنا «كنز المعرفة» يحفّز الأطفال على جمع جواهر رقمية واستبدالها بقصص حقيقية ومكافآت مادية ترسل للبيت! فيتحوّل وقت الانتظار إلى شغف، حتى يذكّرك طفلك بحصة نبراس قبل أن تذكّرَه أنت.",
  },
  {
    id: "choose-academy-quality",
    imageIndex: 9,
    icon: "trust",
    title:
      "كيف أختار أكاديمية مناسبة لتعليم القرآن والعربية وأتجنّب الاحتيال أو الضعف في الجودة؟",
    body:
      "هذا السؤال أهمّ ما يكون. ابحثوا عن أربعة أمور: معلّمون أزهريّون معتمدون، شهادات فيديو صادقة من عوائل سابقة، منهج متدرّج معترف به، ودعم فني على مدار الساعة. هذا ما نقدّمه في شبكة نبراس بكل شفافية: قصص نجاح من الأهل ومقاطع وإجازات قراءات معلّمينا. الأهم: تجربة مجانية دون أي التزام، لتحكموا أنفسكم وتروا تفاعل طفلكم بلا مخاطرة. لا تراهنوا على مستقبل طفلكم الديني — جرّبوا الأفضل.",
  },
  {
    id: "family-plan-siblings",
    imageIndex: 10,
    icon: "family",
    title: "عندي ثلاثة أطفال بمستويات مختلفة. هل يوجد باقة عائلية وحصص متزامنة؟",
    body:
      "ندرك ضغط الأمهات والآباء، ولذلك أنشأنا في شبكة نبراس «الباقة العائلية الذهبية»: نجري اختبار تحديد مستوى سريعاً لكل طفل، ثم نضع خارطة طريق مخصّصة، مع خيار دمجهم في ورش جماعية أسبوعية تفاعلية (مثل السيرة النبوية أو مسابقات قرآنية) لتقوية روابط الأخوة. تحصلون على خصومات عائلية مع جدول موحّد يجنّبكم فوضى الأوقات المتفرّقة. يمكن لعائلتكم أن تعيش نهضة إيمانية تحت مظلة واحدة وبسعر مدروس.",
  },
];

export function getParentGuideMeta(locale: Locale): { title: string; description: string } {
  return locale === "ar" ? PARENT_GUIDE_META_AR : { ...PARENT_GUIDE_META };
}

export function getParentGuideSections(locale: Locale): GuideSection[] {
  return locale === "ar" ? PARENT_GUIDE_SECTIONS_AR : PARENT_GUIDE_SECTIONS;
}
