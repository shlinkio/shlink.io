import React, { FunctionComponent } from 'react';
import { ExternalLink } from 'react-external-link';
import SocialList from './SocialList';

const Footer: FunctionComponent = () => (
  <footer className="footer">
    <div className="container text-center py-5">
      <SocialList type="unstyled" className="mb-4 mt-5" />

      <p className="copyright">
        <b>&copy; {new Date().getFullYear()} Shlink</b>. Brought to you
        with <span className="fa fa-heart" title="love" />{' '}
        by <ExternalLink href="https://www.alejandrocelaya.com">Alejandro Celaya</ExternalLink>
      </p>
    </div>
  </footer>
);

export default Footer;
