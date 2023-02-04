import './globals.css';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />

      <body className={`${montserrat.className}`}>
        <nav>
          <p>Nav</p>
        </nav>
        {children}
      </body>
    </html>
  );
}
