import { FunctionComponent } from 'react';
import { ExternalLink } from 'react-external-link';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import SectionItem from '../components/SectionItem';
import ShlinkWebClientVideo from '../components/ShlinkWebClientVideo';
import Indivisible from '../components/Indivisible';
import FakeBrowser from '../components/FakeBrowser';

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
        <SectionItem
          reverse
          title="PSShlink"
          block={(
            <FakeBrowser>
              <img alt="PSShlink" src="/images/apps/psshlink-powershell.png" className="m-0 w-100" />
            </FakeBrowser>
          )}
        >
          <p>
            Manage your Shlink instance from the command line with this PowerShell module,
            by <ExternalLink href="https://twitter.com/codaamok">Adam Cook</ExternalLink>.
          </p>
          <p>
            See how to install it and further documentation on
            its <ExternalLink href="https://github.com/codaamok/PSShlink">GitHub repository</ExternalLink>, or
            learn more about it on this <ExternalLink href="https://adamcook.io/p/using-powershell-to-manage-shlink-with-psshlink/">blog post</ExternalLink>.
          </p>
        </SectionItem>
      </div>
    </section>
  </Layout>
);

export default Apps;
