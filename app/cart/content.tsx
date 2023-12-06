'use client';

import { ProjectENV } from '@env';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@states/cart';
import { formatVND } from '@utils/tools';
import { useEffect, useMemo, useState } from 'react';
import { CartItem } from './CartItem';
import { SelectionComponent, TSelection } from '@components/SelectionComponent';

const DEFAULT_SHIPPING_FEE = 50000;

export type IFlowerWithQuantity = IFlower & {
  quantity: number;
};

const PaymentMethods: TSelection[] = [
  {
    name: 'Tiền mặt',
    value: 'cash',
  },
  {
    name: 'Paypal',
    value: 'paypal',
  },
];

export const PageContent: IComponent = () => {
  const { cart } = useCartStore();
  const [data, setData] = useState<IFlowerWithQuantity[]>([]);
  const [loading, setLoading] = useState(false);
  const [methodPayment, setMethodPayment] = useState<string>('');
  useEffect(() => {
    const fetchData = async () => {
      if (cart.length === 0) return;
      const res = await fetch(
        `${ProjectENV.NEXT_PUBLIC_APP_ENDPOINT}/api/flowers?ids=${cart
          .map((item) => item.flower_id)
          .join(',')}`
      );
      const data = await res.json();
      const newData = data.map((item: IFlower) => {
        const index = cart.findIndex((cartItem) => cartItem.flower_id === item.flower_id);
        if (index === -1) return [];
        return {
          ...item,
          quantity: cart[index].quantity,
        };
      });
      setData(newData);
    };
    setLoading(true);
    fetchData();
    setLoading(false);
  }, [cart, setLoading, setData]);

  const subTotal = useMemo(() => {
    return data.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [data]);

  return (
    <main className="dark:text-white bg-gray1 min-h-screen px-32 py-16">
      <div className="flex flex-wrap">
        <section className="w-3/5 p-4  h-full">
          <div className="bg-white rounded px-12 py-12 pb-20">
            <h2 className="text-3xl text-right font-medium">
              Giỏ hàng của bạn ({data.length} sản phẩm)
            </h2>
            <div className="mt-12 flex flex-col gap-8">
              {loading && (
                <span className="flex items-center gap-2">
                  <ArrowPathIcon className="animate-spin w-12 h-12 mx-auto" />
                  Loading your cart...
                </span>
              )}

              {!loading && data.map((item) => <CartItem key={item.flower_id} {...item} />)}
            </div>
          </div>
        </section>
        <section className="w-2/5 p-4  h-full">
          <div className="flex flex-col bg-white rounded px-10 py-8 text-xl gap-6">
            <p className="flex justify-between">
              <span>Tổng tiền hàng ({data.length} sản phẩm)</span>
              <span>{formatVND(subTotal)}</span>
            </p>
            <p className="flex justify-between">
              <span>Phí vận chuyển</span>
              <span>{formatVND(cart.length > 0 ? DEFAULT_SHIPPING_FEE : 0)}</span>
            </p>
            <p className="flex justify-between">
              <span>Tổng chi phí</span>
              <span>{cart.length > 0 ? formatVND(subTotal + DEFAULT_SHIPPING_FEE) : 0}</span>
            </p>

            <SelectionComponent
              title="Phương thức thanh toán"
              placeholder="Chọn phương thức thanh toán"
              value={methodPayment}
              onClick={(e) => {
                setMethodPayment(e.target.value);
              }}
              list={PaymentMethods ?? []}
            />
            <button className="mt-2 bg-orange-400 h-12 text-white rounded">Thanh toán</button>
          </div>
        </section>
      </div>
    </main>
  );
};
