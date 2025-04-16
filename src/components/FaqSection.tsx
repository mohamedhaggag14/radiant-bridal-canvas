
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  return (
    <div className="border-b border-richClay/20 overflow-hidden">
      <button
        className={`w-full flex justify-between items-center p-4 text-left ${
          isOpen ? "bg-duskyRose/10" : "hover:bg-duskyRose/5"
        } transition-colors`}
        onClick={onClick}
      >
        <span className="font-nunito font-semibold text-base md:text-lg text-deepBurgundy">{question}</span>
        <span className="text-richClay">{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </button>
      
      {isOpen && (
        <div className="p-4 bg-softWhite font-nunito text-base text-deepTaupe leading-[1.6] faq-answer">
          {answer}
        </div>
      )}
    </div>
  );
}

const faqItems = [
  {
    question: "When should I book for my Cairo wedding?",
    answer: "Cairo's elite brides secure their dates 6-12 months in advance. With only 2 slots available per day, prime wedding dates fill quickly."
  },
  {
    question: "What happens during my bridal trial?",
    answer: "Your 2-hour collaborative design session includes skin analysis, color testing, and complete look creation. You'll leave with complete confidence in your wedding day vision."
  },
  {
    question: "What products do you use?",
    answer: "Only the most prestigious, photo-ready formulations from Charlotte Tilbury, Dior Backstage, and MAC. Each product is selected for its longevity and performance under Cairo's unique climate conditions."
  },
  {
    question: "Do you provide on-location services?",
    answer: "Yes. Safaa brings her exclusive artistry to your preferred getting-ready location throughout Greater Cairo."
  },
  {
    question: "What's included in the bridal package?",
    answer: "Your comprehensive experience includes: 2-hour personalized trial session, 3-hour wedding day application, premium hand-selected lashes, and a customized touch-up kit with your exact lip color and setting powder."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="bg-warmIvory py-10 md:py-16">
      <div className="max-w-[800px] mx-auto px-5">
        <h2 className="font-cormorant font-semibold text-2xl md:text-[36px] leading-[1.2] tracking-[0.5px] text-charcoal text-center mb-6">
          Your Questions, Answered
        </h2>
        
        <div className="mt-6">
          {faqItems.map((item, index) => (
            <FaqItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleOpen(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
