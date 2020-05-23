import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { breadcrumbForPath } from '../../utils/docUtils';
import { useCurrentPath } from '../../utils/pathUtils';
import Breadcrumb from '../../components/Breadcrumb';
import Documentation from '.';

const DocumentationSlug: FunctionComponent = () => {
  const { query } = useRouter();
  const currentPath = useCurrentPath();
  const { slug = [] } = query as { slug?: string[] };
  const Content = dynamic(async () => import(`../../content/documentation/${slug.join('/')}.mdx`));
  const { breadcrumbItems, title } = breadcrumbForPath(currentPath);

  return (
    <Documentation>
      <Breadcrumb prevElements={breadcrumbItems}>{title}</Breadcrumb>
      <Content />
    </Documentation>
  );
};

export default DocumentationSlug;
