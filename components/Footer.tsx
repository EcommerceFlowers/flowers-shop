import Link from 'next/link';

export const Footer: IComponent = () => {
  return (
    <div className="w-full bg-[#454545] text-white">
      <div className="flex px-4 py-28 md:py-16 md:px-16 flex-col md:flex-row md:flex-wrap gap-4 lg:gap-2">
        <div className="flex flex-col gap-6 max-w-[400px] justify-between">
          <Link href={'/'} className="text-3xl font-medium">
            <span className="text-primary">Flower</span>
            <span className="text-white"> Shop</span>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex-auto flex lg:justify-center justify-start items-center">
          <div className="w-max flex flex-wrap gap-24 justify-between">
            <div className="flex flex-col gap-2 text-base">
              <span className="font-bold uppercase text-xl">Giới thiệu</span>
              <Link href={'#'}>Về chúng tôi</Link>
              <Link href="#">Dịch vụ</Link>
              <Link href={'#'}>Trở thành đối tác</Link>
              <Link href={'#'}>Tin tức</Link>
              <Link href="#">FAQs</Link>
            </div>
            <div className="flex flex-col gap-2 text-base">
              <span className="font-bold uppercase text-xl">Dịch vụ</span>
              <Link href={'/'}>Trang chủ</Link>
              <Link href="/shop">Shop</Link>
              <Link href={'/blog'}>Blog</Link>
              <Link href={'/about'}>About</Link>
              <Link href="#">FAQs</Link>
            </div>
            <div className="flex flex-col gap-2 text-base">
              <span className="font-bold uppercase text-xl">Liên hệ</span>
              <span>
                Hotline: <a href="tel:+84934567890">093 456 7890</a>
              </span>
              <span>
                Email: <a href="mailto:company@email.com">company@email.com</a>
              </span>
              <span>Địa chỉ: 12 Tôn Đản, phường 13, quận 4, Hồ Chí Minh</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:px-16 py-8 border-t border-[#E0E2E650] pb-28 md:pb-8">
        <span className="text-base text-[#4492AA]">
          © 2023 FlowerShop.vn | All rights raserved
        </span>
      </div>
    </div>
  );
};
