import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PoliciesPageContent from "@/components/PoliciesPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Policies & Terms | Nibras Network",
  description:
    "Academic and administrative policies, official terms and conditions for Nibras Network – The Qur'an Light.",
};

export default function PoliciesPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <PoliciesPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
