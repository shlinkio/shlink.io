import React, { FunctionComponent } from 'react';
import Link from 'next/link';

interface InternalLinkProps {
  href: string;
}

const InternalLink: FunctionComponent<InternalLinkProps> = ({ children, href, ...rest }) => (
  <Link href={href} {...rest}>
    <a>{children}</a>
  </Link>
);

export default InternalLink;
