
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Clock, User, Phone, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabaseClient } from "@/lib/supabase";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(3, {
    message: "Full name must be at least 3 characters.",
  }),
  phone: z.string().min(8, {
    message: "Phone number must be at least 8 digits.",
  }),
  appointmentDate: z.date({
    required_error: "Please select an appointment date.",
  }),
  appointmentTime: z.string({
    required_error: "Please select a preferred time.",
  }),
  notes: z.string().optional(),
});

export default function CallToActionSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      notes: "",
    },
  });

  const availableTimes = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      
      // Format date for better readability
      const formattedDate = format(values.appointmentDate, "PPP");
      
      // Store in Supabase
      const { error } = await supabaseClient.from("bookings").insert({
        full_name: values.fullName,
        phone: values.phone,
        appointment_date: values.appointmentDate.toISOString(),
        appointment_time: values.appointmentTime,
        notes: values.notes || "",
        status: "pending"
      });
      
      if (error) throw error;
      
      // Call function to send email notification
      await supabaseClient.functions.invoke("send-booking-email", {
        body: {
          to: "safaa@safaakandil.com",
          subject: "New Booking Request",
          name: values.fullName,
          phone: values.phone,
          date: formattedDate,
          time: values.appointmentTime,
          notes: values.notes || "No additional notes"
        }
      });
      
      // Show success message
      toast.success("Booking submitted successfully!");
      
      // Redirect to confirmation page
      navigate("/booking-confirmation", { 
        state: { 
          name: values.fullName,
          date: formattedDate,
          time: values.appointmentTime
        } 
      });
      
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="cta" className="bg-deepBurgundy py-10 md:py-16 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto px-5 text-center relative z-10">
        <h2 className="font-cormorant font-semibold text-2xl md:text-[36px] leading-[1.2] tracking-[0.5px] text-softWhite">
          Only 3 Premium Wedding Dates Remain This Season
        </h2>
        
        <p className="font-nunito text-base md:text-lg mt-6 text-softWhite/90 leading-[1.6]">
          The difference between looking good and looking unforgettable is just one decision away.
        </p>
        
        <div className="mt-8 bg-softWhite/10 backdrop-blur-sm rounded-md p-6 md:p-8 max-w-[600px] mx-auto">
          <h3 className="text-softWhite font-cormorant text-xl md:text-2xl mb-6">Book Your Appointment</h3>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel className="text-softWhite">Full Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-deepTaupe" size={18} />
                        <Input 
                          placeholder="Enter your full name" 
                          className="pl-10 bg-softWhite/95 text-deepBurgundy placeholder:text-deepTaupe/70"
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-gildedGold" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel className="text-softWhite">Phone / WhatsApp Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-deepTaupe" size={18} />
                        <Input 
                          placeholder="Enter your phone number" 
                          className="pl-10 bg-softWhite/95 text-deepBurgundy placeholder:text-deepTaupe/70"
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-gildedGold" />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="appointmentDate"
                  render={({ field }) => (
                    <FormItem className="text-left flex flex-col">
                      <FormLabel className="text-softWhite">Preferred Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "pl-3 text-left font-normal bg-softWhite/95 text-deepBurgundy hover:bg-softWhite/80",
                                !field.value && "text-deepTaupe/70"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Select date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage className="text-gildedGold" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="appointmentTime"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel className="text-softWhite">Preferred Time</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <div className="relative">
                            <SelectTrigger className="w-full bg-softWhite/95 text-deepBurgundy pl-10">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-deepTaupe z-10 pointer-events-none" size={18} />
                          </div>
                        </FormControl>
                        <SelectContent className="bg-softWhite text-deepBurgundy">
                          {availableTimes.map((time) => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-gildedGold" />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel className="text-softWhite">Additional Notes (Optional)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 text-deepTaupe" size={18} />
                        <Textarea 
                          placeholder="Any special requests or information" 
                          className="pl-10 min-h-[100px] bg-softWhite/95 text-deepBurgundy placeholder:text-deepTaupe/70"
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-gildedGold" />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="mt-8 bg-gildedGold text-charcoal hover:bg-softWhite hover:text-deepBurgundy uppercase font-semibold px-8 py-6 rounded-[2px] shadow-lg text-base transform hover:scale-105 transition-all duration-300 font-nunito w-full md:w-auto"
              >
                {isSubmitting ? "Processing..." : "Book Your Appointment"}
              </Button>
            </form>
          </Form>
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
      </div>
    </section>
  );
}
