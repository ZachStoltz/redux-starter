
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:7000/',
    'webpack/hot/only-dev-server',
    './launcher'
  ],
  output: {
    path: path.join(__dirname, '/static/'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }],
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    modulesDirectores: [
      'node_modules',
      'client'
    ]
  }
};
