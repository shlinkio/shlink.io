import React from 'react';
import Highlight from 'react-highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Link from '../components/Link';

const buildTitleForTag = (Tag: string) => (props: any) => { // eslint-disable-line
  const { children, ...rest } = props;
  const link = children.replace(/ /g, '-').toLowerCase();

  return (
    <Tag {...rest}>
      <a className="hidden-title-anchor" id={link} />
      <a href={`#${link}`}>
        <span className="anchor"><FontAwesomeIcon icon={faLink} /></span>
        {children}
      </a>
    </Tag>
  );
};

const a = (props: any) => <Link {...props} />;
const code = (props: any) => <Highlight {...props} />;
const h1 = buildTitleForTag('h1');
const h2 = buildTitleForTag('h2');
const h3 = buildTitleForTag('h3');
const h4 = buildTitleForTag('h4');

export const markdownComponents = { a, code, h1, h2, h3, h4 };
