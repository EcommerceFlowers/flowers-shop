'use client';
import { MOCK_COMMENTS } from 'mock/comments';
import { MOCK_POSTS } from 'mock/posts';
import { BannerSection } from './BannerSection';
import { BestSellerSection } from './BestSellerSection';
import { CommentSection } from './CommentSection';
import { PostSection } from './PostSection';

export const PageContent: IComponent<{
  flowers: IFlower[];
}> = ({ flowers }) => {
  return (
    <main className="bg-gray-200 h-full px-20">
      <BannerSection />
      {/* <AboutUsSection /> */}
      <BestSellerSection items={flowers} />
      <CommentSection comments={MOCK_COMMENTS} />
      <PostSection posts={MOCK_POSTS} />
    </main>
  );
};
