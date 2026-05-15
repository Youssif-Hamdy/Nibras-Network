import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HowItWorksPageContent from "@/components/HowItWorksPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "How It Works | Nibras Network",
  description:
    "Four simple steps to start with Nibras Network — pick your path, share your story, try for free, and begin your transformation.",
};

export default function HowItWorksPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <HowItWorksPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
