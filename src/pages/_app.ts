import App from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';

import 'highlight.js/scss/atom-one-light.scss';
import 'font-awesome/scss/font-awesome.scss';
import '../assets/sass/main.scss';

export default withGA(process.env.ga, Router)(App);
