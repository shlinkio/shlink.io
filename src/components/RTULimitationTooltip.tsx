import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC } from 'react';
import { useRef } from 'react';
import { UncontrolledTooltip } from 'reactstrap';

export const RTULimitationTooltip: FC = () => {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <>
      <sup ref={ref}>
        <FontAwesomeIcon icon={faWarning} className="text-warning" />
      </sup>
      <UncontrolledTooltip target={ref} placement="top">
        When creating short URLs from the CLI, real-time updates are not dispatched.
      </UncontrolledTooltip>
    </>
  );
};
