import type { FC } from 'react';
import type { LinkProps } from './Link';

export const InternalLink: FC<LinkProps> = ({ children, ...rest }) => <a {...rest}>{children}</a>;
