import React from 'react';

const FakeBrowser = ({ children, inBrowser }) => (
  <section className="spotlight">
    <div className="image">
      <div className="fake-browser-ui">
        <div className="frame">
          <span className="close" />
          <span className="minimize" />
          <span className="maximize" />
        </div>
        {inBrowser}
      </div>
    </div>
    <div className="content">{children}</div>
  </section>
);

export default FakeBrowser;
