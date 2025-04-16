
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-warmIvory py-20 md:py-[80px] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%] relative z-10">
        <div className="flex flex-col items-center md:items-start md:max-w-[650px]">
          <h1 className="font-cormorant font-semibold text-3xl md:text-[48px] leading-[1.2] tracking-[0.5px] text-deepBurgundy text-center md:text-left max-w-[650px]">
            Transform Into Your Most Radiant Self on Your Wedding Day
          </h1>
          
          <p className="font-nunito text-lg md:text-xl mt-6 text-deepTaupe leading-[1.6] text-center md:text-left max-w-[550px]">
            Cairo's most discerning brides trust Safaa for flawless makeup that lasts from first look to final dance.
          </p>
          
          <Button className="mt-8 bg-gildedGold text-charcoal hover:bg-deepBurgundy hover:text-softWhite uppercase font-semibold px-8 py-8 rounded-[2px] shadow-md w-full md:w-auto font-nunito">
            Secure your wedding date now
          </Button>
        </div>
      </div>
      
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[40%] bg-cover bg-center opacity-90" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1611175140153-bfd26338ff0d?q=80&w=1374&auto=format&fit=crop')", 
          filter: "sepia(0.2)",
          backgroundPosition: "center 30%"
        }}>
        <div className="absolute inset-0 bg-warmIvory bg-opacity-30 md:bg-opacity-0"></div>
      </div>
    </section>
  );
}
