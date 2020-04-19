import React, { FunctionComponent } from 'react';
import Documentation, { Item } from '../index';
import ErrorManagementContent from '../../../content/api-docs/error-management.mdx';
import Breadcrumb from '../../../components/Breadcrumb';

const breadcrumbItems: Item[] = [
  { text: 'Docs', link: '/documentation' },
  { text: 'REST API', link: '/documentation/api-docs' },
];

const ErrorManagement: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Error management</Breadcrumb>
    <ErrorManagementContent />
  </Documentation>
);

export default ErrorManagement;
