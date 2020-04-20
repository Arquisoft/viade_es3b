import React from 'react';
import { render, cleanup } from 'react-testing-library';
import PresentationBackground from './presentation-background.component';

afterAll(cleanup);

const { container } = render(<PresentationBackground />);

describe('PresentationBackground', () => {
  it('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});