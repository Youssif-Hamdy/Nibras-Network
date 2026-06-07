import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CoursePathwayPageContent from "@/components/CoursePathwayPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  COURSE_PATHWAY_SLUGS,
  getCoursePathwayContent,
  isCoursePathwaySlug,
  type CoursePathwaySlug,
} from "@/lib/courses/pathways";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return COURSE_PATHWAY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isCoursePathwaySlug(slug)) return {};
  const content = getCoursePathwayContent("en", slug);
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default async function CoursePathwayPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isCoursePathwaySlug(slug)) notFound();

  return (
    <main className="relative flex min-h-screen flex-col bg-[#faf9f6]">
      <Navbar />
      <CoursePathwayPageContent slug={slug as CoursePathwaySlug} />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
