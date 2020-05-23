import React, { FunctionComponent } from 'react';
import LongRunningTasksContent from '../../content/documentation/long-running-tasks.mdx';
import Breadcrumb from '../../components/Breadcrumb';
import { Item } from '../../utils/docUtils';
import Documentation from './index';

const breadcrumbItems: Item[] = [{ text: 'Getting started', link: '/documentation' }];

const LongRunningTasks: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Long-running tasks</Breadcrumb>
    <LongRunningTasksContent />
  </Documentation>
);

export default LongRunningTasks;
