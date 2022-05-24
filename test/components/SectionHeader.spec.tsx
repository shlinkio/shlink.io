import { render, screen } from '@testing-library/react';
import SectionHeader from '../../src/components/SectionHeader';

describe('<SectionHeader />', () => {
  it('properly renders provided children inside a title', () => {
    render(<SectionHeader title="Some title">This is the subtitle</SectionHeader>);

    expect(screen.getByText('This is the subtitle')).toBeInTheDocument();
    expect(screen.getByText('Some title')).toBeInTheDocument();
  });
});
