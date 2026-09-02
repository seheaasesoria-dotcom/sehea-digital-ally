import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import VideoSection from "@/components/VideoSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import ContactSection from "@/components/ContactSection";
import CoverageSection from "@/components/CoverageSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <VideoSection />
      <LeadMagnetSection />
      <ContactSection />
      <CoverageSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
