import { ProjectENV } from '@env';
import { PageContent } from './content';
/**
 *
 * Home page
 */

const HomePage: TNextPage = async () => {
  const data: IFlower[] = await fetch(`${ProjectENV.NEXT_PUBLIC_APP_ENDPOINT}/api/flowers`)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
  return <PageContent flowers={data} />;
};

export default HomePage;
