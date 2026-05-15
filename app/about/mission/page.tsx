import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutMissionPageContent from "@/components/AboutMissionPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Mission & Vision | Nibras Network",
  description:
    "Read Nibras Network mission and vision for authentic, accessible Islamic education with sincere care.",
};

export default function AboutMissionPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <AboutMissionPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
