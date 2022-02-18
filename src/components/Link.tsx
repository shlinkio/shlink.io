import { FC } from 'react';
import { ExternalLink } from 'react-external-link';
import InternalLink from './InternalLink';

export interface LinkProps {
  href: string;
  className?: string;
}

const Link: FC<LinkProps> = (props) => {
  const { href } = props;
  const Component = href?.startsWith('http') ? ExternalLink : InternalLink;

  return <Component {...props} />;
};

export default Link;
