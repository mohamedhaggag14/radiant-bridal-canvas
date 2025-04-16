import { Clock, Palette, Feather, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitItem({ icon, title, description }: BenefitProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
      <div className="text-gildedGold w-8 h-8 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-nunito font-semibold text-lg text-deepBurgundy mb-2 text-center md:text-left">
          {title}
        </h3>
        <p className="font-nunito text-base text-deepTaupe leading-[1.5] text-center md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function BenefitsSection() {
  return (
    <section id="benefits" className="bg-warmIvory py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%]">
        <h2 className="font-cormorant font-semibold text-2xl md:text-[36px] leading-[1.2] tracking-[0.5px] text-charcoal text-center md:text-left">
          The Safaa Difference: Flawless From First Light to Last Dance
        </h2>
        
        <p className="font-nunito text-base md:text-lg mt-6 text-deepTaupe leading-[1.6] text-center md:text-left mb-6">
          While other brides worry about their makeup, you'll be completely present for every precious moment.
        </p>
        
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <BenefitItem 
            icon={<Clock strokeWidth={1.5} />}
            title="✓ 12+ Hour Staying Power"
            description="Specialized techniques and premium products ensure your makeup remains immaculate from morning preparation to midnight farewell, even through Cairo's heat and humidity."
          />
          
          <BenefitItem 
            icon={<Palette strokeWidth={1.5} />}
            title="✓ Custom-Crafted For Your Features"
            description="Your bone structure, skin tone, and wedding colors inform a personalized look that enhances your natural beauty while photographing flawlessly."
          />
          
          <BenefitItem 
            icon={<Feather strokeWidth={1.5} />}
            title="✓ Calm, Unhurried Preparation"
            description="Begin your day in serene luxury with a dedicated 3-hour application session that sets the perfect tone for your celebration."
          />
          
          <BenefitItem 
            icon={<Camera strokeWidth={1.5} />}
            title="✓ Camera-Ready Perfection"
            description="Every product and technique is selected specifically for how it translates in professional photography and videography."
          />
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="uppercase font-semibold text-richClay border-richClay hover:bg-richClay hover:bg-opacity-10 hover:text-deepBurgundy hover:border-deepBurgundy py-7 px-4 rounded-[2px] font-nunito">
            Explore Bridal Packages
          </Button>
        </div>
      </div>
    </section>
  );
}
