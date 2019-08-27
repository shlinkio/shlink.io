import React from 'react';
import Link from 'next/link';

const scrollOptions = { behavior: 'smooth', block: 'start' };
const scrollToRef = (ref) => () => ref.current && ref.current.scrollIntoView(scrollOptions);

const Jumbotron = ({ scrollTo }) => (
  <header id="header" className="big">
    <div className="content">
      <h1>Shlink</h1>
      <p>
        A self-hosted URL shortener.<br />
        Shorten URLs and serve them under your own short domain.
      </p>
      <ul className="actions">
        <li>
          <Link href="/documentation">
            <a className="button special icon fa-book">
              Documentation
            </a>
          </Link>
        </li>
        <li>
          <a className="button icon fa-chevron-down" onClick={scrollToRef(scrollTo)}>
            Learn More
          </a>
        </li>
      </ul>
    </div>
    <div className="image">
      <img src="/images/shlink-logo-white.png" alt="Shlink logo" />
    </div>
  </header>
);

export default Jumbotron;
