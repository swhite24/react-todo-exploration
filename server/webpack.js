/**
 * server/webpack.js
 * Create webpack dev server for hot loading
 */

import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from '../../webpack.config';

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.ouput.publicPath,
  hot: true,
  stats: {
    colors: true
  }
});


server.listen(3001, 'localhost', () => {
  console.log('WebpackDevServer listening on: ', 3001);
});
