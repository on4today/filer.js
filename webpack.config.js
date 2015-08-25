'use strict';

var path = require('path');

module.exports = {
  entry: {
    index: path.join(__dirname, './src/filer.js')
  },
  output: {
    filename: '[name].js',
    path: __dirname,
    library: 'Filer',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: require.resolve('./src/filer.js'),
        loaders: [
          'imports?this=>global,FileError=>global.FileError',
          'exports?Filer'
        ]
      }
    ]
  },
  bail: true
};
