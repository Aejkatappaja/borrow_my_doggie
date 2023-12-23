import React from 'react';
import SignUpLink from '../ui/sign-up-link';
import { MobileLinksFullList as links } from '../sticky-header-part/links';
import NavLinks from '../ui/nav-links';
import { useMobileMenuStore } from '@/store/useMobileMenuStore';
import { strings } from '@/utils/strings';

export const Mobilemenu: React.FC = () => {
  const { handleMobileMenuVisible, isMobileMenuVisible } = useMobileMenuStore();
  const {
    sticky_header_part: { button },
  } = strings;

  return (
    <>
      <div
        className={`${
          isMobileMenuVisible ? 'flex flex-col pb-3 md:hidden' : 'hidden'
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
        <SignUpLink variant={'mobileMenu'} href='/sign-up'>
          {button}
        </SignUpLink>
      </div>
    </>
  );
};
