import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fdoqunspsohmtldrwsud.supabase.co"
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkb3F1bnNwc29obXRsZHJ3c3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwOTU0ODksImV4cCI6MTk4MTY3MTQ4OX0.AvdGJbXhoLmQsCmMHgiTrQ8tb4OsyiQyGVR3x26hwEs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)