import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBook, faCogs, faLaptopCode, faMobileAlt, faTerminal } from '@fortawesome/free-solid-svg-icons';

export interface Item {
  text: string;
  link: string;
  icon?: IconProp;
  submenu?: Item[];
}

export const menuItems: Item[] = [
  {
    text: 'Docs',
    link: '/documentation',
    icon: faBook,
    submenu: [
      { text: 'Install docker image', link: '/documentation/install-docker-image' },
      { text: 'Install from dist file', link: '/documentation/install-dist-file' },
      { text: 'Serve with swoole', link: '/documentation/serve-with-swoole' },
      { text: 'Classic web server', link: '/documentation/classic-web-server' },
      { text: 'Multiple domains', link: '/documentation/multiple-domains' },
      { text: 'Real-time updates', link: '/documentation/real-time-updates' },
      { text: 'GeoLite2 license key', link: '/documentation/geolite-license-key' },
      { text: 'Long-running tasks', link: '/documentation/long-running-tasks' },
    ],
  },
  { text: 'Command line interface', link: '/documentation/command-line-interface', icon: faTerminal },
  {
    text: 'REST API',
    link: '/documentation/api-docs',
    icon: faLaptopCode,
    submenu: [
      { text: 'Authentication', link: '/documentation/api-docs/authentication' },
      { text: 'Error management', link: '/documentation/api-docs/error-management' },
      { text: 'Endpoints', link: 'https://api-spec.shlink.io/' },
    ],
  },
  {
    text: 'Shlink web client',
    link: '/documentation/shlink-web-client',
    icon: faMobileAlt,
    submenu: [
      { text: 'Installation', link: '/documentation/shlink-web-client/installation' },
      { text: 'Serve in sub path', link: '/documentation/shlink-web-client/serve-in-sub-path' },
      { text: 'Pre-configuring servers', link: '/documentation/shlink-web-client/pre-configuring-servers' },
    ],
  },
  {
    text: 'Integrations',
    link: '/documentation/integrations',
    icon: faCogs,
    submenu: [
      { text: 'Short Menu for Mac', link: '/documentation/integrations/short-menu-mac' },
      { text: 'Short Menu for iOS', link: '/documentation/integrations/short-menu-ios' },
    ],
  },
];

interface BreadcrumbInfo {
  breadcrumbItems: Item[];
  title: string;
}

const breadcrumbsMap: Record<string, BreadcrumbInfo> = {
  '/documentation/install-docker-image': {
    title: 'Install docker image',
    breadcrumbItems: [{ text: 'Getting started', link: '/documentation' }],
  },
  '/documentation/install-dist-file': {
    title: 'Install from dist file',
    breadcrumbItems: [{ text: 'Getting started', link: '/documentation' }],
  },
  '/documentation/serve-with-swoole': {
    title: 'Serve with swoole',
    breadcrumbItems: [{ text: 'Getting started', link: '/documentation' }],
  },
  '/documentation/classic-web-server': {
    title: 'Classic web server',
    breadcrumbItems: [{ text: 'Getting started', link: '/documentation' }],
  },
  '/documentation/multiple-domains': {
    title: 'Multiple domains',
    breadcrumbItems: [{ text: 'Getting started', link: '/documentation' }],
  },
  '/documentation/real-time-updates': {
    title: 'Real-time updates',
    breadcrumbItems: [{ text: 'Getting started', link: '/documentation' }],
  },
  '/documentation/geolite-license-key': {
    title: 'GeoLite2 license key',
    breadcrumbItems: [{ text: 'Getting started', link: '/documentation' }],
  },
  '/documentation/long-running-tasks': {
    title: 'Long-running tasks',
    breadcrumbItems: [{ text: 'Getting started', link: '/documentation' }],
  },
  '/documentation/command-line-interface': {
    title: 'Command line interface',
    breadcrumbItems: [{ text: 'Docs', link: '/documentation' }],
  },
  '/documentation/api-docs': {
    title: 'REST API',
    breadcrumbItems: [{ text: 'Docs', link: '/documentation' }],
  },
  '/documentation/api-docs/authentication': {
    title: 'Authentication',
    breadcrumbItems: [
      { text: 'Docs', link: '/documentation' },
      { text: 'REST API', link: '/documentation/api-docs' },
    ],
  },
  '/documentation/api-docs/error-management': {
    title: 'Error management',
    breadcrumbItems: [
      { text: 'Docs', link: '/documentation' },
      { text: 'REST API', link: '/documentation/api-docs' },
    ],
  },
  '/documentation/shlink-web-client': {
    title: 'Shlink web client',
    breadcrumbItems: [{ text: 'Docs', link: '/documentation' }],
  },
  '/documentation/shlink-web-client/installation': {
    title: 'Installation',
    breadcrumbItems: [
      { text: 'Docs', link: '/documentation' },
      { text: 'Shlink web client', link: '/documentation/shlink-web-client' },
    ],
  },
  '/documentation/shlink-web-client/serve-in-sub-path': {
    title: 'Serve in sub path',
    breadcrumbItems: [
      { text: 'Docs', link: '/documentation' },
      { text: 'Shlink web client', link: '/documentation/shlink-web-client' },
    ],
  },
  '/documentation/shlink-web-client/pre-configuring-servers': {
    title: 'Pre-configuring servers',
    breadcrumbItems: [
      { text: 'Docs', link: '/documentation' },
      { text: 'Shlink web client', link: '/documentation/shlink-web-client' },
    ],
  },
  '/documentation/integrations': {
    title: 'Integrations',
    breadcrumbItems: [{ text: 'Docs', link: '/documentation' }],
  },
  '/documentation/integrations/short-menu-mac': {
    title: 'Short Menu for Mac',
    breadcrumbItems: [
      { text: 'Docs', link: '/documentation' },
      { text: 'Integrations', link: '/documentation/integrations' },
    ],
  },
  '/documentation/integrations/short-menu-ios': {
    title: 'Short Menu for iOS',
    breadcrumbItems: [
      { text: 'Docs', link: '/documentation' },
      { text: 'Integrations', link: '/documentation/integrations' },
    ],
  },
};

export const breadcrumbForPath = (path: string): BreadcrumbInfo =>
  breadcrumbsMap[path] || { title: '', breadcrumbItems: [] };
