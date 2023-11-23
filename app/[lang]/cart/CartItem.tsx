'use client';
import Image from 'next/image';

import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useCartStore } from '@states/cart';
import { useCallback } from 'react';

export const CartItem: IComponent<TCartItem> = ({
  description,
  id,
  image,
  name,
  price,
  quantity,
}) => {
  const { cart, removeFromCart, setCart } = useCartStore();
  const handleUpdateQuantity = useCallback(
    (quantity: number) => {
      const prev = cart.findIndex((item) => item.id === id);
      const newCart = [...cart];
      newCart[prev] = {
        ...newCart[prev],
        quantity,
      };
      setCart(newCart);
    },
    [cart, setCart, id]
  );
  return (
    <div className="flex justify-between gap-8">
      <div>
        <Image width={160} height={160} src={image} alt={name} />
      </div>
      <div className="grow flex flex-col gap-4">
        <div className="flex justify-between">
          <div>
            <h3 className="text-[22px] text-black">{name}</h3>
            <p className="text-lg text-gray2">{description}</p>
          </div>
          <span>
            <TrashIcon
              onClick={() => removeFromCart(id)}
              width={20}
              height={20}
              className="text-gray2 cursor-pointer hover:opacity-60"
            />
          </span>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-lg text-gray2">Unit price: ${price}</span>
            <div className="w-fit border border-orange-400 flex items-center justify-center gap-2 p-2 rounded">
              <MinusIcon
                strokeWidth={2}
                width={16}
                height={16}
                className="text-orange-400 cursor-pointer hover:opacity-60"
                onClick={() => {
                  if (quantity === 1) return;
                  handleUpdateQuantity(quantity - 1);
                }}
              />
              <span
                style={{
                  width: 16,
                }}
                className="text-center text-lg text-black">
                {quantity}
              </span>
              <PlusIcon
                strokeWidth={2}
                width={16}
                height={16}
                className="text-orange-400 cursor-pointer hover:opacity-60"
                onClick={() => handleUpdateQuantity(quantity + 1)}
              />
            </div>
          </div>
          <div className="flex items-end">
            <span className="text-lg text-gray2">Total:</span>
            <span className="text-lg text-black">${price * quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
