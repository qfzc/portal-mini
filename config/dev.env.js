var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  REDIRECT_URL: '"https://csmh.hngwmt.com/base"',
  IMG_FILE_PATH: '"/archive/resource/img/"'
})
