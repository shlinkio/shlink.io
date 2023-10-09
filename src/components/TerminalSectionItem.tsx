import type { FC } from 'react';
import type { SectionItemProps } from './SectionItem';
import { SectionItem } from './SectionItem';
import type { TerminalProps } from './Terminal';
import { Terminal } from './Terminal';

export type TerminalSectionItemProps = Omit<SectionItemProps, 'block'> & TerminalProps;

export const TerminalSectionItem: FC<TerminalSectionItemProps> = ({ id, ...rest }) => (
  <SectionItem
    {...rest}
    block={<Terminal id={id} />}
  />
);
