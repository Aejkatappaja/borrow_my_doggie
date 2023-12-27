import React from 'react';

interface TitleProps {
  text: string;
  center?: boolean;
  variant?: string;
  size?: string;
}

export const Title: React.FC<TitleProps> = ({
  text,
  center,
  variant,
  size,
}) => {
  let text_center: string = '';
  let text_color: string = 'text-bright-red';
  let text_size: string = '';
  if (center) {
    text_center = 'text-center';
  }
  if (variant === 'card') {
    text_color = 'text-white text-lg';
  }
  if (size === 'xl') {
    text_size = 'text-3xl';
  }
  return (
    <h1
      className={`${text_center} ${text_size} font-doggo md:text-3xl ${text_color}`}
    >
      {text}
    </h1>
  );
};
