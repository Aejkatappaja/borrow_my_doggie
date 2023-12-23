import React from 'react';
import { RegisterCard } from './register-card';
import Image from 'next/image';
import { strings } from '@/utils/strings';
Image;

export const FirstSection: React.FC = () => {
  const {
    main_page: { title, subtitle },
  } = strings;
  return (
    <section className='relative flex h-[30rem] w-full'>
      <Image
        src='/images/girl-with-dog.jpg'
        alt='happy-girl-holding-his-dog'
        fill
        priority
        className='-z-10 object-cover object-center'
      />
      <section className='flex w-full justify-center px-6 md:w-full md:justify-normal md:px-0 md:pl-6 xl:mx-auto xl:w-full xl:max-w-[1200px] xl:pl-0'>
        <div className='flex h-full w-[36rem] flex-col pt-12 text-white '>
          <h1 className='text-center text-4xl font-extrabold tracking-tight'>
            {title}
          </h1>
          <h2 className='pt-2 text-center text-xl font-bold tracking-wide'>
            {subtitle}
          </h2>
          <p className='py-2 text-center font-bold text-green-500'>
            TRUSTPILOT WIDGET
          </p>
          <RegisterCard />
        </div>
      </section>
    </section>
  );
};
