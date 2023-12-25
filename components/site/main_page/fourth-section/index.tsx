import { strings } from '@/utils/strings';
import { Title } from '../../ui/title';
import { SubHeading } from '../../ui/sub-heading';

export default function FourthSection() {
  const {
    main_page: {
      fourth_section: { heading, title },
    },
  } = strings;
  return (
    <div className='mt-10 flex flex-col items-center gap-10 bg-light-grey pb-14 md:mt-0'>
      <div className='flex flex-col items-center justify-center gap-3 px-1 pt-16'>
        <SubHeading text={heading} />
        <Title text={title} center={true} />
      </div>
    </div>
  );
}
