import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SectionHeader from '../../src/components/SectionHeader';

describe('<SectionHeader />', () => {
  afterEach(cleanup);

  it('properly renders provided children inside a title', () => {
    const { getByText } = render(<SectionHeader title="Some title">This is the subtitle</SectionHeader>);

    expect(getByText('This is the subtitle')).toBeInTheDocument();
    expect(getByText('Some title')).toBeInTheDocument();
  });
});
