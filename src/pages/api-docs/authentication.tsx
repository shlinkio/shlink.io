import React, { FunctionComponent } from 'react';
import Content from '../../components/Content';
import AuthenticationContent from '../../content/api-docs/authentication.mdx';
import ApiDocs from './index';

const Authentication: FunctionComponent = () => (
  <ApiDocs>
    <Content title="Authentication">
      <AuthenticationContent />
    </Content>
  </ApiDocs>
);

export default Authentication;
