import { ProjectENV } from '@env';
import { PageContent } from './content';

const ShopPage: TNextPage = async () => {
  const items = await fetch(`${ProjectENV.NEXT_PUBLIC_APP_ENDPOINT}/api/flowers`)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
  return <PageContent items={items} />;
};

export default ShopPage;
