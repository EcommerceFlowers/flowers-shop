type TDarkModeStatus = 'dark' | 'light' | 'auto';
interface IFlower {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

type TCartItem = IFlower & {
  quantity: number;
};
