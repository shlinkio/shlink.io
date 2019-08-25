import React from 'react';
import Highlight from 'react-highlight';
import Layout from '../components/Layout';

const CommandLineInterface = () => (
  <Layout pageTitle="Command Line Interface">
    <section id="one" className="wrapper">
      <div className="inner alt">
        <section className="spotlight text-only">
          <div className="content">
            <header>
              <h3>Interacting with Shlink from the CLI</h3>
            </header>

            <p>Shlink provides a CLI tool which exposes a set of commands to perform a variety of operations.</p>
            <p>From creating, updating or listing short URLs, to manage API keys or handle the list of tags.</p>

            <h4>Commands</h4>
            <p>Commands in shlink are contextually namespaced
              in <code>api-key</code>, <code>short-url</code>, <code>tag</code> and <code>visit</code> (also <code>config</code>,
              which commands are currently deprecated).
            </p>
            <p>Running the <code>bin/cli</code> script you will see the full list of commands with a description for
              each one of them.
            </p>
            <p>Running any command with the <code>-h</code> flag will display an extended help for that specific
              command, showing the list of arguments and a descriptive explanation on how to use it.
            </p>
            <p>This is the full list of commands exposed by Shlink's CLI tool:</p>

            <Highlight>
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
  help                        Displays help for a command
  list                        Lists commands
 api-key
  api-key:disable             Disables an API key.
  api-key:generate            Generates a new valid API key.
  api-key:list                Lists all the available API keys.
 config
  config:generate-charset     [DEPRECATED] Generates a character set sample just by shuffling the default one, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ". Then it can be set in the SHORTCODE_CHARS environment variable
  config:generate-secret      [DEPRECATED] Generates a random secret string that can be used for JWT token encryption
 db
  db:create                   Creates the database needed for shlink to work. It will do nothing if the database already exists
  db:migrate                  Runs database migrations, which will ensure the shlink database is up to date.
 short-url
  short-url:delete            [short-code:delete] Deletes a short URL
  short-url:generate          [shortcode:generate|short-code:generate] Generates a short URL for provided long URL and returns it
  short-url:list              [shortcode:list|short-code:list] List all short URLs
  short-url:parse             [shortcode:parse|short-code:parse] Returns the long URL behind a short code
  short-url:process-previews  [shortcode:process-previews|short-code:process-previews] [DEPRECATED] Processes and generates the previews for every URL, improving performance for later web requests.
  short-url:visits            [shortcode:visits|short-code:visits] Returns the detailed visits information for provided short code
 tag
  tag:create                  Creates one or more tags.
  tag:delete                  Deletes one or more tags.
  tag:list                    Lists existing tags.
  tag:rename                  Renames one existing tag.
 visit
  visit:locate                [visit:process] Resolves visits origin locations.
  visit:update-db             [DEPRECATED] Updates the GeoLite2 database file used to geolocate IP addresses`}
            </Highlight>
          </div>
        </section>
      </div>
    </section>
  </Layout>
);

export default CommandLineInterface;
