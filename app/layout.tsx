import './globals.css';
import { Cabin } from '@next/font/google';

const cabin = Cabin({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-cabin',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className={`${cabin.className} bg-black h-screen`}>
        <div className='md:hidden'>
          <div className='fixed top-0 left-0 right-0 w-full h-[95px]'>
            <svg
              className='absolute top-0 w-full h-full'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'>
              <polygon fill='#FFFFFF' points='0,100 0,0 100,00 100,80' />
            </svg>
          </div>

          <div className='py-[95px]'>{children}</div>

          <div className='fixed bottom-0 left-0 right-0 w-full h-[95px]'>
            <svg
              className='absolute w-full h-full'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'>
              <polygon fill='#FFFFFF' points='0,0 0,100 100,100 100,20' />
            </svg>
          </div>
        </div>

        {/* ------------------------------------- */}

        <div className='hidden md:block'>
          <div className='absolute top-0 left-0 right-0 w-full h-[150px]'>
            <svg
              className='absolute top-0 w-full h-full'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'>
              <polygon fill='#FFFFFF' points='0,100 0,0 100,00 100,70' />
            </svg>
          </div>

          <div className='py-[150px]'>{children}</div>

          <div className='absolute bottom-0 left-0 right-0 w-full h-[150px]'>
            <svg
              className='absolute w-full h-full'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'>
              <polygon fill='#FFFFFF' points='0,0 0,100 100,100 100,30' />
            </svg>
          </div>
        </div>
      </body>
    </html>
  );
}
