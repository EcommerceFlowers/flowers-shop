'use client';

import { LoadableButton } from '@components/LoadableButton';
import { SelectionComponent, TSelection } from '@components/SelectionComponent';
import { ProjectENV } from '@env';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@states/cart';
import { getListFlowerByIds } from '@utils/flowers';
import { ToastTemplate } from '@utils/toasts';
import { formatVND } from '@utils/tools';
import { supabase } from 'app/layout';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { CartItem } from './CartItem';
import { useRouter } from 'next/navigation';

const DEFAULT_SHIPPING_FEE = 50000;

export type IFlowerWithQuantity = IFlower & {
  quantity: number;
};

const PaymentMethods: TSelection[] = [
  {
    name: '🏦 Chuyển khoản ngân hàng',
    value: 'banking',
  },
  {
    name: '💳 Paypal',
    value: 'paypal',
  },
];

export const PageContent: IComponent = () => {
  const { cart, setCart } = useCartStore();
  const [data, setData] = useState<IFlowerWithQuantity[]>([]);
  const [loading, setLoading] = useState(false);
  const [methodPayment, setMethodPayment] = useState<string>('');
  const [shippingFee, setShippingFee] = useState<number>(0);
  const [loadingPayment, setLoadingPayment] = useState(false);
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
    setLoading(true);
    fetchData();
    setLoading(false);
  }, [cart, setLoading, setData]);

  const subTotal = useMemo(() => {
    return data.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [data]);

  useEffect(() => {
    if (subTotal >= 500000) {
      setShippingFee(0);
      return;
    }
    if (subTotal === 0) {
      setShippingFee(0);
      return;
    }
    setShippingFee(DEFAULT_SHIPPING_FEE);
  }, [subTotal]);

  const router = useRouter();

  const handleCheckout = useCallback(async () => {
    setLoadingPayment(true);
    if (methodPayment === '') {
      ToastTemplate.fail('Vui lòng chọn phương thức thanh toán');
      setLoadingPayment(false);
      return;
    } else if (data.length === 0 || subTotal === 0) {
      ToastTemplate.fail('Giỏ hàng của bạn đang trống');
      setLoadingPayment(false);
      return;
    } else if (methodPayment === 'banking') {
      const options = {
        body: JSON.stringify({
          amount: subTotal + shippingFee,
          method: 'banking',
        }),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      };
      const { data } = await fetch(
        `${ProjectENV.NEXT_PUBLIC_APP_ENDPOINT}/api/payments`,
        options
      ).then((res) => res.json());
      router.push(data);
      setCart([]);
      setLoadingPayment(false);
      return;
    }
  }, [methodPayment, data, subTotal, shippingFee, setCart, setLoadingPayment]);

  return (
    <main className="dark:text-white bg-gray1 min-h-screen px-32 py-16">
      <div className="flex flex-wrap">
        <section className="w-3/5 p-4  h-full">
          <div className="bg-white rounded pr-28 py-12 pb-20">
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
              <span>{formatVND(shippingFee)}</span>
            </p>
            <p className="flex justify-between">
              <span>Tổng chi phí</span>
              <span>{formatVND(subTotal + shippingFee)}</span>
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
            <LoadableButton
              className="w-1/3 mt-4 mx-auto bg-orange-400 h-12 text-white rounded-md hover:opacity-80"
              onClick={handleCheckout}
              loading={loadingPayment}>
              Thanh toán
            </LoadableButton>
          </div>
        </section>
      </div>
    </main>
  );
};
