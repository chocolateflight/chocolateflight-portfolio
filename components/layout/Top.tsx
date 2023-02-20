'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Work_Sans } from '@next/font/google';

import { useState } from 'react';

import Menu from '../menu/Menu';

import threelines from '../../public/icons/threelines.png';
import logo_b from '../../public/icons/logo_b.png';

const workSans = Work_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-work-sans',
});

type Props = {
  small: boolean;
};

export default function Top(props: Props) {
  let polyHeight = props.small ? 'h-[95px]' : 'h-[150px]';
  let polyPoint = props.small ? '0,100 0,0 100,0 100,80' : '0,100 0,0 100,0 100,70';
  let polyPad = props.small ? 'pb-[20px]' : 'pb-[45px]';
  let polyWidth = props.small ? 'w-[30px]' : 'w-[40px]';
  let logoWidth = props.small ? 'w-[50px]' : 'w-[90px]';
  let polyText = props.small ? 'text-lg' : 'text-3xl';

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full ${polyHeight}`}>
      <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
      <svg
        className='absolute top-0 w-full h-full'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'>
        <polygon fill='#FFFFFF' points={`${polyPoint}`} />
      </svg>

      <Image
        src={threelines}
        alt='Three Lines'
        className={`absolute top-0 bottom-0 right-5 my-auto mx-0 cursor-pointer ${polyPad} ${polyWidth}`}
        onClick={toggleMenu}
      />

      <div
        className={`flex justify-center items-center absolute top-0 bottom-0 left-2 my-auto mx-0 ${polyPad} ${polyHeight}`}>
        <Link href='/'>
          <Image src={logo_b} alt='Logo' className={`${logoWidth} object-contain`} />
        </Link>
        <p className={`select-none ${workSans.className} ${polyText} font-[700]`}>
          Marc Hostettler
        </p>
      </div>
    </nav>
  );
}