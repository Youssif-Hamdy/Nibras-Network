import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesIntroSection from "@/components/CoursesIntroSection";
import WhyUsSection from "@/components/WhyUsSection";
import StatsSection from "@/components/StatsSection";
import TutorsCarouselSection from "@/components/TutorsCarouselSection";
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
      <TutorsCarouselSection />
      <PillarsSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
