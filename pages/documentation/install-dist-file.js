import React from 'react';
import Documentation from "./index";
import Link from "next/link";
import DownloadLatestBtn from "../../components/DownloadLatestBtn";

const InstallDistFile = () => (
  <Documentation>
    <header>
      <h3>Install using a dist file</h3>
    </header>
    <p>If you are going to host Shlink yourself, you need to make sure your server fulfils its requirements:</p>
    <ul>
      <li>
        PHP 7.2 or greater with JSON, intl, curl, PDO and gd extensions enabled (APCu extension is recommended if you
        don't plan to use swoole).
      </li>
      <li>MySQL, PostgreSQL or SQLite.</li>
      <li>
        The <a href="https://www.swoole.co.uk/" target="_blank">swoole</a> PHP extension (if you plan to serve Shlink
        with swoole) or the web server of your choice with PHP integration (Apache or Nginx).
      </li>
    </ul>

    <h4>Installation steps</h4>
    <ul>
      <li>
        Download the latest distributable file and decompress it at the location of your choice
        <ul className="actions" style={{ textAlign: 'center', margin: '1em 0' }}>
          <li>
            <DownloadLatestBtn />
          </li>
        </ul>
      </li>
      <li>Create an empty database (not necessary if you are going to use SQLite).</li>
      <li>Recursively grant write permissions to the <code>data</code> directory.</li>
      <li>
        Setup the application by running the <code>bin/install</code> script. It will guide you through the installation
        process.
      </li>
      <li>
        Optionally, you can create a symlink to the <code>bin/cli</code> script in a folder which is in your path.<br />
        For example <code>/usr/local/bin</code> for linux systems. This will allow you to easily run shlink from
        anywhere in the command line.
      </li>
      <li>
        Configure your system to be able to serve Shlink:
        <ul style={{ 'margin-bottom': 0 }}>
          <li>
            <Link href="/documentation/serve-with-swoole"><a>Serve Shlink using swoole</a></Link>.
          </li>
          <li>
            <Link href="/documentation/classic-web-server"><a>Serve Shlink with a classic web server</a></Link>.
          </li>
        </ul>
      </li>
      <li>
        Generate your first API key by running <code>bin/cli api-key:generate</code>. You will need the key in order
        to interact with shlink's API.
      </li>
      <li>
        Finally access to <a href="https://app.shlink.io" target="_blank">https://app.shlink.io</a> and configure your
        server to start creating short URLs.
      </li>
    </ul>
  </Documentation>
);

export default InstallDistFile;
