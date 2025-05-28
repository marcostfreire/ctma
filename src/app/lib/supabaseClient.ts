import { createClient } from '@supabase/supabase-js'

// Fallback para desenvolvimento se não houver configuração real
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://localhost:54321'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dev-key'

// Verificar se estamos usando valores reais
const isProduction = supabaseUrl !== 'https://localhost:54321' && supabaseAnonKey !== 'dev-key'

export const supabase = isProduction 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null // Para desenvolvimento sem Supabase real
