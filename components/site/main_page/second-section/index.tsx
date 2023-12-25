import { strings } from '@/utils/strings';
import Image from 'next/image';
import { Card } from './card';

export default function SecondSection() {
  const {
    main_page: {
      type_card_borrower: {
        title: borrower_title,
        first_string: borrower_first_string,
        second_string: borrower_second_string,
        paragraph: borrower_paragraph,
      },
      type_card_owner: {
        title: owner_title,
        first_string: owner_first_string,
        second_string: owner_second_string,
        paragraph: owner_paragraph,
      },
    },
  } = strings;

  return (
    <div className='mt-52 flex w-full flex-col justify-center md:mt-8 md:h-[27rem] md:flex-row md:px-10 xl:px-40'>
      <div className='relative h-40 w-full md:h-[26rem] md:w-[120rem] xl:w-2/4 2xl:mt-6 2xl:h-[20rem] 2xl:w-1/3'>
        <Image
          src='/images/rencontre-garde-chien.png'
          fill
          alt='rencontre-garde-chien'
          className='object-contain'
        />
      </div>
      <Card
        title={borrower_title}
        first_string={borrower_first_string}
        second_string={borrower_second_string}
        paragraph={borrower_paragraph}
      />
      <Card
        title={owner_title}
        first_string={owner_first_string}
        second_string={owner_second_string}
        paragraph={owner_paragraph}
      />
    </div>
  );
}
