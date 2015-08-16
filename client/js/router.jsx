/**
 * client/js/router.jsx
 * Client side routing
 */

import React from 'react';
import Router from 'react-router';
import App from './pages/App';
import TodoList from './components/TodoList';

const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
// const NotFoundRoute = RouterNotFound.Route;

const routes = (
  <Route handler={App} path='/'>
    <DefaultRoute name="list" handler={TodoList} />
  </Route>
);

export default (el) => {
  Router.run(routes, (Handler, state) => {
    let params = state.params;
    React.render(<Handler params={params} />, el);
  });
};
