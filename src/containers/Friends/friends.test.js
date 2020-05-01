import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { HashRouter as Router } from 'react-router-dom';
import FriendsComponent from './friends.container';

describe('Page Not Found', () => {
  afterAll(cleanup);

  const { container } = render(
    <Router>
      <FriendsComponent />
    </Router>
  );

  test('App renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});
