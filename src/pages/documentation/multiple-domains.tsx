import React, { FunctionComponent } from 'react';
import MultipleDomainsContent from '../../content/documentation/multiple-domains.mdx';
import Documentation from './index';

const MultipleDomains: FunctionComponent = () => (
  <Documentation>
    <header>
      <h2>Using multiple domains</h2>
    </header>

    <MultipleDomainsContent />
  </Documentation>
);

export default MultipleDomains;
