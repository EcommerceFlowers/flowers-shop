'use client';

import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useCartStore } from '@states/cart';
import { formatVND } from '@utils/tools';
import { useCallback } from 'react';
import { IFlowerWithQuantity } from './content';

export const CartItem: IComponent<IFlowerWithQuantity> = ({
  flower_id: id,
  flower_name: name,
  images: image,
  price,
  quantity,
}) => {
  const { cart, removeFromCart, setCart } = useCartStore();
  const handleUpdateQuantity = useCallback(
    (quantity: number) => {
      const prev = cart.findIndex((item) => item.flower_id === id);
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
    <div className="grid grid-cols-3">
      <div className="w-[300px] aspect-[100/50] flex items-center justify-center">
        <picture className="w-full h-full flex items-center justify-center">
          <img
            width={100}
            height={50}
            src={`/images/flowers/${image}`}
            alt={name}
            className="object-center"
          />
        </picture>
      </div>
      <div className="col-span-2 flex flex-col gap-4">
        <h3 className="text-[22px] text-black line-clamp-2">{name}</h3>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-lg text-gray2">Giá: {formatVND(price)}</span>
            <div className="flex gap-8 items-center">
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
              <span>
                <TrashIcon
                  onClick={() => removeFromCart(id)}
                  width={24}
                  height={24}
                  className="text-gray2 cursor-pointer hover:opacity-60"
                />
              </span>
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-lg text-gray2">Tổng: </span>
            <span className="text-lg text-black">{formatVND(price * quantity)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
