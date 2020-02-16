import App from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';

import 'highlight.js/styles/atom-one-light.css';
import 'font-awesome/css/font-awesome.css';
import '../assets/css/vendor.css';
import '../assets/css/main.css';

export default withGA(process.env.ga, Router)(App);
