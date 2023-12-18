import React from 'react';
import SignUpLink from '../sticky-header-part/sign-up-link';
import { MobileLinksFullList as links } from '../sticky-header-part/links';
import NavLinks from '../sticky-header-part/nav-links';
import { useMobileMenuStore } from '@/store/useMobileMenuStore';

export const Mobilemenu: React.FC = () => {
  const { handleMobileMenuVisible, isMobileMenuVisible } = useMobileMenuStore();

  return (
    <>
      <div
        className={`${
          isMobileMenuVisible ? 'flex flex-col pb-2 md:hidden' : 'hidden'
        } `}
      >
        {links?.map((item) => {
          const { label, href } = item;
          return (
            <NavLinks
              key={label}
              href={href}
              label={label}
              onClick={handleMobileMenuVisible}
              variant='mobileMenu'
            />
          );
        })}
        <SignUpLink variant={'mobileMenu'} />
      </div>
    </>
  );
};
