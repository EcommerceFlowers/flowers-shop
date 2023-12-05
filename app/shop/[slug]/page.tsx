import { ProjectENV } from '@env';
import { PageContent } from './content';

const ProductDetailPage: TNextPage<{
  slug: string;
}> = async ({ params: { slug } }) => {
  const data = await fetch(`${ProjectENV.NEXT_PUBLIC_APP_ENDPOINT}/api/flowers?id=${slug}`)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
  return (
    <div>
      <PageContent item={data[0]} />
    </div>
  );
};

export default ProductDetailPage;
