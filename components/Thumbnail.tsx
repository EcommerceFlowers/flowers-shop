import React from 'react';
import Image from 'next/image';

const flower1 = {
  img: 'https://i.pinimg.com/564x/b4/45/96/b44596ab8ba05ef144fe60a8d2428060.jpg',
  inStock: 10,
  name: 'Red Rose',
  price: 10000,
};
const flower2 = {
  img: 'https://i.pinimg.com/564x/a8/2e/f4/a82ef441dc5f3dbc096e641cfa738302.jpg',
  inStock: 20,
  name: 'Pink Rose',
  price: 15000,
};
const flower3 = {
  img: 'https://i.pinimg.com/564x/d4/a7/db/d4a7db9eb5ea047230cd3be4740faefd.jpg',
  inStock: 17,
  name: 'White Daisy',
  price: 12000,
};
const flower4 = {
  img: 'https://i.pinimg.com/736x/f4/24/c1/f424c1aee60f6d5e8ab2ab5f217f7ce0.jpg',
  inStock: 36,
  name: 'Tulip',
  price: 80000,
};
const flower5 = {
  img: 'https://i.pinimg.com/564x/41/2e/ad/412ead452744682d63dc5502081985b5.jpg',
  inStock: 28,
  name: 'Orchid',
  price: 200000,
};
const flower6 = {
  img: 'https://i.pinimg.com/564x/52/c3/98/52c3983581049ebe038dc0f65221670a.jpg',
  inStock: 19,
  name: 'Violet',
  price: 600000,
};
const flower_list = [flower1, flower2, flower3, flower4, flower5, flower6];
const post1 = {
  avata:
    'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  date: '2023/22/11',
  description:
    'All the flowers are best for your lovly house just get the one you love the most 😊',
  img: 'https://i.pinimg.com/564x/52/c3/98/52c3983581049ebe038dc0f65221670a.jpg',
  likes: 12,
  name: 'Huy',
  seen: 20,
  title: 'Best flowers for inside home',
};
const post2 = {
  avata:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  date: '2023/2/11',
  description:
    'All the flowers are best for your lovly house just get the one you love the most 😊',
  img: 'https://i.pinimg.com/564x/52/c3/98/52c3983581049ebe038dc0f65221670a.jpg',
  likes: 14,
  name: 'Khánh',
  seen: 25,
  title: 'Best flowers for inside home',
};
const post3 = {
  avata:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  date: '2023/22/11',
  description:
    'All the flowers are best for your lovly house just get the one you love the most 😊',
  img: 'https://i.pinimg.com/564x/52/c3/98/52c3983581049ebe038dc0f65221670a.jpg',
  likes: 30,
  name: 'Nhung',
  seen: 50,
  title: 'Best flowers for inside home',
};
const post_list = [post1, post2, post3];
const cmt1 = {
  avata:
    'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  commented:
    'i’m buying flower from them every weak, always fresh flowers and beutiful😍🌻... love’em so nuch..keep going 💯💯',
  name: 'Huy',
};
const cmt2 = {
  avata:
    'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  commented: 'i get flowers from them for my baby mama, she love them so much 🔥💯',
  name: 'Emilia',
};
const cmt3 = {
  avata:
    'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  commented: "Drip too hard, don't stand too close You gon' fuck around and drown off this wave",
  name: 'Anh',
};
const cmt_list = [cmt1, cmt2, cmt3];
export function Thumbnail() {
  return (
    <div
      className=" bg-gray-200"
      style={{ paddingLeft: '120px', paddingRight: '120px', paddingTop: '50px' }}>
      <div className=" flex items-center justify-between ">
        <div className="w-1/2">
          <div
            style={{
              color: '#121212',
              flexShrink: 0,
              fontFamily: 'Roboto',
              fontSize: '60px',
              fontStyle: 'normal',
              fontWeight: 400,
              height: '212px',
              lineHeight: 'normal',
              width: '557px',
            }}>
            {/* Phần chia đều */}
            Flowers,{' '}
            <span role="img" aria-label="sunflower">
              🌻
            </span>
            <br />
            what the world needs
          </div>

          <div className=" py-6 text-gray-600 text-sm font-normal leading-normal">
            Browse between hundreds of flowers
          </div>
          <button
            className="w-103 h-40 flex-shrink-0 bg-gray-300 text-white"
            style={{
              background: '#F2F2F2',
              backgroundColor: '#FF8F52',
              borderRadius: '5px',
              height: '30px',

              width: '103px',
            }}>
            Browse
          </button>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-3/4 grid grid-cols-3 gap-2">
            {flower_list.map((flower, index) => (
              <Image
                key={index}
                src={flower.img} // Lấy đường dẫn hình ảnh từ thuộc tính img của mỗi object flower
                alt={`Image ${index + 1}`}
                className="w-40 h-40 object-cover m-1 rounded-md"
                style={{ height: '192px', width: '192px' }}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-center justify-center bg-gray-200 "
        style={{ paddingBlock: '50px' }}>
        <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
        <h1
          className=" font-roboto text-2xl font-normal leading-9 tracking-normal text-left text-black"
          style={{}}>
          Best Sellers
        </h1>
        <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
      </div>
      <div className="flex flex-row items-center justify-center bg-gray-200">
        {flower_list.slice(0, 4).map((flower, index) => (
          <div
            key={index}
            className="w-1/4 p-4 relative"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '5px',

              height: '350px',
              marginRight: '24px',
              position: 'relative', // Thay đổi từ 'absolute' sang 'relative'
              width: '287px',
            }}>
            <Image
              src={flower.img}
              alt={`Image ${index}`}
              className="w-full h-auto"
              style={{
                borderRadius: '5px',
                height: '229.9px',
                left: '114.9px',
                top: '780.96px',
                width: '251.57px',
              }}
            />
            <p className="text-lg font-semibold">{flower.name}</p>
            <div className="flex flex-row ">
              <p className="text-gray-500 absolute bottom-3 left-3">{flower.inStock}</p>

              <button className="text-white px-3 py-1 rounded  absolute bottom-2 right-3 flex flex-row">
                <a href="#" className="text-orange-500 mx-2  flex items-center">
                  <svg
                    className="text-orange-400 w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </a>
                <span className="relative z-10 text-black py-1 text-[#FF8F52]">Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex flex-row items-center justify-center bg-gray-200 "
        style={{ paddingBlock: '50px' }}>
        <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
        <h1
          className=" font-roboto text-2xl font-normal leading-9 tracking-normal text-left text-black"
          style={{}}>
          Latest posts
        </h1>
        <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
      </div>
      <div className="flex flex-row items-center justify-center bg-gray-200">
        {post_list.slice(0, 3).map((posted, index) => (
          <div
            key={index}
            className="w-1/4  relative flex flex-col"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '5px',

              height: '430px',
              marginRight: '24px',
              position: 'relative', // Thay đổi từ 'absolute' sang 'relative'
              width: '377px',
            }}>
            <div className="flex flex-row relative p-1">
              <Image
                className="inline-block rounded-full ring-2 ring-white"
                src={post1.avata}
                alt=""
                style={{ height: '40px', width: '40px' }}
              />
              <span className=" flex items-center  ">{posted.name}</span>
              <span className=" ml-auto flex items-center text-[#838383] ">{posted.date}</span>
            </div>
            <Image
              src={posted.img}
              alt={`Image ${index}`}
              className="w-full h-auto"
              style={{
                borderRadius: '5px',
                height: '260px',
                left: '114.9px',
                paddingBlockEnd: '10px',
                top: '780.96px',
                width: '377px',
              }}
            />
            <span
              className="text-[#000000] px-2 font-roboto text-lg"
              style={{ paddingBlockEnd: '10px' }}>
              {posted.title}
            </span>
            <span
              className="text-[#838383] px-2 font-roboto text-xs"
              style={{ paddingBlockEnd: '20px' }}>
              {posted.description}
            </span>
            <div className="flex flex-row relative">
              <svg
                className="h-6 w-6 text-gray-400"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                {' '}
                <path stroke="none" d="M0 0h24v24H0z" />{' '}
                <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
              </svg>
              <span className="text-[#838383]">{posted.likes} </span>
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span className="text-[#838383]">{posted.seen}</span>
              <button className="absolute right-2">
                <span className="text-[#000000] ">Read More</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex flex-row items-center justify-center bg-gray-200 "
        style={{ paddingBlock: '50px' }}>
        <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
        <h1
          className=" font-roboto text-2xl font-normal leading-9 tracking-normal text-left text-black"
          style={{}}>
          Comments
        </h1>
        <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
      </div>
      <div className="flex flex-row items-center justify-center bg-gray-200">
        {cmt_list.slice(0, 4).map((cmted, index) => (
          <div
            key={index}
            className="w-1/4  relative flex flex-col"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '5px',
              height: '100px',
              marginRight: '24px',
              position: 'relative', // Thay đổi từ 'absolute' sang 'relative'
              width: '300px',
            }}>
            <div className="flex flex-row relative p-1">
              <Image
                className="inline-block rounded-full ring-2 ring-white"
                src={post1.avata}
                alt=""
                style={{ height: '40px', paddingRight: '5px', width: '40px' }}
              />
              <span className=" flex items-center pl-2 "> {cmted.name}</span>
            </div>
            <span
              className=" text-[#838383] px-12 font-roboto font-normal text-xs"
              style={{ paddingBlockEnd: '10px' }}>
              {cmted.commented}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
