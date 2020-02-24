import React, { FunctionComponent } from 'react';
import LongRunningTasksContent from '../../content/documentation/long-running-tasks.mdx';
import Documentation from './index';

const LongRunningTasks: FunctionComponent = () => (
  <Documentation>
    <LongRunningTasksContent />
  </Documentation>
);

export default LongRunningTasks;
