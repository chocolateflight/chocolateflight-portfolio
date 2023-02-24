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
        <section className='grid grid-cols-1 gap-4 overflow-visible pt-2 md:grid-cols-2 md:grid-rows-2 md:max-w-[1100px] md:gap-y-8'>
          {projects.map((project) => (
            <article
              className='flex flex-col gap-1 items-center text-white'
              key={project.id}>
              <Image
                src={project.image}
                alt={project.title}
                className='rounded-md md:w-[60%]'
              />

              <h3 className={`${workSans.className} font-bold`}>{project.title}</h3>
              <p className='text-xs text-center'>{project.tools}</p>

              <p className='text-center break-words hyphens-auto md:w-[60%]'>
                {project.description}
              </p>

              <div className='flex justify-center items-center gap-2'>
                <a
                  href={project.github}
                  className='underline underline-offset-4 p-2 hover:rounded-lg hover:bg-white hover:text-black'>
                  GitHub
                </a>

                <a
                  href={project.live}
                  className={`${
                    project.live ? 'block' : 'hidden'
                  } underline underline-offset-4 p-2 hover:rounded-lg hover:bg-white hover:text-black`}>
                  Live
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
