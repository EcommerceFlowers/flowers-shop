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

export const sortObject = (obj) => {
  const sorted = {};
  const str: string[] = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, '+');
  }
  return sorted;
};

export { cx };
