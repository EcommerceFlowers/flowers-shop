'use client';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { cx } from '@utils/tools';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type TRouter = {
  url: string;
  name: string;
};

export const ROUTER: TRouter[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Shop',
    url: '/shop',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'About',
    url: '/about',
  },
];

const NavItem: IComponent<{
  url: string;
  name: string;
  isActive?: boolean;
}> = ({ isActive, name, url }) => {
  return (
    <div>
      <Link href={url}>
        <span
          className={cx('text-black', {
            'text-primary': isActive,
          })}>
          {name}
        </span>
      </Link>
    </div>
  );
};

export const Header: IComponent = () => {
  const pathName = usePathname();
  return (
    <div className="bg-white h-24 flex items-center justify-between px-20">
      <Link href={'/'} className="text-3xl font-medium">
        <span className="text-primary">Flower</span>
        <span className="text-black"> Shop</span>
      </Link>

      <div className="text-xl grow flex justify-center">
        <div className="flex gap-20 items-center">
          {ROUTER.map((item, index) => (
            <NavItem key={index} {...item} isActive={item.url === pathName} />
          ))}
        </div>
      </div>

      <div>
        <ShoppingCartIcon className="w-8 h-8 text-primary" />
      </div>
    </div>
  );
};
