// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from 'lib/supabaseClient';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const payload = {
      description: req.body.description,
      flower_name: req.body.flower_name,
      images: req.body.images,
      price: req.body.price,
      stock_quantity: req.body.stock_quantity,
    };
    const { data, error } = await supabase.from('flowers').insert([payload]);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'GET') {
    if (req.query.id) {
      const { data, error } = await supabase.from('flowers').select().eq('flower_id', req.query.id);
      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json(data);
    } else if (req.query.ids) {
      const ids = (req.query.ids as string).split(',').map((id) => parseInt(id));
      const { data, error } = await supabase.from('flowers').select().in('flower_id', ids);
      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json(data);
    } else {
      const { data, error } = await supabase.from('flowers').select();
      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json(data);
    }
  }
}
