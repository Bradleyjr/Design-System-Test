import React from 'react';
import { Header, HeaderProps } from '../../organisms/Header';
import { Footer, FooterProps } from '../../organisms/Footer';
import './MainLayout.css';

export interface MainLayoutProps {
  /** Header configuration */
  headerProps?: HeaderProps;
  /** Footer configuration */
  footerProps?: FooterProps;
  /** Page content */
  children: React.ReactNode;
  /** Container width */
  containerWidth?: 'full' | 'contained';
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  headerProps,
  footerProps,
  children,
  containerWidth = 'contained',
}) => {
  return (
    <div className="ds-main-layout">
      {headerProps && <Header {...headerProps} />}
      <main className={`ds-main-layout__content ds-main-layout__content--${containerWidth}`}>
        {children}
      </main>
      {footerProps && <Footer {...footerProps} />}
    </div>
  );
};
