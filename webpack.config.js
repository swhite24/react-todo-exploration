
var webpack = require('webpack');
var path = require('path');

module.exports = {
  cache: true,
  context: path.join(__dirname, 'client', 'js'),
  entry: './app.jsx',
  output: {
    filename: 'main.js',
    path: __dirname + '/public/js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: [ 'babel?experimental&stage=1' ],
      exclude: /node_modules|bower_components/
    }]
  }
};
