import React from 'react';
import Layout from '../../components/Layout';
import SectionMenu from '../../components/SectionMenu';

const menuItems = [
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
    link: '/swagger-ui/index.html',
    external: true,
  },
];

const ApiDocs = ({ children }) => (
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
                  <React.Fragment>
                    <header>
                      <h3>REST API</h3>
                    </header>

                    <p>Shlink provides a REST API that can be used to integrate the short URLs management on any system or application.</p>
                    <p>All the requests return JSON-encoded responses and semantic status codes, so it should be easy to
                      implement client apps that consume this API.
                    </p>
                    <p>However, if an unexpected error occurs, the system could end returning HTML. To prevent this, always
                      pass the <code>Accept</code> header with the <code>application/json</code> value.
                    </p>
                    <p>This API supports <a
                      href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"
                      target="_blank"
                    >CORS
                    </a> (Cross domain), automatically generating
                      the <code>Access-Control-*</code> headers and managing OPTIONS requests, so it can be consumed from
                      web clients hosted on different domains.
                    </p>
                    <p>Follow the documentation in order to see how to manage errors and perform requests correctly.</p>
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

export default ApiDocs;
