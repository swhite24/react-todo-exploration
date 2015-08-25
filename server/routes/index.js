/**
 * server/routes/index.js
 * Entry point into server routes
 */

import express from 'express';
import expressJwt from 'express-jwt';
import config from 'config';
import * as todo from './todo';
import * as auth from './user';

const jwtConfig = config.get('jwt');

export default (app) => {

  // Create frontend route
  app.get('/', (req, res) => {
    res.render('index');
  });

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

  // Add todo routes to router
  router.use(expressJwt({ secret: jwtConfig.secret }), todoRouter);

  // Use api router
  app.use('/api', router);
};
