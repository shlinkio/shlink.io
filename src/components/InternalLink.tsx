import { FunctionComponent } from 'react';
import Link from 'next/link';
import { LinkProps } from './Link';

const InternalLink: FunctionComponent<LinkProps> = ({ children, className, ...rest }) => (
  <Link {...rest}>
    <a className={className}>{children}</a>
  </Link>
);

export default InternalLink;
