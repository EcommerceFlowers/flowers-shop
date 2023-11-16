import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ruakyxuymdfcwfsxldfc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1YWt5eHV5bWRmY3dmc3hsZGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNjA1MjEsImV4cCI6MjAxNTYzNjUyMX0.dzD2ZRhYV8lWDPIphq8m2hijRp8ttIYsJLk-Mj8F4sg';

export const supabase = createClient(supabaseUrl, supabaseKey);
