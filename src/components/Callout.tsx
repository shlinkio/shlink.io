import { faBullhorn, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { clsx } from 'clsx';
import type { FC, PropsWithChildren } from 'react';

type CalloutType = 'info' | 'warning';
type CalloutProps = PropsWithChildren<{
  type: CalloutType;
  title?: string;
}>;

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

export const Callout: FC<CalloutProps> = ({ children, type, title }) => (
  <div className={clsx('callout-block', TYPE_MAP[type].className)}>
    <div className="content">
      <h4 className="callout-title">
        <span className="callout-icon-holder me-2">
          <FontAwesomeIcon icon={TYPE_MAP[type].icon} />
        </span>
        {title ?? TYPE_MAP[type].text}
      </h4>
      {children}
    </div>
  </div>
);
