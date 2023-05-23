import type { FC } from 'react';
import { useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytics';
import { useCurrentPath } from '../utils/pathUtils';
import '../assets/sass/main.scss';

interface MyAppProps {
  Component: FC;
  pageProps: object;
}

let gaInitialized = false;

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  const currentPath = useCurrentPath();

  useEffect(() => {
    if (!gaInitialized) {
      initGA();
      gaInitialized = true;
    }

    logPageView();
  }, [currentPath]);

  return <Component {...pageProps} />;
};

export default MyApp;
