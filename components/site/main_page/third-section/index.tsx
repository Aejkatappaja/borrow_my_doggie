import { strings } from '@/utils/strings';
import { Title } from '../../ui/title';

export default function ThirdSection() {
  return (
    <div className='special-bg relative mt-10 flex flex-col items-center gap-10 pb-14 md:mt-0'>
      <div className='flex flex-col items-center justify-center gap-3 px-1'>
        <strong className='text-2xl font-bold tracking-tight'>
          Présentation du concept
        </strong>
        <Title text={strings.site} center={true} />
      </div>
      <iframe
        src='https://www.youtube.com/embed/oQrIZsqAbtg'
        className='max-h-[360px] max-w-[640px] border md:h-[380px] md:w-[640px]'
      />
    </div>
  );
}
