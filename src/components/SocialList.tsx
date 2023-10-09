import { faGithub, faMastodon, faPaypal, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import type { FC } from 'react';
import { ExternalLink } from 'react-external-link';

interface SocialListProps {
  type: 'inline' | 'unstyled';
  className?: string;
}

export const SocialList: FC<SocialListProps> = ({ type, className }) => (
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
      <ExternalLink href="https://fosstodon.org/@shlinkio" rel="me">
        <FontAwesomeIcon icon={faMastodon} fixedWidth />
      </ExternalLink>
    </li>
    <li className="list-inline-item">
      <ExternalLink href="https://slnk.to/donate">
        <FontAwesomeIcon icon={faPaypal} fixedWidth />
      </ExternalLink>
    </li>
  </ul>
);
