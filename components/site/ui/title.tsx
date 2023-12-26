import React from 'react';

interface TitleProps {
  text: string;
  center?: boolean;
  variant?: string;
}

export const Title: React.FC<TitleProps> = ({ text, center, variant }) => {
  let text_center: string = '';
  let text_color: string = 'text-bright-red';
  if (center) {
    text_center = 'text-center';
  }
  if (variant === 'card') {
    text_color = 'text-white text-lg';
  }
  return (
    <h1 className={`${text_center} font-doggo md:text-3xl ${text_color}`}>
      {text}
    </h1>
  );
};
