import React, { FunctionComponent } from 'react';
import CommandLineInterfaceContent from '../content/command-line-interface.mdx';
import Documentation from './documentation';

const CommandLineInterface: FunctionComponent = () => (
  <Documentation>
    <CommandLineInterfaceContent />
  </Documentation>
);

export default CommandLineInterface;
