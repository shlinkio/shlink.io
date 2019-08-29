import React, { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';
import Menu from './Menu';
import Footer from './Footer';
import SectionHeader from './SectionHeader';

interface LayoutProps {
  pageTitle?: string;
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, pageTitle }) => (
  <React.Fragment>
    <Head>
      <title>Shlink - The URL shortener{pageTitle ? ` | ${pageTitle}` : ''}</title>
      <meta name="description" content="A self-hosted and PHP-based URL shortener application with CLI and REST interfaces" />
      <meta name="theme-color" content="#4696e5" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>

    <Menu />
    {pageTitle && <SectionHeader>{pageTitle}</SectionHeader>}
    {children}
    <Footer />
  </React.Fragment>
);

export default Layout;
