import Link from 'next/link';
import type { FC } from 'react';
import type { LinkProps } from './Link';

export const InternalLink: FC<LinkProps> = ({ children, ...rest }) => <Link {...rest}>{children}</Link>;
