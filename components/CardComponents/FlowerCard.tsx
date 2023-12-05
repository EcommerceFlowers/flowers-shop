import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { CardContainer } from '.';
import { formatVND } from '@utils/tools';

export const FlowerCard: IComponent<{
  flower: IFlower;
  onClick?: () => void;
  className?: string;
}> = ({ className, flower, onClick }) => {
  const { flower_name, flower_type, images, price } = flower;
  return (
    <CardContainer
      onClick={onClick}
      className={className}
      renderFooter={() => (
        <div className="grow w-full px-8 flex flex-col py-4 justify-between">
          <p className="text-2xl font-semibold h-24">{flower_name}</p>
          <p className="text-lg text-gray2 mt-1"> Phân loại: {flower_type}</p>
          <p className="text-lg text-gray2">Giá: {formatVND(price)}</p>
          <button className="text-xl text-primary flex items-center gap-2 hover:opacity-80">
            <ShoppingCartIcon className="w-6 h-6" strokeWidth={2} />
            Add to cart
          </button>
        </div>
      )}>
      <div className="h-72 w-72 py-6">
        <picture className="w-full h-full flex justify-center aspect-square">
          <img src={`/images/flowers/${images}`} alt={flower_name} className="object-cover" />
        </picture>
      </div>
    </CardContainer>
  );
};
