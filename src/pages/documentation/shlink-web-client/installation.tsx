import React, { FunctionComponent } from 'react';
import InstallationContent from '../../../content/shlink-web-client/installation.mdx';
import { Item } from '../../../utils/docUtils';
import Documentation from '../index';
import Breadcrumb from '../../../components/Breadcrumb';

const breadcrumbItems: Item[] = [
  { text: 'Docs', link: '/documentation' },
  { text: 'Shlink web client', link: '/documentation/shlink-web-client' },
];

const Installation: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Installation</Breadcrumb>
    <InstallationContent />
  </Documentation>
);

export default Installation;
