import React, { FunctionComponent } from 'react';
import ShortMenuMacContent from '../../../content/integrations/short-menu-mac.mdx';
import Breadcrumb from '../../../components/Breadcrumb';
import { Item } from '../../../utils/docUtils';
import Documentation from '../index';

const breadcrumbItems: Item[] = [
  { text: 'Docs', link: '/documentation' },
  { text: 'Integrations', link: '/documentation/integrations' },
];

const ShortMenuMac: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Short Menu for Mac</Breadcrumb>
    <ShortMenuMacContent />
  </Documentation>
);

export default ShortMenuMac;
