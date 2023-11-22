import Image from 'next/image';

import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';

export const CartItem: IComponent<TCartItem> = ({ description, image, name, price, quantity }) => {
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
            <TrashIcon width={20} height={20} className="text-gray2" />
          </span>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-lg text-gray2">Unit price: ${price}</span>
            <div className="w-fit border border-orange-400 flex items-center justify-center gap-2 p-2 rounded">
              <PlusIcon
                strokeWidth={2}
                width={16}
                height={16}
                className="text-orange-400 cursor-pointer hover:opacity-60"
              />
              <span
                style={{
                  width: 16,
                }}
                className="text-center text-lg text-black">
                {quantity}
              </span>
              <MinusIcon
                strokeWidth={2}
                width={16}
                height={16}
                className="text-orange-400 cursor-pointer hover:opacity-60"
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
