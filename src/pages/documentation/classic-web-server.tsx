import React, { FunctionComponent } from 'react';
import ClassicWebServerContent from '../../content/documentation/classic-web-server.mdx';
import Documentation from './index';

const ClassicWebServer: FunctionComponent = () => (
  <Documentation>
    <ClassicWebServerContent />
  </Documentation>
);

export default ClassicWebServer;
