//import { TNextPage } from 'next';
// import Image from 'next/image';
import React from 'react';
import Image from 'next/image';
// import Image from 'next/image';
// import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';
// import { cx } from '@utils/tools';
const MOCK_DATA: TCartItem[] = [
  {
    description: 'Periwinkle',
    id: 1,
    image: '/images/mock/periwinkle.png',
    name: 'Periwinkle',
    price: 5,
    quantity: 1,
  },
  {
    description: 'Daisy',
    id: 2,
    image: '/images/mock/daisy.png',
    name: 'Daisy',
    price: 5,
    quantity: 1,
  },
  {
    description: 'Sunflower',
    id: 3,
    image: '/images/mock/sunflower.png',
    name: 'Sunflower',
    price: 10,
    quantity: 1,
  },
  {
    description: 'Rose',
    id: 4,
    image: '/images/mock/whiteRose.png',
    name: 'White Rose',
    price: 5,
    quantity: 1,
  },
  {
    description: 'Rose',
    id: 5,
    image: '/images/mock/whiteRose.png',
    name: 'White Rose',
    price: 5,
    quantity: 1,
  },
  {
    description: 'Rose',
    id: 6,
    image: '/images/mock/whiteRose.png',
    name: 'White Rose',
    price: 5,
    quantity: 1,
  },
  {
    description: 'Daisy',
    id: 7,
    image: '/images/mock/daisy.png',
    name: 'Daisy',
    price: 5,
    quantity: 1,
  },
  {
    description: 'Daisy',
    id: 8,
    image: '/images/mock/daisy.png',
    name: 'Daisy',
    price: 5,
    quantity: 1,
  },
];
export default function ShopPage() {
  const items = MOCK_DATA;
  return (
    <div className="w-full bg-[#F2F2F2]">
      <div className="navbar bg-[#FFFFFF] h-[100px] w-full">
        <div className="flex slex-wrap items-center content-between justify-center justify-items-center h-full">
          <div className=" text-3xl font-[' Roboto'] font-normal" style={{ paddingLeft: '80px' }}>
            <span className="text-[#FF8F52] font-medium">Flower</span>
            <span className="text-black font-medium "> Shop</span>
          </div>

          <div className=" text-xl font-[' Roboto'] font-normal" style={{ margin: 'auto' }}>
            <span>Home</span>
            <span style={{ paddingLeft: '80px' }} className="text-[#FF8F52]">
              Shop
            </span>
            <span style={{ paddingLeft: '80px' }}>Blog</span>
            <span style={{ paddingLeft: '80px' }}>About</span>
          </div>

          <div className="flex" style={{ paddingRight: '100px' }}>
            <div className="flex-1" style={{ paddingRight: '20px' }}>
              <Image width={26} height={29} src="/images/user-solid.png" alt="user-icon"></Image>
            </div>
            <div className="flex-1">
              <Image
                width={26}
                height={29}
                src="/images/cart-shopping-solid.png"
                alt="cart-shopping-icon"></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="body" style={{ padding: '50px 9.3%', width: '100%' }}>
        <div
          className="filter flex justify-center h-[100px] bg-[#FFFFFF]"
          style={{ width: '100%' }}>
          <div className="iconFilter flex-1 pl-6 flex" style={{ margin: 'auto' }}>
            <Image width={22} height={22} src="/images/filter-solid.png" alt="filter-icon"></Image>
            <span className="pl-2">Filltering</span>
          </div>
          <div className="search flex-1" style={{ margin: 'auto' }}>
            <input
              className="w-full border-2 border-{#D9D9D9} h-[50px]"
              type="text"
              placeholder="Search ..."
            />
          </div>
          <div className="sort flex-1 pr-6 flex justify-end" style={{ margin: 'auto' }}>
            <Image
              width={22}
              height={22}
              src="/images/arrow-down-short-wide-solid.png"
              alt="arrow-down-short-wide-icon"></Image>
            <span className="pl-2">Cheep</span>
          </div>
        </div>
        <div
          className="showProduct gap-4 grid grid-cols-4 pt-[50px] w-[100%]"
          style={{ width: '100%' }}>
          {items.map((item) => (
            <div
              key={item.id}
              className="product-box bg-[#FFFFFF] w-[100%] h-[456px] rounded-lg relative"
              style={{ height: '480px', width: '100%' }}>
              <div>
                <Image
                  width={160}
                  height={160}
                  src={item.image}
                  alt="arrow-down-short-wide-icon"
                  style={{
                    height: '84%',
                    margin: 'auto',
                    marginTop: '25px',
                    maxHeight: '290px',
                    width: '84%',
                  }}></Image>
              </div>
              <div
                className="name-flower w-[320] font-['Roboto'] text-2xl mt-4 text-black font-medium"
                style={{ margin: '10px auto', maxWidth: '320px' }}>
                {item.name}
              </div>
              <div
                className="flex absolute text-xl"
                style={{
                  bottom: '18px',
                  left: '8%',
                  margin: 'auto',
                  maxWidth: '320px',
                  right: '8%',
                }}>
                <div>{item.price}$</div>
                <div className="add-to-cart flex absolute right-[0]">
                  <Image
                    className="mr-2 mt-1"
                    width={20}
                    height={10}
                    src="/images/Vector.png"
                    alt="arrow-down-short-wide-icon"
                    style={{ height: '18px' }}></Image>
                  <span className="text-[#FF8F52]">Add to Cart</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="detail"></div>
      </div>
    </div>
  );
}
