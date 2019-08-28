import React from 'react';
import { ExternalLink } from 'react-external-link';

const Footer = () => (
  <footer id="footer">
    <ul className="icons">
      <li>
        <ExternalLink href="https://github.com/shlinkio/shlink" className="icon fa-github">
          <span className="label">Github</span>
        </ExternalLink>
      </li>
      <li>
        <ExternalLink href="https://twitter.com/shlinkio" className="icon fa-twitter">
          <span className="label">Twitter</span>
        </ExternalLink>
      </li>
      <li>
        <ExternalLink href={process.env.donateUrl} className="icon fa-paypal">
          <span className="label">Donate</span>
        </ExternalLink>
      </li>
    </ul>
    <p className="copyright">
      &copy; {new Date().getFullYear()} Shlink. With <span className="fa fa-heart" title="love" /> by{' '}
      <ExternalLink href="https://www.alejandrocelaya.com">Alejandro Celaya</ExternalLink> -
      Template from <a href="http://html5up.net">HTML5 UP</a>
    </p>
  </footer>
);

export default Footer;
