import type { FC } from 'react';
import { Breadcrumb as BsBreadcrumb, BreadcrumbItem } from 'reactstrap';
import { useBreadcrumbsForPath } from '../utils/docUtils';
import { Link } from './Link';

type BreadcrumbProps = {
  currentPage: string;
};

export const Breadcrumb: FC<BreadcrumbProps> = ({ currentPage }) => {
  const { breadcrumbItems, title } = useBreadcrumbsForPath(currentPage);
  return (
    <BsBreadcrumb>
      {breadcrumbItems.map(({ text, link }) => (
        <BreadcrumbItem key={text}>
          <Link href={link}>{text}</Link>
        </BreadcrumbItem>
      ))}
      <BreadcrumbItem active>{title}</BreadcrumbItem>
    </BsBreadcrumb>
  );
};
