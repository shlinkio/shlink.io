import React from 'react';
import Highlight from 'react-highlight';
import Documentation from './index';

const ClassicWebServer = () => (
  <Documentation>
    <header>
      <h3>Serve Shlink with a classic web server</h3>
    </header>
    <p>In order to be able to serve shlink, you need to put a web server with PHP integration in front of it.</p>
    <p>Both Apache and Nginx are officially supported, but other web servers should work as well.</p>
    <p>
        Here you can find two simple examples of the virtual hosts needed for both Apache and Nginx (you may need to
        modify them depending on your setup).
    </p>

    <h4>Nginx</h4>
    <Highlight className="nginx">
      {`server {
    server_name doma.in;
    listen 80;
    root /path/to/shlink/public;
    index index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php$is_args$args;
    }

    location ~ \\.php$ {
        fastcgi_split_path_info ^(.+\\.php)(/.+)$;
        fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        fastcgi_index index.php;
        include fastcgi.conf;
    }

    location ~ /\\.ht {
        deny all;
    }
}`}
    </Highlight>

    <h4>Apache</h4>
    <Highlight className="apache">
      {`<VirtualHost *:80>
    ServerName doma.in
    DocumentRoot &quot;/path/to/shlink/public&quot;

    <Directory &quot;/path/to/shlink/public&quot;>
        Options FollowSymLinks Includes ExecCGI
        AllowOverride all
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>`}
    </Highlight>
  </Documentation>
);

export default ClassicWebServer;
