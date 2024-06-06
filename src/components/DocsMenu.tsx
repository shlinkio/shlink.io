import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';
import { Fragment, useState } from 'react';
import type { Route } from '../utils/docUtils';
import { menuItems, normalizePath } from '../utils/docUtils';
import { Link } from './Link';

type MenuItemProps = PropsWithChildren<{
  link: string;
  active: boolean;
  icon?: IconProp;
  isOpen?: boolean;
  onChevronClick?: () => void;
}>;

const MenuItem: FC<MenuItemProps> = ({ active, link, children, icon, isOpen, onChevronClick }) => (
  <li className={classNames('nav-item', { 'section-title': icon })}>
    <Link className={classNames('nav-link', { active })} href={link}>
      {icon && <span className="theme-icon-holder me-2"><FontAwesomeIcon icon={icon} /></span>}
      {children}
      {link.startsWith('http') && <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2" />}
    </Link>
    {isOpen !== undefined && (
      <FontAwesomeIcon
        className="section-dropdown"
        icon={isOpen ? faChevronUp : faChevronDown}
        onClick={onChevronClick}
      />
    )}
  </li>
);

const isCurrentSection = (currentPage: string, route: Route): boolean => {
  const { link, subRoutes = [] } = route;
  return currentPage === link || subRoutes.some((subRoute) => isCurrentSection(currentPage, subRoute));
};

const SubSection: FC<{ subRoute: Route; currentPage: string; extraPadding?: boolean }> = (
  { subRoute, currentPage, extraPadding = false },
) => (
  <MenuItem link={subRoute.link} active={currentPage === subRoute.link}>
    {extraPadding && <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}
    {subRoute.text}
  </MenuItem>
);

const Section: FC<{ route: Route; currentPage: string; }> = ({ route, currentPage }) => {
  const { text, link, menuIcon, subRoutes = [] } = route;
  const [isOpen, setOpen] = useState(isCurrentSection(currentPage, route));
  const parent = (
    <MenuItem
      link={link}
      active={currentPage === link}
      icon={menuIcon}
      isOpen={subRoutes.length ? isOpen : undefined}
      onChevronClick={() => setOpen(!isOpen)}
    >
      {text}
    </MenuItem>
  );

  return (
    <>
      {parent}
      {isOpen && subRoutes.map((subRoute) => (
        <Fragment key={subRoute.text}>
          <SubSection subRoute={subRoute} currentPage={currentPage} />
          {subRoute.subRoutes?.map((subSubRoute) => (
            <SubSection key={`sub${subSubRoute.text}`} subRoute={subSubRoute} currentPage={currentPage} extraPadding />
          ))}
        </Fragment>
      ))}
    </>
  );
};

type DocsMenuProps = {
  currentPage: string;
};

export const DocsMenu: FC<DocsMenuProps> = ({ currentPage }) => {
  const path = normalizePath(currentPage);
  return (
    <nav className="docs-nav navbar align-items-start">
      <ul className="section-items list-unstyled nav flex-column pb-3">
        {menuItems.map((route) =>
          <Section key={`${route.link}_${path}`} route={route} currentPage={path} />)}
      </ul>
    </nav>
  );
};
