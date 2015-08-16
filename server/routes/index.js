/**
 * server/routes/index.js
 * Entry point into server routes
 */

import express from 'express';
import {list, create, update, toggle, remove} from './api';

const routes = function(app) {

  // Create frontend route
  app.get('/', (req, res) => {
    res.render('index');
  });

  // Create api router
  let router = express.Router();
  router.get('/', list);
  router.post('/', create);
  router.put('/:id', update);
  router.post('/:id/toggle', toggle);
  router.delete('/:id', remove);

  // Use api router
  app.use('/api/todos', router);
};

export default routes;
