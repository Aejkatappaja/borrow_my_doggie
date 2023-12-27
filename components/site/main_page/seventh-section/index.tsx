import { strings } from '@/utils/strings';
import Card from './card';

export default function SeventhSection() {
  const {
    main_page: {
      seventh_section: { france_3, france_bleu, femme_actuelle },
    },
  } = strings;

  return (
    <div className='flex flex-col items-center justify-center px-6 py-12 md:flex-row md:items-start'>
      <Card
        src='/images/france3-logo.jpg'
        alt='logo-france-3'
        text={france_3}
      />
      <Card
        src='/images/francebleu-logo.jpg'
        alt='logo-france-bleu'
        text={france_bleu}
      />
      <Card
        src='/images/femme-actuelle-logo.jpg'
        alt='logo-femme-actuelle'
        text={femme_actuelle}
      />
    </div>
  );
}
