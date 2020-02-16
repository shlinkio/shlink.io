import React, { FunctionComponent } from 'react';

interface ContentProps {
  title: string;
}

const Content: FunctionComponent<ContentProps> = ({ title, children }) => (
  <div className="content">
    <header>
      <h2>{title}</h2>
    </header>
    {children}
  </div>
);

export default Content;
