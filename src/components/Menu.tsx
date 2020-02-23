import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';
import { Collapse, NavbarToggler } from 'reactstrap';
import SocialList from './SocialList';
import InternalLink from './InternalLink';

const Menu: FunctionComponent = () => {
  const [ collapsed, setCollapsed ] = useState(true);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <header className="header fixed-top">
      <div className="container-fluid position-relative">
        <nav className="navbar navbar-expand-lg">
          <div className="site-logo">
            <InternalLink href="/" className="navbar-brand">
              <img
                className="logo-icon mr-2"
                src="/images/shlink-logo-blue.svg"
                alt="logo"
              />
              <span className="logo-text">Shlink</span>
            </InternalLink>
          </div>

          <NavbarToggler className={classNames({ collapsed })} onClick={toggleCollapsed}>
            <span />
            <span />
            <span />
          </NavbarToggler>

          <Collapse isOpen={!collapsed} navbar>
            <SocialList type="inline" className="mt-3 mt-lg-0 mb-lg-0 d-flex ml-lg-5 mr-lg-5" />

            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item mr-lg-4">
                <InternalLink href="/features" className="nav-link">Features</InternalLink>
              </li>
              <li className="nav-item mr-lg-4">
                <InternalLink href="/documentation" className="nav-link">Docs</InternalLink>
              </li>
              <li className="nav-item mr-lg-4">
                <InternalLink href="/command-line-interface" className="nav-link">CLI</InternalLink>
              </li>
              <li className="nav-item mr-lg-4">
                <InternalLink href="/api-docs" className="nav-link">API Docs</InternalLink>
              </li>
              <li className="nav-item mr-lg-0">
                <InternalLink href="/apps" className="nav-link">Apps</InternalLink>
              </li>
            </ul>
          </Collapse>
        </nav>

      </div>
    </header>
  );
};

export default Menu;
