import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { cx } from '@utils/tools';

export const LoadableButton: IComponent<{
  disabled?: boolean;
  loading: boolean;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}> = ({ children, className, disabled, loading, onClick }) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {loading ? (
        <div className="w-full flex items-center gap-4 justify-center">
          <ArrowPathIcon width={16} height={16} className={cx('animate-spin')} />
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};
