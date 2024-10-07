import './globals.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';
import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';

import LoginModal from '@/app/components/modals/login-modal';
import ClientOnly from '@/app/components/provider/client-only';
import RegisterModal from '@/app/components/modals/register-modal';

const pretendard = localFont({
  src: '../../src/app/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: '크래빗',
  description: 'Craft Your Habit 습관 형성의 시작점',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable}} ${roboto.variable} antialiased`}
    >
      <body className="font-pretendard">
        <ClientOnly>
          {children}
          <LoginModal />
          <RegisterModal />
        </ClientOnly>
      </body>
    </html>
  );
}
