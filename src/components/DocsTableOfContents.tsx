import React, { FunctionComponent } from 'react';
import { menuItems, Route } from '../utils/docUtils';
import Link from './Link';

const MenuItem: FunctionComponent<{ link: string }> = ({ link, children }) => (
  <li>
    <Link href={link}>{children}</Link>
  </li>
);

const List: FunctionComponent<{ items: Route[] }> = ({ items }) => (
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

const DocsTableOfContents: FunctionComponent = () => <List items={menuItems} />;

export default DocsTableOfContents;
