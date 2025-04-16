import { Button } from "@/components/ui/button";

export default function CallToActionSection() {
  return (
    <section id="cta" className="bg-deepBurgundy py-10 md:py-16 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto px-5 text-center relative z-10">
        <h2 className="font-cormorant font-semibold text-2xl md:text-[36px] leading-[1.2] tracking-[0.5px] text-softWhite">
          Only 3 Premium Wedding Dates Remain This Season
        </h2>
        
        <p className="font-nunito text-base md:text-lg mt-6 text-softWhite/90 leading-[1.6]">
          The difference between looking good and looking unforgettable is just one decision away.
        </p>
        
        <Button 
          size="lg" 
          className="mt-8 bg-gildedGold text-charcoal hover:bg-softWhite hover:text-deepBurgundy uppercase font-semibold px-8 py-9 rounded-[2px] shadow-lg text-base transform hover:scale-105 transition-all duration-300 font-nunito"
        >
          Claim Your Date Before It's Gone
        </Button>
        
        <p className="font-nunito text-sm text-softWhite/80 mt-6">
          Prefer a personal conversation? WhatsApp: +20 123 456 7890 | Email: booking@safaakandil.com
        </p>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-16 h-16 opacity-20">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 L64 0 L64 64" stroke="#D9B96F" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-16 h-16 opacity-20">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 64 L0 64 L0 0" stroke="#D9B96F" strokeWidth="2" />
        </svg>
      </div>
    </section>
  );
}
