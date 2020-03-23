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
  Mapa,

  Uploader,

  Friends

} from './containers';

const privateRoutes = [
  {
    id: 'welcome',
    path: '/viade_es3b/welcome',
    component: Welcome
  },
  {
    id: 'profile',
    path: '/viade_es3b/profile',
    component: Profile
  },
  {
    id: 'text-editor',
    path: '/viade_es3b/text-editor',
    component: TextEditor
  },
  {
    id: 'map',
    path: '/viade_es3b/Map',
    component: Mapa
  },
  {
     id: 'upload',
    path: '/viade_es3b/upload',
    component: Uploader
  },
  {
    id: 'friends',
    path: '/viade_es3b/friends',
    component: Friends

  },
  {
    id: 'formmodelconverter',
    path: '/viade_es3b/formmodel/converter',
    component: FormModelConverter
  },
  {
    id: 'formmodelrenderer',
    path: '/viade_es3b/formmodel/renderer',
    component: FormModelRenderer
  }
];

const Routes = () => (
  <Router>
    <Fragment>
      <Switch>
        <NotLoggedInLayout component={Login} path="/viade_es3b/login" exact />
        <NotLoggedInLayout component={Register} path="/viade_es3b/register" exact />
        <NotLoggedInLayout path="/viade_es3b/register/success" component={RegistrationSuccess} exact />
        <PublicLayout path="/viade_es3b/404" component={PageNotFound} exact />
        <Redirect from="/" to="/viade_es3b/welcome" exact />
        <PrivateLayout path="/viade_es3b/" routes={privateRoutes} />
        <Redirect from="/login" to="/viade_es3b/login" exact />
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
