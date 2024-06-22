'use client';

import { Inter } from 'next/font/google';
import StoreProvider from '@/providers/ReduxProvider';
import NavBarPanel from "@/components/organisms/NavBarPanel";

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={inter.className}>
      <NavBarPanel />
      <StoreProvider>{children}</StoreProvider>
    </div>
  );
};

export default Layout;
