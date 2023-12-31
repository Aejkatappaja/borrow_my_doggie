import React from 'react';

interface SubHeadingProps {
  text: string;
}

export const SubHeading: React.FC<SubHeadingProps> = ({ text }) => {
  return <strong className='text-2xl tracking-tight'>{text}</strong>;
};
