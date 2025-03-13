import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import { useCallback, useState } from 'react';
import { DocsMenu } from './DocsMenu';
import { NavbarToggler } from './NavbarToggler';

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

export const DocsSidebar: FC<DocsSidebarProps> = ({ currentPage, children }) => {
  const [sidebarState, setSidebarVisible] = useState<SidebarState>('initial');
  const toggleSidebar = useCallback(
    () => setSidebarVisible((prev) => (prev === 'displayed' ? 'hidden' : 'displayed')),
    [],
  );

  return (
    <>
      <NavbarToggler onClick={toggleSidebar} collapsed={sidebarState !== 'displayed'} className="docs-menu-toggle" />
      <div className={clsx('docs-sidebar', classesForState(sidebarState))}>
        <div className="p-3" style={{ height: '68px' }}>
          {children}
        </div>
        <DocsMenu currentPage={currentPage} />
      </div>
    </>
  );
};
