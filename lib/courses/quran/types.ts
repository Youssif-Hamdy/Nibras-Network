export type LearningMethod = {
  title: string;
  badge?: string;
  flow: string[];
  whyTitle: string;
  whyPoints: string[];
};

export type CurriculumPhase = {
  title: string;
  items: string[];
};

export type SuccessStory = {
  name: string;
  quote: string;
  meta: string[];
};

export type CourseFaq = {
  question: string;
  answer: string;
};

export type QuranCourse = {
  slug: string;
  title: string;
  tagline: string;
  seoTitles: string[];
  definition: string;
  teacher: {
    profile: string[];
    whyQuote: string;
    whyLabel: string;
  };
  philosophy: {
    quote: string;
    beliefs: string[];
  };
  curriculum: {
    phases: CurriculumPhase[];
    outcome: string;
  };
  methods: LearningMethod[];
  techniques: { title: string; points: string[] }[];
  audience: {
    perfectFor: string[];
    readyIf?: string[];
    honestTruth?: string;
    prerequisites?: string[];
    scholarNote?: string;
  };
  progression: string[];
  stories: SuccessStory[];
  faqs?: CourseFaq[];
  includes: string[];
  offer: {
    lines: string[];
    cta: string;
    subcta?: string;
  };
  pricing?: {
    promo?: string[];
    regular?: string[];
    sample?: string[];
    extra?: string[];
  };
  images: string[];
  bottomImage?: string;
  /** Where to render `bottomImage` — defaults to curriculum */
  bottomImageSection?: "teacher" | "curriculum" | "methods";
  comparison?: {
    title: string;
    course1Title: string;
    course2Title: string;
    features: {
      name: string;
      course1: string;
      course2: string;
    }[];
  };
  accent: string;
};
