
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ComparisonSection from "@/components/ComparisonSection";
import FaqSection from "@/components/FaqSection";
import CallToActionSection from "@/components/CallToActionSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ComparisonSection />
      <FaqSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};

export default Index;
