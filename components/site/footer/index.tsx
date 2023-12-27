import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='w-full bg-[#efeeee] pb-8'>
      <div className='bg-footer h-44 w-full bg-[length:2700px_300px] bg-center bg-no-repeat' />
      <p className='font-nuno py-20 text-center text-xl'>
        Project made by &nbsp;
        <a
          href='https://github.com/Aejkatappaja'
          target='_blank'
          className='font-doggo text-2xl font-bold text-bright-red'
        >
          Frank
        </a>
      </p>
    </footer>
  );
}
