import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { HashRouter as Router } from 'react-router-dom';
import Map from './map.container';
import Slider from './multimedia'

describe('Map', () => {
  afterAll(cleanup);
  const media = ['https://fotografias.lasexta.com/clipping/cmsimages02/2019/11/14/66C024AF-E20B-49A5-8BC3-A21DD22B96E6/58.jpg'];
  const user = "https://viadees3b.solid.community/profile/card#me";
  const { container } = render(
    <Router>
      <Map {... {user}} />
    </Router>
  );

  const { multimedia } = render(
    <Router>
      <Slider {...{media}}></Slider> 
    </Router>
  );



  test('Map container renders without crashing', () => {
    expect(container).toBeTruthy();
  });

  /*test('Multimedia container renders without crashing', () => {
    expect(multimedia).toBeTruthy();
  });*/
});
