import { Metadata } from 'next';
import { PageContent } from './content';

export const metadata: Metadata = {
  title: 'Florist',
};

const CartPage: TNextPage = async () => {
  return (
    <div>
      <PageContent />;
    </div>
  );
};

export default CartPage;
