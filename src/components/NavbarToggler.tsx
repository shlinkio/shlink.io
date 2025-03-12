import classNames from 'classnames';
import type { FC } from 'react';

export type NavbarTogglerProps = {
  collapsed: boolean;
  onClick: () => void;
  className?: string;
};

export const NavbarToggler: FC<NavbarTogglerProps> = ({ collapsed, onClick, className }) => (
  <button
    aria-label="Toggle navigation"
    className={classNames('navbar-toggler', className, { collapsed })}
    onClick={onClick}
  >
    <span/>
    <span/>
    <span/>
  </button>
);
