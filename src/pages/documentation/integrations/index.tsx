import React, { FunctionComponent } from 'react';
import IntegrationsContent from '../../../content/integrations/integrations.mdx';
import Documentation, { Item } from '../index';
import Breadcrumb from '../../../components/Breadcrumb';

const breadcrumbItems: Item[] = [{ text: 'Docs', link: '/documentation' }];

const Integrations: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Integrations</Breadcrumb>
    <IntegrationsContent />
  </Documentation>
);

export default Integrations;
