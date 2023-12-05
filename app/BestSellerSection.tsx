'use client';

import { FlowerCard } from '@components/CardComponents/FlowerCard';

export const BestSellerSection: IComponent<{
  items: IFlower[];
}> = ({ items }) => {
  return (
    <section className="mt-12 py-12">
      <div className="flex items-center justify-center px-20">
        <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
        <h1 className="text-3xl font-medium text-black/60" style={{}}>
          Best Sellers
        </h1>
        <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
      </div>
      <div className="mt-20 px-8 grid grid-cols-4 gap-4  items-center justify-center bg-gray-200">
        {items.map((item, index) => (
          <FlowerCard className="h-[600px]" key={index} flower={item} />
        ))}
      </div>
    </section>
  );
};
