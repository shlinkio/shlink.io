import type { FC, PropsWithChildren, ReactNode } from 'react';

type SectionHeaderProps = PropsWithChildren<{
  title: ReactNode;
}>;

export const SectionHeader: FC<SectionHeaderProps> = ({ title, children }) => (
  <div className="page-header theme-bg-dark py-5 text-center position-relative">
    <div className="theme-bg-shapes-right" />
    <div className="theme-bg-shapes-left" />
    <div className="container">
      <h1 className="page-heading single-col-max mx-auto">{title}</h1>
      <div className="page-intro single-col-max mx-auto">{children}</div>
    </div>
  </div>
);
