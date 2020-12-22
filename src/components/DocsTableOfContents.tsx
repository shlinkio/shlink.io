import React, { FC } from 'react';
import { menuItemsForPath, Route } from '../utils/docUtils';
import Link from './Link';

const MenuItem: FC<{ link: string }> = ({ link, children }) => (
  <li>
    <Link href={link}>{children}</Link>
  </li>
);

const List: FC<{ items: Route[] }> = ({ items }) => (
  <ul>
    {items.map(({ text, link, subRoutes }) => (
      <React.Fragment key={text}>
        <MenuItem link={link}>
          {text}
        </MenuItem>
        {subRoutes && <List items={subRoutes} />}
      </React.Fragment>
    ))}
  </ul>
);

const DocsTableOfContents: FC<{ parentLink?: string }> = ({ parentLink }) =>
  <List items={menuItemsForPath(parentLink)} />;

export default DocsTableOfContents;
