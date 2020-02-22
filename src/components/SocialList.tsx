import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { ExternalLink } from 'react-external-link';

interface SocialListProps {
  type: 'inline' | 'unstyled';
  className?: string;
}

const SocialList: FunctionComponent<SocialListProps> = ({ type, className }) => (
  <ul className={classNames(`social-list list-${type}`, className)}>
    <li className="list-inline-item">
      <ExternalLink href="https://github.com/shlinkio/shlink">
        <i className="fa fa-github fa-fw" />
      </ExternalLink>
    </li>
    <li className="list-inline-item">
      <ExternalLink href="https://twitter.com/shlinkio"><i className="fa fa-twitter fa-fw" /></ExternalLink>
    </li>
    <li className="list-inline-item">
      <ExternalLink href={process.env.donateUrl || ''}><i className="fa fa-paypal fa-fw" /></ExternalLink>
    </li>
  </ul>
);

export default SocialList;
