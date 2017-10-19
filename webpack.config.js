const path = require('path');

const APP   = path.join(__dirname, 'app/index.js');
const STYLE = path.join(__dirname, 'src/styles/app.scss');
const DIST  = path.join(__dirname, 'dist');

module.exports = {
  entry: APP,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },
  output: {
    path: DIST,
    filename: '[name].js'
  }
};
