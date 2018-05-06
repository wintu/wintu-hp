'use strict'
const config = require('./webpack.config.base')
const path = require('path')

config.mode = 'development'
config.output = {
  path: path.join(__dirname, '../test_build')
}

module.exports = config
