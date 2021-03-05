import React, { FunctionComponent, useLayoutEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './DocsSearch.scss';

const DocsSearch: FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputSelectorId = 'search-docs';

  useLayoutEffect(() => {
    const docsearch = require('docsearch.js/dist/npm'); // eslint-disable-line @typescript-eslint/no-var-requires

    docsearch({ // eslint-disable-line @typescript-eslint/no-unsafe-call
      apiKey: 'b43050cae2aa5185ad2c6b7ec271333e',
      indexName: 'shlink',
      inputSelector: `#${inputSelectorId}`,
      debug: process.env.NODE_ENV === 'development',
    });
  }, []);

  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="Search the docs..."
        name="search"
        className="form-control search-input"
        id={inputSelectorId}
        ref={inputRef}
      />
      <span className="btn search-btn docs-search-btn" onClick={() => inputRef.current?.focus()}>
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </form>
  );
};

export default DocsSearch;
