/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import { Work_Sans } from '@next/font/google';

import tictac from '../../public/images/tic-tac-toe.png';

const workSans = Work_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export default function Certificates() {
  return (
    <main className='md:h-full'>
      <div className='h-full flex flex-col items-center justify-center'>
        <div className='grid grid-cols-1 gap-4 overflow-visible pt-2 md:grid-cols-2 md:max-w-[1100px] md:gap-y-8'>
          <div className='flex flex-col gap-2 items-center text-white'>
            <Image src={tictac} alt='Tic Tac Toe' className='rounded-md w-[60%]' />

            <h3 className={`${workSans.className} font-bold`}>Tic Tac Toe</h3>
            <p className='text-xs'>React - TypeScript - Next.js - Tailwind CSS</p>

            <p className='text-center break-words hyphens-auto w-[60%]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, quia.
              Aperiam esse fuga illo velit, corporis vero incidunt facere nihil.
            </p>

            <a href='https://www.github.com' className='underline underline-offset-4'>
              GitHub
            </a>
          </div>

          <div className='flex flex-col gap-2 items-center text-white'>
            <Image src={tictac} alt='Tic Tac Toe' className='rounded-md w-[60%]' />

            <h3 className={`${workSans.className} font-bold`}>Tic Tac Toe</h3>
            <p className='text-xs'>React - TypeScript - Next.js - Tailwind CSS</p>

            <p className='text-center break-words hyphens-auto w-[60%]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, quia.
              Aperiam esse fuga illo velit, corporis vero incidunt facere nihil.
            </p>

            <a href='https://www.github.com' className='underline underline-offset-4'>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
