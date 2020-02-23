import React, { FunctionComponent } from 'react';
import FakeBrowser from './FakeBrowser';

const ShlinkWebClientVideo: FunctionComponent = () => (
  <FakeBrowser>
    <video src="/videos/shlink-web-client.mp4" style={{ maxWidth: '100%' }} autoPlay loop />
  </FakeBrowser>
);

export default ShlinkWebClientVideo;
