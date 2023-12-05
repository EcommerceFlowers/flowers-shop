import './global.scss';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import ProgressBarClient from '@components/NavProgressBar';
import { MainLayout } from '@layouts/MainLayout';
import { TransitionLayout } from '@layouts/TransitionLayout';
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

export default function RootLayout({ children }: { children: React.ReactNode; params: TAny }) {
  return (
    <html>
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
      <body>
        <Suspense>
          <ProgressBarClient />
        </Suspense>
        <MainLayout>
          <Header />
          <TransitionLayout>
            <>{children}</>
          </TransitionLayout>
          <Footer />
        </MainLayout>
      </body>
    </html>
  );
}
