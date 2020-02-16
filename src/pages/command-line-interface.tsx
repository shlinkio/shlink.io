import React, { FunctionComponent } from 'react';
import CommandLineInterfaceContent from '../content/command-line-interface.mdx';
import Layout from '../components/Layout';
import Content from '../components/Content';

const CommandLineInterface: FunctionComponent = () => (
  <Layout pageTitle="Command Line Interface">
    <section id="one" className="wrapper">
      <div className="inner alt">
        <section className="spotlight text-only">
          <Content title="Interacting with Shlink from the CLI">
            <CommandLineInterfaceContent />
          </Content>
        </section>
      </div>
    </section>
  </Layout>
);

export default CommandLineInterface;
