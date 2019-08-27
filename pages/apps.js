import React from 'react';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';

const Apps = () => (
  <Layout pageTitle="Apps">
    <section className="wrapper">
      <div className="inner alt">
        <section className="spotlight">
          <div className="image app">
            <img src="/images/apps/shlink-web-client.png" alt="Shlink web client" />
          </div>
          <div className="content">
            <h3>
              Shlink web client
              <a className="external-app-link" target="_blank" href="https://github.com/shlinkio/shlink-web-client/releases/latest">
                <i className="fa fa-external-link" />
              </a>
            </h3>
            <p>
              Manage any number of Shlink servers with this React progressive web application.
              <br />
              See beautiful charts with your visit stats and easily create new short URLs.
              <br />
              You can self-host it yourself or try it from <a href="https://app.shlink.io" target="_blank">https://app.shlink.io</a>.
            </p>
          </div>
        </section>
      </div>
    </section>
  </Layout>
);

export default Apps;
