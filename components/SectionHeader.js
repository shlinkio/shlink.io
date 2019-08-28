import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const SectionHeader = ({ children }) => (
  <header id="header" className="small">
    <h1>{children}</h1>
  </header>
);

SectionHeader.propTypes = propTypes;

export default SectionHeader;
