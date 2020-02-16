import React, { FunctionComponent } from 'react';
import Highlight from 'react-highlight';
import Layout from '../components/Layout';

const CommandLineInterface: FunctionComponent = () => (
  <Layout pageTitle="Command Line Interface">
    <section id="one" className="wrapper">
      <div className="inner alt">
        <section className="spotlight text-only">
          <div className="content">
            <header>
              <h2>Interacting with Shlink from the CLI</h2>
            </header>

            <p>Shlink provides a CLI tool which exposes a set of commands to perform a variety of operations.</p>
            <p>From creating, updating or listing short URLs, to manage API keys or handle the list of tags.</p>

            <h3>Commands</h3>
            <p>
              Commands in shlink are contextually namespaced
              in <code>api-key</code>, <code>short-url</code>, <code>tag</code> and <code>visit</code> (
              also <code>config</code>, which commands are currently deprecated).
            </p>
            <p>Running the <code>bin/cli</code> script you will see the full list of commands with a description for
              each one of them.
            </p>
            <p>Running any command with the <code>-h</code> flag will display an extended help for that specific
              command, showing the list of arguments and a descriptive explanation on how to use it.
            </p>
            <p>This is the full list of commands exposed by {'Shlink\'s'} CLI tool:</p>

            <Highlight className="">
              {`Usage:
  command [options] [arguments]

Options:
  -h, --help            Display this help message
  -q, --quiet           Do not output any message
  -V, --version         Display this application version
      --ansi            Force ANSI output
      --no-ansi         Disable ANSI output
  -n, --no-interaction  Do not ask any interactive question
  -v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

Available commands:
  help                Displays help for a command
  list                Lists commands
 api-key
  api-key:disable     Disables an API key.
  api-key:generate    Generates a new valid API key.
  api-key:list        Lists all the available API keys.
 db
  db:create           Creates the database needed for shlink to work. It will do nothing if the database already exists
  db:migrate          Runs database migrations, which will ensure the shlink database is up to date.
 short-url
  short-url:delete    Deletes a short URL
  short-url:generate  Generates a short URL for provided long URL and returns it
  short-url:list      List all short URLs
  short-url:parse     Returns the long URL behind a short code
  short-url:visits    Returns the detailed visits information for provided short code
 tag
  tag:create          Creates one or more tags.
  tag:delete          Deletes one or more tags.
  tag:list            Lists existing tags.
  tag:rename          Renames one existing tag.
 visit
  visit:locate        Resolves visits origin locations.`}
            </Highlight>
          </div>
        </section>
      </div>
    </section>
  </Layout>
);

export default CommandLineInterface;
