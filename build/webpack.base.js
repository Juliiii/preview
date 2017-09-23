const path = require('path');
const CleanWepackPlugin = require('clean-webpack-plugin');
const HtmlWepackPlugin = require('html-webpack-plugin');

function resolve (url) {
  return path.join(__dirname, url);
}

module.exports = {
  entry: resolve('../src/index.js'),
  output: {
    filename: 'bundle.[hash].js',
    path: resolve('../dist')
  },
  resolve: {
    extensions: ['.js', '.css']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: resolve('../src')
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'postcss-loader', options: require('./postcss.config') }
        ]
      }
    ]
  },
  plugins: [
    new CleanWepackPlugin(['dist']),
    new HtmlWepackPlugin(),
  ]
};