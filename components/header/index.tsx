'use client';

import React from 'react';
import Image from 'next/image';
import { Mobilemenu } from './mobile-menu';
import { MobileButton } from './mobile-button';
import { useRouter } from 'next/navigation';
import { useMobileMenuStore } from '@/store/useMobileMenuStore';

export const Header: React.FC = () => {
  const router = useRouter();
  const { handleMobileMenuVisible } = useMobileMenuStore();

  const handleRedirectCloseMobileMenu = () => {
    router.push('/');
    handleMobileMenuVisible();
  };

  return (
    <header className='w-screen overflow-x-hidden bg-dark-red  text-white'>
      <nav className='mx-0 flex justify-between px-4 py-3 md:max-w-[1200px] md:px-6 xl:mx-auto xl:px-2'>
        <Image
          src='https://www.empruntemontoutou.com/wp-content/uploads/2021/08/empruntemontoutou-logo-x2_2021.svg'
          width={120}
          height={100}
          alt='logo-emprunte-mon-toutou'
          onClick={handleRedirectCloseMobileMenu}
        />
        <MobileButton />
      </nav>
      <Mobilemenu />
    </header>
  );
};
