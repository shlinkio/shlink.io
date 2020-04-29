import React, { FunctionComponent } from 'react';
import GeoLiteLicenseKeyContent from '../../content/documentation/geolite-license-key.mdx';
import Breadcrumb from '../../components/Breadcrumb';
import Documentation, { Item } from './index';

const breadcrumbItems: Item[] = [{ text: 'Getting started', link: '/documentation' }];

const GeoLiteLicenseKey: FunctionComponent = () => (
  <Documentation>
    <Breadcrumb prevElements={breadcrumbItems}>GeoLite2 license key</Breadcrumb>
    <GeoLiteLicenseKeyContent />
  </Documentation>
);

export default GeoLiteLicenseKey;
