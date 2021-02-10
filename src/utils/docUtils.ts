import { IconProp } from '@fortawesome/fontawesome-svg-core'; // eslint-disable-line import/named
import {
  faBook,
  faCogs,
  faLaptopCode,
  faMobileAlt,
  faTerminal,
  faExclamationTriangle,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import { clone } from 'ramda';

export interface Route {
  text: string;
  link: string;
  menuIcon?: IconProp;
  subRoutes?: Route[];
}

const docsRoute: Route = { text: 'Docs', link: '/documentation' };

const docsRoutes: Route[] = [
  {
    ...docsRoute,
    text: 'Getting started',
    menuIcon: faBook,
    subRoutes: [
      { text: 'Install docker image', link: '/documentation/install-docker-image' },
      { text: 'Install from dist file', link: '/documentation/install-dist-file' },
      { text: 'Serve with swoole', link: '/documentation/serve-with-swoole' },
      { text: 'Classic web server', link: '/documentation/classic-web-server' },
      { text: 'GeoLite2 license key', link: '/documentation/geolite-license-key' },
      { text: 'Long-running tasks', link: '/documentation/long-running-tasks' },
      { text: 'Tracking visits', link: '/documentation/tracking-visits' },
      { text: 'Update your instance', link: '/documentation/update-your-instance' },
      { text: 'Some features', link: '/documentation/some-features' },
    ],
  },
  {
    text: 'Advanced',
    link: '/documentation/advanced',
    menuIcon: faShieldAlt,
    subRoutes: [
      { text: 'Multiple domains', link: '/documentation/advanced/multiple-domains' },
      { text: 'Import short URLs', link: '/documentation/advanced/import-short-urls' },
      { text: 'Real-time updates', link: '/documentation/advanced/real-time-updates' },
      { text: 'Using a reverse proxy', link: '/documentation/advanced/exposing-through-reverse-proxy' },
    ],
  },
  { text: 'Command line interface', link: '/documentation/command-line-interface', menuIcon: faTerminal },
  {
    text: 'REST API',
    link: '/documentation/api-docs',
    menuIcon: faLaptopCode,
    subRoutes: [
      { text: 'Authentication', link: '/documentation/api-docs/authentication' },
      { text: 'Error management', link: '/documentation/api-docs/error-management' },
      { text: 'API key roles', link: '/documentation/api-docs/api-key-roles' },
      { text: 'Endpoints', link: 'https://api-spec.shlink.io/' },
    ],
  },
  {
    text: 'Shlink web client',
    link: '/documentation/shlink-web-client',
    menuIcon: faMobileAlt,
    subRoutes: [
      { text: 'Installation', link: '/documentation/shlink-web-client/installation' },
      { text: 'Serve in sub path', link: '/documentation/shlink-web-client/serve-in-sub-path' },
      { text: 'Pre-configuring servers', link: '/documentation/shlink-web-client/pre-configuring-servers' },
    ],
  },
  {
    text: 'Integrations',
    link: '/documentation/integrations',
    menuIcon: faCogs,
    subRoutes: [
      { text: 'Short Menu for Mac', link: '/documentation/integrations/short-menu-mac' },
      { text: 'Short Menu for iOS', link: '/documentation/integrations/short-menu-ios' },
      { text: 'GNOME Shell extension', link: '/documentation/integrations/gnome-shell-extension' },
    ],
  },
  {
    text: 'Troubleshooting',
    link: '/documentation/troubleshooting',
    menuIcon: faExclamationTriangle,
  },
];

export const menuItems: Route[] = clone(docsRoutes);

export const menuItemsForPath = (path?: string) => {
  if (!path) {
    return menuItems;
  }

  return menuItems.find(({ link }) => link === path)?.subRoutes ?? [];
}

interface BreadcrumbInfo {
  breadcrumbItems: Route[];
  title: string;
}

type BreadcrumbsMap = Record<string, BreadcrumbInfo>;

const startsWithDocs = (routes: Route[]): boolean => routes[0]?.link === docsRoute.link;

const resolveBreadcrumbsMapSubRoutes = (acc: BreadcrumbsMap, prevRoutes: Route[], route: Route): BreadcrumbsMap => {
  if (route.link.startsWith('http')) {
    return acc;
  }

  acc[route.link] = {
    title: route.text,
    breadcrumbItems: startsWithDocs(prevRoutes) ? prevRoutes : [ docsRoute, ...prevRoutes ],
  };

  if (route.subRoutes) {
    route.subRoutes.forEach((subRoute) => resolveBreadcrumbsMapSubRoutes(acc, [ ...prevRoutes, route ], subRoute));
  }

  return acc;
};

export const breadcrumbsMap: BreadcrumbsMap = docsRoutes.reduce<BreadcrumbsMap>(
  (acc: BreadcrumbsMap, route: Route) => resolveBreadcrumbsMapSubRoutes(acc, [], route),
  {},
);

export const breadcrumbForPath = (path: string): BreadcrumbInfo =>
  breadcrumbsMap[path] || { title: '', breadcrumbItems: [] };
