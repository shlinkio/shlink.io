import React, { FunctionComponent } from 'react';
import Link, { LinkProps as NextLinkProps } from 'next/link';
import { LinkProps } from './Link';

export const buildBaseLinkProps = (href: string): NextLinkProps => {
  if (href.startsWith('/documentation') && ![ '/documentation', '/documentation/' ].includes(href)) {
    return { href: '/documentation/[...slug]', as: href };
  }

  return { href };
};

const InternalLink: FunctionComponent<LinkProps> = ({ children, href, className, ...rest }) => (
  <Link {...buildBaseLinkProps(href)} {...rest}>
    <a className={className}>{children}</a>
  </Link>
);

export default InternalLink;
