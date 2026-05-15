import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogPageContent from "@/components/BlogPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { PARENT_GUIDE_META } from "@/lib/blog/parentGuideData";

export const metadata: Metadata = {
  title:
    "Quran, Arabic & Islamic Studies for Children in the West | Nibras Network",
  description: PARENT_GUIDE_META.description,
  openGraph: {
    title: PARENT_GUIDE_META.title,
    description: PARENT_GUIDE_META.description,
    type: "article",
  },
};

export default function BlogPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <BlogPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
