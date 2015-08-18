/**
 * server/routes/index.js
 * Entry point into server routes
 */

import express from 'express';
import * as todo from './todo';

const routes = function(app) {

  // Create frontend route
  app.get('/', (req, res) => {
    res.render('index');
  });

  // Create api router
  let router = express.Router();

  // Todo routes
  router.get('/', todo.list);
  router.post('/', todo.create);
  router.put('/:id', todo.update);
  router.post('/:id/toggle', todo.toggle);
  router.delete('/:id', todo.remove);

  // User routes

  // Use api router
  app.use('/api/todos', router);
};

export default routes;
