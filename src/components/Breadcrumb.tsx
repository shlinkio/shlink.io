import { FC } from 'react';
import { Breadcrumb as BsBreadcrumb, BreadcrumbItem } from 'reactstrap';
import { Route } from '../utils/docUtils';
import Link from './Link';

interface BreadcrumbProps {
  prevElements: Route[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ children, prevElements }) => (
  <BsBreadcrumb>
    {prevElements.map(({ text, link }) => (
      <BreadcrumbItem key={text}>
        <Link href={link}>{text}</Link>
      </BreadcrumbItem>
    ))}
    <BreadcrumbItem active>{children}</BreadcrumbItem>
  </BsBreadcrumb>
);

export default Breadcrumb;
