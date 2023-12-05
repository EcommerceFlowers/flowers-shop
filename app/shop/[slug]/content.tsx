import { AddToCardButton } from '@components/AddToCardButton';
import { CommentCard } from '@components/CardComponents/CommentCard';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { formatVND } from '@utils/tools';
import { PostSection } from 'app/PostSection';
import { MOCK_COMMENTS } from 'mock/comments';
import { MOCK_POSTS } from 'mock/posts';
import Image from 'next/image';

export const PageContent: IComponent<{
  item: IFlower;
}> = ({ item }) => {
  const { description, flower_id, flower_name, flower_type, images, price } = item;
  return (
    <div className="px-20 py-12 bg-gray-200 rounded ">
      <section className="flex gap-12 bg-white rounded-3xl p-12">
        <div className="w-fit aspect-square">
          <Image
            alt={item.flower_name}
            src={`/images/flowers/${images}`}
            width={800}
            height={500}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">{flower_name}</h1>
          <p className="text-xl text-gray2">
            <span className="text-black">Phân loại: </span>
            {flower_type}
          </p>
          <div className="text-xl text-gray2">
            <span className="text-black">Mô tả: </span>
            <ul className="mt-2 flex flex-col gap-2">
              {description.split('.').map((item, index) => item && <li key={index}>- {item}.</li>)}
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="aspect-square" key={index}>
                <Image
                  alt={flower_name}
                  key={index}
                  src={`/images/flowers/${images}`}
                  width={280}
                  height={64}
                  className="-mx-8 object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-8">
            <div className="text-2xl text-black">Giá: {formatVND(price)}</div>
            <AddToCardButton flower_id={flower_id}>
              <button className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-opacity-80">
                <ShoppingCartIcon className="w-6 h-6" strokeWidth={2} />
                Thêm vào giỏ hàng
              </button>
            </AddToCardButton>
          </div>
        </div>
      </section>

      <section className="mt-12 gap-2">
        <div className="flex items-center justify-center px-20">
          <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
          <h1 className="text-3xl font-medium text-black/60" style={{}}>
            Bình luận
          </h1>
          <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
        </div>
        <div className="mt-12 flex flex-col gap-12 px-20">
          {MOCK_COMMENTS.map((item, index) => (
            <CommentCard key={index} {...item} />
          ))}
        </div>
      </section>

      <section>
        <PostSection posts={MOCK_POSTS} title="Bài viết liên quan" />
      </section>
    </div>
  );
};
