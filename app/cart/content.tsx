'use client';

import { ArchiveBoxIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@states/cart';
import { useMemo } from 'react';
import { CartItem } from './CartItem';

const DEFAULT_SHIPPING_FEE = 5;

export const PageContent: IComponent = () => {
  const { cart } = useCartStore();
  const subTotal = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <>
      <section className="w-2/3 p-4  h-full">
        <div className="bg-white rounded px-10 py-8">
          <h2 className="text-2xl">Your cart</h2>
          <div className="mt-4 flex flex-col gap-8">
            {cart.length === 0 && (
              <div className="mt-4 flex flex-col items-center 2 gap-2 text-xl">
                <ArchiveBoxIcon width={80} height={80} /> Your cart is empty
              </div>
            )}
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-1/3 p-4  h-full">
        <div className="flex flex-col bg-white rounded px-10 py-8 text-xl gap-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subTotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${DEFAULT_SHIPPING_FEE}</span>
          </div>
          <div className="flex justify-between">
            <span>Total</span>
            <span>${subTotal + DEFAULT_SHIPPING_FEE}</span>
          </div>
          <div className="flex justify-between">
            <span>Payment method</span>
            <span>Cash on delivery</span>
          </div>
          <button className="mt-2 bg-orange-400 h-12 text-white rounded">Checkout</button>
        </div>
      </section>
    </>
  );
};
