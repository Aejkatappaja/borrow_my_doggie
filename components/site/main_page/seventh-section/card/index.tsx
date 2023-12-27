import Image from 'next/image';

export interface ICard {
  src: string;
  text: string;
  alt: string;
}

export default function Card({ src, text, alt }: ICard) {
  return (
    <div className='flex w-96 flex-col items-center px-7'>
      <div className='relative h-[158px] w-[300px] '>
        <Image src={src} fill alt={alt} />
      </div>
      <em className='text-center font-normal'>" {text} "</em>
    </div>
  );
}
