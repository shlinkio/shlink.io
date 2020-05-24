import React, { FunctionComponent } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // eslint-disable-line import/named
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuItems } from '../utils/docUtils';
import { useCurrentPath } from '../utils/pathUtils';
import Link from './Link';

interface MenuItemProps {
  link: string;
  active: boolean;
  icon?: IconProp;
}

const MenuItem: FunctionComponent<MenuItemProps> = ({ active, link, children, icon }) => (
  <li className={classNames('nav-item', { 'section-title': icon })}>
    <Link className={classNames('nav-link', { active })} href={link}>
      {icon && <span className="theme-icon-holder mr-2"><FontAwesomeIcon icon={icon} /></span>}
      {children}
    </Link>
  </li>
);

const DocsMenu: FunctionComponent = () => {
  const currentPage = useCurrentPath();

  return (
    <nav className="docs-nav navbar align-items-start">
      <ul className="section-items list-unstyled nav flex-column pb-3">
        {menuItems.map(({ text, link, menuIcon, subRoutes = [] }) => (
          <React.Fragment key={text}>
            <MenuItem link={link} active={currentPage === link} icon={menuIcon}>
              {text}
            </MenuItem>
            {subRoutes.map(({ text, link }) => (
              <MenuItem link={link} active={currentPage === link} key={text}>
                {text}
              </MenuItem>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default DocsMenu;
