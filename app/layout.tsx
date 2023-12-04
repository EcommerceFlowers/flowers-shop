import '@styles/globals.scss';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import ProgressBarClient from '@components/NavProgressBar';
import { MainLayout } from '@layouts/MainLayout';
import { cx } from '@utils/tools';
import { Metadata } from 'next';
import { Suspense } from 'react';

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'vi-VN' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Florist',
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: TAny;
}) {
  return (
    <html lang={params.lang} className="scroll-smooth">
      <body className={cx('scroll-smooth w-screen overflow-x-hidden font-alex')}>
        <Suspense>
          <ProgressBarClient />
        </Suspense>
        <MainLayout>
          <Header />
          {/* <TransitionLayout> */}
          <>{children}</>
          {/* </TransitionLayout> */}
          <Footer />
        </MainLayout>
      </body>
    </html>
  );
}
