import React, { FunctionComponent, useLayoutEffect, useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import GettingStartedContent from '../../content/documentation/getting-started.mdx';

export interface Item {
  text: string;
  link: string;
}

const menuItems: Item[] = [
  { text: 'Install docker image', link: '/documentation/install-docker-image' },
  { text: 'Install from dist file', link: '/documentation/install-dist-file' },
  { text: 'Serve with swoole', link: '/documentation/serve-with-swoole' },
  { text: 'Classic web server', link: '/documentation/classic-web-server' },
  { text: 'Multiple domains', link: '/documentation/multiple-domains' },
  { text: 'Long-running tasks', link: '/documentation/long-running-tasks' },
];

const windowIsLarge = (): boolean => window.matchMedia('(min-width: 1200px)').matches;

const Documentation: FunctionComponent = ({ children }) => {
  const { pathname: currentPage } = useRouter();
  const [ isSidebarVisible, setSidebarVisible ] = useState(true);
  const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);
  const getSidebarClasses = () => ({ 'sidebar-visible': isSidebarVisible, 'sidebar-hidden': !isSidebarVisible });

  useLayoutEffect(() => {
    const determineSidebarState = () => setSidebarVisible(windowIsLarge());

    window.addEventListener('resize', determineSidebarState);
    determineSidebarState();

    return () => window.removeEventListener('resize', toggleSidebar);
  }, []);

  return (
    <Layout pageTitle="Documentation">
      <div className="docs-wrapper">
        <div className="docs-logo-wrapper">
          <button
            className="docs-sidebar-toggler docs-sidebar-visible mr-2 d-xl-none"
            type="button"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faList} />
          </button>
        </div>

        <div className={classNames('docs-sidebar', getSidebarClasses())}>
          <nav id="docs-nav" className="docs-nav navbar">
            <ul className="section-items list-unstyled nav flex-column pb-3">
              {menuItems.map(({ text, link }) => (
                <li className={classNames('nav-item section-title', { active: currentPage.includes(link) })} key={text}>
                  <Link className="nav-link" href={link}>
                    {text}
                  </Link>
                </li>
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
        </div>
      </div>
    </Layout>
  );
};

export default Documentation;
