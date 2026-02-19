import Navbar from "@/components/Navbar";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import HeroSection from "@/components/HeroSection";
import FilterSidebar from "@/components/FilterSidebar";
import PlanGrid from "@/components/PlanGrid";
import WeOffer from "@/components/WeOffer";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AnnouncementBanner />
      <HeroSection />

      <section className="container pb-16">
        <div className="flex flex-col gap-8 md:flex-row">
          <FilterSidebar />
          <PlanGrid />
        </div>
      </section>

      <WeOffer />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
