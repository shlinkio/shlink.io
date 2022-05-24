import { render, screen } from '@testing-library/react';
import FakeBrowser from '../../src/components/FakeBrowser';

describe('<FakeBrowser />', () => {
  it('properly renders inBrowser and children', () => {
    render(<FakeBrowser><span>Inside the browser</span></FakeBrowser>);

    expect(screen.getByText('Inside the browser')).toBeInTheDocument();
  });
});
