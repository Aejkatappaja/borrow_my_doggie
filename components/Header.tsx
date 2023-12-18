import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className='w-screen overflow-x-hidden bg-dark-red text-white'>
      <nav className='mx-0 px-5 py-3 md:max-w-[1200px] xl:mx-auto'>
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
