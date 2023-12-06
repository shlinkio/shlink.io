import { faGithub, faMastodon, faPaypal, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
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
      <ExternalLink href="https://github.com/shlinkio/shlink" title="GitHub">
        <span className="sr-only">GitHub</span>
        <FontAwesomeIcon icon={faGithub} fixedWidth />
      </ExternalLink>
    </li>
    <li className="list-inline-item">
      <ExternalLink href="https://fosstodon.org/@shlinkio" rel="me" title="Mastodon">
        <span className="sr-only">Mastodon</span>
        <FontAwesomeIcon icon={faMastodon} fixedWidth />
      </ExternalLink>
    </li>
    <li className="list-inline-item">
      <ExternalLink href="https://twitter.com/shlinkio" title="Twitter">
        <span className="sr-only">Twitter</span>
        <FontAwesomeIcon icon={faXTwitter} fixedWidth />
      </ExternalLink>
    </li>
    <li className="list-inline-item">
      <ExternalLink href="https://bsky.app/profile/shlinkio.bsky.social" title="Bluesky">
        <span className="sr-only">Bluesky</span>
        <FontAwesomeIcon icon={faCloud} fixedWidth />
      </ExternalLink>
    </li>
    <li className="list-inline-item">
      <ExternalLink href="https://slnk.to/donate" title="Donate">
        <span className="sr-only">Donate</span>
        <FontAwesomeIcon icon={faPaypal} fixedWidth />
      </ExternalLink>
    </li>
  </ul>
);
