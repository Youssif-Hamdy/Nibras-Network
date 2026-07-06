import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import QuranCoursePageContent from "@/components/QuranCoursePageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { COURSE_PROGRAM_SLUGS, getCourse } from "@/lib/courses/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return COURSE_PROGRAM_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Course | Nibras Network" };
  return {
    title: `${course.seoTitles[0]}`,
    description: course.definition,
    openGraph: {
      title: course.title,
      description: course.tagline,
      images: course.images[0] ? [{ url: course.images[0] }] : undefined,
    },
  };
}

export default async function QuranCoursePage({ params }: Props) {
  const { slug } = await params;
  if (!getCourse(slug)) notFound();

  return (
    <main className="relative flex min-h-screen flex-col flex-wrap">
      <Navbar />
      <QuranCoursePageContent slug={slug} />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
