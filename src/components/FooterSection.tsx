
import { Instagram } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-charcoal py-6">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%] flex flex-col md:flex-row justify-between items-center">
        <p className="font-nunito text-sm text-softWhite/70 mb-4 md:mb-0">
          © 2025 Safaa Kandil Makeup Artist. All Rights Reserved.
        </p>
        
        <div className="flex items-center space-x-4">
          <a href="#" className="font-nunito text-sm text-softWhite/70 hover:text-gildedGold transition-colors">
            Privacy Policy
          </a>
          <div className="h-4 w-px bg-softWhite/30 hidden md:block"></div>
          <a href="#" className="font-nunito text-sm text-softWhite/70 hover:text-gildedGold transition-colors flex items-center">
            <Instagram className="w-4 h-4 mr-1" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
