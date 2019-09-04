import React, { FunctionComponent } from 'react';
import { ExternalLink } from 'react-external-link';
import Layout from '../components/Layout';

const Features: FunctionComponent = () => (
  <Layout pageTitle="Features">
    <section className="wrapper">
      <div className="inner alt">
        <section className="spotlight">
          <div className="image">
            <i className="fa fa-scissors feature-image" />
          </div>
          <div className="content">
            <h3>URL shortening</h3>
            <p>Obviously, Shlink {'wouldn\'t'} be any good if it {'wasn\'t'} capable of shortening URLs.</p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <i className="fa fa-bar-chart feature-image" />
          </div>
          <div className="content">
            <h3>Visit stats</h3>
            <p>Track all the visits to your short URLs, including stats like location, browser or referer.</p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <i className="fa fa-envelope-o feature-image" />
          </div>
          <div className="content">
            <h3>Emails tracking</h3>
            <p>Generate a 1px transparent image that can be used to track emails.</p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <i className="fa fa-exchange feature-image" />
          </div>
          <div className="content">
            <h3>Third party integrations</h3>
            <p>
              Easily make third party tools use shlink to shorten URLs by using a{' '}
              <ExternalLink href="https://api-spec.shlink.io/#/Short%20URLs/shortenUrl">
                single-request API endpoint
              </ExternalLink>.
            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <i className="fa fa-puzzle-piece feature-image" />
          </div>
          <div className="content">
            <h3>Custom slugs</h3>
            <p>Make your shortened URLs use a custom slug to easily identify campaigns.</p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <i className="fa fa-qrcode feature-image" />
          </div>
          <div className="content">
            <h3>QR Codes</h3>
            <p>Generate QR codes on the fly pointing to your short URLs.</p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <i className="fa fa-image feature-image" />
          </div>
          <div className="content">
            <h3>Previews</h3>
            <p>Get previews in image format for any short URL.</p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <i className="fa fa-tags feature-image" />
          </div>
          <div className="content">
            <h3>Tags</h3>
            <p>Tag your short URLs and classify them for later analytics.</p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <i className="fa fa-lock feature-image" />
          </div>
          <div className="content">
            <h3>Limited access</h3>
            <p>Limit access to short URLs, by date range and/or maximum number of visits.</p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <i className="fa fa-rocket feature-image" />
          </div>
          <div className="content">
            <h3>Docker image</h3>
            <p>
              Use the official{' '}
              <ExternalLink href="https://github.com/shlinkio/shlink/blob/master/docker/README.md">
                docker image
              </ExternalLink>{' '}
              to deploy shlink in a container-based infrastructure.
            </p>
          </div>
        </section>
      </div>
    </section>
  </Layout>
);

export default Features;
