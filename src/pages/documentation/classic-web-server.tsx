import React, { FunctionComponent } from 'react';
import ClassicWebServerContent from '../../content/documentation/classic-web-server.mdx';
import Breadcrumb from '../../components/Breadcrumb';
import Documentation, { Item } from './index';

const breadcrumbItems: Item[] = [{ text: 'Getting started', link: '/documentation' }];

const ClassicWebServer: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>Classic web server</Breadcrumb>
    <ClassicWebServerContent />
  </Documentation>
);

export default ClassicWebServer;
