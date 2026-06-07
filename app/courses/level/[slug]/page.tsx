import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CourseLevelPageContent from "@/components/CourseLevelPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { isCourseLevelSlug, type CourseLevelSlug } from "@/lib/courses/levels";

const META: Record<CourseLevelSlug, { title: string; description: string }> = {
  beginner: {
    title: "Beginner Level | Nibras Network",
    description:
      "Start your Islamic learning journey from zero — structured Quran, Arabic, and Islamic basics for new learners.",
  },
  intermediate: {
    title: "Intermediate Level | Nibras Network",
    description:
      "Build Quran fluency and confidence — for students who can read and want stronger skills and consistency.",
  },
  advanced: {
    title: "Advanced Level | Nibras Network",
    description:
      "Specialize and deepen your knowledge — mastery tracks in Tajweed, Hifz, Tafsir, and Islamic sciences.",
  },
  expert: {
    title: "Expert Level | Nibras Network",
    description:
      "Scholarly and professional pathways — Ijazah, teacher certification, and advanced Islamic sciences.",
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [
    { slug: "beginner" },
    { slug: "intermediate" },
    { slug: "advanced" },
    { slug: "expert" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isCourseLevelSlug(slug)) return {};
  return META[slug];
}

export default async function CourseLevelPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isCourseLevelSlug(slug)) notFound();

  return (
    <main className="relative flex min-h-screen flex-col bg-[#faf9f6]">
      <Navbar />
      <CourseLevelPageContent slug={slug} />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
