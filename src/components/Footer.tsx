import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC } from 'react';
import { ExternalLink } from 'react-external-link';
import { SocialList } from './SocialList';

export const Footer: FC = () => (
  <footer className="footer">
    <div className="container text-center py-5">
      <SocialList type="unstyled" className="mb-4 mt-5" />

      <p className="copyright">
        <b>&copy; {new Date().getFullYear()} Shlink</b>. Brought to you
        with <FontAwesomeIcon icon={faHeart} /> by {' '}
        <ExternalLink href="https://www.alejandrocelaya.com">Alejandro Celaya</ExternalLink>
      </p>
    </div>
  </footer>
);
