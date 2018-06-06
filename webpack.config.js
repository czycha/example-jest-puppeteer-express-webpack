const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.min.js',
    library: 'foo'
  },
  mode: 'production'
}
