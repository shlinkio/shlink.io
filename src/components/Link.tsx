import { ExternalLinkProps } from 'react-external-link/dist/ExternalLink';
import { FC } from 'react';
import { ExternalLink } from 'react-external-link';
import InternalLink from './InternalLink';

export type LinkProps = ExternalLinkProps;

const Link: FC<LinkProps> = (props) => {
  const { href } = props;
  const Component = href?.startsWith('http') ? ExternalLink : InternalLink;

  return <Component {...props} />;
};

export default Link;
