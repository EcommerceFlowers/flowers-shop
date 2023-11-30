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
    description:
      'Make every day brighter with our abundant bouquet of fresh sunflowers. These radiant, long-lasting blooms bring that just-picked-from-the-meadow feeling to birthdays, get well wishes, or any day you want to make someone you care about smile.',
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

      <div className="body" style={{ height: '100%', padding: '50px 9.3%', width: '100%' }}>
        <div
          className="showDetail grid gap-8"
          style={{
            gridAutoRows: 'minmax(560px,auto)',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'minmax(430,auto)',
            width: '100%',
          }}>
          <div className="content bg-[white] col-start-1 col-end-3 flex">
            <div
              className="grid w-full"
              style={{ gridTemplateColumns: '1fr 2fr', margin: 'auto 50px' }}>
              <div className="image" style={{ gridAutoRows: 'minmax(560px,auto)' }}>
                <Image
                  width={160}
                  height={160}
                  src={items[2].image}
                  alt="arrow-down-short-wide-icon"
                  style={{
                    height: '90%',
                    margin: 'auto',
                    width: '90%',
                  }}></Image>
              </div>
              <div
                className="product-description grid"
                style={{
                  gridTemplateRows: '1fr 4fr 1fr 1fr',
                  height: '90%',
                  margin: 'auto',
                  width: '90%',
                }}>
                <div className="product-name text-3xl font-medium">{items[2].name}</div>
                <div className="product-description text-3xl text-zinc-500 font-normal font-['Roboto']">
                  {items[2].description}
                </div>
                <div className="rating flex text-2xl">
                  <Image
                    width={26}
                    height={29}
                    src="/images/star-solid.png"
                    alt="cart-shopping-icon"
                    style={{ maxHeight: '26px', maxWidth: '26px' }}></Image>
                  <span>4.5/5</span>
                </div>
                <div className="button grid" style={{ gridTemplateColumns: '4fr 3fr 3fr' }}>
                  <div className="price text-2xl">{items[2].price} $ / each</div>
                  <div className="btn ">
                    <button className="border-2 border-[#FF8F52] border-solid h-[75%] w-[75%] ml-2 text-xl rounded-md">
                      Add to favorite
                    </button>
                  </div>
                  <button className="btn border-2 border-[#FF8F52] border-solid h-[75%] w-[75%] flex text-xl bg-[#FF8F52] rounded-md">
                    <div className="flex items-center" style={{ margin: 'auto' }}>
                      <Image
                        className="mr-2 mt-1"
                        width={20}
                        height={10}
                        src="/images/cart-white.png"
                        alt="arrow-down-short-wide-icon"
                        style={{ height: '18px' }}></Image>
                      <span className="text-[#FFFFFF]">Add to Cart</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="comments bg-[white]">
            <div
              style={{
                display: 'grid',
                gridTemplateRows: '1fr 8fr',
                margin: '50px',
                width: '90%',
              }}>
              <div className="title grid" style={{ gridTemplateColumns: '3fr 1fr' }}>
                <div>Review</div>
                <div>Add a review</div>
              </div>
              <div className="grid h-full" style={{ gridTemplateRows: '1fr 1fr 1fr' }}>
                <div className="block1 h-full">a</div>
                <div className="block2 h-full">b</div>
                <div className="block3 h-full">c</div>
              </div>
            </div>
          </div>
          <div className="more-image bg-[white]"></div>
        </div>
      </div>
    </div>
  );
}
