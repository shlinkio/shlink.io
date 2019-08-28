import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'react-external-link';

const DEFAULT_LINK = 'https://github.com/shlinkio/shlink/releases/latest';
const GITHUB_API = 'https://api.github.com/repos/shlinkio/shlink/releases/latest';

const DownloadLatestBtn = () => {
  const [ link, setLink ] = useState(DEFAULT_LINK);

  useEffect(() => {
    fetch(GITHUB_API)
      .then((r) => r.json())
      .then(({ assets }) => {
        const [{ browser_download_url }] = assets; // eslint-disable-line

        setLink(browser_download_url);
      })
      .catch(() => setLink(DEFAULT_LINK));
  }, []);

  return (
    <ExternalLink href={link} className="button special icon fa-download download-shlink-btn">
      Download
    </ExternalLink>
  );
};

export default DownloadLatestBtn;
