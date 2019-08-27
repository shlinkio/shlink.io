import React from 'react';

const Footer = () => (
  <footer id="footer">
    <ul className="icons">
      <li>
        <a href="https://github.com/shlinkio/shlink" target="_blank" className="icon fa-github">
          <span className="label">Github</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/shlinkio" target="_blank" className="icon fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href={process.env.donateUrl} target="_blank" className="icon fa-paypal">
          <span className="label">Donate</span>
        </a>
      </li>
    </ul>
    <p className="copyright">
      &copy; {new Date().getFullYear()} Shlink. With <span className="fa fa-heart" title="love" /> by{' '}
      <a href="https://www.alejandrocelaya.com" target="_blank">Alejandro Celaya</a> -
      Template from <a href="http://html5up.net">HTML5 UP</a>
    </p>
  </footer>
);

export default Footer;
