import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FakeBrowser from '../../src/components/FakeBrowser';

describe('<FakeBrowser />', () => {
  afterEach(cleanup);

  it('properly renders inBrowser and children', () => {
    const { getByText } = render(<FakeBrowser inBrowser={<span>Inside the browser</span>}>My contents</FakeBrowser>);

    expect(getByText('Inside the browser')).toBeInTheDocument();
    expect(getByText('My contents')).toBeInTheDocument();
  });
});
