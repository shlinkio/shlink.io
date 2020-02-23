import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';
import { ExternalLink } from 'react-external-link';
import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import Terminal from '../components/Terminal';
import Indivisible from '../components/Indivisible';
import InternalLink from '../components/InternalLink';

interface HowWorksItemProps {
  title: string;
  icon: string;
  link: string;
}

interface MainItemProps {
  title: string;
  block: ReactNode;
  reverse?: boolean;
}

const MainItem: FunctionComponent<MainItemProps> = ({ title, children, block, reverse }) => (
  <div className="item py-4 py-md-5">
    <div className="row">
      <div className={classNames('col-12 col-md-5 mb-3 mb-md-0 align-self-center', { 'order-md-1 pl-md-5': reverse })}>
        <div className="content pr-5">
          <h3 className="heading">{title}</h3>
          <div className="desc">
            <p>{children}</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-7">{block}</div>
    </div>
  </div>
);

const HowWorksItem: FunctionComponent<HowWorksItemProps> = ({ title, children, link, icon }) => (
  <div className="item col-12 col-md-6 col-lg-3">
    <div className="item-inner rounded">
      <div className="icon-holder text-center mx-auto mb-3">
        <i className={classNames(`fa fa-${icon}`)} />
      </div>
      <h5 className="mb-3">{title}</h5>
      <div>
        <p>{children}</p>
      </div>
      <div className="mt-2">
        <InternalLink href={link}>Learn more &rarr;</InternalLink>
      </div>
    </div>
  </div>
);

const Home: FunctionComponent = () => (
  <Layout>
    <Jumbotron />

    <section className="theme-bg-light pb-4 pt-4">
      <div className="container">
        <MainItem title="Command line" block={<Terminal id="cli" />}>
          Generate and manage short URLs from the command line. List short codes, see visits or get the URL
          behind a short code.
          <div className="cta-link mt-3">
            <InternalLink href="/command-line-interface" className="btn btn-secondary btn-sm">
              View Docs
              <i className="fa fa-arrow-circle-right ml-2" />
            </InternalLink>
          </div>
        </MainItem>

        <MainItem title="REST API" block={<Terminal id="rest" />} reverse>
          Access your shortened URLs from anywhere. Simple authentication and easy to integrate.
          <div className="cta-link mt-3">
            <InternalLink href="/rest-api" className="btn btn-secondary btn-sm">
              View Docs
              <i className="fa fa-arrow-circle-right ml-2" />
            </InternalLink>
          </div>
        </MainItem>

        <MainItem title="Progressive web app" block={<span />}>
          Manage Shlink using this beautiful and
          intuitive <ExternalLink href="https://app.shlink.io" className="theme-link">progressive web application</ExternalLink>,
          or build your own.
        </MainItem>
      </div>
    </section>

    <section className="cta-section text-center py-5 theme-bg-dark position-relative">
      <div className="theme-bg-shapes-right" />
      <div className="theme-bg-shapes-left" />
      <div className="container">
        <h3 className="mb-2 text-white mb-3">What makes Shlink different?</h3>
        <div className="section-intro text-white mb-3 single-col-max mx-auto">
          Shlink adds some features which are not usually available in other hosted
          and <Indivisible>self-hosted</Indivisible> services.
        </div>
        <div className="pt-3 text-center">
          <InternalLink href="/features" className="btn btn-light">
            Features <i className="fa fa-arrow-circle-right ml-2" />
          </InternalLink>
        </div>
      </div>
    </section>

    <section className="how-works-section theme-bg-light py-5">
      <div className="container">
        <h3 className="mb-5 text-center font-weight-bold section-title">How does it work</h3>
        <div className="row">
          <HowWorksItem title="Install" icon="cloud-download" link="/documentation">
            Download a dist file and <Indivisible>self-host</Indivisible> Shlink yourself, or just drop the
            docker image on your container-based infrastructure.
          </HowWorksItem>

          <HowWorksItem title="Shrink" icon="crop" link="/documentation">
            You can convert a long URL into a short one by letting Shlink generate a unique short code for you, or by
            providing a custom <Indivisible>human-friendly</Indivisible> slug.
          </HowWorksItem>

          <HowWorksItem title="Share" icon="share" link="/documentation">
            Publish your short URLs in social networks, send them via email or use them on your marketing campaigns.
          </HowWorksItem>

          <HowWorksItem title="Track" icon="bar-chart" link="/documentation">
            Every time a user clicks on a short URL, shlink will collect anonymized visit stats, geolocate the
            visitor and
          </HowWorksItem>
        </div>
      </div>
    </section>

    <section className="pt-5">
      <div className="container">
        <h3 className="mb-2 text-center font-weight-bold section-title">Why shlink?</h3>

        <p className="my-5 text-center section-intro">
          The name is an abbreviation for &quot;short link&quot;, but if you get the words &quot;shrink&quot;
          and &quot;link&quot; together, the result is shlink too. It is also the sound made by a sword being
          unsheathed.
        </p>

        <p className="text-center section-intro">
          <small>
            Shlink is a PHP-based open source project, distributed under
            the <ExternalLink href="https://opensource.org/licenses/MIT">MIT</ExternalLink> license and hosted
            on <ExternalLink href="https://github.com/shlinkio/shlink">Github</ExternalLink>.
            <br />
            It is built with cutting edge technologies, such
            as <ExternalLink href="https://docs.mezzio.dev/mezzio/">Mezzio</ExternalLink> (formerly Zend Expressive),{' '}
            <ExternalLink href="http://www.doctrine-project.org/projects/orm.html">Doctrine</ExternalLink> and{' '}
            <ExternalLink href="http://symfony.com/doc/current/components/console.html">Symfony</ExternalLink>.
          </small>
        </p>
      </div>
    </section>
  </Layout>
);

export default Home;
