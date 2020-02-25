import React, { FunctionComponent } from 'react';
import Highlight from 'react-highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Link from '../components/Link';

const TitleAnchors: FunctionComponent<{ title: string }> = ({ title }) => {
  const link = title.replace(/ /g, '-').toLowerCase();

  return (
    <React.Fragment>
      <a className="hidden-title-anchor" id={link} />
      <a href={`#${link}`} className="anchor"><FontAwesomeIcon icon={faLink} /></a>
    </React.Fragment>
  );
};

const a = (props: any) => <Link {...props} />;
const code = (props: any) => <Highlight {...props} />;
const h1 = (props: any) => {
  const { children, ...rest } = props;

  return (
    <h1 {...rest}>
      <TitleAnchors title={children} />
      {children}
    </h1>
  );
};
const h2 = (props: any) => {
  const { children, ...rest } = props;

  return (
    <h2 {...rest}>
      <TitleAnchors title={children} />
      {children}
    </h2>
  );
};
const h3 = (props: any) => {
  const { children, ...rest } = props;

  return (
    <h3 {...rest}>
      <TitleAnchors title={children} />
      {children}
    </h3>
  );
};
const h4 = (props: any) => {
  const { children, ...rest } = props;

  return (
    <h4 {...rest}>
      <TitleAnchors title={children} />
      {children}
    </h4>
  );
};

export const markdownComponents = { a, code, h1, h2, h3, h4 };
