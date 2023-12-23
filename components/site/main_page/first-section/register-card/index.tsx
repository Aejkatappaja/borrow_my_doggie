import React from 'react';
import { InputRadioUserType } from './input-radio-user-type';
import { strings } from '@/utils/strings';
import SignUpLink from '../../../ui/sign-up-link';

export const RegisterCard: React.FC = () => {
  const {
    main_page: {
      card: {
        select,
        first_choice,
        second_choice,
        span_start,
        members_number,
        span_end,
      },
    },
    sticky_header_part: { button },
  } = strings;

  return (
    <div className='z-10 mt-4 flex w-full flex-col space-y-3 rounded-2xl border border-[#e8e8ea] bg-light-grey px-5 py-6  text-black'>
      <h1 className='font-bold tracking-wide'>{select}</h1>
      <InputRadioUserType id='first_choice' label={first_choice} />
      <InputRadioUserType id='second_choice' label={second_choice} />
      <SignUpLink variant='registerCard' href='/sign-up'>
        {button}
      </SignUpLink>
      <p className='text-center text-sm'>
        {span_start}
        <strong>{members_number} </strong>
        {span_end}
      </p>
    </div>
  );
};
