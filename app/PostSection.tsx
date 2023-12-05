import { PostCard } from '@components/CardComponents/PostCard';

export const PostSection: IComponent<{
  posts: TPost[];
  title?: string;
}> = ({ posts, title = 'Bài viết mới nhất' }) => {
  return (
    <section className="mt-12 py-12 pb-32">
      <div className="flex items-center justify-center px-20">
        <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
        <h1 className="text-3xl font-medium text-black/60" style={{}}>
          {title}
        </h1>
        <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
      </div>
      <div className="my-20 px-8 grid grid-cols-3 gap-4 items-center justify-center bg-gray-200">
        {posts.map((item, index) => (
          <PostCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
