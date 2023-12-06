import { supabase } from 'app/layout';
import { PageContent } from './content';
import { getFlowerById } from '@utils/flowers';

const ProductDetailPage: TNextPage<{
  slug: string;
}> = async ({ params: { slug } }) => {
  const { data, error } = await getFlowerById(slug, supabase);
  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <PageContent item={data?.[0]} />
    </div>
  );
};

export default ProductDetailPage;
