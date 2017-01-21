/*eslint-env node */
const merge = require('webpack-merge')
const webpack = require('webpack')
const loaderConfig = require('./loader.config.js')

var createLibrary = (name, libraryName) => ({
  entry: `./src/${name}`,
  output: {
    library: libraryName,
    libraryTarget: 'umd',
    filename: `h5-${name}.js`,
    path: './dist',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: loaderConfig.getVueRule(),
      }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
});

var ShopView = merge(createLibrary('shopview', 'ShopView'), require('./webpack.base'))
var ShopList = merge(createLibrary('shoplist', 'ShopList'), require('./webpack.base'))

module.exports = [ShopView, ShopList]
