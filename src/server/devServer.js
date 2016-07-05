const path = require('path');
const cwd = process.cwd();
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require(path.resolve(cwd, 'webpack.config.dev'));

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(7001, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:7001/');
});
