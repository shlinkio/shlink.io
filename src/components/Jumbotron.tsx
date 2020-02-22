import React, { FunctionComponent } from 'react';
import Link from 'next/link';

const Jumbotron: FunctionComponent = () => (
  <section className="hero-section py-3 py-md-5">
    <div className="container">
      <div className="row">
        <div className="site-jumbotron-text col-12 col-lg-7 pt-3 mb-5 mb-lg-0 align-self-center">
          <h1 className="site-headline font-weight-bold mb-3">
            The definitive <span className="indivisible">self-hosted</span>{' '}
            <span className="indivisible">URL shortener</span>
          </h1>
          <div className="site-tagline mb-4">
            Keep control over all your shortened URLs, by serving them under your own domains, using this simple yet
            powerful URL shortener.
          </div>
          <div className="cta-btns mb-lg-3">
            <Link href="/documentation">
              <a className="btn btn-primary mr-2 mb-3">
                Get Started
                <i className="fa fa-arrow-circle-right ml-2" />
              </a>
            </Link>
            <Link href="/features">
              <a className="btn btn-secondary mb-3">
                Features
                <i className="fa fa-arrow-circle-right ml-2" />
              </a>
            </Link>
          </div>
        </div>
        <div className="col-12 col-lg-5 text-center align-self-center">
          <img className="hero-figure mx-auto" src="/images/shlink-logo-blue.svg" alt="Shlink" />
        </div>
      </div>
    </div>
  </section>
);

export default Jumbotron;
