const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(config, {
  mode: "production",
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'iframe-resize.bundle.js',
  },
  plugins: [ 
    new CleanWebpackPlugin()
  ]
})