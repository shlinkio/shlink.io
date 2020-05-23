import React, { FunctionComponent } from 'react';
import PreConfiguringServersContent from '../../../content/shlink-web-client/pre-configuring-servers.mdx';
import Documentation from '../index';
import { Item } from '../../../utils/docUtils';
import Breadcrumb from '../../../components/Breadcrumb';

const breadcrumbItems: Item[] = [
  { text: 'Docs', link: '/documentation' },
  { text: 'Shlink web client', link: '/documentation/shlink-web-client' },
];

const PreConfiguringServers: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Pre-configuring servers</Breadcrumb>
    <PreConfiguringServersContent />
  </Documentation>
);

export default PreConfiguringServers;
