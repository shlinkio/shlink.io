import React from 'react';

const ExternalLink = ({ href, children, ...rest }) => (
  <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
    {children || href}
  </a>
);

export default ExternalLink;
