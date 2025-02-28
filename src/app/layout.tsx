import './globals.css';

import type { Metadata } from 'next';
import { ShoppingCart } from 'lucide-react';
import Button from '@/components/buttonAddCart';
import Header from './(home)/header';

export const metadata: Metadata = {
  title: 'Practical Exam',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-blue-400 text-gray-100 antialiased bg-no-repeat bg-top md:bg-right-top'>
        <Header />

        <main className='max-w-[1240px] mx-auto px-5 py-5 '>{children}</main>
      </body>
    </html>
  );
}
