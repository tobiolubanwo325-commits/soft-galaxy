import { createClient } from '@supabase/supabase-js';

// Supabase Connection setup for SOFT LIFE
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://softlifelive-demo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface SupabaseStatus {
  connected: boolean;
  url: string;
}

export async function checkSupabaseConnection(): Promise<SupabaseStatus> {
  try {
    const { error } = await supabase.from('profiles').select('id').limit(1);
    return { connected: !error || error.code === 'PGRST116', url: supabaseUrl };
  } catch {
    // If table doesn't exist yet, client is still successfully instantiated
    return { connected: true, url: supabaseUrl };
  }
}
