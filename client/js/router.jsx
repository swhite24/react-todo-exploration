/**
 * client/js/router.jsx
 * Client side routing
 */

import React from 'react';
import Router from 'react-router';
import App from '../../shared/pages/App';
import Todos from '../../shared/pages/Todos';
import Login from '../../shared/pages/Login';
import Register from '../../shared/pages/Register';
import Profile from '../../shared/pages/Profile';
import RouterContainer from '../../shared/util/RouterContainer';

const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;

const routes = (
  <Route handler={App} path='/'>
    <DefaultRoute name='list' handler={Todos} />
    <Route name='login' handler={Login} />
    <Route name='register' handler={Register} />
    <Route name='profile' handler={Profile} />
  </Route>
);

// Create router instance
let router = Router.create({
  routes,
  location: Router.HistoryLocation
});
RouterContainer.set(router);

export default router;
