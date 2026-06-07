import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CourseGoalPageContent from "@/components/CourseGoalPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  COURSE_GOAL_SLUGS,
  isCourseGoalSlug,
  type CourseGoalSlug,
} from "@/lib/courses/goals";

const META: Record<CourseGoalSlug, { title: string; description: string }> = {
  "start-from-zero": {
    title: "Start from Absolute Zero | Nibras Network",
    description:
      "The perfect, zero-pressure starting point for anyone with no previous knowledge of Arabic or Islam.",
  },
  "recite-perfectly": {
    title: "Recite Quran Perfectly | Nibras Network",
    description:
      "Transform hesitant reading into smooth, confident, and accurate Quranic recitation.",
  },
  "memorize-hifz": {
    title: "Memorize Quran (Hifz) | Nibras Network",
    description:
      "Preserve the words of Allah in your heart using a structured, proven revision system.",
  },
  "learn-arabic": {
    title: "Learn Arabic Language | Nibras Network",
    description:
      "Master the Arabic language for daily communication, travel, and Islamic understanding.",
  },
  "understand-quran-arabic": {
    title: "Understand Quran in Arabic | Nibras Network",
    description:
      "Learn high-frequency Quranic vocabulary to understand verses without relying on translations.",
  },
  "islamic-education": {
    title: "Complete Islamic Education | Nibras Network",
    description:
      "A comprehensive pathway covering Islamic beliefs, daily rulings, prophetic history, and manners.",
  },
  ijazah: {
    title: "Get Ijazah Certificate | Nibras Network",
    description:
      "Authenticate your recitation with a connected chain of transmission to the Prophet ﷺ.",
  },
  "teach-kids": {
    title: "Teach My Kids | Nibras Network",
    description:
      "Safe, fun, and engaging online classes designed specifically for children's attention spans.",
  },
  "master-tajweed": {
    title: "Master Tajweed & Recitation | Nibras Network",
    description:
      "Perfect your pronunciation and apply classical recitation rules flawlessly.",
  },
  "learn-qiraat": {
    title: "Learn Qira'at | Nibras Network",
    description:
      "Expand your scholarly horizons by mastering the ten authentic variant narrations.",
  },
  "become-teacher": {
    title: "Become a Quran Teacher | Nibras Network",
    description:
      "Gain the pedagogical skills, tools, and methodology to teach Quran and Arabic professionally.",
  },
  "new-muslim": {
    title: "New Muslim Guidance (FREE) | Nibras Network",
    description:
      "A warm, supportive, and 100% free starting point for reverts to learn the basics of faith.",
  },
  "study-tafsir": {
    title: "Study Tafsir | Nibras Network",
    description:
      "Discover the historical context, deep reflections, and life lessons behind the verses.",
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return COURSE_GOAL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isCourseGoalSlug(slug)) return {};
  return META[slug];
}

export default async function CourseGoalPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isCourseGoalSlug(slug)) notFound();

  return (
    <main className="relative flex min-h-screen flex-col bg-[#faf9f6]">
      <Navbar />
      <CourseGoalPageContent slug={slug} />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
