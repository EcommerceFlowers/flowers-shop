'use client';

import { useAppStore } from '@states/app';
import { cx } from '@utils/tools';
import dynamic from 'next/dynamic';
import { ToastContainer as ToastContainerStatic } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainer = dynamic<React.ComponentProps<typeof ToastContainerStatic>>(
  () => import('react-toastify').then((data) => data.ToastContainer),
  {
    ssr: false,
  }
);

export const MainLayout: IComponent = ({ children }) => {
  // Manual switch darkmode with state
  const { darkMode } = useAppStore();

  return (
    <div
      className={cx(
        {
          dark: darkMode === 'dark',
        },
        'w-full h-full'
      )}>
      <div className="w-full h-full bg-white dark:bg-black transition-all">{children}</div>
      <ToastContainer position="bottom-right" autoClose={2000} pauseOnHover />
    </div>
  );
};
