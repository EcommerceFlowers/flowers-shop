import { getListFlowersApi } from 'app/api/flowers';
import { PageContent } from './content';

const ShopPage: TNextPage = async () => {
  const items = await getListFlowersApi();
  return <PageContent items={items} />;
};

export default ShopPage;
