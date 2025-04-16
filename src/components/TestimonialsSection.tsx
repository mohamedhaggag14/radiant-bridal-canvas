
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "5 hours of dancing, 2 outfit changes, and 400+ photos later, my makeup looked as fresh as when Safaa applied it. The best investment of my entire wedding.",
    name: "Amina R., Zamalek Wedding, October 2024",
    image: "https://images.unsplash.com/photo-1590816801762-d71a45697402?w=300&h=300&fit=crop&auto=format"
  },
  {
    quote: "My mother cried when she saw me. My husband was speechless. And I felt more beautiful than I ever have. Safaa didn't just meet my expectations—she transformed them.",
    name: "Fatma S., Four Seasons Nile Plaza Wedding, July 2024",
    image: "https://images.unsplash.com/photo-1611601147557-bcb6cf72248b?w=300&h=300&fit=crop&auto=format"
  }
];

const portfolioImages = [
  "https://images.unsplash.com/photo-1580255803921-d4e60338643a?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1512257639384-2dab4d1b29cf?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1593157439730-838391c0abc5?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1527799067158-4fc03c5856a7?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1562667429-e9bef508dbfe?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1590416839008-88222504f464?w=500&h=500&fit=crop",
  "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?w=500&h=500&fit=crop"
];

export default function TestimonialsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const visibleImages = 4;
  
  const nextImages = () => {
    setCurrentImageIndex((prev) => 
      prev + visibleImages >= portfolioImages.length ? 0 : prev + visibleImages
    );
  };
  
  const prevImages = () => {
    setCurrentImageIndex((prev) => 
      prev - visibleImages < 0 ? Math.max(0, portfolioImages.length - visibleImages) : prev - visibleImages
    );
  };
  
  return (
    <section className="bg-softWhite py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%]">
        <h2 className="font-cormorant font-semibold text-2xl md:text-[36px] leading-[1.2] tracking-[0.5px] text-charcoal text-center mb-8">
          Cairo's Elite Brides Choose Safaa
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center max-w-[500px]">
              <div className="w-[120px] h-[120px] rounded-full border-2 border-duskyRose overflow-hidden mb-4">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name.split(',')[0]} testimonial`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="font-nunito text-base italic text-deepTaupe leading-[1.6] text-center mb-3">
                "{testimonial.quote}"
              </p>
              
              <p className="font-nunito text-sm font-semibold text-richClay text-center">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="font-nunito text-sm text-deepTaupe font-medium mb-2">
            Crafting Dream Bridal Looks Since 2015
          </p>
          <p className="font-nunito text-sm text-deepTaupe font-medium mb-8">
            Featured in Pashion, Enigma, and Cairo Wedding Guide
          </p>
        </div>
        
        <div className="mt-12 relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-cormorant font-semibold text-xl text-charcoal">Portfolio</h3>
            <div className="flex gap-2">
              <button 
                onClick={prevImages}
                className="w-8 h-8 flex items-center justify-center rounded-full text-richClay hover:bg-warmIvory transition-colors"
              >
                <ChevronLeft />
              </button>
              <button 
                onClick={nextImages}
                className="w-8 h-8 flex items-center justify-center rounded-full text-richClay hover:bg-warmIvory transition-colors"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioImages
              .slice(currentImageIndex, currentImageIndex + visibleImages)
              .map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-sm">
                  <img 
                    src={image} 
                    alt={`Portfolio image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform hover:scale-105 cursor-pointer"
                  />
                </div>
              ))}
          </div>
          
          <div className="flex justify-center mt-4 gap-1">
            {Array.from({ length: Math.ceil(portfolioImages.length / visibleImages) }).map((_, i) => (
              <button 
                key={i}
                className={`w-2 h-2 rounded-full ${currentImageIndex / visibleImages === i ? 'bg-gildedGold' : 'bg-duskyRose bg-opacity-50'}`}
                onClick={() => setCurrentImageIndex(i * visibleImages)}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
          <div className="h-[40px] opacity-70">
            <img 
              src="https://placeholder.pics/svg/120x40/DEDEDE/555555/PASHION" 
              alt="Pashion Magazine"
              className="h-full"
            />
          </div>
          <div className="h-[40px] opacity-70">
            <img 
              src="https://placeholder.pics/svg/120x40/DEDEDE/555555/ENIGMA" 
              alt="Enigma Magazine"
              className="h-full"
            />
          </div>
          <div className="h-[40px] opacity-70">
            <img 
              src="https://placeholder.pics/svg/160x40/DEDEDE/555555/CAIRO%20WEDDING%20GUIDE" 
              alt="Cairo Wedding Guide"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
