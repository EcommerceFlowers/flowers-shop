import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { CardContainer } from '.';

export const FlowerCard: IComponent<{
  flower: IFlower;
  onClick?: () => void;
  className?: string;
}> = ({ className, flower, onClick }) => {
  const { image, name, price } = flower;
  return (
    <CardContainer
      onClick={onClick}
      className={className}
      renderFooter={() => (
        <div className="grow w-full px-12 flex flex-col py-4 justify-between">
          <div>
            <p className="text-2xl font-semibold">{name}</p>
            {/* <p className="text-gray2 mt-1">{description}</p> */}
          </div>
          <div className="flex justify-between items-center text-lg">
            <p className="text-gray2">{price}$</p>
            <button className="text-primary flex items-center gap-2 hover:opacity-80">
              <ShoppingCartIcon className="w-6 h-6" strokeWidth={2} />
              Add to cart
            </button>
          </div>
        </div>
      )}>
      <div className="h-72 w-72">
        <picture className="w-full h-full flex justify-center">
          <img src={image} alt={name} className="object-contain" />
        </picture>
      </div>
    </CardContainer>
  );
};
