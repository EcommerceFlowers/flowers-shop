import { ToastTemplate } from '@utils/toasts';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface IAppState {
  cart: TCartItem[];
  loading: boolean;
  addToCart: (item: TCartItem) => void;
  removeFromCart: (id: number) => void;
  setCart: (cart: TCartItem[]) => void;
}

const useCartStore = create<IAppState>()(
  devtools(
    persist(
      (set) => ({
        addToCart: (item) => {
          set((state) => ({
            cart: [...state.cart, item],
          }));
        },
        cart: [],
        loading: false,
        removeFromCart: (id) => {
          set((state) => ({
            cart: state.cart.filter((item) => item.flower_id !== id),
          }));
          ToastTemplate.success('Removed from cart');
        },
        setCart: (cart: TCartItem[]) => {
          set({ cart });
        },
      }),
      {
        name: 'cart-storage',
      }
    )
  )
);

export { useCartStore };
