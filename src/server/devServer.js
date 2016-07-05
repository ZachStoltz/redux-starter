const path = require('path');
const cwd = process.cwd();
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require(path.resolve(cwd, 'webpack.config.dev'));
const express = require('express');
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exhbs({defaultLayout: 'main', extname: '.hbs', layoutsDir: path.join(__dirname, 'views/layouts')}));
app.set('view engine', '.hbs');
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/test', (req, res) => {
  res.status(200).send('world');
});
app.listen(7001, 'localhost', (err, result) => {
  if(err) {
    return console.log(err);
  }
  console.log('Express App listening @ port 7001');
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
    "*": "http://localhost:7001"
  }
}).listen(7000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Webpack Dev Server listening @ port 7000');
});
