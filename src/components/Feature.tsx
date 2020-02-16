import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import './Feature.css';

interface FeatureProps {
  icon: string;
  title: string;
}

const Feature: FunctionComponent<FeatureProps> = ({ icon, title, children }) => (
  <section className="spotlight">
    <div className="image">
      <i className={classNames('fa', 'feature-image', icon)} />
    </div>
    <div className="content">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  </section>
);

export default Feature;
