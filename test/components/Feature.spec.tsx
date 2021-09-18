import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Feature from '../../src/components/Feature';

describe('<Feature />', () => {
  const theTitle = 'The title';
  const theIcon = faBook;

  afterEach(cleanup);

  it('properly renders provided children inside a section', () => {
    const { getByText, container } = render(<Feature icon={theIcon} title={theTitle}>This is the feature</Feature>);

    expect(getByText('This is the feature')).toBeInTheDocument();
    expect(getByText(theTitle)).toBeInTheDocument();
    expect(container.querySelector('.fa-book')).toBeInTheDocument();
  });
});
