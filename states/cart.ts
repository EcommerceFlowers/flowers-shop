import { create } from 'zustand';

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
interface IAppState {
  cart: TCartItem[];
  addToCart: (item: TCartItem) => void;
  removeFromCart: (id: number) => void;
  setCart: (cart: TCartItem[]) => void;
}

const useCartStore = create<IAppState>((set) => ({
  addToCart: (item) => {
    set((state) => ({
      cart: [...state.cart, item],
    }));
  },
  cart: MOCK_DATA,
  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },
  setCart: (cart) => {
    set({ cart });
  },
}));

export { useCartStore };
