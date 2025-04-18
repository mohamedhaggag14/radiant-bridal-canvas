
import { Button } from "@/components/ui/button";
import { HERO_BACKGROUND_IMAGE } from "@/constants/images";
import { BadgePercent, MapPin, Car } from "lucide-react";

export default function HeroSection() {
  const handleCtaClick = () => {
    const ctaSection = document.getElementById("cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="bg-warmIvory py-20 md:py-[80px] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%] relative z-10">
        <div className="flex flex-col items-start md:max-w-[650px]">
          <div className="flex items-center gap-2 mb-4">
            <BadgePercent className="text-gildedGold" size={24} />
            <span className="font-nunito text-base font-semibold text-deepBurgundy">
              Special Offer: 2000 EGP Off Wedding Makeup Package
            </span>
          </div>

          <h1 className="font-cormorant font-semibold text-3xl md:text-[48px] leading-[1.2] tracking-[0.5px] text-deepBurgundy text-left max-w-[650px]">
            Transform Into Your Most Radiant Self on Your Wedding Day
          </h1>
          
          <p className="font-nunito text-lg md:text-xl mt-6 text-deepTaupe leading-[1.6] text-left max-w-[550px]">
            Cairo's most discerning brides trust Safaa for flawless makeup that lasts from first look to final dance.
          </p>

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="text-gildedGold" size={20} />
              <span className="font-nunito text-base text-deepTaupe">
                Package Price: 10,000 EGP (Was 12,000 EGP)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="text-gildedGold" size={20} />
              <span className="font-nunito text-base text-deepTaupe">
                Extra fees apply for Giza, Downtown, Maadi
              </span>
            </div>
          </div>
          
          <Button 
            onClick={handleCtaClick}
            className="mt-8 bg-gildedGold text-charcoal hover:bg-deepBurgundy hover:text-softWhite uppercase font-semibold px-8 py-8 rounded-[2px] shadow-md w-full md:w-auto font-nunito"
          >
            Secure your wedding date now
          </Button>
        </div>
      </div>
      
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[40%] bg-cover bg-center opacity-90" 
        style={{ 
          backgroundImage: `url('${HERO_BACKGROUND_IMAGE}')`, 
          filter: "sepia(0.2)",
          backgroundPosition: "center 30%"
        }}>
        <div className="absolute inset-0 bg-warmIvory bg-opacity-30 md:bg-opacity-0"></div>
      </div>
    </section>
  );
}
