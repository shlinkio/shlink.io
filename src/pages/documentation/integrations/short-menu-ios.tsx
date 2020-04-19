import React, { FunctionComponent } from 'react';
import ShortMenuIosContent from '../../../content/integrations/short-menu-ios.mdx';
import Breadcrumb from '../../../components/Breadcrumb';
import Documentation, { Item } from '../index';

const breadcrumbItems: Item[] = [
  { text: 'Docs', link: '/documentation' },
  { text: 'Integrations', link: '/documentation/integrations' },
];

const ShortMenuIos: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Short Menu for iOS</Breadcrumb>
    <ShortMenuIosContent />
  </Documentation>
);

export default ShortMenuIos;
