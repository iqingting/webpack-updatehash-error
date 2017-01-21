'use strict'
const ENV = process.env.NODE_ENV || 'development'

module.exports = {
  getVueRule() {
    return {
      autoprefixer: false,
      cssModules: {
        localIdentName: `${ENV === 'development' ? '[name]-[local]_' : '[name]-'}[hash:base64:5]`,
        camelCase: true,
      },
      loaders: {
        js: 'buble-loader',
      },
      postcss: require('./postcss.config.js'),
    }
  },
}

