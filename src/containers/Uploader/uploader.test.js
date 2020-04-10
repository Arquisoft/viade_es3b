import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { HashRouter as Router } from 'react-router-dom';
import AddRoute from './uploader.component';

describe('Add route', () => {
  afterAll(cleanup);

  const { container } = render(
    <Router>
      <AddRoute />
    </Router>
  );

  test('App renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});
