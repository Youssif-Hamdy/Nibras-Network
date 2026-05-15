import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TestimonialsPageContent from "@/components/TestimonialsPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "What Our Students & Parents Say | Nibras Network",
  description:
    "Real feedback from students and parents — honest experiences with Quran classes, teachers, pricing, and support at Nibras Network.",
};

export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <TestimonialsPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
