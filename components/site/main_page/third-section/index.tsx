import { strings } from '@/utils/strings';
import { Title } from '../../ui/title';
import { SubHeading } from '../../ui/sub-heading';

export default function ThirdSection() {
  const {
    main_page: {
      third_section: { heading, title },
    },
  } = strings;

  return (
    <div className='special-bg relative mt-10 flex flex-col items-center gap-10 pb-14 md:mt-0'>
      <div className='flex flex-col items-center justify-center gap-3 px-1'>
        <SubHeading text={heading} />
        <Title text={title} center={true} />
      </div>
      <iframe
        src='https://www.youtube.com/embed/oQrIZsqAbtg'
        className='max-h-[360px] max-w-[640px] border md:h-[380px] md:w-[640px]'
      />
    </div>
  );
}
