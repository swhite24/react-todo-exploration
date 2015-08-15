/**
 * boot/settings.js
 * Express settings
 */

import path from 'path';

const settings = function(app) {

  app.set('env', process.env.NODE_ENV);
  app.set('views', path.resolve(__dirname, '..', 'server', 'views'));
  app.set('view engine', 'jade');

};

export default settings;
