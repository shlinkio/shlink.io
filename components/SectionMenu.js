import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const SectionMenu = ({ items }) => {
  const activeItemPath = useRouter().pathname;
  const activeItemText = items.reduce(
    (activeText, { text, link }) => activeItemPath === link ? text : activeText,
    <i>Select...</i>
  );

  return (
    <nav className="side-menu-nav">
      <button className="menu-collapser side-menu-collapser">
        {activeItemText} <i className="icon fa-chevron-down" />
      </button>
      <ul className="side-menu">
        {items.map(({ text, link, external }) => (
          <li key={link}>
            {external && <a href={link} target="_blank">{text}</a>}
            {!external && (
              <Link href={link}>
                <a className={classNames({ selected: activeItemPath === link })}>{text}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SectionMenu;
