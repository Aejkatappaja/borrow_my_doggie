import { strings } from '@/utils/strings';
import { Title } from '../../ui/title';
import { Card } from './card';

async function fetchData() {
  const data1 = await strings.main_page.sixth_section.cards.owner;
  const data2 = await strings.main_page.sixth_section.cards.borrower;
  const data3 = await strings.main_page.sixth_section.cards.doggos;

  return [data1, data2, data3];
}

export default async function SixthSection() {
  const [data1, data2, data3] = await fetchData();

  return (
    <div className='flex flex-col items-center justify-center gap-10 bg-light-grey px-6 py-12 pb-14 font-nunito md:mt-0 md:px-0'>
      <Title text={strings.main_page.sixth_section.title} center size='xl' />
      <div className='flex flex-col gap-6 md:flex-row md:gap-2 md:px-6'>
        <Card color='bg-turquoise' data={data1} />
        <Card color='bg-light-green' data={data2} />
        <Card color='bg-bright-orange' data={data3} />
      </div>
    </div>
  );
}
