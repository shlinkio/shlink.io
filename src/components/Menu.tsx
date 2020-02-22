import React, { FunctionComponent, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { ExternalLink } from 'react-external-link';
import { Collapse, NavbarToggler } from 'reactstrap';
import './Menu.css';

const Menu: FunctionComponent = () => {
  const [ collapsed, setCollapsed ] = useState(true);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <header className="header fixed-top">
      <div className="container-fluid position-relative">
        <nav className="navbar navbar-expand-lg">
          <div className="site-logo">
            <Link href="/">
              <a className="navbar-brand">
                <img
                  className="logo-icon mr-2"
                  src="/images/shlink-logo-blue.svg"
                  alt="logo"
                />
                <span className="logo-text">Shlink</span>
              </a>
            </Link>
          </div>

          <NavbarToggler className={classNames({ collapsed })} onClick={toggleCollapsed}>
            <span />
            <span />
            <span />
          </NavbarToggler>

          <Collapse isOpen={!collapsed} navbar>
            <ul className="social-list list-inline mt-3 mt-lg-0 mb-lg-0 d-flex ml-lg-5 mr-lg-5">
              <li className="list-inline-item">
                <ExternalLink href="https://github.com/shlinkio/shlink">
                  <i className="fa fa-github fa-fw" />
                </ExternalLink>
              </li>
              <li className="list-inline-item">
                <ExternalLink href="https://twitter.com/shlinkio"><i className="fa fa-twitter fa-fw" /></ExternalLink>
              </li>
              <li className="list-inline-item">
                <ExternalLink href={process.env.donateUrl || ''}><i className="fa fa-paypal fa-fw" /></ExternalLink>
              </li>
            </ul>

            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item mr-lg-4">
                <Link href="/features">
                  <a className="nav-link">Features</a>
                </Link>
              </li>
              <li className="nav-item mr-lg-4">
                <Link href="/documentation">
                  <a className="nav-link">Docs</a>
                </Link>
              </li>
              <li className="nav-item mr-lg-4">
                <Link href="/command-line-interface">
                  <a className="nav-link">CLI</a>
                </Link>
              </li>
              <li className="nav-item mr-lg-4">
                <Link href="/api-docs">
                  <a className="nav-link">API Docs</a>
                </Link>
              </li>
              <li className="nav-item mr-lg-0">
                <Link href="/apps">
                  <a className="nav-link">Apps</a>
                </Link>
              </li>
            </ul>
          </Collapse>
        </nav>

      </div>
    </header>
  );
};

export default Menu;
