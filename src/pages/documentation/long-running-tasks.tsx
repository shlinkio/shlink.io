import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import Documentation from './index';

const LongRunningTasks: FunctionComponent = () => (
  <Documentation>
    <header>
      <h2>Long-running tasks</h2>
    </header>

    <p>
      There are a few tasks Shlink needs to perform which are too heavy or time-consuming to be executed when a user
      visits a short URL.
    </p>
    <p>
      In order to redirect end users as fast as possible to the final URLs, these tasks have been left for you to
      configure when and how often should they be executed.
    </p>

    <h3>Locate visits</h3>
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
