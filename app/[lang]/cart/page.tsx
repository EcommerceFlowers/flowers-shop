import { cx } from '@utils/tools';
import { CartItem } from './CartItem';

const MOCK_DATA: TCartItem[] = [
  {
    description: 'Sunflower',
    id: 1,
    image: '/images/mock/sunflower.png',
    name: 'Sunflower',
    price: 10,
    quantity: 1,
  },
  {
    description: 'Rose',
    id: 2,
    image: '/images/mock/sunflower.png',
    name: 'Rose',
    price: 20,
    quantity: 1,
  },
];

const CartPage: TNextPage = async () => {
  const items = MOCK_DATA;
  //TODO: use slug to query information
  return (
    <div className={cx('dark:text-white bg-gray1', 'px-32 py-16')}>
      <main className="flex flex-wrap">
        <section className="w-2/3 p-4 ">
          <div className="bg-white rounded px-10 py-8">
            <h2 className="text-xl">Your cart</h2>
            <div className="mt-4 flex flex-col gap-8">
              {items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>
        <section className="w-1/3 p-4 ">
          <div className="flex flex-col bg-white rounded px-10 py-8 text-xl gap-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$30</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$5</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span>$35</span>
            </div>
            <button className="mt-2 bg-orange-400 h-12 text-white rounded">Checkout</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CartPage;
