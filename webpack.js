/**
 * server/webpack.js
 * Create webpack dev server for hot loading
 */

var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true
  }
});

server.listen(3001, 'localhost', function() {
  console.log('WebpackDevServer listening on: ', 3001);
});
