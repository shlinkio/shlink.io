import React, { FunctionComponent } from 'react';
import { ExternalLink } from 'react-external-link';
import Layout from '../components/Layout';
import Feature from '../components/Feature';

const Features: FunctionComponent = () => (
  <Layout pageTitle="Features">
    <section className="wrapper">
      <div className="inner alt">
        <Feature icon="fa-scissors" title="URL shortening">
          Obviously, Shlink would not be any good if it {'wasn\'t'} capable of shortening URLs.
        </Feature>
        <Feature icon="fa-bar-chart" title="Visit stats">
          Track all the visits to your short URLs, including stats like location, browser or referer.
        </Feature>
        <Feature icon="fa-puzzle-piece" title="Custom slugs">
          Make your shortened URLs use a custom slug to easily identify campaigns.
        </Feature>
        <Feature icon="fa-link" title="Multi-domain" href="/documentation/multiple-domains">
          Serve multiple short domains under the same shlink instance. You can even use the same custom slug on
          more than one domain.
        </Feature>
        <Feature icon="fa-qrcode" title="QR Codes">
          Generate QR codes on the fly pointing to your short URLs.
        </Feature>
        <Feature icon="fa-tags" title="Tags">
          Tag your short URLs and classify them for later analytics.
        </Feature>
        <Feature icon="fa-lock" title="Limited access">
          Limit access to short URLs, by date range and/or maximum number of visits.
        </Feature>
        <Feature icon="fa-cubes" title="Docker image">
          Use the official{' '}
          <ExternalLink href="https://github.com/shlinkio/shlink/blob/master/docker/README.md">
            docker image
          </ExternalLink>{' '}
          to deploy shlink in a container-based infrastructure.
        </Feature>
        <Feature icon="fa-envelope-o" title="Emails tracking">
          Generate a 1px transparent image that can be used to track emails.
        </Feature>
        <Feature icon="fa-exchange" title="Third party integrations">
          Easily make third party tools use shlink to shorten URLs by using a{' '}
          <ExternalLink href="https://api-spec.shlink.io/#/Short%20URLs/shortenUrl">
            single-request API endpoint
          </ExternalLink>.
        </Feature>
      </div>
    </section>
  </Layout>
);

export default Features;
