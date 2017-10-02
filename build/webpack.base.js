const path = require('path');
const CleanWepackPlugin = require('clean-webpack-plugin');
const HtmlWepackPlugin = require('html-webpack-plugin');

function resolve (url) {
  return path.join(__dirname, url);
}

module.exports = {
  entry: resolve('../src/index.js'),
  output: {
    filename: 'main.js',
    path: resolve('../dist'),
    libraryTarget: 'umd',
    library: 'previewjs'
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
          { loader: 'css-loader', options: { minimize: true }},
          { loader: 'postcss-loader', options: require('./postcss.config') }
        ]
      }
    ]
  },
  plugins: [
    new CleanWepackPlugin(['dist'], { root: resolve('..') }),
    new HtmlWepackPlugin(),
  ]
};
