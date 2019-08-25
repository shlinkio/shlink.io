import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames';

const Menu = ({ window = global.window }) => {
  const [active, setActive] = useState(false);
  const currentPage = useRouter().pathname;

  useEffect(() => {
    window.onscroll = () => setActive(window.scrollY >= 20);
    return () => (window.onscroll = () => {})
  }, []);

  return (
    <nav id="navbar" className={classNames({ 'active': active })}>
      <a className="logo" href="/">
        <img src="/images/shlink-logo-white.png" />&nbsp;&nbsp;Shlink
      </a>

      <button className="menu-collapser" data-menu=".main-menu"><i className="fa fa-bars" /></button>

      <ul className="menu main-menu">
        <li className={currentPage.startsWith('/features') ? 'active' : ''}>
          <Link href="/features">
            <a><i className="fa fa-bolt" />&nbsp;&nbsp;Features</a>
          </Link>
        </li>
        <li className={currentPage.startsWith('/documentation') ? 'active' : ''}>
          <Link href="/documentation">
            <a><i className="fa fa-book" />&nbsp;&nbsp;Documentation</a>
          </Link>
        </li>
        <li className={currentPage.startsWith('/command-line-interface') ? 'active' : ''}>
          <Link href="/command-line-interface">
            <a><i className="fa fa-terminal" />&nbsp;&nbsp;CLI</a>
          </Link>
        </li>
        <li className={currentPage.startsWith('/api-docs') ? 'active' : ''}>
          <Link href="/api-docs">
            <a><i className="fa fa-server" />&nbsp;&nbsp;API Docs</a>
          </Link>
        </li>
        <li className={currentPage.startsWith('/apps') ? 'active' : ''}>
          <Link href="/apps">
            <a><i className="fa fa-rocket" />&nbsp;&nbsp;Apps</a>
          </Link>
        </li>
        <li>
          <a href={process.env.donateUrl} target="_blank">
            <i className="fa fa-paypal" />&nbsp;&nbsp;Donate
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
