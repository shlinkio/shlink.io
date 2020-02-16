import React, { FunctionComponent } from 'react';
import Content from '../../components/Content';
import ServeWithSwooleContent from '../../content/documentation/serve-with-swoole.mdx';
import Documentation from './index';

const ServeWithSwoole: FunctionComponent = () => (
  <Documentation>
    <Content title="Serve Shlink using swoole">
      <ServeWithSwooleContent />
    </Content>
  </Documentation>
);

export default ServeWithSwoole;
