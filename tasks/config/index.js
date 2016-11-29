'use strict';

module.exports = {
  client: {
    source: ['src/**/*.{html,css}', '!**/app/**'],
    destination: 'dist',
    app: ['src/**/*.js']
  },
  demo: {
    source: ['demo/**/*'],
    destination: 'dist',
    app: ['src/**/*.js']
  },
  config: {
    source: ['config/**/*'],
    destination: 'dist/config',
  },
  general: {
    source: ['*.json', 'Procfile', '.babelrc'],
    destination: 'dist'
  },
  build: {
    destination: 'dist'
  }
};
