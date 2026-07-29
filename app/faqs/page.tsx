import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FaqsPageContent from "@/components/FaqsPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "FAQs | Nibras Network",
  description:
    "Find answers to common questions about Nibras Network — courses, teachers, scheduling, progress, and more.",
};

export default function FaqsPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <FaqsPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
