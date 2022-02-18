import { FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // eslint-disable-line import/named
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Link from './Link';

interface FeatureProps {
  title: string;
  icon: IconProp;
  link?: string;
  className?: string;
}

const Feature: FC<FeatureProps> = ({ title, children, link, icon, className }) => (
  <div className={classNames('item col-12 col-md-6 col-lg-3', className)}>
    <div className="item-inner rounded">
      <div className="icon-holder text-center mx-auto mb-3">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h5 className="mb-3">{title}</h5>
      <div>
        <p>{children}</p>
      </div>
      {link && (
        <div className="mt-2">
          <Link href={link}>Learn more &rarr;</Link>
        </div>
      )}
    </div>
  </div>
);

export default Feature;
