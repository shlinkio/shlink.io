import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

type CalloutType = 'info' | 'warning';

interface CalloutProps {
  type: CalloutType;
}

const TYPE_MAP: Record<CalloutType, any> = {
  info: {
    icon: faInfoCircle,
    text: 'Note',
    className: 'callout-block-info',
  },
  warning: {
    icon: faBullhorn,
    text: 'Warning',
    className: 'callout-block-warning',
  },
};

const Callout: FunctionComponent<CalloutProps> = ({ children, type }) => (
  <div className={classNames('callout-block', TYPE_MAP[type].className)}>
    <div className="content">
      <h4 className="callout-title">
        <span className="callout-icon-holder mr-2">
          <FontAwesomeIcon icon={TYPE_MAP[type].icon} />
        </span>
        {TYPE_MAP[type].text}
      </h4>
      {children}
    </div>
  </div>
);

export default Callout;
