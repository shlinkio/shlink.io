import React, { FunctionComponent } from 'react';
import Content from '../../components/Content';
import ErrorManagementContent from '../../content/api-docs/error-management.mdx';
import ApiDocs from './index';

const ErrorManagement: FunctionComponent = () => (
  <ApiDocs>
    <Content title="Error management">
      <ErrorManagementContent />
    </Content>
  </ApiDocs>
);

export default ErrorManagement;
