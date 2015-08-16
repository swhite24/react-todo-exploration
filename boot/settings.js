/**
 * boot/settings.js
 * Express settings
 */

import path from 'path';
import express from 'express';
import bodyparser from 'body-parser';

const settings = function(app) {

  // Set env
  app.set('env', process.env.NODE_ENV);

  // Setup views
  app.set('views', path.resolve(__dirname, '..', 'server', 'views'));
  app.set('view engine', 'jade');
  app.use(express.static(path.resolve(__dirname, '..', 'public')));

  // Setup body parser
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));

  app.disable('x-powered-by');
};

export default settings;
