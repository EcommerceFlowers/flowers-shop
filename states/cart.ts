import { create } from 'zustand';

interface IAppState {
  cart: string[];
  addToCart: (item: string) => void;
  removeFromCart: (item: string) => void;
}

const useCartStore = create<IAppState>((set) => ({
  addToCart: (item) => {
    set((state) => ({
      cart: [...state.cart, item],
    }));
  },
  cart: [],
  removeFromCart: (item) => {
    set((state) => ({
      cart: state.cart.filter((i) => i !== item),
    }));
  },
}));

export { useCartStore };
