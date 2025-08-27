import { clsx } from 'clsx';
import type { FC, PropsWithChildren, ReactNode } from 'react';

export type SectionItemProps = PropsWithChildren<{
  title: string;
  block: ReactNode;
  reverse?: boolean;
}>;

export const SectionItem: FC<SectionItemProps> = ({ title, children, block, reverse }) => (
  <div className="item py-4 py-md-5">
    <div className="row">
      <div className={clsx('col-12 col-md-5 mb-3 mb-md-0 align-self-center', { 'order-md-1 ps-md-5': reverse })}>
        <div className="content pe-5">
          <h3 className="heading">{title}</h3>
          <div className="desc">{children}</div>
        </div>
      </div>
      <div className="col-12 col-md-7">{block}</div>
    </div>
  </div>
);
