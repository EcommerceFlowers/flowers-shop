import { Metadata } from 'next';
import { PageContent } from './content';
/**
 *
 * Home page
 */

export const metadata: Metadata = {
  title: 'Florist',
};

const BlogPage: TNextPage = async () => {
  return <PageContent />;
};

export default BlogPage;
