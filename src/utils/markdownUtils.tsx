import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { MDXComponents } from 'mdx/types';
import { Mermaid } from 'mdx-mermaid/lib/Mermaid';
import type { PropsWithChildren } from 'react';
import { Link } from '../components/Link';

const buildTitleForTag = (Tag: string) => (props: PropsWithChildren<any>) => { // eslint-disable-line
  const { children, id: link, ...rest } = props;

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

export const markdownComponents: MDXComponents = { h1, h2, h3, h4, a, table, mermaid: Mermaid, Mermaid };
