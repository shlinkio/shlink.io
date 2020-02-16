import React, { FunctionComponent } from 'react';
import InstallDockerImageContent from '../../content/documentation/install-docker-image.mdx';
import Content from '../../components/Content';
import Documentation from './index';

const InstallDockerImage: FunctionComponent = () => (
  <Documentation>
    <Content title="Install using a docker image">
      <InstallDockerImageContent />
    </Content>
  </Documentation>
);

export default InstallDockerImage;
