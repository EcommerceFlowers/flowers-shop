// pages/api/orders/index.ts
import { supabase } from 'lib/supabaseClient';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Validate customer_id
      const { data: customer, error: customerError } = await supabase
        .from('customers')
        .select('customer_id')
        .eq('customer_id', req.body.customer_id);

      if (customerError) throw customerError;

      if (!customer || customer.length === 0) {
        return res.status(400).json({ error: 'Invalid customer_id' });
      }

      // Start a transaction to ensure atomicity
      const { data: order, error: orderError } = await supabase.rpc('create_order_with_items', {
        _customer_id: req.body.customer_id,
        _items: req.body.items, // { flower_id: string, quantity: number}
        _order_date: req.body.order_date,
        _status: req.body.status,
        _total_price: req.body.total_price,
      });

      if (orderError) throw orderError;

      return res.status(201).json(order);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  if (req.method === 'GET') {
    if (req.query.customer_id) {
      const { data: orders, error: ordersError } = await supabase
        .from('orders')
        .select('*')
        .eq('customer_id', req.query.customer_id)
        .order('order_date', { ascending: false });

      if (ordersError) throw ordersError;

      return res.status(200).json(orders);
    }

    const { data: orders, error: ordersError } = await supabase
      .from('orders')
      .select('*')
      .order('order_date', { ascending: false });

    if (ordersError) throw ordersError;

    return res.status(200).json(orders);
  }

  return res.status(405).end(); // Method Not Allowed
}
