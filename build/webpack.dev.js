const base = require('./webpack.base');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(base, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    hot: true,
    port: '7001'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
