import { cx } from '@utils/tools';
import styles from './styles.module.scss';

/**
 *
 * Home page
 */
export default function HomePage() {
  return (
    <div className={cx(styles.container, 'dark:text-white')}>
      <h1 className="text-black text-2xl">Hello from home pagee</h1>
      <main className={styles.main}>
        {/**
         * thumbnail
         * best seller
         * latest posts
         * comments
         * flower cards, post cards, comment cards
         */}
      </main>
    </div>
  );
}
