import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import './Feature.css';
import InternalLink from './InternalLink';

interface FeatureProps {
  icon: string;
  title: string;
  href?: string;
}

const Feature: FunctionComponent<FeatureProps> = ({ icon, title, href, children }) => (
  <section className="spotlight">
    <div className="image">
      <i className={classNames('fa', 'feature-image', icon)} />
    </div>
    <div className="content">
      <h3>
        {!href && title}
        {href && <InternalLink href={href}>{title}</InternalLink>}
      </h3>
      <p>{children}</p>
    </div>
  </section>
);

export default Feature;
