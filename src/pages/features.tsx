import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import Feature from '../components/Feature';

const Features: FunctionComponent = () => (
  <Layout pageTitle="Features">
    <div className="page-header theme-bg-dark py-5 text-center position-relative">
      <div className="theme-bg-shapes-right" />
      <div className="theme-bg-shapes-left" />
      <div className="container">
        <h1 className="page-heading single-col-max mx-auto">Features</h1>
        <div className="page-intro single-col-max mx-auto">
          These are some of the main features you will be able to find on Shlink.
        </div>
      </div>
    </div>

    <section className="how-works-section theme-bg-light py-5">
      <div className="container">
        <div className="row">
          <Feature title="URL shortening" icon="scissors">
            Obviously, Shlink would not be any good if it wasn&apos;t capable of shortening URLs.
          </Feature>
          <Feature title="Visit stats" icon="bar-chart">
            Track all the visits to your short URLs, including stats like location, browser or referer.
          </Feature>
          <Feature title="Custom slugs" icon="puzzle-piece">
            Personalize your short URLs by using a custom slug to easily identify campaigns.
          </Feature>
          <Feature title="Multi-domain" icon="link">
            Serve multiple short domains under the same shlink instance. You can even use the same custom slug on more
            than one domain.
          </Feature>
          <Feature title="QR Codes" icon="qrcode">
            Generate QR codes on the fly pointing to your short URLs.
          </Feature>
          <Feature title="Tags" icon="tags">
            Tag your short URLs and classify them for later analytics.
          </Feature>
          <Feature title="Limited access" icon="lock">
            Limit access to short URLs, by date range and/or maximum number of visits.
          </Feature>
          <Feature
            title="Docker image"
            icon="docker"
            link="https://github.com/shlinkio/shlink/blob/master/docker/README.md"
          >
            Use the official docker image to deploy shlink in a container-based infrastructure.
          </Feature>
          <Feature title="Email tracking" icon="envelope-o" className="offset-lg-3">
            Generate a 1px transparent image that can be used to track emails.
          </Feature>
          <Feature
            title="Third party integrations"
            icon="envelope-o"
            link="https://api-spec.shlink.io/#/Short%20URLs/shortenUrl"
          >
            Easily make third party tools use shlink to shorten URLs by using a single-request API endpoint.
          </Feature>
        </div>
      </div>
    </section>
  </Layout>
);

export default Features;
