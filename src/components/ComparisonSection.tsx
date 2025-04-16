export default function ComparisonSection() {
  return (
    <section id="comparison" className="bg-duskyRose bg-opacity-10 py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-cormorant font-semibold text-2xl md:text-[36px] leading-[1.2] tracking-[0.5px] text-charcoal text-center">
          Why Most Cairo Brides Leave Disappointed (And Why You Won't)
        </h2>
        
        <p className="font-nunito text-base md:text-lg mt-6 text-deepTaupe leading-[1.6] text-center max-w-[800px] mx-auto mb-6">
          The difference between good and unforgettable isn't just skill—it's time and focus.
        </p>
        
        <div className="mt-6 overflow-x-auto">
          <table className="w-full max-w-[800px] mx-auto border-collapse">
            <thead>
              <tr>
                <th className="font-nunito text-lg font-semibold text-deepBurgundy p-4 text-left border border-richClay/30 bg-gildedGold bg-opacity-5">
                  The Safaa Experience
                </th>
                <th className="font-nunito text-lg font-semibold text-deepTaupe p-4 text-left border border-richClay/30">
                  Standard Makeup Services
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-softWhite">
                <td className="font-nunito p-4 border border-richClay/30 bg-gildedGold bg-opacity-5">
                  <span className="text-gildedGold">✓</span> Maximum 2 brides per day
                </td>
                <td className="font-nunito p-4 border border-richClay/30">
                  <span className="text-deepTaupe">✗</span> 5-8 rushed appointments daily
                </td>
              </tr>
              <tr className="bg-warmIvory">
                <td className="font-nunito p-4 border border-richClay/30 bg-gildedGold bg-opacity-5">
                  <span className="text-gildedGold">✓</span> Dedicated 3-hour session
                </td>
                <td className="font-nunito p-4 border border-richClay/30">
                  <span className="text-deepTaupe">✗</span> 60-90 minute hurried application
                </td>
              </tr>
              <tr className="bg-softWhite">
                <td className="font-nunito p-4 border border-richClay/30 bg-gildedGold bg-opacity-5">
                  <span className="text-gildedGold">✓</span> Personalized touch-up kit included
                </td>
                <td className="font-nunito p-4 border border-richClay/30">
                  <span className="text-deepTaupe">✗</span> Basic touch-up or none at all
                </td>
              </tr>
              <tr className="bg-warmIvory">
                <td className="font-nunito p-4 border border-richClay/30 bg-gildedGold bg-opacity-5">
                  <span className="text-gildedGold">✓</span> Premium, long-wear products
                </td>
                <td className="font-nunito p-4 border border-richClay/30">
                  <span className="text-deepTaupe">✗</span> Standard cosmetics that fade quickly
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="font-nunito text-lg italic text-deepBurgundy text-center mt-8 max-w-[800px] mx-auto">
          Your once-in-a-lifetime day deserves more than an assembly-line experience.
        </p>
      </div>
    </section>
  );
}
