import React, { FunctionComponent } from 'react';
import ClassicWebServerContent from '../../content/documentation/classic-web-server.mdx';
import Documentation from './index';

const ClassicWebServer: FunctionComponent = () => (
  <Documentation>
    <header>
      <h2>Serve Shlink with a classic web server</h2>
    </header>

    <ClassicWebServerContent />
  </Documentation>
);

export default ClassicWebServer;
