import React from 'react';
import { ExternalLink } from 'react-external-link';
import Documentation from './index';

const InstallDockerImage = () => (
  <Documentation>
    <header>
      <h3>Install using a docker image</h3>
    </header>
    <p>
      The docker image is probably the simplest installation use case, since it includes all dependencies and makes
      use of swoole to serve Shlink.
    </p>
    <p>If you plan to deploy shlink in a container-based infrastructure, you can just use the official <ExternalLink href="https://github.com/shlinkio/shlink/blob/master/docker/README.md">docker image</ExternalLink>.</p>
    <p>
      Once deployed, you will need to run <code>docker exec -it shlink_container shlink api-key:generate</code> in
      order to generate the first API key.
    </p>
    <p>
      Finally access to <ExternalLink href="https://app.shlink.io">shlink-web-client</ExternalLink> and configure your
      server to start creating short URLs.
    </p>
    <blockquote>
      If you want, you can also host shlink-web-client yourself as
      a <ExternalLink href="https://hub.docker.com/r/shlinkio/shlink-web-client/">docker container</ExternalLink>.
    </blockquote>
  </Documentation>
);

export default InstallDockerImage;
