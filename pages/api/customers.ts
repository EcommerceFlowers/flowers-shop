import { supabase } from 'lib/supabaseClient';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const payload = {
      address: req.body.address,
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
    };
    const { data, error } = await supabase.from('customers').insert([payload]);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'GET') {
    if (req.query.id) {
      const { data, error } = await supabase
        .from('customers')
        .select()
        .eq('customer_id', req.query.id);
      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json(data);
    } else {
      const { data, error } = await supabase.from('customers').select();
      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json(data);
    }
  }
}

// {"first_name": "John",
// "last_name": "Doe",
// "email": "johndoe@gmail.com",
// "phone": "1234567890",
// "address": "123 Main St. Anytown, USA 12345"}

// {"first_name": "Jane",
// "last_name": "Doe",
// "email": "janedoe@email.com",
// "phone": "1234567890",
// "address": "123 Main St. Anytown, USA 12345"}
