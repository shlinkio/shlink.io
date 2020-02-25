import React, { FunctionComponent } from 'react';
import Highlight from 'react-highlight';
import Link from '../components/Link';

const childrenToId = (children: string) => children.replace(/ /g, '-').toLowerCase();
const TitleWithAnchor: FunctionComponent<{ title: string }> = ({ children, title }) => (
  <React.Fragment>
    <a className="hidden-title-anchor" id={childrenToId(title.toString())} />
    {children}
  </React.Fragment>
);

const a = (props: any) => <Link {...props} />;
const code = (props: any) => <Highlight {...props} />;
const h1 = (props: any) => {
  const { children } = props;

  return <TitleWithAnchor title={children}><h1 {...props} /></TitleWithAnchor>;
};
const h2 = (props: any) => {
  const { children } = props;

  return <TitleWithAnchor title={children}><h2 {...props} /></TitleWithAnchor>;
};
const h3 = (props: any) => {
  const { children } = props;

  return <TitleWithAnchor title={children}><h3 {...props} /></TitleWithAnchor>;
};
const h4 = (props: any) => {
  const { children } = props;

  return <TitleWithAnchor title={children}><h4 {...props} /></TitleWithAnchor>;
};
const h5 = (props: any) => {
  const { children } = props;

  return <TitleWithAnchor title={children}><h5 {...props} /></TitleWithAnchor>;
};
const h6 = (props: any) => {
  const { children } = props;

  return <TitleWithAnchor title={children}><h6 {...props} /></TitleWithAnchor>;
};

export const markdownComponents = { a, code, h1, h2, h3, h4, h5, h6 };
