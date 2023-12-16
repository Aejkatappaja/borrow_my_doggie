import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div className='relative h-[30rem] w-full '>
        <Image
          src='/images/girl-with-dog.jpg'
          fill
          alt='lol'
          className='object-cover'
        />
      </div>{' '}
      {/* <div className='relative h-[30rem] w-full '>
        <Image
          src='/images/girl-with-dog.jpg'
          fill
          alt='lol'
          className='object-cover'
        />
      </div> */}
    </main>
  );
}
