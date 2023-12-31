import React from 'react';

import { StickyHeaderPartLinks as links } from './links';

import { raleway } from '@/styles/fonts';
import SignUpLink from '../ui/sign-up-link';
import NavLinks from '../ui/nav-links';
import { strings } from '@/utils/strings';

export const StickyHeaderPart: React.FC = () => {
  const {
    sticky_header_part: { button },
  } = strings;
  return (
    <div
      className={`${raleway.className} top-0 z-50 hidden w-screen  bg-bright-red md:sticky md:flex md:px-3`}
    >
      <nav className=' mx-0 flex items-center justify-between tracking-tight text-white md:w-full md:pl-4 md:pr-20 lg:max-w-[1200px] xl:mx-auto xl:w-full xl:px-2'>
        {links?.map((item) => {
          const { label, href } = item;
          return <NavLinks key={label} href={href} label={label} />;
        })}
        <SignUpLink href='/sign-up'>{button}</SignUpLink>
      </nav>
    </div>
  );
};
