'use client';

import { useMobileMenuStore } from '@/store/useMobileMenuStore';
import { strings } from '@/utils/strings';
import React from 'react';

export const MobileButton: React.FC = () => {
  const { handleMobileMenuVisible } = useMobileMenuStore();
  const { header } = strings;
  const { mobile_menu } = header;

  return (
    <ul
      className='flex h-12 w-12 cursor-pointer flex-col items-center justify-center space-y-1 rounded-md bg-bright-red pt-1 md:hidden'
      onClick={handleMobileMenuVisible}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <li key={index} className='h-[0.15rem] w-8 bg-white'></li>
      ))}
      <h1 className='text-xs font-bold'>{mobile_menu}</h1>
    </ul>
  );
};
