/*eslint-env node */
const ruleConfig = require('./loader.config.js')
const merge = require('webpack-merge')

module.exports = merge({
  entry: './example',
  module: {
    rules:  [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: ruleConfig.getVueRule()
      }
    ]
  },
  output: {
    filename: 'build.js',
    path: __dirname,
    publicPath: '/',
  },
  devServer: {
    proxy: {
      '/api/**': {
        target: 'https://mainsite-restapi.ele.me',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        },
      },
    },
  },
}, require('./webpack.base'))
