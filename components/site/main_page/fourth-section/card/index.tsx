import React from 'react';
import Image from 'next/image';

interface CardProps {
  src: string;
  alt: string;
  title: string;
  text: string;
}

export const Card: React.FC<CardProps> = ({ src, alt, title, text }) => {
  return (
    <div className='flex flex-col items-center px-6 md:h-96 md:w-96'>
      <Image src={src} alt={alt} width={360} height={301} />
      <h1 className='text-center text-2xl font-bold'>{title}</h1>
      <p className='pt-2 text-center text-sm'>{text}</p>
    </div>
  );
};
