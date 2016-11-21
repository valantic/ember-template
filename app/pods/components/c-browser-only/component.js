import Ember from 'ember';

const { Component, inject } = Ember;

// Component is used to stop ember-cli-fastboot rendering content, which is only for a browser.
// Mostly this prevents to run jQuery, which isn't supported in ember-cli-fastboot
// Solution by: https://github.com/mitchlloyd/ember-islands/pull/28

export default Component.extend({
  tagName: '',
  fastboot: inject.service()
});
