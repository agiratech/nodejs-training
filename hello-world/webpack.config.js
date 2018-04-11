const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            // camelCase: true,
            sourceMap: true
          }
        }
      ]
    },
    {
      test: /\.svg$/,
      loaders: [
        'babel-loader',
        {
          loader: 'react-svg-loader',
          query: {
            jsx: true
          }
        },
      ]
    },
    {
      test: /\.json$/,
      loader: 'json-loader',
    },
    {
      test: /\.(jpg|jpeg|gif|png|ico)$/,
      exclude: /node_modules/,
      loader:'file-loader?name=img/[path][name].[ext]&context=./app/images'
   }
  ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
