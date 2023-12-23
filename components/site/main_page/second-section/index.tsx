import Image from 'next/image';

export default function SecondSection() {
  return (
    <div className='flex w-full border px-36 pt-20'>
      <Image
        src='/images/rencontre-garde-chien.png'
        height={300}
        width={550}
        alt='rencontre-garde-chien'
      />
    </div>
  );
}
