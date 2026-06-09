import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesIntroSection from "@/components/CoursesIntroSection";
import WhyUsSection from "@/components/WhyUsSection";
import StatsSection from "@/components/StatsSection";
import KidsSection from "@/components/KidsSection";
import PillarsSection from "@/components/PillarsSection";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <CoursesIntroSection />
      <WhyUsSection />
      <StatsSection />
      <KidsSection />
      <PillarsSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
