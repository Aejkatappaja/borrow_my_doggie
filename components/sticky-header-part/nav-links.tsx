'use client';

import Link from 'next/link';

interface INavLinks {
  href: string;
  label: string;
  variant?: string;
  onClick?: () => void;
}

export default function NavLinks({ href, label, variant, onClick }: INavLinks) {
  return (
    <Link
      href={href}
      className={`${
        variant === 'mobileMenu'
          ? 'border-none px-5 font-nunito text-xl font-normal duration-500 hover:translate-x-2 hover:border-none'
          : ''
      } flex h-full items-center border-t-4 border-t-transparent py-4 font-bold hover:border-t-white`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
