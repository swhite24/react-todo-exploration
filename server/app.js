/**
 * server/app.js
 * Entry point into application server
 */

import express from 'express';
import http from 'http';
import config from 'config';

import settings from './boot/settings';
import db from './boot/db';
import routes from './routes';

// Create app
const app = express();

// Configure app
settings(app);
db();

// Setup routes
routes(app);

// Create / start server
const port = process.env.PORT || config.get('port');
http.createServer(app).listen(port, () => {
  console.log('server listening on:', port);
});
