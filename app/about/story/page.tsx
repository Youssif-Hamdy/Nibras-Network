import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutStoryPageContent from "@/components/AboutStoryPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Our Story | Nibras Network",
  description:
    "Discover how Nibras Network began, why we chose the name Nibras, and the vision guiding our growth.",
};

export default function AboutStoryPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <AboutStoryPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
