import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { MDXComponents } from 'mdx/types';
import type { PropsWithChildren } from 'react';
import { Link } from '../components/Link';

const buildTitleForTag = (Tag: string) => (props: PropsWithChildren<any>) => { // eslint-disable-line
  const { children, id: link, ...rest } = props;

  return (
    <Tag {...rest}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
      <a className="hidden-title-anchor" aria-hidden="true" id={link} />
      <a href={`#${link}`}>
        <span className="anchor"><FontAwesomeIcon icon={faLink} /></span>
        {children}
      </a>
    </Tag>
  );
};

const h1 = buildTitleForTag('h1');
const h2 = buildTitleForTag('h2');
const h3 = buildTitleForTag('h3');
const h4 = buildTitleForTag('h4');

const a = (props: any) => <Link {...props} />;
const table = (props: any) => (
  <div className="table-responsive">
    <table className="table table-bordered" {...props} />
  </div>
);

export const markdownComponents: MDXComponents = { h1, h2, h3, h4, a, table };
