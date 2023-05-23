import { initialize, pageview, set } from 'react-ga';

export const initGA = () => {
  initialize(process.env.ga as string);
};

export const logPageView = () => {
  set({ page: window.location.pathname });
  pageview(window.location.pathname);
};
