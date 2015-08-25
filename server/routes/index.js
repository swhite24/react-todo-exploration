/**
 * server/routes/index.js
 * Entry point into server routes
 */

import express from 'express';
import * as todo from './todo';
import * as auth from './user';

const routes = function(app) {

  // Create frontend route
  app.get('/', (req, res) => {
    res.render('index');
  });

  // Create api router
  let router = express.Router();

  // Todo routes
  router.get('/todos/?', todo.list);
  router.post('/todos/?', todo.create);
  router.put('/todos/:id', todo.update);
  router.post('/todos/:id/toggle', todo.toggle);
  router.delete('/todos/:id', todo.remove);

  // User routes
  router.post('/login', auth.login);
  router.post('/register', auth.register);

  // Use api router
  app.use('/api', router);
};

export default routes;
