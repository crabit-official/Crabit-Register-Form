'use client';

import { cn } from '@/lib/utils';

interface IHeadingProps {
  title: string;
  subTitle?: string;
  center?: boolean;
  isWhite?: boolean;
}

const Heading = ({
  title,
  subTitle,
  center,
  isWhite = false,
}: IHeadingProps) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className={cn(`text-2xl font-bold ${isWhite && 'text-white'}`)}>
        {title}
      </div>
      <div
        className={cn(
          `font-light text-neutral-500 mt-2 ${isWhite && 'text-gray-400 font-bold'}`
        )}
      >
        {subTitle}
      </div>
    </div>
  );
};

export default Heading;
