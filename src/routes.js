import React, { Fragment } from 'react';
import { PrivateLayout, PublicLayout, NotLoggedInLayout } from '@layouts';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import {
  Login,
  Register,
  PageNotFound,
  Welcome,
  RegistrationSuccess,
  Profile,
  FormModelConverter,
  FormModelRenderer,
  TextEditor,
  Mapa
} from './containers';

const privateRoutes = [
  {
    id: 'welcome',
    path: '/welcome',
    component: Welcome
  },
  {
    id: 'profile',
    path: '/profile',
    component: Profile
  },
  {
    id: 'text-editor',
    path: '/text-editor',
    component: TextEditor
  },
  {
    id: 'map',
    path: '/Map',
    component: Mapa
  },
  {
    id: 'formmodelconverter',
    path: '/formmodel/converter',
    component: FormModelConverter
  },
  {
    id: 'formmodelrenderer',
    path: '/formmodel/renderer',
    component: FormModelRenderer
  }
];

const Routes = () => (
  <Router>
    <Fragment>
      <Switch>
        <NotLoggedInLayout component={Login} path="/login" exact />
        <NotLoggedInLayout component={Register} path="/register" exact />
        <NotLoggedInLayout path="/register/success" component={RegistrationSuccess} exact />
        <PublicLayout path="/404" component={PageNotFound} exact />
        <Redirect from="/" to="/welcome" exact />
        <PrivateLayout path="/" routes={privateRoutes} />
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
