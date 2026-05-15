import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EbooksPageContent from "@/components/EbooksPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Free E-Books | Nibras Network",
  description:
    "Download free PDF resources from Nibras Network — Qur'anic vocabulary, Arabic foundations, tajwīd, and more.",
};

export default function EbooksPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <EbooksPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
