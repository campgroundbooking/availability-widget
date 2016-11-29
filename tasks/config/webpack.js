'use strict';
let path = require('path');
let webpack = require('webpack');
let config = require('./index').client;
let coverageEnabled = process.env.COVERAGE_ENABLED === 'true';
let babelPlugins = [];

if (coverageEnabled) {
  babelPlugins.push('__coverage__');
}

module.exports = {
  entry: {
    'campgroundbooking-widget': ['babel-polyfill', './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../../', config.destination),
    filename: '[name].js'
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015', 'stage-0'],
          plugins: babelPlugins
        }
      },
      { test: /\.css$/, loader: 'raw-loader' },
      {
        test: /\.html/,
        loader: 'html',
        query: {
          minimize: true,
          removeAttributeQuotes: false,
          caseSensitive: true,
          // Teach html-minifier about Angular 2 syntax
          customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
          ],
          customAttrAssign: [/\)?\]?=/]
        }
      },
      { test: /\.scss$/, loaders: ['to-string', 'css', 'postcss', 'resolve-url', 'sass?sourceMap'] },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],
  },

  node: {
    fs: "empty"
  },

  resolve: {
    root: __dirname,
    extensions: ['','.js','.json']
  },

  plugins: [
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify('development')
    })
  ],
  devtool: 'cheap-source-map'
};
