import { IconProp } from '@fortawesome/fontawesome-svg-core'; // eslint-disable-line import/named
import { faBook, faCogs, faLaptopCode, faMobileAlt, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { clone } from 'ramda';

export interface Route {
  text: string;
  link: string;
  menuIcon?: IconProp;
  subRoutes?: Route[];
}

const docsRoutes: Route[] = [
  {
    text: 'Docs',
    link: '/documentation',
    menuIcon: faBook,
    subRoutes: [
      { text: 'Install docker image', link: '/documentation/install-docker-image' },
      { text: 'Install from dist file', link: '/documentation/install-dist-file' },
      { text: 'Serve with swoole', link: '/documentation/serve-with-swoole' },
      { text: 'Classic web server', link: '/documentation/classic-web-server' },
      { text: 'Multiple domains', link: '/documentation/multiple-domains' },
      { text: 'Real-time updates', link: '/documentation/real-time-updates' },
      { text: 'GeoLite2 license key', link: '/documentation/geolite-license-key' },
      { text: 'Long-running tasks', link: '/documentation/long-running-tasks' },
      { text: 'Command line interface', link: '/documentation/command-line-interface', menuIcon: faTerminal },
      {
        text: 'REST API',
        link: '/documentation/api-docs',
        menuIcon: faLaptopCode,
        subRoutes: [
          { text: 'Authentication', link: '/documentation/api-docs/authentication' },
          { text: 'Error management', link: '/documentation/api-docs/error-management' },
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
        ],
      },
    ],
  },
];

const collectMenuRoutes = (routes: Route[]): Route[] =>
  routes.reduce<Route[]>((firstLevelItems: Route[], item: Route) => {
    if (item.menuIcon) {
      firstLevelItems.push(item);
    }

    if (item.subRoutes) {
      const subRoutesWithMenu = collectMenuRoutes(item.subRoutes);

      // Remove from the sub routes, all routes which have been pulled to the first level
      item.subRoutes = item.subRoutes.filter((route) => !subRoutesWithMenu.includes(route));

      return [ ...firstLevelItems, ...subRoutesWithMenu ];
    }

    return firstLevelItems;
  }, []);

export const menuItems: Route[] = collectMenuRoutes(clone(docsRoutes));

interface BreadcrumbInfo {
  breadcrumbItems: Route[];
  title: string;
}

type BreadcrumbsMap = Record<string, BreadcrumbInfo>;

const resolveBreadcrumbsMapSubRoutes = (acc: BreadcrumbsMap, prevRoutes: Route[], route: Route): BreadcrumbsMap => {
  if (route.link.startsWith('http')) {
    return acc;
  }

  acc[route.link] = {
    title: route.text,
    breadcrumbItems: prevRoutes,
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
