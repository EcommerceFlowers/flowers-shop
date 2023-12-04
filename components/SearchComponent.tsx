import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { cx } from '@utils/tools';

export const SearchComponent: IComponent<{
  placeholder?: string;
  tooltip?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => void;

  className?: string;
}> = ({ className, onChange, onClick, placeholder, value }) => (
  <div
    className={cx(
      'w-[500px] h-16 flex bg-white px-3 pr-4 py-2 rounded-2xl items-center justify-between relative border-2 focus:border-primary ',
      className
    )}>
    <input
      type="text"
      className="w-full  outline-none text-xl text-darkGray focus:ring-0 focus:outline-none "
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick(e);
        }
      }}
      value={value}
    />
    <button onClick={onClick}>
      <MagnifyingGlassIcon className="w-8 h-8 text-primary" strokeWidth={5} />
    </button>
  </div>
);
