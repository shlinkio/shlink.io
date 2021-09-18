import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FakeBrowser from '../../src/components/FakeBrowser';

describe('<FakeBrowser />', () => {
  afterEach(cleanup);

  it('properly renders inBrowser and children', () => {
    const { getByText } = render(<FakeBrowser><span>Inside the browser</span></FakeBrowser>);

    expect(getByText('Inside the browser')).toBeInTheDocument();
  });
});
