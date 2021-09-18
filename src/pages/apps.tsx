import { FunctionComponent } from 'react';
import { ExternalLink } from 'react-external-link';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import SectionItem from '../components/SectionItem';
import ShlinkWebClientVideo from '../components/ShlinkWebClientVideo';
import Indivisible from '../components/Indivisible';

const Apps: FunctionComponent = () => (
  <Layout pageTitle="Apps">
    <SectionHeader title="Apps">
      A curated list of either official or third-party apps that can be integrated with Shlink.
    </SectionHeader>

    <section className="theme-bg-light pb-4 pt-4">
      <div className="container">
        <SectionItem title="Shlink web client" block={<ShlinkWebClientVideo />}>
          <p>
            Manage any number of Shlink servers with this <Indivisible>React-based</Indivisible> progressive web
            application.
          </p>
          <p>
            See beautiful charts with your visit stats and easily create new short URLs.
          </p>
          <p>
            You can <ExternalLink href="https://github.com/shlinkio/shlink-web-client">self-host</ExternalLink> it
            yourself or try it from <ExternalLink href="https://app.shlink.io" />
          </p>
        </SectionItem>
      </div>
    </section>
  </Layout>
);

export default Apps;
