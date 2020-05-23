import React, { FunctionComponent } from 'react';
import ServeWithSwooleContent from '../../content/documentation/serve-with-swoole.mdx';
import Breadcrumb from '../../components/Breadcrumb';
import { Item } from '../../utils/docUtils';
import Documentation from './index';

const breadcrumbItems: Item[] = [{ text: 'Getting started', link: '/documentation' }];

const ServeWithSwoole: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Serve with swoole</Breadcrumb>
    <ServeWithSwooleContent />
  </Documentation>
);

export default ServeWithSwoole;
