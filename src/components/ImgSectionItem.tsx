import { FC } from 'react';
import SectionItem, { SectionItemProps } from './SectionItem';
import FakeBrowser from './FakeBrowser';

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
