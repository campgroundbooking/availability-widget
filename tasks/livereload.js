'use strict';
import clientConfig from './config';
import BrowserSync from 'browser-sync';

const browserSync = BrowserSync.create();
clientConfig.browserSync = browserSync;

module.exports = function() {
  return function() {
    browserSync.init({
      server: {
        baseDir: './dist'
      }
    });
  }
};

module.exports.notifyChanged = function (files) {
  browserSync.reload(files);
};
