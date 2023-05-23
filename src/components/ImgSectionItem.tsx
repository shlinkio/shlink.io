import type { FC } from 'react';
import { FakeBrowser } from './FakeBrowser';
import type { SectionItemProps } from './SectionItem';
import { SectionItem } from './SectionItem';

interface ImgSectionItemProps extends Omit<SectionItemProps, 'block'> {
  src: string;
}

export const ImgSectionItem: FC<ImgSectionItemProps> = ({ src, ...rest }) => (
  <SectionItem
    {...rest}
    block={(
      <FakeBrowser>
        <img alt={rest.title} src={src} className="m-0 w-100" />
      </FakeBrowser>
    )}
  />
);
