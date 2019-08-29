import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import Documentation from '.';

const LongRunningTasks: FunctionComponent = () => (
  <Documentation>
    <header>
      <h3>Long-running tasks</h3>
    </header>

    <p>
      There are a few tasks Shlink needs to perform which are too heavy or time-consuming to be executed when a user
      visits a short URL.
    </p>
    <p>
      In order to redirect end users as fast as possible to the final URLs, these tasks have been left for you to
      configure when and how often should they be executed.
    </p>

    <h4>Locate visits</h4>
    <p>
      Shlink provides the command <code>visit:locate</code> which will process all the IP addresses from visits in
      order to locate them.
    </p>
    <p>You can of course run it manually from time to time, but it is a good idea to schedule its execution.</p>
    <blockquote>
      When serving Shlink <Link href="/documentation/serve-with-swoole"><a>with swoole</a></Link>, locating visits is
      automatically done just after redirecting end users. However, it might be a good idea to have previous scheduling
      in place, as a backup in case some of those asynchronous processes fail.
    </blockquote>

    <h4>Generate page previews</h4>
    <p>
      Shlink is capable of generating the preview of a page behind a short code by appending the <b>/preview</b> suffix
      to any short URL. For example, <b>https://doma.in/abc123/preview</b>.
    </p>
    <p>
      If you access any of those URLs, the image will be generated and cached, but the first time, the request will
      take a little bit more time.
    </p>
    <p>
      In order to pre-generate those previews, you can use the command <code>short-url:process-previews</code>, which
      will generate all missing previews so that any later request resolves faster.
    </p>
    <p>
      Scheduling the execution of that command might be a good idea if you are planning to make use of these previews.
    </p>

    <hr />

    <blockquote>
      <p>One way to schedule any of the previous tasks is by making use of Unix cron jobs:</p>
      <p>
        For example, this cron will locate visits every hour. The <code>-q</code> flag is available on any Shlink
        command and will discard any output generated from it.
      </p>
      <p><code>0 * * * * /path/to/shlink/bin/cli visit:locate -q</code></p>
    </blockquote>
  </Documentation>
);

export default LongRunningTasks;
