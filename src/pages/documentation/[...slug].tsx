import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { breadcrumbForPath, breadcrumbsMap } from '../../utils/docUtils';
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

interface NextJsPath {
  params: {
    slug: string[];
  };
}

const urlToNextJsPath = (path: string): NextJsPath => ({
  params: { slug: path.split('/').splice(2) },
});
const slugIsNotEmpty = ({ params }: NextJsPath) => params.slug.length > 0;

// This allows defining which are the routes that should be statically generated, based on the breadcrumbs map
export const getStaticPaths = async () => ({
  paths: Object.keys(breadcrumbsMap).map(urlToNextJsPath).filter(slugIsNotEmpty),
  fallback: false,
});

// Not really needed, but required for previous function to work
export const getStaticProps = async () => ({ props: {} });

export default DocumentationSlug;
