import { FC, useState } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // eslint-disable-line import/named
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { menuItems, Route } from '../utils/docUtils';
import { useCurrentPath } from '../utils/pathUtils';
import Link from './Link';

interface MenuItemProps {
  link: string;
  active: boolean;
  icon?: IconProp;
  isOpen?: boolean;
  onChevronClick?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ active, link, children, icon, isOpen, onChevronClick }) => (
  <li className={classNames('nav-item', { 'section-title': icon })}>
    <Link className={classNames('nav-link', { active })} href={link}>
      {icon && <span className="theme-icon-holder me-2"><FontAwesomeIcon icon={icon} /></span>}
      {children}
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

  return currentPage === link || subRoutes.some((subRoute) => subRoute.link === currentPage);
};

const Section: FC<{ route: Route; currentPage: string }> = ({ route, currentPage }) => {
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
        <MenuItem link={subRoute.link} active={currentPage === link} key={subRoute.text}>
          {subRoute.text}
        </MenuItem>
      ))}
    </>
  );
};

const DocsMenu: FC = () => {
  const currentPage = useCurrentPath();

  return (
    <nav className="docs-nav navbar align-items-start">
      <ul className="section-items list-unstyled nav flex-column pb-3">
        {menuItems.map((route) =>
          <Section key={`${route.link}_${currentPage}`} route={route} currentPage={currentPage} />)}
      </ul>
    </nav>
  );
};

export default DocsMenu;
