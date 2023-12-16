import React from 'react';
import Image from 'next/image';
import { StickyPart } from './StickyPart';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <header className='w-full bg-dark-red text-white '>
        <nav className='mx-auto max-w-[1200px] py-2'>
          <Image
            src='https://www.empruntemontoutou.com/wp-content/uploads/2021/08/empruntemontoutou-logo-x2_2021.svg'
            width={120}
            height={100}
            alt='logo'
          />
        </nav>
      </header>
    </>
  );
};
