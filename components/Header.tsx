'use client';

import { cx } from '@utils/tools';
import { capitalize } from 'lodash';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CartDialog } from './CartDialog';

type TRouter = {
  name: string;
  url: string;
  vn?: string;
};

export const ROUTER: TRouter[] = [
  {
    name: 'Home',
    url: '/',
    vn: 'Trang chủ',
  },
  {
    name: 'Shop',
    url: '/shop',
    vn: 'Cửa hàng',
  },
  {
    name: 'Blog',
    url: '/blog',
    vn: 'Blog',
  },
  {
    name: 'Cart',
    url: '/cart',
    vn: 'Giỏ hàng',
  },
  {
    name: 'Contact',
    url: '/contact',
    vn: 'Liên hệ',
  },
];

const NavItem: IComponent<{
  url: string;
  name: string;
  vn?: string;
  isActive?: boolean;
}> = ({ isActive, name, url, vn }) => {
  return (
    <div>
      <Link href={url}>
        <span
          className={cx('text-black', {
            'text-primary': isActive,
          })}>
          {vn ?? name}
        </span>
      </Link>
    </div>
  );
};

export const Header: IComponent = () => {
  const pathName = usePathname();
  const p = pathName?.split('/');
  let isActiveRouter = 'Home';
  if (!p) {
    return null;
  } else {
    if (p?.[1] === '') {
      isActiveRouter = 'Home';
    } else {
      isActiveRouter = capitalize(p?.[1]);
    }
  }

  return (
    <div className="bg-white h-24 flex items-center justify-between px-20">
      <Link href={'/'} className="text-3xl font-medium">
        <span className="text-primary">Florist</span>
        <span className="text-black"> Shop</span>
      </Link>

      <div className="text-xl grow flex justify-center">
        <div className="flex gap-20 items-center">
          {ROUTER.map((item, index) => (
            <NavItem key={index} {...item} isActive={isActiveRouter === item.name} />
          ))}
        </div>
      </div>
      <CartDialog />
    </div>
  );
};
