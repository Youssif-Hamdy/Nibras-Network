import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import StudentAchievementsContent from "@/components/StudentAchievementsContent";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Student Achievements | Nibras Network – Online Quran, Arabic & Islamic Studies",
  description:
    "See how students worldwide learn Quran confidently, read Arabic independently, and build strong Islamic foundations with structured classes, milestones, and certificates.",
};

export default function StudentAchievementsPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <StudentAchievementsContent />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
