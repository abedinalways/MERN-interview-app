import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import './globals.css';
import { Anek_Bangla, Hind_Siliguri, Inter } from 'next/font/google';

// Inter font
const inter = Inter({ subsets: ['latin'] });

// Anek Bangla font
// const anekBangla = Anek_Bangla({
//   subsets: ['bengali'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap',
// });
const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});


export const metadata = {
  title: 'MERN Stack Interview Preparation | ইন্টারভিউ প্রস্তুতি',
  description:
    'Complete MERN stack interview preparation guide in Bangla and English',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </head>
      <body
        className={`${inter.className} ${hindSiliguri.className} bg-gray-900 text-gray-100`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
