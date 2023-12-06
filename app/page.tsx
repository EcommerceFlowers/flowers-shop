import { getFlowersWithLimit } from '@utils/flowers';
import { PageContent } from './content';
import { supabase } from './layout';
import { Metadata } from 'next';
/**
 *
 * Home page
 */

export const metadata: Metadata = {
  title: 'Florist',
};

const HomePage: TNextPage = async () => {
  const { data, error } = await getFlowersWithLimit(4, supabase);
  if (error) {
    return <div>Something went wrong</div>;
  }
  return <PageContent flowers={data} />;
};

export default HomePage;
