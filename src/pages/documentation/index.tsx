import React, { FunctionComponent, ReactNode } from 'react';
import Layout from '../../components/Layout';
import SectionMenu, { Item } from '../../components/SectionMenu';
import GettingStartedContent from '../../content/documentation/getting-started.mdx';

const menuItems: Item[] = [
  {
    text: 'Install docker image',
    link: '/documentation/install-docker-image',
  },
  {
    text: 'Install from dist file',
    link: '/documentation/install-dist-file',
  },
  {
    text: 'Serve with swoole',
    link: '/documentation/serve-with-swoole',
  },
  {
    text: 'Classic web server',
    link: '/documentation/classic-web-server',
  },
  {
    text: 'Long-running tasks',
    link: '/documentation/long-running-tasks',
  },
  {
    text: 'Multiple domains',
    link: '/documentation/multiple-domains',
  },
];

interface DocumentationProps {
  children: ReactNode;
}

const Documentation: FunctionComponent<DocumentationProps> = ({ children }) => (
  <Layout pageTitle="Documentation">
    <section className="wrapper">
      <div className="inner alt">
        <section className="spotlight text-only">
          <div className="content">
            <div className="row">

              <div className="3u 12u$(medium) side-menu-container">
                <SectionMenu items={menuItems} />
              </div>

              <div className="9u 12u$(medium) side-menu-contents">
                {children || (
                  <React.Fragment>
                    <header>
                      <h2>Getting started</h2>
                    </header>

                    <GettingStartedContent />
                  </React.Fragment>
                )}
              </div>

            </div>
          </div>
        </section>
      </div>
    </section>
  </Layout>
);

export default Documentation;
