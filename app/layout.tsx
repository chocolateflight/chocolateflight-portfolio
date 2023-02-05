import './globals.css';

import { Cabin } from '@next/font/google';

import Top from '@/components/layout/Top';
import Bottom from '@/components/layout/Bottom';

const cabin = Cabin({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-cabin',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />

      <body className={`bg-black h-screen`}>
        <div className='md:hidden h-full'>
          <Top small={true} />

          <div className={`${cabin.className} py-[95px] h-full px-[10%]`}>
            {children}
          </div>

          <Bottom small={true} />
        </div>

        {/* ------------------------------------- */}

        <div className='hidden md:block h-full'>
          <Top small={false} />

          <div className={`${cabin.className} py-[150px] h-full px-[20%]`}>
            {children}
          </div>

          <Bottom small={false} />
        </div>
      </body>
    </html>
  );
}
