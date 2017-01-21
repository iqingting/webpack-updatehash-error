'use strict';

const path = require('path')
const webpack = require('webpack')
const svgoConfig = require('./svgo.config')

module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      }, {
        enforce: 'pre',
        test: /\.svg$/,
        loader: 'svgo-loader?' + JSON.stringify(svgoConfig)
      }, {
        test: /\.js$/,
        loader: 'buble-loader',
      }, {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'url-loader?limit=10000',
      }, {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.vue', '.js'],
    modules: [
      path.join(__dirname, '../src'),
      'node_modules',
    ],
  },
  externals: {
    'vue': 'Vue',
  },
}
