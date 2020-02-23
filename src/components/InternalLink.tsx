import React, { FunctionComponent } from 'react';
import Link from 'next/link';

interface InternalLinkProps {
  href: string;
  className?: string;
}

const InternalLink: FunctionComponent<InternalLinkProps> = ({ children, href, className, ...rest }) => (
  <Link href={href} {...rest}>
    <a className={className}>{children}</a>
  </Link>
);

export default InternalLink;
