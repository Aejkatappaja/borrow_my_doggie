import { Title } from '@/components/site/ui/title';
import React from 'react';

interface CardProps {
  title: string;
  first_string: string;
  second_string: string;
  paragraph: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  first_string,
  second_string,
  paragraph,
}) => {
  return (
    <div className='flex w-full flex-col space-y-4 px-6 pt-12 tracking-tight md:px-0 xl:ml-10 xl:w-1/4 2xl:ml-10 2xl:w-1/6'>
      <Title text={title} />
      <strong>
        {first_string} <br /> {second_string}
      </strong>
      <p className='font-semibold'>{paragraph}</p>{' '}
    </div>
  );
};
