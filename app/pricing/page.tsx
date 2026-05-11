import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PricingPageContent from "@/components/PricingPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Pricing | Nibras Network",
  description:
    "Flexible monthly Quran and Arabic learning packages at Nibras Network — founding cohort launch offer with 30% off your first three months.",
};

export default function PricingPage() {
  return (
    <main className="relative">
      <Navbar />
      <PricingPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
