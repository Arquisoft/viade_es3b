import React from 'react';
import { render, cleanup } from 'react-testing-library';
import HeaderProfileBackground from './presentation-background.component';

afterAll(cleanup);

const { container } = render(<HeaderProfileBackground />);

describe('HeaderProfileBackground', () => {
  it('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});