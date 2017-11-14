const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const isProduction = EmberApp.env() === 'production';

module.exports = function(defaults) {
  console.error("defaults.project.pkg.name", defaults.project.pkg.name);

  const addonBlacklist = isProduction
    ? ['ember-freestyle'] // Excludes addons from vendor.js in production
    : []; // Excludes addons from vendor.js

  const app = new EmberApp(defaults, {
    // Add options here
    'autoprefixer': {
      browsers: [
        'last 3 versions',
        'ie >= 11',
        'iOS >= 10',
        'Android >= 6'
      ],
      cascade: false
    },
    'funnel': {
      enabled: isProduction,
      exclude: [
        `${defaults.project.pkg.name}/pods/styleguide/**/*`, // Remove ember-freestyle route from <app>.js in production
        `${defaults.project.pkg.name}/pods/test-page/**/*` // TODO: extend with pages, which are not needed in your project on production
      ]
    },
    'freestyle': {
      snippetSearchPaths: isProduction ? [] : null // Remove ember-freestyle snippets from <app>.js in production
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
        // '/styleguide',
        '/test-page'
      ],
      includeClientScripts: true
    },
    'addons': {
      blacklist: addonBlacklist
    }
  });

  // Removes the style-guide CSS when building for production
  if (!isProduction) {
    delete app.options.outputPaths.app.css.app;
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
