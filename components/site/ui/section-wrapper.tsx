import { PropsWithChildren } from 'react';

export interface ISectionWrapper extends PropsWithChildren {
  background?: string;
}

export default function SectionWrapper({
  background,
  children,
}: ISectionWrapper) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-10 px-6 py-12 pb-14 font-nunito md:mt-0 md:flex-row md:px-0 ${background}`}
    >
      {children}
    </div>
  );
}
