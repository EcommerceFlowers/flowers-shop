import { getAllFlowers } from '@utils/flowers';
import { supabase } from 'app/layout';
import { PageContent } from './content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Florist',
};

const ShopPage: TNextPage = async () => {
  const { data, error } = await getAllFlowers(supabase);
  if (error) {
    return <div>Something went wrong</div>;
  }
  return <PageContent items={data} />;
};

export default ShopPage;
