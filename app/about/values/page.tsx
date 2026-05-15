import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutValuesPageContent from "@/components/AboutValuesPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Our Values | Nibras Network",
  description:
    "Read the core values that guide Nibras Network: authenticity, excellence, compassion, inclusivity, integrity, and community.",
};

export default function AboutValuesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <AboutValuesPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
