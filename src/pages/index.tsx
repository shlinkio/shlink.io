import React, { FunctionComponent, RefObject } from 'react';
import Layout from '../components/Layout';

interface HomeProps {
  scrollTo?: RefObject<HTMLElement>;
}

const Home: FunctionComponent<HomeProps> = () => (
  <Layout>
    <React.Fragment />
  </Layout>
);

export default Home;
