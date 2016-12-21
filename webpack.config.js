var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  resolve: {
    fallback: process.env.NODE_PATH,
  },
  resolveLoader: {
    fallback: process.env.NODE_PATH,
  },
  entry: {
    example: [
      'webpack-dev-server/client?http://localhost:3002',
      'webpack/hot/only-dev-server',
      './example/index.js',
    ],
  },
  output: {
    path: './lib',
    filename: 'bundle.js',
    publicPath: 'http://localhost:3002/lib/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.css$/, loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass',
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loaders: ['react-hot', 'babel-loader'],
      },
      {
        test: /node_modules\/lodash-es\//,
        loaders: ['react-hot', 'babel-loader'],
      },

    ],
  },
  devServer: {
    port: 8080,
    inline: true,
    hot: true,
    publicPath: '/',
    contentBase: './',
    headers: { 'Access-Control-Allow-Origin': '*' },
    devtool: 'eval',
  },
};
