/**
 * shared/routes.jsx
 * App routes
 */

import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import App from './pages/App';
import Todos from './pages/Todos';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NotFoundPage from './pages/NotFoundPage';

export default (
  <Route handler={App} path='/'>
    <DefaultRoute name='list' handler={Todos} />
    <Route name='login' handler={Login} />
    <Route name='register' handler={Register} />
    <Route name='profile' handler={Profile} />
    <NotFoundRoute handler={NotFoundPage} />
  </Route>
);
