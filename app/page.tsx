/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import portrait from '../public/images/img_portrait.jpg';

export default function Home() {
  return (
    <main className='md:h-full'>
      <div className='h-full flex flex-col items-center justify-center'>
        <section className='flex flex-col items-center gap-4 overflow-visible md:flex-row md:max-w-[1100px]'>
          <div className='flex flex-col items-center gap-4 md:justify-center'>
            <Image
              src={portrait}
              alt='Portrait'
              className='w-[180px] mt-4 rounded-full md:min-w-[300px]'
            />
          </div>
          <article className='flex flex-col gap-2 md:items-start'>
            <h1 className='text-2xl text-white text-center'>Welcome to my website!</h1>
            <p className='text-white text-justify text-[14px] break-words hyphens-auto md:mb-0 md:text-[16px]'>
              Hello and welcome! My name is Marc Hostettler and I am a 25-year-old
              Business Administration student and Organizational Development intern. With
              9 years of experience in various business roles, I have developed a passion
              for continuous learning and growth. In 2022, I have started teaching myself
              Web Development and am eager to apply my newfound skills and gain practical
              experiences. Have a look around my site to see some of my projects. Want to know more about myself? Visit my LinkedIn Profile, let's connect!
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}