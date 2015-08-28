/**
 * server/webpack.js
 * Create webpack dev server for hot loading
 */

var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var webpackConf = require('./webpack.dev-config');
var config = require('config');
var port = config.get('webpack-port');

var server = new WebpackDevServer(webpack(webpackConf), {
  publicPath: webpackConf.output.publicPath,
  hot: true,
  stats: {
    colors: true
  }
});

server.listen(port, 'localhost', function() {
  console.log('WebpackDevServer listening on: ', port);
});
