import * as React from 'react';
import DrawerMenu from '../DesignSystem/DrawerMenu/DrawerMenu';
import Footer from '../Footer';
import Header from '../Header';

export interface ILayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      <DrawerMenu />
      {children}
      <Footer />
    </>
  );
}

