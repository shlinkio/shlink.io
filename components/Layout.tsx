import React, { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Menu from './Menu';
import Footer from './Footer';
import SectionHeader from './SectionHeader';

interface LayoutProps {
  pageTitle?: string;
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, pageTitle }) => {
  const siteName = 'Shlink - The URL shortener';
  const title = `${siteName}${pageTitle ? ` | ${pageTitle}` : ''}`;
  const description = 'A self-hosted and PHP-based URL shortener application with CLI and REST interfaces';

  return (
    <React.Fragment>
      <NextSeo
        description={description}
        title={title}
        twitter={{
          site: '@shlinkio',
          handle: '@acelayaa',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          title,
          description,
          type: 'website',
          url: 'https://shlink.io',
          site_name: siteName, // eslint-disable-line
          images: [
            {
              url: 'https://shlink.io/images/shlink-hero.jpg',
              height: 240,
              width: 625,
            },
            {
              url: 'https://pbs.twimg.com/profile_banners/760406054354186240/1470831159/1500x500',
              height: 1500,
              width: 1500,
            },
          ],
        }}
      />

      <Head>
        <meta name="theme-color" content="#4696e5" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <Menu />
      {pageTitle && <SectionHeader>{pageTitle}</SectionHeader>}
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
