import { getListFlowersApi } from './api/flowers';
import { PageContent } from './content';
/**
 *
 * Home page
 */

const HomePage: IComponent = async () => {
  const data: IFlower[] = await getListFlowersApi();
  return <PageContent flowers={data} />;
};

export default HomePage;
