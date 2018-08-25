// const webpack = require('webpack');
const path = require('path');

module.exports = {
  // context: __dirname + '/client/public',
  entry: `${__dirname}/client/index.jsx`,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components|webpack.config.js)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(`${__dirname}/public/dist`),
    filename: 'bundle.js',
  },
};