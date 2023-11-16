// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

const supabaseUrl = 'https://ruakyxuymdfcwfsxldfc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1YWt5eHV5bWRmY3dmc3hsZGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNjA1MjEsImV4cCI6MjAxNTYzNjUyMX0.dzD2ZRhYV8lWDPIphq8m2hijRp8ttIYsJLk-Mj8F4sg';

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { data, error } = await supabase.from('flowers').insert([{ name: req.body.name }]);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'GET') {
    const { data, error } = await supabase.from('flowers').select();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  // Implement PUT and DELETE methods similarly
}
