'use client';

import { Rating, Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

export const RatingWrapper: IComponent<{
  rate: number;
  className?: string;
}> = ({ className, rate }) => {
  return (
    <Rating
      readOnly
      style={{ maxWidth: 100 }}
      value={rate}
      itemStyles={{
        activeFillColor: '#FF8F52',
        inactiveFillColor: '#D8D8D8',
        itemShapes: Star,
      }}
      className={className}
    />
  );
};
