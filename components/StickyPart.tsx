import React from 'react';

interface StickyPartProps {}

export const StickyPart: React.FC<StickyPartProps> = ({}) => {
  return (
    <nav className='bg-bright-red sticky top-0 z-50  w-full px-40 py-2'>
      <p>test</p>
    </nav>
  );
};
