import { links } from '@/utils/links';
import { strings } from '@/utils/strings';
import Link from 'next/link';
interface ISignUpLink {
  variant?: 'mobileMenu' | 'registerCard';
}

export default function SignUpLink({ variant }: ISignUpLink) {
  const {
    sticky_header_part: { button },
  } = strings;
  const { register } = links;
  let className: string;

  switch (variant) {
    case 'mobileMenu':
      className =
        'pl-5 rounded-none border-none px-0 py-6 font-doggo text-xl text-dark-red bg-white';
      break;
    case 'registerCard':
      className =
        'py-3 text-center rounded-2xl border bg-dark-red text-lg font-extrabold text-white hover:text-bright-red border-dark-red hover:bg-white';
      break;
    default:
      className =
        'rounded-xl text-sm duration-300 hover:bg-bright-red hover:text-white flex h-8 items-center border-2 border-white bg-white px-6 font-bold text-bright-red ';
      break;
  }

  return (
    <Link href={register} className={`${className}`}>
      {button}
    </Link>
  );
}
