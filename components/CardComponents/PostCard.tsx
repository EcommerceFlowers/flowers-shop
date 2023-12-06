'use client';

import { CardContainer } from '.';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/solid';
import { EyeIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export const PostCard: IComponent<TPost> = ({
  avatar,
  date,
  description,
  href,
  image,
  likes,
  name,
  seen,
  title,
}) => {
  const router = useRouter();
  return (
    <CardContainer
      className="bg-white/90 w-full h-fit !px-0"
      onClick={() => href && router.push(href)}
      renderHeader={() => (
        <div className="w-full flex gap-4 items-center px-6">
          <div>
            <Image alt={name} src={avatar} className="rounded-full" width={64} height={64} />
          </div>
          <h3 className="text-xl">{name}</h3>
          <p className="grow text-right text-gray2">
            {new Date(date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
      )}
      renderFooter={() => (
        <div className="flex flex-col gap-4 px-6 mt-4 text-black py-4">
          <h3 className="text-2xl font-medium">{title}</h3>
          <p className="text-lg text-gray2 line-clamp-3">{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <p className="flex gap-2 items-center">
                <HeartIcon className="w-6 h-6 text-gray2" /> {likes}
              </p>
              <p className="flex gap-1 items-center">
                <EyeIcon className="w-6 h-6 text-gray2" /> {seen}
              </p>
            </div>
            <span className="hover:text-primary text-xl">Đọc thêm</span>
          </div>
        </div>
      )}>
      <div className="w-full h-80 mt-4">
        <picture className="w-full">
          <img src={image} alt={name} className="object-cover w-full h-full object-center" />
        </picture>
      </div>
    </CardContainer>
  );
};
