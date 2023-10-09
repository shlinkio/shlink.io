import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';
import { useCallback, useState } from 'react';
import { NavbarToggler } from 'reactstrap';
import { DocsMenu } from './DocsMenu';

type DocsSidebarProps = PropsWithChildren<{
  currentPage: string;
}>;

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

export const DocsSidebar: FC<DocsSidebarProps> = ({ currentPage, children }) => {
  const [sidebarState, setSidebarVisible] = useState<SidebarState>('initial');
  const toggleSidebar = useCallback(
    () => setSidebarVisible((prev) => (prev === 'displayed' ? 'hidden' : 'displayed')),
    [],
  );

  return (
    <>
      <LeftMenuToggle toggleSidebar={toggleSidebar} collapsed={sidebarState !== 'displayed'} />
      <div className={classNames('docs-sidebar', classesForState(sidebarState))}>
        <div className="p-3" style={{ height: '68px' }}>
          {children}
        </div>
        <DocsMenu currentPage={currentPage} />
      </div>
    </>
  );
};
