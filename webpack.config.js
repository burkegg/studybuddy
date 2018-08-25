const path = require('path');
module.exports = {
  entry: `${__dirname}/client/index.jsx`,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules|webpack.config.js/,
        use: {
          loader: "babel-loader",
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