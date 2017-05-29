/*
jshint node:true
global require, module */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const isProduction = EmberApp.env() === 'production';

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    'autoprefixer': {
      browsers: [
        'last 3 versions',
        'ie 10',
        'iOS 8',
        'Android 4.4'
      ],
      cascade: false
    },
    'svgJar': {
      strategy: ['symbol', 'inline'],

      symbol: {
        sourceDirs: ['svgs', 'public/assets/svg/symbol'],
        outputFile: '/assets/svg/symbol/symbols.svg',
        includeLoader: true
      },

      inline: {
        sourceDirs: ['svgs', 'public/assets/svg/inline']
      }
    },
    'storeConfigInMeta': false,
    'sassOptions': {
      includePaths: [
        'app/pods/components',
        'bower_components/bootstrap-sass/assets/stylesheets/'
      ]
    },
    'outputPaths': {
      app: {
        css: {
          // default: 'app': '/assets/project-name.css' has not to be here
        }
      }
    },
    'ember-cli-staticboot': {
      paths: [
        '/',
        '/styleguide',
        '/test-page'
      ],
      includeClientScripts: false
    }
  });

  // Removes the style-guide CSS when building for production
  if (!isProduction) {
    delete app.options.outputPaths.app.css['app'];
    app.options.outputPaths.app.css = { 'app-and-styleguide': '/assets/ember-project-template.css' };
  }

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
