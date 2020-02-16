import React, { FunctionComponent } from 'react';
import InstallDistFileContent from '../../content/documentation/install-dist-file.mdx';
import Documentation from './index';

const InstallDistFile: FunctionComponent = () => (
  <Documentation>
    <header>
      <h2>Install using a dist file</h2>
    </header>

    <InstallDistFileContent />
  </Documentation>
);

export default InstallDistFile;
