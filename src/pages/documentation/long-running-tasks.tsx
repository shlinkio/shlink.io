import React, { FunctionComponent } from 'react';
import Content from '../../components/Content';
import LongRunningTasksContent from '../../content/documentation/long-running-tasks.mdx';
import Documentation from './index';

const LongRunningTasks: FunctionComponent = () => (
  <Documentation>
    <Content title="Long-running tasks">
      <LongRunningTasksContent />
    </Content>
  </Documentation>
);

export default LongRunningTasks;
