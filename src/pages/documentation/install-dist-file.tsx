import React, { FunctionComponent } from 'react';
import InstallDistFileContent from '../../content/documentation/install-dist-file.mdx';
import Breadcrumb from '../../components/Breadcrumb';
import Documentation, { Item } from './index';

const breadcrumbItems: Item[] = [{ text: 'Getting started', link: '/documentation' }];

const InstallDistFile: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Install from dist file</Breadcrumb>
    <InstallDistFileContent />
  </Documentation>
);

export default InstallDistFile;
