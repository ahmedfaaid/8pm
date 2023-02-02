import { ReactNode } from 'react';
import Navbar from './navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>{children}</main>
    </>
  );
}
