import { strings } from '@/utils/strings';
import { Title } from '../../ui/title';

export default function SixthSection() {
  const array = strings.main_page.sixth_section.cards.owner.list;
  console.log(array);
  return (
    <div className='flex flex-col items-center justify-center gap-10 bg-light-grey px-6 py-12 pb-14 font-nunito md:mt-0  md:px-0'>
      <Title text={strings.main_page.sixth_section.title} />
      <div className='flex gap-1'>
        <div className='h-[705px] w-[390px] rounded-2xl border'>
          <header className='rounded-t-2xl bg-turquoise py-4'>
            <Title
              center
              variant='card'
              text={strings.main_page.sixth_section.cards.owner.header}
            />
          </header>
          <section className='px-8 py-4'>
            <h2>{strings.main_page.sixth_section.cards.owner.first_title}</h2>
            <ul className='list-tick px-4'>
              {array.map((item: { li: string }, index: number) => {
                const { li } = item;

                return <li key={index}>{li}</li>;
              })}
            </ul>
          </section>
        </div>{' '}
        <div className='w-[390px] border'>
          <header className='rounded-t-2xl border-2 bg-turquoise py-4'>
            <Title
              center
              variant='card'
              text={strings.main_page.sixth_section.cards.owner.header}
            />
          </header>
        </div>{' '}
        <div className='w-[390px] border'>
          <header className='rounded-t-2xl border-2 bg-turquoise py-4'>
            <Title
              center
              variant='card'
              text={strings.main_page.sixth_section.cards.owner.header}
            />
          </header>
        </div>
      </div>
    </div>
  );
}
