import type { FC } from 'react';
import { useBreadcrumbsForPath } from '../utils/docUtils';
import { Link } from './Link';

export type BreadcrumbProps = {
  currentPage: string;
};

export const Breadcrumb: FC<BreadcrumbProps> = ({ currentPage }) => {
  const { breadcrumbItems, title } = useBreadcrumbsForPath(currentPage);
  return (
    <ol className="breadcrumb">
      {breadcrumbItems.map(({ text, link }) => (
        <li className="breadcrumb-item" key={text}>
          <Link href={link}>{text}</Link>
        </li>
      ))}
      <li className="breadcrumb-item active">{title}</li>
    </ol>
  );
};
