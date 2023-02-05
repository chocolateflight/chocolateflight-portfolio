import './globals.css';

import Image from 'next/image';
import { Cabin, Work_Sans } from '@next/font/google';

import threelines from '../public/icons/threelines.png';
import logo_b from '../public/icons/logo_b.png';
import linkedin from '../public/icons/linkedin.png';
import letter from '../public/icons/letter.png';

const cabin = Cabin({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-cabin',
});

const workSans = Work_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className={`bg-black h-screen`}>
        <div className='md:hidden h-full'>
          <div className='fixed top-0 left-0 right-0 w-full h-[95px]'>
            <svg
              className='absolute top-0 w-full h-full'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'>
              <polygon fill='#FFFFFF' points='0,100 0,0 100,00 100,80' />
            </svg>

            <div className='flex justify-center items-center absolute top-0 bottom-0 left-2 my-auto mx-0 pb-[20px] h-[95px]'>
              <Image src={logo_b} alt='Logo' className='w-[50px] object-contain' />
              <p className={`${workSans.className} text-lg font-[700]`}>
                Marc Hostettler
              </p>
            </div>

            <Image
              src={threelines}
              alt='Three Lines'
              className='absolute top-0 bottom-0 right-5 my-auto mx-0 pb-[20px] w-[30px]'
            />
          </div>

          <div className={`${cabin.className} py-[95px] h-full px-[10%]`}>{children}</div>

          <div className='fixed bottom-0 left-0 right-0 w-full h-[95px]'>
            <svg
              className='absolute w-full h-full'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'>
              <polygon fill='#FFFFFF' points='0,0 0,100 100,100 100,20' />
            </svg>

            <div className='absolute flex justify-center gap-8 top-[20px] bottom-0 left-0 right-0 my-auto mx-auto w-[80%] h-[60%]'>
              <div className='flex flex-col justify-center items-center'>
                <Image
                  src={linkedin}
                  alt='LinkedIn'
                  className='w-[30px] object-contain'
                />
                <p className={`${workSans.className} text-[11px]`}>LinkedIn</p>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <Image src={letter} alt='Letter' className='w-[30px] object-contain' />
                <p className={`${workSans.className} text-[11px]`}>E-Mail</p>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------- */}

        <div className='hidden md:block h-full'>
          <div className='fixed top-0 left-0 right-0 w-full h-[150px]'>
            <svg
              className='absolute top-0 w-full h-full'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'>
              <polygon fill='#FFFFFF' points='0,100 0,0 100,00 100,70' />
            </svg>
            <Image
              src={threelines}
              alt='Three Lines'
              className='absolute top-0 bottom-0 right-5 my-auto mx-0 pb-[45px] w-[40px]'
            />
            <div className='flex justify-center items-center absolute top-0 bottom-0 left-2 my-auto mx-0 pb-[45px] h-[150px]'>
              <Image src={logo_b} alt='Logo' className='w-[90px] object-contain' />
              <p className={`${workSans.className} text-3xl font-[700]`}>
                Marc Hostettler
              </p>
            </div>
          </div>

          <div className={`${cabin.className} py-[150px] h-full px-[20%]`}>{children}</div>

          <div className='fixed bottom-0 left-0 right-0 w-full h-[150px]'>
            <svg
              className='absolute w-full h-full'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'>
              <polygon fill='#FFFFFF' points='0,0 0,100 100,100 100,30' />
            </svg>

            <div className='absolute flex justify-center gap-24 top-[20px] bottom-0 left-0 right-0 my-auto mx-auto w-[80%] h-[60%]'>
              <div className='flex justify-center items-center gap-3'>
                <p className={`${workSans.className} text-[14px]`}>LinkedIn</p>
                <Image
                  src={linkedin}
                  alt='LinkedIn'
                  className='w-[50px] object-contain'
                />
              </div>

              <div className='flex justify-center items-center gap-3'>
                <Image src={letter} alt='Letter' className='w-[50px] object-contain' />
                <p className={`${workSans.className} text-[14px]`}>E-Mail</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
