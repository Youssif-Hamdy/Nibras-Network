import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import KidsProgramsPageContent from "@/components/KidsProgramsPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Kids Programs | Nibras Network",
  description:
    "Age-based Quran, Arabic, and Islamic programs for children — structured pathways, qualified teachers, and a safe online classroom.",
};

export default function KidsProgramsPage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />
      <KidsProgramsPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
