import React, { FunctionComponent } from 'react';
import IntegrationsContent from '../../../content/integrations/integrations.mdx';
import { Item } from '../../../utils/docUtils';
import Documentation from '../index';
import Breadcrumb from '../../../components/Breadcrumb';

const breadcrumbItems: Item[] = [{ text: 'Docs', link: '/documentation' }];

const Integrations: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Integrations</Breadcrumb>
    <IntegrationsContent />
  </Documentation>
);

export default Integrations;
