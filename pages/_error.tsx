import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const Error: FunctionComponent = () => (
  <Layout pageTitle="404">
    <section id="one" className="wrapper">
      <div className="inner alt">
        <section className="special">
          <div className="content">
            <h3><b>Oops!</b> This page does not exist.</h3>
            <p>
              Use your {'browser\'s'} Back button to navigate to the page you have previously come from or just press this button.
            </p>
            <ul className="actions">
              <li>
                <Link href="/"><a className="button special icon fa-home">Home</a></Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  </Layout>
);

export default Error;
