import React from 'react';

interface TitleProps {
  text: string;
  center?: boolean;
}

export const Title: React.FC<TitleProps> = ({ text, center }) => {
  let text_center: string = '';
  if (center) {
    text_center = 'text-center';
  }
  return (
    <h1 className={`${text_center} font-doggo text-3xl text-bright-red`}>
      {text}
    </h1>
  );
};
