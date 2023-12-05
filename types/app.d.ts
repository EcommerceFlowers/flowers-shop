type TDarkModeStatus = 'dark' | 'light' | 'auto';
interface IFlower {
  flower_id: number;
  flower_name: string;
  flower_type: string;
  description: string;
  price: number;
  images: string;
}

type TCartItem = IFlower & {
  quantity: number;
};

type TComment = {
  name: string;
  content: string;
  avatar: string;
  rating: number;
};

type TPost = {
  name: string;
  avatar: string;
  title: string;
  description: string;
  date: string;
  image: string;
  likes: number;
  seen: number;
};
