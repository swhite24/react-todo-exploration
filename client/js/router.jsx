/**
 * client/js/router.jsx
 * Client side routing
 */

import React from 'react';
import Router from 'react-router';
import App from './pages/App';
import Todos from './pages/Todos';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import RouterContainer from './util/RouterContainer';

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
let router = Router.create({ routes });
RouterContainer.set(router);

export default (el) => {
  router.run((Handler, state) => {
    let params = state.params;
    React.render(<Handler params={params} />, el);
  });
};
