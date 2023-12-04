import { PageContent } from './content';

const MOCK_DATA: TCartItem[] = [
  {
    description: 'Periwinkle',
    id: 1,
    image: '/images/mock/periwinkle.png',
    name: 'Periwinkle',
    price: 5,
    quantity: 1,
  },
  {
    description: 'Daisy',
    id: 2,
    image: '/images/mock/daisy.png',
    name: 'Daisy',
    price: 5,
    quantity: 1,
  },
  {
    description: 'Sunflower',
    id: 3,
    image: '/images/mock/sunflower.png',
    name: 'Sunflower',
    price: 10,
    quantity: 1,
  },
  {
    description: 'Rose',
    id: 4,
    image: '/images/mock/whiteRose.png',
    name: 'White Rose',
    price: 5,
    quantity: 1,
  },
  {
    description: 'Rose',
    id: 5,
    image: '/images/mock/whiteRose.png',
    name: 'White Rose',
    price: 5,
    quantity: 1,
  },
  {
    description: 'Rose',
    id: 6,
    image: '/images/mock/whiteRose.png',
    name: 'White Rose',
    price: 5,
    quantity: 1,
  },
  {
    description: 'Daisy',
    id: 7,
    image: '/images/mock/daisy.png',
    name: 'Daisy',
    price: 5,
    quantity: 1,
  },
  {
    description: 'Daisy',
    id: 8,
    image: '/images/mock/daisy.png',
    name: 'Daisy',
    price: 5,
    quantity: 1,
  },
];

const ShopPage: IComponent = () => {
  const items = MOCK_DATA;
  return <PageContent items={items} />;
};

export default ShopPage;
