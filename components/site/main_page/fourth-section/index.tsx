import { strings } from '@/utils/strings';
import { Title } from '../../ui/title';
import { SubHeading } from '../../ui/sub-heading';
import Image from 'next/image';
import { Card } from './card';

export default function FourthSection() {
  const {
    main_page: {
      fourth_section: { heading, title, cards },
    },
  } = strings;

  return (
    <div className='mt-10 flex flex-col items-center gap-10 bg-light-grey pb-14 font-nunito md:mt-0'>
      <div className='flex flex-col items-center justify-center gap-3 px-1 pt-16'>
        <SubHeading text={heading} />
        <Title text={title} center={true} />
      </div>
      <div className='flex w-full flex-col justify-center gap-2 md:flex-row'>
        <Card
          src='/images/gardiennage-chien-facile.png'
          alt='macbook-with-doggo'
          title={cards.profile.title}
          text={cards.profile.content}
        />
        <Card
          src='/images/nounou-chien.png'
          alt='iPhone-with-doggo'
          title={cards.happiness.title}
          text={cards.happiness.content}
        />{' '}
        <Card
          src='/images/garde-chien-pictures.png'
          alt='three-photographies-of-girl-with-dog'
          title={cards.meeting.title}
          text={cards.meeting.content}
        />
      </div>
    </div>
  );
}
