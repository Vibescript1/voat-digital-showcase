import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ClientsSection } from "@/components/ClientsSection";
import { CreativesSection } from "@/components/CreativesSection";
import { VideoSection } from "@/components/VideoSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ClientsSection />
      <CreativesSection />
      <VideoSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;