import React from 'react';

import Link from 'next/link';
import { StickyHeaderPartLinks as links } from './links';
import { strings } from '@/utils/strings';
import { raleway } from '@/styles/fonts';

export const StickyHeaderPart: React.FC = () => {
  return (
    <div
      className={`${raleway.className} top-0 z-50 hidden w-screen  bg-bright-red md:sticky md:flex md:px-3`}
    >
      <nav className='mx-0 flex items-center justify-between px-2 py-3 tracking-tight text-white md:w-full md:pr-20 lg:max-w-[1200px] xl:mx-auto xl:w-full xl:px-4'>
        {links?.map((item) => {
          return (
            <Link key={item.label} href={item.href} className=' font-bold'>
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
