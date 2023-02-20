'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Work_Sans } from '@next/font/google';

import linkedin from '../../public/icons/linkedin.png';
import letter from '../../public/icons/letter.png';

const workSans = Work_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-work-sans',
});

type Props = {
  small: boolean;
};

export default function Bottom(props: Props) {
  let polyHeight = props.small ? 'h-[95px]' : 'h-[150px]';
  let polyPoint = props.small ? '0,0 0,100 100,100 100,20' : '0,0 0,100 100,100 100,30';
  let iconGap = props.small ? 'gap-8' : 'gap-24';
  let iconFlex = props.small
    ? 'flex flex-col justify-center items-center'
    : 'flex justify-center items-center gap-3';
  let iconWidth = props.small ? 'w-[30px]' : 'w-[40px]';
  let iconText = props.small ? 'text-[11px]' : 'text-[14px]';

  return (
    <div className={`select-none fixed bottom-0 left-0 right-0 w-full ${polyHeight}`}>
      <svg
        className='absolute w-full h-full'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'>
        <polygon fill='#FFFFFF' points={`${polyPoint}`} />
      </svg>

      <div
        className={`absolute flex justify-center ${iconGap} top-[20px] bottom-0 left-0 right-0 my-auto mx-auto w-[80%] h-[60%]`}>
        <div className={`${iconFlex}`}>
          <p
            className={`${props.small ? 'hidden' : ''} ${
              workSans.className
            } ${iconText}`}>
            LinkedIn
          </p>
          <a href='https://www.linkedin.com/in/marc-hostettler'>
            <Image
              src={linkedin}
              alt='LinkedIn'
              className={`${iconWidth} object-contain`}
            />
          </a>
          <p
            className={`${props.small ? '' : 'hidden'} ${
              workSans.className
            } ${iconText}`}>
            LinkedIn
          </p>
        </div>

        <div className={`${iconFlex}`}>
          <Link href='/contact'>
            <Image src={letter} alt='Letter' className={`${iconWidth} object-contain`} />
          </Link>
          <p className={`${workSans.className} ${iconText}`}>Contact</p>
        </div>
      </div>
    </div>
  );
}