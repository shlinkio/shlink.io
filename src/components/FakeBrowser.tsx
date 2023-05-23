import type { FC, PropsWithChildren } from 'react';

export const FakeBrowser: FC<PropsWithChildren> = ({ children }) => (
  <div className="fake-browser-ui">
    <div className="frame">
      <span className="close" />
      <span className="minimize" />
      <span className="maximize" />
    </div>
    {children}
  </div>
);
