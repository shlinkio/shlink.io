import { FunctionComponent } from 'react';
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const LATEST_RELEASE_LINK = 'https://github.com/shlinkio/shlink/releases/latest';

const DownloadLatestBtn: FunctionComponent = () => (
  <ExternalLink href={LATEST_RELEASE_LINK} className="btn btn-primary download-shlink-btn">
    <FontAwesomeIcon icon={faDownload} className="mr-2" /> Download
  </ExternalLink>
);

export default DownloadLatestBtn;
