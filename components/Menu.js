import React from 'react';
import Link from 'next/link'

const Menu = ({ currentPage }) => (
  <nav id="navbar">
    <a className="logo" href="/">
      <img src="/static/images/shlink-logo-white.png" />&nbsp;&nbsp;Shlink
    </a>

    <button className="menu-collapser" data-menu=".main-menu"><i className="fa fa-bars" /></button>

    <ul className="menu main-menu">
      <li className={currentPage === 'features' ? 'active' : ''}>
        <Link href="/features">
          <a><i className="fa fa-bolt" />&nbsp;&nbsp;Features</a>
        </Link>
      </li>
      <li className={currentPage === 'documentation' ? 'active' : ''}>
        <Link href="/documentation">
          <a><i className="fa fa-book" />&nbsp;&nbsp;Documentation</a>
        </Link>
      </li>
      <li className={currentPage === 'command-line-interface' ? 'active' : ''}>
        <Link href="/command-line-interface">
          <a><i className="fa fa-terminal" />&nbsp;&nbsp;CLI</a>
        </Link>
      </li>
      <li className={currentPage === 'api-docs' ? 'active' : ''}>
        <Link href="api-docs">
          <a><i className="fa fa-server" />&nbsp;&nbsp;API Docs</a>
        </Link>
      </li>
      <li className={currentPage === 'apps' ? 'active' : ''}>
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

export default Menu;
