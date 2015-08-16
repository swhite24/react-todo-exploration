
var webpack = require('webpack');

module.exports = {
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server',
      './client/js/app'
    ]
  },
  output: {
    publicPath: 'http://localhost:3001/public/js',
    filename: '[name].js',
    path: __dirname + '/public/js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: [ 'react-hot', 'babel?experimental' ],
      exclude: /node_modules|bower_components/
    }, {
      test: /\.scss$/,
      loaders: [ 'style', 'css', 'sass' ]
    }]
  }
};
