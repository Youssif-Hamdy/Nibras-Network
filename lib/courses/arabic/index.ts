import type { Locale } from "@/lib/i18n/types";
import type { QuranCourse } from "@/lib/courses/quran/types";
import { arabicImg } from "./images";
import { ARABIC_COURSES_AR } from "./ar";

export const ARABIC_PROGRAM_COURSES_EN: QuranCourse[] = [
  {
    slug: "noor-al-bayan",
    title: "Noor Al-Bayan",
    tagline: "Build a Strong Arabic Reading Foundation - Step by Step",
    seoTitles: [
      "Noor Al-Bayan Online | Arabic Foundation",
      "Arabic Reading Foundation for Kids and Adults",
    ],
    definition:
      "Master Arabic letters, sounds, harakat, and reading flow before moving to full language learning.",
    teacher: {
      profile: [
        "Trained Arabic literacy instructors for non-native learners",
        "Live pronunciation correction and reading checkpoints",
        "Age-adapted pacing for kids, teens, and adults",
      ],
      whyQuote:
        "Noor Al-Bayan removes guess-reading and replaces it with structured, accurate reading habits.",
      whyLabel: "Teaching Focus",
    },
    philosophy: {
      quote:
        "Literacy first. Correct letter-sound mapping creates confidence for Quran recitation and Arabic studies.",
      beliefs: [
        "Phonics-based progression",
        "Short drills with frequent correction",
        "Consistency beats intensity",
      ],
    },
    curriculum: {
      phases: [
        { title: "Weeks 1-4", items: ["Letter recognition in all forms", "Sound drilling + articulation"] },
        { title: "Weeks 5-8", items: ["Harakat and sukun application", "Blending letters into words"] },
        { title: "Weeks 9-12", items: ["Short vocalized lines", "Fluency confidence checks"] },
      ],
      outcome: "Read short vocalized Arabic words and lines with confidence and accuracy.",
    },
    methods: [
      {
        title: "Live Guided Literacy",
        badge: "Foundation",
        flow: ["Teacher model", "Repeat-after-me", "Targeted correction", "Worksheet reinforcement"],
        whyTitle: "Why it works",
        whyPoints: ["Builds accurate reading from day one", "Prevents bad pronunciation habits"],
      },
    ],
    techniques: [
      { title: "Pronunciation checkpoints", points: ["Sound correction", "Makharij guidance", "Progress feedback"] },
      { title: "Visual letter mapping", points: ["Initial/medial/final forms", "Fast recognition drills"] },
    ],
    audience: {
      perfectFor: [
        "Kids beginning Arabic literacy",
        "Adults who cannot read Arabic yet",
        "Quran learners needing stronger letter accuracy",
        "Reverts and non-native beginners",
      ],
      prerequisites: ["None"],
    },
    progression: [
      "Noor Al-Bayan (Foundation) -> Arabic for Beginners (A1-A2)",
      "Then choose specialization: Quranic / Conversational / MSA",
    ],
    stories: [
      {
        name: "Foundation Milestone",
        quote: "Students stop guess-reading and begin reading with structure.",
        meta: ["Track: Foundation", "Result: Reading readiness for A1"],
      },
    ],
    faqs: [
      {
        question: "Is Noor Al-Bayan suitable for adults?",
        answer:
          "Yes. Many adults start with Noor Al-Bayan to build accurate letter recognition, pronunciation, and reading flow with age-appropriate pacing.",
      },
      {
        question: "How long until my child can read Arabic words?",
        answer:
          "Many children begin reading simple fully-vowelled words in the first weeks, then build fluency steadily with attendance and short daily practice.",
      },
      {
        question: "Do you teach pronunciation correction live?",
        answer:
          "Yes. Teachers correct pronunciation live using repeat-and-correct modeling and focused sound drills for difficult letters.",
      },
      {
        question: "What practice is needed between classes?",
        answer:
          "Short consistent practice works best: letter and word reading, sound repetition, and worksheet tasks for 10-15 minutes daily.",
      },
      {
        question: "Can this prepare for Quran recitation programs?",
        answer:
          "Yes. It builds letter and articulation accuracy, giving students a strong foundation before Quran-focused tracks.",
      },
    ],
    includes: [
      "Live online classes",
      "Downloadable practice pack",
      "Optional recorded review clips",
      "Foundation completion certificate + evaluation",
    ],
    offer: {
      lines: ["Recommended: 2 live classes/week", "Daily: 10-15 minutes guided practice"],
      cta: "Start Noor Al-Bayan",
      subcta: "Best start for new learners.",
    },
    images: [arabicImg("arbic language (1).jpeg"), arabicImg("arbic language (2).jpeg"), arabicImg("arbic language (3).jpeg")],
    bottomImage: arabicImg("arbic language (4).jpeg"),
    accent: "#0F7A6B",
  },
  {
    slug: "arabic-for-beginners",
    title: "Arabic for Beginners",
    tagline: "Start Arabic the Right Way - Reading, Writing, Listening and Speaking",
    seoTitles: ["Arabic for Beginners A1-A2 | Nibras Network"],
    definition: "A complete beginner pathway that builds real language ability without overwhelm.",
    teacher: {
      profile: ["Structured level-based instruction", "Balanced skills delivery", "Monthly progress tracking"],
      whyQuote: "The course balances speaking, grammar, reading, and writing in one clear pathway.",
      whyLabel: "Program Approach",
    },
    philosophy: {
      quote: "Balanced skills produce durable language confidence.",
      beliefs: ["Reading + writing + listening + speaking", "Functional grammar", "Practical vocabulary"],
    },
    curriculum: {
      phases: [
        { title: "Milestone 1 (Weeks 1-4)", items: ["Self-introduction", "Family and daily routine vocabulary"] },
        { title: "Milestone 2 (Weeks 5-8)", items: ["Questions and answers", "Basic verbs and descriptions"] },
        { title: "Milestone 3 (Weeks 9-12)", items: ["Short paragraphs", "Listening tasks"] },
        { title: "Milestone 4 (Weeks 13-16)", items: ["Integrated writing + speaking project"] },
      ],
      outcome: "Hold basic conversations and write short structured Arabic texts.",
    },
    methods: [
      {
        title: "Level-Based Beginner Pathway",
        badge: "A1 -> A2",
        flow: ["Vocabulary build", "Sentence patterns", "Guided speaking", "Weekly practice"],
        whyTitle: "Why it works",
        whyPoints: ["Prevents random learning", "Creates measurable progression"],
      },
    ],
    techniques: [
      { title: "Dialogue practice", points: ["Guided speaking", "Confidence building prompts"] },
      { title: "Writing labs", points: ["Simple sentences", "Paragraph structure"] },
    ],
    audience: {
      perfectFor: [
        "Students who finished Noor Al-Bayan",
        "Learners who can read basic vocalized Arabic",
        "Parents seeking measurable beginner track",
      ],
      prerequisites: ["Basic Arabic reading recommended"],
    },
    progression: ["A1 -> A2", "Specialize in Quranic Arabic / Conversational Arabic / MSA"],
    stories: [
      {
        name: "Beginner Progress",
        quote: "Learners move from isolated words to short conversations in structured milestones.",
        meta: ["Track: A1-A2", "Assessment: Monthly report"],
      },
    ],
    faqs: [
      {
        question: "Do I need Noor Al-Bayan first?",
        answer:
          "Only if you cannot read Arabic letters confidently yet. If you can read simple vowelled Arabic, you can start directly after placement.",
      },
      {
        question: "Is this course more focused on speaking or grammar?",
        answer:
          "It is balanced: speaking practice is weekly, grammar is functional, and vocabulary is systematic for practical progress.",
      },
      {
        question: "Can kids and adults take the same program?",
        answer:
          "The pathway is similar, but classes are usually grouped by age for better pacing and classroom dynamics.",
      },
      {
        question: "How are levels measured?",
        answer:
          "By reading, writing, listening, and speaking checkpoints with short assessments and teacher observation.",
      },
      {
        question: "What if I miss a class?",
        answer:
          "You receive catch-up guidance with notes, targeted practice, and teacher direction based on your program policy.",
      },
    ],
    includes: ["Live online classes", "LMS quizzes", "Vocabulary sheets", "Level certificate + progress report"],
    offer: { lines: ["2-3 classes/week", "1 self-practice session/week"], cta: "Join Beginner Arabic" },
    images: [arabicImg("arbic language (5).jpeg"), arabicImg("arbic language (6).jpeg"), arabicImg("arbic language (7).jpeg")],
    bottomImage: arabicImg("arbic language (8).jpeg"),
    accent: "#2156A0",
  },
  {
    slug: "quranic-arabic",
    title: "Quranic Arabic",
    tagline: "Understand the Quran Directly - Vocabulary, Patterns, and Meaning",
    seoTitles: ["Quranic Arabic Course | Understand Quran Vocabulary and Grammar"],
    definition: "Learn Quranic vocabulary and essential grammar to reduce dependence on translation.",
    teacher: {
      profile: ["Quranic language-focused instructors", "Applied ayah analysis", "Structured vocab mastery"],
      whyQuote: "We prioritize recurring Quranic language patterns, not random word memorization.",
      whyLabel: "Track Design",
    },
    philosophy: {
      quote: "Language skills that directly support meaningful Quran reading.",
      beliefs: ["High-frequency vocabulary first", "Grammar without overload", "Applied reading with tafsir support"],
    },
    curriculum: {
      phases: [
        { title: "Stage 1", items: ["Core Quranic vocabulary", "Roots and high-frequency words"] },
        { title: "Stage 2", items: ["Nominal and verbal sentence patterns"] },
        { title: "Stage 3", items: ["Pronouns, particles, prepositions, verb form intro"] },
        { title: "Stage 4", items: ["Selected ayat with guided meaning analysis"] },
      ],
      outcome: "Follow Quranic structure with stronger vocabulary and grammar awareness.",
    },
    methods: [
      {
        title: "Meaning-Centered Quranic Track",
        badge: "Qur'an Focus",
        flow: ["Vocabulary training", "Pattern recognition", "Guided ayah reading", "Reflection task"],
        whyTitle: "Why it works",
        whyPoints: ["Builds reusable comprehension", "Connects recitation to understanding"],
      },
    ],
    techniques: [
      { title: "Spaced vocabulary review", points: ["Frequent recall", "Mastery tracking"] },
      { title: "Context clues training", points: ["Word relationships", "Meaning cues in ayah"] },
    ],
    audience: {
      perfectFor: [
        "Students who can read Arabic fluently",
        "Learners with basic grammar foundations",
        "Anyone wanting deeper Quran understanding",
      ],
      prerequisites: ["Arabic fluency with harakat", "A1/A2 grammar basics recommended"],
    },
    progression: ["Quranic Arabic -> Classical Arabic (for deeper scholarly texts)"],
    stories: [
      {
        name: "Meaning Transformation",
        quote: "From relying entirely on translation to recognizing recurring Quranic structures directly.",
        meta: ["Track: A2-B1/B2", "Habit: Daily ayah reflection"],
      },
    ],
    faqs: [
      {
        question: "Is this a tafsir class?",
        answer:
          "No. It is a language class supporting Quran understanding through vocabulary, patterns, and grammar essentials.",
      },
      {
        question: "How much grammar is included?",
        answer:
          "Enough grammar to unlock meaning without overload, focused on high-impact topics that change ayah meaning.",
      },
      {
        question: "Can complete beginners join?",
        answer:
          "Usually no. Students should read Arabic confidently first and ideally have beginner grammar basics.",
      },
      {
        question: "Do you teach by surah or by language themes?",
        answer:
          "Primarily by language themes and recurring Quranic structures, then applied to selected ayat.",
      },
      {
        question: "Will this help my khushu in prayer?",
        answer:
          "Many students report improved focus when they understand repeated Quranic words and structures in salah.",
      },
    ],
    includes: ["Live online classes", "Quranic vocabulary trainer", "Guided worksheets", "Completion certificate"],
    offer: { lines: ["2 classes/week", "15-20 min/day vocabulary + reflection"], cta: "Start Quranic Arabic" },
    images: [arabicImg("arbic language (9).jpeg"), arabicImg("arbic language (10).jpeg"), arabicImg("arbic language (11).jpeg")],
    bottomImage: arabicImg("arbic language (12).jpeg"),
    accent: "#1D6B4A",
  },
  {
    slug: "conversational-arabic",
    title: "Conversational Arabic",
    tagline: "Speak Arabic with Confidence - Real Situations, Real Practice",
    seoTitles: ["Conversational Arabic Course | Speaking and Listening Practice"],
    definition: "A speaking-first program designed to make you comfortable communicating in everyday Arabic.",
    teacher: {
      profile: ["Speaking-focused facilitation", "Pronunciation correction", "Role-play coaching"],
      whyQuote: "Confidence grows through guided speaking cycles, not passive study.",
      whyLabel: "Speaking Model",
    },
    philosophy: {
      quote: "Fluency is built through frequent, low-pressure speaking practice.",
      beliefs: ["Speak early and regularly", "Useful scenarios first", "Feedback-driven improvement"],
    },
    curriculum: {
      phases: [
        { title: "Weeks 1-4", items: ["Starter phrases", "Short answers and confidence drills"] },
        { title: "Weeks 5-8", items: ["2-3 minute guided conversations"] },
        { title: "Weeks 9-12", items: ["Role-play in new scenarios"] },
        { title: "Weeks 13-16", items: ["Real-life simulations + speaking assessment"] },
      ],
      outcome: "Speak in practical scenarios with clearer pronunciation and less hesitation.",
    },
    methods: [
      {
        title: "Speaking-First Sessions",
        badge: "A2 -> B1",
        flow: ["Warm-up drills", "Dialogue building", "Listening prompts", "Audio assignment feedback"],
        whyTitle: "Why it works",
        whyPoints: ["Reduces speaking anxiety", "Builds real-time response speed"],
      },
    ],
    techniques: [
      { title: "Role-play practice", points: ["Home/school/work", "Shopping and travel"] },
      { title: "Pronunciation feedback notes", points: ["Target sounds", "Weekly correction tasks"] },
    ],
    audience: {
      perfectFor: [
        "Learners focused on daily communication",
        "Students wanting speaking confidence",
        "Teens and adults needing practical fluency",
      ],
      prerequisites: ["Basic A2 reading/speaking level recommended"],
    },
    progression: ["Conversational Arabic -> Higher speaking proficiency benchmarks"],
    stories: [
      {
        name: "Fluency Milestone",
        quote: "Students move from single-word replies to complete spoken responses in daily situations.",
        meta: ["Track: Speaking and Listening", "Measurement: start/mid/end speaking benchmarks"],
      },
    ],
    faqs: [
      {
        question: "Which dialect do you teach?",
        answer:
          "The track teaches widely understood practical Arabic. If specific tracks are available, placement is guided during consultation.",
      },
      {
        question: "I am shy. Will I be forced to speak?",
        answer:
          "You are encouraged, not pressured. Speaking tasks progress gradually from guided repetition to freer conversation.",
      },
      {
        question: "Is grammar taught?",
        answer:
          "Yes, but as speaking tools: sentence patterns, verb use, and question forms that support fluent conversation.",
      },
      {
        question: "How do you correct pronunciation?",
        answer:
          "Teachers provide respectful targeted corrections and short drills, with benchmark tracking over the course.",
      },
      {
        question: "Can teens join adult speaking groups?",
        answer:
          "Usually teens are placed in teen groups. Mixed placement can be considered with parent approval and teacher recommendation.",
      },
    ],
    includes: ["Live online sessions", "Optional speaking lab", "Teacher pronunciation notes", "Speaking certificate"],
    offer: { lines: ["2 classes/week", "3 short speaking practices/week"], cta: "Boost My Speaking" },
    images: [arabicImg("arbic language (13).jpeg"), arabicImg("arbic language (14).jpeg"), arabicImg("arbic language (15).jpeg")],
    bottomImage: arabicImg("arbic language (16).png"),
    accent: "#C05621",
  },
  {
    slug: "classical-arabic",
    title: "Classical Arabic",
    tagline: "Read Islamic Texts with Precision - Classical Arabic for Serious Learners",
    seoTitles: ["Classical Arabic Course | Advanced Islamic Text Reading"],
    definition:
      "Advanced Arabic for learners seeking access to traditional Islamic literature and higher grammar mastery.",
    teacher: {
      profile: ["Advanced grammar instruction", "Text annotation guidance", "Scholarly reading support"],
      whyQuote: "Classical Arabic mastery comes from guided text analysis and disciplined weekly reading.",
      whyLabel: "Advanced Track",
    },
    philosophy: {
      quote: "Grammar serves understanding; understanding serves independent reading.",
      beliefs: ["Text-based learning", "I'rab awareness in context", "Structured progression to independence"],
    },
    curriculum: {
      phases: [
        { title: "Stage 1", items: ["Intermediate grammar consolidation"] },
        { title: "Stage 2", items: ["Classical reading strategy + i'rab analysis"] },
        { title: "Stage 3", items: ["Independent reading projects + discussion"] },
      ],
      outcome: "Read and analyze classical passages with stronger independence and comprehension.",
    },
    methods: [
      {
        title: "Text Seminar Format",
        badge: "Advanced",
        flow: ["Guided excerpt reading", "Syntax analysis", "Meaning extraction", "Weekly assignments"],
        whyTitle: "Why it works",
        whyPoints: ["Trains real scholarly reading habits", "Builds transferable analysis skills"],
      },
    ],
    techniques: [
      { title: "Annotated excerpts", points: ["Teacher notes", "Pattern highlighting"] },
      { title: "Reading feedback loop", points: ["Accuracy correction", "Comprehension feedback"] },
    ],
    audience: {
      perfectFor: ["Islamic studies students", "Advanced Quran learners", "Researchers and motivated adults/teens"],
      prerequisites: ["Comfortable with A2/B1 grammar and reading", "Placement assessment recommended"],
    },
    progression: ["Classical Stage progression -> advanced independent reading"],
    stories: [
      {
        name: "Scholarly Reading Growth",
        quote: "Students reduce translation dependence and engage directly with classical Arabic passages.",
        meta: ["Track: B1/B2 -> C1", "Assessment: text-based evaluations"],
      },
    ],
    faqs: [
      {
        question: "Is this suitable for learning i'rab?",
        answer:
          "Yes, within a practical reading framework where i'rab analysis is applied directly to real passages.",
      },
      {
        question: "What texts do you use?",
        answer:
          "Selected classical excerpts appropriate to level and learning goals, often from traditional Islamic literature.",
      },
      {
        question: "How advanced do I need to be before joining?",
        answer:
          "You should be comfortable with intermediate reading and core grammar; placement is strongly recommended.",
      },
      {
        question: "Is the course focused on Quran or broader texts?",
        answer:
          "It supports Quran understanding but focuses on broader classical reading skills across Islamic literature.",
      },
      {
        question: "Will there be homework reading?",
        answer:
          "Yes. Weekly reading assignments are core to progress and include teacher feedback on accuracy and comprehension.",
      },
    ],
    includes: ["Live seminars", "Teacher-annotated excerpts", "Weekly reading tasks", "Stage certificate + evaluation"],
    offer: { lines: ["2-3 classes/week", "1 reading assignment/week"], cta: "Enter Classical Track" },
    images: [arabicImg("arbic language (17).jpeg"), arabicImg("arbic language (18).jpeg"), arabicImg("arbic language (1).jpeg")],
    bottomImage: arabicImg("arbic language (2).jpeg"),
    accent: "#6B46C1",
  },
  {
    slug: "msa",
    title: "Modern Standard Arabic (MSA)",
    tagline: "Master Modern Standard Arabic - For Media, Study, and Professional Communication",
    seoTitles: ["MSA Course | Formal Arabic for Study and Work"],
    definition: "Formal Arabic for confident reading, writing, and speaking in academic and professional contexts.",
    teacher: {
      profile: ["Formal Arabic communication training", "Writing rubric-based feedback", "Media listening tasks"],
      whyQuote: "MSA success is measured by what you can write, present, and understand in formal contexts.",
      whyLabel: "Professional Focus",
    },
    philosophy: {
      quote: "Practical formal communication over abstract grammar overload.",
      beliefs: ["Theme-based vocabulary", "Functional grammar refinement", "Writing and listening accountability"],
    },
    curriculum: {
      phases: [
        { title: "Core Skills", items: ["Formal grammar refinement", "Media and workplace vocabulary"] },
        { title: "Communication Labs", items: ["Writing tasks", "Structured speaking practice"] },
        { title: "Comprehension Track", items: ["MSA listening tasks", "Summarizing and reporting"] },
      ],
      outcome: "Communicate clearly in formal Arabic for work, media, and academic contexts.",
    },
    methods: [
      {
        title: "Professional Communication Path",
        badge: "A2/B1 -> B2",
        flow: ["Theme input", "Reading strategy", "Writing lab", "Listening and speaking application"],
        whyTitle: "Why it works",
        whyPoints: ["Builds usable formal output", "Creates visible writing progress over time"],
      },
    ],
    techniques: [
      { title: "Writing rubric feedback", points: ["Clarity", "Structure", "Tone correction"] },
      { title: "Media listening drills", points: ["Main ideas", "Details extraction"] },
    ],
    audience: {
      perfectFor: ["Students targeting formal Arabic", "Professionals needing MSA communication", "Media and academic learners"],
      prerequisites: ["Beginner foundation recommended; placement advised for direct entry"],
    },
    progression: ["MSA Level progression -> stronger professional communication"],
    stories: [
      {
        name: "Professional Output",
        quote: "Learners move from simple sentences to organized formal writing and presentations.",
        meta: ["Track: MSA", "Evidence: writing portfolio growth"],
      },
    ],
    faqs: [
      {
        question: "Is MSA the same as Quranic Arabic?",
        answer:
          "Not exactly. MSA is modern formal Arabic; Quranic Arabic focuses on Quran vocabulary and classical structures.",
      },
      {
        question: "Will I learn to write emails and formal messages?",
        answer:
          "Yes. Writing is a core part of the track with rubric-based feedback for clarity, tone, and structure.",
      },
      {
        question: "How much speaking is included?",
        answer:
          "Regular speaking is included through presentations, structured responses, and formal communication practice.",
      },
      {
        question: "Can beginners join MSA directly?",
        answer:
          "Complete beginners usually start with foundation and beginner levels first, unless placement indicates readiness.",
      },
      {
        question: "Do you include media listening practice?",
        answer:
          "Yes. Level-appropriate media-style listening tasks are included to build practical comprehension gradually.",
      },
    ],
    includes: ["Live online classes", "Writing feedback loop", "Optional MSA discussion club", "Level certificate + portfolio evaluation"],
    offer: { lines: ["2 classes/week", "1 writing + 1 listening task/week"], cta: "Study MSA" },
    images: [arabicImg("arbic language (3).jpeg"), arabicImg("arbic language (4).jpeg"), arabicImg("arbic language (5).jpeg")],
    bottomImage: arabicImg("arbic language (6).jpeg"),
    accent: "#334155",
  },
];

const bySlugEn = new Map(ARABIC_PROGRAM_COURSES_EN.map((course) => [course.slug, course]));
const bySlugAr = new Map(ARABIC_COURSES_AR.map((course) => [course.slug, course]));

export const ARABIC_PROGRAM_SLUGS = ARABIC_PROGRAM_COURSES_EN.map((course) => course.slug);

export function getArabicCourse(slug: string, locale: Locale = "en"): QuranCourse | undefined {
  const map = locale === "ar" ? bySlugAr : bySlugEn;
  return map.get(slug);
}

