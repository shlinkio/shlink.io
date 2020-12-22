import React, { FunctionComponent } from 'react';
import FakeBrowser from './FakeBrowser';

const ShlinkWebClientVideo: FunctionComponent = () => (
  <FakeBrowser>
    <video src="/videos/web-client.mp4" style={{ maxWidth: '100%', display: 'block' }} autoPlay loop muted />
  </FakeBrowser>
);

export default ShlinkWebClientVideo;
