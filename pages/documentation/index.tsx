import React, { FunctionComponent, ReactNode } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import SectionMenu, { Item } from '../../components/SectionMenu';

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
                      <h3>Getting started</h3>
                    </header>
                    <p>
                      Shlink is a URL shortener which provides both
                      a <a href="/api-docs">REST</a> and CLI interfaces to interact with it.
                    </p>
                    <p>There are a couple of ways to install and run it, depending on your needs and resources.</p>
                    <ul>
                      <li>
                        You can run Shlink in a container-based infrastructure, using
                        the <Link href="/documentation/install-docker-image"><a>docker image</a></Link>.
                      </li>
                      <li>
                        Alternatively you
                        can <Link href="/documentation/install-dist-file"><a>download a dist file</a></Link> to host
                        it in your machine and serve it with:
                        <ul>
                          <li>
                            <Link href="/documentation/serve-with-swoole"><a>A non-blocking swoole server</a></Link>.
                          </li>
                          <li>
                            <Link href="/documentation/classic-web-server"><a>A classic web server</a></Link> (like
                            Apache or Nginx).
                          </li>
                        </ul>
                      </li>
                    </ul>
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
