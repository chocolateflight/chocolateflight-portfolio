/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import { Work_Sans } from '@next/font/google';

import certificates from '@/resources/certificates/certificates';

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
          {certificates.map((certificate) => (
            <div className='flex flex-col gap-2 items-center text-white' key={certificate.id}>
              <Image src={certificate.image} alt='Tic Tac Toe' className='rounded-md w-[60%]' />

              <h3 className={`${workSans.className} font-bold`}>{certificate.title}</h3>
              <p className='text-xs'>{certificate.issuer}</p>

              <p className='text-center break-words hyphens-auto w-[60%]'>
                {certificate.description}
              </p>

              <a href={certificate.verify} className='underline underline-offset-4 p-2 hover:rounded-lg hover:bg-white hover:text-black'>
                Verify Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
