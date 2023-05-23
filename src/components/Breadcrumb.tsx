import type { FC, PropsWithChildren } from 'react';
import { Breadcrumb as BsBreadcrumb, BreadcrumbItem } from 'reactstrap';
import type { Route } from '../utils/docUtils';
import { Link } from './Link';

type BreadcrumbProps = PropsWithChildren<{
  prevElements: Route[];
}>;

export const Breadcrumb: FC<BreadcrumbProps> = ({ children, prevElements }) => (
  <BsBreadcrumb>
    {prevElements.map(({ text, link }) => (
      <BreadcrumbItem key={text}>
        <Link href={link}>{text}</Link>
      </BreadcrumbItem>
    ))}
    <BreadcrumbItem active>{children}</BreadcrumbItem>
  </BsBreadcrumb>
);
