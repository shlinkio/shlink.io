import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SectionHeader from '../../components/SectionHeader';

describe('<SectionHeader />', () => {
  afterEach(cleanup);

  it('properly renders provided children inside a title', () => {
    const { getByText } = render(<SectionHeader>This is the title</SectionHeader>);

    expect(getByText('This is the title')).toBeInTheDocument();
  });
});
