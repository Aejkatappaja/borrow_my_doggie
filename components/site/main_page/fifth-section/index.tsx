import Image from 'next/image';
import { Title } from '../../ui/title';
import { strings } from '@/utils/strings';
import SignUpLink from '../../ui/sign-up-link';

export default function FifthSection() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 px-6 py-16 pb-14 font-nunito md:mt-0 md:flex-row md:px-0'>
      <Image
        src='/images/garde-chien-emt.jpg'
        width={440}
        height={100}
        alt='ppl-happy-with-dogs'
      />
      <div className='space-y-4 md:w-1/3'>
        <Title text={strings.main_page.fifth_section.title} />
        <p className='pb-2 font-nunito text-sm'>
          Tous les jours de nouveaux toutous se joignent à nous ! Emprunte Mon
          Toutou est une communauté en pleine croissance, avec de nouveaux
          emprunteurs et de nouveaux toutous inscrits tous les jours. <br />
          <br />
          Vous avez la possibilité de partager du bonheur près de chez vous, que
          ce soit pour faire garder votre chien ou pour trouver un toutou avec
          qui partager des moments de joie.
          <br />
          <br /> Et les toutous ne sont pas en reste : plus de sorties, plus de
          caresses, plus de jeux… tout ce dont rêve un toutou !<br />
          <br /> Notre communauté est basée sur le respect des chiens, la
          confiance et l'entraide entre les membres. Le bien-être des toutous
          est tout aussi important pour nous que celui des humains. Alors, si
          cela sonne juste à votre oreille, rejoignez la toutousphère !
        </p>{' '}
        <div>
          <SignUpLink variant='registerCard'>Devenez membre</SignUpLink>
        </div>
      </div>{' '}
    </div>
  );
}
