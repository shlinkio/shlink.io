import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faPaypal, faTwitter } from '@fortawesome/free-brands-svg-icons';

interface SocialListProps {
  type: 'inline' | 'unstyled';
  className?: string;
}

const SocialList: FunctionComponent<SocialListProps> = ({ type, className }) => (
  <ul className={classNames(`social-list list-${type}`, className)}>
    <li className="list-inline-item">
      <ExternalLink href="https://github.com/shlinkio/shlink">
        <FontAwesomeIcon icon={faGithub} fixedWidth />
      </ExternalLink>
    </li>
    <li className="list-inline-item">
      <ExternalLink href="https://twitter.com/shlinkio">
        <FontAwesomeIcon icon={faTwitter} fixedWidth />
      </ExternalLink>
    </li>
    <li className="list-inline-item">
      <ExternalLink href={process.env.donateUrl || ''}>
        <FontAwesomeIcon icon={faPaypal} fixedWidth />
      </ExternalLink>
    </li>
  </ul>
);

export default SocialList;
