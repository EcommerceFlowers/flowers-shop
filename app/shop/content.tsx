'use client';

import { FlowerCard } from '@components/CardComponents/FlowerCard';
import { SearchComponent } from '@components/SearchComponent';
import { ChevronDoubleDownIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { useActionDebounce } from '@hooks/useAction';
import { cx } from '@utils/tools';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

type TSort = 'none' | 'asc' | 'desc';

export const PageContent: IComponent<{
  items: IFlower[];
}> = ({ items }) => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [data, setData] = useState(items);
  const [sort, setSort] = useState<TSort>('none');
  const debounce = useActionDebounce(500, true);

  const filter = (value: string) => {
    if (value === '') {
      return items;
    }
    const filtered = items.filter((item) => item.flower_name.includes(value));
    return filtered;
  };

  const handleSearch = useCallback(() => {
    debounce(async () => {
      await router.push(`/shop?search=${search}`);
      const data = filter(search);
      setData(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSort = useCallback(
    async (sort: TSort) => {
      if (sort === 'none') {
        const data = filter(search);
        setData(data);
        return;
      }
      const data = filter(search);
      const sorted = data.sort((a, b) => {
        if (sort === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      setData(sorted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="min-h-screen w-full bg-[#F2F2F2] px-40 py-12">
      <section className="rounded filter flex justify-center items-center h-24 bg-white">
        <div className="flex-1 pl-6 flex" style={{ margin: 'auto' }}>
          <FunnelIcon className="w-8 h-8 text-primary" strokeWidth={2} />
          <span className="pl-2">Filtering</span>
        </div>
        <SearchComponent
          placeholder="Search flowers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={handleSearch}
        />
        <div
          className="sort flex-1 pr-6 flex justify-end cursor-pointer text-gray2 group"
          onClick={() => {
            if (sort === 'none') {
              setSort('asc');
              handleSort('asc');
            } else if (sort === 'asc') {
              setSort('desc');
              handleSort('desc');
            } else {
              setSort('none');
              handleSort('none');
            }
          }}>
          <span className="pl-2 mr-2 text-black ">
            {sort === 'asc'
              ? 'Price: Low to High'
              : sort === 'desc'
                ? 'Price: High to Low'
                : 'Sort'}
          </span>
          <ChevronDoubleDownIcon
            className={cx('w-6 h-6 transform group-hover:text-primary', {
              'rotate-0': sort === 'asc',
              'rotate-180': sort === 'desc',
              'text-primary': sort !== 'none',
            })}
            strokeWidth={2}
          />
        </div>
      </section>

      <div className="gap-4 grid grid-cols-4 pt-[50px]">
        {data.map((item, index) => (
          <FlowerCard
            key={index}
            flower={item}
            onClick={() => router.push(`/shop/${item.flower_id}`)}
          />
        ))}
      </div>
    </div>
  );
};
