/**
 * server/app.js
 * Entry point into application server
 */

import express from 'express';
import http from 'http';

import settings from '../boot/settings';
import db from '../boot/db';
import routes from './routes';

// Create app
const app = express();

// Configure app
settings(app);
db();

// Setup routes
routes(app);

// Create / start server
http.createServer(app).listen(3000, () => {
  console.log('server listening on:', 3000);
});
