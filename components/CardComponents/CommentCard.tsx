import { RecCardComponent } from '.';
import { RatingWrapper } from '@components/RatingWrapper';
import Image from 'next/image';
import { capitalize } from 'lodash';

export const CommentCard: IComponent<TComment> = ({ avatar, content, name, rating }) => {
  return (
    <RecCardComponent
      className="bg-white/90 w-full h-[260px]"
      renderHeader={() => (
        <div className="flex gap-4 items-center">
          <div>
            <Image alt={name} src={avatar} className="rounded-full" width={64} height={64} />
          </div>
          <h3 className="text-xl">{name}</h3>
          <p className="grow text-right text-gray2">
            {new Date().toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
      )}>
      <div className="flex flex-col gap-2 mt-8 justify-between h-32">
        <p className="text-lg">{capitalize(content)}</p>
        <RatingWrapper rate={rating} className="!max-w-[140px] !w-[140px]" />
      </div>
    </RecCardComponent>
  );
};
