import type { IconProp } from '@fortawesome/fontawesome-svg-core'; // eslint-disable-line import/named
import {
  faBook,
  faCogs,
  faExclamationTriangle,
  faLaptopCode,
  faMobileAlt,
  faShieldAlt,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';
import { useMemo } from 'react';

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
      {
        text: 'Supported runtimes',
        link: '/documentation/supported-runtimes',
        subRoutes: [
          { text: 'Serve with RoadRunner', link: '/documentation/supported-runtimes/serve-with-roadrunner' },
          { text: 'Classic web server', link: '/documentation/supported-runtimes/classic-web-server' },
        ],
      },
      { text: 'Supported db engines', link: '/documentation/supported-db-engines' },
      { text: 'GeoLite2 license key', link: '/documentation/geolite-license-key' },
      { text: 'Long-running tasks', link: '/documentation/long-running-tasks' },
      { text: 'Update your instance', link: '/documentation/update-your-instance' },
      { text: 'Tracking visits', link: '/documentation/tracking-visits' },
      { text: 'Some features', link: '/documentation/some-features' },
      { text: 'Environment variables', link: '/documentation/environment-variables' },
    ],
  },
  {
    text: 'Advanced',
    link: '/documentation/advanced',
    menuIcon: faShieldAlt,
    subRoutes: [
      { text: 'Special redirects', link: '/documentation/advanced/special-redirects' },
      { text: 'Multiple domains', link: '/documentation/advanced/multiple-domains' },
      { text: 'Import short URLs', link: '/documentation/advanced/import-short-urls' },
      { text: 'Real-time updates', link: '/documentation/advanced/real-time-updates' },
      { text: 'Using redis', link: '/documentation/advanced/using-redis' },
      { text: 'Using a reverse proxy', link: '/documentation/advanced/exposing-through-reverse-proxy' },
      { text: 'Send visits to Matomo', link: '/documentation/advanced/send-visits-to-matomo' },
      { text: 'Shlink architecture', link: '/documentation/advanced/shlink-architecture' },
    ],
  },
  {
    text: 'Command line',
    link: '/documentation/command-line-interface',
    menuIcon: faTerminal,
    subRoutes: [
      { text: 'CLI entry point', link: '/documentation/command-line-interface/entry-point' },
      { text: 'Installation tool', link: '/documentation/command-line-interface/installation-tool' },
    ],
  },
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
      { text: 'Official PHP SDK', link: 'https://php-sdk.shlink.io/#/' },
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

Object.freeze(docsRoutes);

export const menuItems: Route[] = docsRoutes;

export const menuItemsForPath = (path?: string) => {
  if (!path) {
    return menuItems;
  }

  return menuItems.find(({ link }) => link === path)?.subRoutes ?? [];
};

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
    breadcrumbItems: startsWithDocs(prevRoutes) ? prevRoutes : [docsRoute, ...prevRoutes],
  };

  if (route.subRoutes) {
    route.subRoutes.forEach((subRoute) => resolveBreadcrumbsMapSubRoutes(acc, [...prevRoutes, route], subRoute));
  }

  return acc;
};

export const breadcrumbsMap: BreadcrumbsMap = docsRoutes.reduce<BreadcrumbsMap>(
  (acc: BreadcrumbsMap, route: Route) => resolveBreadcrumbsMapSubRoutes(acc, [], route),
  {},
);

export const normalizePath = (path: string) => (path.endsWith('/') ? path.substring(0, path.length - 1) : path);

export const breadcrumbForPath = (path: string): BreadcrumbInfo => {
  const normalizedPath = normalizePath(path);
  return breadcrumbsMap[normalizedPath] || { title: '', breadcrumbItems: [] };
};

export const useBreadcrumbsForPath = (path: string) => useMemo(() => breadcrumbForPath(path), [path]);
