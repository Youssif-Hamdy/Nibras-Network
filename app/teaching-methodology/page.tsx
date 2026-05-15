import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TeachingMethodologyPageContent from "@/components/TeachingMethodologyPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Teaching Methodology | Nibras Network",
  description:
    "Our teaching methodology at Nibras Network — authentic curriculum, learner-centered lessons, assessment, family partnership, and holistic Islamic education.",
};

export default function TeachingMethodologyPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <TeachingMethodologyPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
