import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TutorsPageContent from "@/components/TutorsPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Our Tutors | Nibras Network",
  description:
    "Meet Nibras Network's hand-picked Quran and Arabic tutors — certified, patient, and ready for one-on-one online lessons.",
};

export default function TutorsPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <TutorsPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
