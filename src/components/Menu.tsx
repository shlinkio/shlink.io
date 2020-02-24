import React, { FunctionComponent, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { Collapse, NavbarToggler, Navbar } from 'reactstrap';
import { useRouter } from 'next/router';
import SocialList from './SocialList';
import InternalLink from './InternalLink';

interface MenuItemProps {
  to: string;
  active: boolean;
  isLast?: boolean;
}

const MenuItem: FunctionComponent<MenuItemProps> = ({ to, children, isLast, active }) => (
  <li className={classNames('nav-item', { 'mr-lg-0': isLast, 'mr-lg-4': !isLast, active })}>
    <InternalLink href={to} className="nav-link">{children}</InternalLink>
  </li>
);

export interface MenuProps {
  leftMenuToggle?: ReactNode;
}

const Menu: FunctionComponent<MenuProps> = ({ leftMenuToggle }) => {
  const [ collapsed, setCollapsed ] = useState(true);
  const toggleCollapsed = () => setCollapsed(!collapsed);
  const { pathname: currentPage } = useRouter();

  return (
    <header className="header fixed-top">
      <div className="container-fluid position-relative">
        <Navbar expand="lg">
          <div className="site-logo">
            {leftMenuToggle}
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
              <MenuItem to="/features" active={currentPage.startsWith('/features')}>Features</MenuItem>
              <MenuItem to="/documentation" active={currentPage.startsWith('/documentation')}>Docs</MenuItem>
              <MenuItem to="/command-line-interface" active={currentPage.startsWith('/command-line-interface')}>
                CLI
              </MenuItem>
              <MenuItem to="/api-docs" active={currentPage.startsWith('/api-docs')}>API Docs</MenuItem>
              <MenuItem to="/apps" active={currentPage.startsWith('/apps')} isLast>Apps</MenuItem>
            </ul>
          </Collapse>
        </Navbar>

      </div>
    </header>
  );
};

export default Menu;
