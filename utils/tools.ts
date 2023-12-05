import classNames from 'classnames';

/**
 * Mapping hotkey into className package for better usage
 */
const cx = classNames;

export const formatVND = (price: number) => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    currency: 'VND',
    style: 'currency',
  });

  return formatter.format(price);
};

export { cx };
