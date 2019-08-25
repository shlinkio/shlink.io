import React from 'react';
import Documentation from "./index";

const InstallDockerImage = () => (
  <Documentation>
    <header>
      <h3>Install using a docker image</h3>
    </header>
    <p>The docker image is probably the simplest installation use case, since it includes all dependencies and makes use of swoole to serve Shlink.</p>
    <p>If you plan to deploy shlink in a container-based infrastructure, you can just use the official <a target="_blank" href="https://github.com/shlinkio/shlink/blob/master/docker/README.md">docker image</a>.</p>
    <p>Once deployed, you will need to run <code>docker exec -it shlink_container shlink api-key:generate</code> in order to generate the first API key.</p>
    <p>Finally access to <a href="https://app.shlink.io" target="_blank">shlink-web-client</a> and configure your server to start creating short URLs.</p>
    <blockquote>
      If you want, you can also host shlink-web-client yourself as a <a href="https://hub.docker.com/r/shlinkio/shlink-web-client/" target="_blank">docker container</a>.
    </blockquote>
  </Documentation>
);

export default InstallDockerImage;
