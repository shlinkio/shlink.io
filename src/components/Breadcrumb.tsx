import React, { FunctionComponent } from 'react';
import { Breadcrumb as BsBreadcrumb, BreadcrumbItem } from 'reactstrap';
import { Item } from '../pages/documentation';
import Link from './Link';
import './Breadcrumb.scss';

interface BreadcrumbProps {
  prevElements: Item[];
}

const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({ children, prevElements }) => (
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
