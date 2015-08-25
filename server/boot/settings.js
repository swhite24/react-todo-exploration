/**
 * boot/settings.js
 * Express settings
 */

import path from 'path';
import express from 'express';
import bodyparser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';

const settings = function(app) {

  // Set env
  app.set('env', process.env.NODE_ENV);

  // Setup views
  app.set('views', path.resolve(__dirname, '..', 'views'));
  app.set('view engine', 'jade');
  app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));

  app.use(morgan('dev'));

  // Setup body parser
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(compression());

  app.disable('x-powered-by');
};

export default settings;
