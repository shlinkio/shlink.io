import React, { FunctionComponent } from 'react';
import InstallDockerImageContent from '../../content/documentation/install-docker-image.mdx';
import Breadcrumb from '../../components/Breadcrumb';
import { Item } from '../../utils/docUtils';
import Documentation from './index';

const breadcrumbItems: Item[] = [{ text: 'Getting started', link: '/documentation' }];

const InstallDockerImage: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Install docker image</Breadcrumb>
    <InstallDockerImageContent />
  </Documentation>
);

export default InstallDockerImage;
