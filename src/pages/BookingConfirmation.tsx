
import { useLocation, Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookingConfirmation() {
  const location = useLocation();
  const { name, date, time } = location.state || {};
  
  return (
    <div className="min-h-screen bg-warmIvory flex flex-col">
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle size={64} className="text-gildedGold" />
          </div>
          
          <h1 className="font-cormorant font-semibold text-3xl text-deepBurgundy mb-4">
            Booking Confirmed!
          </h1>
          
          {name && date && time ? (
            <div className="space-y-4 mb-8">
              <p className="text-deepTaupe font-nunito text-lg">
                Thank you, <span className="font-semibold">{name}</span>, for booking with Safaa Kandil.
              </p>
              
              <p className="text-deepTaupe font-nunito">
                We've received your appointment request for:
                <br />
                <span className="font-semibold">{date} at {time}</span>
              </p>
              
              <p className="text-deepTaupe font-nunito mt-4">
                We'll be in touch shortly to confirm your booking details.
              </p>
            </div>
          ) : (
            <p className="text-deepTaupe font-nunito text-lg mb-8">
              Thank you for your booking request. We'll be in touch shortly to confirm your appointment.
            </p>
          )}
          
          <Button
            asChild
            className="bg-gildedGold text-charcoal hover:bg-deepBurgundy hover:text-softWhite font-nunito"
          >
            <Link to="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
