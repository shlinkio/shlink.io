import React, { FunctionComponent } from 'react';
import ShlinkWebClientContent from '../../../content/shlink-web-client/index.mdx';
import Breadcrumb from '../../../components/Breadcrumb';
import { Item } from '../../../utils/docUtils';
import Documentation from '../index';

const breadcrumbItems: Item[] = [{ text: 'Docs', link: '/documentation' }];

const ShlinkWebClient: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Shlink web client</Breadcrumb>
    <ShlinkWebClientContent />
  </Documentation>
);

export default ShlinkWebClient;
