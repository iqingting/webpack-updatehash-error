module.exports = [
  require('postcss-nested'),
  require('postcss-cssnext')({
    browsers: [
      'last 2 versions',
      'iOS >= 7',
      'Android >= 4.0',
    ],
  }),
  require('postcss-flex-fallback'),
  require('postcss-px2rem')({
    remUnit: 75,
  }),
]

