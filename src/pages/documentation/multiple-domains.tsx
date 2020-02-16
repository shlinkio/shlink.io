import React, { FunctionComponent } from 'react';
import Documentation from './index';

const MultipleDomains: FunctionComponent = () => (
  <Documentation>
    <header>
      <h2>Using multiple domains</h2>
    </header>

    <p>
      While in many cases you will just have one short domain and you will want all your short URLs to be served from
      it, there are some cases in which you might want to have multiple short domains served from the same Shlink
      instance.
    </p>
    <p>
      If that is the case, you need to understand how Shlink will behave when managing your short URLs or any of them
      is visited.
    </p>

    <h3>Management</h3>
    <p>
      When you create a short URL it is possible to optionally pass a <code>domain</code> param. If you don not pass it,
      the short URL will be created for the default domain (the one provided during Shlink&apos;s installation or in
      the <code>SHORT_DOMAIN_HOST</code> env var when using the docker image).
    </p>
    <p>However, if you pass it, the short URL will be &quot;linked&quot; to that domain.</p>
    <blockquote>
      Note that, if the default domain is passed, Shlink will ignore it and will behave as if
      no <code>domain</code> param was provided.
    </blockquote>
    <p>
      The main benefit of being able to pass the domain is that Shlink will allow the same custom slug to be used in
      multiple short URLs, as long as the domain is different
      (like <code>example.com/my-compaign</code>, <code>another.com/my-compaign</code>
      and <code>foo.com/my-compaign</code>).
    </p>
    <p>
      Then, each short URL will be tracked separately and you will be able to define specific tags and metadata for
      each one of them.
    </p>
    <p>
      However, this has a side effect. When you try to interact with an existing short URL (editing tags, editing meta,
      resolving it or deleting it), either from the REST API or the CLI tool, you will have to provide the domain
      appropriately.
    </p>
    <p>
      Let&apos;s imagine this situation. Shlink&apos;s default domain is <code>example.com</code>, and you have the
      next short URLs:
    </p>
    <ul>
      <li>
        <code>https://example.com/abc123</code> &rarr; a regular short URL where no domain was provided.
      </li>
      <li>
        <code>https://example.com/my-campaign</code> &rarr; a regular short URL where no domain was provided, but it
        has a custom slug.
      </li>
      <li>
        <code>https://another.com/my-campaign</code> &rarr; a short URL where the <code>another.com</code> domain was
        provided, and it has a custom slug.
      </li>
      <li>
        <code>https://another.com/def456</code> &rarr; a short URL where the <code>another.com</code> domain was
        provided.
      </li>
    </ul>
    <p>
      These are some of the results you will get when trying to interact with them, depending on the params you provide:
    </p>
    <ul>
      <li>Providing just the <code>abc123</code> short code &rarr; the first URL will be matched.</li>
      <li>
        Providing just the <code>my-campaign</code> short code &rarr; the second URL will be matched, since you did not
        specify a domain, therefor, Shlink looks for the one with the short code/slug my-campaign which is also linked
        to default domain (or not linked to any domain, to be more accurate).
      </li>
      <li>
        Providing the <code>my-campaign</code> short code and the <code>another.com</code> domain &rarr; The third one
        will be matched.
      </li>
      <li>
        Providing just the <code>def456</code> short code &rarr; Shlink will fail/not find any short URL, since
        there&apos; none with the short code <code>def456</code> linked to default domain.
      </li>
      <li>
        Providing the <code>def456</code> short code and the <code>another.com</code> domain &rarr; The fourth short
        URL will be matched.
      </li>
      <li>
        Providing any short code and the <code>foo.com</code> domain &rarr; Again, no short URL will be found, as
        there&apos;s none linked to <code>foo.com</code> domain.
      </li>
    </ul>

    <h3>Visits</h3>
    <p>
      Before adding support for multiple domains, you could point as many domains as you wanted to Shlink, and they
      would have always worked for existing short codes/slugs.
    </p>
    <p>
      In order to keep backwards compatibility, Shlink&apos;s behavior when a short URL is visited is slightly
      different, getting to fallback in some cases.
    </p>
    <p>
      Let&apos;s continue with previous example, and also consider we have three domains that will resolve to our
      Shlink instance, which are <code>example.com</code>, <code>another.com</code> and <code>foo.com</code>.
    </p>
    <p>With that in mind, this is how Shlink will behave when the next short URLs are visited:</p>
    <ul>
      <li>
        <code>https://another.com/abc123</code> &rarr; There was no short URL specifically defined for
        domain <code>another.com</code> and short code <code>abc123</code>, but it exists for default
        domain (<code>example.com</code>), so it will fall back to it and redirect to
        where <code>example.com/abc123</code> is configured to redirect.
      </li>
      <li>
        <code>https://example.com/def456</code> &rarr; The fall-back does not happen from default domain to specific
        ones, only the other way around (like in previous case). Because of that, this one will result in a not-found
        URL, even though the def456 short code exists for <code>another.com</code> domain.
      </li>
      <li>
        <code>https://foo.com/abc123</code> &rarr; This will also fall-back to <code>example.com/abc123</code>, like
        in the first case.
      </li>
      <li>
        <code>https://another.com/non-existing</code> &rarr; The combination of <code>another.com</code> domain with
        the <code>non-existing</code> slug does not exist, so Shlink will try to fall-back to the same but for default
        domain (<code>example.com</code>). However, since that combination does not exist either, it will result in a
        not-found URL.
      </li>
      <li>Any other short URL visited exactly as it was configured will, of course, resolve as expected.</li>
    </ul>

    <h3>Special redirects</h3>
    <p>
      It is currently possible to configure some special redirects when the base domain is visited, a URL does not
      match, or an invalid/disabled short URL is visited.
    </p>
    <p>Those are configured during Shlink&apos;s installation or via env vars when using the docker image.</p>
    <p>
      Currently those are all shared for all domains serving the same Shlink instance, but the plan is to update that
      and allow specific ones for every existing domain.
    </p>
  </Documentation>
);

export default MultipleDomains;
