import React, { FunctionComponent, ReactNode } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { ExternalLink } from 'react-external-link';
import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import Terminal from '../components/Terminal';

interface ItemProps {
  title: string;
  block: ReactNode;
  reverse?: boolean;
}

const Item: FunctionComponent<ItemProps> = ({ title, children, block, reverse }) => (
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

const Home: FunctionComponent = () => (
  <Layout>
    <Jumbotron />

    <section className="theme-bg-light pb-4 pt-4">
      <div className="container">

        <Item title="Command line" block={<Terminal id="cli" />}>
          Generate and manage short URLs from the command line. List short codes, see visits or get the URL
          behind a short code.
          <div className="cta-link mt-3">
            <Link href="/command-line-interface">
              <a className="btn btn-secondary btn-sm">
                View Docs
                <i className="fa fa-arrow-circle-right ml-2" />
              </a>
            </Link>
          </div>
        </Item>

        <Item title="REST API" block={<Terminal id="rest" />} reverse>
          Access your shortened URLs from anywhere. Simple authentication and easy to integrate.
          <div className="cta-link mt-3">
            <Link href="/rest-api">
              <a className="btn btn-secondary btn-sm">
                View Docs
                <i className="fa fa-arrow-circle-right ml-2" />
              </a>
            </Link>
          </div>
        </Item>

        <Item title="Progressive web app" block={<span />}>
          Manage Shlink using this beautiful and
          intuitive <ExternalLink href="https://app.shlink.io" className="theme-link">progressive web application</ExternalLink>,
          or build your own.
        </Item>
      </div>
    </section>

    <section className="cta-section text-center py-5 theme-bg-dark position-relative">
      <div className="theme-bg-shapes-right" />
      <div className="theme-bg-shapes-left" />
      <div className="container">
        <h3 className="mb-2 text-white mb-3">What makes Shlink different?</h3>
        <div className="section-intro text-white mb-3 single-col-max mx-auto">
          Shlink adds some features which are not usually available in other hosted
          and <span className="indivisible">self-hosted</span> services.
        </div>
        <div className="pt-3 text-center">
          <Link href="/features">
            <a className="btn btn-light">
              Features <i className="fa fa-arrow-circle-right ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </section>

    <section className="benefits-section py-5">
      <div className="container">
        <h3 className="mb-2 text-center font-weight-bold section-title">Why shlink?</h3>

        <p className="my-5 text-center section-intro">
          The name is an abbreviation for &quot;short link&quot;, but if you get the words &quot;shrink&quot;
          and &quot;link&quot; together, the result is shlink too. It is also the sound made by a sword being
          unsheathed.
        </p>

        <p className="text-center section-intro">
          Shlink is a PHP-based open source project, distributed under
          the <ExternalLink href="https://opensource.org/licenses/MIT">MIT</ExternalLink> license and hosted
          on <ExternalLink href="https://github.com/shlinkio/shlink">Github</ExternalLink>.
          <br />
          It is built with cutting edge technologies, such
          as <ExternalLink href="https://docs.mezzio.dev/mezzio/">Mezzio</ExternalLink> (formerly Zend Expressive),{' '}
          <ExternalLink href="http://www.doctrine-project.org/projects/orm.html">Doctrine</ExternalLink> and{' '}
          <ExternalLink href="http://symfony.com/doc/current/components/console.html">Symfony</ExternalLink>.
        </p>
      </div>
    </section>
  </Layout>
);

export default Home;
