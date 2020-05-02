import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { HashRouter as Router } from 'react-router-dom';
import FriendsComponent from './friends.container';

describe('Friends container test', () => {
  afterAll(cleanup);
  const webIdTest = "https://viadees3b.solid.community/profile/card#me";
  const { container } = render(
    <Router>
      <FriendsComponent {...{webIdTest}}></FriendsComponent>
    </Router>
  );

  



  test('Friends container renders ', () => {
    expect(container).toBeTruthy();
  });


});
