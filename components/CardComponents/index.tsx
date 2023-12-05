import { cx } from '@utils/tools';

import styles from './styles.module.scss';

export const CardContainer: IComponent<{
  className?: string;
  renderHeader?: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
  onClick?: () => void;
  customStyles?: React.CSSProperties;
}> = ({ children, className, customStyles, onClick, renderFooter, renderHeader }) => {
  return (
    <div
      onClick={onClick}
      className={cx(
        styles.squareCard,
        'w-full h-full flex flex-col items-center py-4 cursor-pointer justify-center',
        className
      )}
      style={customStyles ?? {}}>
      {renderHeader?.()}
      {children}
      {renderFooter?.()}
    </div>
  );
};

export const RecCardComponent: IComponent<{
  className?: string;
  renderHeader?: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
  renderImage?: () => React.ReactNode;
  renderBottomRight?: () => React.ReactNode;
}> = ({ children, className, renderBottomRight, renderFooter, renderHeader, renderImage }) => {
  return (
    <div className={cx(styles.recCard, className)}>
      <div className="w-full h-full flex flex-col p-6">
        <div className="flex flex-col">
          {renderHeader?.()}
          {renderFooter?.()}
        </div>
        <div className="flex flex-col justify-between">
          {renderImage?.()}
          {renderBottomRight?.()}
        </div>
        {children}
      </div>
    </div>
  );
};
