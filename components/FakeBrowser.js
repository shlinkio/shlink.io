import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
  inBrowser: PropTypes.node.isRequired,
};

const FakeBrowser = ({ children, inBrowser }) => (
  <section className="spotlight">
    <div className="image">
      <div className="fake-browser-ui">
        <div className="frame">
          <span className="close" />
          <span className="minimize" />
          <span className="maximize" />
        </div>
        {inBrowser}
      </div>
    </div>
    <div className="content">{children}</div>
  </section>
);

FakeBrowser.propTypes = propTypes;

export default FakeBrowser;
