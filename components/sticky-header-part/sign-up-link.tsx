import { links } from '@/utils/links';
import { strings } from '@/utils/strings';
import Link from 'next/link';

export default function SignUpLink({ variant }: { variant?: string }) {
  const {
    sticky_header_part: { button },
  } = strings;
  const { register } = links;

  return (
    <Link
      href={register}
      className={`${
        variant === 'mobileMenu'
          ? 'rounded-none border-none px-0 py-8 font-doggo text-xl'
          : 'rounded-xl text-sm duration-300 hover:bg-bright-red hover:text-white'
      } flex h-8 items-center border-2 border-white bg-white px-6 font-bold text-bright-red `}
    >
      {button}
    </Link>
  );
}
