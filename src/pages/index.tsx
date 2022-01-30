import { FunctionComponent } from 'react';
import { ExternalLink } from 'react-external-link';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faCloudDownloadAlt, faCropAlt, faShare } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import Terminal from '../components/Terminal';
import Indivisible from '../components/Indivisible';
import InternalLink from '../components/InternalLink';
import Feature from '../components/Feature';
import SectionItem from '../components/SectionItem';
import ShlinkWebClientVideo from '../components/ShlinkWebClientVideo';

const Home: FunctionComponent = () => (
  <Layout>
    <Jumbotron />

    <section className="theme-bg-light pb-4 pt-4">
      <div className="container">
        <SectionItem title="Progressive web app" block={<ShlinkWebClientVideo />}>
          Manage multiple Shlink instances using this beautiful and
          intuitive progressive web application.
          <div className="cta-link mt-3">
            <ExternalLink href="https://app.shlink.io" className="btn btn-secondary btn-sm">
              Go <FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
            </ExternalLink>
          </div>
        </SectionItem>

        <SectionItem title="API-first" block={<Terminal id="rest" />} reverse>
          Access your shortened URLs from anywhere. Simple authentication and easy to integrate.
          <div className="cta-link mt-3">
            <InternalLink href="/documentation/api-docs" className="btn btn-secondary btn-sm">
              View Docs <FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
            </InternalLink>
          </div>
        </SectionItem>

        <SectionItem title="Command line" block={<Terminal id="cli" />}>
          Generate and manage short URLs from the command line. List URLs, see visits, manage your domains, etc.
          <div className="cta-link mt-3">
            <InternalLink href="/documentation/command-line-interface/entry-point" className="btn btn-secondary btn-sm">
              View Docs <FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
            </InternalLink>
          </div>
        </SectionItem>
      </div>
    </section>

    <section className="cta-section text-center py-5 theme-bg-dark position-relative">
      <div className="theme-bg-shapes-right" />
      <div className="theme-bg-shapes-left" />
      <div className="container">
        <h3 className="mb-2 text-white mb-3">What makes Shlink different?</h3>
        <div className="section-intro text-white mb-3 single-col-max mx-auto">
          Shlink adds some features which are not usually available in other hosted
          and <Indivisible>self-hosted</Indivisible> services.
        </div>
        <div className="pt-3 text-center">
          <InternalLink href="/features" className="btn btn-light">
            Features <FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
          </InternalLink>
        </div>
      </div>
    </section>

    <section className="how-works-section theme-bg-light py-5">
      <div className="container">
        <h3 className="mb-5 text-center font-weight-bold section-title">How does it work</h3>
        <div className="row">
          <Feature title="Install" icon={faCloudDownloadAlt} link="/documentation">
            Download a dist file and <Indivisible>self-host</Indivisible> Shlink yourself, or just drop the
            docker image on your container-based infrastructure.
          </Feature>
          <Feature title="Shorten" icon={faCropAlt}>
            You can convert a long URL into a short one by letting Shlink generate a unique short code for you, or by
            providing a custom <Indivisible>human-friendly</Indivisible> slug.
          </Feature>
          <Feature title="Share" icon={faShare}>
            Publish your short URLs in social networks, send them via email or use them on your marketing campaigns.
          </Feature>
          <Feature title="Track" icon={faChartBar}>
            Every time a user clicks on a short URL, Shlink will collect anonymized visit stats and geolocate the
            visitor.
          </Feature>
        </div>
      </div>
    </section>

    <section className="pt-5">
      <div className="container">
        <h3 className="mb-2 text-center font-weight-bold section-title">Why shlink?</h3>

        <p className="my-5 text-center section-intro">
          The name is an abbreviation for &quot;short link&quot;, but if you get the words &quot;shrink&quot;
          and &quot;link&quot; together, the result is shlink too. It is also the sound made by a sword being
          unsheathed.
        </p>

        <p className="text-center section-intro">
          <small>
            Shlink is a PHP-based open source project, distributed under
            the <ExternalLink href="https://opensource.org/licenses/MIT">MIT</ExternalLink> license and hosted
            on <ExternalLink href="https://github.com/shlinkio/shlink">Github</ExternalLink>.
            <br />
            It is built with cutting edge technologies, such
            as <ExternalLink href="https://docs.mezzio.dev/mezzio/">Mezzio</ExternalLink>,{' '}
            <ExternalLink href="http://www.doctrine-project.org/projects/orm.html">Doctrine</ExternalLink> and{' '}
            <ExternalLink href="http://symfony.com/doc/current/components/console.html">Symfony</ExternalLink>.
          </small>
        </p>

        <hr className="mt-5" />
      </div>
    </section>
  </Layout>
);

export default Home;
