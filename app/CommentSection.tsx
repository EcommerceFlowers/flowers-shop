import { CommentCard } from '@components/CardComponents/CommentCard';

export const CommentSection: IComponent<{
  comments: TComment[];
}> = ({ comments }) => {
  return (
    <section className="mt-24 py-12">
      <div className="flex items-center justify-center px-20">
        <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
        <h1 className="text-3xl font-medium text-black/60" style={{}}>
          Bình luận
        </h1>
        <div className="flex-grow border-b-2 border-gray-300 h-2"></div>
      </div>
      <div className="my-20 px-8 grid grid-cols-3 gap-4 items-center justify-center bg-gray-200">
        {comments.map((item, index) => (
          <CommentCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
