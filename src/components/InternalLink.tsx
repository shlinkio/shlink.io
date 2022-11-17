import { FC } from 'react';
import Link from 'next/link';
import { LinkProps } from './Link';

const InternalLink: FC<LinkProps> = ({ children, ...rest }) => <Link {...rest}>{children}</Link>;

export default InternalLink;
