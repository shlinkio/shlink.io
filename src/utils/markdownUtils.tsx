import { PropsWithChildren } from 'react';
import Highlight from 'react-highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Link from '../components/Link';

const slugify = (str: string) => {
  let lowercasedStr = str
    .replace(/^\s+|\s+$/g, '') // trim
    .toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaaaeeeeiiiioooouuuunc------';

  for (let i = 0, l = from.length; i < l; i += 1) {
    lowercasedStr = lowercasedStr.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  return lowercasedStr
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes
};

const buildTitleForTag = (Tag: string) => (props: PropsWithChildren<any>) => { // eslint-disable-line
  const { children, ...rest } = props;
  const link = slugify(children);

  return (
    <Tag {...rest}>
      <a className="hidden-title-anchor" id={link} />
      <a href={`#${link}`}>
        <span className="anchor"><FontAwesomeIcon icon={faLink} /></span>
        {children}
      </a>
    </Tag>
  );
};

const a = (props: any) => <Link {...props} />;
const code = (props: any) => {
  if (!props.className?.includes('no-highlight')) {
    return <Highlight {...props} />;
  }

  const newProps = {
    ...props,
    className: props.className?.replace('no-highlight', ''),
  };

  return <code {...newProps} />;
};
const h1 = buildTitleForTag('h1');
const h2 = buildTitleForTag('h2');
const h3 = buildTitleForTag('h3');
const h4 = buildTitleForTag('h4');

export const markdownComponents = { a, code, h1, h2, h3, h4 };
