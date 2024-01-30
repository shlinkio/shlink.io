import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC, PropsWithChildren } from 'react';
import { Fragment } from 'react';
import type { Route } from '../utils/docUtils';
import { menuItemsForPath } from '../utils/docUtils';
import { Link } from './Link';

const MenuItem: FC<PropsWithChildren<{ link: string }>> = ({ link, children }) => (
  <li>
    <Link href={link}>
      {children}
      {link.startsWith('http') && <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2" />}
    </Link>
  </li>
);

const List: FC<{ items: Route[] }> = ({ items }) => (
  <ul>
    {items.map(({ text, link, subRoutes }) => (
      <Fragment key={text}>
        <MenuItem link={link}>
          {text}
        </MenuItem>
        {subRoutes && <List items={subRoutes} />}
      </Fragment>
    ))}
  </ul>
);

export const DocsTableOfContents: FC<{ parentLink?: string }> = ({ parentLink }) =>
  <List items={menuItemsForPath(parentLink)} />;
