/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from 'next/link';

type Props = {
  showMenu: boolean;
  toggleMenu: () => void;
};

export default function Menu(props: Props) {
  const toggleMenu = () => {
    props.toggleMenu();
  };
  return (
    <nav
      className={`${
        props.showMenu ? 'open' : ''
      } menu absolute flex flex-col items-center top-[75px] left-0 w-full h-full bg-white h-[250px] pt-[25px] md:top-[105px] md:pt-[50px] md:h-[120px]`}>
      <ul className='w-[30%] flex flex-col items-center md:flex-row md:justify-center md:gap-12 md:w-full'>
        <li
          className='cursor-pointer p-2 text-center text-lg hover:rounded-lg hover:bg-black hover:text-white'
          onClick={toggleMenu}>
          <Link href='/'>Home</Link>
        </li>
        <li
          className='cursor-pointer p-2 text-center text-lg hover:rounded-lg hover:bg-black hover:text-white'
          onClick={toggleMenu}>
          <Link href='/projects'>Projects</Link>
        </li>
        <li
          className='cursor-pointer p-2 text-center text-lg hover:rounded-lg hover:bg-black hover:text-white'
          onClick={toggleMenu}>
          <Link href='/certificates'>Certificates</Link>
        </li>
        <li
          className='cursor-pointer p-2 text-center text-lg hover:rounded-lg hover:bg-black hover:text-white'
          onClick={toggleMenu}>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}