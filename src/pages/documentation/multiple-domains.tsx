import React, { FunctionComponent } from 'react';
import MultipleDomainsContent from '../../content/documentation/multiple-domains.mdx';
import Breadcrumb from '../../components/Breadcrumb';
import Documentation, { Item } from './index';

const breadcrumbItems: Item[] = [{ text: 'Getting started', link: '/documentation' }];

const MultipleDomains: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Multiple domains</Breadcrumb>
    <MultipleDomainsContent />
  </Documentation>
);

export default MultipleDomains;
