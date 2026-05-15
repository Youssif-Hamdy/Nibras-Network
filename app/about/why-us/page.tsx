import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutWhyUsPageContent from "@/components/AboutWhyUsPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Why Choose Us | Nibras Network",
  description:
    "Honest reasons students choose Nibras Network — personal attention, vetted teachers, fair pricing, and genuine care.",
};

export default function AboutWhyUsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <AboutWhyUsPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
