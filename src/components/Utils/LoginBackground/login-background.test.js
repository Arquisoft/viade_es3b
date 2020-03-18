import React from 'react';
import { render, cleanup } from 'react-testing-library';
import LoginBackground from './login-background.component';

afterAll(cleanup);

const { container } = render(<LoginBackground />);

describe('LogineBackground', () => {
  it('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});