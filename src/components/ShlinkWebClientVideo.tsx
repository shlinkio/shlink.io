import type { FC } from 'react';
import { FakeBrowser } from './FakeBrowser';
import { InlineVideo } from './InlineVideo';

const poster = '/images/shlink-web-client-placeholder.jpg';

export const ShlinkWebClientVideo: FC = () => (
  <FakeBrowser>
    <InlineVideo poster={poster} sources={['/videos/web-client.webm', '/videos/web-client.mp4']} />
  </FakeBrowser>
);
