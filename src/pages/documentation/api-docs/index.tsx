import React, { FunctionComponent } from 'react';
import RestApiContent from '../../../content/api-docs/rest-api.mdx';
import Breadcrumb from '../../../components/Breadcrumb';
import Documentation, { Item } from '../index';

const breadcrumbItems: Item[] = [{ text: 'Docs', link: '/documentation' }];

const ApiDocs: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>REST API</Breadcrumb>
    <RestApiContent />
  </Documentation>
);

export default ApiDocs;
