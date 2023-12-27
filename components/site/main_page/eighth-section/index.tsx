import { Title } from '@/components/site/ui/title';
import { strings } from '@/utils/strings';
import SignUpLink from '../../ui/sign-up-link';

export default function EighthSection() {
  return (
    <div className='border-0.5 flex flex-col items-center justify-center gap-8 border-t border-light-grey px-6 py-12'>
      <Title text={strings.main_page.eighth_section.title} size='xl' center />
      <p className='text-center md:w-1/3'>
        {strings.main_page.eighth_section.text}
      </p>
      <SignUpLink variant='registerCard'>Devenez Membre</SignUpLink>
    </div>
  );
}
