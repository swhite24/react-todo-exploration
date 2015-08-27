/**
 * server/routes/index.js
 * Entry point into server routes
 */

import express from 'express';
import expressJwt from 'express-jwt';
import config from 'config';
import * as todo from './todo';
import * as auth from './user';
import User from '../models/user';

import React from 'react';
import Router from 'react-router';
import routes from '../../shared/routes';
import alt from '../../shared/alt';
import Iso from 'iso';

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
  app.get('/*', loadUser, (req, res) => {
    let iso = new Iso();
    let data = {};
    if (req.session.token) data.AuthStore = { token: req.session.token.token };

    alt.bootstrap(JSON.stringify(data));

    let router = Router.create({
      routes,
      location: req.url,
      onAbort: function(options) {
        res.redirect(options.to);
      }
    });

    router.run((Handler, state) => {
      let content = React.renderToString(<Handler />);
      iso.add(content, alt.flush());
      res.render('index', { content: iso.render() });
    });
  });
};

function loadUser(req, res, next) {
  if (!req.user) return next();
  User.findById(req.user._id, (err, user) => {
    if (user) req.user = user;
    next();
  });
}
