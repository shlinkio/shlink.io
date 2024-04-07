import { faBluesky, faGithub, faMastodon, faPaypal, faXTwitter } from '@fortawesome/free-brands-svg-icons';
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
      <ExternalLink href="https://github.com/shlinkio/shlink" title="GitHub" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} fixedWidth />
      </ExternalLink>
    </li>
    <li className="list-inline-item">
      <ExternalLink href="https://fosstodon.org/@shlinkio" rel="me" title="Mastodon" aria-label="Mastodon">
        <FontAwesomeIcon icon={faMastodon} fixedWidth />
      </ExternalLink>
    </li>
    <li className="list-inline-item">
      <ExternalLink href="https://twitter.com/shlinkio" title="Twitter" aria-label="Twitter">
        <FontAwesomeIcon icon={faXTwitter} fixedWidth />
      </ExternalLink>
    </li>
    <li className="list-inline-item">
      <ExternalLink href="https://bsky.app/profile/shlinkio.bsky.social" title="Bluesky" aria-label="Bluesky">
        <FontAwesomeIcon icon={faBluesky} fixedWidth />
      </ExternalLink>
    </li>
    <li className="list-inline-item">
      <ExternalLink href="https://slnk.to/donate" title="Donate" aria-label="Donate">
        <FontAwesomeIcon icon={faPaypal} fixedWidth />
      </ExternalLink>
    </li>
  </ul>
);
