import { createClient } from '@supabase/supabase-js'

// Non-null assertions (!) garantem ao TS que não virá `undefined`
const supabaseUrl     = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
