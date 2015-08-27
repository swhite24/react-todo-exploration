/**
 * boot/settings.js
 * Express settings
 */

import path from 'path';
import express from 'express';
import bodyparser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import sessions from 'client-sessions';
import config from 'config';

const settings = function(app) {

  // Pull out session conf
  const sessionConf = config.get('session');

  // Set env
  app.set('env', process.env.NODE_ENV);

  // Setup views
  app.set('views', path.resolve(__dirname, '..', 'views'));
  app.set('view engine', 'jade');
  app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));

  // Setup logging
  app.use(morgan('dev'));

  // Setup body parser
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(compression());

  // Setup sessions
  app.use(sessions({
    cookieName: 'todo-session',
    requestKey: 'session',
    secret: sessionConf.secret,
    duration: sessionConf.exp
  }));

  // Disable x-powered-by header
  app.disable('x-powered-by');
};

export default settings;
