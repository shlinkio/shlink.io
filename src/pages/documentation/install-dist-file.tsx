import React, { FunctionComponent } from 'react';
import InstallDistFileContent from '../../content/documentation/install-dist-file.mdx';
import Content from '../../components/Content';
import Documentation from './index';

const InstallDistFile: FunctionComponent = () => (
  <Documentation>
    <Content title="Install using a dist file">
      <InstallDistFileContent />
    </Content>
  </Documentation>
);

export default InstallDistFile;
