import React, { useEffect, useState } from 'react';

const DEFAULT_LINK = 'https://github.com/shlinkio/shlink/releases/latest';
const GITHUB_API = 'https://api.github.com/repos/shlinkio/shlink/releases/latest';

const DownloadLatestBtn = () => {
  const [link, setLink] = useState(DEFAULT_LINK);

  useEffect(() => {
    fetch(GITHUB_API)
      .then((r) => r.json())
      .then(({ assets }) => {
        const [{ browser_download_url }] = assets;
        setLink(browser_download_url)
      });
  }, []);

  return (
    <a href={link} target="_blank" className="button special icon fa-download download-shlink-btn">
      Download
    </a>
  );
};

export default DownloadLatestBtn;
