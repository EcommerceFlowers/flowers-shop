'use client';

import { Dialog, Transition } from '@headlessui/react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@states/cart';
import { getListFlowerByIds } from '@utils/flowers';
import { IFlowerWithQuantity } from 'app/cart/content';
import { supabase } from 'lib/supabaseClient';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

export const CartDialog: IComponent = () => {
  const { cart } = useCartStore();
  const [numberCart, setNumberCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setNumberCart(cart.length);
  }, [cart, setNumberCart]);
  const [data, setData] = useState<IFlowerWithQuantity[]>([]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (cart.length === 0) return;
      const ids = cart.map((item) => item.flower_id);
      const { data, error } = await getListFlowerByIds(ids, supabase);
      if (error) {
        console.log(error);
        return;
      }
      const newData = data.map((item: IFlower) => {
        const index = cart.findIndex((cartItem) => cartItem.flower_id === item.flower_id);
        if (index === -1) return [];
        return {
          ...item,
          quantity: cart[index].quantity,
        };
      }) as IFlowerWithQuantity[];
      setData(newData);
    };
    fetchData();
  }, [cart, setData]);
  return (
    <div className="relative">
      <button type="button" onClick={() => setIsOpen(true)} className="">
        {!!numberCart ? (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {numberCart}
          </span>
        ) : null}
        <ShoppingCartIcon className="w-8 h-8 text-primary cursor-pointer" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-end p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-full">
                <Dialog.Panel className="w-full min-h-[95vh] max-h-[95vh] max-w-xl transform overflow-hidden rounded-2xl bg-white p-8 pr-6 text-left align-middle shadow-xl transition-all flex flex-col justify-between">
                  <Dialog.Title as="h2" className="text-xl font-medium leading-6 text-gray-900">
                    Your cart
                  </Dialog.Title>
                  <div className="overflow-y-auto overflow-x-hidden max-h-[80%] flex flex-col gap-8">
                    {data.map((item, key) => (
                      <div key={key} className="grid grid-cols-4 gap-4 items-center mt-4">
                        <div>
                          <Image
                            alt={item.flower_name}
                            src={`/images/flowers/${item.images}`}
                            width={200}
                            height={50}
                            className="-mx-8 object-cover"
                          />
                        </div>
                        <div className="col-span-3 flex flex-col gap-2 pr-4">
                          <h3 className="text-lg font-medium line-clamp-2">{item.flower_name}</h3>
                          <h3>Số lượng: {item.quantity}</h3>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-right">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        setIsOpen(false);
                        router.push('/cart');
                      }}>
                      Go to the cart page &rarr;
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
