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

  postprocessTree: function(type, tree) {
    if (this.environment === 'production') {
      this.ui.writeLine(`addon-styleguide is excluding ${type} because this is a ${this.environment} build.`);
      if (type === 'template' || type === 'js') {
        return stew.rm(tree, '*/pods/styleguide-freestyle/**/*');
      }
    }

    return tree;
  }

};
