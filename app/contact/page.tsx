import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactPageContent from "@/components/ContactPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Contact Us | Nibras Network",
  description:
    "Reach Nibras Network by WhatsApp, email, or our contact form — we usually respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <ContactPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
