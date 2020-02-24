import React, { FunctionComponent } from 'react';
import RestApiContent from '../../content/api-docs/rest-api.mdx';
import Documentation from '../documentation';

const ApiDocs: FunctionComponent = () => (
  <Documentation>
    <RestApiContent />
  </Documentation>
);

export default ApiDocs;
