import './global.scss';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import ProgressBarClient from '@components/NavProgressBar';
import { MainLayout } from '@layouts/MainLayout';
import { TransitionLayout } from '@layouts/TransitionLayout';
import { createClient } from '@supabase/supabase-js';
import { Suspense } from 'react';

const supabaseUrl = 'https://ruakyxuymdfcwfsxldfc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1YWt5eHV5bWRmY3dmc3hsZGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNjA1MjEsImV4cCI6MjAxNTYzNjUyMX0.dzD2ZRhYV8lWDPIphq8m2hijRp8ttIYsJLk-Mj8F4sg';

export const supabase = createClient(supabaseUrl, supabaseKey);

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
