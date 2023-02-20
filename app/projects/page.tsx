/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import { Work_Sans } from '@next/font/google';

import projects from '@/resources/projects/projects';

const workSans = Work_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export default function Projects() {
  return (
    <main className='md:h-full'>
      <div className='h-full flex flex-col items-center justify-center'>
        <div className='grid grid-cols-1 gap-4 overflow-visible pt-2 md:grid-cols-2 md:grid-rows-2 md:max-w-[1100px] md:gap-y-8'>
          {projects.map((project) => (
            <div
              className='flex flex-col gap-2 items-center text-white'
              key={project.id}>
              <Image
                src={project.image}
                alt='Tic Tac Toe'
                className='rounded-md w-[60%]'
              />

              <h3 className={`${workSans.className} font-bold`}>{project.title}</h3>
              <p className='text-xs'>{project.tools}</p>

              <p className='text-center break-words hyphens-auto w-[60%]'>
                {project.description}
              </p>

              <a href={project.github} className='underline underline-offset-4'>
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
