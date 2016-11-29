import gulp from 'gulp';
import sass from 'gulp-sass';
import BrowserSync from 'browser-sync';
import cssnano from 'gulp-cssnano';

import config from './config';

const clientConfig = config.client;

module.exports = function (singleRun) {
  return function () {
    let gulpStream = gulp.src('./client/**/*.scss').pipe(sass.sync().on('error', sass.logError));

    if (singleRun) {
      gulpStream = gulpStream.pipe(cssnano());
    }

    return gulpStream
      .pipe(gulp.dest(clientConfig.destination))
      .pipe(config.browserSync.stream());
  }
};
