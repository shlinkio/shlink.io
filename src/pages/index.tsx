import React, { FunctionComponent, RefObject } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import Terminal from '../components/Terminal';
import { ExternalLink } from 'react-external-link';

interface HomeProps {
  scrollTo?: RefObject<HTMLElement>;
}

const Home: FunctionComponent<HomeProps> = () => (
  <Layout>
    <Jumbotron />

    <section className="theme-bg-light pb-4 pt-4">
      <div className="container">
        <div className="item pt-5 mb-5">
          <div className="row">
            <div className="col-12 col-md-5 mb-3 mb-md-0 align-self-center">
              <div className="content pr-5">
                <h3 className="heading">Command line</h3>
                <div className="desc">
                  <p>
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
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <Terminal id="cli" />
            </div>
          </div>
        </div>

        <div className="item pt-5 mb-5">
          <div className="row">
            <div className="col-12 col-md-5 order-md-1 pl-md-5 align-self-center">
              <div className="content pr-5">
                <h3 className="heading">REST API</h3>
                <div className="desc">
                  <p>Access your shortened URLs from anywhere. Simple authentication and easy to integrate.</p>
                  <div className="cta-link mt-3">
                    <Link href="/rest-api">
                      <a className="btn btn-secondary btn-sm">
                        View Docs
                        <i className="fa fa-arrow-circle-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <Terminal id="rest" />
            </div>
          </div>
        </div>

        <div className="item py-5">
          <div className="row">
            <div className="col-12 col-md-5 pl-md-5 align-self-center">
              <div className="content pr-5">
                <h3 className="heading">Progressive web app</h3>
                <div className="desc">
                  <p>
                    Manage Shlink using this beautiful and
                    intuitive <ExternalLink href="https://app.shlink.io" className="theme-link">progressive web application</ExternalLink>,
                    or build your own.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <Terminal id="rest" />
            </div>
          </div>
        </div>
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
