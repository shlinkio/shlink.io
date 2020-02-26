import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLaptopCode, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // eslint-disable-line import/named
import { NavbarToggler } from 'reactstrap';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import GettingStartedContent from '../../content/documentation/getting-started.mdx';
import Footer from '../../components/Footer';
import DocsSearch from '../../components/DocsSearch';

export interface Item {
  text: string;
  link: string;
  icon?: IconProp;
  submenu?: Item[];
}

const menuItems: Item[] = [
  {
    text: 'Docs',
    link: '/documentation',
    icon: faBook,
    submenu: [
      { text: 'Install docker image', link: '/documentation/install-docker-image' },
      { text: 'Install from dist file', link: '/documentation/install-dist-file' },
      { text: 'Serve with swoole', link: '/documentation/serve-with-swoole' },
      { text: 'Classic web server', link: '/documentation/classic-web-server' },
      { text: 'Multiple domains', link: '/documentation/multiple-domains' },
      { text: 'Long-running tasks', link: '/documentation/long-running-tasks' },
    ],
  },
  { text: 'Command line interface', link: '/documentation/command-line-interface', icon: faTerminal },
  {
    text: 'REST API',
    link: '/documentation/api-docs',
    icon: faLaptopCode,
    submenu: [
      { text: 'Authentication', link: '/documentation/api-docs/authentication' },
      { text: 'Error management', link: '/documentation/api-docs/error-management' },
      { text: 'Endpoints', link: 'https://api-spec.shlink.io/' },
    ],
  },
];

interface MenuItemProps {
  link: string;
  active: boolean;
  icon?: IconProp;
}

const MenuItem: FunctionComponent<MenuItemProps> = ({ active, link, children, icon }) => (
  <li className={classNames('nav-item', { 'section-title': icon })}>
    <Link className={classNames('nav-link', { active })} href={link}>
      {icon && <span className="theme-icon-holder mr-2"><FontAwesomeIcon icon={icon} /></span>}
      {children}
    </Link>
  </li>
);

interface LeftMenuToggleProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const LeftMenuToggle: FunctionComponent<LeftMenuToggleProps> = ({ collapsed, toggleSidebar }) => (
  <NavbarToggler className={classNames('docs-menu-toggle', { collapsed })} onClick={toggleSidebar}>
    <span />
    <span />
    <span />
  </NavbarToggler>
);

type SidebarState = 'initial' | 'displayed' | 'hidden';
const classesForState = (state: SidebarState) => {
  if (state === 'initial') {
    return null;
  }

  return { 'sidebar-visible': state === 'displayed', 'sidebar-hidden': state === 'hidden' };
};

const Documentation: FunctionComponent = ({ children }) => {
  const { pathname: currentPage } = useRouter();
  const [ sidebarState, setSidebarVisible ] = useState<SidebarState>('initial');
  const toggleSidebar = () => setSidebarVisible(sidebarState === 'displayed' ? 'hidden' : 'displayed');
  const leftMenuToggle = <LeftMenuToggle collapsed={sidebarState !== 'displayed'} toggleSidebar={toggleSidebar} />;

  return (
    <Layout pageTitle="Documentation" leftMenuToggle={leftMenuToggle} noFooter>
      <div className="docs-wrapper">
        <div className={classNames('docs-sidebar', classesForState(sidebarState))}>
          <div className="top-search-box p-3">
            <DocsSearch />
          </div>

          <nav id="docs-nav" className="docs-nav navbar align-items-start">
            <ul className="section-items list-unstyled nav flex-column pb-3">
              {menuItems.map(({ text, link, icon, submenu = [] }) => (
                <React.Fragment key={text}>
                  <MenuItem link={link} active={currentPage === link} icon={icon}>
                    {text}
                  </MenuItem>
                  {submenu.map(({ text, link }) => (
                    <MenuItem link={link} active={currentPage === link} key={text}>
                      {text}
                    </MenuItem>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </div>

        <div className="docs-content">
          <div className="container">
            <article className="docs-article">
              {children || <GettingStartedContent />}
            </article>
          </div>

          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Documentation;
