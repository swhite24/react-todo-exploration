/**
 * server/routes/index.js
 * Entry point into server routes
 */

import express from 'express';
import {list, create, update} from './api';

const routes = function(app) {

  // Create frontend route
  app.get('/', (req, res) => {
    res.render('index');
  });

  // Create api router
  var router = express.Router();
  router.get('/', list);
  router.post('/', create);
  router.put('/:id', update);

  // Use api router
  app.use('/api/todos', router);
};

export default routes;
