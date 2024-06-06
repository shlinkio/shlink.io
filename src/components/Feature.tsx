import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';
import { Link } from './Link';

type FeatureProps = PropsWithChildren<{
  title: string;
  icon: IconProp;
  link?: string;
  className?: string;
}>;

export const Feature: FC<FeatureProps> = ({ title, children, link, icon, className }) => (
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
