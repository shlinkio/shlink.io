import React, { FunctionComponent, ReactNode } from 'react';
import Layout from '../../components/Layout';
import SectionMenu, { Item } from '../../components/SectionMenu';
import Content from '../../components/Content';
import RestApiContent from '../../content/api-docs/rest-api.mdx';

const menuItems: Item[] = [
  {
    text: 'Authentication',
    link: '/api-docs/authentication',
  },
  {
    text: 'Error Management',
    link: '/api-docs/error-management',
  },
  {
    text: 'Endpoints',
    link: 'https://api-spec.shlink.io',
    external: true,
  },
];

interface ApiDocsProps {
  children: ReactNode;
}

const ApiDocs: FunctionComponent<ApiDocsProps> = ({ children }) => (
  <Layout pageTitle="API Docs">
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
                  <Content title="REST API">
                    <RestApiContent />
                  </Content>
                )}
              </div>

            </div>
          </div>
        </section>
      </div>
    </section>
  </Layout>
);

export default ApiDocs;
