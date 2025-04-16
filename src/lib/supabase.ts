
import { createClient } from '@supabase/supabase-js';

// The createClient function expects the Supabase URL and anon key
// These are automatically provided by the Lovable Supabase integration
export const supabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default supabaseClient;
