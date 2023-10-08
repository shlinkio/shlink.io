import { DocSearch } from '@docsearch/react';
import classNames from 'classnames';
import type { FC } from 'react';
import { useCallback, useState } from 'react';
import { NavbarToggler } from 'reactstrap';
import { DocsMenu } from './DocsMenu';

type DocsSidebarProps = {
  currentPage: string;
};

type SidebarState = 'initial' | 'displayed' | 'hidden';

const classesForState = (state: SidebarState) => {
  if (state === 'initial') {
    return null;
  }

  return { 'sidebar-visible': state === 'displayed', 'sidebar-hidden': state === 'hidden' };
};

interface LeftMenuToggleProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const LeftMenuToggle: FC<LeftMenuToggleProps> = ({ collapsed, toggleSidebar }) => (
  <NavbarToggler className={classNames('docs-menu-toggle', { collapsed })} onClick={toggleSidebar}>
    <span />
    <span />
    <span />
  </NavbarToggler>
);

export const DocsSidebar: FC<DocsSidebarProps> = ({ currentPage }) => {
  const [sidebarState, setSidebarVisible] = useState<SidebarState>('initial');
  const toggleSidebar = useCallback(
    () => setSidebarVisible((prev) => (prev === 'displayed' ? 'hidden' : 'displayed')),
    [],
  );

  return (
    <>
      <LeftMenuToggle toggleSidebar={toggleSidebar} collapsed={sidebarState !== 'displayed'} />
      <div className={classNames('docs-sidebar', classesForState(sidebarState))}>
        <div className="top-search-box p-3">
          <DocSearch apiKey="0dd162447ab255a125917745c912176b" appId="9SA2I2A9Q8" indexName="shlink" />
        </div>

        <DocsMenu currentPage={currentPage} />
      </div>
    </>
  );
};
