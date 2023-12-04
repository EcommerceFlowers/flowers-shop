'use client';

import Image from 'next/image';
import { FunnelIcon } from '@heroicons/react/24/outline';
import { SearchComponent } from '@components/SearchComponent';
import { useState } from 'react';
import { FlowerCard } from '@components/CardComponents/FlowerCard';

export const PageContent: IComponent<{
  items: any[];
}> = ({ items }) => {
  const [search, setSearch] = useState('');

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
          onClick={() => console.log({ search })}
        />
        <div className="sort flex-1 pr-6 flex justify-end">
          <Image
            width={22}
            height={22}
            src="/images/arrow-down-short-wide-solid.png"
            alt="arrow-down-short-wide-icon"></Image>
          <span className="pl-2">Cheep</span>
        </div>
      </section>

      <div className="gap-4 grid grid-cols-4 pt-[50px]">
        {items.map((item, index) => (
          <FlowerCard key={index} flower={item} className="hover:opacity-90 hover:bg-white/10" />
        ))}
      </div>
    </div>
  );
};
