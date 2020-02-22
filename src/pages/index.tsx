import React, { FunctionComponent, RefObject } from 'react';
import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';

interface HomeProps {
  scrollTo?: RefObject<HTMLElement>;
}

const Home: FunctionComponent<HomeProps> = () => (
  <Layout>
    <Jumbotron />
  </Layout>
);

export default Home;
