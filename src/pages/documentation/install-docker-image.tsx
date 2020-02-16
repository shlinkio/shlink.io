import React, { FunctionComponent } from 'react';
import InstallDockerImageContent from '../../content/documentation/install-docker-image.mdx';
import Documentation from './index';

const InstallDockerImage: FunctionComponent = () => (
  <Documentation>
    <header>
      <h2>Install using a docker image</h2>
    </header>

    <InstallDockerImageContent />
  </Documentation>
);

export default InstallDockerImage;
