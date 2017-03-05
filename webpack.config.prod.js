// webpack.config.prod.js

var path = require('path');
var webpack = require('webpack');

module.exports = {
  'devtool': 'source-map',
  'entry': [
    './client/reduxstagram'
  ],
  'output': {
    'path': path.join(__dirname, 'dist'),
    'filename': 'bundle.js',
    'publicPath': '/static/',
  },
  'plugins': [
    new webpack.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      'compressor': {
        'warnings': false
      }
    })
  ],
  'module' : {
    'loaders': [
      // js
      {
        'test': /\.js$/,
        'loaders': ['babel'],
        'include': path.join(__dirname, 'client')
      },
      // css
      {
        'test': /\.css$/,
        'loaders': 'style-loader!css-loader!stylus-loader',
        'include': path.join(__dirname, 'client')
      }
    ]
  }
};
