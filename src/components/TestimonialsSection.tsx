import { PORTFOLIO_IMAGES, TESTIMONIAL_IMAGES } from "@/constants/images";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "5 hours of dancing, 2 outfit changes, and 400+ photos later, my makeup looked as fresh as when Safaa applied it. The best investment of my entire wedding.",
    name: "Amina R., Zamalek Wedding, October 2024",
    image: TESTIMONIAL_IMAGES.AMINA,
  },
  {
    quote:
      "My mother cried when she saw me. My husband was speechless. And I felt more beautiful than I ever have. Safaa didn't just meet my expectations—she transformed them.",
    name: "Fatma S., Four Seasons Nile Plaza Wedding, July 2024",
    image: TESTIMONIAL_IMAGES.FATMA,
  },
];

export default function TestimonialsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const visibleImages = 4;

  const nextImages = () => {
    setCurrentImageIndex((prev) =>
      prev + visibleImages >= PORTFOLIO_IMAGES.length ? 0 : prev + visibleImages
    );
  };

  const prevImages = () => {
    setCurrentImageIndex((prev) =>
      prev - visibleImages < 0
        ? Math.max(0, PORTFOLIO_IMAGES.length - visibleImages)
        : prev - visibleImages
    );
  };

  return (
    <section id="testimonials" className="bg-softWhite py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%]">
        <h2 className="font-cormorant font-semibold text-2xl md:text-[36px] leading-[1.2] tracking-[0.5px] text-charcoal text-center mb-8">
          Cairo's Elite Brides Choose Safaa
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-[500px]"
            >
              <div className="w-[120px] h-[120px] rounded-full border-2 border-duskyRose overflow-hidden mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name.split(",")[0]} testimonial`}
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
        </div>

        <div className="mt-12 relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-cormorant font-semibold text-xl text-charcoal">
              Portfolio
            </h3>
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
            {PORTFOLIO_IMAGES.slice(
              currentImageIndex,
              currentImageIndex + visibleImages
            ).map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-sm"
              >
                <img
                  src={image}
                  alt={`Portfolio image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform hover:scale-105 cursor-pointer"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 gap-1">
            {Array.from({
              length: Math.ceil(PORTFOLIO_IMAGES.length / visibleImages),
            }).map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full ${
                  currentImageIndex / visibleImages === i
                    ? "bg-gildedGold"
                    : "bg-duskyRose bg-opacity-50"
                }`}
                onClick={() => setCurrentImageIndex(i * visibleImages)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
