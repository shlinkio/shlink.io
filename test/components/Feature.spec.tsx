import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Feature from '../../components/Feature';

describe('<Feature />', () => {
  const theTitle = 'The title';
  const theIcon = 'the-icon';

  afterEach(cleanup);

  it('properly renders provided children inside a section', () => {
    const { getByText, container } = render(<Feature icon={theIcon} title={theTitle}>This is the feature</Feature>);

    expect(getByText('This is the feature')).toBeInTheDocument();
    expect(getByText(theTitle)).toBeInTheDocument();
    expect(container.querySelector(`.${theIcon}`)).toBeInTheDocument();
  });
});
