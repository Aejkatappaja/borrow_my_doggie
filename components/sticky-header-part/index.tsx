import React from 'react';

import Link from 'next/link';
import { StickyHeaderPartLinks } from './links';
import { strings } from '@/utils/strings';
import { raleway } from '@/styles/fonts';

export const StickyHeaderPart: React.FC = () => {
  return (
    <div
      className={`${raleway.className} sticky top-0 z-50 w-full bg-bright-red px-40`}
    >
      <nav className='mx-auto flex max-w-[1200px] items-center justify-between py-3 tracking-tight text-white'>
        {StickyHeaderPartLinks?.map((item) => {
          return (
            <Link key={item.label} href={item.href} className='font-extrabold'>
              {item.label}
            </Link>
          );
        })}
        <button className='rounded-2xl border-2 border-white bg-white px-6 py-[0.36rem] text-sm font-extrabold text-bright-red duration-300 hover:bg-bright-red hover:text-white'>
          {strings.sticky_header_part.button}
        </button>
      </nav>
    </div>
  );
};
