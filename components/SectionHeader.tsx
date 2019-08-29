import React, { FunctionComponent, ReactNode } from 'react';

interface SectionHeaderProps {
  children: ReactNode;
}

const SectionHeader: FunctionComponent<SectionHeaderProps> = ({ children }) => (
  <header id="header" className="small">
    <h1>{children}</h1>
  </header>
);

export default SectionHeader;
