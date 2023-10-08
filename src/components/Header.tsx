import classNames from 'classnames';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler } from 'reactstrap';
import { InternalLink } from './InternalLink';
import { SocialList } from './SocialList';

type MenuItemProps = PropsWithChildren<{
  to: string;
  active: boolean;
  isLast?: boolean;
}>;

const MenuItem: FC<MenuItemProps> = ({ to, children, isLast, active }) => (
  <li className={classNames('nav-item', { 'me-lg-0': isLast, 'me-lg-4': !isLast, active })}>
    <InternalLink href={to} className="nav-link">{children}</InternalLink>
  </li>
);

export interface HeaderProps {
  currentPage: string;
  leftMenuToggle?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ leftMenuToggle, currentPage }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => setCollapsed(!collapsed);
  const isBaseDocsActive = currentPage.startsWith('/documentation')
    && !currentPage.includes('command-line-interface')
    && !currentPage.includes('api-docs');

  return (
    <header className="header fixed-top">
      <div className="container-fluid position-relative">
        <Navbar expand="lg">
          <div className="site-logo">
            {leftMenuToggle}
            <InternalLink href="/" className="navbar-brand">
              <img
                className="logo-icon me-2"
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
            <SocialList type="inline" className="mt-3 mt-lg-0 mb-lg-0 d-flex ms-lg-5 me-lg-5" />

            <ul className="navbar-nav ms-lg-auto">
              <MenuItem to="/features" active={currentPage.startsWith('/features')}>Features</MenuItem>
              <MenuItem to="/apps" active={currentPage.startsWith('/apps')}>Apps</MenuItem>
              <MenuItem to="/documentation" active={isBaseDocsActive} isLast>Documentation</MenuItem>
            </ul>
          </Collapse>
        </Navbar>

      </div>
    </header>
  );
};
