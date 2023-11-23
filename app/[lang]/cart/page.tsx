import { cx } from '@utils/tools';
import { PageContent } from './content';

const CartPage: TNextPage = async () => {
  return (
    <div className={cx('dark:text-white bg-gray1 min-h-screen', 'px-32 py-16')}>
      <main className="flex flex-wrap">{<PageContent />}</main>
    </div>
  );
};

export default CartPage;
