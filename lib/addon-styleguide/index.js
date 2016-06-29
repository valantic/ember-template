var stew = require('broccoli-stew');

module.exports = {
  name: 'addon-styleguide',

  environment: 'test',

  config: function(environment, appConfig) {
    this.environment = environment;

    return appConfig;
  },

  isDevelopingAddon: function() {
    return true;
  },

  preprocessTree: function(type, tree) {
    if (this.environment === 'production') {
      if (type === 'css') {
        this.ui.writeLine(`preProcessTree is checking ${type} in a ${this.environment} build.`);

        return stew.rm(tree, '*/styles/style-guide.scss');
      }
    }

    return tree;
  },

  postprocessTree: function(type, tree) {
    if (this.environment === 'production') {
      if (type === 'template') {
        this.ui.writeLine(`postprocessTree is checking ${type} in a ${this.environment} build.`);

        return stew.rm(tree, '*/pods/styleguide-freestyle/**/*');
      }
    }

    return tree;
  },

  preBuild: function(result) {
    if (this.environment === 'production') {
      this.ui.writeLine('preBuild');
    }
  },

  postBuild: function(result) {
    if (this.environment === 'production') {
      this.ui.writeLine(`postBuild on ${result.directory}.`);
    }
  }

};
