import { Clock, Droplet, Camera } from "lucide-react";

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-duskyRose bg-opacity-15 py-10 md:py-16 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto px-5 text-center relative z-10">
        <h2 className="font-cormorant font-semibold text-2xl md:text-[36px] leading-[1.2] tracking-[0.5px] text-charcoal">
          Your Wedding Photos Will Last Forever... Will Your Makeup?
        </h2>
        
        <div className="mt-6 font-nunito text-base text-deepTaupe leading-[1.6] space-y-4">
          <p>
            The Cairo sun. Tears of joy. Hours of dancing. Hundreds of photos.
          </p>
          <p>
            Your wedding day throws countless challenges at your makeup. Most brides discover too late that ordinary makeup artists can't deliver that perfect, lasting look.
          </p>
          <p>
            You've spent months planning every detail of your perfect day. Don't let fading makeup, uneven touch-ups, or a rushed morning experience become your lasting memory.
          </p>
        </div>
      </div>
      
      {/* Decorative icons */}
      <Clock className="absolute top-6 right-8 text-richClay opacity-20 w-6 h-6" strokeWidth={1.5} />
      <Droplet className="absolute bottom-6 left-8 text-richClay opacity-20 w-5 h-5" strokeWidth={1.5} />
      <Camera className="absolute bottom-6 right-8 text-richClay opacity-20 w-6 h-6" strokeWidth={1.5} />
    </section>
  );
}
