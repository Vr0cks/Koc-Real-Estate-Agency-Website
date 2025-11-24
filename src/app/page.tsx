import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection"; // <--- BUNU EKLE (Import)
import PropertyGrid from "@/components/PropertyGrid";
import CorporateSection from "@/components/CorporateSection";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <HeroSection />
      
      {/* ServicesSection'ı tam buraya, Hero'nun altına koyuyoruz */}
      <ServicesSection /> 
      
      <CorporateSection />

      <div id="vitrin">
        <PropertyGrid />
      </div>

      <TeamSection />
      <Testimonials />
      <ContactSection />
    </main>
  );
}