import React, { FunctionComponent } from 'react';
import AuthenticationContent from '../../../content/api-docs/authentication.mdx';
import Breadcrumb from '../../../components/Breadcrumb';
import Documentation, { Item } from '../index';

const breadcrumbItems: Item[] = [
  { text: 'Docs', link: '/documentation' },
  { text: 'REST API', link: '/documentation/api-docs' },
];

const Authentication: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Authentication</Breadcrumb>
    <AuthenticationContent />
  </Documentation>
);

export default Authentication;
