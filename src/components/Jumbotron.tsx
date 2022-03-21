import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Indivisible from './Indivisible';
import InternalLink from './InternalLink';

const Jumbotron: FC = () => (
  <section className="hero-section py-3 py-md-5">
    <div className="container">
      <div className="row">
        <div className="site-jumbotron-text col-12 col-lg-7 pt-3 mb-5 mb-lg-0 align-self-center">
          <h1 className="site-headline font-weight-bold mb-3">
            The definitive <Indivisible>self-hosted</Indivisible> <Indivisible>URL shortener</Indivisible>
          </h1>
          <div className="site-tagline mb-4">
            Keep control over all your shortened URLs, by serving them under your own domains, using this simple yet
            powerful tool.
          </div>
          <div className="cta-btns mb-lg-3">
            <InternalLink href="/documentation" className="btn btn-primary me-2 mb-3">
              Get Started
              <FontAwesomeIcon icon={faArrowCircleRight} className="ms-2" />
            </InternalLink>
            <InternalLink href="/features" className="btn btn-secondary mb-3">
              Features
              <FontAwesomeIcon icon={faArrowCircleRight} className="ms-2" />
            </InternalLink>
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
