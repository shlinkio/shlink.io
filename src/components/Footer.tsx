import React, { FunctionComponent } from 'react';
import { ExternalLink } from 'react-external-link';

const Footer: FunctionComponent = () => (
  <footer className="footer">
    <div className="container text-center py-5">
      <p className="copyright">
        &copy; {new Date().getFullYear()} Shlink. With <span className="fa fa-heart" title="love" /> by{' '}
        <ExternalLink href="https://www.alejandrocelaya.com">Alejandro Celaya</ExternalLink>
      </p>
    </div>
  </footer>
);

export default Footer;
