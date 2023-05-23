import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC } from 'react';
import { ExternalLink } from 'react-external-link';

const LATEST_RELEASE_LINK = 'https://github.com/shlinkio/shlink/releases/latest';

export const DownloadLatestBtn: FC = () => (
  <ExternalLink href={LATEST_RELEASE_LINK} className="btn btn-primary download-shlink-btn">
    <FontAwesomeIcon icon={faDownload} className="me-2" /> Download
  </ExternalLink>
);
