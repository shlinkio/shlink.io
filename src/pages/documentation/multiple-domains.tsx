import React, { FunctionComponent } from 'react';
import MultipleDomainsContent from '../../content/documentation/multiple-domains.mdx';
import Content from '../../components/Content';
import Documentation from './index';

const MultipleDomains: FunctionComponent = () => (
  <Documentation>
    <Content title="Using multiple domains">
      <MultipleDomainsContent />
    </Content>
  </Documentation>
);

export default MultipleDomains;
