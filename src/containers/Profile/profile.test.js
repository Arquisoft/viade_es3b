import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { HashRouter as Router } from 'react-router-dom';
import Profile from './profile.container';

describe('Profile', () => {
  afterAll(cleanup);

  const { container } = render(
    <Router>
      <Profile />
    </Router>
  );

  test('App renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});
