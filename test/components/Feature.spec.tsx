import { faBook } from '@fortawesome/free-solid-svg-icons';
import { render, screen } from '@testing-library/react';
import { Feature } from '../../src/components/Feature';

describe('<Feature />', () => {
  const theTitle = 'The title';
  const theIcon = faBook;

  it('properly renders provided children inside a section', () => {
    const { container } = render(<Feature icon={theIcon} title={theTitle}>This is the feature</Feature>);

    expect(screen.getByText('This is the feature')).toBeInTheDocument();
    expect(screen.getByText(theTitle)).toBeInTheDocument();
    expect(container.querySelector('.fa-book')).toBeInTheDocument();
  });
});
