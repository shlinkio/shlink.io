import React, { FunctionComponent } from 'react';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { faChartBar, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faPuzzlePiece,
  faLink,
  faQrcode,
  faTags,
  faLock,
  faCropAlt,
  faScroll,
  faPaperPlane,
  faFileImport,
  faLaptopCode,
  faBan,
} from '@fortawesome/free-solid-svg-icons';
import { ExternalLink } from 'react-external-link';
import Layout from '../components/Layout';
import Feature from '../components/Feature';
import SectionHeader from '../components/SectionHeader';

const Features: FunctionComponent = () => (
  <Layout pageTitle="Features">
    <SectionHeader title="Features">
      These are some of the main features you will be able to find on Shlink.
    </SectionHeader>

    <section className="how-works-section theme-bg-light py-5">
      <div className="container">
        <div className="row">
          <Feature title="URL shortening" icon={faCropAlt}>
            Obviously, Shlink would not be any good if it was not capable of shortening URLs.
          </Feature>
          <Feature title="Visit stats" icon={faChartBar}>
            Track all the visits to your short URLs, including stats like location, visitor&apos;s browser or referrer.
          </Feature>
          <Feature title="Custom slugs" icon={faPuzzlePiece}>
            Personalize your short URLs by using custom slugs. This will help you easily identify campaigns.
          </Feature>
          <Feature title="Multi-domain" icon={faLink} link="/documentation/multiple-domains">
            Serve multiple short domains under the same shlink instance. You can even use the same custom slugs.
          </Feature>
          <Feature title="QR Codes" icon={faQrcode} link="/documentation/some-features/#qr-codes">
            Generate QR codes on the fly pointing to your short URLs.
          </Feature>
          <Feature title="Tags" icon={faTags}>
            Tag your short URLs and classify them for later analytics.
          </Feature>
          <Feature title="Limited access" icon={faLock}>
            Limit access to short URLs, by date range and/or maximum number of visits.
          </Feature>
          <Feature
            title="Docker image"
            icon={faDocker}
            link="/documentation/install-docker-image"
          >
            Use the official docker image to deploy shlink in a container-based infrastructure.
          </Feature>
          <Feature title="Real-time updates" icon={faPaperPlane} link="/documentation/advanced/real-time-updates">
            Make third party systems be notified as soon as new visits happen, by using webhooks
            or a <ExternalLink href="https://mercure.rocks">mercure</ExternalLink> server.
          </Feature>
          <Feature title="GDPR compliant" icon={faScroll}>
            IP addresses are anonymized by default, making Shlink compliant with different data protection regulations.
          </Feature>
          <Feature title="API-first" icon={faLaptopCode} link="/documentation/api-docs/">
            Shlink exposes a fully featured REST API that simplifies integrating it anywhere.
          </Feature>
          <Feature title="API key roles" icon={faBan} link="/documentation/api-docs/api-key-roles/">
            Limit the resources with which an API key can interact, by domain or only short URLs created with it.
          </Feature>
          <Feature
            title="Third party imports"
            icon={faFileImport}
            link="/documentation/import-short-urls"
            className="offset-lg-3"
          >
            Import your existing short URLs from third parties like bit.ly.
          </Feature>
          <Feature title="Email tracking" icon={faEnvelope}>
            Generate a 1px transparent image that can be used to track emails.
          </Feature>
        </div>
      </div>
    </section>
  </Layout>
);

export default Features;
