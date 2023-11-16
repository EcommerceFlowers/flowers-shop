import { supabase } from 'lib/supabaseClient';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const customerCheck = await supabase
      .from('customers')
      .select('customer_id')
      .eq('customer_id', req.body.customer_id);

    if (!customerCheck.data) {
      return res.status(400).json({ error: 'Invalid customer_id' });
    }

    const { data, error } = await supabase.from('orders').upsert([
      {
        customer_id: req.body.customer_id,
        order_date: req.body.order_date,
        status: req.body.status,
        total_price: req.body.total_price,
      },
    ]);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }

  if (req.method === 'GET') {
    if (req.query.id) {
      const { data, error } = await supabase.from('orders').select().eq('order_id', req.query.id);
      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json(data);
    } else {
      const { data, error } = await supabase.from('orders').select();
      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json(data);
    }
  }
}
