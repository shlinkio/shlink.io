import type { FC } from 'react';
import type { SectionItemProps } from './SectionItem';
import { SectionItem } from './SectionItem';
import type { TerminalProps } from './Terminal.tsx';
import { Terminal } from './Terminal.tsx';

export type TerminalSectionItemProps = Omit<SectionItemProps, 'block'> & TerminalProps;

export const TerminalSectionItem: FC<TerminalSectionItemProps> = ({ id, ...rest }) => (
  <SectionItem
    {...rest}
    block={<Terminal id={id} />}
  />
);
