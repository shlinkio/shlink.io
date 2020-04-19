import React, { FunctionComponent } from 'react';
import RealTimeUpdatesContent from '../../content/documentation/real-time-updates.mdx';
import Breadcrumb from '../../components/Breadcrumb';
import Documentation, { Item } from './index';

const breadcrumbItems: Item[] = [{ text: 'Getting started', link: '/documentation' }];

const RealTimeUpdates: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Real-time updates</Breadcrumb>
    <RealTimeUpdatesContent />
  </Documentation>
);

export default RealTimeUpdates;
