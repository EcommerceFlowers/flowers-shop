import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { CardContainer } from '.';
import { formatVND } from '@utils/tools';
import { AddToCardButton } from '@components/AddToCardButton';

export const FlowerCard: IComponent<{
  flower: IFlower;
  onClick?: () => void;
  className?: string;
}> = ({ className, flower, onClick }) => {
  const { flower_id, flower_name, flower_type, images, price } = flower;
  return (
    <CardContainer
      onClick={onClick}
      className={className}
      renderFooter={() => (
        <div className="grow w-full px-8 flex flex-col py-4 justify-between">
          <p className="text-[22px] font-semibold h-24 line-clamp-3">{flower_name}</p>
          <div className="py-2 flex flex-col gap-2 mt-2">
            <p className="text-lg text-gray2"> Phân loại: {flower_type}</p>
            <p className="text-lg text-gray2">Giá: {formatVND(price)}</p>
          </div>
          <AddToCardButton flower_id={flower_id}>
            <button className="w-fit py-2 rounded-md text-xl text-primary flex items-center gap-2 hover:opacity-80">
              <ShoppingCartIcon className="w-6 h-6" strokeWidth={2} />
              Thêm vào giỏ
            </button>
          </AddToCardButton>
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
