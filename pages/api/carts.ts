import { supabase } from 'lib/supabaseClient';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { data: flower, error: flowerError } = await supabase
        .from('flowers')
        .select('flower_id, price')
        .eq('flower_id', req.body.flower_id)
        .single();

      if (flowerError) throw flowerError;
      if (!flower) {
        return res.status(404).json({ error: 'Flower not found' });
      }

      const { data, error: existingCartItemError } = await supabase
        .from('shoppingcart')
        .select()
        .eq('customer_id', req.body.customer_id)
        .eq('flower_id', req.body.flower_id)
        .limit(1);

      if (existingCartItemError) {
        throw existingCartItemError;
      }
      const existingCartItem = data && data.length > 0 ? data[0] : null;

      if (existingCartItem) {
        // Update quantity if the item already exists in the cart
        const updatedQuantity = existingCartItem.quantity + req.body.quantity;

        const { data: updatedCartItem, error: updateError } = await supabase
          .from('shoppingcart')
          .upsert([
            {
              customer_id: req.body.customer_id,
              flower_id: req.body.flower_id,
              quantity: updatedQuantity,
            },
          ]);

        if (updateError) throw updateError;

        return res.status(201).json(updatedCartItem);
      } else {
        // Add a new item to the cart if it doesn't exist
        const { data: newCartItem, error: newItemError } = await supabase
          .from('shoppingcart')
          .upsert([
            {
              customer_id: req.body.customer_id,
              flower_id: req.body.flower_id,
              quantity: req.body.quantity,
            },
          ]);

        if (newItemError) throw newItemError;

        return res.status(201).json(newCartItem);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  if (req.method === 'GET') {
    try {
      const { data: cartItems, error: cartItemsError } = await supabase
        .from('shoppingcart')
        .select(
          `*, flowers:flower_id (
                flower_id,
                flower_name,
                price,
                images
            )`
        )
        .eq('customer_id', req.query.customer_id);

      if (cartItemsError) throw cartItemsError;

      return res.status(200).json(cartItems);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  return res.status(405).end(); // Method Not Allowed
}
