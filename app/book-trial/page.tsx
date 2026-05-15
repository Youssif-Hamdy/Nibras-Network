import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BookTrialPageContent from "@/components/BookTrialPageContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Book Free Trial | Nibras Network",
  description:
    "Request a free trial lesson — choose courses, packages, and your preferred schedule. We respond by email.",
};

export default function BookTrialPage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />
      <BookTrialPageContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
