import { FC, PropsWithChildren } from 'react';

const FakeBrowser: FC<PropsWithChildren<unknown>> = ({ children }) => (
  <div className="fake-browser-ui">
    <div className="frame">
      <span className="close" />
      <span className="minimize" />
      <span className="maximize" />
    </div>
    {children}
  </div>
);

export default FakeBrowser;
