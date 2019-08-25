import App from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';

export default withGA(process.env.ga, Router)(App);
