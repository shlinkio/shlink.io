import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import ExternalLink from './ExternalLink';

const SectionMenu = ({ items }) => {
  const activeItemPath = useRouter().pathname;
  const activeItemText = items.reduce(
    (activeText, { text, link }) => activeItemPath === link ? text : activeText,
    <i>Select...</i>
  );
  const [ show, setShow ] = useState(false);

  return (
    <nav className="side-menu-nav">
      <button className="menu-collapser side-menu-collapser" onClick={() => setShow(!show)}>
        {activeItemText} <i className="icon fa-chevron-down" />
      </button>
      <ul className={classNames('side-menu', { show })}>
        {items.map(({ text, link, external }) => (
          <li key={link}>
            {external && <ExternalLink href={link}>{text}</ExternalLink>}
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
