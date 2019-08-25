import App from 'next/app'
import Router from 'next/router';
import withGA from 'next-ga';

export default withGA('UA-38351554-5', Router)(App);
