/**
 * server/routes/index.js
 * Entry point into server routes
 */

import express from 'express';
import expressJwt from 'express-jwt';
import config from 'config';
import _ from 'lodash';
import * as todo from './todo';
import * as auth from './user';
import User from '../models/user';

import React from 'react';
import Router from 'react-router';
import routes from '../../shared/routes';
import alt from '../../shared/alt';
import Iso from 'iso';
import bootstrap from './bootstrap';

const jwtConfig = config.get('jwt');

export default (app) => {

  // Create api router
  let router = express.Router();
  let todoRouter = express.Router();

  // Todo routes
  todoRouter.get('/todos/?', todo.list);
  todoRouter.post('/todos/?', todo.create);
  todoRouter.put('/todos/:id', todo.update);
  todoRouter.post('/todos/:id/toggle', todo.toggle);
  todoRouter.delete('/todos/:id', todo.remove);

  // User routes
  router.post('/login', auth.login);
  router.post('/register', auth.register);
  router.post('/logout', auth.logout);

  // Add todo routes to router, using jwt
  router.use(expressJwt({ secret: jwtConfig.secret }), loadUser, todoRouter);

  // Use api router
  app.use('/api', router);

  // Create frontend route
  app.get('/*', bootstrap, (req, res) => {
    // Create iso instance
    let iso = new Iso();

    // Bootstrap alt
    alt.bootstrap(JSON.stringify(_.pick(res.locals, 'AuthStore', 'TodoStore')));

    // Create router
    let router = Router.create({
      // Add routes
      routes,
      // Provide current URL
      location: req.url,
      // Handle client side transitions -> redirect
      onAbort: function(options) {
        res.redirect(options.to);
      }
    });

    // Run router
    router.run((Handler, state) => {
      // Render page
      let content = React.renderToString(<Handler />);

      // Load iso with bootstrapped data
      iso.add(content, alt.flush());

      // Render view
      res.render('index', { content: iso.render() });
    });
  });
};

/**
 * Translates jwt req.user to mongoose user
 */
function loadUser(req, res, next) {
  if (!req.user) return next();
  User.findById(req.user._id, (err, user) => {
    if (user) req.user = user;
    next();
  });
}
