
// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    // Get request body
    const { to, subject, name, phone, date, time, notes } = await req.json()
    
    // Get environment variables
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")
    
    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Resend API key not found" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        }
      )
    }

    // Build email HTML content
    const htmlContent = `
      <h1>New Booking Request</h1>
      <p>You have a new booking request with the following details:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
        <li><strong>Notes:</strong> ${notes}</li>
      </ul>
      <p>Please login to your Supabase dashboard to manage this booking.</p>
    `

    // Send email using Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Safaa Kandil Booking <booking@safaakandil.com>",
        to: [to],
        subject: subject,
        html: htmlContent,
      }),
    })

    const data = await res.json()
    
    return new Response(
      JSON.stringify(data),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    )
  }
})
