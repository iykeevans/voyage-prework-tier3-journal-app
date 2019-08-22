const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.js',
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client', 'dist'),
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.(scss|css)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpeg|jpg|gif|svg)$/, use: 'file-loader' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, use: 'file-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/public/index.html'
    })
  ]
};