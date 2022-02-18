import { FC } from 'react';
import Link from 'next/link';
import { LinkProps } from './Link';

const InternalLink: FC<LinkProps> = ({ children, className, ...rest }) => (
  <Link {...rest}>
    <a className={className}>{children}</a>
  </Link>
);

export default InternalLink;
