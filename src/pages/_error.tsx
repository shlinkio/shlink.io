import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import Link from '../components/Link';

const Error: FC = () => (
  <Layout pageTitle="404">
    <SectionHeader title="404">Page not found</SectionHeader>

    <div className="container text-center">
      <section className="py-5">
        <h3 className="mt-0 mt-md-5"><b>Oops!</b> This page does not exist.</h3>
        <p className="my-3 my-md-5">
          Use your browser&apos;s Back button to navigate to the page you have previously come from or just press this
          button.
        </p>
        <Link href="/" className="btn btn-primary btn-lg">
          <FontAwesomeIcon icon={faArrowCircleLeft} className="me-2" /> Home
        </Link>
      </section>
    </div>
  </Layout>
);

export default Error;
