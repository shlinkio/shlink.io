import { FC } from 'react';
import dynamic from 'next/dynamic';

// @ts-expect-error DocSearch cannot be server-side rendered
const DocSearchReact = dynamic(() => import('@docsearch/react').then(({ DocSearch }) => DocSearch), { ssr: false });

const DocsSearch: FC = () =>
  // @ts-expect-error TS is not detecting the types properly
  <DocSearchReact apiKey="0dd162447ab255a125917745c912176b" appId="9SA2I2A9Q8" indexName="shlink" />;

export default DocsSearch;
