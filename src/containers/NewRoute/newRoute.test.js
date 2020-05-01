import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { HashRouter as Router } from 'react-router-dom';
import NewRoute from './newRoute.container';
import Map from './newRoute.container';

describe('Map', () => {
  afterAll(cleanup);

  const { container } = render(
    <Router>
      <NewRoute />
    </Router>
  );

  const { component } = render(
    <Router>
      <Map />
    </Router>
  );

  test('NewRote renders without crashing', () => {
    expect(container).toBeTruthy();
  });

  test('NewRote without crashing', () => {
    expect(component).toBeTruthy();
  });
});
