import React, { FunctionComponent } from 'react';
import AuthenticationContent from '../../content/api-docs/authentication.mdx';
import Documentation from '../documentation';

const Authentication: FunctionComponent = () => (
  <Documentation>
    <AuthenticationContent />
  </Documentation>
);

export default Authentication;
