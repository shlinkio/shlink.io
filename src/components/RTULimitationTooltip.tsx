import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC } from 'react';

export const RTULimitationTooltip: FC = () => (
  <sup title="When creating short URLs from the CLI, real-time updates are not dispatched.">
    <FontAwesomeIcon icon={faWarning} className="text-warning" />
  </sup>
);
