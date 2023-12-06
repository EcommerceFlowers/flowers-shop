import { PostCard } from '@components/CardComponents/PostCard';
import { MOCK_BLOGS } from 'mock/posts';

export const PageContent: IComponent = () => {
  return (
    <section className="min-h-screen w-full bg-[#F2F2F2] px-40 py-12">
      <h1 className="my-12 text-6xl font-medium text-black/60 text-center">Bài viết mới nhất</h1>
      <div className="w-full h-full flex flex-wrap py-12 mb-20">
        {MOCK_BLOGS.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 py-8">
            <PostCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};
