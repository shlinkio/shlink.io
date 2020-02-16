import React, { FunctionComponent } from 'react';
import ClassicWebServerContent from '../../content/documentation/classic-web-server.mdx';
import Content from '../../components/Content';
import Documentation from './index';

const ClassicWebServer: FunctionComponent = () => (
  <Documentation>
    <Content title="Serve Shlink with a classic web server">
      <ClassicWebServerContent />
    </Content>
  </Documentation>
);

export default ClassicWebServer;
