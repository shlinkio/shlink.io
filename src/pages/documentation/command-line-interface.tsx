import React, { FunctionComponent } from 'react';
import CommandLineInterfaceContent from '../../content/command-line-interface.mdx';
import Breadcrumb from '../../components/Breadcrumb';
import Documentation, { Item } from './index';

const breadcrumbItems: Item[] = [{ text: 'Docs', link: '/documentation' }];

const CommandLineInterface: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Command line interface</Breadcrumb>
    <CommandLineInterfaceContent />
  </Documentation>
);

export default CommandLineInterface;
