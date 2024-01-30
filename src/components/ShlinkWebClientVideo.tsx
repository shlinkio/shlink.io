import type { FC } from 'react';
import { FakeBrowser } from './FakeBrowser';
import { InlineVideo } from './InlineVideo';

const poster = '/images/shlink-web-client-placeholder.png';

export const ShlinkWebClientVideo: FC = () => (
  <FakeBrowser>
    <InlineVideo poster={poster} sources={['/videos/shlink-web-client.webm', '/videos/shlink-web-client.mp4']} />
  </FakeBrowser>
);
