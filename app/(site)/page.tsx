import Image from 'next/image';

export default function Home() {
  return (
    <main className=' flex  flex-col overflow-hidden '>
      test
      <div className='relative h-[30rem] w-screen '>
        <Image
          src='/images/girl-with-dog.jpg'
          sizes='100vw'
          fill
          // Make the image display full width

          alt='lol'
          className='object-cover'
          priority
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
