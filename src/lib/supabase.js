import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL.toString();
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY.toString();

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;