import React from 'react';
import Head from 'next/head';
import Menu from './Menu';
import Footer from './Footer';

// import '../public/assets/css/font-awesome.min.css';
// import '../public/assets/css/highlightjs-github.min.css';
import 'font-awesome/css/font-awesome.css';
import '../public/assets/css/main.css';

const Layout = ({ children, currentPage, pageTitle }) => (
  <React.Fragment>
    <Head>
      <title>Shlink - The URL shortener{pageTitle ? ` | ${pageTitle}` : ''}</title>
      <meta name="description" content="A self-hosted and PHP-based URL shortener application with CLI and REST interfaces" />
      <meta name="theme-color" content="#4696e5" />
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
    </Head>

    <Menu currentPage={currentPage} />
    {children}
    <Footer />
  </React.Fragment>
);

export default Layout;
