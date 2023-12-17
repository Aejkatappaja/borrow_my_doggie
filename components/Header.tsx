import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className='w-full bg-dark-red text-white'>
      <nav className='mx-auto max-w-[1200px] px-2 py-3'>
        <Link href='/'>
          <Image
            src='https://www.empruntemontoutou.com/wp-content/uploads/2021/08/empruntemontoutou-logo-x2_2021.svg'
            width={120}
            height={100}
            alt='logo-emprunte-mon-toutou'
          />
        </Link>
      </nav>
    </header>
  );
};
