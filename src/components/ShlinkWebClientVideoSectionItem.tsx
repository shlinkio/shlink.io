import type { FC } from 'react';
import type { SectionItemProps } from './SectionItem';
import { SectionItem } from './SectionItem';
import { ShlinkWebClientVideo } from './ShlinkWebClientVideo';

export const ShlinkWebClientVideoSectionItem: FC<Omit<SectionItemProps, 'block'>> = (props) => (
  <SectionItem
    {...props}
    block={<ShlinkWebClientVideo />}
  />
);
