import React, { FunctionComponent, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

const DocsSearch: FunctionComponent = () => {
  useEffect(() => {
    (window as any).docsearch({
      apiKey: 'b43050cae2aa5185ad2c6b7ec271333e',
      indexName: 'shlink',
      inputSelector: '#search-docs',
      debug: false,
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" />
      </Head>

      <form className="search-form">
        <input
          type="text"
          placeholder="Search the docs..."
          name="search"
          className="form-control search-input"
          id="search-docs"
        />
        <button type="button" className="btn search-btn" value="Search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js" />
    </React.Fragment>
  );
};

export default DocsSearch;
