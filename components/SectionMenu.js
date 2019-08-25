import React from 'react';
import Link from "next/link";
import classNames from 'classnames';

const SectionMenu = ({ items, activeItem }) => {
  return (
    <nav className="side-menu-nav">
      <ul className="side-menu">
        {items.map(({ text, link, external }) => (
          <li>
            {external && <a href={link} target="_blank">{text}</a>}
            {!external && (
              <Link href={link}>
                <a className={classNames({ selected: false })}>{text}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default SectionMenu;
