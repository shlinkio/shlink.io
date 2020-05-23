import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { breadcrumbForPath } from '../../utils/docUtils';
import Breadcrumb from '../../components/Breadcrumb';
import Documentation from './index';

const ClassicWebServer: FunctionComponent = () => {
  const { query, asPath } = useRouter();
  const { slug = [] } = query as { slug?: string[] };
  const Content = dynamic(import(`../../content/documentation/${slug.join('/')}.mdx`));
  const { breadcrumbItems, title } = breadcrumbForPath(asPath);

  return (
    <Documentation>
      Foo
      <Breadcrumb prevElements={breadcrumbItems}>{title}</Breadcrumb>
      <Content />
    </Documentation>
  );
};

export default ClassicWebServer;
