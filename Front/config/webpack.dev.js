var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const host = process.env.npm_config_host || '127.0.0.1';
const port = process.env.npm_config_port || '3001';

console.log('----------------------');
console.log({ host: host });
console.log({ port: port });
console.log('----------------------');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: `http://${host}:${port}/`,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    port: port,
    historyApiFallback: true,
    stats: 'minimal',
    proxy: {
      '/api/*': {
        target: `http://${host}:${--port}/`,
        secure: false
      }
    }
  }
});

