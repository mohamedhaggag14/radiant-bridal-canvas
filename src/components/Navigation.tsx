
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-warmIvory shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%] flex justify-between items-center">
        <a href="#" className="font-cormorant font-bold text-xl md:text-2xl text-deepBurgundy">
          Safaa Kandil
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-nunito text-deepTaupe hover:text-deepBurgundy transition-colors">Home</a>
          <a href="#" className="font-nunito text-deepTaupe hover:text-deepBurgundy transition-colors">Services</a>
          <a href="#" className="font-nunito text-deepTaupe hover:text-deepBurgundy transition-colors">Portfolio</a>
          <a href="#" className="font-nunito text-deepTaupe hover:text-deepBurgundy transition-colors">About</a>
          <a href="#" className="font-nunito text-deepTaupe hover:text-deepBurgundy transition-colors">FAQ</a>
          <a href="#" className="font-nunito font-semibold text-deepBurgundy hover:text-gildedGold transition-colors">Contact</a>
        </div>
        
        <button 
          className="md:hidden text-deepBurgundy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-warmIvory shadow-md">
          <div className="flex flex-col p-5">
            <a href="#" className="font-nunito text-deepTaupe py-3 border-b border-deepTaupe/20">Home</a>
            <a href="#" className="font-nunito text-deepTaupe py-3 border-b border-deepTaupe/20">Services</a>
            <a href="#" className="font-nunito text-deepTaupe py-3 border-b border-deepTaupe/20">Portfolio</a>
            <a href="#" className="font-nunito text-deepTaupe py-3 border-b border-deepTaupe/20">About</a>
            <a href="#" className="font-nunito text-deepTaupe py-3 border-b border-deepTaupe/20">FAQ</a>
            <a href="#" className="font-nunito font-semibold text-deepBurgundy py-3">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
