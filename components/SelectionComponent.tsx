import { ChangeEvent } from 'react';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { cx } from '@utils/tools';

export type TSelection = {
  name: string;
  value: string;
};
export const SelectionComponent: IComponent<{
  title?: string;
  value?: string;
  onClick?: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  list: TSelection[];
  placeholder?: string;
}> = ({ className, list, onClick, placeholder, title, value }) => {
  return (
    <div
      className={cx(
        'cursor-default flex !flex-row justify-between items-center relative',
        className
      )}>
      <span className="">{title}</span>
      {list && (
        <select
          value={value ?? ''}
          onChange={onClick}
          placeholder={placeholder}
          className={cx(
            'grow appearance-none outline-none cursor-pointer border-none !ring-0 text-black text-b1 p-0 bg-transparent text-right pr-8 font-bold'
          )}>
          {list.length > 0 && (
            <option className="font-medium text-black text-b1" value="auto">
              Chọn phương thức thanh toán
            </option>
          )}

          {list.map((item) => {
            return (
              <option className="font-bold text-black text-b1" key={item.name} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </select>
      )}
      <span className="absolute right-0">
        <ChevronDownIcon className="text-gray2 hover:opacity-60 w-6 h-6" strokeWidth={3} />
      </span>
    </div>
  );
};
