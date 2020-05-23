import React, { FunctionComponent } from 'react';
import ServeInSubPathContent from '../../../content/shlink-web-client/serve-in-sub-path.mdx';
import { Item } from '../../../utils/docUtils';
import Documentation from '../index';
import Breadcrumb from '../../../components/Breadcrumb';

const breadcrumbItems: Item[] = [
  { text: 'Docs', link: '/documentation' },
  { text: 'Shlink web client', link: '/documentation/shlink-web-client' },
];

const ServeInSubPath: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Serve in sub path</Breadcrumb>
    <ServeInSubPathContent />
  </Documentation>
);

export default ServeInSubPath;
